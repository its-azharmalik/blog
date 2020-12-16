import express from 'express'
import dotenv  from 'dotenv'
import mongoose from 'mongoose'
import blogRoutes from './blogRoutes.js'
import { notFound, errorHandler } from './errorMiddleware.js'
import connectDB from './configDB.js'

dotenv.config()

// Database Connect Config  - - - - - - -- - -  - - - - - - -  - - - -- - - - - - - - - - - 

connectDB()

// Database Connect Config Ends  - - - - - - -- - -  - - - - - - -  - - - -- - - - - - - - - - - 


const app = express();

// GET Home
app.get('/', (req, res) => {
    res.render('')
})


app.use('/api/blogs', blogRoutes)


app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`))