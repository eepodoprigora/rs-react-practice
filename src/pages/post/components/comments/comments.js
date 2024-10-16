import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';

import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const serverRequest = useServerRequest();

	const onNewCommentAdd = (userId, postId, newComment) => {
		dispatch(addCommentAsync(serverRequest, userId, postId, newComment));
		setNewComment('');
	};
	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий"
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<Icon
					id="fa-paper-plane-o"
					margin="0 12px 0 10px"
					size="20px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 20px auto;

	.new-comment {
		display: flex;

		textarea {
			width: 540px;
			height: 100px;
			resize: none;
			padding: 10px;
			font-size: 16px;
			font-family: inherit;
		}
	}
`;
