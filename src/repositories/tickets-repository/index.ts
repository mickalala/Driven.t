import { prisma } from "@/config";
import { Ticket } from "@prisma/client";

// type CreateTicket = Omit<Ticket, "id" | "Payment">
async function allTickets() {
    return prisma.ticketType.findMany()
}

async function userTicket(id: number) {
    return prisma.ticket.findFirst({
        where: {
            enrollmentId: id
        },
        include: { TicketType: true }
    })
}

async function create(enrollmentId: number, ticketTypeId: number) {
    return prisma.ticket.create({
        data: { enrollmentId, ticketTypeId, status: 'RESERVED' },
        include: { TicketType: true }
    })
}

const ticketRepository = {
    allTickets,
    userTicket,
    create
};

export default ticketRepository;