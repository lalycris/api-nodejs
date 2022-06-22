// CRUD EM NODE JS

const express = require('express');

const server = express();

server.use(express.json())

const cursos = ['Node JS', 'JavaScript', 'React'];

server.get('/projetos/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json( cursos[index]);
});

server.get('/projetos', (req, res) => {
    return res.json(cursos);
});

server.post('/projetos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json({message: "Curso criado com sucesso!"});
});

server.put('/projetos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    cursos[ index ] = (name);

    return res.json({message: "Curso editado com sucesso!"});
});

server.delete('/projetos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json({message: "Curso deletado com sucesso!"});
})


server.listen(3000);
