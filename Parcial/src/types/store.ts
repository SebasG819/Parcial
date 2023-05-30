import { Recetas } from "./recetas";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  receta:Recetas[];
};

export enum SomeActions {
  "SAVE_RECE" = "SAVE_RECE",
}

export interface SavereceAction {
  action: SomeActions.SAVE_RECE;
  payload: Recetas;
}

export type Actions = SavereceAction;
