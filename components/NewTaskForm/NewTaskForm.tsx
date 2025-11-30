export default function NewTaskForm() {
	return (
		<div className='mx-auto mt-10 w-full max-w-sm'>
			<form action=''>
				<div>
					<label htmlFor='title' className='block font-medium text-sm'>
						タイトル
					</label>
					<input
						type='text'
						id='title'
						name='title'
						required
						className='mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-gray-300 ring-inset'
					/>
				</div>
				<div className='mt-6'>
					<label htmlFor='description' className='block font-medium text-sm'>
						説明
					</label>
					<input
						type='text'
						id='description'
						name='description'
						required
						className='mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-gray-300 ring-inset'
					/>
				</div>
				<div className='mt-6'>
					<label htmlFor='dueDate' className='block font-medium text-sm'>
						期限
					</label>
					<input
						type='date'
						id='dueDate'
						name='dueDate'
						min='2020-01-01'
						max='2999-12-31'
						required
						className='mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-gray-300 ring-inset'
					/>
				</div>
				<button
					type='submit'
					className='mt-8 w-full rounded-md bg-gray-800 py-2 font-semibold text-sm text-white shadow-sm hover:bg-gray-700'
				>
					Create
				</button>
			</form>
		</div>
	)
}
