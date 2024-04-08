import NavStyles from "./navbar.module.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
	return (
		<div className={`${NavStyles.navContainer}  shadow-xl`}>
			<div className="contentContainer flex justify-between py-6 gap-4 items-center">
				<Sidebar />
				<div>
					<Link
						href="/"
						className="text-2xl font-bold text-black max-[400px]:text-lg"
					>
						SUJITA SHAKYA
					</Link>
				</div>
				<div className={`${NavStyles.navLinks} flex gap-4`}>
					<Link
						href="https://www.facebook.com/sujita.shakya.1/"
						target="_blank"
					>
						<FaFacebook className="max-[400px]:text-2xl" />
					</Link>
					<Link
						href="https://twitter.com/shakyasujita"
						target="_blank"
					>
						<FaTwitter className="max-[400px]:text-2xl" />
					</Link>
					<Link href="/" target="_blank">
						<FaInstagram className="max-[400px]:text-2xl" />
					</Link>
				</div>
			</div>
		</div>
	);
}
