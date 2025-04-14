
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpotifyConnect from "@/components/SpotifyConnect";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="content-grid">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-fade-in">
                Discover Your Next
                <br />
                Favorite Track
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-75">
                SonicMuse helps you find new music based on your preferences, 
                from underground gems to chart-topping hits across any genre or era.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in animation-delay-150">
                <Button size="lg" asChild>
                  <Link to="/discover" className="flex items-center gap-1">
                    Start Exploring
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/50">
          <div className="content-grid">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18" />
                    <path d="M8 9v7" />
                    <path d="M16 9v7" />
                    <path d="M12 12V9" />
                    <path d="M12 12v7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Personalized Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Filter by genre, year, and popularity level to discover music that matches your exact taste.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border animate-fade-in animation-delay-75">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Playlist Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  Discover curated playlists that match your music taste and explore new collections.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border animate-fade-in animation-delay-150">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Spotify Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Connect your Spotify account to get better recommendations and play your discoveries instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spotify Connect Section */}
        <section className="py-16">
          <div className="content-grid">
            <div className="max-w-md mx-auto">
              <SpotifyConnect />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
