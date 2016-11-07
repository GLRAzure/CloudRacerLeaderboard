var config = {}

config.tablestorage = {
	tableName: "cloudracertelemetry",
	accountName: "cloudracerstorage",
	accountKey: "Gt3CzZKNAK4rDcDEBwhICAfPmKV7HWyr8nS+FO2sIZ21IE8z8EzfO4eq3jb1+5viaA0B+VbgWmui2BJzlQYODw=="
}

config.mssql = {
	server: 'cloudracer.database.windows.net',
	database: 'cloudracerdb',
	user: 'dbadmin@cloudracer',
	password: 'cl0udr@c3r',
	options: { encrypt: true }
}

module.exports = config;