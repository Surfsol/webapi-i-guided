//import express - use require
const express = require('express')

const hubsModel = require('./data/hubs-model.js')

const server = express()

//teach express to read JSON from request body
server.use(express.json())


//order matters for request and response
server.get('/', (req, res) => {
    res.send('hello node 22')
})

server.get('/hubs', (req, res) => {
    //get a list of hubs from database
    hubsModel
    .find()
    .then(hubs => {
        res.send(hubs)
    })
    .catch(error =>{
        res.send(error)
    })
    //send the list of hubs back to client
})

// add a hub
server.post('/hubs/echo', (req, res)=> {
    //axios.post(url, data)
    //get hub data from the request
    const hubData = req.body;

    console.log(hubData)

    //validation
    if(!hubData.name){
        res.status(400).json({message: 'you forget to include the name'})
    } else {
    //add hub to database
    hubsModel
        .add(hubData)
        .then(hub => {
            // send list of hubs back to client
            //instead of .send(),
            // use .json will set right headers (tell sever it is .json) and convert object to JSON
            res.json(hub); 
    })
    .catch(error => {
        res.send({message: 'error saving hub'})
    })
    }
})

server.put('/hubs/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    hubsModel.update(id, changes)
    .then(hub => {
        // send list of hubs back to client
        //instead of .send(),
        // use .json will set right headers (tell sever it is .json) and convert object to JSON
        res.json(hub); 
    })
    .catch(error => {
        res.send({message: 'error editing hub'})
    })
})

server
    .delete('/hubs/:id', (req, res) => {
        //axios.delete('/hubs/2')
        const id = req.params.id;

        console.log(id)
        hubsModel
            .remove(id)

            .then(hub => {
            //send hub back to client
            res.json(hub);
            })

            .catch(error => {
            res.json({message: 'error saving the hub'})
            })
        })
const port = 8000

//\n is a line break
server.listen(port, () => console.log(`\n** API on port ${port} **\n`))

//must install server
//npm i express

//then run server
//npm run server