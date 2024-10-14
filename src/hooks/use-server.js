import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { useCallback } from 'react';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		async (operation, ...params) => {
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session, ...params];

			return await server[operation](...request);
		},
		[session],
	);
};