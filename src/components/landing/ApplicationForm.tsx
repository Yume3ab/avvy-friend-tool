import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ApplicationForm = () => {
  return (
    <section id="application-form" className="py-24 bg-gradient-avvy-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-8 bg-gradient-avvy text-white">
              <CardTitle className="font-rounded font-black text-4xl mb-6">
                応募フォーム
              </CardTitle>
              <p className="font-rounded text-xl opacity-90">
                以下のフォームより応募をお待ちしております
              </p>
            </CardHeader>
            <CardContent className="p-12">
              <div className="bg-gradient-avvy-soft rounded-3xl p-10 text-center">
                <div className="mb-10">
                  <h3 className="font-rounded font-black text-2xl text-foreground mb-8">
                    必須項目
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    {[
                      "お名前", "メールアドレス", "国／お住まいの地域", "得意なタッチ・制作領域",
                      "使用ソフト", "稼働可能時間／週", "ポートフォリオURL", "コメント欄（自己PR等）"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-4 h-4 bg-gradient-avvy rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="font-rounded text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  variant="gradient"
                  size="lg" 
                  className="font-rounded font-black text-xl px-12 py-6"
                >
                  <a 
                    href="https://forms.google.com/placeholder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Google フォームで応募する
                    <ExternalLink className="ml-3 h-6 w-6" />
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