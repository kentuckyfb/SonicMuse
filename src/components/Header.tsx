
import { Link } from "react-router-dom";
import { Music, Moon, Sun, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="w-[95%] max-w-5xl backdrop-blur-md bg-background/80 border border-border/30 rounded-full shadow-md animate-fade-in px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            <span className="font-semibold text-lg tracking-tight hidden sm:inline-block">SonicMuse</span>
          </Link>
          
          <nav className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/discover" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {!isMobile && <span>Discover</span>}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {!isMobile && <span>Profile</span>}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="outline" className="ml-2">
              Connect Spotify
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
