import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon id="fa-pencil-square-o" margin="0 12px 0 0" size="20px" />
					<Icon id="fa-trash-o" margin="0 0 0 0" size="20px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	img {
		float: left;
		margin: 0 40px 10px 0;
	}

	.special-panel {
		margin: -20px 0 20px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}

	.published-at {
		display: flex;
		align-items: center;
	}

	.buttons {
		display: flex;
		align-items: center;
	}
`;
