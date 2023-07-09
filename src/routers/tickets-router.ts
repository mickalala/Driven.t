import { Router } from "express";
import { getTickets, getUserTicket } from "@/controllers/tickets-controllers";

const ticketsRouter = Router();

ticketsRouter
    .get("/types", getTickets)
    .get("/", getUserTicket)
    .post("/",);

export { ticketsRouter };