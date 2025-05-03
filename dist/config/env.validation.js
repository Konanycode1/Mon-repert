"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const dotenv = require("dotenv");
dotenv.config();
const envSchema = zod_1.default.object({
    NODE_ENV: zod_1.default.enum(['development', 'production', 'test']).default('development'),
    PORT: zod_1.default.coerce.number().default(3000),
    DATABASE_URL: zod_1.default
        .string()
        .url({ message: 'DATABASE_URL is required' })
        .default('mongodb+srv://abrahamkonany:OBfI1crZWTdwJwun@cluster0.yzcdd.mongodb.net/minsika?retryWrites=true&w=majority&appName=Cluster0'),
    JWT_SECRET: zod_1.default.string({ message: 'JWT_SECRET is required' }),
    JWT_EXPIRES_IN: zod_1.default.string({ message: 'JWT_EXPIRES_IN is required' }).default('1h'),
    JWT_REFRESH_SECRET: zod_1.default.string({ message: 'JWT_REFRESH_SECRET is required' }),
    JWT_REFRESH_EXPIRES_IN: zod_1.default.string({ message: 'JWT_REFRESH_EXPIRES_IN is required' }).default('30d'),
});
exports.env = envSchema.parse(process.env);
//# sourceMappingURL=env.validation.js.map