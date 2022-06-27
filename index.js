// CRUD IN NODE JS -> Create, Read, Update, Delete

const express = require('express');
const server = express();


server.use(express.json())


const courses = ['Node JS', 'JavaScript', 'React'];

//Middleware Global
    server.use((req, res, next) => {
        console.log('URL: ${req.url}');

            return next();
    });

function checkCourses(req, res, next){
    if(!req.body.name){
        return res.status(400).json({ error: "Sorry! Course name is required."})
    }

    return next();
}

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
    server.post('/projetos', checkCourses, (req, res) => {
    const { name } = req.body;
    courses.push(name);

        return res.json({message: "Course successfully created!"});
    });


    // Funtion for edit information by id
    server.put('/projetos/:index', checkCourses, (req, res) => {
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
