import "./tableRegular.scss";
import { Employee } from "@customTypes/interfaces";

const TableRegular = ({ entriesToShow }: { entriesToShow: Employee[] }) => {

  return (
    <div className="table">
      <div className="table_header">
        {Object.keys(entriesToShow[0]).map((key) => (
          <div className="table_header_cell" key={key}>
            {key}
          </div>
        ))}
      </div>
      {entriesToShow.map((entry, index) => (
        <div className="table_body" key={index}>
          {Object.values(entry).map((value, index) => (
            <div className="table_body_cell" key={index}>
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableRegular;
