import React from "react";
import styles from "./article.module.css";
import Image from "next/image";
import NewsImage from "@/assets/aboutImage.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function Article({
	title,
	description,
	newsPortal,
	image,
	date,
	link,
}) {
	return (
		<div
			className={`${styles.newsArticle} shadow-xl p-4 cursor-pointer pb-10`}
		>
			<Link href={link} target="_blank">
				<p className="mb-2">{newsPortal}</p>
				<Image
					src={NewsImage.src}
					width={400}
					height={400}
					alt={title}
					className={styles.image}
				/>
				<p className="text-xs my-2 pl-2 text-gray-400">
					<FaRegCalendarAlt
						style={{
							display: "inline",
							fontSize: "14px",
							fontWeight: "900",
							marginTop: "-3px",
							marginRight: "5px",
						}}
					/>{" "}
					{date}
				</p>
				<div className="text-content px-4 mt-8">
					<p className="font-medium text-lg">{title}</p>
					<p
						className={`${styles.description} text-sm font-light mt-2 text-gray-500`}
					>
						{description}
					</p>
				</div>
			</Link>
		</div>
	);
}
