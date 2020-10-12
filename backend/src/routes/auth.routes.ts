import { Router } from 'express';
import CreateAuthService from '../services/CreateAuthService';

const authRouter = Router();


authRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const createAuthService = new CreateAuthService();

        const { user, token } = await createAuthService.execute({ email, password });

        delete user.password;

        return response.status(200).json({ user, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default authRouter;