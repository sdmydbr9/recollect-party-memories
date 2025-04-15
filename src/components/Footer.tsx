import { cn } from "@/lib/utils";
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
function FooterLink({
  href,
  children,
  className
}: FooterLinkProps) {
  return <a href={href} className={cn("text-sm text-slate-600 hover:text-slate-900 transition-colors", className)}>
      {children}
    </a>;
}
export function Footer() {
  return <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <img src="/lovable-uploads/9cc340d6-0251-44ff-b712-69e4e7a1c0ad.png" alt="Recollect Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500">scan, share, remember</p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col space-y-2">
              <span className="font-medium mb-1 text-slate-900">Product</span>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </div>
            
            <div className="flex flex-col space-y-2">
              <span className="font-medium mb-1 text-slate-900">Resources</span>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </div>
            
            <div className="flex flex-col space-y-2">
              <span className="font-medium mb-1 text-slate-900">Legal</span>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-slate-500">
          <p>© 2025 Recollect. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}