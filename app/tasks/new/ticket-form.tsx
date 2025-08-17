'use client';
import { useActionState, useEffect } from 'react';
import { createTask } from '@/app/actions/task.actions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function TaskFormPage() {
  const [state, formAction] = useActionState(createTask, {
    success: false,
    message: '',
  });

  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      toast.success('Task created successfully');
      router.push('/view');
    }
  }, [state.success, router]);

  return (
    <div className='w-full max-w-md p-8 border rounded-lg'>
      <h1 className='text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent capitalize'>
        Submit a New Task
      </h1>
      {state.message && !state.success && (
        <p className='text-red-500 mb-4 text-center'>{state.message}</p>
      )}

      <form action={formAction} className='space-y-4 text-gray-700'>
        <input
          type='text'
          className='w-full p-2 rounded border text-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
          name='subject'
          placeholder='Subject'
        />
        <textarea
          className='w-full border text-white border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          name='description'
          placeholder='Describe your task'
          rows={4}
        />
        <select
          name='priority'
          defaultValue='low'
          className='w-full p-2 rounded border text-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          <option value='Low'>Low Priorty</option>
          <option value='Medium'>Medium Priority</option>
          <option value='High'>High Priority</option>
        </select>

        {/* add a due date */}
        {/* <input
            type='date'
            className='w-full p-2 rounded border text-white font-medium border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
            name='dueDate'
            defaultValue={new Date().toISOString().split('T')[0]}
            required
          /> */}
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium capitalize'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
