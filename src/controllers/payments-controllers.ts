import { Request, Response } from "express";
import httpStatus from "http-status";
import { authUser } from "@/controllers/tickets-controllers";
import paymentService from "@/services/payment-service";

export async function getPaymentTicketInfo(req: authUser, res: Response) {
    const userId = req.userId;

    try {
        const { ticketId } = req.query as Record<string, string>;
        if (!ticketId) {
            return res.sendStatus(400)
        }
        const numberTicketId = parseInt(ticketId)
        const paymentInfo = await paymentService.paymentInfo(userId, numberTicketId);

        res.send(paymentInfo);
    } catch (error) {

    }
}

export async function postPaymentTicket(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}