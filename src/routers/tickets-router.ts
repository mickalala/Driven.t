import { Router } from "express";
import { getTickets, getUserTicket, ticketsPost } from "@/controllers/tickets-controllers";

const ticketsRouter = Router();

ticketsRouter
    .get("/types", getTickets)
    .get("/", getUserTicket)
    .post("/",ticketsPost);

export { ticketsRouter };