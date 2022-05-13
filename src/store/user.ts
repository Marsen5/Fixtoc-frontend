import { defineStore } from "pinia";

export const useAppStore = defineStore('user', {
    state: () => ({
        _id: "",
    }),
/* 
    getters: {
        isAuthenticated: (state) => {
            return state.token.trim().length > 0;
        },
        isAdmin: (state) => {
            if (state.role === "admin") {
                return true;
            }
        },
        isTecnico: (state) => {
            if (state.role === "tecnico") {
                return true;
            }
        },
        isUser: (state) => {
            if (state.role === "user") {
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
 */
    persist: {
        enabled: true
    }
})