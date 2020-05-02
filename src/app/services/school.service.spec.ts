import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SchoolService } from './school.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SchoolServiceMock } from './school.service.mock';

fdescribe('SchoolService', () => {
    let component: SchoolService;
    let fixture: ComponentFixture<SchoolService>;
    let mockService = new SchoolServiceMock();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SchoolService
            ],
            providers: [
                {
                    provide: SchoolService, useValue: {
                        getSchools: () => {
                            mockService.getSchools()
                        }
                    }
                }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(SchoolService);
            component = fixture.componentInstance;
        });
    }));

    it('should return schools', async(() => {
        expect(component.getSchools()).toEqual(3);
    }));
});
