import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import styled from 'styled-components';

import { Input, H2, Button } from '../../components';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнен пароль')
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

const AuthorizationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = ({ login, register }) => {
		server.authorize(login, register).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
			}
		});
	};
	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	const StyledLink = styled(NavLink)`
		text-align: center;
		text-decoration: underline;
		margin: 20px 0;
		font-size: 18px;
	`;

	const ErrorMessage = styled.div`
		background-color: #fcadad;
		font-size: 18px;
		margin: 10px 0;
		padding: 10px;
	`;

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Введите логин"
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type="password"
					placeholder="Введите пароль"
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<Button disabled={formError} type="submit">
					Авторизоваться
				</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	form {
		display: flex;
		flex-direction: column;
		width: 300px;
	}
`;
