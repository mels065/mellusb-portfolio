const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const router = require('./controllers');

const helpers = require('./utils/helpers');

async function init() {
    const app = express();
    const PORT = process.env.PORT || 3001;

    const hbs = exphbs.create({ helpers });
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static(path.join(__dirname, 'public')));

    app.use(router);

    try {
        await sequelize.sync({ force: false });
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
}

init();
