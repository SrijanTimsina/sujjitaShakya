import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sujita Shakya",
	description: "Sujita Shakya.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<div
					style={{
						marginTop: "90px",
						minHeight: "calc(100vh - 90px - 220px)",
					}}
					className="bg-gray-100"
				>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
