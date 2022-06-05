import axios from "./axios"
import { AxiosResponse } from "axios"

//Importamos la interfaz del objeto 
import  { Factura } from '@/interfaces/Factura'
import { ResponseCreateFactura } from "@/interfaces/ResponseCreateFactura"

//Funcion que nos permite crear un usuario
export const createFactura = async (factura: Factura): Promise<ResponseCreateFactura> => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  return await axios.post<any, ResponseCreateFactura>('/factura', factura) 
  .catch(() => ({} as ResponseCreateFactura))
}

//Funcion que nos permite listar los usuarios
export const getFacturas = async (): Promise<AxiosResponse<Factura[]>> => 
  await axios.get('/factura')

//Funcion que muestra un usuario pasandole un id
export const getFactura= async (id: string): Promise<Factura> => 
  await axios.get('/factura/' + id) //Le pasaremos el id del producto

//Funcion para actualizar los usuarios
export const updateFactura = async (id: string, factura: Factura) =>
  await axios.put('/facturas/'+ id, factura)

//Funcion para borrar usuario
export const deleteFactura = async (id: string): Promise<AxiosResponse<Factura>> => 
  await axios.delete('/facturas/' + id) //Le pasaremos el id del producto

