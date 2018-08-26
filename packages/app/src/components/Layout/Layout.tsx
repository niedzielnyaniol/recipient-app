import * as React from 'react';

const Layout: React.SFC<IPropTypes> = ({children}) => (
  <div>
    {children}
  </div>
);

interface IPropTypes {
  children: React.ReactNode,
}

export default Layout;
