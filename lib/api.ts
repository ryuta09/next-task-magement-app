import { prisma } from './prisma'

export async function getAllTasks() {
	return await prisma.task.findMany({
		where: {
			status: false,
		},
		select: {
			id: true,
			title: true,
			description: true,
			dueDate: true,
			status: true,
			createdAt: true,
			updatedAt: true,
		},
	})
}

export async function getCompletedTasks() {
	return await prisma.task.findMany({
		where: {
			status: true,
		},
		select: {
			id: true,
			title: true,
			description: true,
			dueDate: true,
			status: true,
			createdAt: true,
			updatedAt: true,
		},
	})
}
