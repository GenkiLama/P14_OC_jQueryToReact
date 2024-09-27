import "./selectEntries.scss";
import { SelectEntriesProps } from "@customTypes/types";

const SelectEntries = ({ updateEntries }: SelectEntriesProps) => {
  return (
    <label htmlFor="entries">
      Show
      <select name="entries" id="entries" onChange={updateEntries}>
        <option value="2">2</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
      </select>
      entries
    </label>
  );
};

export default SelectEntries;
