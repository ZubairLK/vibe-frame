export interface User {
  id: string;
  email: string;
  handle: string;
  name: string;
  bio: string;
  avatar?: string;
  createdAt: Date;
}

export const mockUser: User = {
  id: "1",
  email: "john.doe@example.com",
  handle: "johndoe",
  name: "John Doe",
  bio: "Welcome to my links!",
  createdAt: new Date("2024-01-01"),
};