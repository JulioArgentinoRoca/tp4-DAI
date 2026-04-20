import express from "express"
import {bienvenida, time, wholeDate} from "./src/app.js"

const app = express()
const puerto = 3000

app.get('/', bienvenida)
app.get('/hora', time)
app.get('/fecha-completa', wholeDate)

app.listen(puerto)