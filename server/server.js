const express = require('express');
const bodyParser = require ('body-parser');
const app = new express();
const port = 4648;
const cors = require('cors');
const taskCtrl= require('/controller/taskController');
app.use(cors());
app.use(bodyParser.json());
app.post('/api/task', taskCtrl.create);
app.get('/api/task', taskCtrl.read);
app.put('/api/task/:id', taskCtrl.update);
app.put('/api/complete/:id', taskCtrl.complete);
app.delete('/api/task/:id', taskCtrl.delete);



app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})