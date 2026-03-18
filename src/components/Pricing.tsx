
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "个人版",
    price: "免费",
    description: "适合个人项目和爱好",
    features: [
      "无限个人项目",
      "100GB 带宽/月",
      "自动 SSL 证书",
      "全球边缘网络",
      "社区支持",
    ],
    cta: "免费开始",
    popular: false,
  },
  {
    name: "专业版",
    price: "$20",
    period: "/月",
    description: "适合专业开发者和小型团队",
    features: [
      "无限团队成员",
      "1TB 带宽/月",
      "优先支持",
      "分析仪表板",
      "自定义域名",
      "无服务器函数 100GB-小时",
    ],
    cta: "开始试用",
    popular: true,
  },
  {
    name: "企业版",
    price: "定制",
    description: "适合大型组织和定制需求",
    features: [
      "无限带宽",
      "专属支持经理",
      "SLA 保证",
      "SSO/SAML",
      "审计日志",
      "定制合同",
    ],
    cta: "联系销售",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            简单透明的定价
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从免费开始，按需扩展。没有隐藏费用。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-background/50 border-border ${
                plan.popular ? "border-accent glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-semibold">
                    最受欢迎
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "gradient-bg text-primary-foreground hover:opacity-90" 
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
