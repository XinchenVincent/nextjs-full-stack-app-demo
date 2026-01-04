/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-03 23:13:43
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-03 23:31:22
 * @FilePath: /nextjs-project/full-stack-app-demo/components/Navbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
	const handleLogoClick = () => {
		posthog.capture("logo_clicked", {
			nav_location: "header",
		});
	};

	const handleNavClick = (linkName: string) => {
		posthog.capture(`nav_${linkName}_clicked`, {
			nav_location: "header",
			link_name: linkName,
		});
	};

	return (
		<header>
			<nav>
				<Link href="/" className="logo" onClick={handleLogoClick}>
					<Image src="/icons/logo.png" alt="logo" width={24} height={24} />
					<p>DevEvent</p>
				</Link>

				<ul>
					<li>
						<Link href="/" onClick={() => handleNavClick("home")}>Home</Link>
					</li>
					<li>
						<Link href="/" onClick={() => handleNavClick("events")}>Events</Link>
					</li>
					<li>
						<Link href="/" onClick={() => handleNavClick("create_event")}>Create Event</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
