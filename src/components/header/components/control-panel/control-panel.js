import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { Icon, Button } from '../../../../components';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledIcon = styled.div`
	cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlined>
				<Button>
					<NavLink to="/login">Войти</NavLink>
				</Button>
			</RightAlined>
			<RightAlined>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-long-arrow-left" margin="10px 0 0 0" />
				</StyledIcon>

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
