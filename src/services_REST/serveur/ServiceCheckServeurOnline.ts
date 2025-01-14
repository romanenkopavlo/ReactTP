import axios from "axios";
import parametres from "../../../public/parametres.json";

const URL_SERVEUR = parametres.URL_SERVEUR

export const ServiceCheckServeurOnline = async(): Promise<boolean> => {
    try {
        const response = await axios.get(URL_SERVEUR, {timeout: 3000});
        return response.status >= 200 && response.status < 300;
    } catch (error) {
        console.log(error);
        return false;
    }
}