import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100/50 via-yellow-50/50 to-pink-100/50 flex items-center justify-center overflow-hidden">
      {/* Ultra Luxury Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs with glow */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse shadow-2xl" style={{animation: 'float 6s ease-in-out infinite, glow 4s ease-in-out infinite'}}></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse delay-1000 shadow-xl" style={{animation: 'float 8s ease-in-out infinite 1s, glow 5s ease-in-out infinite 1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse delay-500 shadow-2xl" style={{animation: 'float 7s ease-in-out infinite 0.5s, glow 3s ease-in-out infinite 0.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse delay-2000 shadow-xl" style={{animation: 'float 9s ease-in-out infinite 2s, glow 6s ease-in-out infinite 2s'}}></div>
        
        {/* Large central gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        
        {/* Particle effects */}
        {Array.from({length: 20}).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${i * 0.1}s`
            }}
          />
        ))}
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

          {/* Ultra Luxury Main Headline */}
          <h1 className="font-rounded font-black text-4xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-tight relative">
            <span className="block mb-4">Avvyで、あなたの</span>
            <span className="shimmer-text block text-5xl md:text-7xl lg:text-9xl mb-4" style={{animation: 'shimmer 3s ease-in-out infinite'}}>
              イラストが世界中
            </span>
            <span className="block">の配信者を彩る</span>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-50 animate-pulse delay-1000"></div>
          </h1>

          {/* Subheadline - Reduced size */}
          <p className="font-rounded text-lg md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            スポット案件から長期案件まで、<br className="md:hidden" />
            フリーランスイラストレーター大募集！
          </p>

          {/* Ultra Luxury Feature Images */}
          <div className="mb-16 flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="luxury-card rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/db384254-f6a8-4fae-802a-44fccb8289f4.png" 
                alt="Avvy App Interface" 
                className="h-56 object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="luxury-card rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 group-hover:from-accent/20 group-hover:via-primary/20 group-hover:to-secondary/20 transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/avvy-hero-background.png" 
                alt="Avvy Characters Lineup" 
                className="h-56 object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

          {/* Ultra Luxury Visual Grid */}
          <div className="mt-24 grid grid-cols-3 md:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div 
                key={i} 
                className="aspect-square luxury-card rounded-3xl backdrop-blur-lg flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:rotate-6 group relative overflow-hidden"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 group-hover:from-primary/50 group-hover:via-secondary/50 group-hover:to-accent/50 transition-all duration-500 rounded-3xl"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-xl relative z-10 group-hover:shadow-2xl transition-shadow duration-500" style={{animation: 'glow 3s ease-in-out infinite'}}></div>
                
                {/* Inner sparkle effect */}
                <div className="absolute inset-4 border-2 border-white/30 rounded-2xl group-hover:border-white/60 transition-colors duration-500"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;