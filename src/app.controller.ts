import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { NewUrlInput } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect()
  @Get('/:url')
  getUrl(@Param('url') url: string, @Req() request: Request): string {
    return this.appService.getUrl(url, request);
  }

  @Get('/clicks/:url')
  getClicks(@Param('url') url: string): string {
    return this.appService.getClicks(url);
  }

  @Post('/new')
  async createUrl(@Body() body: NewUrlInput): Promise<string[]> {
    return this.appService.createUrl(body);
  }
}
