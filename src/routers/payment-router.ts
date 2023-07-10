import { Router } from "express";
import { getPaymentTicketInfo, postPaymentTicket } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const paymentRouter = Router();

paymentRouter
    .all('/*', authenticateToken)
    .get("/payments?ticketId=1", getPaymentTicketInfo)
    .post("/payments/process", postPaymentTicket);

export { paymentRouter }