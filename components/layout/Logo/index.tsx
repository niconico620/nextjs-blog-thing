import React from "react";
import { FaJournalWhills } from "react-icons/fa";

function Logo() {
	return (
		<div className="font-oswald ml-4 flex items-center text-lg font-bold uppercase text-gray-300 hover:text-white md:ml-12 md:text-3xl">
			<FaJournalWhills />
			<span className="ml-4 hidden md:flex">Deemo&apos;s Journal</span>
		</div>
	);
}

export default Logo;
