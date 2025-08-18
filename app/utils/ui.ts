export const getPriorityClass = (priority: string) => {
  if (priority === 'low' || priority === 'Low') {
    return 'font-bold text-green-500 uppercase';
  }
  if (priority === 'medium' || priority === 'Medium') {
    return 'font-bold text-yellow-500 uppercase';
  }
  if (priority === 'high' || priority === 'High') {
    return 'font-bold text-red-500 uppercase';
  }
  return 'font-bold text-gray-600';
};