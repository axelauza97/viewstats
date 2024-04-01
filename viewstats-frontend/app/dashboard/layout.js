import { Banner } from "../components/UI/Banner";

export const metadata = {
  title: {
    template: "%s - Axel Auza",
    default: "Axel Auza",
  },
  description:
    "Example Ecommerce Web Page written with Next.js and Tailwind.css by Axel Auza A",
  keywords: "Axel Auza, Next.js, Tailwind, FrontEnd, FullStack",
};

export default function Layout({ children }) {
  return (
    <>
      <main className="grid h-dvh grid-rows-[min-content,1fr] overflow-hidden bg-slate-50">
        <Banner />
        <h1 className="mx-auto mt-4 text-center text-xl font-bold sm:text-4xl drop-shadow">
          Welcome to the TODO page!
        </h1>
        <section
          className="grid
              grid-rows-[min-content,1fr]
              justify-items-center
              overflow-hidden sm:grid-cols-2 
              sm:grid-rows-1
              max-w-screen-2xl
              mx-auto"
              
        >
          {children}
        </section>
      </main>
    </>
  );
}
