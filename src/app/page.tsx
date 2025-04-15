'use client';
import { useEffect } from 'react';
import Story from '../../components/story';
import Footer from '../../components/footer';
import Article from '../../components/article';
import Creator from '../../components/creator';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import SectionNews from '../../components/sectionNews';
import Editor from '../../components/editor';
import LatestNews from '../../components/latestNews';
export default function Home() {
  useEffect(() => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
      scrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }, []);
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Latest News Section */}
      <LatestNews />
      {/* Story Section */}
      <Story />
      {/* Must Read Section */}
      <Article />
      {/* Editor's Pick Section */}
      <Editor />
      {/* Business and Sport News Section */}
      <SectionNews />
      {/* Top Creator Section */}
      <Creator />  
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
