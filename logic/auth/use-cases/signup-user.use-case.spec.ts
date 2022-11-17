import { SignUpUserDto, SignUpUserUseCase } from "Logic/auth/";
import { TestUserRepository } from "Domain/auth/";
import { IUser, UserStatus } from "Domain/auth";
import { InternalServerError } from "Logic/common";

describe("Signup User use case", () => {
  const repo = new TestUserRepository();
  const dummyUser: IUser = {
    auth_level: 0,
    created_at: new Date(),
    email: "",
    id: "",
    password: "",
    status: UserStatus.INACTIVE,
    updated_at: new Date(),
  };
  const mockedCreate = jest.spyOn(repo, "create");

  mockedCreate.mockImplementation(async () => {
    return Promise.resolve(dummyUser);
  });
  const dto: SignUpUserDto = {
    confirm_password: "",
    email: "",
    password: "",
  };
  const useCase = new SignUpUserUseCase(repo, dto);
  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _userRepo property", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("should have a _dto property", () => {
    expect(useCase).toHaveProperty("_dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call _userRepo.create on execute()", async () => {
    await useCase.execute();
    expect(mockedCreate).toHaveBeenCalled();
  });
});
