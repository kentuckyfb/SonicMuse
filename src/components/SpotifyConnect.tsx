
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Check, ExternalLink } from "lucide-react";

const SpotifyConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  
  const handleConnect = () => {
    // In a real implementation, this would redirect to Spotify OAuth flow
    // For demo purposes, we'll just toggle the state
    setIsConnected(!isConnected);
  };

  return (
    <Card className="border-zinc-200/20 animate-fade-in animation-delay-150">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1DB954]">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.83 14.42c-.15.25-.47.33-.73.18-2-.54-4.5-.66-7.46-.36-.28.03-.56-.17-.59-.45-.03-.28.17-.56.45-.59 3.21-.31 5.95-.18 8.15.42.26.15.34.47.18.73zm1.03-2.28c-.2.31-.62.4-.92.2-2.3-1.42-5.8-1.83-8.52-1-1.53.47-3.13.89-3.38.94-.36.07-.71-.16-.79-.52-.07-.36.16-.71.52-.79.25-.05 1.9-.47 3.47-.94 3.11-.93 7-.47 9.62 1.19.3.19.39.61.19.92h-.19zm.09-2.37c-2.75-1.64-7.29-1.79-9.92-.98-.42.13-.85-.11-.98-.52-.13-.42.11-.85.52-.98 3.03-.93 8.07-.75 11.25 1.14.39.23.52.74.28 1.13-.17.29-.55.44-.91.28-.08-.04-.16-.06-.24-.07z"
            />
          </svg>
          Spotify Connection
        </CardTitle>
        <CardDescription>
          Connect your Spotify account to unlock personalized recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="bg-black/5 p-4 rounded-md flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#1DB954] flex items-center justify-center text-white">
              <Check className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">Connected to Spotify</h4>
              <p className="text-xs text-muted-foreground">Your account is now linked</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            By connecting your Spotify account, you'll get better recommendations based on your listening habits. We'll never post anything without your permission.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant={isConnected ? "outline" : "default"}
          className={isConnected ? "w-full" : "w-full"}
          onClick={handleConnect}
        >
          {isConnected ? (
            "Disconnect Account"
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              Connect with Spotify
            </>
          )}
        </Button>
        
        {isConnected && (
          <Button variant="outline" size="icon" className="ml-2" asChild>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SpotifyConnect;
