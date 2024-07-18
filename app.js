const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
