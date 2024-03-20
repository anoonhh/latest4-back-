import  express  from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()
import { UserRouter } from "./routes/user.js"
import { User } from "./models/User.js"



const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth',UserRouter)





mongoose.connect("mongodb+srv://hanoona:hanoona123@cluster0.tgtsfu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blood_bank")


app.post('/signup',(res,req) =>{
    UserModel.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
    
})



app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})

