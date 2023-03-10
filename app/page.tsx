import Link from 'next/link';

const Page = (): JSX.Element => {
  return (
    <div>
      <p className="font-bold text-xl">
        app dir, env: {process.env.APP_ENV_TEST}
      </p>
      <div>
        <Link
          className="underline hover:no-underline text-blue-500 hover:opacity-80"
          href="/client-side"
        >
          client side
        </Link>
      </div>
    </div>
  );
};

export default Page;
