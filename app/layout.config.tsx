import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';
import { Blocks, Library } from 'lucide-react';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'LiterateInk',
  },
  links: [
    {
      text: 'Documentation',
      url: '/',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  githubUrl: "https://github.com/LiterateInk",
  links: [
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
  ],

  sidebar: {
    banner: (
      <RootToggle
        options={[
          {
            title: 'Pawnote',
            description: 'PRONOTE',
            url: '/pawnote',
            icon: <div className='size-9 shrink-0 rounded-md bg-gradient-to-t from-background/90 bg-blue-600/60 p-1.5'>
              <Library className='text-blue-600 dark:text-blue-200' />
            </div>,
          },
          {
            title: 'Pawnilim',
            description: 'Unilim',
            url: '/pawnilim',
            icon: <div className='size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 bg-purple-500/60 p-1.5'>
              <Blocks className='text-purple-600 dark:text-purple-200' />
            </div>, 
          },
        ]}
      />
    ),
}
};
