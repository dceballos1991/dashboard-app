export type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
};
