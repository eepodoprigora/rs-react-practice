import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Введите поисковую фразу..."
				margin="0"
				onChange={onChange}
			/>
			<Icon id="fa-search" margin="0 10px" size="20px" inactive="true" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	align-items: center;
	margin: 0 auto;
	width: 340px;
	height: 41px;
	border: 1px solid #000;
	margin-bottom: 40px;
	overflow: hidden;

	input {
		border: 0;
	}
`;
