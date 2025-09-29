import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-accent/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12">Portfolio</h2>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">View My Complete Portfolio</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore my comprehensive collection of industrial design projects, including detailed case studies,
                design process documentation, and final outcomes.
              </p>
            </div>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://www.behance.net/gallery/232745059/Portfolio" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Full Portfolio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
