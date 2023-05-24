/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function Hero() {
	return (
		<section className="hero bg-gradient-to-b from-neutral-600 to-stone-900 py-8 text-center">
			<div className="image mx-auto h-72 w-72 overflow-hidden rounded-lg bg-gray-700 shadow-md">
				<Image
					className="h-full w-full object-cover object-top"
					src="/images/site/deemopfp.png"
					alt="Profile Picture"
					width={288}
					height={288}
				/>
			</div>
			<h1 className="mb-6 mt-8 font-mono text-4xl font-bold tracking-normal text-gray-300">
				Sup, it's Kneeco!
			</h1>
			<p className="w-90 text-md mx-auto max-w-xl font-sans tracking-wide text-gray-300 md:text-xl md:leading-relaxed">
				I talk about my interests and whatever else comes into mind. This is a
				place for me to share my thoughts.
			</p>
		</section>
	);
}

export default Hero;
