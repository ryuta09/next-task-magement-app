import { FaRegCheckSquare, FaRegClock, FaTasks } from 'react-icons/fa'
import NavItem from './NavItem/NavItem'

interface NavItemType {
	id: number
	label: string
	link: string
	icon: React.ReactNode
}

export default function NavList() {
	const navList: NavItemType[] = [
		{
			id: 1,
			label: '進行中のタスク',
			link: '/',
			icon: <FaTasks className='size-5' />,
		},
		{
			id: 2,
			label: '完了したタスク',
			link: '/completed',
			icon: <FaRegCheckSquare className='size-5' />,
		},
		{
			id: 3,
			label: '期限切れタスク',
			link: '/expired',
			icon: <FaRegClock className='size-5' />,
		},
	]
	return (
		<div className='mt-24'>
			{navList.map((item) => (
				<NavItem
					key={item.id}
					label={item.label}
					link={item.link}
					icon={item.icon}
				/>
			))}
		</div>
	)
}
