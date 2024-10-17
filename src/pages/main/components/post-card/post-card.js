import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								margin="0 12px 0 10px"
								size="20px"
								inactive="true"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								margin="0 12px 0 10px"
								size="20px"
								inactive="true"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	border: 1px solid #000;
	display: flex;
	flex-direction: column;

	img {
		width: 100%;
	}
	h4 {
		margin-top: 0;
	}
	a {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.post-card-info,
	.published-at,
	.comments-count {
		display: flex;
		align-items: center;
	}

	.post-card-footer {
		padding: 10px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.post-card-info {
		justify-content: space-between;
	}
`;
