import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    FileListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
