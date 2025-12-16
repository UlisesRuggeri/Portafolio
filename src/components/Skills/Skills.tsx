import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
    id: string
    name?: string
    level?: string
}

const skills: Skill[] = [
    { id: "s1", name: "C#" },
    { id: "s2", name: "ASP.NET Core" },
    { id: "s3", name: "Entity Framework Core" },
    { id: "s4", name: "SQL Server" },
    { id: "s5", name: "JavaScript" },
    { id: "s6", name: "TypeScript" },
    { id: "s7", name: "React", level: "Basic" },
    { id: "s8", name: "Docker" },
    { id: "s9", name: "Git" },
    { id: "s10", name: "Scrum" },
]

export default function Skills() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>habilidades técnicas y soft skills</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.length === 0 ? (
                        <p className="text-muted-foreground">
                            Sin skills. Agregá tus tecnologías: C#, .NET, SQL Server, EF Core, Docker, etc.
                        </p>
                    ) : (
                        skills.map((s) => (
                            <Badge key={s.id}>
                                {s.name} {s.level ? `• ${s.level}` : ""}
                            </Badge>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
