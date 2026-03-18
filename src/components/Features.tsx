
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket, 
  Zap, 
  Shield, 
  Globe, 
  Code2, 
  BarChart3,
  GitBranch,
  Layers
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "瞬间部署",
    description: "每次 Git 推送自动部署，无需配置 CI/CD 管道。专注于代码，让我们处理其余部分。",
  },
  {
    icon: Globe,
    title: "全球边缘网络",
    description: "内容自动分发到全球 100+ 个边缘节点，确保用户获得最快的加载速度。",
  },
  {
    icon: Shield,
    title: "企业级安全",
    description: "内置 DDoS 防护、SSL 证书和自动安全更新，保护您的应用免受威胁。",
  },
  {
    icon: Zap,
    title: "Serverless 函数",
    description: "无需管理服务器，按需扩展。只为实际使用的计算资源付费。",
  },
  {
    icon: GitBranch,
    title: "预览部署",
    description: "每个 Pull Request 自动生成预览 URL，方便团队协作和审查。",
  },
  {
    icon: BarChart3,
    title: "实时分析",
    description: "深入了解网站性能、访问者行为和核心 Web 指标。",
  },
  {
    icon: Code2,
    title: "框架支持",
    description: "完美支持 Next.js、React、Vue、Svelte、Angular 等主流框架。",
  },
  {
    icon: Layers,
    title: "数据库集成",
    description: "无缝连接 Vercel Postgres、KV、Blob 等托管数据库服务。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            为现代 Web 构建而生
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            提供开发者需要的所有工具，打造卓越的 Web 体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-background/50 border-border hover:border-accent/50 transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:gradient-bg transition-all">
                  <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
