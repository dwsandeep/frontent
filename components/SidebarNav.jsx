import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarNav = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const menuSections = [
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-40 w-[280px] bg-[hsl(var(--sidebar))] border-r border-border transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-center h-16 border-b border-border/50 px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            drivr<span className="text-foreground">.</span>
          </span>
        </Link>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-4rem)] py-6 px-4 space-y-8">
        {menuSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                      isActive 
                        ? 'bg-white text-primary shadow-sm font-medium' 
                        : 'text-foreground/70 hover:bg-white/50 hover:text-foreground'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;