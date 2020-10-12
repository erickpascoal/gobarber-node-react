import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'
import User from '../models/User';
import authConfig from '../config/Auth'

interface createUser {
    email: string,
    password: string
}

interface response {
    user: User,
    token: string
}

class CreateAuthService {

    public async execute({ email, password }: createUser): Promise<response> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            where: { email }
        });

        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }

        const passwordMatched = await compare(password, user.password);
        console.log(passwordMatched);

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.');
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: expiresIn
        })

        return { user, token };
    }
}

export default CreateAuthService;