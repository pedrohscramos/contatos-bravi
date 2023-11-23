import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonModel } from "../Model/Person.model";

const getpersonstate = createFeatureSelector<PersonModel>('person');

export const getpersonlist = createSelector(getpersonstate, (state) => {
    return state.list;
})

export const getperson = createSelector(getpersonstate, (state) => {
    return state.personobj;
})