import express from 'express';

const app = express();

//GET: Buscar ou listar uma informaç!ao
//POST: Criar alguma nova informação
//PUT: Atualizar uma infromação existente
//DELETE: Deletar uam informação existente

app.post('/users', (request, response) => {
  const users = [
    { name: 'Diogo', age: 19 },
    { name: 'Vini', age: 21 },
  ];

  return response.json(users);
});

app.listen(3333);

