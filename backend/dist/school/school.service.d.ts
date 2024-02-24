import { CreateSchoolDto } from './dto/create-school.dto';
import { School } from './entities/school.entity';
import { SimpleMessage } from 'src/shared/reponses/simple-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SchoolService {
    private prisma;
    constructor(prisma: PrismaService);
    saveBasicInfo(createSchoolDto: CreateSchoolDto): Promise<School>;
    findAll(): Promise<School[]>;
    findOne(id: string): Promise<School>;
    remove(id: string): Promise<SimpleMessage>;
}
