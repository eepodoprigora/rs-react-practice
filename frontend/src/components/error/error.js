import { H2 } from '../h2/h2';
import styled from 'styled-components';
import { PROP_TYPE } from '../../constants';

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
	font-size: 18px;
	.error-text {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
