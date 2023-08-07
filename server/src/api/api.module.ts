import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TasksModule } from 'src/modules/tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [ApiController],
})
export class ApiModule {}
