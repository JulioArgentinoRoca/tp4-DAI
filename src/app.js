import {getCurrentTime, getCurrentDatetime} from "./time.js"

export const bienvenida = (req,res) =>{
    res.send("HOLA!")
}

export const time = (req,res)=>{
    res.send(getCurrentTime())
}

export const wholeDate = (req,res)=>{
    res.send(getCurrentDatetime())
}