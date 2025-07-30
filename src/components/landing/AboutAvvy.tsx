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
    <section id="about" className="py-24 bg-gradient-avvy-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-rounded font-black text-4xl md:text-5xl text-foreground mb-6">
            Avvyとは？
          </h2>
          <p className="font-rounded text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            次世代バーチャル配信プラットフォームで、クリエイターと配信者をつなぐ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/90 backdrop-blur-lg rounded-3xl hover:scale-105 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-avvy rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-rounded font-black text-2xl text-foreground mb-6">
                  {feature.title}
                </h3>
                <p className="font-rounded text-muted-foreground leading-relaxed text-lg">
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