import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../../actions';

import styled from 'styled-components';
import { useServerRequest } from '../../../../../../hooks';

const CommentContainer = ({ className, id, author, publishedAt, content, postId }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" margin="0 12px 0 10px" size="20px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" margin="0 12px 0 10px" size="20px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="8px 12px 0 10px"
				size="24px"
				onClick={() => onCommentRemove(id)}
			/>
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
		width: 100%;
		padding: 10px;
		border: 1px solid #cccccc;
	}

	.information-panel {
		display: flex;
		justify-content: space-between;
	}
`;
