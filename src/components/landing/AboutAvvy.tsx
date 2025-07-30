import { Card, CardContent } from "@/components/ui/card";
import { Globe, Palette, Workflow } from "lucide-react";

const AboutAvvy = () => {
  const features = [
    {
      icon: Globe,
      title: "世界展開中のサービス",
      description: "2Dアバター生成アプリ + 配信／ガチャ機能を持つグローバルプラットフォーム"
    },
    {
      icon: Palette,
      title: "毎月200点以上追加",
      description: "衣装＆ギフトイラストを継続的に拡充。あなたの作品が世界中で愛用される"
    },
    {
      icon: Workflow,
      title: "最適化されたワークフロー",
      description: "クリエイターが活躍しやすいオンライン制作環境を完備"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-noto font-bold text-3xl md:text-4xl text-foreground mb-4">
            Avvyとは？
          </h2>
          <p className="font-noto text-lg text-muted-foreground max-w-2xl mx-auto">
            次世代バーチャル配信プラットフォームで、クリエイターと配信者をつなぐ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-noto font-bold text-xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-noto text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAvvy;