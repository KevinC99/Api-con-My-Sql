const express = require('express');
const routerApi = require('./routes/routes')
const app = express();

app.set('port', 3000);
app.use(express.json());
routerApi(app)

app.listen(app.get('port'),() => {
    console.log('listening on port 3000')
})