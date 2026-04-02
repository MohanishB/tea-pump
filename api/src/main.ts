/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
//   });

//   await app.listen(process.env.PORT ?? 4000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow local dev frontends (Next may run on 3000 or 3001 if 3000 is busy)
  app.enableCors({
    origin: (origin, callback) => {
      const allowed = new Set<string>([
        'http://localhost:3000',
        'http://localhost:3001',
      ]);

      // allow server-to-server calls (no Origin header) + allowed local origins
      if (!origin || allowed.has(origin)) return callback(null, true);

      return callback(new Error(`CORS blocked for origin: ${origin}`), false);
    },
  });

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 4000);
}

bootstrap();
