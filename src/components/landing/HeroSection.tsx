import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-avvy-soft flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-avvy rounded-full opacity-5 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/86617918-2fb0-4251-ba87-902f35e49bb3.png" 
              alt="Avvy Logo" 
              className="h-16 mx-auto mb-4"
            />
          </div>

          {/* Main Headline - Reduced size */}
          <h1 className="font-rounded font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            Avvyで、あなたの<br className="hidden md:inline" />
            <span className="bg-gradient-avvy bg-clip-text text-transparent">イラストが世界中</span>の<br className="md:hidden" />
            配信者を彩る
          </h1>

          {/* Subheadline - Reduced size */}
          <p className="font-rounded text-lg md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            スポット案件から長期案件まで、<br className="md:hidden" />
            フリーランスイラストレーター大募集！
          </p>

          {/* Feature Images */}
          <div className="mb-12 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl">
              <img 
                src="/lovable-uploads/db384254-f6a8-4fae-802a-44fccb8289f4.png" 
                alt="Avvy App Interface" 
                className="h-48 object-contain rounded-2xl"
              />
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl">
              <img 
                src="/lovable-uploads/avvy-hero-background.png" 
                alt="Avvy Characters Lineup" 
                className="h-48 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToForm}
              variant="gradient"
              size="lg" 
              className="font-rounded font-black text-xl px-12 py-6"
            >
              応募フォームへ
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="font-rounded font-bold"
            >
              <a 
                href="#about" 
                className="inline-flex items-center"
              >
                詳細を見る
              </a>
            </Button>
          </div>

          {/* Enhanced Visual Elements */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl border-2 border-white/50 backdrop-blur-lg flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-3"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-avvy rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;