import React from "react";
import NewsArticles from "@/components/NewsArticles/NewsArticles";

export default function page() {
	return (
		<div className="bg-gray-100">
			<div className="contentContainer pt-10 pb-10">
				<p className="text-center text-3xl mb-8">Media Coverage</p>
				<NewsArticles page="news" />
			</div>
		</div>
	);
}
