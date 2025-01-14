import {create} from "zustand"
import ModToken from "../models/users/ModToken.ts";
import {persist} from "zustand/middleware";
import {encryptData} from "../outils/CryptoLocalStorage.ts";

interface InterfaceTokenStore {
    token: ModToken | null
    setToken: (newToken: ModToken) => void
}

export const useAuthentificationJWTStore = create<InterfaceTokenStore>()(
    persist((set) => ({
        token: null,
        setToken: (newToken) => set({
            token: newToken
        })
    }), {name: "taken-store",

        partialize:(state) => ({
            token:encryptData(JSON.stringify(state.token))
        })}
    ))