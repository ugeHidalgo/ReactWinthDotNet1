import React, { useState } from 'react';

interface Props {
  label: string;
  value: boolean;
}

export const CheckBox = ({ label, value }: Props) => {
  const [checked, setChecked] = useState(value);

  const handleCheck = () => {
    setChecked(!checked);
    console.log('Check box clicked!');
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        {label}
      </label>
    </div>
  );
};
