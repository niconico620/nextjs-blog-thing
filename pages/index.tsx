import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/homepage/Hero";
import FeaturedPosts from "@/components/homepage/FeaturedPosts";
import { posts } from "./api/dummy-data";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);

	//Hero Section - (Section where we present ourselves.)
	//Featured Posts
}
