import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ApplicationForm = () => {
  return (
    <section id="application-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-noto font-bold text-3xl text-foreground mb-4">
                応募フォーム
              </CardTitle>
              <p className="font-noto text-muted-foreground">
                以下のフォームより応募をお待ちしております
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-muted/30 rounded-xl p-8 text-center">
                <div className="mb-6">
                  <h3 className="font-noto font-bold text-xl text-foreground mb-4">
                    必須項目
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    {[
                      "お名前", "メールアドレス", "国／お住まいの地域", "得意なタッチ・制作領域",
                      "使用ソフト", "稼働可能時間／週", "ポートフォリオURL", "コメント欄（自己PR等）"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="font-noto text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  size="lg" 
                  className="font-noto font-bold px-8 py-6 rounded-xl"
                >
                  <a 
                    href="https://forms.google.com/placeholder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Google フォームで応募する
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;