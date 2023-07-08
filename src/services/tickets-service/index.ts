import { TicketType } from "@prisma/client";
import ticketRepository from "@/repositories/tickets-repository.ts";

async function getTickets() {
    const tickets = await ticketRepository.allTickets()
    return tickets
}

const ticketService = {
    getTickets
}

export default ticketService;