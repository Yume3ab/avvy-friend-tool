import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50/30 via-pink-50/20 to-purple-50/30 flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="public/lovable-uploads/517f91a1-0694-453b-9a7c-8d3578090824.png" 
          alt="Avvy Characters Lineup" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;