
import { Heart, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface SongData {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  previewUrl?: string;
  spotifyUrl: string;
  releaseYear: string;
  genre?: string;  // Added genre property
  liked?: boolean;
}

interface MusicCardProps {
  song: SongData;
  onLike?: (id: string) => void;
  onPlay?: (url: string) => void;
}

const MusicCard = ({ song, onLike, onPlay }: MusicCardProps) => {
  const handlePlay = () => {
    if (song.previewUrl && onPlay) {
      onPlay(song.previewUrl);
    }
  };

  const handleLike = () => {
    if (onLike) {
      onLike(song.id);
    }
  };
  
  return (
    <Card className="overflow-hidden border-zinc-200/20 hover-scale group animate-fade-in">
      <div className="aspect-square overflow-hidden bg-secondary/30 relative">
        {song.albumArt ? (
          <img
            src={song.albumArt}
            alt={`${song.title} album art`}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground">
            No Image
          </div>
        )}
        
        {song.previewUrl && (
          <Button 
            variant="secondary" 
            size="icon"
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 text-white rounded-full"
            onClick={handlePlay}
          >
            <Play className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <CardContent className="pt-4 pb-2">
        <h3 className="font-medium text-sm truncate">{song.title}</h3>
        <p className="text-muted-foreground text-xs truncate">{song.artist}</p>
        <p className="text-xs text-muted-foreground mt-1">{song.releaseYear}</p>
      </CardContent>
      
      <CardFooter className="px-4 py-2 flex justify-between border-t border-zinc-200/10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleLike}
            >
              <Heart 
                className={`h-4 w-4 ${song.liked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{song.liked ? 'Remove from Likes' : 'Add to Likes'}</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href={song.spotifyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent>Open in Spotify</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default MusicCard;
