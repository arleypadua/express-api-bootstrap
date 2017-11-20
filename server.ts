import * as express from "express";
import { ExpressBuilder } from "./src/express-builder";

var builder = new ExpressBuilder();

const app = builder
  .useDefaultPortConfiguration()
  .useJson()
  .configureRoutes()
  .useCors()
  .build();

app.listen(app.get("port"), () => {
  console.log(`App is running on port ${app.get("port")} in ${app.get("env")} mode`);
  console.log('In order to stop the application, press Ctrl + C');
});