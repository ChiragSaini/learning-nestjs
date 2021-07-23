import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        const studentId = req.params?.studentId;
        const studentExists = students.some(s => s.id === studentId);
        if(!studentExists){
            throw new HttpException('Student Not Found', 400);
        }
        next();
    }
}