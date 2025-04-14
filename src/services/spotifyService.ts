
import { SongData } from "@/components/MusicCard";
import { PlaylistData } from "@/components/PlaylistSuggestion";

// Mock data for songs
const mockSongs: SongData[] = [
  {
    id: "1",
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
    spotifyUrl: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
    previewUrl: "https://p.scdn.co/mp3-preview/0f3d3f0755aef2c30736d39e18d065b2c4e67c29",
    releaseYear: "2015",
    genre: "indie",
  },
  {
    id: "2",
    title: "After Hours",
    artist: "The Weeknd",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    spotifyUrl: "https://open.spotify.com/track/2p8IUWQDrpjuFltbdgLOag",
    releaseYear: "2020",
    genre: "pop",
    previewUrl: "https://p.scdn.co/mp3-preview/6b4c7c8c875e7feae8b37b571cedda4f1032ae72",
  },
  {
    id: "3",
    title: "Dreams",
    artist: "Fleetwood Mac",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4d4f5cf7ed45",
    spotifyUrl: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",
    previewUrl: "https://p.scdn.co/mp3-preview/4a54d83c4085364b4340338ec6c96047e9c26c06",
    releaseYear: "1977",
    genre: "rock",
  },
  {
    id: "4",
    title: "No Role Modelz",
    artist: "J. Cole",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273c6e0948bbb0681ff29cdbae8",
    spotifyUrl: "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr",
    releaseYear: "2014",
    genre: "hip hop",
    previewUrl: "https://p.scdn.co/mp3-preview/3b97e1cbf408c8346ecf17be00e72417b0d29b8c",
  },
  {
    id: "5",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
    spotifyUrl: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb",
    releaseYear: "1975",
    genre: "rock",
    previewUrl: "https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac23c0e61a304",
  },
  {
    id: "6",
    title: "Get Lucky",
    artist: "Daft Punk ft. Pharrell Williams",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2739b9886a412e0a9111772adca",
    spotifyUrl: "https://open.spotify.com/track/2Foc5Q5nqNiosCNqttzHof",
    previewUrl: "https://p.scdn.co/mp3-preview/e622a413d2a344cf95372591224430b7ce878905",
    releaseYear: "2013",
    genre: "electronic",
  },
  // Adding more songs for broader coverage
  {
    id: "7",
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273c1259d5206b3ef4e1febf803",
    spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    previewUrl: "https://p.scdn.co/mp3-preview/8d3df1c64907cb183bff5a127b1525b530992c53",
    releaseYear: "2020",
    genre: "pop",
  },
  {
    id: "8",
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
    spotifyUrl: "https://open.spotify.com/track/5ghIJDpPoe3CfHMGu71E6T",
    previewUrl: "https://p.scdn.co/mp3-preview/5a31fecaa5a02152b3ff69342f0c4e5fdacc8c8e",
    releaseYear: "1991",
    genre: "rock",
  },
  {
    id: "9",
    title: "Redbone",
    artist: "Childish Gambino",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273b08b996d08001270adc8b555",
    spotifyUrl: "https://open.spotify.com/track/3kxfsdsCpFgN412fpnW85Y",
    previewUrl: "https://p.scdn.co/mp3-preview/18d3b87b0765cd6d8c0a418d6142b3b441be152e",
    releaseYear: "2016",
    genre: "r&b",
  },
  {
    id: "10",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
    spotifyUrl: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
    previewUrl: "https://p.scdn.co/mp3-preview/b49927e9a5b31c9565fc0b9e5ccaee2aa97e45e9",
    releaseYear: "1971",
    genre: "rock",
  },
  {
    id: "11",
    title: "Take on Me",
    artist: "a-ha",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    spotifyUrl: "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L",
    previewUrl: "https://p.scdn.co/mp3-preview/9713c9a28cdd57e5b8531ebf783e299c3ec5d577",
    releaseYear: "1985",
    genre: "pop",
  },
  {
    id: "12",
    title: "Superstition",
    artist: "Stevie Wonder",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273819fa7ee9816e65aede85efc",
    spotifyUrl: "https://open.spotify.com/track/1qiQduM84n52mBoHbHWVLY",
    previewUrl: "https://p.scdn.co/mp3-preview/4817e127acbf3d4bcbdce7a428fc16daef860d2e",
    releaseYear: "1972",
    genre: "soul",
  },
  {
    id: "13",
    title: "Billie Jean",
    artist: "Michael Jackson",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97",
    spotifyUrl: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
    previewUrl: "https://p.scdn.co/mp3-preview/14a1dde3f23d62ad1b156dbeb2ab5d127d5a8789",
    releaseYear: "1982",
    genre: "pop",
  },
  {
    id: "14",
    title: "Hotel California",
    artist: "Eagles",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d589b5738ea5a29f51f3f8dd",
    spotifyUrl: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv",
    previewUrl: "https://p.scdn.co/mp3-preview/7e4b6bd0d5118f21e935746113af4a41b22f829f",
    releaseYear: "1976",
    genre: "rock",
  },
  {
    id: "15",
    title: "Imagine",
    artist: "John Lennon",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273972787612e6a92c0ef10fa9b",
    spotifyUrl: "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9",
    previewUrl: "https://p.scdn.co/mp3-preview/d1c2b0839e7a94a0c25c24e6c1a65c0385e71c01",
    releaseYear: "1971",
    genre: "rock",
  },
  {
    id: "16",
    title: "Wonderwall",
    artist: "Oasis",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d86a1e021e7acc7c07c7d668",
    spotifyUrl: "https://open.spotify.com/track/5qqabIl2vWzo9ApSC317sa",
    previewUrl: "https://p.scdn.co/mp3-preview/60f0976249365c9b6a92462b9522367ed0ae3146",
    releaseYear: "1995",
    genre: "rock",
  },
  {
    id: "17",
    title: "Don't Stop Believin'",
    artist: "Journey",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d92adaa3b5f52209452ae5b3",
    spotifyUrl: "https://open.spotify.com/track/4bHsxqR3GMrXTxEPLuK5ue",
    previewUrl: "https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670",
    releaseYear: "1981",
    genre: "rock",
  },
  {
    id: "18",
    title: "Hotline Bling",
    artist: "Drake",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273631010a2a805b7e2116bdad4",
    spotifyUrl: "https://open.spotify.com/track/0wwPcA6wtMf6HUMpIRdeP7",
    previewUrl: "https://p.scdn.co/mp3-preview/189b338576368e1d024f4e624f5152fc883d3634",
    releaseYear: "2015",
    genre: "hip hop",
  },
  {
    id: "19",
    title: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2736d7eae39551a70f4281f25ad",
    spotifyUrl: "https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51",
    previewUrl: "https://p.scdn.co/mp3-preview/51c9ba8314c7b48fc40d9b85d9a9a156d1f55698",
    releaseYear: "1987",
    genre: "rock",
  },
  {
    id: "20",
    title: "Midnight City",
    artist: "M83",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273a01f3057c23a6e1e0739c781",
    spotifyUrl: "https://open.spotify.com/track/1eyzqe2QqGZUmfcPZtrIyt",
    previewUrl: "https://p.scdn.co/mp3-preview/1515212f1c18ab3674cc5c6c04be9a1c866ce3ad",
    releaseYear: "2011",
    genre: "electronic",
  },
  {
    id: "21",
    title: "So What",
    artist: "Miles Davis",
    albumArt: "https://i.scdn.co/image/ab67616d0000b27349fcb3263aa7b5e7f44246e5",
    spotifyUrl: "https://open.spotify.com/track/4vLYewWIvqHfKtJDk8c8tq",
    previewUrl: "https://p.scdn.co/mp3-preview/52fbb2b2b9e8fdce5f55d76f0fe008bb56d3c662",
    releaseYear: "1959",
    genre: "jazz",
  },
  {
    id: "22",
    title: "These Boots Are Made for Walkin'",
    artist: "Nancy Sinatra",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273549b6b628b74e716579df8d8",
    spotifyUrl: "https://open.spotify.com/track/0j0EzzGltnXQn1zZM6qHhi",
    previewUrl: "https://p.scdn.co/mp3-preview/f46b4fb28b4c4335e334f10822784ad87aa3b7a6",
    releaseYear: "1966",
    genre: "pop",
  },
  {
    id: "23",
    title: "Shape of You",
    artist: "Ed Sheeran",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    previewUrl: "https://p.scdn.co/mp3-preview/84462d8e1e4d0f9c4a90b36de6c73ff0e4949b68",
    releaseYear: "2017",
    genre: "pop",
  },
  {
    id: "24",
    title: "Gimme Shelter",
    artist: "The Rolling Stones",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273dec09ec14280f9667f5e8980",
    spotifyUrl: "https://open.spotify.com/track/6H3kDe7CGoWYBabAeVWGiD",
    previewUrl: "https://p.scdn.co/mp3-preview/fbed92bd3f779239abf02db60ac3ebfb4c31bf86",
    releaseYear: "1969",
    genre: "rock",
  },
];

