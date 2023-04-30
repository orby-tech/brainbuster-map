import { Controller, Get, Next } from '@nestjs/common';
import { AppService } from './app.service';
import { NextFunction } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  check(@Next() next: NextFunction) {
    next();
  }
}
