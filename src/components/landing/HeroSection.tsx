import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="public/lovable-uploads/517f91a1-0694-453b-9a7c-8d3578090824.png" 
          alt="Avvy Characters Lineup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Main Headline with White Text */}
          <h1 className="font-rounded font-black text-5xl md:text-7xl lg:text-8xl mb-8 pt-16 leading-tight bg-gradient-avvy bg-clip-text text-transparent" style={{filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.8))'}}>
            <span className="block mb-4">あなたのイラストが</span>
            <span className="block">世界中の配信者を彩る</span>
          </h1>

          {/* Subheadline */}
          <p className="font-rounded text-lg md:text-2xl text-black font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
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
              variant="gradient"
              size="lg" 
              className="font-rounded font-black text-xl px-12 py-6"
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