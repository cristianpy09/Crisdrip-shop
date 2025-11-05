import Sidebar from "@/components/ui/sidebar/Sidebar";
import TopMenu from "@/components/ui/top-menu/topMenu";








export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen px-5" >
      
      <TopMenu/>
      <Sidebar/>

      <div className="px-0 sm:px-10" >

        {children}
      </div>
      
      </main>
    
  );
}
