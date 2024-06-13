import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "PurpleCode Labs",
	authors: {
		name: "PurpleCode Labs",
	},

	description:
		"We are a passionate software development company committed to leveraging technology for social good. Our heart lies in projects that make a difference.",
	openGraph: {
		title: "PurpleCode Labs",
		description:
			"We are a passionate software development company committed to leveraging technology for social good. Our heart lies in projects that make a difference.",
		url: "http://localhost:3000",
		siteName: "PurpleCode Labs",
		images: "/logo.jpg",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={spaceGrotesk.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
