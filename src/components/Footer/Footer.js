import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<div
			className={`${styles.footerContainer} shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)]`}
		>
			<div className="contentContainer py-10">
				<div className="flex justify-between w-full gap-10 max-w-[800px] max-sm:block">
					<div className={`${styles.logoContainer} mb-6`}>
						<p className="text-2xl font-bold text-black max-[400px]:text-xl">
							SUJITA SHAKYA
						</p>
						<div
							className={`${styles.socialIcons} flex gap-4 mt-4 pl-2`}
						>
							<Link
								href="https://www.facebook.com/sujita.shakya.1/"
								target="_blank"
							>
								<FaFacebook />
							</Link>
							<Link
								href="https://twitter.com/shakyasujita"
								target="_blank"
							>
								<FaTwitter />
							</Link>
							<Link href="/" target="_blank">
								<FaInstagram />
							</Link>
						</div>
					</div>
					<div className="flex justify-between w-full max-w-[450px] gap-10 max-md:!max-w-[300px]">
						<div className={styles.footerLinks}>
							<p className="text-xl font-semibold text-black max-[400px]:text-lg mb-2">
								Links
							</p>
							<Link href="/">Home</Link>
							<Link href="/about">About</Link>
							<Link href="/news">News</Link>
							<Link href="/videos">Videos</Link>
						</div>
						<div className={`${styles.footerLinks} max-md:!hidden`}>
							<p className="text-xl font-semibold text-black max-[400px]:text-lg mb-2">
								Social Links
							</p>
							<Link href="/">Facebook</Link>
							<Link href="/">Twitter</Link>
						</div>
						<div className={styles.footerLinks}>
							<p className="text-xl font-semibold text-black max-[400px]:text-lg mb-2">
								Contact
							</p>
							<Link href="mailto:email@email.com">
								email@email.com
							</Link>
							<Link href="tel:+9779800000000">9800000000</Link>
							<Link href="/contact">Contact</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
