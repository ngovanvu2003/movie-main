import Header from "@/components/Header";
import Providers from "../Providers";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full">
      <div className="relative h-screen ">
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        <Footer />
      </div>
    </main>
  );
}
