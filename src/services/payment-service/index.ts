import { notFoundError, unauthorizedError } from "@/errors";
import paymentRepository from "@/repositories/payment-repository";
import ticketRepository from "@/repositories/tickets-repository";
import { Payment } from "@prisma/client";

export type PaymentInfo = {
    ticketId: number;
    value: number;
    cardIssuer: string;
    cardLastDigits: string;
};

async function paymentInfo(userId: number, ticketNumber: number) {
    const userTicket = await ticketRepository.userTicket(userId);
    if (!userTicket) throw notFoundError();
    // if (userTicket.enrollmentId !== userId) throw unauthorizedError();

    const userPayment = await paymentRepository.userPaymentInfo(ticketNumber)
    if (!userPayment) throw notFoundError();
    const { id, ticketId, value, cardIssuer, cardLastDigits, createdAt, updatedAt } = userPayment;
    return {
        id,
        ticketId,
        value,
        cardIssuer,
        cardLastDigits,
        createdAt,
        updatedAt,
    };
}

async function newPayment() {

}

const paymentService = {
    paymentInfo,
    newPayment
}

export default paymentService;