import Link from "next/link"

const Post = ({ post }) => {
	return (
		<div>
			<Link href='/'>Back</Link>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<strong>Author ID: {post.userId}</strong>
		</div>
	)
}

export default Post