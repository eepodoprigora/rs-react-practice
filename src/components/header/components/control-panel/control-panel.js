import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { Icon } from '../../../../components';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	background-color: #eee;
	font-size: 18px;
	width: 100px;
	height: 32px;
`;

const StyledButton = styled.div`
	cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlined>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAlined>
			<RightAlined>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-long-arrow-left" margin="10px 0 0 0" />
				</StyledButton>

				<NavLink to="post">
					<Icon id="fa-file-text-o" margin="10px 0 0 15px" />
				</NavLink>
				<NavLink to="/users">
					<Icon id="fa-users" margin="10px 0 0 15px" />
				</NavLink>
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
