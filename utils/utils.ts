import bcrypt from 'bcrypt'


// hashing password
export const hashPassword = async(password:String)=>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}


//compare password for login

export const comparePassword = async(password:any, hashedPassword:any)=>{
    try {
        return await bcrypt.compare(password,hashedPassword);
    } catch (error) {
        console.log(error)
    }
}