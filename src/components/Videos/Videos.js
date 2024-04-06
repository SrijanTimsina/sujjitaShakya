import React from "react";
import styles from "./videos.module.css";

const videos = [
	"yKNxeF4KMsY",
	"yKNxeF4KMsY",
	"yKNxeF4KMsY",
	"yKNxeF4KMsY",
	"yKNxeF4KMsY",
];

export default function Videos({ page }) {
	return (
		<div className={styles.videosContainer}>
			{videos.map((video, index) => {
				return <Video link={video} key={`${video}${index}`} />;
			})}
		</div>
	);
}

function Video({ link }) {
	return (
		<iframe
			src={`https://www.youtube.com/embed/${link}`}
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
			width={"100%"}
			style={{
				aspectRatio: "1/0.56",
				boxShadow: "0 0 5px 1px rgba(0,0,0,0.6)",
			}}
		></iframe>
	);
}
