import styled from 'styled-components';
import { H2 } from '../h2/h2';

const ErrorContainer = ({ className, error }) => {
	return (
		<div className={className}>
			<H2>Ошибка</H2>
			<div className="error-text">{error}</div>
		</div>
	);
};

export const Error = styled(ErrorContainer)`
	padding: 0 40px;
	text-align: center;
	.error-text {
		display: flex;
		align-items: cneter;
		justify-content: center;
	}
`;
