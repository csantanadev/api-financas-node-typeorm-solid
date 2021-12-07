import express from 'express'
import { router } from "./routes";

const app = express()
const PORT = 3333;

app.use(express.json())
app.use(router)


app.listen(PORT, ()=> {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}⚡️`)
})
