import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFolderFilesComponent } from './list-folder-files.component';

describe('ListFolderFilesComponent', () => {
  let component: ListFolderFilesComponent;
  let fixture: ComponentFixture<ListFolderFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFolderFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFolderFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
