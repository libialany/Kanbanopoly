import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TasksModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
