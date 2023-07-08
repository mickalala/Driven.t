import { Router } from "express";
import { getTickets } from "@/controllers/tickets-controllers";

const ticketsRouter = Router();

ticketsRouter
    .get("/types", getTickets)
    .get("/",)
    .post("/",);

export { ticketsRouter };