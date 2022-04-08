import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [SongService],
})
export class SongsComponent implements OnInit {
  constructor(private service: SongService) {}

  listSong: Song[] = [];

  ngOnInit(): void {
    // this.httpUse()
    this.get100Song();
  }

  get100Song(): void {
    this.service.getSong().subscribe((e: any) => {
      this.listSong = e.data.song;
      console.log(this.listSong);
    });
  }

  httpUse(): void {
    console.log(this.service);
  }

  getMinutesInDuration(minutes: number) {
    return Math.floor(minutes / 60);
  }

  getSecondInDuration(second: number) {

    let bindingSecond = second % 60;

    if (bindingSecond < 10) {
      return '0' + bindingSecond;
    } else {
      return bindingSecond
    }
  }
}
