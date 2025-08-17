'use server'
import * as sentry from '@sentry/nextjs';
import {prisma} from '@/app/db/prisma' 
import { revalidatePath } from 'next/cache';

export async function createTask(prevState: {success: boolean, message: string}, formData: FormData): Promise<{success: boolean, message: string}>{
  const subject = formData.get('subject') as string;
  const description = formData.get('description') as string;
  const priority = formData.get('priority') as string;

  try {
    if(!subject || ! description){
    sentry.captureMessage('Validation error: Missing Task fields');
    return{
      success: false,
      message: 'Please fill all the fields',
    };
  }
  // Create a Task
  const task = await prisma.task.create({
    data: {
      subject,
      description,
      priority,
    },
  });
  sentry.addBreadcrumb({
    category: 'task',
    message: `Task created: ${task.id}`,
    level: 'info',
  }
)

  sentry.captureMessage(`Task created successfully: ${task.id}`);

  revalidatePath('/tasks');

  return{
    success: true,
    message: 'Task created successfully',
  }
  } catch (error) {
    return{
      success: false,
      message: `An Unknown Error occurred while creating task: ${error}`,
    }
  }

}

export async function getTask(){
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return tasks;
  } catch (error) {
    throw error;
  }
}

export async function getTaskById(id: string) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });
    return task;
  } catch (error) {
    throw error;
  }
}
