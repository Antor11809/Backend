import express from 'express';
const app = express();
const Port = process.env.Port || 5000;


app.get('/', (req, res) => {
  res.send('Hello World kemon nacho tumi valo acho naki!')
})

const users = [
  { id: 1, name: "Rahim", email: "rahim@gmail.com" },
  { id: 2, name: "Karim", email: "karim@gmail.com" },
  { id: 3, name: "Sakib", email: "sakib@gmail.com" },
  { id: 4, name: "Hasan", email: "hasan@gmail.com" }
];

app.get('/Antor',(req, res) => {
    res.send(users)
})

app.get('/jamailla',(req, res) => {
res.send("O hasina gesos kina vuila amare ami akhon riska cahalai dhaka sohore 12345 ")
})

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})