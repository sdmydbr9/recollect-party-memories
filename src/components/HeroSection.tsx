
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-800 drop-shadow-sm">
              Capture Every Moment. <span className="text-[#8A73FF]">Together.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-md">
              Recollect lets your guests instantly share party memories in one place — with just a scan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-mint hover:bg-mint/90 text-slate-800 h-12 px-6 rounded-full">
                Create Your First Event
              </Button>
              <Button variant="outline" className="border-blush text-slate-700 h-12 px-6 rounded-full">
                See How It Works <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative confetti">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}></span>
            ))}
            <div className="relative animate-float">
              <div className="bg-white p-6 rounded-3xl shadow-lg max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#8A73FF]" />
                    <span className="font-medium">Sarah's Birthday</span>
                  </div>
                  <span className="text-sm text-slate-500">13 Photos</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-lavender/60 rounded-lg overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br from-blush/40 to-lavender/40`}></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-mint/30 rounded-xl flex items-center justify-between">
                  <span className="text-sm font-medium">Event QR Code</span>
                  <div className="h-8 w-8 bg-slate-800 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
