const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;
const lists = require('./listId.json');
const listsUl = document.getElementById('lists');

lists.lists.forEach(list => {
  const listLi = document.createElement('li');
  const listName = document.createTextNode(list.name);
  listLi.appendChild(listName);
  listUi.appendChild(listLi);
});

app.use(express.static('public'));

app.get('/cards/:listName', async (req, res) => {
  try {
    const list = config.lists.find((list) => list.name === req.params.listName);
    if (!list) throw new Error('Lista não encontrada');

    const response = await fetch(`https://api.trello.com/1/lists/${list.id}/cards?key=${lists.apiKey}&token=${lists.apiToken}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
