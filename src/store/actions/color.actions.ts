import { createAction, props } from "@ngrx/store";

export const change = createAction('[Color] change', props<{ value: string }>());