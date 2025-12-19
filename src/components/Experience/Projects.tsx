import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
    id: string
    title?: string
    shortDescription?: string
    stack?: string[]
    repo?: string
    live?: string
}

const projects: Project[] = [
    {
        id: "p1",
        title: "EsteroidesToDo",
        shortDescription:
            "Plataforma para la gestión empresarial centrada en procesos de contratación y arquitectura multiempresa con control de acceso y versionado temporal de datos.",
        stack: [
            ".NET 8",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "JWT",
            "System-Versioned Tables",
        ],
        repo: "https://github.com/UlisesRuggeri/proyecto-asp",
    },
    {
        id: "p2",
        title: "FoodLocator",
        shortDescription:
            "Api Rest que consulta Google Places (Nearby Search) para obtener restaurantes cercanos a unas coordenadas.",
        stack: ["ASP.NET Core", "SQL Server"],
        repo: "https://github.com/UlisesRuggeri/portfolio",
    },
    {
        id: "p3",
        title: "Batalla Naval",
        shortDescription:
            "Juego clásico por turnos hecho con HTML, CSS y JavaScript. Interfaz amigable, responsive y jugable desde el navegador.",
        stack: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/UlisesRuggeri/batallaNaval",
        live: "https://batalla-naval.netlify.app/",
    },
    {
        id: "p4",
        title: "Snake",
        shortDescription:
            "Versión moderna del clásico Snake, hecha con HTML, CSS y JS. Mecánicas simples, adictivas y visual limpio.",
        stack: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/UlisesRuggeri/Snake",
        live: "https://snake-juego.netlify.app/",
    },
    {
        id: "p5",
        title: "Portfolio Personal",
        shortDescription:
            "Aplicación React + ASP.NET Core que combina presentación y backend real. Permite manejar mensajes de contacto mediante API REST y proveedor de correo gratuito.",
        stack: ["React", "TypeScript", "ASP.NET Core", "TailwindCSS", "Docker"],
        repo: "https://github.com/UlisesRuggeri/portfolio",
    },
]

export default function ProjectsSection() {
    return (
        <section>
            <h3 className="text-xl font-semibold mb-3">Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.length === 0 ? (
                    <Card>
                        <CardContent>
                            <p className="text-muted-foreground">
                                No hay proyectos. Agregá proyectos con título, stack, descripción corta y links.
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    projects.map((p) => (
                        <Card key={p.id}>
                            <CardContent>
                                <h4 className="font-medium">{p.title || "—"}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{p.shortDescription || "—"}</p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.stack?.length ? (
                                        p.stack.map((s) => <Badge key={s}>{s}</Badge>)
                                    ) : (
                                        <Badge>Stack vacío</Badge>
                                    )}
                                </div>

                                <div className="mt-3 flex gap-2">
                                    {p.repo && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-medium justify-between"
                                            asChild
                                        >
                                            <a href={p.repo} target="_blank" rel="noreferrer">
                                                Repo
                                            </a>
                                        </Button>
                                    )}
                                    {p.live && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-medium justify-between"
                                            asChild
                                        >
                                            <a href={p.live} target="_blank" rel="noreferrer">
                                                Live
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </section>
    )
}
