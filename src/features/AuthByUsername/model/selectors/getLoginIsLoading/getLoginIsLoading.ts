import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsLoadint = (state: StateSchema) => state?.loginForm?.isLoading || false;
