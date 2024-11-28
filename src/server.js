const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
