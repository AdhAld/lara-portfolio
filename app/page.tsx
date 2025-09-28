import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Portfolio } from "@/components/portfolio"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Portfolio />
      <Footer />
    </main>
  )
}
