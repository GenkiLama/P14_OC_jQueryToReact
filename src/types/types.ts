export type DropDownProps = {
  data: { name: string }[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
};

export type ItemsProps = {
  listItems: { name: string }[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  setIsOpen: (isOpen: boolean) => void;
};

export type ButtonTableProps = {
  key?: number;
  updatePage: () => void;
  disabled: boolean;
  label: string | JSX.Element;
};

export type PagingProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  numberOfPages: number;
};

export type SelectEntriesProps = {
  updateEntries: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};