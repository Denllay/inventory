export type SignOutTypes = 'sign-out' | 'delete-item' | null;
export interface ISignOut {
  type: SignOutTypes;
  payload?: {
    id: string;
  };
}
