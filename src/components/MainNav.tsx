
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ href, children, className }: NavItemProps) => {
  return (
    <a 
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {children}
    </a>
  );
};

export function MainNav() {
  return (
    <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto py-4 px-4 md:px-8">
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Recollect</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <NavItem href="#how-it-works">How It Works</NavItem>
          <NavItem href="#features">Features</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:flex">Sign In</Button>
        <Button className="bg-mint hover:bg-mint/90 text-slate-800">Get Started</Button>
      </div>
    </div>
  );
}
