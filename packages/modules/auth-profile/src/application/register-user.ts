import { UserRepository } from '../contracts/user-repository';
import { User } from '../domain/user';
import { AppError } from '@kodnest/shared';
// import { randomUUID } from 'crypto'; // Node environment

export class RegisterUser {
    constructor(private userRepo: UserRepository) { }

    async execute(params: { email: string; name?: string }) {
        const existing = await this.userRepo.findByEmail(params.email);
        if (existing) {
            throw new AppError('USER_EXISTS', 'User already exists');
        }

        const user = User.create({
            id: crypto.randomUUID(), // Assuming Node 19+ or polyfill
            email: params.email,
            name: params.name,
            role: 'STUDENT',
            createdAt: new Date(),
        });

        await this.userRepo.create(user);
        return user;
    }
}
