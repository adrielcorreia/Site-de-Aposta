import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="flex gap-2">
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {segment}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
