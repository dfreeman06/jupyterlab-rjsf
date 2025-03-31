import {
    DOMWidgetModel,
    DOMWidgetView,
    unpack_models as deserialize,
  } from '@jupyter-widgets/base';
  
import { NAME, VERSION } from './tokens';
import React from 'react';
import { Form } from "./form";
import validator from "@rjsf/validator-ajv8";
// import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
console.log("widget.tsx loading.");
export class RJSFModel extends DOMWidgetModel {
    static model_name = 'RJSFModel';
    static serializers = {
      ...DOMWidgetModel.serializers,
      source: { deserialize },
    };
    

  
    defaults() {
      let defaults = {
        ...super.defaults(),
  
        _model_name: RJSFModel.model_name,
        _model_module_version: VERSION,
        _view_module: NAME,
        _view_name: RJSFView.view_name,
        _view_module_version: VERSION,
        source: null,
        schema:{
          "title": "A registration form",
          "description": "A simple form example.",
          "type": "object",
          "required": [
            "firstName",
            "lastName"
          ],
          "properties": {
            "firstName": {
              "type": "string",
              "title": "First name",
              "default": "Chuck"
            },
            "lastName": {
              "type": "string",
              "title": "Last name"
            },
            "age": {
              "type": "integer",
              "title": "Age"
            },
            "bio": {
              "type": "string",
              "title": "Bio"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "minLength": 3
            },
            "telephone": {
              "type": "string",
              "title": "Telephone",
              "minLength": 10
            }
          }
        }
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
      console.log("rendering?");
      const root = ReactDOM.createRoot(this.el);
      // root.render(<p>Test 2</p>)
      root.render(
        // <div>Rendered</div>,
        <Form {...props}/>
        // this.el
      );
  }

}