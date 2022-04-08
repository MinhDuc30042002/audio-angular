import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SingerComponent } from './singer/singer.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {
    path: 'singer',
    component: SingerComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'song',
    component: SongsComponent,
  },
  {
    path: 'audio/:id',
    component: AudioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'audio',
    component: AudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
