import type { Metadata } from 'next';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { LinkItemType } from 'fumadocs-ui/layout';

const navLinks: LinkItemType[] = [
  {
    text: 'Website',
    url: 'https://literate.ink',
    active: 'nested-url',
  },
  {
    text: 'Discord',
    url: 'https://literate.ink/discord',
    active: 'nested-url',
  },
]

export default function HomePage() {
  return (
    <HomeLayout nav={{ title: <p>LiterateInk</p> }} links={navLinks}>
      <main className="mx-auto max-w-6xl pt-8 px-4 lg:px-0">
        <section className="w-full overflow-x-hidden">
          <div className="relative flex flex-col lg:items-center z-10">
            <h1 className="text-4xl lg:text-5xl font-bold pt-20 lg:pt-40 mb-6">
              A home for our documentations
            </h1>
            <p className="lg:text-center text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-10">
              Comprehensive documentation for all our libraries with API references and detailed guides.
            </p>
            <div className="flex flex-row gap-4 items-center">
              <a href="https://github.com/LiterateInk" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none bg-secondary/60 hover:bg-accent shadow-background/20 h-11 px-6 rounded-full border border-bg-secondary/40">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}

export function generateMetadata() {
  return {
    title: "Home",
    description: "some homepage",
  } satisfies Metadata;
}
