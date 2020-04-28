import React from 'react';
import Form, { getFormData, FieldType } from 'react-metaforms';

const form: FieldType[] = [
  {
    "name": "username",
    "label": "Username",
    "type": "text"
  },
  {
    "name": "submit",
    "type": "submit"
  }
];

function App() {
  const [fields, setFields] = React.useState<FieldType[]>(form);

  return (
    <Form
      id="my-form"
      fields={fields}
      onFieldsChange={setFields}
      onSubmit={(values) => { console.log(getFormData(values)); }}
    />
  );
}

export default App;
