import { prisma } from "@/config";

async function allTickets() {
    return prisma.ticket.findMany()
}

const ticketRepository = {
    allTickets
};

export default ticketRepository;