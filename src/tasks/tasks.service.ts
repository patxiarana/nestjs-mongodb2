import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/tasks.schema';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) { }

   async findAll(){
      return await this.TaskModel.find(); 
    }

   async create(createTask: CreateTaskDTO ){
      const newTask = new  this.TaskModel(createTask);
    await newTask.save();
      return newTask;
    }

    async findOne(id: string) {
     return await this.TaskModel.findById(id)
    }

    async delete(id: string) {
      const task =  await this.TaskModel.findByIdAndDelete(id)
      return task ; 
       }

       async update(id: string, task:UpdateTaskDTO) {
        return await this.TaskModel.findByIdAndUpdate(id,task, {new: true})
       }
}
