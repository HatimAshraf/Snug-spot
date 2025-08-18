import Link from 'next/link';
import { getTask } from '../actions/task.actions';
import { getPriorityClass } from '@/app/utils/ui';

async function ViewTaskPage() {
  const Tasks = await getTask();
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 p-8'>
      <h1 className='text-3xl font-bold text-white mb-8 text-center'>
        All The Tasks
      </h1>
      {Tasks.length === 0 ? (
        <p className='text-xl text-gray-300 mb-12 max-w-lg text-center'>
          No tasks found
        </p>
      ) : (
        <div className='space-y-6 max-w-3xl mx-auto'>
          {Tasks.map((task) => (
            <div
              key={task.id}
              className='flex justify-between items-center border rounded-lg shadow p-6'
            >
              <div>
                <h2 className='text-xl text-white font-semibold'>
                  {task.subject}
                </h2>
              </div>
              <div className='text-right space-y-2'>
                <div className='text-sm text-white'>
                  Priority:{' '}
                  <span className={getPriorityClass(task.priority)}>
                    {task.priority}
                  </span>
                </div>
                <Link
                  href={`/view/${task.id}`}
                  className='inline-block mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition text-center'
                >
                  View Task
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewTaskPage;
