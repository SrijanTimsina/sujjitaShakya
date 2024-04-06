import React from "react";
import Videos from "@/components/Videos/Videos";

export default function page() {
	return (
		<div className="bg-gray-100">
			<div className="contentContainer pt-10 pb-10">
				<p className="text-center text-3xl mb-8">Videos</p>
				<Videos page="videos" />
			</div>
		</div>
	);
}
