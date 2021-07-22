import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController{
    @Get()
    async getTeachers(){
        return 'Get All Teachers';
    }

    @Get('/:teacherId')
    async getTeacherById(
        @Param('teacherId') teacherId: string
    ){
        return `Get Teacher By Id : ${teacherId}`;
    }
}