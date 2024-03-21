import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [AuthModule, UsersModule, RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}