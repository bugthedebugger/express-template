import express, { Request, Response } from "express";
import { DefaultController } from "../controller/index.controller";

const statusRouter = express.Router();

statusRouter.route("/").get(DefaultController.status);

export { statusRouter };
