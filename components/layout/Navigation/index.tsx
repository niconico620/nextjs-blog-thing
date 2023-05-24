import React from "react";
import Logo from "../Logo";
import Link from "next/link";

function Navigation() {
	return (
		<header className="bg-neutral-600">
			<div className="container mx-auto flex items-center justify-between px-4 py-6">
				<Link href="/">
					<Logo />
				</Link>
				<nav className="mr-4 flex justify-center md:mr-24">
					<ul className="flex space-x-6 font-mono text-lg text-gray-200 md:space-x-12">
						<li className="nav-link hover:text-white">
							<Link href="/posts">Posts</Link>
						</li>
						<li className="nav-link hover:text-white">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navigation;
