import { useEffect, useMemo, useState } from 'react';

import { PostCard, Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';

import { debounce } from './utils';
import { request } from '../../utils';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search=${searchPhrase}&page=${page}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { posts, lastPage } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});

		// eslint-disable-next-line
	}, [page, shouldSearch]);

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
					{posts.map(({ id, title, publishedAt, comments, imageUrl }) => (
						<PostCard
							key={id}
							id={id}
							title={title}
							publishedAt={publishedAt}
							imageUrl={imageUrl}
							commentsCount={comments.length}
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
