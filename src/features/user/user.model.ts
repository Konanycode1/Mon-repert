import { Module } from "@nestjs/common";
import { DatabaseModule } from "config/db.module";
import { UserController } from "features/user/inBound/user.controller";
import { userProviders } from "features/user/core/provider/user.provider";
import { UserService } from "features/user/core/use-case/user.service";
import { UserRepository } from "features/user/outBound/user.repository";


@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [

    UserService,
     ...userProviders,
     UserRepository
    ],
  })
  export class UsersModule {}