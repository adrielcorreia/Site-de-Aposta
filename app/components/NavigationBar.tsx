'use client'
// Breadcrumbs.tsx
import React from 'react';
import { useRouter } from 'next/router';

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  return (
    <div style={{ marginBottom: '10px' }}>
      {pathSegments.map((segment, index) => (
        <span key={index}>
          <span style={{ fontWeight: index === pathSegments.length - 1 ? 'bold' : 'normal' }}>
            {segment}
          </span>
          {index < pathSegments.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
