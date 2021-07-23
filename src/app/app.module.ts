import { Module } from '@nestjs/common';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [StudentModule, TeacherModule]
})
export class AppModule {}
