import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const cliente =  new MongoClient(process.env.STRING_CONEXAO)

let documentosColecao

try{
    await cliente.connect()

    const db = cliente.db("websockets")
    documentosColecao = db.collection("documents")
    
    console.log("Conectado ao banco de dados com sucesso!")
}

catch(erro){
    console.error(erro)
}

export { documentosColecao }