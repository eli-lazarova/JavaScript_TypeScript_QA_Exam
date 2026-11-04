export type UserRole = "admin" | "engineer" | "tester" | "user";

export interface TestUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}
