export interface UserProps {
    id: string;
    email: string;
    name?: string | null;
    role: 'STUDENT' | 'ADMIN';
    createdAt: Date;
}

export class User {
    constructor(private props: UserProps) { }

    get id() { return this.props.id; }
    get email() { return this.props.email; }
    get name() { return this.props.name; }
    get role() { return this.props.role; }

    static create(props: UserProps): User {
        return new User(props);
    }
}
