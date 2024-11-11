import React from 'react';

function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ApplicationLayout;
