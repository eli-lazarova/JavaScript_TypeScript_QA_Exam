import type { TestUser } from "./models.ts";
import { isValidUser } from "./validators.js";

export function createUserReport(users: TestUser[]) {
  const validUsersList = users.filter((user) => isValidUser(user));
  const invalidUsersList = users.filter((user) => !isValidUser(user));

  return {
    totalUsers: users.length,
    validCount: validUsersList.length,
    invalidCount: invalidUsersList.length,
    invalidUsernames: invalidUsersList.map((user) => user.username),
  };
}