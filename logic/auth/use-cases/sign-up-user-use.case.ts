import { IUser, IUserRepository } from "Domain/auth";
import { SignUpUserDto } from "Logic/auth";
import { SingleEmailDTO } from "Logic/common/interfaces";
import EmailService from "Logic/common/services/EmailService";

export class SignUpUserUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private _dto: SignUpUserDto
  ) {}

  async execute(): Promise<undefined> {
    const { email, password } = this._dto;
    const user = await this._userRepo.create({
      email,
      password,
    });
    this.sendActivationMailToUser(user);
    return;
  }

  private sendActivationMailToUser(user: IUser) {
    const body = `Hi there! Here's is your activation token ${user.token}. It Expires in 5 Minutes`;

    const emailData: SingleEmailDTO = {
      address: user.email,
      body,
      subject: "Activation Mail",
    };
    EmailService.sendSingle(emailData);
  }
}
