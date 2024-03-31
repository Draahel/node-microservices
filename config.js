const config = {
    api: {
        port: process.env.PORT || 3000,
    },
    postApi: {
        port: process.env.POST_API_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
    },
    mysqlApi: {
        host: process.env.MYSQL_API_HOST,
        port: process.env.MYSQL_API_PORT || 3001,
    },
}

export default config;