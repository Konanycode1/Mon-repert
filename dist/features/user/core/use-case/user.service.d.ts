import { User } from 'features/user/core/interface/user.interface';
import { UserCreateDto } from 'features/user/core/dto/user.create.dto';
import { UserRepository } from 'features/user/outBound/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: UserCreateDto): Promise<User>;
    findAll(): Promise<User[]>;
}