// Mock data for playlists
const mockPlaylists: PlaylistData[] = [
  {
    id: "1",
    name: "Indie Rock Essentials",
    description: "The best indie rock tracks of all time. Perfect for those who love alternative sounds with an edge.",
    imageUrl: "https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0",
    trackCount: 75,
    tags: ["indie", "rock", "alternative"],
  },
  {
    id: "2",
    name: "Lo-Fi Beats",
    description: "Chill hip hop beats to study, relax, and focus.",
    imageUrl: "https://i.scdn.co/image/ab67706c0000da84243b0db87283866c698d6a8a",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn",
    trackCount: 400,
    tags: ["lo-fi", "chill", "beats", "study"],
  },
  {
    id: "3",
    name: "90's Hits",
    description: "Take a trip down memory lane with the biggest hits of the 90s.",
    imageUrl: "https://i.scdn.co/image/ab67706f00000002753594c5fa825d3130db7d74",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l",
    trackCount: 100,
    tags: ["90s", "pop", "rock", "nostalgic"],
  },
  {
    id: "4",
    name: "Jazz Classics",
    description: "Timeless jazz standards from the masters of the genre.",
    imageUrl: "https://i.scdn.co/image/ab67706f0000000286ce40ce5e5440812d025237",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt",
    trackCount: 50,
    tags: ["jazz", "classics", "instrumental"],
  },
  {
    id: "5",
    name: "Electronic Essentials",
    description: "From ambient to techno, the best in electronic music.",
    imageUrl: "https://i.scdn.co/image/ab67706f000000025f0ff9251e3cfe3cbd4721da",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n",
    trackCount: 120,
    tags: ["electronic", "techno", "house", "ambient"],
  },
  {
    id: "6",
    name: "Hip-Hop Classics",
    description: "The foundational tracks that built hip-hop culture.",
    imageUrl: "https://i.scdn.co/image/ab67706f00000002b7a811aa5f67e25c365bd6cc",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX48TTZQ06ytC",
    trackCount: 85,
    tags: ["hip-hop", "rap", "classics", "oldschool"],
  }
];

