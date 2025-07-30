import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-noto font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Avvyで、あなたの<br className="hidden md:inline" />
            <span className="text-primary">イラストが世界中</span>の<br className="md:hidden" />
            配信者を彩る
          </h1>

          {/* Subheadline */}
          <p className="font-noto text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            スポット案件から長期案件まで、<br className="md:hidden" />
            フリーランスイラストレーター大募集！
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="font-noto font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            応募フォームへ
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Visual Elements - Placeholder for avatar assets collage */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl border border-primary/20 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;