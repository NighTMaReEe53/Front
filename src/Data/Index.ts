interface IRegister {
  label: string;
  name: "username" | "email" | "password";
  type: string;
}

export const INPUT_REGISTER: IRegister[] = [
  {
    label: "ما هو اسمك...",
    name: "username",
    type: "text",
  },
  {
    label: "الايميل الخاص بك",
    name: "email",
    type: "email",
  },
  {
    label: "الباسورد خاص بك",
    name: "password",
    type: "password",
  },
];
