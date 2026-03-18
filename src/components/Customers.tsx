
import { Card, CardContent } from "@/components/ui/card";

const customers = [
  { name: "Netflix", logo: "N" },
  { name: "Uber", logo: "U" },
  { name: "Shopify", logo: "S" },
  { name: "Notion", logo: "N" },
  { name: "Figma", logo: "F" },
  { name: "Slack", logo: "S" },
];

const testimonials = [
  {
    quote: "Vercel 让我们能够以前所未有的速度交付产品。部署时间从几小时缩短到几秒钟。",
    author: "Sarah Chen",
    role: "工程总监，TechCorp",
    avatar: "SC",
  },
  {
    quote: "边缘网络的全球覆盖让我们的用户体验提升了 40%。这是游戏规则的改变者。",
    author: "Mike Rodriguez",
    role: "CTO，StartupXYZ",
    avatar: "MR",
  },
  {
    quote: "预览部署功能彻底改变了我们的工作流程。每个 PR 都有可访问的预览，太棒了。",
    author: "Emily Watson",
    role: "高级开发者，DesignCo",
    avatar: "EW",
  },
];

export function Customers() {
  return (
    <section id="customers" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            深受全球团队信赖
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从初创公司到财富 500 强，都在使用 Vercel 构建卓越的 Web 体验
          </p>
        </div>

        {/* Customer Logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-20">
          {customers.map((customer) => (
            <div 
              key={customer.name}
              className="flex items-center justify-center p-6 rounded-lg bg-muted/30 border border-border hover:border-accent/50 transition-colors"
            >
              <span className="text-2xl font-bold text-muted-foreground">{customer.logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-background/50 border-border"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
