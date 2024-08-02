import { IsString,IsOptional,IsBoolean } from "class-validator";


export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;
    
    @IsBoolean()
    @IsOptional()
    done?:boolean;
}