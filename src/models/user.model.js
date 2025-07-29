import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";
import bycrypt from "bcrypt";   

const userschema =new schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            indexe:true,
            
        },
        enail:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            indexe:true,
        },
        fullname:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            indexe:true,
            
        },
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String,
            required:true
        },  
        watchHistory:{
            type:schema.Types.ObjectId,
            ref:"WatchHistory",
        },
        password:{
            type:String,
            required:[true ,"Password is required"],
        },
        refrenceToken:{
            type:String,
            default:""
        }

}

)
userschema.pre("save", async function(next) {
    if(this.isModified("password")) 
        return next();
    this.password = bycrypt.hash(this.password, 10)
    next();
})

userschema.metods.ispasswordCorrect = async function(password) {
 return await bcrypt.compare(password,this.password)
    }



 userschema.methods.genrateAccessToken = function() {

    jwt.sign(
     {   _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
     }
    )
    }




 userschema.methods.genrateRefreshToken = function() {
    
 }


export const user = mongoose.model("User", userschema);