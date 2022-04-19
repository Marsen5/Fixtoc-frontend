import axios, { AxiosInstance } from 'axios' 
//Axiosinstance : interfaz de tipo Axios. Nos ayuda con errores i autocopletado

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', //Para decirle donde tiene que hacer la peticion
  headers: {
    'Content-Type': 'application/json' //Para decirle que va ha estar exportando dobjetos de tipo json
  }
})

export default axiosInstance