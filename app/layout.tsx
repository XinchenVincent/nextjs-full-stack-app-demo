/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-02 19:25:03
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-04 00:37:35
 * @FilePath: /nextjs-project/full-stack-app-demo/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "../components/LightRays";
import Navbar from "../components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
	variable: "--font-schibsted-grotesk",
	subsets: ["latin"],
});

const martianMono = Martian_Mono({
	variable: "--font-martian-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "DevEvent",
	description:
		"DevEvent is a platform for developers to find and attend events",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
			>
				<Navbar />
				<div className="absolute inset-0 top-0 z-[-1] min-h-screen">
					<LightRays
						raysOrigin="top-center-offset"
						raysColor="#5dfeca"
						raysSpeed={0.5}
						lightSpread={0.9}
						rayLength={1.4}
						followMouse={true}
						mouseInfluence={0.02}
						noiseAmount={0.0}
						distortion={0.01}
					/>
				</div>
				<main>{children}</main>
			</body>
		</html>
	);
}
