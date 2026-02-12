import { UserRepository } from '../contracts/user-repository';
import { User, UserProps } from '../domain/user';
import { prisma } from '@kodnest/db';

export class PrismaUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;
        return this.mapToDomain(user);
    }

    async create(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    }

    private mapToDomain(raw: any): User {
        return User.create({
            id: raw.id,
            email: raw.email,
            name: raw.name,
            role: raw.role,
            createdAt: raw.createdAt || new Date(),
        });
    }
}
