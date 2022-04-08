import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  constructor(private httpServiceAudio: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getInfoSong = ' https://mp3.zing.vn/xhr/media/get-info?type=audio&id=ZW8I7AAI'
}
