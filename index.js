const express = require('express')
const app = express()
const port = 3000
const authRoutes=require('./routes/auth-routes')
const vaccineInfo = require('./routes/vaccine-info')

app.use('/auth',authRoutes);
app.use('/vaccine', vaccineInfo);

app.get('/', (req,res)=>{
    res.send('Hello World')
});

app.listen(process.env.PORT || port, () =>{
    console.log('Example app  listening all port: '+ port)
})