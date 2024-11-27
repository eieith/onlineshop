import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));
app.get('/',(req,res)=>{
    res.send('hello world'); 
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});