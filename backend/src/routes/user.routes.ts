import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/UserRepository';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
    const userepository = getCustomRepository(UserRepository)
    const users = await userepository.find();
    return response.json(users);
});

appointmentsRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, password });

        delete user.password;

        return response.status(200).json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});


appointmentsRouter.delete('/:id', async (request, response) => {
    const id = request.params.id;
    const userRepository = await getCustomRepository(UserRepository);

    const appointmentExist = await userRepository.findOne({
        id
    });

    if (!appointmentExist) {
        return response.status(400).json({ message: 'Registro não encontrado' });
    }

    userRepository.delete({
        id
    })
    return response.status(200).json({ message: 'foi deletado' });
})

export default appointmentsRouter;