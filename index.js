
 const app = require('./app')
require('dotenv').config()
const port = process.env.PORT || 80000

app.listen(port, () => console.log("Server running @" +  port)) 