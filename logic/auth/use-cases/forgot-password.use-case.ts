import { IUserRepository } from "Domain/auth";
import { IUseCase } from "Logic/common";

export class ForgotPasswordUseCase implements IUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private _userId: string,
    private _dto: {
      password: string;
    }
  ) {}
  async execute() {
    await this._userRepo.update(this._userId, this._dto);
  }
}
