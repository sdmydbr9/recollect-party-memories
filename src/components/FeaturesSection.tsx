
import { Wifi, Lock, Camera, UserCheck, Printer } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-12 rounded-full bg-lavender/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Wifi className="h-6 w-6 text-[#8A73FF]" />,
      title: "Works Offline",
      description: "Photos are saved locally first, then uploaded when connection is available."
    },
    {
      icon: <Lock className="h-6 w-6 text-[#8A73FF]" />,
      title: "Fully Private & Local",
      description: "Your photos stay private to only those with access to your event."
    },
    {
      icon: <Camera className="h-6 w-6 text-[#8A73FF]" />,
      title: "Instant Uploads",
      description: "Photos appear in the gallery immediately after being taken."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-[#8A73FF]" />,
      title: "No Sign-up Needed",
      description: "Guests can contribute without creating an account or downloading an app."
    },
    {
      icon: <Printer className="h-6 w-6 text-[#8A73FF]" />,
      title: "Printable QR Code",
      description: "Easily print and display the QR code at your event location."
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Recollect</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Simple, powerful features that make collecting memories a breeze
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
