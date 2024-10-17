import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';

import { Comments, PostContent, PostForm } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';

import styled from 'styled-components';
import { selectPost } from '../../selectors/select-post';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const isCreating = useMatch('/post/');
	const isEditing = useMatch('/post/:id/edit');

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) return;
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id, isCreating]);

	return (
		<>
			<div className={className}>
				{isCreating || isEditing ? (
					<PostForm post={post} />
				) : (
					<>
						<PostContent post={post} />
						<Comments comments={post.comments} postId={post.id} />
					</>
				)}
			</div>
		</>
	);
};

export const Post = styled(PostContainer)`
	margin-top: 40px;
	padding: 0 80px;
`;
