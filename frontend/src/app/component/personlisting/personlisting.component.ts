import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Person } from '../../Store/Model/Person.model';
import { deleteperson, getperson, loadperson, openpopup } from '../../Store/Person/Person.Action';
import { getpersonlist } from '../../Store/Person/Person.Selectors';
import { AddpersonComponent } from '../addperson/addperson.component';







@Component({
  selector: 'app-personlisting',
  templateUrl: './personlisting.component.html',
  styleUrl: './personlisting.component.scss'
})
export class PersonlistingComponent implements OnInit {

  PersonList!:Person[];
  datasource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  constructor(private dialog:MatDialog, private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadperson());
    this.store.select(getpersonlist).subscribe(item => {
      this.PersonList = item;
      this.datasource = new MatTableDataSource<Person>(this.PersonList)
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
  }

  addPerson(){
    this.OpenPopup(0, "Novo Contato");
  }

  editPerson(code:number){
    this.store.dispatch(getperson({id:code}))
    this.OpenPopup(code, 'Atualizar Contato');
    
  }

  deletePerson(code:number){
    if(confirm('Tem certeza que deseja excluir?')){
      this.store.dispatch(deleteperson({code:code}));
    }
  }

  OpenPopup(code:number, title:string){
    this.store.dispatch(openpopup());
    this.dialog.open(AddpersonComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {code: code, title: title}
    });
  }
}
