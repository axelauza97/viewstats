import { LogoutButton } from "../components/LogoutButton";
import { Banner } from "../components/UI/Banner";

export const metadata = {
  title: {
    template: "%s - Axel Auza",
    default: "Axel Auza",
  },
  description: "Axel Auza Test ViewStats",
  keywords: "Axel Auza, Next.js, Tailwind, FrontEnd, FullStack",
  icons: {
    icon: "../favicon.ico",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main className="grid h-dvh grid-rows-[min-content,1fr] overflow-hidden bg-slate-50">
        <Banner />
        <LogoutButton />

        <h1 className="mx-auto mt-4 text-center text-2xl font-bold drop-shadow sm:text-4xl">
          TODO page!
        </h1>
        <section
          className="mx-auto
              grid
              max-w-screen-2xl
              grid-rows-[min-content,1fr] justify-items-center 
              overflow-hidden
              sm:grid-cols-2
              sm:grid-rows-1"
        >
          {children}
        </section>
      </main>
    </>
  );
}
