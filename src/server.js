const express = require('express')
import configViewEngine from './config/viewEngine'
import initWebRout from './route/web'
import connection from './config/connectDB'
const app = express()
const port = 3000

configViewEngine(app);
initWebRout(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})