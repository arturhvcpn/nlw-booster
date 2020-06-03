import express from 'express';

const app = express();

app.get('/users', (request, response)=>{
  
  console.log('Localhost started in port:3333');

  response.json([
    "NLW",
    "Booster",
    "First day",
  ]);
});

app.listen(3333)