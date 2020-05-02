import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SchoolDetailComponent } from './components/school-detail/school-detail.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SchoolService } from './services/school.service';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolDetailComponent, AppComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers: [NgbActiveModal, SchoolService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Smart School Search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Smart School Search');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Smart School Search');
  });

  fit('should call OpenAddModal method when Add School is clicked', () => {
    fixture.detectChanges();

    let spy = spyOn(component, 'OpenAddModal');

    const element = fixture.nativeElement.querySelector('#btnAddSchool');
    element.click();

    expect(component.OpenAddModal).toHaveBeenCalledTimes(1);
  });
});
