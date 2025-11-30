'use client'

import Link from 'next/link'

export default function ErrorPage() {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-slate-50 text-gray-900'>
			<h1 className='font-bold text-8xl'>Error</h1>
			<p className='font-medium text-4xl'>Unexpected Error Occurred</p>
			<Link href='/' className='mt-4 text-blue-600 text-xl hover:underline'>
				Go to Home
			</Link>
		</div>
	)
}
