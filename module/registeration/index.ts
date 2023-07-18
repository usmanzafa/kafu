import {logInMiddle} from "../registeration/authService"
import {regCont,loginCont ,usrByToken , usrById} from '../registeration/controller'

const router = (fastify: any, opts: any, done: any)=>{
fastify.post('/register',regCont);
fastify.post('/login',loginCont);

//medlware
fastify.get('/user',{preValidation: [logInMiddle]},usrByToken);

// get user by id
fastify.get('/user/:id',usrById)
done();
}
export default router;