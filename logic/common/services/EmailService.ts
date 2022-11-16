import {BulkEmailDTO, IEmailService, SingleEmailDTO} from "Logic/common/interfaces";


export class EmailService implements IEmailService{
    sendBulk(dto: BulkEmailDTO): any {
    }

    sendSingle(dto: SingleEmailDTO): any {
    }
}