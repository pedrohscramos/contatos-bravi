import { createAction, props } from "@ngrx/store"
import { Person } from "../Model/Person.model"

export const LOAD_PERSON = `[person page]load person`
export const LOAD_PERSON_SUCCESS = `[person page]load person success`
export const LOAD_PERSON_FAIL = `[person page]load person fail`
export const ADD_PERSON='[person page]add person'
export const ADD_PERSON_SUCCESS='[person page]add person success'
export const UPDATE_PERSON='[person page]update person'
export const UPDATE_PERSON_SUCCESS='[person page]update person success'

export const DELETE_PERSON='[person page]delete person'
export const DELETE_PERSON_SUCCESS='[person page]delete person success'

export const GET_PERSON='[person page]get person'
export const GET_PERSON_SUCCESS='[person page]get person success'
export const OPEN_POPUP='[person page]open popup'


export const loadperson=createAction(LOAD_PERSON)
export const loadpersonsuccess=createAction(LOAD_PERSON_SUCCESS, props<{list:Person[]}>())
export const loadpersonfail=createAction(LOAD_PERSON_FAIL, props<{errormessage:string}>())

export const addperson=createAction(ADD_PERSON,props<{inputdata:Person}>())
export const addpersonsuccess=createAction(ADD_PERSON_SUCCESS,props<{inputdata:Person}>())

export const updateperson=createAction(UPDATE_PERSON,props<{inputdata:Person}>())
export const updatepersonsuccess=createAction(UPDATE_PERSON_SUCCESS,props<{inputdata:Person}>())

export const deleteperson=createAction(DELETE_PERSON,props<{code:number}>())
export const deletepersonsuccess=createAction(DELETE_PERSON_SUCCESS,props<{code:number}>())

export const getperson=createAction(GET_PERSON,props<{id:number}>())
export const getpersonsuccess=createAction(GET_PERSON_SUCCESS,props<{obj:Person}>())

export const openpopup=createAction(OPEN_POPUP);