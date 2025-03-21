import { TextField } from '@radix-ui/themes';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type CommonProps = {
  placeholder?: string;
  className?: string;
  type?:
    | 'number'
    | 'search'
    | 'text'
    | 'time'
    | 'hidden'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'tel'
    | 'url'
    | 'week';
};

type InputProps<T extends FieldValues> = CommonProps & UseControllerProps<T>;

export function CTextField<T extends FieldValues>(props: InputProps<T>) {
  const { field } = useController(props);

  return (
    <TextField.Root
      {...field}
      id={field.name}
      placeholder={props.placeholder}
      className={props.placeholder}
      type={props.type}
    />
  );
}
