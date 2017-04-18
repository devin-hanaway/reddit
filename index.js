const express = require("express")
const linkQuery = require('./db/link_query')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5001
const app = express()


app.use('/', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  linkQuery.getAll().then(data => {
    res.render('index', {data})
  })
})

app.post('/add-link', (req, res) => {
  console.log(req.body);
  req.body['votes'] = 0
  linkQuery.add(req.body).then(() =>{
    res.redirect('/')
  }).catch(function(error){
    console.log('this is error:', error);
  })
})

app.post('/upvote/:id', (req, res) => {
  console.log("this is upvoting");
  linkQuery.upvote(req.body)
  .then(()=>{
    res.redirect('/')
  })
})

app.post('/downvote/:id', (req, res) => {
  console.log("this is downvoting");
  linkQuery.downvote(req.body)
  .then(()=>{
    res.redirect('/')
  })
})

app.get("/delete/:id", (req, res)=> {
  console.log("deleted post");
  linkQuery.deleteLink(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
})


app.get("/comments/:id", (req, res)=>{
  linkQuery.getPage(req.params.id)
  .then(data=>{
    console.log(data);
    res.render("comments", {data, title: data[0].title, votes: data[0].votes})

  })
})

app.post("/addComment/:id", (req, res)=>{
  req.body.link_id = req.params.id
  let comId = req.params.id
  linkQuery.addComment(req.body)
  .then(data =>{
    res.redirect("/comments/"+comId)
  })
})



app.listen(port,console.log('listening on 5000'))
