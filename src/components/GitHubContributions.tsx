import { useMemo } from "react";

const GitHubContributions = () => {
  const contributions = useMemo(() => {
    const weeks = 52;
    const days = 7;
    const data: number[][] = [];
    
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        // Generate random contribution levels (0-4)
        const rand = Math.random();
        if (rand < 0.2) week.push(0);
        else if (rand < 0.4) week.push(1);
        else if (rand < 0.6) week.push(2);
        else if (rand < 0.85) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-secondary";
      case 1: return "bg-github-green1";
      case 2: return "bg-github-green2";
      case 3: return "bg-github-green3";
      case 4: return "bg-github-green4";
      default: return "bg-secondary";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="section-title">GitHub Contribution</h2>
      
      <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-foreground">2025:</span>
          <span className="text-muted-foreground">3,847 Contributions</span>
        </div>
        
        <div className="flex gap-1 mb-2 text-xs text-muted-foreground pl-4">
          {months.map((month, i) => (
            <span key={month} className="flex-1 text-center" style={{ minWidth: "28px" }}>
              {i % 2 === 0 ? month : ""}
            </span>
          ))}
        </div>
        
        <div className="flex gap-[3px]">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getColor(level)} transition-colors hover:ring-1 hover:ring-primary`}
                  title={`${level * 3} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;
