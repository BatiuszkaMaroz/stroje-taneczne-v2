import clsx from 'clsx';
import * as React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  buttonClassName?: string;
  fullWidth?: boolean;
};

export default function Button({
  children,
  className = '',
  buttonClassName: buttonClassName = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'group relative z-0 flex justify-center items-center p-2',
        className,
      )}
      {...props}
    >
      <span
        className={clsx(
          `absolute -z-10 h-full w-[calc(100%-1rem)] group-hover:h-[calc(100%-1rem)]
          border-gray-900 border transition-all`,
          buttonClassName,
        )}
      />
      <span
        className={clsx(
          `absolute -z-10 h-[calc(100%-1rem)] w-full group-hover:w-[calc(100%-1rem)]
          border-gray-900 border transition-all`,
          buttonClassName,
        )}
      />
      <p
        className={clsx(
          `block w-full px-8 max-xl:px-6 max-lg:px-4 py-4 max-xl:py-3 max-lg:py-2
          border border-gray-900 transition-all`,
          buttonClassName,
        )}
      >
        {children}
      </p>
    </button>
  );
}
