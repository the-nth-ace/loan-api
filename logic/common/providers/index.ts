import { container } from "tsyringe";
import { IUserRepository } from "Domain/auth";

export const usersRepository =
  container.resolve<IUserRepository>("UserRepository");
