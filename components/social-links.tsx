import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLinksProps {
  light?: boolean
}

export default function SocialLinks({ light = false }: SocialLinksProps) {
  return (
    <div className="flex space-x-3">
      <Button
        variant="ghost"
        size="icon"
        asChild
        className={
          light
            ? "text-gray-300 hover:text-white hover:bg-gray-800"
            : "text-purple-600 hover:text-purple-700 hover:bg-purple-50"
        }
      >
        <Link href="https://www.linkedin.com/in/olatunji-sheriff-dmythe" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        className={
          light
            ? "text-gray-300 hover:text-white hover:bg-gray-800"
            : "text-amber-600 hover:text-amber-700 hover:bg-amber-50"
        }
      >
        <Link href="https://x.com/Dmythe_analyst" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">X (Twitter)</span>
        </Link>
      </Button>
    </div>
  )
}
