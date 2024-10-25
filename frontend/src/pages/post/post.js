import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';

import { Comments, PostContent, PostForm } from './components';

import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors/select-post';
import { Error, PrivateContent } from '../../components';

import styled from 'styled-components';
import { ROLE } from '../../constants';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();

	const isCreating = !!useMatch('/post/');
	const isEditing = !!useMatch('/post/:id/edit');

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPostAsync(params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) return null;

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);

	return error ? <Error error={error}></Error> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	margin-top: 40px;
	padding: 0 80px;
`;
