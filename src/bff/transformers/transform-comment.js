export const transformComment = (dbComment) => ({
	id: dbComment.id,
	content: dbComment.content,
	publishedAt: dbComment.published_at,
	postId: dbComment.post_id,
	authorId: dbComment.author_id,
});
