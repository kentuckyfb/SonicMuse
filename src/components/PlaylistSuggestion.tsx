
import { Album, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export interface PlaylistData {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  spotifyUrl: string;
  trackCount: number;
  tags: string[];
}

interface PlaylistSuggestionProps {
  playlist: PlaylistData;
}

const PlaylistSuggestion = ({ playlist }: PlaylistSuggestionProps) => {
  return (
    <Card className="h-full border-zinc-200/20 hover-scale group animate-fade-in animation-delay-150">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded bg-secondary/30 flex-shrink-0 overflow-hidden">
            {playlist.imageUrl ? (
              <img
                src={playlist.imageUrl}
                alt={`${playlist.name} playlist`}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground">
                <Album className="h-6 w-6" />
              </div>
            )}
          </div>
          <div>
            <CardTitle className="text-base">{playlist.name}</CardTitle>
            {playlist.description && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{playlist.description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <span>{playlist.trackCount} tracks</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {playlist.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href={playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>Open in Spotify</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Listen on Spotify</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default PlaylistSuggestion;
