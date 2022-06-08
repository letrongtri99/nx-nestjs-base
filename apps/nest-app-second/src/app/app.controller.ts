import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';

import { AppService } from './app.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { AuthService } from './modules/auth/auth.service';
import { JwtAuthGuard } from './guards/jwt/jwt-auth.guard';
import { Comment as CommentModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.body;
  }

  @Post('createCommentTest')
  async signupUser(
    @Body() commentData: { id: string; comment: string }
  ): Promise<CommentModel> {
    return this.authService.createCommentTest(commentData);
  }
}
