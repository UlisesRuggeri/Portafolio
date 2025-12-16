import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Certification {
    id: string
    title?: string
    issuer?: string
    date?: string
    link?: string
}

const certifications: Certification[] = [
    {
        id: "c1",
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp x Microsoft",
        date: "2025",
        link: "https://www.freecodecamp.org/certification/ulises_ruggeri/foundational-c-sharp-with-microsoft",
    },
    {
        id: "c2",
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2024",
        link: "https://www.freecodecamp.org/certification/ulises_ruggeri/javascript-algorithms-and-data-structures-v8",
    },
    {
        id: "c3",
        title: "Front End Development Libraries",
        issuer: "freeCodeCamp",
        date: "2024",
        link: "https://www.freecodecamp.org/certification/ulises_ruggeri/front-end-development-libraries",
    },
]

export default function Certifications() {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Certificaciones</CardTitle>
                    <CardDescription>Certificados relevantes</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        {certifications.length === 0 ? (
                            <p className="text-muted-foreground">No hay certificaciones listadas.</p>
                        ) : (
                            certifications.map((c) => (
                                <div key={c.id} className="flex justify-between items-start">
                                    <div>
                                        <div className="font-medium">{c.title}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {c.issuer} — {c.date}
                                        </div>
                                    </div>
                                    {c.link && (
                                        <Button size="sm" asChild>
                                            <a href={c.link} target="_blank" rel="noreferrer">
                                                Ver
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
