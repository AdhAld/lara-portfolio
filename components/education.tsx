export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-medium">Bachelor's in Industrial Design</h3>
                <span className="text-muted-foreground">2021–2025</span>
              </div>
              <p className="text-muted-foreground mb-2">Eskişehir Technical University</p>
              <p className="text-sm text-primary font-medium">Graduated 3rd in class</p>
            </div>
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-medium">English Preparatory Year</h3>
                <span className="text-muted-foreground">2020–2021</span>
              </div>
              <p className="text-muted-foreground">Eskişehir Technical University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
