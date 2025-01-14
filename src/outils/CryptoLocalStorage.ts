import CryptoJS from 'crypto-js'
import parametres from "../../public/parametres.json";

const SECRET_KEY = parametres.SECRET_KEY

export const encryptData = (data:string):string => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
}

export const decryptData = (cipherText: string): string => {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY)
    return bytes.toString()
}