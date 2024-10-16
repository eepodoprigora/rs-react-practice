import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Authorization, Registration, Users, Post } from './pages';
import { Header, Footer } from './components';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import { useDispatch } from 'react-redux';

const Page = styled.div`
	padding: 150px 0 20px;
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

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		const currentUserData = JSON.parse(currentUserDataJSON);

		if (!currentUserData) return;

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post/" element={<div>Новая статья</div>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
