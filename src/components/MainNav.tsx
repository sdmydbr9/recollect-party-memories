import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavItem = ({
  href,
  children,
  className
}: NavItemProps) => {
  return <a href={href} className={cn("text-sm font-medium transition-colors hover:text-primary", className)}>
      {children}
    </a>;
};
export function MainNav() {
  return <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto py-4 px-4 md:px-8">
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/9cc340d6-0251-44ff-b712-69e4e7a1c0ad.png" alt="Recollect Logo" className="h-12 w-auto" />
            </div>
            <span className="text-slate-500 ml-1 hidden sm:inline-block text-xs font-normal mx-px">scan, share, remember</span>
          </div>
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
    </div>;
}