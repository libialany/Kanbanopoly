import { IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  status: string;
  @IsNotEmpty()
  user_id: number;
}
export class UpdateTaskDto {
  @IsNotEmpty()
  status: string;
}
