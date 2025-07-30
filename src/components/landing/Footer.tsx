const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-noto font-bold text-xl mb-4">AnotherBall Pte. Ltd.</h3>
          <p className="font-noto text-sm mb-6">Avvy Art Team 連絡先: art@avvy.app</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;