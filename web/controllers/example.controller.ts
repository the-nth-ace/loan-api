import { Request, Response } from "express";

export class ExampleController {
  async create(req: Request, res: Response) {
    const payload = req.body;

    // Call service
    return res.json({
      message: "success",
    });
  }

  async index(req: Request, res: Response) {
    // Call service
    const data: Array<any> = [];
    return res.json({
      data,
    });
  }

  async get(req: Request, res: Response) {
    try {
      // Call service
      const data = {};
      return res.json({
        data,
      });
    } catch (err) {
      return res.sendStatus(500);
    }
  }
}

export default new ExampleController();
