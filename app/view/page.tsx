import { getTask } from '../actions/task.actions';

async function ViewTaskPage() {
  const Tasks = await getTask();
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 p-8'>
      <h1 className='text-3xl font-bold text-blue-600 mb-8 text-center'>
        Support Tasks
      </h1>
      {Tasks.length === 0 ? (
        <p className='text-xl text-gray-300 mb-12 max-w-lg text-center'>
          No tasks found
        </p>
      ) : (
        <div className='space-y-6 max-w-3xl mx-auto'>
          {Tasks.map((task) => (
           
              <div key={task.id} className='border rounded-lg shadow-lg p-6'>
                <div className='flex justify-between'>
                <h2 className='text-2xl font-bold mb-4'>{task.subject}</h2>
              </div>
              <div>  
                <p className='text-gray-200 mb-4'>{task.description}</p>
                <p className='text-gray-300'>Priority: {task.priority}</p>
              </div>
          )}
        </div>
        )}
    </div>
  );
}

export default ViewTaskPage;
