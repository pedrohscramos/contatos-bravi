import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { PersonService } from "../../service/person.service";
import { showalert } from "../Common/App.Action";
import { addperson, addpersonsuccess, deleteperson, deletepersonsuccess, getperson, getpersonsuccess, loadperson, loadpersonfail, loadpersonsuccess, updateperson, updatepersonsuccess } from "./Person.Action";

@Injectable()
export class PersonEffects {
    constructor(private actin$: Actions, private service: PersonService) {

    }

    _loadperson = createEffect(() =>
        this.actin$.pipe(
            ofType(loadperson),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadpersonsuccess({ list: data })
                    }),
                    catchError((_error) => of(loadpersonfail({ errormessage: _error.message })))
                )
            })
        )
    )

    _getperson = createEffect(() =>
        this.actin$.pipe(
            ofType(getperson),
            exhaustMap((action) => {
                return this.service.Getbycode(action.id).pipe(
                    map((data) => {
                        return getpersonsuccess({ obj: data })
                    }),
                    catchError((_error) => of(showalert({ message: 'Erro na leitura dos dados :' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    _addperson = createEffect(() =>
        this.actin$.pipe(
            ofType(addperson),
            switchMap((action) => {
                return this.service.Create(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addpersonsuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Criado com sucesso.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Erro ao criar Pessoa', resulttype: 'fail' })))
                )
            })
        )
    )
    _updateperson = createEffect(() =>
        this.actin$.pipe(
            ofType(updateperson),
            switchMap((action) => {
                return this.service.Update(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(updatepersonsuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Atualizado com sucesso.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Erro ao atualizar', resulttype: 'fail' })))
                )
            })
        )
    )
    _deleteperson = createEffect(() =>
    this.actin$.pipe(
        ofType(deleteperson),
        switchMap((action) => {
            return this.service.Delete(action.code).pipe(
                switchMap((data) => {
                    return of(deletepersonsuccess({ code: action.code }),
                        showalert({ message: 'Excluído com sucesso.', resulttype: 'pass' }))
                }),
                catchError((_error) => of(showalert({ message: 'Erro ao excluir', resulttype: 'fail' })))
            )
        })
    )
)
}