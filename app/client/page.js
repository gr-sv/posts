import Link from "next/link";

export default function Client() {
	return (
		<div>
			<h1>Client Page</h1>
			<Link href='/'>Main Page</Link><br />
			<Link href='/client/12345'>Client 12345</Link>
		</div>
		
	);
}