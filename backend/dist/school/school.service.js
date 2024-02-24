"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const custom_exceptions_1 = require("../shared/utils/custom-exceptions");
let SchoolService = class SchoolService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveBasicInfo(createSchoolDto) {
        const { logoUrl, name } = createSchoolDto;
        try {
            return await this.prisma.school.create({
                data: {
                    name,
                    logoUrl,
                },
            });
        }
        catch (error) {
            throw new custom_exceptions_1.CustomBadRequestException({
                message: 'A school with that name already exists',
                actualServerError: error,
            });
        }
    }
    async findAll() {
        return await this.prisma.school.findMany();
    }
    async findOne(id) {
        try {
            return await this.prisma.school.findUnique({
                where: { id },
            });
        }
        catch (error) {
            throw new custom_exceptions_1.CustomBadRequestException({
                message: 'No school exists with that Id',
                actualServerError: error,
            });
        }
    }
    async remove(id) {
        try {
            await this.prisma.school.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new custom_exceptions_1.CustomBadRequestException({
                message: 'No school exists with that Id',
                actualServerError: error,
            });
        }
        return {
            message: 'school was successfully deleted',
        };
    }
};
exports.SchoolService = SchoolService;
exports.SchoolService = SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SchoolService);
//# sourceMappingURL=school.service.js.map