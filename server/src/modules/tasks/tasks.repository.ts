import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TasksRepository {
  constructor(private prisma: PrismaService) {}

  async createTask(params: { data: Prisma.TaskCreateInput }): Promise<Task> {
    const { data } = params;
    return this.prisma.task.create({ data });
  }

  async getTasks(status: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        status,
      },
    });
  }
  async updateTask(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { where, data } = params;
    return this.prisma.task.update({ where, data });
  }

  async deleteTask(params: {
    where: Prisma.TaskWhereUniqueInput;
  }): Promise<Task> {
    const { where } = params;
    return this.prisma.task.delete({ where });
  }
}
