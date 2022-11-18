import { ActivateUserUseCase } from "Logic/auth";
import { usersRepository } from "Logic/common";
import { UserStatus } from "../../../domain";

describe("Activate User Use Case", () => {
  const id = "122344";
  const dto: any = {};

  const mockedFindOne = jest.spyOn(usersRepository, "findOne");
  const mockedUpdate = jest.spyOn(usersRepository, "update");

  mockedFindOne.mockImplementation(async () => {
    return dto;
  });
  mockedUpdate.mockImplementation(async () => {
    return dto;
  });

  const useCase = ActivateUserUseCase;

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have an execute property", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("Should call userRepository.findOne() with userId and dto when execute() is called", async () => {
    await useCase.execute(id, dto);
    expect(mockedFindOne).toHaveBeenCalledWith(id);
  });

  it("Should call userRepository.update() when execute() is called", async () => {
    await useCase.execute(id, dto);
    expect(mockedUpdate).toHaveBeenCalledWith(id, {
      status: UserStatus.ACTIVE,
    });
  });
});
