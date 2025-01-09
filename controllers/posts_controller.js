//# COLLEGAMENTO DB BLOG
// Importiamo file di connessione al database
const dbConnection = require("../data/db_connection");

//# INDEX

function index(req, res) {
  // prepariamo la query
  const sql = "SELECT * FROM posts";

  // eseguiamo la query
  dbConnection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database query failed" });
    }

    res.json(results);
  });

  //# TO DO: ripristina filtri con nuovo database

  // const tag = req.query.tag;
  // res.json(tag);
  // console.log("TAG: " + tag);

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
  // recuperiamo l'id dall' URL
  const id = parseInt(req.params.id);

  const sql = "SELECT * FROM posts WHERE id = ?";
  dbConnection.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database query failed" });
    }

    if (results.length === 0)
      return res.status(404).json({ error: "Post not found" });

    res.json(results[0]);
  });

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
  //* creo nuovo oggetto post
  const newPostData = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    // label: req.body.label,
  };

  // //* controllo SE errore uno dei nuovi parametri inseriti
  if (
    !newPostData.title ||
    !newPostData.content
    // / !req.body.image ||
    // /!Array.isArray(req.body.label) // = se "label" non è un array
  ) {
    return res.status(403).json({ error: "Invalid params" });
  }

  const sql = "INSERT INTO posts (title, content, image) VALUES (?, ?, ?)";
  dbConnection.query(
    sql,
    [newPostData.title, newPostData.content, newPostData.image],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to add post" });
      }

      res.json({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
      });
    }
  );

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
  // recuperiamo l'id dall' URL
  const id = parseInt(req.params.id);

  dbConnection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to delete post" });
    }

    res.sendStatus(204);
  });

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
