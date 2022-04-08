import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/** Import Component */

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { SingerComponent } from './singer/singer.component';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from './login/login.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AudioComponent } from './audio/audio.component';

/** End Import Component */

/** Import http service communicate with backend */
import { HttpClientModule } from '@angular/common/http';

/** End import http */

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    SingerComponent,
    SongsComponent,
    LoginComponent,
    SearchEngineComponent,
    TimelineComponent,
    AudioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    SingerComponent,
    SongsComponent,
    LoginComponent,
    SearchEngineComponent,
    TimelineComponent
  ],
})
export class AppModule {}
