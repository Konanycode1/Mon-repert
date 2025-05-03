"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const env_validation_1 = require("./env.validation");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(env_validation_1.env.DATABASE_URL),
    },
];
//# sourceMappingURL=db.provider.js.map