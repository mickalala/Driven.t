import { Request, Response } from "express";
import httpStatus from "http-status";
import ticketService from "@/services/tickets-service";

export async function getTickets(req: Request, res: Response) {
    try {
        const tickets = await ticketService.getTickets();
        return res.status(httpStatus.OK).send(tickets)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
