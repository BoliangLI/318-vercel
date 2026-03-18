
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-float">
          <Zap className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted-foreground">全新功能：Vercel AI SDK 3.0 现已发布</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">开发</span>
          <br />
          <span className="gradient-text">预览。</span>
          <br />
          <span className="text-foreground">发布。</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Vercel 是面向前端团队的平台，用于构建、预览和发布卓越的 Web 体验。
          从个人项目到企业级应用，我们为您提供所需的一切。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 glow px-8">
            开始部署
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
            查看演示
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border">
          {[
            { value: "10M+", label: "开发者" },
            { value: "100B+", label: "月请求数" },
            { value: "99.99%", label: "正常运行时间" },
            { value: "350ms", label: "全球边缘网络" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Icons */}
        <div className="flex items-center justify-center gap-8 mt-16 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span className="text-sm">全球边缘网络</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm">企业级安全</span>
          </div>
        </div>
      </div>
    </section>
  );
}
