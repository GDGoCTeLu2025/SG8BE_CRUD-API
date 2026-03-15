import express from "express"

import categoryRoutes from "./routes/category.route"

import { swaggerDocs } from "./docs/swagger"
import { errorHandler } from "./middlewares/error.middleware"

const app = express()
app.use(express.json())
swaggerDocs(app)

app.use("/categories", categoryRoutes)

app.use(errorHandler)

export default app