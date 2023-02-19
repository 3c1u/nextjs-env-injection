import Link from 'next/link';
import * as React from 'react';

const ClientSide = (): JSX.Element => {
  
  return (
    <div>
      <p className="font-bold text-xl">
        client side, env: {process.env.APP_ENV_TEST}
      </p>
      <div>
        <Link
          className="underline hover:no-underline text-blue-500 hover:opacity-80"
          href="/"
        >
          appDir
        </Link>
      </div>
    </div>
  );
};

export default ClientSide;
