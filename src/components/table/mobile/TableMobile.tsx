import "./tableMobile.scss";
import { Employee } from "@customTypes/interfaces";

const TableMobile = ({ entriesToShow }: { entriesToShow: Employee[] }) => {
  return (
    <>
      {entriesToShow.map((entry, index) => (
        <div key={index} className="table">
          {Object.entries(entry).map(([key, value]) => (
            <div className="table_group" key={key}>
              <div className="table_group_title">{key}</div>
              <div className="table_group_value">{value}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default TableMobile;
