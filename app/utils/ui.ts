export const getPriorityClass = (priority: string) => {
  if (priority === 'low' || priority === 'Low') {
    return 'font-bold text-green-600';
  }
  if (priority === 'medium' || priority === 'Medium') {
    return 'font-bold text-yellow-500';
  }
  if (priority === 'high' || priority === 'High') {
    return 'font-bold text-red-600';
  }
  return 'font-bold text-gray-600';
};