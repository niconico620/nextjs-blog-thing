import PostsGrid from "@/components/posts/PostsGrid";
import React from "react";

function FeaturedPosts(props: any) {
	const { posts } = props;
	return (
		<section className="mx-auto my-12 w-11/12 max-w-screen-xl">
			<h2 className="text-center font-mono text-2xl font-semibold text-gray-300 md:text-3xl md:leading-relaxed">
				Featured Posts
			</h2>
			<PostsGrid posts={posts} />
		</section>
	);
}

export default FeaturedPosts;
