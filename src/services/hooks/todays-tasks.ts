import { useMockedApi } from "@/src/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Task, getTodaysTasks } from "../todays-tasks";

export type NewTask = {
  id: string;
  title: string;
  dueDate: Date;
  members: { id: number; name: string }[];
};

// In reality this would be two different hooks one for fetching data and one for adding a task
export const useTodaysTasks = () => {
  const [updatedData, setUpdatedData] = useState<Task[]>([]);
  const fetchData = useCallback(() => getTodaysTasks(), []);
  const { data, isLoading, isError } = useMockedApi(fetchData);

  const addTask = (task: NewTask) => {
    // Simulate adding a new task
    setUpdatedData([
      {
        isCompleted: false,
        progress: 0,
        ...task,
      },
      ...(updatedData || []),
    ]);
    console.log("New task added", task);
  };

  const toggleCompleteTask = (id: string) => {
    setUpdatedData(
      updatedData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
            progress: !task.isCompleted ? 100 : task.progress,
          };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    if (data) {
      setUpdatedData(data);
    }
  }, [data]);

  return { data: updatedData, isLoading, isError, addTask, toggleCompleteTask };
};
