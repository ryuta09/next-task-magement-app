import Link from 'next/link'
import { FaPen } from 'react-icons/fa'

interface TaskEditButtonProps {
	id: string
}
export default function TaskEditButton({ id }: TaskEditButtonProps) {
	return (
		<Link href={`/edit/${id}`}>
			<FaPen className='cursor-pointer text-lg hover:text-gray-700' />
		</Link>
	)
}
