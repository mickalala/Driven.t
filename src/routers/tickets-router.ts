import { Router } from "express";
import { getTickets, getUserTicket, ticketsPost } from "@/controllers/tickets-controllers";
import { authenticateToken } from "@/middlewares";

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get("/types", getTickets)
    .get("/", getUserTicket)
    .post("/", ticketsPost);

export { ticketsRouter };