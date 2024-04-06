import React from "react";
import Article from "@/components/Article/Article";
import styles from "./newsArticles.module.css";

const newsArticles = [
	{
		title: "News 1",
		description:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
        mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
        elitvoluptua dignissim per, habeo iusto primis ea eam.",
		newsPortal: "Kantipur",
		image: "@/assets/aboutImage.jpg",
		date: "20/10/2024",
		newsLink: "https://youtube.com",
	},
	{
		title: "News 1",
		description:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
        mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
        elitvoluptua dignissim per, habeo iusto primis ea eam.",
		newsPortal: "Kantipur",
		image: "@/assets/aboutImage.jpg",
		date: "20/10/2024",
		newsLink: "https://youtube.com",
	},
	{
		title: "News 1",
		description:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
        mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
        elitvoluptua dignissim per, habeo iusto primis ea eam.",
		newsPortal: "Kantipur",
		image: "@/assets/aboutImage.jpg",
		date: "20/10/2024",
		newsLink: "https://youtube.com",
	},
	{
		title: "News 1",
		description:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
        mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
        elitvoluptua dignissim per, habeo iusto primis ea eam.",
		newsPortal: "Kantipur",
		image: "@/assets/aboutImage.jpg",
		date: "20/10/2024",
		newsLink: "https://youtube.com",
	},
];

export default function NewsArticles({ page }) {
	return (
		<div className={`${styles.newsArticles}`}>
			{newsArticles.map((news, index) => {
				return (
					<Article
						title={news.title}
						description={news.description}
						newsPortal={news.newsPortal}
						image={news.image}
						date={news.date}
						link={news.newsLink}
						key={`${news.title} ${index}`}
					/>
				);
			})}
		</div>
	);
}
