import { IUser } from "Domain/auth";
import { SignUpUserDto } from "Logic/auth";
import { SingleEmailDTO, usersRepository } from "Logic/common";
import EmailService from "Logic/common/services/EmailService";

export class SignUpUserUseCase {
  public static async execute(dto: SignUpUserDto): Promise<undefined> {
    const { email, password } = dto;
    const user = await usersRepository.create({
      email,
      password,
    });
    this.sendActivationMailToUser(user);
    return;
  }

  private static sendActivationMailToUser(user: IUser) {
    const body = `Hi there! Here's is your activation token ${user.token}. It Expires in 5 Minutes`;
    const emailData: SingleEmailDTO = {
      address: user.email,
      body,
      subject: "Activation Mail",
    };
    EmailService.sendSingle(emailData);
  }
}
