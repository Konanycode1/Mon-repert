
import { UserCreateDto } from "features/user/core/dto/user.create.dto";
import { UserUpdateDto } from "features/user/core/dto/user.update.dto";
import { User } from "features/user/core/interface/user.interface";
export abstract class InterfaceUserRepository {
    abstract create(dto: UserCreateDto): Promise<User>;
    abstract findById(id: string): Promise<User | null>;
    abstract findByUserId(userId: string): Promise<User | null>;
    abstract findUserExist(isLocked?: boolean, lockedUntil?: Date, UserType?: string): Promise<User | null>;
    abstract findAll(): Promise<Array<User>>;
    abstract edit(id: string, dto: UserUpdateDto): Promise<User>;
    abstract delete(id: string): Promise<User>;
  }
  