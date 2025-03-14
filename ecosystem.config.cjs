module.exports = {
	apps: [
		{
			name: 'NuxtHabitStreak',
			port: '4000',
			exec_mode: 'cluster',
			instances: '4',
			script: './.output/server/index.mjs',
		},
	],
};
