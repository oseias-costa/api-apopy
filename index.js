import express from "express"
import connectDatabase from './src/database/db.js'
import dotenv from 'dotenv'

import userRoute from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'
import CategoryRoute from './src/routes/category.route.js'
import ProductRoute from './src/routes/product.route.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
connectDatabase()

app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/category", CategoryRoute)
app.use("/:id/product", ProductRoute)

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))