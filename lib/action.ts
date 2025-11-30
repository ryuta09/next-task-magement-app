'use server'

import { revalidatePath } from 'next/cache'
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
	} catch (error) {
		console.error('Error creating task:', error)
		throw error
	}

	revalidatePath('/')
	redirect('/')
}

export async function deleteTask(formData: FormData) {
	const id = Number(formData.get('id'))

	try {
		await prisma.task.update({
			where: { id },
			data: {
				status: true,
			},
		})
	} catch (error) {
		console.error('Error updating task status:', error)
		throw error
	}

	revalidatePath('/')
	redirect('/')
}

export async function completedTask(formData: FormData) {
	const id = Number(formData.get('id'))
	const title = formData.get('title') as string
	const description = formData.get('description') as string
	const dueDate = formData.get('dueDate') as string
	const isCompleted = formData.get('isCompleted') === 'on'
	console.log(formData.get('isCompleted'))
	try {
		await prisma.task.update({
			where: { id },
			data: {
				title,
				description,
				dueDate: new Date(dueDate),
				status: isCompleted,
			},
		})
	} catch (error) {
		console.error('Error updating task:', error)
		throw error
	}

	revalidatePath('/')
	redirect('/')
}
