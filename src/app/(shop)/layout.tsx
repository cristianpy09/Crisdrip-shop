import Footer from "@/components/ui/footer/Footer";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import TopMenu from "@/components/ui/top-menu/topMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <TopMenu />
      <Sidebar />

      <div className="w-full max-w-8xl mx-auto px-4 sm:px-8">
        {children}
      </div>

      <Footer />
    </main>
  );
}
