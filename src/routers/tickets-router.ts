import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter
    .get("/tickets/types",)
    .get("/tickets",)
    .post("/tickets",);

export { ticketsRouter }