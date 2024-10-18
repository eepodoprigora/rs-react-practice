import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)} margin="0 10px">
				В начало
			</Button>
			<Button
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
				margin="0 10px"
			>
				Предыдущая
			</Button>
			<div className="current-page">{page}</div>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
				margin="0 10px"
			>
				Следующая
			</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(lastPage)}
				margin="0 10px"
			>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	padding: 0 40px 40px;

	.current-page {
		min-width: 100px;
		border: 1px solid #808b96;
		flex-shink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
