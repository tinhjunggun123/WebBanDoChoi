import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  );
};

export default MainLayout;
