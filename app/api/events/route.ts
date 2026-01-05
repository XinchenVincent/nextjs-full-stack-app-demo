/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-05 11:03:06
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-05 18:42:14
 * @FilePath: /nextjs-project/full-stack-app-demo/app/api/events/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest) {
	try {
		await connectDB();

		const formData = await req.formData();

		let event;

		try {
			event = Object.fromEntries(formData.entries());
		} catch (e) {
			return NextResponse.json(
				{
					message: "Invalid Form Data",
					error: e instanceof Error ? e.message : "Unknown error",
				},
				{ status: 400 }
			);
		}

		const file = formData.get("image") as File;
		if (!file)
			return NextResponse.json(
				{ message: "Image is required" },
				{ status: 400 }
			);

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const uploadResult = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{ resource_type: "image", folder: "DevEvents" },
					(error, results) => {
						if (error) return reject(error);
						resolve(results);
					}
				)
				.end(buffer);
		});

		event.image = (
			uploadResult as unknown as { secure_url: string }
		).secure_url;

		const createdEvent = await Event.create(event);
		return NextResponse.json(
			{ message: "Event Created Successfully", event: createdEvent },
			{ status: 201 }
		);
	} catch (e) {
		console.error("Error creating event:", e);
		return NextResponse.json(
			{
				message: "Event Creation Failed",
				error: e instanceof Error ? e.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		await connectDB();

		const events = await Event.find().sort({ createdAt: -1 });
		return NextResponse.json(
			{ message: "Events Fetched Successfully", events },
			{ status: 200 }
		);
	} catch (e) {
		return NextResponse.json(
			{
				message: "Event Fetching Failed",
				error: e,
			},
			{ status: 500 }
		);
	}
}
