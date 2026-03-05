import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Projects = dynamic(() => import('@/components/Projects'));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="h-screen grid place-items-center text-primary text-xl font-bold">Launching portfolio...</div>;
  }

  return (
    <>
      <Head>
        <title>Rohan Gupta | FinTech Frontend Engineer</title>
        <meta name="description" content="Modern fintech-focused frontend portfolio with secure, scalable web interfaces." />
        <meta property="og:title" content="Rohan Gupta | FinTech Frontend Engineer" />
        <meta property="og:description" content="Building secure, scalable frontends for financial systems." />
        <meta property="og:image" content="/og-image.svg" />
      </Head>
      <div className="cursor-dot" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
