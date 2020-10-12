import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import { parseISO } from 'date-fns'
import AppoitmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import enseureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(enseureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppoitmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointmentService = new CreateAppointmentService();

        const appointment = await createAppointmentService.execute({ provider_id, date: parsedDate });

        return response.status(200).json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

appointmentsRouter.delete('/:id', async (request, response) => {
    const id = request.params.id;
    const appointmentsRepository = await getCustomRepository(AppoitmentsRepository);

    const appointmentExist = await appointmentsRepository.findOne({
        id
    });

    if (!appointmentExist) {
        return response.status(400).json({ message: 'Registro não encontrado' });
    }

    appointmentsRepository.delete({
        id
    })
    return response.status(200).json({ message: 'foi deletado' });
})

export default appointmentsRouter;