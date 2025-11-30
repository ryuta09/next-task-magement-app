import type { Task } from '@/generated/prisma/client'
import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton'
import TaskEditButton from './TaskEditButton/TaskEditButton'

interface TaskCardProps {
	task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
	if (!task) return null

	return (
		<div className='flex h-52 w-64 flex-col justify-between rounded-md bg-white p-4 shadow-md'>
			<header className='font-semibold text-lg'>
				<h1 className='font-semibold text-lg'>{task.title}</h1>
				<div className='mt-1 line-clamp-3 text-sm'>{task.description}</div>
			</header>
			<div>
				<div className='text-sm'>
					{task.dueDate.toISOString().split('T')[0]}
				</div>
				<div className='flex justify-between'>
					<div
						className={`mt-1 w-24 rounded-full bg-green-500 px-2 py-1 text-center text-sm text-white shadow-sm`}
					>
						{task.status ? '完了' : '処理中'}
					</div>
					<div className='mt-2 flex gap-4'>
						<TaskEditButton id={task.id} />
						<TaskDeleteButton id={task.id} />
					</div>
				</div>
			</div>
		</div>
	)
}
