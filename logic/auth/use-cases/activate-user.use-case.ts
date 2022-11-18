import { UserStatus } from "Domain/auth";
import { BadRequestError } from "Logic/common";
import { usersRepository } from "Logic/common";

export class ActivateUserUseCase {
  public static async execute(userId: string, dto: { token: string }) {
    const user = await usersRepository.findOne(userId);

    if (dto.token != user.token) {
      throw new BadRequestError("Invalid activation token");
    }
    // TODO Compare time with the one on user

    await usersRepository.update(userId, {
      status: UserStatus.ACTIVE,
    });
  }
}
