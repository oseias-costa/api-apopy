const express = require("express")
const app = express()
const connectDatabase = require('./src/database/db')
const userRoute = require('./src/routes/user.route.js')

app.use(express.json())
connectDatabase()

app.use("/user", userRoute)

const port = 3000
app.listen(port, () => console.log(`Server running on port ${port}`))