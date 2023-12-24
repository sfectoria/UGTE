import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { GovernmentsModule } from './governments/governments.module';
import { GradesModule } from './grades/grades.module';
import { UniversitiesModule } from './universities/universities.module';
import { UniversitiePartsModule } from './universitie-parts/universitie-parts.module';
import { EducationLevelsModule } from './education-levels/education-levels.module';
import { UniversityPartsModule } from './university-parts/university-parts.module';

@Module({
  imports: [PrismaModule, MembersModule, GovernmentsModule, GradesModule, UniversitiesModule, UniversitiePartsModule, EducationLevelsModule, UniversityPartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
