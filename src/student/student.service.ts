import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid} from 'uuid';
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import { FindTeacherResponseDTO } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
    private students = students;
    getStudents(): FindStudentResponseDTO[]{
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDTO{
        return this.students.find(s => s.id === studentId);
    }

    createStudent(payload: CreateStudentDTO): StudentResponseDTO{
        let newStudent = {
            id: uuid(),
            ...payload,
        };

        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDTO, studentId: string): StudentResponseDTO{
        let updatedStudent: StudentResponseDTO;
        const updatedStudentList = this.students.map(s => {
            if(s.id === studentId){
                updatedStudent = {
                    id: studentId,
                    ...payload,
                }
                return updatedStudent;
            } else{
                return s;
            }
        })
        this.students = updatedStudentList;
        return updatedStudent;
    }

    getStudentsByTeacherId(teacherId: string): FindStudentResponseDTO[]{
        return this.students.filter(s => s.teacher === teacherId);
    }

    updateStudentTeacher(teacherId:string, studentId: string): StudentResponseDTO{
        let updatedStudent: StudentResponseDTO;
        const updatedStudentList = this.students.map(s => {
            if(s.id === studentId){
                updatedStudent = {
                    ...s,
                    teacher: teacherId,
                }
                return updatedStudent;
            } else{
                return s;
            }
        })
        this.students = updatedStudentList;
        return updatedStudent;
    }
}
