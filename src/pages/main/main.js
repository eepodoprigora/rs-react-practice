import { useEffect, useState } from 'react';

import { useServerRequest } from '../../hooks';
import { PostCard } from './components';

import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
			// console.log(posts.res);
		});
	}, [requestServer]);

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
