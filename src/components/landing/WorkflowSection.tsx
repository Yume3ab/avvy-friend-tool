import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileEdit, Hammer, CheckCircle, CreditCard } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: Shield,
      title: "NDA 締結",
      description: "機密保持契約を結び、安心して制作に集中",
      step: "01"
    },
    {
      icon: FileEdit,
      title: "ラフ提出",
      description: "アイデアスケッチから詳細ラフまで段階的に",
      step: "02"
    },
    {
      icon: Hammer,
      title: "制作",
      description: "承認されたラフを基に本制作を開始",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "検収",
      description: "品質チェック後、修正対応を行います",
      step: "04"
    },
    {
      icon: CreditCard,
      title: "報酬お支払い",
      description: "検収完了後、迅速にお支払いいたします",
      step: "05"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-noto font-bold text-3xl md:text-4xl text-foreground mb-4">
            制作フロー
          </h2>
          <p className="font-noto text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            全工程オンラインで完結。スムーズなワークフローを実現
          </p>
          <p className="font-noto text-sm text-muted-foreground">
            Slack／Google Workspace を活用
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-noto font-bold text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-noto text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;