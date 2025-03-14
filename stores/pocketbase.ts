import PocketBase from 'pocketbase';

const pb = new PocketBase('https://admin.habit-streak.app');

export const usePocketBase = () => {
	return pb;
};
