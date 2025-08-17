import { getTaskById } from '@/app/actions/task.actions';
import { getPriorityClass } from '@/app/utils/ui';
import { get } from 'http';
import Link from 'next/link';

const TaskDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const task = await getTaskById(id);
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 p-8'>
      <div className='max-w-2xl mx-auto rounded-lg shadow-lg p-8 border border-gray-200 space-y-6'>
        <h1 className='text-lg font-semibold mb-2 text-white'>Subject</h1>
        <h1 className='text-2xl font-bold text-blue-600'>{task?.subject}</h1>
        <div className='text-white'>
          <h2 className='text-lg font-semibold mb-2'>Description</h2>
          <p>{task?.description}</p>
        </div>
        <div className='text-white'>
          <h2 className='text-lg font-semibold mb-2'>Priority</h2>
          <p className={getPriorityClass(task?.priority as string)}>
            {task?.priority}
          </p>
        </div>
        <div className='text-white'>
          <h2 className='text-lg font-semibold mb-2'>Created At</h2>
          <p>{task?.createdAt.toLocaleString()}</p>
        </div>
        <Link
          href='/view'
          className='inline-block mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition text-center'
        >
          Back to Tasks
        </Link>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
