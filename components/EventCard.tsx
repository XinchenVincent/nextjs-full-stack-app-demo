/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-03 23:39:30
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-04 00:44:54
 * @FilePath: /nextjs-project/full-stack-app-demo/components/EventCard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface Props {
	title: string;
	image: string;
	slug: string;
	location: string;
	date: string;
	time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
	const handleClick = () => {
		posthog.capture("event_card_clicked", {
			event_title: title,
			event_slug: slug,
			event_location: location,
			event_date: date,
			event_time: time,
		});
	};

	return (
		<Link href={`/events/`} id="event-card" onClick={handleClick}>
			<Image
				src={image}
				alt={title}
				width={410}
				height={300}
				className="poster"
			/>
			<div className="flex flex-row gap-2">
				<Image src="/icons/pin.svg" alt="location" width={14} height={14} />
				<p className="location">{location}</p>
			</div>
			<p className="title">{title}</p>
			<div className="datetime">
				<div>
					<Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
					<p className="date">{date}</p>
				</div>
				<div>
					<Image src="/icons/clock.svg" alt="time" width={14} height={14} />
					<p className="time">{time}</p>
				</div>
			</div>
		</Link>
	);
};

export default EventCard;
