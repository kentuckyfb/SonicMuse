
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicFilters from "@/components/MusicFilters";
import MusicCard, { SongData } from "@/components/MusicCard";
import PlaylistSuggestion, { PlaylistData } from "@/components/PlaylistSuggestion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRecommendations, getPlaylistRecommendations, getSimilarSongs } from "@/services/spotifyService";
import { Skeleton } from "@/components/ui/skeleton";
import { Music, Radio } from "lucide-react";

const Discover = () => {
  const { toast } = useToast();
  const [songs, setSongs] = useState<SongData[]>([]);
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]);
  const [recommendations, setRecommendations] = useState<SongData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [currentFilters, setCurrentFilters] = useState<any>(null);
  
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        const playlistsData = await getPlaylistRecommendations();
        setPlaylists(playlistsData);
        
        // Get initial recommendations
        const initialRecommendations = await getSimilarSongs("random");
        setRecommendations(initialRecommendations);
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching initial data:", error);
        setIsLoading(false);
      }
    };
    
    fetchInitialData();
    
    return () => {
      if (activeAudio) {
        activeAudio.pause();
      }
    };
  }, []);

  const handleFilterChange = async (filters: any) => {
    try {
      setCurrentFilters(filters);
      setIsLoading(true);
      
      const songsData = await getRecommendations(filters);
      setSongs(songsData);
      
      const resultText = songsData.length === 0 
        ? "No tracks found. Try different filters!" 
        : `Found ${songsData.length} tracks based on your filters`;
      
      toast({
        title: "Recommendations Updated",
        description: resultText,
      });
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to load recommendations. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleLike = (id: string) => {
    setSongs(songs.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    ));
    
    setRecommendations(recommendations.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    ));
    
    toast({
      title: "Track updated",
      description: "Your preferences have been saved.",
    });
  };

  const handlePlay = (previewUrl: string) => {
    if (activeAudio) {
      activeAudio.pause();
    }
    
    const audio = new Audio(previewUrl);
    audio.play();
    setActiveAudio(audio);
    
    audio.addEventListener('ended', () => {
      setActiveAudio(null);
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
    <div className="min-h-screen flex flex-col relative bg-dot-pattern">
      <Header />
      
      <main className="flex-1 pt-24 pb-24">
        <div className="content-grid">
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            <h1 className="text-xl font-bold mb-6 text-center flex items-center gap-2">
              <Music className="h-5 w-5" />
              Discover Music
            </h1>
            
            <MusicFilters onFilterChange={handleFilterChange} />
            
            <Tabs defaultValue="tracks" className="w-full">
              <TabsList className="flex justify-center mb-6">
                <TabsTrigger value="tracks">Tracks</TabsTrigger>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tracks">
                {!currentFilters ? (
                  <div>
                    <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Radio className="h-4 w-4" /> 
                      Recommended For You
                    </h2>
                    
                    {isLoading ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {renderSkeletons(8)}
                      </div>
                    ) : recommendations.length === 0 ? (
                      <div className="text-center py-10">
                        <p className="text-muted-foreground">
                          No recommendations available.
                          <br />
                          Try different criteria!
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {recommendations.map((song) => (
                          <MusicCard
                            key={song.id}
                            song={song}
                            onLike={handleLike}
                            onPlay={handlePlay}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="text-center mt-8 mb-4">
                      <p className="text-muted-foreground">
                        Use the filters above to discover more music based on your preferences
                      </p>
                    </div>
                  </div>
                ) : isLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {renderSkeletons(8)}
                  </div>
                ) : songs.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">
                      No songs found for your selected filters.
                      <br />
                      Try different criteria!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {songs.map((song) => (
                      <MusicCard
                        key={song.id}
                        song={song}
                        onLike={handleLike}
                        onPlay={handlePlay}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="playlists">
                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {renderSkeletons(4)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {playlists.map((playlist) => (
                      <PlaylistSuggestion key={playlist.id} playlist={playlist} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discover;
