import { RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const homePageRoute: RouteObject = {
  path: pathKeys.home,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      import('./HomePage.loader.tsx').then((module) => module.default),
      import('./HomePage.ui.tsx').then((module) => module.default),
    ]);
    return { loader, Component };
  },
};
