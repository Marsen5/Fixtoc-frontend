import axios from "./axios"
import { AxiosResponse } from "axios"

//Importamos la interfaz del objeto 
import  { Usuario } from '@/interfaces/Usuario'

//Funcion que nos permite crear un usuario
export const createUser = async (usuario: Usuario) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/auth/signup', usuario) //Añade /product a la url y le pasa el producto
}

//Funcion para inciar sesion
export const signinUser = async (usuario: Usuario) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/auth/signin', usuario) //Añade /product a la url y le pasa el producto
}

//Funcion que nos permite listar los usuarios
export const getUsuarios = async (): Promise<AxiosResponse<Usuario[]>> => 
  await axios.get('/users') 

//Funcion que muestra un usuario pasandole un id
export const getUser= async (id: string): Promise<AxiosResponse<Usuario>> => 
  await axios.get('/users/' + id) //Le pasaremos el id del producto

//Funcion para actualizar los usuarios
export const updateUser = async (id: string, product: Usuario) =>
  await axios.put('/users/'+ id, product)

//Funcion para borrar usuario
export const deleteUser = async (id: string): Promise<AxiosResponse<Usuario>> => 
  await axios.delete('/users/' + id) //Le pasaremos el id del producto