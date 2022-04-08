import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Audio } from './audio';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpServiceAudio: HttpClient
  ) {}

  params: any;
  inforSong: any;

  ngOnInit(): void {
    this.params = this.route.snapshot.params['id'];
    let infoMusic =
      'https://mp3.zing.vn/xhr/media/get-source?type=audio&key=' + this.params;

    this.httpServiceAudio.get<Audio>(infoMusic).subscribe((e: any) => {
      this.inforSong = e.data;
      console.log(this.inforSong);
    });
  }

  sourceAudio(sourceAudio: string) {
    return sourceAudio[128]
  }

  readLyric(lyric: string) {
    // return readFileSync(lyric)
  }

  Pause() {
    const buttonPlay = document.getElementById('ion-play');

    buttonPlay?.addEventListener('click', () => {
      buttonPlay.id = 'ion-pause';
      buttonPlay.className = 'fa-solid fa-pause';
      // buttonPlay.classList.remove('')
    });
  }

  Play() {
    const buttonPause = document.getElementById('ion-pause');

    buttonPause?.addEventListener('click', () => {
      buttonPause.id = 'ion-play';
      buttonPause.className = 'fa-regular fa-circle-play';
      // buttonPlay.classList.remove('')
    });
  }
}
