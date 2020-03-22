import { Params, RouterStateSnapshot } from "@angular/router";

import { RouterStateSerializer } from "@ngxs/router-plugin";

export interface RouterStateParams {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;
}

// Map the router snapshot to { url, params, queryParams }
export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateParams> {
  serialize(routerState: RouterStateSnapshot): RouterStateParams {
    const {
      url,
      root: { queryParams }
    } = routerState;

    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params, data } = route;

    return { url, params, queryParams, data };
  }
}
