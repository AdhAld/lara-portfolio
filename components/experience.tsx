export function Experience() {
  const experiences = [
    {
      company: "Sistem Alüminyum",
      role: "Project & Product Development",
      year: "2024",
      duration: "2 months",
      contributions: [
        "Contributed to innovative product development projects",
        "Collaborated with engineering teams on aluminum product solutions",
      ],
    },
    {
      company: "SIO Automotive",
      role: "Prototype Design Center, Analysis & Simulation",
      year: "2023",
      duration: "2 months",
      contributions: [
        "Worked on automotive prototype design and development",
        "Conducted analysis and simulation for design optimization",
      ],
    },
    {
      company: "Bak Ambalaj",
      role: "Graphics Department Internship",
      year: "2023",
      duration: "3 months",
      contributions: [
        "Developed graphic design skills in packaging industry",
        "Created visual designs for various packaging solutions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-accent/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{exp.company}</h3>
                    <p className="text-muted-foreground mb-2">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground">{exp.year}</span>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.contributions.map((contribution, contribIndex) => (
                    <li key={contribIndex} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
