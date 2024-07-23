import { map } from '@/.map';
import { languages } from '@/i18n';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree } = loader({
  // languages,
  baseUrl: '/',
  rootDir: 'docs',
  source: createMDXSource(map),
});