// Function to fetch recommendations based on filters
export const getRecommendations = async (filters: any): Promise<SongData[]> => {
  // In a real implementation, this would make an API call to Spotify
  // For demo purposes, we'll just return mock data with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredSongs = [...mockSongs];
      
      // Filter by search term if specified
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filteredSongs = filteredSongs.filter(song => 
          song.title.toLowerCase().includes(term) || 
          song.artist.toLowerCase().includes(term)
        );
      }
      
      // Filter by genre if specified
      if (filters.genre) {
        filteredSongs = filteredSongs.filter(song => 
          song.genre && song.genre.toLowerCase().includes(filters.genre.toLowerCase())
        );
      }
      
      // Filter by decade if specified
      if (filters.decade) {
        if (filters.decade === "current") {
          const currentYear = new Date().getFullYear();
          filteredSongs = filteredSongs.filter(song => {
            const releaseYear = parseInt(song.releaseYear);
            return releaseYear >= currentYear - 5;
          });
        } else {
          const decadeStart = parseInt(filters.decade);
          if (!isNaN(decadeStart)) {
            filteredSongs = filteredSongs.filter(song => {
              const releaseYear = parseInt(song.releaseYear);
              return releaseYear >= decadeStart && releaseYear < decadeStart + 10;
            });
          }
        }
      }
      
      // Filter by popularity if specified
      if (filters.popularity !== undefined) {
        // For simplicity, we're using a random factor for mock popularity
        const popularityThreshold = filters.popularity / 100;
        filteredSongs = filteredSongs.filter(() => {
          return Math.random() < (0.4 + (popularityThreshold * 0.6));
        });
      }
      
      // Filter by mood (mock implementation)
      if (filters.moods && filters.moods.length > 0) {
        // This is a simplified mock implementation
        // In a real app, we'd use audio features to determine mood
        const moodMap: {[key: string]: string[]} = {
          "happy": ["pop", "disco", "funk", "soul"],
          "sad": ["blues", "indie", "folk", "jazz"],
          "energetic": ["rock", "metal", "electronic", "techno", "house"],
          "relaxed": ["ambient", "classical", "jazz", "folk"],
          "romantic": ["r&b", "soul", "jazz"],
          "angry": ["metal", "punk", "rock", "grunge"],
          "nostalgic": ["80s", "90s", "oldies"],
          "calm": ["ambient", "classical", "jazz"]
        };
        
        filteredSongs = filteredSongs.filter(song => {
          if (!song.genre) return false;
          
          // Check if song genre matches any of the selected moods
          return filters.moods.some((mood: string) => {
            const genresForMood = moodMap[mood.toLowerCase()];
            if (!genresForMood) return false;
            
            return genresForMood.some(genre => 
              song.genre?.toLowerCase().includes(genre)
            );
          });
        });
      }
      
      // Filter by tempo (mock implementation)
      if (filters.tempo) {
        // This is a simplified mock implementation
        // In a real app, we'd use audio features to determine tempo
        const tempoMap: {[key: string]: string[]} = {
          "slow": ["blues", "jazz", "ambient", "classical", "folk", "soul"],
          "medium": ["pop", "r&b", "reggae", "indie", "alternative"],
          "fast": ["rock", "metal", "electronic", "techno", "house", "punk"]
        };
        
        filteredSongs = filteredSongs.filter(song => {
          if (!song.genre) return false;
          
          const genresForTempo = tempoMap[filters.tempo.toLowerCase()];
          if (!genresForTempo) return false;
          
          return genresForTempo.some(genre => 
            song.genre?.toLowerCase().includes(genre)
          );
        });
      }
      
      resolve(filteredSongs);
    }, 800);
  });
};

// Function to fetch playlist recommendations
export const getPlaylistRecommendations = async (): Promise<PlaylistData[]> => {
  // In a real implementation, this would make an API call to Spotify
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPlaylists);
    }, 600);
  });
};

// Function to get similar songs
export const getSimilarSongs = async (songId: string): Promise<SongData[]> => {
  // In a real implementation, this would make an API call to Spotify
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, show some recommended songs even without a specific song ID
      if (songId === "random") {
        // Return a random selection of songs as initial recommendations
        const randomSongs = [...mockSongs]
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);
        resolve(randomSongs);
      } else {
        // Find the requested song
        const song = mockSongs.find(s => s.id === songId);
        if (song && song.genre) {
          // Filter songs with the same genre
          const similarSongs = mockSongs
            .filter(s => s.id !== songId && s.genre === song.genre)
            .slice(0, 3);
          resolve(similarSongs);
        } else {
          // Fallback to random selection
          const randomSongs = mockSongs
            .filter(s => s.id !== songId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          resolve(randomSongs);
        }
      }
    }, 500);
  });
};

// Authentication functions would go here in a real implementation
export const authenticateWithSpotify = async (): Promise<boolean> => {
  // In real implementation, this would redirect to Spotify OAuth flow
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
