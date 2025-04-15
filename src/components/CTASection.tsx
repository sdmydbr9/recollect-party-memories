
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-lavender relative overflow-hidden">
      <div className="confetti">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white p-3 rounded-full mb-6">
            <PartyPopper className="h-8 w-8 text-[#8A73FF]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Recollect your next party?
          </h2>
          <p className="text-slate-700 mb-8 text-lg">
            Start creating memorable galleries for your events that everyone can contribute to.
          </p>
          <Button className="bg-mint hover:bg-mint/90 text-slate-800 h-12 px-8 rounded-full text-lg">
            Get Started – It's Free
          </Button>
        </div>
      </div>
    </section>
  );
}
