import { prisma } from "@/config";
import { PaymentInfo } from "@/services/payment-service";

async function userPaymentInfo(ticketId: number) {
    return await prisma.payment.findFirst({
        where: { ticketId },
        include: { Ticket: { include: { Enrollment: true } } },
    })
}

async function newPayment(info: PaymentInfo) {
    return await prisma.payment.create({
        data: { ...info },
    });
}

const paymentRepository = {
    userPaymentInfo,
    newPayment
}

export default paymentRepository;