import TaskCard from '@/components/TaskCard/TaskCard'
import { getOverdueTasks } from '@/lib/api'

export default async function ExpiredTaskPage() {
	const tasks = await getOverdueTasks();
	if (!tasks) return null
	return (
		<div className='h-full overflow-y-auto p-8 pb-24 text-gray-800'>
			<header className='flex items-center justify-between'>
				<h1 className='flex items-center font-bold text-2xl'>Expired Tasks</h1>
			</header>
			<div className='mt-8 flex flex-wrap gap-4'>
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	)
}
