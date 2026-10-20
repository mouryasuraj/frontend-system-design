import gRPC from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROTO_PATH = path.resolve(__dirname, "../customer.proto");


const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase:true,
    longs: String,
    enums: String,
    arryas: true
})

const customersProto = gRPC.loadPackageDefinition(packageDefinition)

const grpcServer = new gRPC.Server()

const customers = [
    {
        id:"123123",
        name:"Suraj MOurya",
        age:23,
        address: "Mumbai"
    },
    {
        id:"5678",
        name:"Vipin Yadav",
        age:23,
        address: "Navi Mumbai"
    }
]

grpcServer.addService(customersProto.CustomerService.service, {
    getAll : (call, callBack) =>{
        callBack(null, {customers})
    }
})  


grpcServer.bindAsync("127.0.0.1:30043", gRPC.ServerCredentials.createInsecure(), (err, port)=>{
    if(err){
        console.log(err)
    }else{
        grpcServer.start()
        console.log(`gRPC server is running on port ${port}`)
    }
})