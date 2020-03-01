import { upgradeElement } from '@ampproject/worker-dom';
import { render as preactRender, hydrate as preactHydrate } from 'preact';

export const render = (vnode, target, worker) => {
  upgradeElement(target, worker);
  preactRender(vnode, target);
}

export const hydrate = (vnode, target, worker) => {
  upgradeElement(target, worker);
  preactHydrate(vnode, target);
}
