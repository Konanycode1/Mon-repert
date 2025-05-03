import { InterfaceUserRepository } from "features/user/core/interface/user.repository.interface";
import { User } from "features/user/core/interface/user.interface";
import { Model } from "mongoose";
import { UserCreateDto } from "../core/dto/user.create.dto";
export declare class UserRepository implements InterfaceUserRepository {
    private userModel;
    constructor(userModel: Model<User>);
    create(dto: UserCreateDto): Promise<User>;
    delete(id: string): Promise<any>;
    edit(id: string, dto: any): Promise<any>;
    findById(id: string): Promise<any>;
    findByUserId(userId: string): Promise<any>;
    findUserExist(isLocked?: boolean, lockedUntil?: Date, UserType?: string): Promise<any>;
    findAll(): Promise<any>;
}
