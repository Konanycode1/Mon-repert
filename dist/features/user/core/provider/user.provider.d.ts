import { Connection } from 'mongoose';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
        timestamps: true;
    }, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
        phone?: string | null | undefined;
        dateOfBirth?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
