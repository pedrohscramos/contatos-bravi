import { createReducer, on } from "@ngrx/store";
import { addpersonsuccess, deletepersonsuccess, getpersonsuccess, loadpersonfail, loadpersonsuccess, openpopup, updatepersonsuccess } from "./Person.Action";
import { PersonState } from "./Person.State";

const _PersonReducer = createReducer(PersonState,
    on(loadpersonsuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(getpersonsuccess, (state, action) => {
        return {
            ...state,
            personobj: action.obj,
            errormessage: ''
        }
    }),
    on(loadpersonfail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(addpersonsuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    }),
    on(updatepersonsuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(deletepersonsuccess, (state, action) => {
        const _newdata = state.list.filter(o=>o.id!==action.code);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(openpopup, (state, action) => {
        return {
            ...state,
            personobj: {
                id: 0,
                name: "",
                email: "",
                phone: ""
            }
        }
    })
)

export function PersonReducer(state: any, action: any) {
    return _PersonReducer(state, action);
}