"use client"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ExperienceSection from '@/components/Experience/Experience'
import ProjectsSection from '@/components/Experience/Projects'
import Certifications from '@/components/Cetifications/Certifications'
import Skills from '@/components/Skills/Skills'
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function App() {
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {

      const res = await fetch("https://emailapi-h1fg.onrender.com/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Tema: asunto, Cuerpo: mensaje }),
      });
      const text = await res.text();
      if (!res.ok) throw new Error(text || `Status ${res.status}`);
      alert("Correo enviado");
      setAsunto("");
      setMensaje("");
    } catch (err) {
      console.error(err);
      alert("Error al enviar: " + (err as Error).message);
    } finally {
      setSending(false);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto flex items-center justify-between py-6 px-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Ulises</h1>
              <p className="text-sm text-muted-foreground">Backend Developer · ASP.NET • SQL Server • APIs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="public\Cv Ulises Ruggeri - Backend Developer.pdf"
              download
            >
              <Button variant="ghost">Descargar CV</Button>
            </a>

            <ModeToggle />
          </div>
        </header>

        <section className="container mx-auto px-4">
          <Card className="w-full mb-6">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-extrabold">Portfolio — Backend Developer</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">Desarrollador backend especializado en ASP.NET Core y C#, con experiencia en diseño de APIs REST,
                  Entity Framework Core y SQL Server. Aplico Clean Architecture y principios SOLID para lograr código
                  escalable y mantenible."</p>
              </div>

              <div className="w-full md:w-1/3">
                <Card className="p-4">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Escribeme!</h3>
                    <p className="text-sm text-muted-foreground">
                      Podés ver mis redes o escribirme directamente.
                    </p>
                  </CardHeader>

                  <CardContent>
                    <Tabs defaultValue="information" className="contacto">
                      <TabsList>
                        <TabsTrigger className="w-full justify-between hover:cursor-pointer" value="information">Información</TabsTrigger>
                        <TabsTrigger className="w-full justify-between hover:cursor-pointer" value="contacto">Contactame</TabsTrigger>
                      </TabsList>

                      <TabsContent value="information">
                        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                          <li className="pb-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                              <div className="shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/github_3291695.png"
                                  alt="GitHub"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  GitHub
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  <a
                                    href="https://github.com/UlisesRuggeri"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    github.com/UlisesRuggeri
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>

                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/LinkedIn_14097260.png"
                                  alt="LinkedIn"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  LinkedIn
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  <a
                                    href="https://www.linkedin.com/in/ulises-ruggeri-949539283/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    linkedin.com/in/ulises-ruggeri
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>

                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/phone-message_6377794.png"
                                  alt="Teléfono"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  Teléfono
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  +54 9 343 4504128
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabsContent>

                      <TabsContent value="contacto" className="mt-4">
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                          <Input
                            placeholder="Asunto"
                            name="asunto"
                            required
                            value={asunto}
                            onChange={(e: any) => setAsunto(e.target.value)}
                          />
                          <Textarea
                            placeholder="Mensaje"
                            name="mensaje"
                            required
                            value={mensaje}
                            onChange={(e: any) => setMensaje(e.target.value)}
                          />
                          <Button type="submit" className="cursor-pointer" disabled={sending}>
                            {sending ? "Enviando..." : "Enviar"}
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>


        <main className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">

            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>

          </div>

          <aside className="flex flex-col gap-6">

            <Skills></Skills>
            <Certifications></Certifications>

          </aside>
        </main>

        <footer className="container mx-auto py-8 px-4 text-center text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} — Ulises. Backend lover. Hecho con Shadcn.</div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
