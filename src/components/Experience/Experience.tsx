import { Card, CardContent } from "@/components/ui/card"

interface Experience {
    id: string
    company?: string
    role?: string
    startDate?: string
    endDate?: string
    bullets?: string[]
}

const experiences: Experience[] = [
    {
        id: "1",
        company: "Kuifix Soluciones Tecnológicas",
        role: "Desarrollador de .NET",
        startDate: "Ago 2025",
        endDate: "Oct 2025",
        bullets: [
            "Colaboración en un proyecto para una empresa de imprenta bajo metodología Scrum",
            "Implementación de una pasarela de pagos con Stripe",
            "Desarrollo de endpoints REST con ASP.NET Core y Entity Framework Core",
            "Participación en planificación, revisión y documentación técnica del proyecto",
        ],
    },
]

export default function ExperienceSection() {
    return (
        <section>
            <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
            <div className="flex flex-col gap-3">
                {experiences.length === 0 ? (
                    <Card>
                        <CardContent>
                            <p className="text-muted-foreground">
                                No hay entradas. Agregá tu experiencia (empresa, rol, fechas, responsabilidades).
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    experiences.map((exp) => (
                        <Card key={exp.id}>
                            <CardContent>
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="font-medium">{exp.role || "—"}</h4>
                                        <p className="text-sm text-muted-foreground">{exp.company || "—"}</p>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {exp.startDate || "—"} — {exp.endDate || "Presente"}
                                    </div>
                                </div>

                                <ul className="mt-2 list-disc ml-5 text-sm text-muted-foreground">
                                    {exp.bullets?.length ? (
                                        exp.bullets.map((b, i) => <li key={i}>{b}</li>)
                                    ) : (
                                        <li>Descripción vacía</li>
                                    )}
                                </ul>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </section>
    )
}
