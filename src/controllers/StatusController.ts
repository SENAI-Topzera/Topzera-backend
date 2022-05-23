import { Request, Response } from "express";

export class StatusController {

    async handle(request: Request, response: Response) {
        const message = `running on hostname localhost in port ${process.env.PORT}`;
        return response.json(message);
    }
}