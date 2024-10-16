import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Navigate, NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthFormError, Input, H2, Button } from '../../components';
import { useResetForm } from '../../hooks';
import { setUser } from '../../actions';

import styled from 'styled-components';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

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
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
			sessionStorage.setItem('userData', JSON.stringify(res));
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

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

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
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
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
