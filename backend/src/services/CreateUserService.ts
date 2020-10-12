import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import { hash } from 'bcryptjs';

interface createUser {
    name: string,
    email: string,
    password: string
}

class CreateUserService {

    public async execute({ name, email, password }: createUser) {
        const userRepository = getCustomRepository(UserRepository);

        const checkUserExists = await userRepository.findOne({
            where: { email }
        });

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        const passwordHashed = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: passwordHashed
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;