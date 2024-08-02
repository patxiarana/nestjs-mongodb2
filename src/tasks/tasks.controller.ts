import { Controller,Get,Post,Put,Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
    constructor( tasksService: TasksService) {}

    @Get()
    findAll(){
        return "Get all tasks" ; 
    }
    
    @Get(':id')
    findOne(){
        return "Get  task" ; 
    }
    
    @Post()
    create(){
        return "Create a new task" ; 
    }

    @Delete(':id')
    delete(){
        return "Delete a task" ; 
    }

    @Put(':id')
    update(){
        return "Update a task" ; 
    }

}
