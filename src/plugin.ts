import { Application, IPlugin } from '@lumino/application';
import { Widget } from '@lumino/widgets';

import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';
import { NAME, VERSION } from './tokens';
import '../style/index.css';




const EXTENSION_ID = `${NAME}:plugin`;
console.log("here2");
const plugin: IPlugin<Application<Widget>, void> = {
  id: EXTENSION_ID,
  requires: [IJupyterWidgetRegistry],
  autoStart: true,
  activate: async (app: Application<Widget>, registry: IJupyterWidgetRegistry) => {
    registry.registerWidget({
      name: NAME,
      version: VERSION,
      exports: async () => {
        const widgetExports = {
          ...(await import(/* webpackChunkName: "rjsfwidget" */ './widget')),

        };

        console.log("import widgets", widgetExports);
        return widgetExports;
      },
    });
  },
};
export default plugin;
