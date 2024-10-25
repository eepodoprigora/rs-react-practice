import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../..';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 500;
	line-height: 100%;
	margin-top: 10px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<NavLink to="/" className={className}>
		<Icon size="70px" margin="0 10px 0 0" id="fa-code" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>Веб разработчика</SmallText>
		</div>
	</NavLink>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
