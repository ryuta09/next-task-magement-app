import { FaTrashAlt } from 'react-icons/fa'
import { deleteTask } from '@/lib/action'

interface TaskDeleteButtonProps {
	id: number
}
export default function TaskDeleteButton({ id }: TaskDeleteButtonProps) {
	return (
		<form action={deleteTask}>
			<input type='hidden' name='id' value={id} />
			<button
				type='submit'
				className='cursor-pointer text-lg hover:text-gray-700'
			>
				<FaTrashAlt />
			</button>
		</form>
	)
}
