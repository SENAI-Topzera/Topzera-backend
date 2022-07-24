import { Request, Response } from "express";

class StatusController {
  async handle(request: Request, response: Response) {
    const message = `running on hostname localhost in port ${process.env.PORT}`;
    return response.json(message);
  }
}

export default StatusController;
