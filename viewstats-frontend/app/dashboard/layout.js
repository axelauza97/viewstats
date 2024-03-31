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
    <main className="h-dvh overflow-hidden grid grid-rows-[min-content,1fr]">
      <Banner />
      <h1 className="font-bold text-xl sm:text-4xl mt-4 mx-auto text-center">
        Welcome to the TODO page!
      </h1>
      <section
        className="grid grid-rows-[min-content,1fr]
        sm:grid-cols-2
        sm:grid-rows-1
        overflow-hidden
        justify-items-center "
      >
        {children}
      </section>
    </main>
  );
}

/*  return (
    <>
      <Banner />
      <section
        className="min-h-[calc(90dvh)] grid sm:min-h-[calc(100dvh)] grid-rows-[min-content,1fr]
         h-dvh overflow-hidden
        justify-items-center "
      >
        {children}
      </section>
    </>
  );
}
*/
