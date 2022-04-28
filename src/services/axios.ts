import axios, { AxiosInstance } from 'axios' 
import { useAppStore } from "@/store/app";

//Axiosinstance : interfaz de tipo Axios. Nos ayuda con errores i autocopletado

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', //Para decirle donde tiene que hacer la peticion
  headers: {
    'Content-Type': 'application/json', //Para decirle que va ha estar exportando objetos de tipo json
  } 
})

axiosInstance.interceptors.request.use((config) => {
  const appStore = useAppStore();

  if (!config.url?.startsWith('/auth')) {
      config.headers = {
          Authorization: `Bearer ${appStore.token}`
      }
  }

  return config;
})

axiosInstance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  const appStore = useAppStore();

  if(error.response.status === 401) {
      appStore.logout();
  }
}) 

export default axiosInstance;