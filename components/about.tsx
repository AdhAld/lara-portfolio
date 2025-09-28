import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                I am an Industrial Designer with exceptional attention to detail and a passion for user-centered design.
                I specialize in creating functional and aesthetic products that enhance user experience. I graduated 3rd
                in my department, demonstrating my commitment to excellence in design.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>Eskişehir/Tepebaşı</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-3">
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
                  <span>0541 761 32 05</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
