'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
	label: string
	link: string
	icon: React.ReactNode
}
export default function NavItem({ label, link, icon }: NavItemProps) {
	const pathname = usePathname()
	return (
		<Link
			href={link}
			className={`flex w-full items-center gap-2 p-4 font-semibold hover:bg-gray-700 ${pathname === link ? 'border-r-4 border-r-green-500 bg-gray-600' : ''}`}
		>
			<div>{icon}</div>
			<div>{label}</div>
		</Link>
	)
}
