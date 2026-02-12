export enum EventType {
    USER_CREATED = 'USER_CREATED',
}

export interface DomainEvent {
    type: EventType;
    occurredAt: Date;
}
