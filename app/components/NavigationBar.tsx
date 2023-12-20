'use client'
// Breadcrumbs.tsx
function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

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
}
