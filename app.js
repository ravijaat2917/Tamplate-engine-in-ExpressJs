import express from 'express';
import { join } from 'path';
import router from './routes/web.js';

const port = process.env.port || '3000';

const app = express();
//Use static files 
app.use('/css',express.static(join(process.cwd(),'public')));

// setup the directory where tamplet files are located
app.set('views' , './views');

// Setup which tamplat engine is used
app.set('view engine' , 'ejs' );

app.use(router);

app.listen(port , ()=>{
    console.log(`App listening at http://localhost:3000`);
});