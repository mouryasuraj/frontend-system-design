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

const CustomerService = gRPC.loadPackageDefinition(packageDefinition).CustomerService

const client = new CustomerService("127.0.0.1:30043", gRPC.credentials.createInsecure())

export default client