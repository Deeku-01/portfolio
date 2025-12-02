// fileName: GitHubProfileData.tsx
import React, { useState, useEffect } from 'react';

// Using constants from the original script
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const defaultUsername = 'Deeku-01'; 

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}

const GitHubProfileData: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserData(username: string) {
      if (!username) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data: GitHubUser = await response.json();
        setUserData(data);

      } catch (err) {
        setError('Error: User not found or API failed.');
        setUserData(null);
      } finally {
        setLoading(false);
      }
    }

    // Call with the established default username
    getUserData(defaultUsername);
  }, []);

  if (loading) {
    return <div className="text-center py-4 text-muted-foreground">Loading GitHub profile...</div>;
  }

  if (error || !userData) {
    return <div className="text-red-500 py-4">Error loading profile: {error || "User not found"}</div>;
  }

  // Format joined date
  const dateSegments = userData.created_at.split('T').shift()?.split('-') || [];
  let joinDate = '';
  if (dateSegments.length === 3) {
      const year = dateSegments[0];
      const monthIndex = parseInt(dateSegments[1]) - 1;
      const day = dateSegments[2];
      joinDate = `Joined ${day} ${months[monthIndex]} ${year}`;
  }

  // Helper for conditional text (showing N/A if data is missing)
  const renderInfo = (data: string | number | null | undefined, iconSrc: string, alt: string, isLink: boolean = false) => {
    const displayValue = data ? (isLink ? String(data) : String(data)) : 'N/A';
    const linkUrl = isLink && data ? (data.toString().startsWith('http') ? data.toString() : `http://${data}`) : '#';

    return (
      <div className="profile-info flex items-center gap-3 text-muted-foreground">
        <div className="bottom-icons w-5 h-5 flex items-center justify-center">
            <img width="20" height="20" src={iconSrc} alt={alt} className="w-full h-full object-contain filter invert" style={{ opacity: displayValue === 'N/A' ? 0.5 : 1 }} />
        </div>
        {isLink && data ? (
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ opacity: displayValue === 'N/A' ? 0.5 : 1 }}>
                {displayValue}
            </a>
        ) : (
            <p style={{ opacity: displayValue === 'N/A' ? 0.5 : 1 }}>{displayValue}</p>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-card border border-border rounded-xl shadow-lg mb-8">
      {/* Profile Header */}
      <div className="flex items-start gap-6 mb-4">
        <img id="avatar" src={userData.avatar_url} alt="Profile Avatar" className="w-16 h-16 rounded-full" />
        <div className="profile-info-wrapper flex-1">
          <div className="profile-name mb-1">
            <h2 id="name" className="font-bold text-xl text-foreground">{userData.name || userData.login}</h2>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              id="user" 
              className="text-primary text-sm hover:underline"
            >
              @{userData.login}
            </a>
          </div>
          <p id="date" className="text-muted-foreground text-xs">{joinDate}</p>
        </div>
      </div>

      {/* Bio */}
      <p id="bio" className="text-muted-foreground mb-4 leading-relaxed">{userData.bio || 'No bio available.'}</p>

      {/* Stats Wrapper */}
      <div className="profile-stats-wrapper flex justify-between bg-secondary/50 p-4 rounded-lg mb-4">
        <div className="profile-stat text-center">
          <p className="stat-title text-muted-foreground text-xs">Repos</p>
          <p id="repos" className="stat-value font-bold text-foreground text-lg">{userData.public_repos}</p>
        </div>
        <div className="profile-stat text-center">
          <p className="stat-title text-muted-foreground text-xs">Followers</p>
          <p id="followers" className="stat-value font-bold text-foreground text-lg">{userData.followers}</p>
        </div>
        <div className="profile-stat text-center">
          <p className="stat-title text-muted-foreground text-xs">Following</p>
          <p id="following" className="stat-value font-bold text-foreground text-lg">{userData.following}</p>
        </div>
      </div>

      {/* Profile Bottom Wrapper (Contact Info) */}
      <div className="profile-bottom-wrapper grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
        {renderInfo(userData.location, "https://img.icons8.com/ios-filled/50/FFFFFF/marker.png", "location icon")}
        {renderInfo(userData.blog, "https://img.icons8.com/ios-filled/50/FFFFFF/link--v1.png", "link icon", true)}
        {renderInfo(userData.twitter_username, "https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png", "twitter icon", true)}
        {renderInfo(userData.company, "https://img.icons8.com/pastel-glyph/64/FFFFFF/company--v1.png", "company icon")}
      </div>
    </div>
  );
};

export default GitHubProfileData;