import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
// Services
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    SimpleNotificationsModule.forRoot()
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
