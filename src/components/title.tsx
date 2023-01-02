import clsx from 'clsx';
import * as React from 'react';

type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function Title({ children, className, ...props }: TitleProps) {
  return (
    <h2
      {...props}
      className={clsx('font-display text-3xl tracking-widest', className)}
    >
      {children}
    </h2>
  );
}
