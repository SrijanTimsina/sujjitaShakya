import React from "react";
import Videos from "@/components/Videos/Videos";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

export default function VideoPage() {
	return (
		<div className="contentContainer pb-14" id="videos">
			<p className="text-center text-3xl mb-6">Videos</p>
			<Videos page="home" />
			<div className="text-center mt-6 text-gray-600">
				<Link href="/videos">
					See All
					<p className="flex justify-center text-4xl -mt-2">
						<BsThreeDots />
					</p>
				</Link>
			</div>
		</div>
	);
}
