import EditTaskForm from '@/components/EditTaskForm/EditTaskForm'

interface Props {
	params: Promise<{ id: number }>
}
export default async function TaskEditPage({ params }: Props) {
	// const { id } = await params
	return (
		<div className='flex flex-col justify-center py-20'>
			<h2 className='text-center font-bold text-2xl'>Edit Task</h2>
			<EditTaskForm />
		</div>
	)
}
