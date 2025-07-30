import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-foreground via-foreground to-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-rounded font-black text-2xl mb-6">AnotherBall Pte. Ltd.</h3>
          <div className="mb-6">
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="font-rounded font-bold border-background/30 text-background hover:bg-background/20"
            >
              <a 
                href="https://avvy.live/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Avvy公式サイトを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="font-rounded text-lg mb-8 opacity-90">Avvy Art Team 連絡先: art@avvy.app</p>
          <div className="flex justify-center space-x-8 text-base">
            <a href="#" className="hover:text-primary transition-colors font-rounded font-medium">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors font-rounded font-medium">利用規約</a>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="font-rounded text-sm opacity-70">© 2024 AnotherBall Pte. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;