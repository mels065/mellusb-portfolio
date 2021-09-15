const sequelize = require('../config/connection');

async function seedDatabase() {
    try {
        await sequelize.sync({ force: true });

        process.exit(0);
    } catch (err) {
        console.error(err);
    }
}

seedDatabase();
