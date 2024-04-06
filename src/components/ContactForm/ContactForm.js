"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		setError(null); // Clear previous errors when a new request starts

		try {
			const formData = new FormData(event.currentTarget);
			const response = await fetch("/api/submit", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error(
					"Failed to submit the data. Please try again."
				);
			}

			// Handle response if necessary
			const data = await response.json();
			// ...
		} catch (error) {
			// Capture the error message to display to the user
			setError(error.message);
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<div className={`${styles.formContainer} shadow-2xl`}>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<form
				onSubmit={onSubmit}
				className={`flex flex-col gap-12 w-full`}
			>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					required
				/>
				<input
					type="text"
					name="message"
					placeholder="Your Message"
					required
				/>
				<button
					type="submit"
					disabled={isLoading}
					className="flex items-center gap-4 mt-10"
				>
					<FaTelegramPlane />
					{isLoading ? "Loading..." : "Send Message"}
				</button>
			</form>
		</div>
	);
}
