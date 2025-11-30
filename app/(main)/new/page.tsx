import NewTaskForm from '@/components/NewTaskForm/NewTaskForm'

export default function NewTask() {
	return (
		<div className='flex flex-col justify-center py-20'>
			<h2 className='text-center font-bold text-2xl'>Create New Task</h2>
			<NewTaskForm />
		</div>
	)
}
