import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Footer = () => <div>Подвал страницы</div>;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Заголовок страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Регистрация</div>} />
					<Route path="/register" element={<div>Авторизация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post/" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
