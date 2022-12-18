const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

//bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')


// app 
const app = express()

// connecting to database
mongoose
.connect(
    process.env.DATABASE_LOCAL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        `Connected to database`)
  );


// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

// cors - using if statement to prevent cors error
if (process.env.NODE_ENV == "development") {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}

// routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)


// port
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})