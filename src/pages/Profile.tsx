
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpotifyConnect from "@/components/SpotifyConnect";
import MusicCard, { SongData } from "@/components/MusicCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const [likedSongs, setLikedSongs] = useState<SongData[]>([]);
  const [recentSongs, setRecentSongs] = useState<SongData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Simulate loading user data
    const loadUserData = () => {
      setIsLoading(true);
      
      // Mock data - in a real app, this would come from Spotify API
      setTimeout(() => {
        const mockLikedSongs: SongData[] = [
          {
            id: "101",
            title: "Redbone",
            artist: "Childish Gambino",
            albumArt: "https://i.scdn.co/image/ab67616d0000b273b08b996d08001270adc8b555",
            spotifyUrl: "https://open.spotify.com/track/3kxfsdsCpFgN412fpnW85Y",
            releaseYear: "2016",
            liked: true
          },
          {
            id: "102",
            title: "Alright",
            artist: "Kendrick Lamar",
            albumArt: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
            spotifyUrl: "https://open.spotify.com/track/3iVcZ5G6tvkXZkZKlMpIUs",
            releaseYear: "2015",
            liked: true
          }
        ];
        
        const mockRecentSongs: SongData[] = [
          {
            id: "201",
            title: "Blinding Lights",
            artist: "The Weeknd",
            albumArt: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
            spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
            releaseYear: "2020"
          },
          {
            id: "202",
            title: "Bad Guy",
            artist: "Billie Eilish",
            albumArt: "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
            spotifyUrl: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
            releaseYear: "2019"
          },
          {
            id: "203",
            title: "Levitating",
            artist: "Dua Lipa ft. DaBaby",
            albumArt: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
            spotifyUrl: "https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF",
            releaseYear: "2020"
          }
        ];
        
        setLikedSongs(mockLikedSongs);
        setRecentSongs(mockRecentSongs);
        setIsConnected(true);
        setIsLoading(false);
      }, 1500);
    };
    
    loadUserData();
  }, []);

  const handleConnectToggle = () => {
    setIsConnected(!isConnected);
    
    if (!isConnected) {
      toast({
        title: "Connected to Spotify",
        description: "Your account has been successfully linked."
      });
    } else {
      toast({
        title: "Disconnected from Spotify",
        description: "Your account has been unlinked."
      });
    }
  };

  const handleLike = (id: string) => {
    // Update liked status in both arrays
    setLikedSongs(likedSongs.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    ));
    
    setRecentSongs(recentSongs.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    ));
    
    toast({
      title: "Track updated",
      description: "Your preferences have been saved.",
    });
  };

  const renderSkeletons = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <div key={i} className="animate-pulse">
        <Skeleton className="h-48 w-full" />
        <div className="mt-3 space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <section className="py-10">
          <div className="content-grid">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
              <p className="text-muted-foreground">
                Manage your music preferences and Spotify connection
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <SpotifyConnect />
                  
                  <div className="border border-zinc-200/20 rounded-lg p-4 bg-card">
                    <h3 className="font-medium mb-3">Music Preferences</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Manage Favorite Genres
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Discovery Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <Tabs defaultValue="library">
                  <TabsList className="mb-6">
                    <TabsTrigger value="library">Your Library</TabsTrigger>
                    <TabsTrigger value="history">Listening History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="library">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-medium">Liked Songs</h3>
                        <Button variant="link" size="sm" className="text-xs">
                          View All
                        </Button>
                      </div>
                      
                      {isLoading ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {renderSkeletons(4)}
                        </div>
                      ) : likedSongs.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {likedSongs.map(song => (
                            <MusicCard
                              key={song.id}
                              song={song}
                              onLike={handleLike}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 border border-dashed rounded-lg">
                          <p className="text-muted-foreground mb-4">
                            You haven't liked any songs yet
                          </p>
                          <Button size="sm" asChild>
                            <a href="/discover">Discover Music</a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-medium">Recently Played</h3>
                      </div>
                      
                      {isLoading ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {renderSkeletons(4)}
                        </div>
                      ) : recentSongs.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {recentSongs.map(song => (
                            <MusicCard
                              key={song.id}
                              song={song}
                              onLike={handleLike}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 border border-dashed rounded-lg">
                          <p className="text-muted-foreground mb-4">
                            No recent listening activity
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
