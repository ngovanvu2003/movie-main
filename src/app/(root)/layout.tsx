import Header from "@/components/Header";
import Providers from "../Providers";
import Footer from "@/components/Footer";


export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="h-full">
     <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
     <Providers>
      <Header/>
        <main>
        {children}
        </main>
        </Providers>
        <Footer/>
     </div>
    
    </main>
  );
}
