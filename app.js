const express = require('express')
const app = express()
const port = 8000

// Static Files
app.use('/public', express.static(__dirname + "/public"));

// Set Views
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index')
})

// Listen on port 3000
app.listen(port,()=> console.info(`Listening on port ${port}`))