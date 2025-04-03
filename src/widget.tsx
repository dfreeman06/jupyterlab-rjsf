import {
    DOMWidgetModel,
    DOMWidgetView,
    unpack_models as deserialize,
  } from '@jupyter-widgets/base';
  
import { NAME, VERSION } from './tokens';
import React from 'react';
import { Form } from "./form";
import {SchemaForm} from "./schemaform";
import validator from "@rjsf/validator-ajv8";
// import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
console.log("widget.tsx loading.");
export class RJSFModel extends DOMWidgetModel {
    static model_name = 'RJSFModel';
    static serializers = {
      ...DOMWidgetModel.serializers,
      value: { deserialize },
      schema: { deserialize },
      props: { deserialize },
      options: { deserialize },
      errors: { deserialize },
    };
    

  
    defaults() {
      let defaults = {
        ...super.defaults(),
  
        _model_name: RJSFModel.model_name,
        _model_module_version: VERSION,
        _view_module: NAME,
        _view_name: RJSFView.view_name,
        _view_module_version: VERSION,
        value: {},
        schema: {},
        props: {},
        options: {},
        errors: [],
      };
      console.log("model defaults", defaults)
      return defaults;
    }
  
    initialize(attributes: any, options: any) {
      super.initialize(attributes, options);
      console.log("model init?");
    }
  }

export class RJSFView extends DOMWidgetView {
static view_name = 'RJSFView';
model: RJSFModel;

  initialize(parameters: any) {
    super.initialize(parameters);
    console.log("view init?");
  }
    
  render() {
      // const root = this.el as HTMLDivElement;
      // root.appendChild(Form);
      let props = {
        validator,
        schema:this.model.get("schema"),
      }
      console.log("rendering?", props, SchemaForm);
      const root = ReactDOM.createRoot(this.el);
      // root.render(<p>Test 2</p>)
      let form = React.createElement(Form, props)
      root.render(
        form
      );
  }

}