import { useNavigate } from 'react-router-dom';
import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';

import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						margin="0 12px 0 0"
						size="20px"
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>

			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	img {
		float: left;
		margin: 0 40px 10px 0;
	}
	.post-text {
		white-space: pre-line;
	}
`;