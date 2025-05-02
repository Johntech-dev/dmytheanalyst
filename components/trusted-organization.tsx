interface TrustedOrganizationProps {
  name: string
  logoPath: string
}

export default function TrustedOrganization({ name, logoPath }: TrustedOrganizationProps) {
  return (
    <div className="flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md bg-white flex items-center justify-center">
        <img 
          src={logoPath}
          alt={name} 
          className="w-full h-full object-contain" 
        />
      </div>
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  )
}
