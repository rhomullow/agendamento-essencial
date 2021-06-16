export interface Button {
  title: string
  type: ITypeButton
}

export enum ITypeButton {
  submit,
  button,
  menu,
  reset
}
