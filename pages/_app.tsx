import type { AppProps } from 'next/app';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="font-sans lining-nums text-slate-900 antialiased">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
