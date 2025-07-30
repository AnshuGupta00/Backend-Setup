import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/hi2.js";
import {app} from './app.js'
import router from './routes/user.router.js';



connectDB()

.then(() => {
app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port : ${PORT}`);
    
});

})
.catch((err) => {
    console.log("MONGO db PORT connection failed !!! ", err);
})


















// import express from "express"

// const app = express()



//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("Error", () => {
//                 console.error(Error)
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`App is litneing on PORT${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     })()