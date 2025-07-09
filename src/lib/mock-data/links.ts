export interface Link {
  id: string;
  userId: string;
  title: string;
  url: string;
  order: number;
  clicks: number;
  createdAt: Date;
}

export const mockLinks: Link[] = [
  {
    id: "1",
    userId: "1",
    title: "My Portfolio",
    url: "https://myportfolio.com",
    order: 1,
    clicks: 245,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    userId: "1",
    title: "Twitter",
    url: "https://twitter.com/myhandle",
    order: 2,
    clicks: 189,
    createdAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    userId: "1",
    title: "Instagram",
    url: "https://instagram.com/myhandle",
    order: 3,
    clicks: 156,
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "4",
    userId: "1",
    title: "GitHub",
    url: "https://github.com/johndoe",
    order: 4,
    clicks: 98,
    createdAt: new Date("2024-01-04"),
  },
  {
    id: "5",
    userId: "1",
    title: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    order: 5,
    clicks: 67,
    createdAt: new Date("2024-01-05"),
  },
];