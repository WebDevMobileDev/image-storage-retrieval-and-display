import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    saveBasicInfo(createSchoolDto: CreateSchoolDto): Promise<import("./entities/school.entity").School>;
    findAll(): Promise<import("./entities/school.entity").School[]>;
    findOne(id: string): Promise<import("./entities/school.entity").School>;
    remove(id: string): Promise<import("../shared/reponses/simple-message.dto").SimpleMessage>;
}
