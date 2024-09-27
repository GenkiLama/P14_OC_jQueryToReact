import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EmployeeState } from "../types/interfaces";

export const useEmployeeStore = create(
  persist<EmployeeState>(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({ employees: [...state.employees, employee] })),
    }),
    {
      name: "employee-storage",
    }
  )
);
