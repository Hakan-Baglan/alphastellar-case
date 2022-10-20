import { createReducer, on } from '@ngrx/store';
import { change } from '../actions/color.actions';

export const initialState: string[] = ['red', 'blue', 'green','orange', 'yellow', 'pink','green', 'silver', 'purple','brown'];
export const selectedColorInitialState: string = "";



export const colorReducer = createReducer(initialState);
export const selectedColorReducer = createReducer(selectedColorInitialState,
    on(change, (state, { value }) => value)
);