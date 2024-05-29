import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import CareNavigatorView from '../pages/components/CareNavigatorView';
import MessageSection from '../pages/components/MessageSection';
import OrderDetails from '../pages/components/OrderDetails';
import ProviderView from '../pages/components/ProviderView';
import ViewToggle from '../pages/components/ViewToggle';

interface HomeProps {
  data: MiraData
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/data');
  const data: MiraData = await res.json();
  return {
    props: {
      data,
    },
  };
};

function Home({ data }: HomeProps) {
  const [view, setView] = useState<'careNavigator' | 'provider'>('careNavigator');
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const toggleView = () => {
    setView((prevView) => (prevView === 'careNavigator' ? 'provider' : 'careNavigator'));
  };

  const toggleCollapse = (sectionId: string) => {
    setCollapsedSections((prevSections) => {
      const newSections = new Set(prevSections);
      if (newSections.has(sectionId)) {
        newSections.delete(sectionId);
      } else {
        newSections.add(sectionId);
      }
      return newSections;
    });
  };

  return (
    <>
      <Head>
        <title>Order</title>
        <meta name="description" content="Page for order details of MiraOS Health Care system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="container mx-auto py-7">
        <OrderDetails />
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <ViewToggle view={view} toggleView={toggleView} />
          {view === 'careNavigator' ? (
            <CareNavigatorView data={data} collapsedSections={collapsedSections} toggleCollapse={toggleCollapse} />
          ) : (
            <ProviderView data={data} collapsedSections={collapsedSections} toggleCollapse={toggleCollapse} />
          )}
          <MessageSection />

        </div>
        
      </main>
    
    </>
  );
};

export default Home;