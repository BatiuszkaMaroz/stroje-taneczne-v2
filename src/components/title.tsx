import * as React from 'react';

function Title({ children }: React.PropsWithChildren) {
  return <h1 className='text-3xl font-bold underline'>{children}</h1>;
}

export default Title;
