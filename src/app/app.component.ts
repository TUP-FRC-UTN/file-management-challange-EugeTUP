import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ListFolderFilesComponent } from "./list-folder-files/list-folder-files.component";
import { FormAltaComponent } from './form-alta/form-alta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListFolderFilesComponent, FormAltaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  status: boolean = true;
  
  

  reciveStatus($event: boolean) {
    this.status = $event;
  }

  reciveFile(file: FileItem) {
    this.files.push(file);

  }



  
 


}
