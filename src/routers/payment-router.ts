import { Router } from "express";

const paymentRouter = Router();

paymentRouter
    .get("/payments?ticketId=1",)
    .post("/payments/process",);

export { paymentRouter }