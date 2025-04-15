
import { useState, useEffect } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockPhotos = [
  { id: 1, color: "from-lavender to-blush/30" },
  { id: 2, color: "from-mint/40 to-lavender/30" },
  { id: 3, color: "from-blush/30 to-mint/40" },
  { id: 4, color: "from-lavender/40 to-blush/50" },
  { id: 5, color: "from-mint/50 to-lavender/50" },
];

interface PhotoCardProps {
  color: string;
  onClick: () => void;
}

function PhotoCard({ color, onClick }: PhotoCardProps) {
  return (
    <div 
      className="polaroid cursor-pointer" 
      onClick={onClick}
    >
      <div 
        className={`w-full aspect-[4/5] rounded-sm mb-2 bg-gradient-to-br ${color}`}
      ></div>
      <div className="h-4 w-full bg-slate-100 rounded-sm"></div>
    </div>
  );
}

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [api, setApi] = useState<any>(null);

  // Set up autoplay effect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-blush/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery Preview</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how memories are showcased in our beautiful, shareable gallery
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <Carousel 
            className="w-full"
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {mockPhotos.map((photo) => (
                <CarouselItem key={photo.id} className="basis-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex justify-center">
                        <PhotoCard color={photo.color} onClick={() => setSelectedPhoto(photo.id)} />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-transparent border-none">
                      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className={`aspect-square bg-gradient-to-br ${photo.color}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Camera className="h-16 w-16 text-white/50" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Party Photo #{photo.id}</h3>
                            <span className="text-sm text-slate-500">April 15, 2025</span>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static h-9 w-9 translate-y-0 border-lavender" />
                <CarouselNext className="static h-9 w-9 translate-y-0 border-lavender" />
              </div>
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-lavender hover:bg-lavender/90 text-slate-800">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
