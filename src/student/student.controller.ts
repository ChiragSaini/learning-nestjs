import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
// import { Request } from 'express';

@Controller('students')
export class StudentController {
    @Get()
    async getStudents(){
        return "All Students Route";
    }

    // Can Use Request
    // @Param() params: { studentId: string }
    @Get('/:studentId')
    async getStudentById(@Param('studentId') studentId: string ){
        // const { studentId } = params;
        return `Get Student By this Id: ${studentId}`;
    }

    // @Req() request: Request
    // const { body } = request;
    @Post()
    async createStudent(@Body() body){
        return `Create Student with this Body Data ${JSON.stringify(body)}`;
    }

    @Put('/:studentId')
    async updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ){
        return `Update Student with Id: ${studentId} and data ${JSON.stringify(body)}`
    }
}
