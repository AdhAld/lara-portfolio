export function Skills() {
  const skillCategories = [
    {
      title: "3D Modeling & Rendering",
      skills: ["Rhino", "Solidworks", "AutoCAD", "Blender", "Keyshot"],
    },
    {
      title: "Graphic Design",
      skills: ["Photoshop", "Illustrator"],
    },
    {
      title: "Languages",
      skills: ["Turkish (Native)", "English (Intermediate, working proficiency)"],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-accent/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium mb-6 text-balance">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
