import { EInputType } from 'types';

export type TProps = {
  value: string;
  onChange: (text: string) => void;
  name: string;
  type?: EInputType;
  placeholder?: string;
  isNewPwd?: boolean;
};
