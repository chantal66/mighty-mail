// contains logic to render a single label and text input.
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontSize: '15px' }}>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

// {...input} is the same as onBlur={input.onBlur}
