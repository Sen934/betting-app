import { pathKeys } from '@/shared/router';
import type { RouteObject } from 'react-router';

export const homePageRoute: RouteObject = {
  path: pathKeys.home,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      import('./HomePage.loader.ts').then((module) => module.default),
      import('./HomePage.ui.tsx').then((module) => module.default),
    ]);
    return { loader, Component };
  },
};
