import Sequelize from 'sequelize'

const db = 'expressblog'
const username = 'blogadmin'
const password = 'PASSword'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate()