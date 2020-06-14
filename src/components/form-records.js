import React, { useState } from 'react';
import uuid from 'react-uuid';

export default function FormRecords() {
  const [records, setRecords] = useState([{ firstName: '', lastName: '' }]);
  const createRecords = () => {
    setRecords([...records, { firstName: '', lastName: '' }]);
  };
  return (
    <form>
      <ul className="unstyled-list">
        {records.map(({ firstName, lastName }) => (
          <li key={uuid()}>
            <input type="text" name="firstname" defaultValue={firstName} />
            <input type="text" name="lastname" defaultValue={lastName} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={createRecords}>
        create new
      </button>
    </form>
  );
}
