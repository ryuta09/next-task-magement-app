import { FaTrashAlt } from 'react-icons/fa'

interface TaskDeleteButtonProps {
	id: string
}
export default function TaskDeleteButton({ id }: TaskDeleteButtonProps) {
	return (
		<form action=''>
			<button
				type='submit'
				className='cursor-pointer text-lg hover:text-gray-700'
			>
				<FaTrashAlt />
			</button>
		</form>
	)
}
