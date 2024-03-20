import React, { ChangeEvent, FormEvent } from "react";

export default function InputWithButton({
  value,
  onChange,
  onSubmit,
  buttonText,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <input className="input-field" value={value} onChange={onChange} />
        <button className="input-button" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
