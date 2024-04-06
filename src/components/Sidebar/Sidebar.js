"use client";

import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
	const [sidebarShow, setSidebarShow] = useState(false);
	const toggleNav = () => {
		const body = document.querySelector("body");
		if (sidebarShow) {
			body.style.overflow = "";
		} else {
			body.style.overflow = "hidden";
		}
		setSidebarShow((prev) => !prev);
	};
	return (
		<div className={`${styles.sidebarContainer}`}>
			<button
				className={`${styles.navToggle} ${
					sidebarShow ? styles.navActive : ""
				} cursor-pointer h-8`}
				onClick={toggleNav}
			></button>

			<div
				className={`${styles.navItems} ${
					sidebarShow ? styles.navItemsActive : ""
				}`}
			>
				<Link href="/" onClick={toggleNav}>
					HOME
				</Link>
				<Link href="/about" onClick={toggleNav}>
					ABOUT
				</Link>
				<Link href="/news" onClick={toggleNav}>
					NEWS
				</Link>
				<Link href="/videos" onClick={toggleNav}>
					VIDEOS
				</Link>
				<Link href="/contact" onClick={toggleNav}>
					CONTACT
				</Link>
			</div>
		</div>
	);
}
