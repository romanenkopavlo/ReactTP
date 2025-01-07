export const ValidationConnexion = {
    login : {
        required: "Login obligatoire",
        pattern: {
            value: /^[a-zA-Z0-9._-]{3, 20}$/,
            message: "Login doit contenir 3-20 caracteres"
        }
    },

    password : {
        required: "Password obligatoire",
        pattern: {
            value: /^[a-zA-Z0-9._-]{3, 20}$/,
            message: "Password doit contenir 3-20 caracteres"
        }
    }
}