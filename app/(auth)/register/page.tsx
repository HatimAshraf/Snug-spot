import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
import { registerUser } from '@/app/actions/auth.actions';

function RegistrationPage() {
  const initialState = {
    success: false,
    message: '',
  };
  const [state, formAction] = useActionState(registerUser, initialState);

  return <div>
    <h1>RegistrationPage</h1>
  </div>;
}

export default RegistrationPage;
