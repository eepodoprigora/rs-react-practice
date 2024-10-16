import { useSelector } from 'react-redux';
import { Button } from '../button/button';

import styled from 'styled-components';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="modal-overlay"></div>
			<div className="modal-content">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" margin="0 10px 0 0" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	z-index: 20;
	display: flex;
	align-items: center;
	justify-content: center;

	.modal-overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.modal-content {
		background-color: #fff;
		padding: 40px;
		z-index: 30;
		width: 600px;
		text-align: center;
	}

	.buttons {
		display: flex;
		justify-content: center;
	}
`;
