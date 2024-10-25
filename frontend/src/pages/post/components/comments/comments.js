import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { PROP_TYPE, ROLE } from '../../../../constants';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();

	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, newComment) => {
		dispatch(addCommentAsync(postId, newComment));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;
	return (
		<div className={className}>
			{!isGuest && (
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
						onClick={() => onNewCommentAdd(postId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
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

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
