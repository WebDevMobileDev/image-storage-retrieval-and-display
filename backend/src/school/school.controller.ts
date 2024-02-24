import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('school')
@ApiTags('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  saveBasicInfo(@Body() createSchoolDto: CreateSchoolDto ){
    return this.schoolService.saveBasicInfo(createSchoolDto)
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(id);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
  //   return this.schoolService.update(+id, updateSchoolDto);
  // }

  


  // @Post('categorisation/:schoolId')
  // saveCategorisation(@Param('schoolId') schoolId: string,  @Body() categorisation: CategorisationDto ){
  //   return this.schoolService.saveCategorisation(categorisation, schoolId )
  // }
  
  // @Post('address/:schoolId')
  // saveAddress(@Param('schoolId') schoolId: string,  @Body() address: AddressDto ){
  //   return this.schoolService.saveAddress(address, schoolId )
  // }
  
  // @Post('division/:schoolId')
  // saveDivision(@Param('schoolId') schoolId: string,  @Body() division: DivisionDto ){
  //   return this.schoolService.saveDivision(division, schoolId )
  // }
  
 

}
