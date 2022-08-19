const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('plstic bags industry ')
})

const me = {
  fname: "sainey",
  lname: "ceesay",
  minit: "dindinma",
  Status: "Online",
 location: "talanding",
 living: "true",
 id:"0479",
 phone: "5861537",
 picture:"./djhdfhdhdh.jpg",
 email:"saineyceesay911@gmail.com",
 gender:"female",
 dob:"04/11/2001*",
}
let users =[
  {
    id:1,
    username:"sainey",
    phone:"5861537",
    password:"secrete"

  },
  {
    id:2,
    username:"tell",
    phone:"5861537",
    password:"facebook"
  },
  {
    id:3,
    username:"france",
    password:"pariso1"

  }
]

app.get('/me',(reg,res)=>{
  res.json(me)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
