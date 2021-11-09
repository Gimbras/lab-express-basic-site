const express = require('express')
const app = express()


app.use( express.static(__dirname + '/public') )

// ROUTES 
app.get('/', (req, res, next) => {
	// res.sendFile('')
  res.sendFile(__dirname + '/views/home.html' )
})

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html' )
})

app.get('/works', (req, res, next) => {
	res.sendFile(__dirname + '/views/works.html' )
})


 
app.listen(3000)