import {IUser} from "Domain/auth";

export interface IUserRepository{
    create(dto: Partial<IUser>): Promise<IUser>
    update(dto: Partial<IUser>): Promise<IUser>
    delete(id: string): null
    findOne(id: string): Promise<IUser>
    findMany(query: any): Promise<Iterable<IUser>>
}