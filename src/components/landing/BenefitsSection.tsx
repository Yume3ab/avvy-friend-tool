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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-noto font-bold text-3xl md:text-4xl text-foreground mb-4">
            クリエイターのメリット
          </h2>
        </div>
        
        <Card className="max-w-4xl mx-auto border border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="font-noto text-foreground leading-relaxed">
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