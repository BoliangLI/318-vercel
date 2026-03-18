
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  产品: ["功能", "集成", "定价", "更新日志", "路线图"],
  资源: ["文档", "指南", "API 参考", "状态", "合作伙伴"],
  公司: ["关于我们", "博客", "职业", "品牌", "联系方式"],
  法律: ["隐私政策", "服务条款", "Cookie 政策", "安全"],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="docs" className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8 text-foreground" viewBox="0 0 75 65" fill="currentColor">
                <path d="M37.59.25l36.95 64H.64l36.95-64z" />
              </svg>
              <span className="font-bold text-xl">Vercel</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              为全球开发者提供最佳的 Web 开发体验。
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vercel, Inc. 保留所有权利。
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">Made with ❤️ for the Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
