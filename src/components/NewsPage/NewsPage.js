import React from "react";
import NewsArticles from "../NewsArticles/NewsArticles";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

export default function NewsPage() {
	return (
		<div className="contentContainer pt-10 pb-14" id="news-articles">
			<p className="text-center text-3xl mb-6">Media Coverage</p>
			<NewsArticles page="home" />
			<div className="text-center mt-6 text-gray-600">
				<Link href="/news">
					Read More
					<p className="flex justify-center text-4xl -mt-2">
						<BsThreeDots />
					</p>
				</Link>
			</div>
		</div>
	);
}
