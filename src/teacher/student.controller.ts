import { Controller, Get, Put, Param } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    async getTeacherStudents(
        @Param('teacherId') teacherId: string,
    ){
        return `Get All Students that belong to a Teacher: ${teacherId}`;
    }

    @Put('/:studentId')
    async updateTeacherStudent(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
    ){
        return `Update Student with a id of ${studentId} to teacher with id of ${teacherId}`;
    }
}
