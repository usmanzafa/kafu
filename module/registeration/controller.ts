import userModel from '../registeration/model'
import { hashPassword ,comparePassword } from '../../utils/utils';
import JWT from 'jsonwebtoken'


// Register
export const regCont = async(req:any,res:any)=>{
    try {
            // Extract the registration data from the request body
            const {name,email,password} = req.body;

            // validation
        if(!name || !email || !password){
            return res.Status(404).send({
                success:false,
                message:"Please Fill Form"
            })
        }

        // check already

        const chk = await userModel.findOne({email});
        if(chk){
            return res.status(404).send({
                success:false,
                message:"User Already Registerd"
            })
        }

        // hashpassword

        const hashedPassword = await hashPassword(password);
        
            // Create a new user instance
            const user = new userModel({name,email,password:hashedPassword});
        
            // Save the user to the database
            await user.save();
        
            // Return a success response
            res.status(200).send({ message: 'User registered successfully', success:true ,user });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:"Register Route Error"
        })
    }
}


// LogIn
export const loginCont = async(req:any,res:any)=>{
    try {
        const{email,password}=req.body;

        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Fill Field"
            })
        }

        // check email
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                messsage:"User Not Registerd"
            })
        }

        // check password
        const chk = await comparePassword(password,user.password);
        if(!chk){
            return res.status(404).send({
                success:false,
                messsage:"password invalid"
            })
        }

        // login and jwt token

        const token = await JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'3600s'})
        res.status(200).send({
            success:true,
            message:"User Login Successfully",
            token
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:"login Route Error"
        })
    }
}


// Get user by Token
export const usrByToken = async(req:any,res:any)=>{
    try {
        const user =req.user
        const id = user.id;
        const userData = await userModel.findOne({id:id.email})  
        res.send({userData:{
            name:userData.name,
            email:userData.email
        }})
    } catch (error) {
        console.log(error)
    }
}


// Get user by id
export const usrById = async(req:any,res:any)=>{
    try {
        const{id}=req.params;
        const user = await userModel.findOne({id:id.email});
        res.send({user:{
            name:user.name,
            email:user.email
        }})
    } catch (error) {
        console.log(error)
    }
}



// new