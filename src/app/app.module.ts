import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { HeaderComponent } from './components/header/header.component';
import { SchoolDetailComponent } from './components/school-detail/school-detail.component';
import { SchoolService } from './services/school.service';
import { AddSchoolComponent } from './modal/add-school/add-school.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SchoolDetailComponent,
    FilterPipe,
    AddSchoolComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
