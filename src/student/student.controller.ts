import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
// import { Request } from 'express';
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import { StudentService } from './student.service';
@Controller('students')
export class StudentController {

    constructor(private readonly studentService:StudentService){}

    @Get()
    getStudents(): FindStudentResponseDTO[] {
        return this.studentService.getStudents();
    }

    // Can Use Request
    // @Param() params: { studentId: string }
    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string):FindStudentResponseDTO {
        // const { studentId } = params;
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
            @Body() body: CreateStudentDTO
        ): StudentResponseDTO {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
            @Param('studentId', new ParseUUIDPipe()) studentId: string,
            @Body() body: UpdateStudentDTO
        ): StudentResponseDTO {
        return this.studentService.updateStudent(body, studentId);
    }
}
