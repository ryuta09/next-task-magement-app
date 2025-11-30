import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton'
import TaskEditButton from './TaskEditButton/TaskEditButton'

export default function TaskCard() {
	return (
		<div className='flex h-52 w-64 flex-col justify-between rounded-md bg-white p-4 shadow-md'>
			<header className='font-semibold text-lg'>
				<h1 className='font-semibold text-lg'>タイトル</h1>
				<div className='mt-1 line-clamp-3 text-sm'>タスクの説明</div>
			</header>
			<div>
				<div className='text-sm'>2025-11-30</div>
				<div className='flex items-center justify-between'>
					<div
						className={`mt-1 w-24 rounded-full bg-green-500 px-2 py-1 text-center text-sm text-white shadow-sm`}
					>
						{'Completed'}
					</div>
					<div className='flex items-center gap-4'>
						<div>
							<TaskEditButton id='1' />
						</div>
						<div>
							<TaskDeleteButton id='1' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
