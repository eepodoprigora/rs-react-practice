import styled from 'styled-components';
import { useEffect, useState } from 'react';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=b333918cbb295000abd8e6221274968a',
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			})
			.catch((error) => console.error('Ошибка при запросе:', error));
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Блог веб разработчика</div>
				<a href="emailto:web@develorep.ru">web@develorep.ru</a>
			</div>

			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-atems: center;
	height: 120px;
	padding: 20px 40px;
	width: 1000px;
	font-weight: 800;
	background-color: #fff;
	box-shadow: 0 2px 17px #000;
`;
