import { SignUpUserDto, SignUpUserUseCase } from "Logic/auth/";
import { IUser, UserStatus } from "Domain/auth";
import { usersRepository } from "Logic/common";

describe("Signup User use case", () => {
  const dummyUser: IUser = {
    auth_level: 0,
    created_at: new Date(),
    email: "",
    id: "",
    password: "",
    status: UserStatus.INACTIVE,
    updated_at: new Date(),
  };
  const mockedCreate = jest.spyOn(usersRepository, "create");
  mockedCreate.mockImplementation(async () => {
    return Promise.resolve(dummyUser);
  });
  const dto: SignUpUserDto = {
    confirm_password: "",
    email: "",
    password: "",
  };
  const useCase = SignUpUserUseCase;
  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call _serRepo.create on execute()", async () => {
    await useCase.execute(dto);
    expect(mockedCreate).toHaveBeenCalled();
  });
});
