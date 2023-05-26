import Image from "next/image";
import Link from "next/link";
import React from "react";

function PostCard(props: any) {
	const { image, title, date, excerpt, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const linkPath = `/${slug}`;
	return (
		<li className=" hover:glow-div bg-stone-800 text-center shadow-md hover:opacity-80">
			<Link href={linkPath} className="text-gray-300">
				<div className="max-h-72 w-full overflow-hidden">
					<Image
						className="object-cover"
						src={image}
						alt={title}
						width={500}
						height={300}
					/>
				</div>
				<div className="p-4">
					<h3 className="mb-2 font-mono text-2xl font-semibold">{title}</h3>
					<time className="italic text-gray-300">{formattedDate}</time>
					<p className="m-2 leading-6">{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}

export default PostCard;
