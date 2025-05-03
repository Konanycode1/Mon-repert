"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const nestjs_logging_interceptor_1 = require("nestjs-logging-interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new nestjs_logging_interceptor_1.LoggingInterceptor());
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map