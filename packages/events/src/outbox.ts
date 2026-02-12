export interface OutboxMessage {
    id: string;
    type: string;
    payload: any;
    createdAt: Date;
}
