import EditTaskForm from '@/components/EditTaskForm/EditTaskForm'
import { getTaskById } from '@/lib/api'
import { notFound } from 'next/navigation'

interface Props {
	params: Promise<{ id: string }>
}
export default async function TaskEditPage({ params }: Props) {
	const { id } = await params
	const taskId = Number(id)
	
	if (isNaN(taskId)) {
		notFound()
	}
	
	const task = await getTaskById(taskId)
	if (!task) {
		notFound()
	}
	
	return (
		<div className='flex flex-col justify-center py-20'>
			<h2 className='text-center font-bold text-2xl'>編集</h2>
			<EditTaskForm task={task} />
		</div>
	)
}
