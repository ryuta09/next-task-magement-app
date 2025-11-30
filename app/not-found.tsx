import Link from 'next/link'

export default function notFound() {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-slate-50 text-gray-900'>
			<h1 className='font-bold text-8xl'>404</h1>
			<p className='font-medium text-4xl'>Page Not Found</p>
			<Link href='/' className='mt-4 text-blue-600 text-xl hover:underline'>
				Go to Home
			</Link>
		</div>
	)
}
