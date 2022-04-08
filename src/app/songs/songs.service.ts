import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Song } from './song';

@Injectable()
export class SongService {
  constructor(private httpService: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  songAPI =
    'https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1';

  /**
   * GET song from the server
   * @returns
   */
  getSong(): Observable<Song[]> {
    return this.httpService.get<Song[]>(this.songAPI).pipe();
  }
}
