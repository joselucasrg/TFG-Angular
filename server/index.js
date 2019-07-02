const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const { mongoose} = require('./database')
//settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))


//Routes
app.use('/api/criterios',require('./routes/criterios.routes'));

app.listen(app.get('port'), ()=>{
    console.log("arranca en"+app.get('port'))
});