import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "世界中の VTuber・配信者に自分の絵が使われる",
    "実績公開 OK（リリース後）",
    "依頼ニーズに応じた柔軟なスケジュール・完全リモート"
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80 relative overflow-hidden">
      {/* Ultra luxury background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl" style={{animation: 'float 10s ease-in-out infinite 2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-rounded font-black text-5xl md:text-7xl text-foreground mb-8 relative">
            <span className="shimmer-text">クリエイターのメリット</span>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"></div>
          </h2>
          <p className="font-rounded text-2xl text-muted-foreground">
            Avvyで活躍するクリエイターの特典をご紹介
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto luxury-card rounded-3xl shadow-2xl overflow-hidden relative" style={{animation: 'glow 6s ease-in-out infinite'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
          
          <CardContent className="p-16 relative z-10">
            <div className="grid grid-cols-1 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group relative" style={{animation: `fade-in 0.6s ease-out ${index * 0.2}s both`}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary via-secondary to-accent rounded-full flex items-center justify-center mr-8 mt-2 flex-shrink-0 shadow-2xl group-hover:scale-125 transition-all duration-500 relative overflow-hidden" style={{animation: 'glow 3s ease-in-out infinite'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 group-hover:from-primary group-hover:to-accent transition-all duration-500 rounded-full"></div>
                    <Check className="w-7 h-7 text-white relative z-10" />
                  </div>
                  <div className="flex-1">
                    <span className="font-rounded text-foreground leading-relaxed text-xl font-bold group-hover:text-primary transition-colors duration-300 block">
                      {benefit}
                    </span>
                    {/* Decorative underline */}
                    <div className="mt-3 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500" style={{animation: 'float 4s ease-in-out infinite'}}></div>
                </div>
              ))}
            </div>
            
            {/* Central decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-2xl pointer-events-none"></div>
          </CardContent>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;