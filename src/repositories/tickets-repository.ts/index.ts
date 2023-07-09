import { prisma } from "@/config";

async function allTickets() {
    return prisma.ticketType.findMany()
}

async function userTicket(id: number) {
    return prisma.ticket.findUnique({
        where: { id }
    })
}

const ticketRepository = {
    allTickets,
    userTicket
};

export default ticketRepository;