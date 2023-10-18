export interface FieldErrorType {
  show: boolean;
  message: Array<string>;
}
export interface ToastType {
  id: string;
  title: string;
  color: "green" | "blue" | "yellow" | "red" | undefined;
}
export interface UserType {
  email: string;
  name: string;
  uid: string;
  label?: string;
}
