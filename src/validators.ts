import type { TestUser } from "./models.ts";

export function isValidUser(user: TestUser): boolean {
  const isUsernameValid = user.username.length >= 3;
  const isEmailValid = user.email.includes("@");
  const isActive = user.isActive;

  return isUsernameValid && isEmailValid && isActive;
}