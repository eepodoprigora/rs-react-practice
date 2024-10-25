import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, size, margin, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
};
