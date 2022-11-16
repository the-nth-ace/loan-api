import {IUser} from "./user.interface";

export interface IUserRepository{
    create(): Promise<IUser>
    update(): Promise<IUser>
    delete(): null
    findOne(id: string): Promise<IUser>
    findMany(query: any): Promise<Iterable<IUser>>
}