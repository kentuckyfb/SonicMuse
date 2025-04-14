
import { Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="fixed bottom-4 left-0 right-0 z-40 flex justify-center">
      <div className="mx-auto px-6 py-3 bg-background/80 backdrop-blur-md border border-border/30 rounded-full shadow-md">
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-${isMobile ? '2' : '6'} text-center`}>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SonicMuse
          </p>
          
          <div className={`flex items-center ${isMobile ? 'flex-col gap-2' : 'gap-6'}`}>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Heart className="h-3 w-3" /> Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
