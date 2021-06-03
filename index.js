require('dotenv').config()
const express = require('express')
const server = express()

console.log("HOWDY")
console.log("USER----->", process.env.USER)
console.log("SHELL---->", process.env.SHELL)

if (process.env.NODE_ENV === 'production') {
    console.log('this means this code is deployed')
}

const PORT = process.env.PORT || 5000
console.log('PORT--->', PORT)

server.get('/api', (req, res) => {
    res.json({ message: `${process.env.COHORT} ROCKS!` })
})

server.use((req, res) => {
    res.status(404).json({ message: 'oops! couldn\'t find that!'})
})

server.listen(PORT, () => {
    console.log(`listen on ${PORT}`)
})