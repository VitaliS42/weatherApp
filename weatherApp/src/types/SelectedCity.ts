export interface SelectedCity {
  name: string;
  curren: object;
  hourly: object;
}

export interface DropDownProps {
  options: SelectedCity[];
  modelValue: SelectedCity | null; // Предположим, что modelValue может быть либо объектом типа Option, либо null.
}
