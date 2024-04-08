import React from "react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import {
	FaPhoneAlt,
	FaFacebook,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contactPage.module.css";

export default function contact() {
	return (
		<div className="bg-gray-100">
			<div className="contentContainer pt-10 pb-10">
				<div
					className="block align-center justify-between sm:flex gap-2"
					style={{ width: "100%", maxWidth: "750px", margin: "auto" }}
				>
					<div className="textContainer flex justify-between gap-4 flex-col max-sm:mb-10  sm:py-6">
						<h3 className="text-2xl font-bold">Connect With Me</h3>
						<div className={`${styles.contactLinks}`}>
							<p className="flex items-center gap-2">
								<IoIosMail className="text-xl" />
								<a href="mailto:email@email.com">email@email.com</a>
							</p>
							<p className="flex items-center gap-2">
								<FaPhoneAlt className="text-xl" />
								<a href="tel:+9779800000000">9800000000</a>
							</p>
						</div>

						<div className={`${styles.socialLinks} flex gap-4`}>
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
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
