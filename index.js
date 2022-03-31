const express = require('express')
const app = express()
const port = 3000
const dataFromSendgrid = [];
app.get('/event', (req, res) => {
    res.json(dataFromSendgrid);
})

app.post('/event', (req, res)=>{
   dataFromSendgrid.push(req.body);
    res.end();
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})