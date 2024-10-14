import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { Icon, Button } from '../../../../components';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: 800;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	return (
		<div className={className}>
			<RightAlined>
				{roleId === ROLE.GUEST ? (
					<Button>
						<NavLink to="/login">Войти</NavLink>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon
							id="fa-sign-out"
							margin="0 0 0 10px"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RightAlined>
			<RightAlined>
				<Icon
					id="fa-long-arrow-left"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>

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
