import React from 'react';

const Error = ({ error }) => {
  const styleP = { color: '#f31', margin: '1rem 0' };

  if (error) return null;
  return <p style={styleP}>{error}</p>;
};

export default Error;
