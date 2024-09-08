import { Component, EventEmitter, isStandalone, OnInit, Output } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { FileItem } from '../../models/file.item.model';
import { DatePipe } from '@angular/common';
import { FileType } from '../../models/file.item.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-folder-files',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './list-folder-files.component.html',
  styleUrl: './list-folder-files.component.css'
})
export class ListFolderFilesComponent implements OnInit {

  ngOnInit(): void {
    this.addCheckeds();
  }


  @Output() statusChange = new EventEmitter<boolean>();

  // MIS VARIAVLES

  status: boolean = true;
  check: boolean = false;
  checkeds: boolean[] = [];


  files: FileItem[] = FILE_LIST.sort((a, b) => a.type - b.type || a.name.localeCompare(b.name));
  FileTypes: typeof FileType = FileType;
  selectedFiles: FileItem[] = [];

  // MIS METODOS



  addCheckeds() {
    this.checkeds = [];
    for (let i = 0; i < this.files.length; i++) {
      this.checkeds.push(false);
    }
  }


  selectAll(){
    if(this.check == false){
      this.check = true;
      this.checkeds.forEach((element, index) => {
        this.checkeds[index] = true;
        this.agregar(index)
      });
    }
    else{
      this.check = false;
      this.checkeds.forEach((element, index) => {
        this.checkeds[index] = false;
        this.remove(index)
    });
  }
  console.log(this.checkeds)
}



  changeStatus() {
    this.status = false;
    this.statusChange.emit(this.status);
  }





  agregar(index: number) {
    const file = this.files[index];
    if (!this.selectedFiles.includes(file)) {
      this.selectedFiles.push(file);
    }
  }

  changeCkeck(index: number) {

    if (this.checkeds[index] == false) {
      this.checkeds[index] = true;
      this.agregar(index)
    }
    else {
      this.checkeds[index] = false;
      this.remove(index)
    }

    console.log(this.checkeds)
  }

  remove(index: number) {
    const file = this.files[index];
    this.selectedFiles = this.selectedFiles.filter(f => f !== file);
  }

  delete() {
    this.files = this.files.filter(file => !this.selectedFiles.includes(file));
  }



  toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
  }
}
