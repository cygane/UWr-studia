import React from "react";

interface ItemsIProps {
    onChange: (hom_many: number) => void;
    howmany: number;
}

const ItemsperPage = ({
    onChange,
    howmany,
  }: ItemsIProps) => {
    return (
      <div className="items_page">
        <label htmlFor="itemsPerPageInput">Items per page:</label>
        <div className="custom-input">
          <input
            id="itemsPerPageInput"
            type="number"
            value={howmany}
            onChange={(e) => onChange(parseInt(e.target.value))}
            min={1} 
          />
        </div>
      </div>
    );
  };

export default function Sorter({
    onChange,
    howmany,
  }: ItemsIProps){
    return(
        <div className={`page-controler`}>
            <ItemsperPage
              howmany={howmany}
              onChange={onChange}
            />
        </div>
    );
}