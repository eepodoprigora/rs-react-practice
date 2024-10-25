import styled from 'styled-components';

import { Logo, ControlPanel } from './components';

const Description = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Веб-технологии <br /> Написание кода <br /> Разбор ошибок
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0 -2px 17px #000;
	position: fixed;
	top: 0;
	width: 1000px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
