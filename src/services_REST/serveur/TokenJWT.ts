import ModToken from "../../models/users/ModToken.ts";
import axios from "axios";
import parametres from "../../../public/parametres.json";

const URL_SERVEUR = parametres.URL_SERVEUR
const URL_AUTH = parametres.URL_AUTH

export const TokenJWT = async(username: string, password: string): Promise<ModToken | null> => {
        try {
            const response = await axios.post<ModToken>(`${URL_SERVEUR}${URL_AUTH}`, {username, password});
            return response.data
        } catch (error) {
            console.log(error)
            return null
        }
}