import { Header } from "@/components/header";
import { AppGrid } from "@/components/app-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <AppGrid />
      <Footer />
    </main>
  );
}
