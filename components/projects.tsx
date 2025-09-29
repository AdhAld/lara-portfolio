export function Projects() {
  const projects = [
    {
      title: "Micro-Mobility Vehicle Design",
      subtitle: "Graduation Project",
      year: "2025",
      description: "Designed a transitional vehicle to ease users into autonomous driving technologies",
    },
    {
      title: "Product Ecosystem Design",
      subtitle: "IF Design Student Award 2025",
      year: "2025",
      description: "Focus on UN Sustainable Development Goals",
    },
    {
      title: "Self-Propelled Platform Basket Design for Operators",
      subtitle: "Ergonomic research project with Hisarlar Makina",
      year: "2024",
      description: "Ergonomic research project focused on operator safety and efficiency",
    },
    {
      title: "Long-Distance Touring Bike Design",
      subtitle: "University project",
      year: "2024",
      description: "Comprehensive design project focusing on comfort and functionality for long-distance cycling",
    },
    {
      title: "Domestic Food Waste Product Design",
      subtitle: "University project",
      year: "2023",
      description: "Sustainable design solution addressing domestic food waste management",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2 text-balance">{project.title}</h3>
                    <p className="text-primary font-medium mb-2">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0 md:ml-4">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
