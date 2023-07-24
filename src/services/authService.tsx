import { AuthData } from "../contexts/Auth";

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "") {
        resolve({
          token: "fake-token",
          email,
          name: "Arya",
        });
      } else {
        reject(new Error("Credenciais incorretas"));
      }
    }, 500);
  });
}

export const authService = { signIn };
