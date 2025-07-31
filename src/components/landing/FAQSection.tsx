import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "報酬の支払い方法は？",
      answer: "月末締め・翌月末 銀行振込でのお支払いとなります。海外在住の方も銀行振込にて対応いたします。"
    },
    {
      question: "著作権の取り扱いは？",
      answer: "買い切り契約となります。クリエイター様へのクレジット表記については、ご相談に応じて対応いたします。"
    },
    {
      question: "ライセンス用途は？",
      answer: "Avvy アプリ内での使用および公式 SNS・広告での使用を予定しております。詳細な利用範囲については契約時にご説明いたします。"
    },
    {
      question: "どのくらいの頻度で案件がありますか？",
      answer: "クリエイター様によって異なりますが、アプリとしては相応の物量需要が発生予定（毎月200点以上のイラストを追加予定等）のため、定期的にご依頼が発生する可能性があります。"
    },
    {
      question: "海外在住でも応募できますか？",
      answer: "はい、世界中のクリエイター様を募集しております。時差の関係でやり取りに時間がかかる場合がございますが、問題ございません。"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-rounded font-black text-4xl md:text-5xl text-foreground mb-6">
            よくある質問
          </h2>
          <p className="font-rounded text-lg text-muted-foreground max-w-2xl mx-auto">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-primary/20 rounded-3xl px-6 py-2 bg-gradient-avvy-soft hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="font-rounded font-bold text-left text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-rounded text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;