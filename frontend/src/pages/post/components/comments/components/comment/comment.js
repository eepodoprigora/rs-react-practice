import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '../../../../../../components';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../../actions';
import { selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';

import styled from 'styled-components';
const CommentContainer = ({ className, id, author, publishedAt, content, postId }) => {
	const dispatch = useDispatch();

	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" margin="0 12px 0 10px" size="20px" />
						{author}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							margin="0 12px 0 10px"
							size="20px"
							inactive="true"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					margin="8px 12px 0 10px"
					size="24px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	.author,
	.published-at {
		display: flex;
		align-items: center;
	}

	.comment {
		width: 540px;
		padding: 10px;
		border: 1px solid #cccccc;
	}

	.information-panel {
		display: flex;
		justify-content: space-between;
	}
`;

Comment.propTypes = {
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	postId: PropTypes.string.isRequired,
};
