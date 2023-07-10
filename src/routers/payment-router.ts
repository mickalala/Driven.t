import { Router } from "express";
import { getPaymentTicketInfo, postPaymentTicket } from "@/controllers";

const paymentRouter = Router();

paymentRouter
    .get("/payments?ticketId=1", getPaymentTicketInfo)
    .post("/payments/process", postPaymentTicket);

export { paymentRouter }