import { Request, Response } from "express";
import { buildResponse } from "../utils/response.utils";

class DefaultController {
  static status(req: Request, res: Response) {
    return res.status(200).json({
      status: "ok",
    });
  }
}

export { DefaultController };
