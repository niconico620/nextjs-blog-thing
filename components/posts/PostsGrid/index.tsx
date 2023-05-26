import React from "react";
import PostCard from "../PostCard";

function PostsGrid(props: any) {
	const { posts } = props;
	return (
		<ul className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{posts.map((post: any) => (
				<PostCard key={post.slug} post={post} />
			))}
		</ul>
	);
}

export default PostsGrid;
