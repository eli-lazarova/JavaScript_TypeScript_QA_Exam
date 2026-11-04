import type { TestUser, UserRole } from "./models.ts";

export function generateUser(id: number, role: UserRole, customUsername?: string, customEmail?: string, isActive: boolean = true): TestUser {
  return {
    id,
    username: customUsername || `user_${id}`,
    email: customEmail || `user${id}@example.com`,
    role,
    isActive,
  };
}

export function generateTestUsers(): TestUser[] {
  return [
    generateUser(1, "admin"),
    generateUser(2, "engineer"),
    generateUser(3, "tester"),
    generateUser(4, "user"),
    generateUser(5, "admin"),
    generateUser(6, "engineer"),
    generateUser(7, "tester"),

    generateUser(8, "user", "us", "user8@example.com", true),  // short username
    generateUser(9, "user", "user9", "invalidemail.com", true),  //missing '@' in the email
    generateUser(10, "tester", "user10", "user10@example.com", false) // Inactive user
  ];
}