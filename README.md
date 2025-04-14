
# SonicMuse

A modern, minimalist music discovery platform that connects with Spotify to help users find new music based on their preferences.

![image](https://github.com/user-attachments/assets/fcc8dd9e-ae9e-47e5-8457-9af2d5a556dc)
![image](https://github.com/user-attachments/assets/da4c6a2e-5fd4-4fea-a770-200f8f1354d7)


## 🎵 Features

- **Genre Selection**: Discover music from specific genres or mix multiple genres
- **Year/Era Filtering**: Find music from specific years or eras
- **Popularity Control**: Toggle between mainstream hits and underground gems
- **Spotify Integration**: Connect your Spotify account for personalized recommendations
- **Playlist Creation**: Save your discoveries directly to custom Spotify playlists
- **Similar Song Recommendations**: Find music similar to songs you already love
- **Modern Interface**: Clean, black and white design inspired by Vercel's UI

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **UI Framework**: Tailwind CSS
- **State Management**: React Context API
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **APIs**: Spotify Web API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v18+)
- npm or yarn
- Spotify Developer Account (for API access)
- Supabase Account (for auth and database)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sonicmuse.git
   cd sonicmuse
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with the following:
   ```
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🔐 Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Create a new application
3. Set the redirect URI to `http://localhost:5173/callback` (for development)
4. Copy your Client ID and Client Secret to your `.env` file

## 🗄️ Supabase Setup

1. Create a new project on [Supabase](https://supabase.com/)
2. Set up authentication with the following tables:
   - `users` - For user information and preferences
   - `saved_songs` - For tracking saved recommendations
   - `playlists` - For custom playlists created on the platform
3. Copy your project URL and anon key to your `.env` file

## 📱 Application Structure

```
src/
├── components/       # Reusable UI components
├── context/          # React Context for state management
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API clients
├── pages/            # Application pages
├── styles/           # Global styles and Tailwind config
└── App.jsx           # Main application component
```

## 🎨 Design Principles

- **Minimalist**: Clean interface with essential elements only
- **Black & White**: Monochromatic color scheme with subtle accents
- **Responsive**: Fully responsive design for all devices
- **Intuitive**: Simple, logical user flows for easy navigation
- **Accessible**: WCAG compliant design for all users

## 🔍 Core Functionality

### Music Discovery Flow

1. User selects preferences (genre, year, popularity)
2. Application queries Spotify API with parameters
3. Results are displayed in a clean, card-based layout
4. Users can preview songs, save to playlists, or explore similar tracks

### Spotify Integration

- OAuth authentication for secure account linking
- Ability to create and modify playlists
- Song saving and listening history tracking
- Personalized recommendations based on user's Spotify data

## 📈 Future Enhancements

- Machine learning for improved recommendation accuracy
- Social features for sharing discoveries
- Advanced filtering options (BPM, key, mood, etc.)
- Offline mode with cached recommendations
- Collaborative playlist creation

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

- [Your Name](https://github.com/yourusername)

---

Built with ♥️ for music lovers everywhere
# SonicMuse

A modern, minimalist music discovery platform that connects with Spotify to help users find new music based on their preferences.

![SonicMuse](https://via.placeholder.com/800x400?text=SonicMuse)

## 🎵 Features

- **Genre Selection**: Discover music from specific genres or mix multiple genres
- **Year/Era Filtering**: Find music from specific years or eras
- **Popularity Control**: Toggle between mainstream hits and underground gems
- **Spotify Integration**: Connect your Spotify account for personalized recommendations
- **Playlist Creation**: Save your discoveries directly to custom Spotify playlists
- **Similar Song Recommendations**: Find music similar to songs you already love
- **Modern Interface**: Clean, black and white design inspired by Vercel's UI

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **UI Framework**: Tailwind CSS
- **State Management**: React Context API
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **APIs**: Spotify Web API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v18+)
- npm or yarn
- Spotify Developer Account (for API access)
- Supabase Account (for auth and database)

## 🛠️ Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with the following:
   ```
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🔐 Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Create a new application
3. Set the redirect URI to `http://localhost:5173/callback` (for development)
4. Copy your Client ID and Client Secret to your `.env` file

## 🗄️ Supabase Setup

1. Create a new project on [Supabase](https://supabase.com/)
2. Set up authentication with the following tables:
   - `users` - For user information and preferences
   - `saved_songs` - For tracking saved recommendations
   - `playlists` - For custom playlists created on the platform
3. Copy your project URL and anon key to your `.env` file

## 📱 Application Structure

```
src/
├── components/       # Reusable UI components
├── context/          # React Context for state management
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API clients
├── pages/            # Application pages
├── styles/           # Global styles and Tailwind config
└── App.jsx           # Main application component
```

## 🎨 Design Principles

- **Minimalist**: Clean interface with essential elements only
- **Black & White**: Monochromatic color scheme with subtle accents
- **Responsive**: Fully responsive design for all devices
- **Intuitive**: Simple, logical user flows for easy navigation
- **Accessible**: WCAG compliant design for all users

## 🔍 Core Functionality

### Music Discovery Flow

1. User selects preferences (genre, year, popularity)
2. Application queries Spotify API with parameters
3. Results are displayed in a clean, card-based layout
4. Users can preview songs, save to playlists, or explore similar tracks

### Spotify Integration

- OAuth authentication for secure account linking
- Ability to create and modify playlists
- Song saving and listening history tracking
- Personalized recommendations based on user's Spotify data

## 📈 Future Enhancements

- Machine learning for improved recommendation accuracy
- Social features for sharing discoveries
- Advanced filtering options (BPM, key, mood, etc.)
- Offline mode with cached recommendations
- Collaborative playlist creation

## 📄 License

MIT License - See LICENSE file for details

