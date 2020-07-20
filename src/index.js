const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');


const app = express();
app.use(express.json());

const recipes = [];

app.get('/', (request, response) => {
  const { category } = request.query;

  // const results = category
  // ? recipes.filter(recipe => recipe.category.includes(category))
  // : category; //Filtro para receber por categoria

  // return response.json(results); //Resposta para o filtro;

  return response.json(recipes); //Resposta sem filtragem;
  // return response.json({ message: 'Olá mundo.' });
});

// Rota com filtragem de categoria
/* app.get('/', (request, response) => {
  const { category } = request.query;

  const results = category
  ? recipes.filter(recipe => recipe.category.includes(category))
  : category; //Filtro para receber por categoria

  return response.json(results); //Resposta para o filtro;
}); */

app.post('/create', (request, response) => {
  const { title, category, ingredients, preptime } = request.body;

  const recipe = {id: uuid(), title, category, ingredients, preptime};

  recipes.push(recipe);

  return response.json(recipe);
});

app.listen(1711, () => {
  console.log('🧨 Backend started. 🎃');
});