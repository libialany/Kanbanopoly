/* eslint-disable prettier/prettier */
import { Patch, Param, Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/modules/dto/create-task.dto';
import { TasksService } from 'src/modules/tasks/tasks.service';

@Controller('api')
export class ApiController {
  constructor(private readonly tasksService: TasksService) {}

  @Post(`task`)
  async createTask(@Body() data: CreateTaskDto) {
    return this.tasksService.createTask(data);
  }

  @Get('tasks')
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Patch(':id/task')
  async actualizar(@Param('id') idTask: string, @Body() data: UpdateTaskDto) {
    return this.tasksService.updateTasks(data,idTask);
  }
}
