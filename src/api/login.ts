import { LoginInfoType, LoginReturnType } from "../types/login"

export const login = (info: LoginInfoType): LoginReturnType => {
  const { email, password } = info
  if (email === "test@example.com" && password === "password") {
    return { id: 1, name: "犬" }
  } else {
    throw new Error()
  }
};
