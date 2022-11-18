import {
  SignUpUserUseCase,
  SignInUserUseCase,
  ForgotPasswordUseCase,
  ActivateUserUseCase,
} from "Logic/auth";

import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  async signin(req: Request, res: Response) {}

  async signup(req: Request, res: Response) {
    const data: any = req.body;

    await SignUpUserUseCase.execute(data);

    return res.status(201).json({
      message: "Signup successful",
    });
  }

  async activateUser(req: Request, res: Response) {}

  async forgotPassword(req: Request, res: Response) {}
}
