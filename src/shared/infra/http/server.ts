import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../../swagger.json";
import { handleError } from "../../errors/errorHandlewr.midllware";
import { router } from "./routes";

import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(handleError);

app.get("/text-debbuger", (request, response) => {
  console.log("debugger");
  return response.status(200).json({ message: "menagem do debuger" });
});

app.listen(3333, () => console.log("Server is running... 123"));
