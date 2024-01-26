export default {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jswSecret: process.env.JWT_SECRET,
    bcrypt: {
        saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS),
    }
} 