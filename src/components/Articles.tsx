import { Calendar, Clock } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable React Applications in 2025",
    excerpt: "A comprehensive guide to structuring your React applications for maintainability and scalability, including best practices for state management and code organization.",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
  },
  {
    id: 2,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how AI tools are transforming the way we build web applications, from code generation to automated testing and deployment.",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    tags: ["AI", "Web Development", "Future Tech"],
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "Deep dive into advanced TypeScript patterns including conditional types, mapped types, and template literal types for building type-safe applications.",
    date: "Sep 12, 2025",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
  },
];

const Articles = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0">Latest Articles</h2>
        <a href="#" className="text-primary text-sm hover:underline">
          See All
        </a>
      </div>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/20 cursor-pointer group"
          >
            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
