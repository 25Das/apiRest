const bcryptjs = require('bcryptjs');

module.exports = {
	up: async queryInterface => {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					nome: 'Daniel 1',
					email: 'daniel1@gmail.com',
					password_hash: await bcryptjs.hash('123456', 8),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					nome: 'Daniel 2',
					email: 'daniel2@gmail.com',
					password_hash: await bcryptjs.hash('654321', 8),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					nome: 'Daniel 3',
					email: 'daniel3@gmail.com',
					password_hash: await bcryptjs.hash('098765', 8),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{},
		);
	},

	down: async () => {},
};
