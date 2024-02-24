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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const school_service_1 = require("./school.service");
const create_school_dto_1 = require("./dto/create-school.dto");
const swagger_1 = require("@nestjs/swagger");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    saveBasicInfo(createSchoolDto) {
        return this.schoolService.saveBasicInfo(createSchoolDto);
    }
    findAll() {
        return this.schoolService.findAll();
    }
    findOne(id) {
        return this.schoolService.findOne(id);
    }
    remove(id) {
        return this.schoolService.remove(id);
    }
};
exports.SchoolController = SchoolController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/school.entity").School }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_school_dto_1.CreateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "saveBasicInfo", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/school.entity").School] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/school.entity").School }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../shared/reponses/simple-message.dto").SimpleMessage }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "remove", null);
exports.SchoolController = SchoolController = __decorate([
    (0, common_1.Controller)('school'),
    (0, swagger_1.ApiTags)('school'),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
//# sourceMappingURL=school.controller.js.map