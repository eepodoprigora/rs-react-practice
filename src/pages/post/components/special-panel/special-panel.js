import styled from 'styled-components';
import { Icon } from '../../../../components';

const specialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" margin="0 0 0 0" size="20px" />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(specialPanelContainer)`
	margin: ${({ margin }) => margin};
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	.published-at {
		display: flex;
		align-items: center;
	}

	.buttons {
		display: flex;
		align-items: center;
	}
`;
