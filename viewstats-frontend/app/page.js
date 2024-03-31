import { Banner } from "./components/UI/Banner";
import { LoginForm } from "./components/LoginForm";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center gap-4 bg-slate-50">
      <Banner />
      <LoginForm />
    </main>
  );
}
