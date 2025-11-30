import NavList from './NavList/NavList'

export default function SideMenu() {
	return (
		<div className='w-56 bg-gray-800 pt-8 text-white'>
			<div>
				<h1 className='px-4 font-bold text-2xl'>Next Tasks</h1>
				<NavList />
			</div>
		</div>
	)
}
