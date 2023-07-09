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

export async function getUserTicket(req: Request, res: Response) {
    const { ticketTypeId } = req.body
    console.log(ticketTypeId)
    if (ticketTypeId === undefined || isNaN(ticketTypeId) || ticketTypeId === null || ticketTypeId === "") {
        return res.sendStatus(400)
    }
    try {
        const userTicket = await ticketService.getUserTicket(ticketTypeId)

        res.status(httpStatus.OK).send(userTicket)
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(404).send(error.message);
        } else {
            res.status(500).send(error.message)
        }

    }
}

export async function ticketsPost(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}