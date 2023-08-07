/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from '../dto/create-task.dto';
@Injectable()
export class TasksService {
  constructor(
    private repository: TasksRepository,
    private readonly prismaService: PrismaService,
  ) {}
  async createTask(createTask: CreateTaskDto) {
    const data = await this.prismaService.$transaction(async (prismaCtx) => {
      const taskCreated = await prismaCtx.task.create({
        data: {
          updatedAt: new Date(),
          user_id: +createTask.user_id,
          status: createTask.status,
          name: createTask.name,
        },
        include: {
          user: false,
        },
      });
      return {
        taskCreated,
      };
    });
    return data;
  }

  async getTasks() {
    const tasks = await this.repository.getTasks({});
    return tasks;
  }
  
  async updateTasks(updateTask: UpdateTaskDto, idTask: string) {
    const data = await this.prismaService.$transaction(async (prismaCtx) => {
      const taskUpdated = await prismaCtx.task.update({
        where:{
          id: idTask
        },
        data: {
          updatedAt: new Date(),
          status: updateTask.status,
        },
      });
      return {
        taskUpdated,
      };
    });
    return data;
  }
}
