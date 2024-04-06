import styles from "./cover.module.css";
import CoverImage from "@/assets/coverImage.webp";

export default function CoverPage() {
	return (
		<div
			className={`${styles.homeContainer}`}
			style={{ backgroundImage: `url(${CoverImage.src})` }}
		></div>
	);
}
