// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    // Other components and directives go here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to the imports array
    // Other modules go here
  ],
  bootstrap: [
    // Specify the component that will serve as the root component
    // For example, if your root component is named 'AppComponent', include it here
  ],
})
export class AppModule {}
