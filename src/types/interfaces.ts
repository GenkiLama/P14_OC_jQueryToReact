export interface Employee {
  firstname: string;
  lastname: string;
  dateBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  department: string;
}

export interface EmployeeState {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

export interface FormErrors {
  firstname?: string;
  lastname?: string;
  dateBirth?: string;
  startDate?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  department?: string;
}

export interface SearchProps {
  setSearch: (filteredEmployees: Employee[]) => void;
}
