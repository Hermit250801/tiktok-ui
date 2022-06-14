import routesConfig from '~/config/routes';

//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public Routes
const publicRoutes = [
    { path: routesConfig.root, components: Home },
    { path: routesConfig.following, components: Following },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
    { path: routesConfig.search, components: Search, layout: null },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
