const express = require('express')
const app = express()
const port = 3000 || process.env.port
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const url =  'mongodb://localhost:27017/'
const cors = require('cors')
const ObjectId = require('mongodb').ObjectID;


//for body parser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())

//Create
app.post('/contacts', (req, res) => {
    var contact_data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        email: req.body.email,
        facebook: req.body.facebook,
        imgURL: req.body.imgURL
    }
   
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        
        var dbo = db.db('ContactList')
        var collection = dbo.collection('Contacts')
    
        collection.insertOne(contact_data,function(err, result){
            if(err) throw err;
            console.log("contact data inserted")
        
            res.send({
                message: "A contact is added"
            })
        })
        db.close()
    })    
});

//get contacts list
app.get('/contacts', (req, res) => {
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('ContactList')
        var collection = dbo.collection('Contacts')
        console.log('list recieved')
        collection.find({}).toArray(function(err, result){
            if(err) throw err;
            res.send(result)
        })
        db.close()
    })
});


app.get('/contacts/:id', (req, res) => {
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('ContactList')
        var collection = dbo.collection('Contacts')
        
        var id = req.params.id
        var query = {_id: ObjectId(id)}

        collection.findOne(query,function(err, result){
            if(err) throw err;
            console.log(result)
            res.send(result)
        })
        db.close()
    })
});

//update
app.put('/contacts/update', (req, res) => {
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('ContactList')
        var collection = dbo.collection('Contacts')
        
        var id = req.body.id
        console.log(id)
        var firstName = req.body.firstName
        var lastName = req.body.lastName
        var mobile = req.body.mobile
        var email = req.body.email
        var facebook = req.body.facebook
        var imgURL = req.body.imgURL
        var query = {_id: ObjectId(id)}
        var newVal = { $set: {
            firstName:firstName, 
            lastName:lastName,
            mobile:mobile, 
            email:email, 
            facebook:facebook, 
            imgURL:imgURL
            } 
        };
        collection.updateOne(query, newVal,function(err, result){
            if(err) throw err;
            console.log(result)
            res.send({
                message: "Contact Updated"
            })
        })
        db.close()
    })
});

app.delete('/contacts/:id', (req, res) => {

    
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('ContactList')
        var collection = dbo.collection('Contacts')
        
        var id = req.params.id
        console.log(id)
        var query = {_id: ObjectId(id)}

        collection.deleteOne(query, function(err, result){
            if(err) throw err
            console.log(result)
            res.send({message: "a contact deleted"})
        })
        db.close()
    })
});

app.listen(port, () => {
    console.log(`Server started on port: `+ port);
});