import router from "@/router";
import {Usuario} from "../interfaces/Usuario";
import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        token: "",
        role: "",
        _id: "",
        user: {} as Usuario,
        id_factura: "",
    }),

    getters: {
        isAuthenticated: (state) => {
            return state.token.trim().length > 0;
        },
        isAdmin: (state) => {
            if (state.role === "ADMIN") {
                return true;
            }
        },
        isTecnico: (state) => {
            if (state.role === "TECNICO") {
                return true;
            }
        },
        isUser: (state) => {
            if (state.role === "USER") {
                return true;
            }
        }
    },

    actions: {
        logout() {
            this.token = "";
            router.replace({ name: 'login' });
        }
    },

    persist: {
        enabled: true
    }
})