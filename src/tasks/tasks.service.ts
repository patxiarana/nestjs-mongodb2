import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/tasks.schema';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) { }

    findAll(){
        this.TaskModel.find(); 
    }

   async create(createTask: CreateTaskDTO ){
      const newTask = new  this.TaskModel(createTask);
    await newTask.save();
      return newTask;
    }

    async findOne(id: string) {
     return  this.TaskModel.findById(id)
    }

    async delete(id: string) {
        return  this.TaskModel.findByIdAndDelete(id)
       }

       async update(id: string, task:UpdateTaskDTO) {
        return  this.TaskModel.findByIdAndUpdate(id,task)
       }
}
