import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-border-muted)] bg-[var(--color-header-bg)] text-[var(--color-foreground)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-lg hover:text-[var(--color-foreground)] text-white">
            Imam Dwi P
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--foreground)]">
          <span>Portfolio</span>
        </div>

        <div className="flex items-center gap-3">


        </div>
      </div>
    </header>
  );
}
