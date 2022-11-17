import { IUser, IUserRepository } from "Domain/auth";
import { SignupUserDto } from "Logic/auth";
import { SingleEmailDTO } from "Logic/common/interfaces";
import EmailService from "Logic/common/services/EmailService";

export class SignupUserUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private _dto: SignupUserDto
  ) {}
  async execute(): Promise<undefined> {
    const { email, password } = this._dto;
    const user = await this._userRepo.create({
      email,
      password,
    });
    if (!user) {
      throw new Error('Something went wrong while creating user')
    }
    this.sendActivationMailToUser(user);
    return
  }

  private sendActivationMailToUser(user: IUser) {
    const emailData: SingleEmailDTO = {
      address: user.email,
      body: user.token || "",
      subject: "Activation Mail",
    };
    EmailService.sendSingle(emailData)
  }

  private generateActivationToken() {}
}
