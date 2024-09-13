import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { source } from '@/lib/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'LiterateInk',
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
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
            description: 'A purrfect API wrapper for PRONOTE',
            url: '/pawnote',
            icon: <></>,
          },
          {
            title: 'Pawdirecte',
            description: 'A purrfect API wrapper for EcoleDirecte',
            url: '/pawdirecte',
            icon: <></>,
          },
          {
            title: 'Educawtable',
            description: 'An awmazing API wrapper for Educartable',
            url: '/educawtable',
            icon: <></>, 
          },
          {
            title: 'Meowdle',
            description: 'A purrfect API wrapper for Moodle',
            url: '/meowdle',
            icon: <></>, 
          },
          {
            title: 'Turbawself',
            description: 'An awmazing API wrapper for Turboself',
            url: '/turbawself',
            icon: <></>, 
          },
          {
            title: 'WebRestaw',
            description: 'An awmazing API wrapper for WebResto',
            url: '/webrestaw',
            icon: <></>, 
          },
          {
            title: 'PawRD',
            description: 'An awmazing API wrapper for ARD GEC',
            url: '/pawrd',
            icon: <></>, 
          },
          {
            title: 'Crowous',
            description: 'A wrapper for the mobile API of Les Crous',
            url: '/crowous',
            icon: <></>, 
          },
          {
            title: 'Pawnilim',
            description: 'A purrfect API wrapper for Unilim',
            url: '/pawnilim',
            icon: <></>, 
          },
          {
            title: 'Utilities',
            description: 'For internal or advanced use only: a collection of utilities for our libraries.',
            url: '/utilities',
            icon: <></>, 
          },
        ]}
      />
    ),
}
};
