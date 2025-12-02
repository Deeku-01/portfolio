import React, { useState, useEffect } from 'react';

const GITHUB_GRAPHQL_QUERY = `
  query($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color 
              contributionLevel 
            }
          }
        }
      }
    }
  }
`;

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultUsername = 'Deeku-01'; 
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN || 'fallback_token'
  
  const DAY_LABELS = ['Mon', 'Wed', 'Fri'];
  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    async function getGitHubContributions() {
      setLoading(true);
      setError(null);
      let contributionDataFetched = [];
      let totalContribCount = 0;

      if (!githubToken) {
          setError('GitHub API token not configured.');
          setLoading(false);
          return;
      }

      try {
        const graphqlResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: { Authorization: `Bearer ${githubToken}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: GITHUB_GRAPHQL_QUERY, variables: { userName: defaultUsername } }),
        });

        const result = await graphqlResponse.json();
        
        if (result.errors || !result.data.user) {
             throw new Error(`GraphQL Error: ${result.errors?.[0]?.message || 'User not found or fetch failed.'}`);
        }
        
        const calendar = result.data.user.contributionsCollection.contributionCalendar;
        totalContribCount = calendar.totalContributions;

        calendar.weeks.forEach((week) => {
          week.contributionDays.forEach((day) => {
            const date = new Date(day.date);
            day.weekday = date.getDay();
            contributionDataFetched.push(day);
          });
        });

        setContributions(contributionDataFetched); 
        setTotalContributions({ count: totalContribCount, year: new Date().getFullYear() });

      } catch (err) {
        setError(`Failed to fetch contribution data. Check API token or network.`);
      } finally {
        setLoading(false);
      }
    }

    getGitHubContributions();
  }, [githubToken]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 border-3 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <span className="text-gray-600">Loading contributions...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <p className="text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  const getMonthHeaders = () => {
    if (contributions.length === 0) return [];
    
    const headers = [];
    const weeksByMonth = {};
    
    // Group contributions by week and month
    contributions.forEach((day) => {
        const date = new Date(day.date);
        const monthIndex = date.getMonth();
        const weekNumber = Math.floor((date.getDate() - 1) / 7);
        const key = `${monthIndex}-${weekNumber}`;
        
        if (!weeksByMonth[monthIndex]) {
            weeksByMonth[monthIndex] = new Set();
        }
        weeksByMonth[monthIndex].add(key);
    });
    
    // Convert to headers array
    Object.keys(weeksByMonth).sort((a, b) => Number(a) - Number(b)).forEach(monthIndex => {
        headers.push({
            month: MONTH_NAMES[Number(monthIndex)],
            weeks: weeksByMonth[monthIndex].size
        });
    });

    return headers;
  };

  const monthHeaders = getMonthHeaders();

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">GitHub Contributions</h2>
              <p className="text-gray-600">
                <span className="font-semibold text-green-600">{totalContributions?.count || 0}</span> contributions in {totalContributions?.year || new Date().getFullYear()}
              </p>
            </div>
            <a 
              href={`https://github.com/${defaultUsername}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>@{defaultUsername}</span>
            </a>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-8">
          <div className="w-full">
              
            {/* Month Labels */}
            <div className="flex mb-2 pl-8 w-full">
              {monthHeaders.map((header, index) => (
                <div 
                  key={index}
                  className="text-xs font-medium text-gray-500"
                  style={{ flex: header.weeks }}
                >
                  {header.month}
                </div>
              ))}
            </div>

            {/* Grid Container */}
            <div className="flex w-full">
              
              {/* Day Labels */}
              <div className="flex flex-col justify-around text-xs font-medium text-gray-500 pr-2 h-[98px]">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Contribution Grid */}
              <div 
                className="grid gap-[3px] bg-gray-50 p-2 rounded-lg border border-gray-200 flex-1"
                style={{
                  gridTemplateRows: 'repeat(7, 12px)',
                  gridAutoFlow: 'column',
                  gridAutoColumns: '1fr'
                }}
              >
                {contributions.map((day, index) => {
                  const level = day.contributionLevel;
                  const colors = {
                    'NONE': 'bg-gray-100',
                    'FIRST_QUARTILE': 'bg-green-200',
                    'SECOND_QUARTILE': 'bg-green-400',
                    'THIRD_QUARTILE': 'bg-green-600',
                    'FOURTH_QUARTILE': 'bg-green-800'
                  };
                  
                  return (
                    <div
                      key={index}
                      className={`${colors[level] || 'bg-gray-100'} rounded-sm hover:ring-2 hover:ring-gray-400 transition-all cursor-pointer`}
                      style={{ 
                        gridRow: day.weekday + 1,
                      }}
                      title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end mt-4 space-x-2">
              <span className="text-xs font-medium text-gray-500">Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-100 rounded-sm border border-gray-200"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
              </div>
              <span className="text-xs font-medium text-gray-500">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;