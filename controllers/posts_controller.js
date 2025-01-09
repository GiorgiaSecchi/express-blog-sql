//# COLLEGAMENTO DB BLOG

const dbConnection = require("../data/db_connection");

//# INDEX

function index(req, res) {
  const tag = req.query.tag;
  // res.json(tag);
  // console.log("TAG: " + tag);

  //# TO DO: USA DB

  // if (tag) {
  //   const filteredPosts = postsData.filter((post) =>
  //     post.tags.includes(tag.toLowerCase())
  //   );
  //   res.json(filteredPosts);
  // } else {
  //   res.json(postsData);
  // }
}

//# SHOW

function show(req, res) {
  //# TO DO: USA DB
  // //* logica per recupero id
  // const id = parseInt(req.params.id);
  // const post = postsData.find((post) => post.id === id);
  // //* avviso errore se il post non esiste
  // if (!post) {
  //   const err = new Error("Post not found");
  //   err.status = 404;
  //   throw err;
  // }
  // //* risposta mostra post
  // res.json(post);
  // console.log("Il post mostrato è: ", post);
}

//# STORE

function store(req, res) {
  //# TO DO: USA DB
  // // const newPostData = req.body;
  // // console.log(newPostData);
  // //* controllo SE errore uno dei nuovi parametri inseriti
  // if (
  //   !req.body.titolo ||
  //   !req.body.contenuto ||
  //   !req.body.immagine ||
  //   !Array.isArray(req.body.tags) // = se "tags" non è un array
  // ) {
  //   const err = new Error("Invalid params");
  //   err.status = 400;
  //   throw err;
  // }
  // //* .at(-1) = inzia a contare partendo dall'ultimo elemento, come scrivere [postsData.lenght -1]
  // //* .id = accedo all'id dell'ultima pizza
  // //* +1 = nuovo id incrementato
  // const newId = postsData.at(-1).id + 1;
  // console.log("Il nuovo post ha ID: " + newId);
  // //* creo nuovo oggetto post
  // const newPostData = {
  //   id: newId,
  //   titolo: req.body.titolo,
  //   contenuto: req.body.contenuto,
  //   immagine: req.body.immagine,
  //   tags: req.body.tags,
  // };
  // //* aggiungo nuovo post all'array posts
  // postsData.push(newPostData);
  // console.log(postsData);
  // res.status(201);
  // res.json(newPostData);
}

//# UPDATE

function update(req, res) {
  //# TO DO: USA DB
  // //* trovo il post da modificare attraverso l'id
  // const id = parseInt(req.params.id);
  // const post = postsData.find((post) => post.id === id);
  // //* avviso errore se il post non esiste
  // if (!post) {
  //   const err = new Error("Post not found");
  //   err.status = 404;
  //   throw err;
  // }
  // //* controllo SE errore uno dei nuovi parametri inseriti
  // if (
  //   !req.body.titolo ||
  //   !req.body.contenuto ||
  //   !req.body.immagine ||
  //   !Array.isArray(req.body.tags) // = se "tags" non è un array
  // ) {
  //   const err = new Error("Invalid params");
  //   err.status = 400;
  //   throw err;
  // }
  // //* aggiorno il post
  // post.titolo = req.body.titolo;
  // post.contenuto = req.body.contenuto;
  // post.immagine = req.body.immagine;
  // post.tags = req.body.tags;
  // //* restituisco il post aggiornato
  // res.json(post);
  // console.log("ID del post sostituito è: " + id);
  // console.log(postsData);
}

//# MODIFY

function modify(req, res) {
  //# TO DO: USA DB
  // const id = parseInt(req.params.id);
  // const post = postsData.find((post) => post.id === id);
  // //* avviso errore se il post non esiste
  // if (!post) {
  //   const err = new Error("Post not found");
  //   err.status = 404;
  //   throw err;
  // }
  // res.json("Modifica il post: " + id);
}

//# DESTROY

function destroy(req, res) {
  //# TO DO: USA DB
  // //* logica per recupero id
  // const id = parseInt(req.params.id);
  // const post = postsData.find((post) => post.id === id);
  // //* avviso errore se il post non esiste
  // if (!post) {
  //   const err = new Error("Post not found");
  //   err.status = 404;
  //   throw err;
  // }
  // //* rimuovo il post
  // const postIndex = postsData.indexOf(post);
  // postsData.splice(postIndex, 1);
  // //* risposta con uno status (senza body) = "la cancellazione è andata a buon fine"
  // res.sendStatus(204);
  // console.log("Eliminato il post con ID: " + id);
  // console.log("Lista aggiornata dei post: ", postsData);
}

module.exports = { index, show, store, update, modify, destroy };
