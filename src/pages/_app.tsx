import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35 }}
      >
        <Component {...pageProps} />
        <Analytics />
      </motion.div>
    </AnimatePresence>
  );
}
