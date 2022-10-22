import express from 'express'
import cors from "cors";
import { addNewClothes } from './src/clothing.js';

const port = 3030
const app = express()
app.use(express.json())

app.use(cors())
app.post('/clothing', addNewClothes)



app.listen(port, () => console.log(`Listening on http://localhost:${port}....`))