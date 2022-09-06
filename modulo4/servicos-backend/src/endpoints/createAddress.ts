import { Request, Response } from "express";
import insertAddress from "../data/insertAddress";
import getAddressInfo from "../service/getAdressInfo";
import selectAddress from "../service/selectAddress";
import { Address } from "../types";
import { getAddress } from "./getAddress";

const createAddress = async (req: Request, res: Response) => {
    try{
        const {cep} = req.params 
        const {bairro} = req.body
        const address = await selectAddress(cep, bairro)       
        if(!address) {
            res.status(404)
            throw new Error("Endereço não encontrado")
        }
      
        const infoAddress: Address = {
            cep: address.cep,            
            logradouro: address.logradouro,
            numero: Number(address.ddd),
            complemento: address.complemento,
            bairo: address.bairro? address.bairro : bairro,
            cidade: address.localidade,
            estado: address.uf
        }
        
        await insertAddress(infoAddress)
        res.status(201).send(infoAddress)
    } catch (error: any) {
        console.log(error)
        throw new Error()
    }
}
export default createAddress