
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

const genreOptions = [
  "Pop", "Rock", "Hip Hop", "R&B", "Electronic", "Classical", 
  "Jazz", "Country", "Metal", "Folk", "Indie", "Blues", "Reggae",
  "Alternative", "Funk", "Soul", "Disco", "Techno", "House", "Ambient",
  "Trap", "Punk", "Grunge", "K-pop", "J-pop", "Latin"
];

// Decades from 1950s to 2020s
const decadeOptions = Array.from({ length: 8 }, (_, i) => `${1950 + i * 10}s`);

// Mood options
const moodOptions = ["Happy", "Sad", "Energetic", "Relaxed", "Romantic", "Angry", "Nostalgic", "Calm"];

// Tempo options
const tempoOptions = ["Slow", "Medium", "Fast"];

interface MusicFiltersProps {
  onFilterChange: (filters: any) => void;
}

const MusicFilters = ({ onFilterChange }: MusicFiltersProps) => {
  const [genre, setGenre] = useState<string>("");
  const [decade, setDecade] = useState<string>("");
  const [popularity, setPopularity] = useState<number[]>([50]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [tempo, setTempo] = useState<string>("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      genre,
      decade,
      popularity: popularity[0],
      searchTerm,
      moods: selectedMoods,
      tempo
    });
  };

  const getPopularityLabel = (): string => {
    const value = popularity[0];
    if (value < 30) return "Underground";
    if (value < 60) return "Hidden Gems";
    if (value < 80) return "Rising";
    return "Mainstream";
  };

  const toggleMood = (mood: string) => {
    setSelectedMoods(current => 
      current.includes(mood)
        ? current.filter(m => m !== mood)
        : [...current, mood]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-3 justify-center bg-card/70 p-4 rounded-xl border border-border backdrop-blur-sm animate-fade-in mb-6 shadow-sm">
      <div className="flex flex-col sm:flex-row w-full gap-2 items-center">
        <div className="relative w-full sm:w-auto flex-1">
          <Input
            type="text"
            placeholder="Search artists, songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10 w-full"
          />
        </div>

        <div className="flex flex-row w-full sm:w-auto gap-2">
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger className="w-28 text-sm">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              <SelectItem value="any">Any Genre</SelectItem>
              {genreOptions.map((g) => (
                <SelectItem key={g} value={g.toLowerCase()}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={decade} onValueChange={setDecade}>
            <SelectTrigger className="w-28 text-sm">
              <SelectValue placeholder="Era" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Era</SelectItem>
              {decadeOptions.map((d) => (
                <SelectItem key={d} value={d.toLowerCase()}>
                  {d}
                </SelectItem>
              ))}
              <SelectItem value="current">Current</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="text-sm w-[110px]">
                {getPopularityLabel()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Popularity</h4>
                <Slider
                  id="popularity"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  value={popularity}
                  onValueChange={setPopularity}
                />
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Underground</span>
                  <span className="text-xs text-muted-foreground">Mainstream</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <Button type="submit" size="sm" className="w-full sm:w-auto">
          <Search className="mr-2 h-4 w-4" />
          Discover
        </Button>
      </div>
      
      <div className="w-full flex items-center justify-between">
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          className="text-xs flex items-center"
          onClick={() => setAdvancedOpen(!advancedOpen)}
        >
          <SlidersHorizontal className="h-3 w-3 mr-1" />
          {advancedOpen ? "Hide Advanced Filters" : "Show Advanced Filters"}
        </Button>
        
        {selectedMoods.length > 0 && (
          <div className="flex gap-1 flex-wrap justify-end">
            {selectedMoods.map(mood => (
              <Badge key={mood} variant="secondary" className="text-xs">
                {mood}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {advancedOpen && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 p-3 border-t border-border/50">
          <div>
            <Label className="text-sm mb-2 block">Mood</Label>
            <div className="flex flex-wrap gap-2">
              {moodOptions.map(mood => (
                <div key={mood} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`mood-${mood}`} 
                    checked={selectedMoods.includes(mood)}
                    onCheckedChange={() => toggleMood(mood)}
                  />
                  <label
                    htmlFor={`mood-${mood}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {mood}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Label className="text-sm mb-2 block">Tempo</Label>
            <Select value={tempo} onValueChange={setTempo}>
              <SelectTrigger className="w-full text-sm">
                <SelectValue placeholder="Any Tempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Tempo</SelectItem>
                {tempoOptions.map((t) => (
                  <SelectItem key={t} value={t.toLowerCase()}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </form>
  );
};

export default MusicFilters;
