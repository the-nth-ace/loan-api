export class SingleEmailDTO{
    address: string;
    subject: string;
    body: string;
}
export class BulkEmailDTO{
    addresses: Array<string>;
    subject: string;
    body: string;
}


export interface IEmailService{
    sendSingle(dto: SingleEmailDTO): any
    sendBulk(dto: BulkEmailDTO): any
}