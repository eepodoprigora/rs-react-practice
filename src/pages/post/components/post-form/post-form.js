import styled from 'styled-components';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titletRef = useRef(null);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const requestServer = useServerRequest();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titletRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id: id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input ref={titletRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						margin="0 12px 0 0"
						size="20px"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	img {
		float: left;
		margin: 0 40px 10px 0;
	}

	.post-text {
		white-space: pre-line;
	}
`;
