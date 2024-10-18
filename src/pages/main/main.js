import { useEffect, useMemo, useState } from 'react';

import { useServerRequest } from '../../hooks';
import { PostCard, Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';

import styled from 'styled-components';
import { debounce } from './utils';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			(posts) => {
				setPosts(posts.res);
				setLastPage(posts.lastPage);
			},
		);

		// eslint-disable-next-line
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearh = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearh(!shouldSearch);
	};

	return (
		<div className={className}>
			<Search onChange={onSearch} searchPhrase={searchPhrase} />

			{posts.length > 0 ? (
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
			) : (
				<div className="not-found-posts">Ничего не найдено</div>
			)}

			{posts.length > 0 && lastPage > 1 && (
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

	.not-found-posts {
		text-align: center;
		font-size: 18px;
	}
`;
