const dotenv = require('dotenv')
dotenv.config()

console.log(process.env) 

//App Setup
const express = require('express') //imports express framework 
const app = express()// Creates an Express application instance
const port = //Sets the server port to 4000


 //route handlers
app.get('/twitter', (req, res) => { 
    res.send('techdawg')
}) //Responds to GET requests at /twitter endpoint. Returns plain text: "techdawg" 
app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/login',(req, res)=>{
    res.send('<h1>please login at chai aur code </h1> ')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code </h2>")
})


//Server Start
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)//Logs a confirmation message when the server is running
})//Starts the server on port 4000