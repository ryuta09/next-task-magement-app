'use server'

import { redirect } from 'next/navigation'
import { prisma } from './prisma'

export async function createTask(formData: FormData) {
	const title = formData.get('title') as string
	const description = formData.get('description') as string
	const dueDate = formData.get('dueDate') as string

	try {
		await prisma.task.create({
			data: {
				title,
				description,
				dueDate: new Date(dueDate),
			},
		})
		redirect('/')
	} catch (error) {
		console.error('Error creating task:', error)
		throw error
	}
}
