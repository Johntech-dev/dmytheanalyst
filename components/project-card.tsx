import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  tools: string[]
  imagePath: string
  link?: string
}

export default function ProjectCard({ title, description, category, tools, imagePath, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-amber-100 hover:border-amber-300 group">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img
          src={imagePath || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="pt-6">
        <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200">{category}</Badge>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <Badge key={index} variant="outline" className="border-purple-200 text-purple-700">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <Button 
          variant="ghost" 
          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 ml-auto"
          asChild={!!link}
        >
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              View Details <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <span>View Details <ExternalLink className="ml-2 h-4 w-4" /></span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
