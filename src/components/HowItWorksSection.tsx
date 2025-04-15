
import { Calendar, QrCode, GalleryHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  number: number;
}

function StepCard({ title, description, icon, color, number }: StepCardProps) {
  return (
    <div className={cn(
      "relative rounded-2xl p-6 transition-all duration-300 hover:shadow-md",
      color
    )}>
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        <span className="font-bold text-sm">{number}</span>
      </div>
      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      title: "Create Your Event",
      description: "Add a name, date, and Recollect generates your event page & QR code.",
      icon: <Calendar className="h-6 w-6 text-[#8A73FF]" />,
      color: "bg-lavender/30",
      number: 1,
    },
    {
      title: "Share the QR",
      description: "Display it at your party — guests scan it, no app install needed.",
      icon: <QrCode className="h-6 w-6 text-[#5B9E65]" />,
      color: "bg-mint/40",
      number: 2,
    },
    {
      title: "Watch the Memories Flow",
      description: "Everyone contributes photos to a shared album in real time.",
      icon: <GalleryHorizontal className="h-6 w-6 text-[#E87D90]" />,
      color: "bg-blush/30",
      number: 3,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Create, share, and collect memories together with these simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
