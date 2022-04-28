import router from "@/router";
import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        token: "",
        role: ""
    }),

    getters: {
        isAuthenticated: (state) => {
            return state.token.trim().length > 0;
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