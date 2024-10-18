import { Error } from '../error/error';

export const Content = ({ children, error }) => {
	return error ? <Error error={error} /> : children;
};
