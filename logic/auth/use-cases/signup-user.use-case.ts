import {IUser, IUserRepository} from "Domain/auth";
import {SignupUserDto} from "Logic/auth";
import {SingleEmailDTO} from "Logic/common/interfaces";


export class SignupUserUseCase{
constructor(private _userRepo: IUserRepository, private dto: SignupUserDto) {
}
    async execute(){
    const {email, password} = this.dto;
    const user = await this._userRepo.create({
        email, password
    })
        if (!user){
        //    Mongo Error while creating user
        }
        this.sendActivationMailToUser(user)
    }

    private sendActivationMailToUser(user: IUser){
        const emailData: SingleEmailDTO = {
            address: user.email, body: user.token || "", subject: "Activation Mail"
        }

    }

    private generateActivationToken(){

    }
}