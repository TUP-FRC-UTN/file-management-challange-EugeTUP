import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-alta',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './form-alta.component.html',
  styleUrl: './form-alta.component.css'
})
export class FormAltaComponent {

  @Output() statusChange = new EventEmitter<boolean>();
  @Output() file = new EventEmitter<FileItem>();

  

  status: boolean = false;
  types: FileType[] = [FileType.FOLDER, FileType.FILE];
  owners: FileOwner[] = OWNERS;
  selectedOwners: FileOwner[] = [];

  changeStatus() {
    this.status = true;
    this.statusChange.emit(this.status);
  }

  name:string = '';
  date:Date = new Date();
  type:FileType = FileType.FOLDER;
  owner:FileOwner |undefined;

  
  add() {
    if (this.owner && !this.selectedOwners.some(o => o.name === this.owner!.name)) {
      this.selectedOwners.push(this.owner);
      console.log(this.selectedOwners);
    }
  }



  newFile(){
    const file: FileItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: this.name,
      creation: this.date,
      type: this.type,
      owners: this.selectedOwners,
    };
    this.file.emit(file);
    alert('Archivo guardado');
    this.resetForm();
  }


  removeOwner(owner: FileOwner) {
    this.selectedOwners = this.selectedOwners.filter(o => o.name !== owner.name);
  }

  resetForm() {
    this.name = '';
    this.date = new Date();
    this.type = FileType.FOLDER;
    this.owner = undefined;
    this.selectedOwners = [];
  }
}
