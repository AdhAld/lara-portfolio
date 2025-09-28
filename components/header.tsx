import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-balance mb-4 tracking-tight">
            Lara Buse Çakmakcı
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            Industrial Designer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Creating functional and aesthetically pleasing designs with passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* CV Download Button */}
            <Button size="lg" className="gap-2" asChild>
              <a href="/CV.pdf" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>

            {/* Portfolio Link Button */}
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a
                href="https://www.behance.net/gallery/232745059/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View Portfolio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
