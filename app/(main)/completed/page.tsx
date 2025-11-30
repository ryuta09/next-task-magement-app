import TaskCard from '@/components/TaskCard/TaskCard'
import { getCompletedTasks } from '@/lib/api'

export default async function CompletedTaskPage() {
	const tasks = await getCompletedTasks()
	return (
		<div className='h-full overflow-y-auto p-8 pb-24 text-gray-800'>
			<header className='flex items-center justify-between'>
				<h1 className='flex items-center font-bold text-2xl'>完了したタスク</h1>
			</header>
			<div className='mt-8 flex flex-wrap gap-4'>
				{tasks.length === 0 ? (
					<p>完了済みのタスクは1つもありません。</p>
				) : (
					tasks.map((task) => <TaskCard key={task.id} task={task} />)
				)}
			</div>
		</div>
	)
}
