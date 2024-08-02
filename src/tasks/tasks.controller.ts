import { Controller,Get,Post,Put,Delete,Body,Param,ConflictException, NotFoundException,HttpCode} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
@Controller('tasks')
export class TasksController {
    constructor( private tasksService: TasksService) {}

    @Get()
    findAll(){
        return this.tasksService.findAll(); 
    }
    
    @Get(':id')
   async findOne(@Param('id') id:string){
    try {
        return await this.tasksService.findOne(id);
    } catch (error) {
        throw new NotFoundException(`Task with id ${id} not found`);
    }
    }
    
    @Post()
    async create(@Body() body:CreateTaskDTO){
       try {
        return  await this.tasksService.create(body); 
       } catch (error) {
        if(error.code === 11000) {
          throw new ConflictException("Task already exists")
        }
        throw error;
       }
    }

    @Delete(':id')
    @HttpCode(204)
   async delete(@Param('id') id:string){
        try {
        const task = await this.tasksService.delete(id);
        if(!task)  throw new NotFoundException(`Task with id ${id} not found`);
        } catch (error) {
            console.log(error);
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() body:UpdateTaskDTO){
       try {
        const task = await  this.tasksService.update(id, body); 
         return task; 
        } catch (error) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
     
    }

}
