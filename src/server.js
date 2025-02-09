const express = require('express');
const { swaggerUi, swaggerDocs } = require('./docs/swaggerConfig');
const cors = require('cors');
const routes = require('./routes');
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use("/uploads", express.static(path.join(__dirname, "public")));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
