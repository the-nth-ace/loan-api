export enum UserStatus{
    ACTIVE,
    INACTIVE,
    DISABLED
}

export interface IUser {
    id: string
    username: string
    password: string
    created_at: Date
    updated_at: Date
    token?: string
    status: UserStatus
    auth_level: number
}