import { Card, CardContent } from "@/components/ui/card";
import { Globe, Palette, Sparkles } from "lucide-react";

const AboutAvvy = () => {
  const features = [
    {
      icon: Globe,
      title: "世界展開中のサービス",
      description: "誰でもスマホ一台で簡単にVTuberになり配信活動ができる2Dアバターアプリ。グローバルで配信中"
    },
    {
      icon: Palette,
      title: "毎月200点以上追加",
      description: "衣装＆ギフトイラストを継続的に拡充。あなたの作品が世界中で愛用される"
    },
    {
      icon: Sparkles,
            title: "VTuberファッション・トレンド最先端",
            description: "あなたのクリエイティブで流行の最先端を築ける"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-purple-50/80 via-yellow-50/80 to-pink-50/80 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-rounded font-black text-5xl md:text-7xl text-foreground mb-8 relative">
            <span className="shimmer-text">Avvyとは？</span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"></div>
          </h2>
          <p className="font-rounded text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            次世代バーチャル配信プラットフォームで、クリエイターと配信者をつなぐ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="luxury-card rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group relative overflow-hidden" style={{animation: `float ${4 + index}s ease-in-out infinite ${index * 0.5}s`}}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 group-hover:from-white/100 group-hover:via-white/95 group-hover:to-white/90 transition-all duration-500"></div>
              
              <CardContent className="p-12 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden" style={{animation: 'glow 4s ease-in-out infinite'}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 group-hover:from-primary/70 group-hover:to-accent/70 transition-all duration-500 rounded-3xl"></div>
                  <feature.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="font-rounded font-black text-3xl text-foreground mb-8 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-rounded text-muted-foreground leading-relaxed text-xl group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-primary/30 rounded-full group-hover:border-primary/60 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-accent/30 rounded-full group-hover:bg-accent/60 transition-colors duration-500"></div>
              </CardContent>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAvvy;