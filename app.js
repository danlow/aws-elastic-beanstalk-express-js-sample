const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Waddup World,this is part 2 of the list, reviewing and approving'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
