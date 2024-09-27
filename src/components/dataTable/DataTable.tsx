import React, { useState, useEffect } from "react";
import { useEmployeeStore } from "@store/employee.store";
import "./dataTable.scss";
import { Search } from "@components/search/Search";
import { Employee } from "@customTypes/interfaces";
import TableMobile from "@components/table/mobile/TableMobile";
import TableRegular from "@components/table/desktop/TableRegular";
import Pagination from "@components/paging/Paging";
import SelectEntries from "@components/selectEntries/SelectEntries";

const DataTable = () => {
  const employees = useEmployeeStore((s) => s.employees);
  const [entries, setEntries] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<Employee[]>();

  const start = (currentPage - 1) * entries;
  const end = start + entries;

  const entriesToShow = search
    ? search.slice(start, end)
    : employees.slice(start, end);
  const totalEntries = search ? search.length : employees.length;
  const numberOfPages = Math.ceil(totalEntries / entries);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntries(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const renderEntryInfo = () => {
    const endEntry = Math.min(end, totalEntries);
    return `Showing ${start + 1} to ${endEntry} of ${totalEntries} entries`;
  };

  const isDataNotFound = search && entriesToShow.length === 0;
  const screenWidth = window.innerWidth;

  return (
    <div className="dataTable">
      <div className="dataTable_header">
        {!isDataNotFound && (
          <div className="dataTable_header_entries">
            <SelectEntries updateEntries={handleEntriesChange} />
          </div>
        )}
        <div className="dataTable_header_search">
          <Search setSearch={setSearch} />
        </div>
      </div>
      {isDataNotFound ? (
        <div className="dataTable_notFound">No results found</div>
      ) : screenWidth >= 1580 ? (
        <TableRegular entriesToShow={entriesToShow} />
      ) : (
        <TableMobile entriesToShow={entriesToShow} />
      )}
      {!isDataNotFound && (
        <div className="dataTable_footer">
          <div className="dataTable_footer_infos">{renderEntryInfo()}</div>
          <div className="dataTable_footer_pagination">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
