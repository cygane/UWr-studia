import React from "react";

export type stype = "default" | "asc" | "desc";

interface SorterIProps {
    onChange: (type: string) => void;
    sorttype: stype;
}

const TaskSorter = ({
    sorttype,
    onChange,
  }: SorterIProps) => {
    return (
      <div className="sorter">
        <label> Order by: </label>
        <select
        id="sorterSelector"
        value={sorttype}
        onChange={(e) => onChange(e.target.value as stype)}
        >
        <option value="default">Default</option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
      </div>
    );
  };

export default function Sorter({
    onChange,
    sorttype,
}: SorterIProps){
    return(
        <div className={`task-sorter`}>
            <TaskSorter
                sorttype={sorttype}
                onChange={onChange}
            />
        </div>
    );
}