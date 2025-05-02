import type { ReactNode } from "react"

interface SkillBadgeProps {
  icon: ReactNode
  name: string
}

export default function SkillBadge({ icon, name }: SkillBadgeProps) {
  return (
    <div className="flex items-center bg-gradient-to-r from-amber-50 to-purple-50 border border-amber-200 rounded-full px-3 py-1.5 text-sm font-medium text-gray-800">
      <span className="mr-1.5 text-amber-600">{icon}</span>
      {name}
    </div>
  )
}
