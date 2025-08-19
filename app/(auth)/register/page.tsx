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

  return <div>RegistrationPage</div>;
}

export default RegistrationPage;
