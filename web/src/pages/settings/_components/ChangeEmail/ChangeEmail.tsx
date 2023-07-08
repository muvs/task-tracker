import { UserChangeEmailBody, userAPI } from '@/api/user';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { keys } from '@/config/keys';
import { queries } from '@/queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Setting } from '../Setting/Setting';

export const ChangeEmail = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const query = useQuery({
    ...queries.user(),
    onSuccess: data => {
      reset({ email: data.email });
    },
  });

  const mutation = useMutation({
    mutationKey: ['edit', 'email'],
    mutationFn: async (body: UserChangeEmailBody) => {
      return userAPI.changeEmail({ body });
    },
    onSuccess: () => {
      queryClient.removeQueries();
      localStorage.removeItem(keys.isLoggedIn);
      navigate('/account/verify/form', {
        state: { email: getValues('email') },
      });
    },
  });

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<UserChangeEmailBody>({
    resolver: yupResolver(userAPI.changeEmail.validation),
  });

  return (
    <Setting.Form
      settingTitle='Change Email'
      onSubmit={handleSubmit(data => mutation.mutate(data))}
    >
      <TextInput
        {...register('email')}
        placeholder='anotherme@example.com'
        fieldName='Email'
        error={errors.email}
      />
      <Button type='submit'>Change</Button>
    </Setting.Form>
  );
};