import { TicketType } from "@prisma/client";
import ticketRepository from "@/repositories/tickets-repository.ts";
import { notFoundError } from "@/errors";


async function getTickets() {
    const tickets = await ticketRepository.allTickets()
    return tickets
}

async function getUserTicket(id: number) {
    const userTicket = await ticketRepository.userTicket(id);
    if (!userTicket) throw notFoundError();
    return userTicket
}

const ticketService = {
    getTickets,
    getUserTicket
}

export default ticketService;