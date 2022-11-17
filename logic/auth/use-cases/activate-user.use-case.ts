import { IUserRepository, UserStatus } from "Domain/auth";
import { IUseCase, BadRequestError } from "Logic/common";

export class ActivateUserUseCase implements IUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private _userId: string,
    private _dto: { token: string }
  ) {}

  async execute() {
    const user = await this._userRepo.findOne(this._userId);
    if (this._dto.token != user.token) {
      throw new BadRequestError("Invalid activation token");
    }

    // TODO Compare time with the one on user

    await this._userRepo.update(this._userId, {
      status: UserStatus.ACTIVE,
    });
  }
}
