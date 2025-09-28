import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:cakmakcilara3@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>cakmakcilara3@gmail.com</span>
                </a>
                <a
                  href="tel:+905417613205"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0541 </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lara-çakmakcı"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground leading-relaxed">
                Thank you for visiting my portfolio. I'm always open to discussing new opportunities and collaborations
                in industrial design.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">© 2025 Lara Buse Çakmakcı. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
