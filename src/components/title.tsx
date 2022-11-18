import * as React from 'react';

function Title({ children }: React.PropsWithChildren) {
  return <h1>{children}</h1>;
}

export default Title;
