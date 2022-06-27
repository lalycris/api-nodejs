// CRUD IN NODE JS -> Create, Read, Update, Delete

const express = require('express');
const server = express();


server.use(express.json())


const courses = ['Node JS', 'JavaScript', 'React'];


    // Funciton for search by id
    server.get('/projetos/:index', (req, res) => {
    const { index } = req.params;

        return res.json( courses[index]);
    });

    
    // Function for list all data
    server.get('/projetos', (req, res) => {
        
        return res.json(courses);
    });

    
    // Funtion for create infomation
    server.post('/projetos', (req, res) => {
    const { name } = req.body;
    courses.push(name);

        return res.json({message: "Course successfully created!"});
    });


    // Funtion for edit information by id
    server.put('/projetos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    courses[ index ] = (name);

        return res.json({message: "Course successfully edited!"});
    });


    // Function for delete information by id
    server.delete('/projetos/:index', (req, res) => {
    const { index } = req.params;

    courses.splice(index, 1);

        return res.json({message: "Course successfully deleted!"});
    })



server.listen(3000);
