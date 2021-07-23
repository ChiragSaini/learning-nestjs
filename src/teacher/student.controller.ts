import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService:StudentService){}

    @Get()
    getTeacherStudents(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    ): FindStudentResponseDTO[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId',)
    updateTeacherStudent(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
    ): StudentResponseDTO {
        return this.studentService.updateStudentTeacher(teacherId, studentId);
    }
}
