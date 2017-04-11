const express = require("express")
const port = process.env.PORT || 5000
const app = express()


app.use('/', express.static('public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render("index", {title: 'Reddit app'})
})




app.listen(port,console.log('listening on 5000'))
