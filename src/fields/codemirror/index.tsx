import * as React from 'react';

import ReactCodeMirror from '@uiw/react-codemirror';
import type { ViewUpdate } from '@codemirror/view';
export function CodeMirrorField(props: any) {
  const { options } = props;

  const cmOptions = {
    ...codeMirrorDefaults(),
    ...(options?.cmOptions || {}),
  };

  const onChange = React.useCallback((value:string, viewUpdate:ViewUpdate) => {
    console.log('val:', value);
    props.onChange(value);
  }, []);  

  return (
    <>
      <div>
        <ReactCodeMirror
          value={props.value}
          {...cmOptions}
          onChange={onChange}
          // autoCursor={false}
          // autoScroll={false}
        />
      </div>
    </>
  );
}

export function codeMirrorDefaults() {
  const isLight = !!document.querySelector('body[data-jp-theme-light="true"]');

  return {
    theme: isLight ? 'default' : 'zenburn',
    matchBrackets: true,
    autoCloseBrackets: true,
    lineWrapping: true,
  };
}
