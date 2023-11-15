// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component'; // Adjust the path as needed

@NgModule({
  declarations: [
    // Other components and directives go here
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Other modules go here
  ],
  bootstrap: [
    // Specify the component that will serve as the root component
    // For example, if your root component is named 'AppComponent', include it here
  ],
})
export class AppModule {}
