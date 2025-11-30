import SideMenu from '@/components/SideMenu/SideMenu'

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex h-screen'>
			<SideMenu />
			<div className='flex-1 overflow-auto bg-slate-50'>{children}</div>
		</div>
	)
}
