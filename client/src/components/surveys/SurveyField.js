// contains logic to render a single label and text input.
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};

// {...input} is the same as onBlur={input.onBlur}
