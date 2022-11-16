import {SignupUserDto, SignupUserUseCase} from "Logic/auth/";
import {TestUserRepository} from "Domain/auth/";

describe("Signup User use case", () => {
    const repo = new TestUserRepository()
    const dto: SignupUserDto = {
        confirm_password: "", email: "", password: ""

    }
    const useCase = new SignupUserUseCase(repo,dto)
    it('Should be defined', () => {
        expect(useCase).toBeDefined()
    })

    it('should have a _userRepo property', () => {
        expect(useCase).toHaveProperty('_userRepo')
    })

    it('should have a _emailService property', () => {
        expect(useCase).toHaveProperty('_emailService')
    })


})