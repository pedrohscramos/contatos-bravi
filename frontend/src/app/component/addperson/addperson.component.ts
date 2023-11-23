
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Person } from '../../Store/Model/Person.model';
import { addperson, updateperson } from '../../Store/Person/Person.Action';
import { getperson } from '../../Store/Person/Person.Selectors';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrl: './addperson.component.scss'
})
export class AddpersonComponent implements OnInit {

  title = "Novo Contato";
  isedit = false;
  dialogdata:any;

  constructor(private builder:FormBuilder, private ref:MatDialogRef<AddpersonComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) { }

  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getperson).subscribe(res => {
      this.personForm.setValue({
        id: res.id,
        name: res.name,
        email: res.email,
        phone: res.phone
      })

    })
  }

  

  ClosePopup() {
    this.ref.close();
  }

  personForm = this.builder.group({
    id:this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required)
  });

  SavePerson(){
    if(this.personForm.valid){
      const _obj: Person = {
        id: this.personForm.value.id as number,
        name: this.personForm.value.name as string,
        email: this.personForm.value.email as string,
        phone: this.personForm.value.phone as string
      }
      if(_obj.id == 0){
        this.store.dispatch(addperson({inputdata:_obj}));
      }else{
        this.store.dispatch(updateperson({inputdata:_obj}));
      }
      this.ClosePopup();
    }
  }


}
