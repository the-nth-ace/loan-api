import {BulkEmailDTO, IEmailService, SingleEmailDTO} from "Logic/common/interfaces";


class EmailService implements IEmailService{
    sendBulk(dto: BulkEmailDTO): any {
    }

    sendSingle(dto: SingleEmailDTO): any {
    }
}

export default new EmailService()