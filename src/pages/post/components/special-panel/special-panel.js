import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';

import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, publishedAt, editButton, id }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = () => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate('/'),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					margin="0 0 0 0"
					size="20px"
					onClick={() => onPostRemove()}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	.published-at {
		display: flex;
		align-items: center;
	}

	.buttons {
		display: flex;
		align-items: center;
	}
`;
