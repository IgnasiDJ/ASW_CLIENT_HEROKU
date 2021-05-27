import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ComentarisComponent } from './comentaris/comentaris.component';
import { AppComponent } from './app.component';
import { ContribucionsComponent } from './contribucions/contribucions.component';

import { ComentariDisplayComponent } from './comentari-display/comentari-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContribucionsComponent,
    ComentariDisplayComponent,
    ComentarisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
