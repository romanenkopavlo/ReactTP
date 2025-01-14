export default class ModToken{

    id_user: number | null = null
    username: string | null = null
    role: string | null = null
    token: string | null = null
    tokenTimeValid: number | null  = null


    constructor(id_user: number | null, username: string | null, role: string | null, token: string | null, tokenTimeValid: number | null) {
        this.id_user = id_user;
        this.username = username;
        this.role = role;
        this.token = token;
        this.tokenTimeValid = tokenTimeValid;
    }
}