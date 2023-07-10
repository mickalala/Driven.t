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

export interface authUser extends Request {
    userId: number;
}

export async function getUserTicket(req: authUser, res: Response) {
    const userId = req.userId;
    const { ticketTypeId } = req.body
    console.log(ticketTypeId)
    if (ticketTypeId === undefined || isNaN(ticketTypeId) || ticketTypeId === null
        || ticketTypeId === "") {
        return res.sendStatus(400)
    }
    try {
        const userTicket = await ticketService.getUserTicket(userId)

        res.status(httpStatus.OK).send(userTicket)
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(404).send(error.message);
        } else {
            res.status(500).send(error.message)
        }

    }
}

export async function ticketsPost(req: authUser, res: Response) {

    const userId = req.userId;

    try {
        const { ticketTypeId } = req.body;
        if (!ticketTypeId) {
            return res.status(httpStatus.BAD_REQUEST).send("Unspecified ticket type id.")
        }
        const newTicket = await ticketService.createTicket(userId, ticketTypeId)
        res.status(httpStatus.CREATED).send(newTicket)
    } catch (error) {

    }
}