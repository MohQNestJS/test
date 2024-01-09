import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query() queryObject: any) {
    console.log(queryObject);
    return this.postsService.findAll();
  }

  @Get(':id/:age')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id') id: string, @Param('age') age: string,@Req() req:any) {
    console.log(req);
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
