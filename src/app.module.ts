import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';

@Module({
  imports: [MusicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
