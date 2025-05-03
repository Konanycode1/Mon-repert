import { Response } from 'express';
import { UserService } from '../core/use-case/user.service';
import { UserCreateDto } from '../core/dto/user.create.dto';
import { UserUpdateDto } from '../core/dto/user.update.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userCreateDto: UserCreateDto, res: Response): Promise<Response>;
    findAll(res: Response): Promise<Response>;
    findOne(id: string): boolean;
    findByUserId(id: string): boolean;
    update(id: string, updateUserDto: UserUpdateDto): boolean;
    remove(id: string): boolean;
}
