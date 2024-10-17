export const sanitizeContent = (content) => {
	return content
		.replace(/ +/, ' ')
		.replaceAll('&nbsp;', ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
};
