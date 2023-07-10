import { TicketType } from "@prisma/client";
import ticketRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { notFoundError } from "@/errors";


async function getTickets() {
    const tickets = await ticketRepository.allTickets()
    return tickets
}

async function getUserTicket(userId: number) {
    const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!userEnrollment) throw notFoundError();

    const enrollmentId = userEnrollment.id;

    const userTicket = await ticketRepository.userTicket(enrollmentId);
    if (!userTicket) throw notFoundError();
    return userTicket
}

async function createTicket(userId: number, ticketTypeId: number) {
    const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId)
    if (!userEnrollment) throw notFoundError();
    const enrollmentId = userEnrollment.id;

    return await ticketRepository.create(enrollmentId, ticketTypeId)
}

const ticketService = {
    getTickets,
    getUserTicket,
    createTicket,
}

export default ticketService;