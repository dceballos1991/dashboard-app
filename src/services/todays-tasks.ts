import { sleep } from "../utils";

export type Task = {
  id: string;
  isCompleted: boolean;
  title: string;
  dueDate: Date;
  progress: number;
  members: { id: number; name: string }[];
};

const mockedMembers = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Alice",
  },
  {
    id: 4,
    name: "Bob",
  },
  {
    id: 5,
    name: "Charlie",
  },
];

const getRandomData = () => {
  const isCompleted = Math.random() > 0.5;
  const value = Math.floor(Math.random() * 100);
  return {
    id: Math.random().toString(36).substr(2, 9),
    isCompleted: isCompleted,
    title: "Task " + value,
    dueDate: new Date(new Date().getTime() + Math.random() * 1000000000),
    progress: isCompleted ? 100 : value,
    members: [
      ...Array.from({ length: Math.floor(Math.random() * 4) }).map(() => {
        return mockedMembers[Math.floor(Math.random() * mockedMembers.length)];
      }),
    ],
  };
};

const makeTodaysTasksFixture = () => {
  return Array.from({ length: 6 }).map(getRandomData);
};

export const getTodaysTasks = async () => {
  await sleep(Math.random() * 1500);
  return makeTodaysTasksFixture();
};
