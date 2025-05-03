import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    dateOfBirth?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
    phone?: string | null | undefined;
    dateOfBirth?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
