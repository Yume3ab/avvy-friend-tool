import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "世界中の VTuber・配信者に自分の絵が使われる",
    "柔軟なスケジュール・完全リモート",
    "高解像度データの実績公開 OK（リリース後）",
    "継続発注で安定収入も可能"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-rounded font-black text-4xl md:text-5xl text-foreground mb-6">
            クリエイターのメリット
          </h2>
          <p className="font-rounded text-lg text-muted-foreground">
            Avvyで活躍するクリエイターの特典をご紹介
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-gradient-avvy-soft rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-avvy rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-rounded text-foreground leading-relaxed text-lg font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;