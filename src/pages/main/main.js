import { useEffect, useState } from 'react';

import { useServerRequest } from '../../hooks';
import { PostCard, Pagination } from './components';
import { PAGINATION_LIMIT } from '../../constants';

import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
			setPosts(posts.res);
			setLastPage(posts.lastPage);
		});
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						imageUrl={imageUrl}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	.post-list {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		padding: 0 40px;
	}
`;
