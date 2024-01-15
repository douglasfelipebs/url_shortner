import {Body, Controller, Get, Param, Post, Redirect} from '@nestjs/common';
import { AppService } from './app.service';
import {newUrlInput} from "./app.types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect()
  @Get('/:url')
  getUrl(@Param('url') url: string): string {
    return this.appService.getUrl(url);
  }

  @Get('/clicks/:url')
  getClicks(@Param('url') url: string): string {
    return this.appService.getClicks(url);
  }

  @Post('/new')
  createUrl(@Body() body: newUrlInput): string {
    return this.appService.createUrl(body);
  }
}
