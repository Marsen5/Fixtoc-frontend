import axios from "./axios"
import { AxiosResponse } from "axios"

//Importamos la interfaz del objeto 
import  { Factura } from '@/interfaces/Factura'

//Funcion que nos permite crear un usuario
export const createFactura = async (factura: Factura) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/factura', factura) //Añade /product a la url y le pasa el producto
}

//Funcion que nos permite listar los usuarios
export const getFacturas = async (): Promise<AxiosResponse<Factura[]>> => 
  await axios.get('/facturas')

//Funcion que muestra un usuario pasandole un id
export const getFactura= async (id: string): Promise<AxiosResponse<Factura>> => 
  await axios.get('/facturas/' + id) //Le pasaremos el id del producto

//Funcion para actualizar los usuarios
export const updateFactura = async (id: string, factura: Factura) =>
  await axios.put('/facturas/'+ id, factura)

//Funcion para borrar usuario
export const deleteFactura = async (id: string): Promise<AxiosResponse<Factura>> => 
  await axios.delete('/facturas/' + id) //Le pasaremos el id del producto

