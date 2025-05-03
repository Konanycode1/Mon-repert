import { Inject, Injectable } from "@nestjs/common";
import { InterfaceUserRepository } from "features/user/core/interface/user.repository.interface";
import { User } from "features/user/core/interface/user.interface";
import { Model } from "mongoose";
import { UserCreateDto } from "../core/dto/user.create.dto";


@Injectable()
export class UserRepository implements InterfaceUserRepository {

    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
      ) {}

    async create(dto: UserCreateDto): Promise<User> {
       const createdCat = await this.userModel.create(dto);
       return createdCat
    }
    async delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async edit(id: string, dto: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findByUserId(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findUserExist(isLocked?: boolean, lockedUntil?: Date, UserType?: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<any> {
        const users = await this.userModel.find({}).exec();
        return users
    }
    
}