import fastify from 'fastify'
import dotenv from 'dotenv'
import dbConnection from './utils/db';
import router from './module/registeration/index';
import morgan from 'morgan'

const server = fastify()
dotenv.config();
dbConnection();
server.register(morgan('dev'));
server.register(router);

const PORT = process.env.PORT;
server.listen(PORT , () => {
  console.log(`Server listening at http://localhost:8080`)
})

