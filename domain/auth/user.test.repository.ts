import {IUserRepository} from "Domain/auth/interfaces/user.repository.interface";
import { IUser } from "./interfaces";

export class TestUserRepository implements IUserRepository {
    create(): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    delete(): null {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    findMany(query: any): Promise<Iterable<IUser>> {
        throw new Error("Method not implemented.");
    }

}