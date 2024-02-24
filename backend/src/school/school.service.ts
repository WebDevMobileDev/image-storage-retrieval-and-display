import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { School } from './entities/school.entity';
import { SimpleMessage } from 'src/shared/reponses/simple-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomBadRequestException } from 'src/shared/utils/custom-exceptions';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async saveBasicInfo(createSchoolDto: CreateSchoolDto): Promise<School> {

    const { logoUrl, name } = createSchoolDto;

    try {

      return await this.prisma.school.create({
        data: {
          name,
          logoUrl,
        },
      });

    } catch (error) {

      throw new CustomBadRequestException({
        message: 'A school with that name already exists',
        actualServerError: error,
      });

    }

  }

  async findAll(): Promise<School[]> {
    return await this.prisma.school.findMany();
  }

  async findOne(id: string): Promise<School> {
    try {
      return await this.prisma.school.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new CustomBadRequestException({
        message: 'No school exists with that Id',
        actualServerError: error,
      });
    }
  }

  async remove(id: string): Promise<SimpleMessage> {
    try {
      await this.prisma.school.delete({
        where: { id },
      });
    } catch (error) {
      throw new CustomBadRequestException({
        message: 'No school exists with that Id',
        actualServerError: error,
      });
    }
    return {
      message: 'school was successfully deleted',
    };
  }

  // async saveCategorisation(categorisation: CategorisationDto, schoolId: string): Promise<SimpleMessage> {
  //   const {  schoolSector, schoolType } = categorisation;
  //   try {
  //     await this.prisma.school.update({
  //       where: { id: schoolId},
  //       data: {
  //         sector: schoolSector,
  //         type: schoolType
  //       },
  //     });
  //   } catch (error) {
  //     throw new CustomBadRequestException({
  //       message: 'Could not find school with that id',
  //       actualServerError: error,
  //     });
  //   }
  //   return {
  //     message: 'School categorisation saved',
  //   };
  // }

  // async saveAddress(address: AddressDto, schoolId: string): Promise<SimpleMessage> {
  //   const {   country, locationDescription, pOBox, quater, region } = address;
  //   try {
  //     await this.prisma.school.update({
  //       where: { id: schoolId},
  //       data: {
  //          address: {
  //           country, locationDescription, pOBox, quater, region
  //          }
  //       },
  //     });
  //   } catch (error) {
  //     throw new CustomBadRequestException({
  //       message: 'Could not find school with that id',
  //       actualServerError: error,
  //     });
  //   }
  //   return {
  //     message: 'School address saved',
  //   };
  // }

  // async saveDivision(division: DivisionDto, schoolId: string): Promise<SimpleMessage> {
  //   const { numberOfLevels,  numberOfSemesters  } = division;
  //   try {
  //     await this.prisma.school.update({
  //       where: { id: schoolId},
  //       data: {
  //           numberOfLevels, numberOfSemesters
  //       },
  //     });
  //   } catch (error) {
  //     throw new CustomBadRequestException({
  //       message: 'Could not find school with that id',
  //       actualServerError: error,
  //     });
  //   }
  //   return {
  //     message: 'School division info saved',
  //   };
  // }

  // create(createSchoolDto: CreateSchoolDto) {
  //   return 'This action adds a new school';
  // }

  // update(id: number, updateSchoolDto: UpdateSchoolDto) {
  //   return `This action updates a #${id} school`;
  // }
}
