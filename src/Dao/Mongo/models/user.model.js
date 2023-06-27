import mongoose from "mongoose";
import cartCollection from "../models/cart.model.js"

const userCollection = "users"

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    age:Number,
    password:String,
    role:{
        type:String,
        require:true,
        enum:["user", "admin", "premium"],
        default:"user"
    },
    cart:{
        type:[
            {
                cart:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: cartCollection,
                },
            },
        ],
        default:[],
    },
})

const userModel = mongoose.model("users", userSchema);
export default userModel;