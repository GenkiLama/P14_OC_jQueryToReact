import DataTable from "@components/dataTable/DataTable";
import "./employees.scss";
import { useEmployeeStore } from "@store/employee.store";

const Employees = () => {
  const employees = useEmployeeStore((s) => s.employees);

  return (
    <div className="employees">
      {employees.length === 0 ? (
        <p className="employees_empty">No employees found</p>
      ) : (
        <DataTable />
      )}
    </div>
  );
};

export default Employees;
