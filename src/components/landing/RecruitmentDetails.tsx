import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Gift, Image, Palette, FileText } from "lucide-react";

const RecruitmentDetails = () => {
  const recruitmentItems = [
    {
      icon: User,
      title: "アバター衣装・アクセサリ",
      description: "Live2D/Spine 用パーツ分けイラスト",
      tags: ["Live2D", "Spine", "パーツ分け"]
    },
    {
      icon: Gift,
      title: "配信中ギフト",
      description: "静止画＋簡易アニメーション（PNG/PNGシーケンス）",
      tags: ["アニメーション", "PNG", "エフェクト"]
    },
    {
      icon: Image,
      title: "ガチャバナー・キービジュアル",
      description: "SNS/アプリ用の横長・正方形素材",
      tags: ["バナー", "SNS", "キービジュアル"]
    }
  ];

  const styles = [
    "アニメ塗り", "厚塗り", "ミニキャラ", "リアル調", "水彩風"
  ];

  const contractTypes = [
    { type: "業務委託", detail: "スポット／継続" },
    { type: "報酬形態", detail: "アイテム単価 or 工数見積" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-noto font-bold text-3xl md:text-4xl text-foreground mb-4">
            募集内容
          </h2>
          <p className="font-noto text-lg text-muted-foreground max-w-2xl mx-auto">
            様々なジャンルのイラスト制作をお任せします
          </p>
        </div>

        {/* 募集項目 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {recruitmentItems.map((item, index) => (
            <Card key={index} className="border border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-noto font-bold text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="font-noto text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-noto text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* タッチ・スタイル */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-noto font-bold text-xl text-foreground">
                  歓迎するタッチ
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {styles.map((style, index) => (
                  <Badge key={index} variant="outline" className="font-noto border-accent/50 text-accent">
                    {style}
                  </Badge>
                ))}
              </div>
              <p className="font-noto text-sm text-muted-foreground mt-4">
                幅広いスタイルを歓迎しています！
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-noto font-bold text-xl text-foreground">
                  契約形態
                </h3>
              </div>
              <div className="space-y-3">
                {contractTypes.map((contract, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-noto font-medium text-foreground">
                      {contract.type}
                    </span>
                    <Badge className="font-noto bg-primary/10 text-primary border-primary/20">
                      {contract.detail}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentDetails;