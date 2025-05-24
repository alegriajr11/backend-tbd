import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';
import { ProductoService } from './producto/producto.service';
import { ProductoController } from './producto/producto.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FeaturesModule, UsersModule],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
