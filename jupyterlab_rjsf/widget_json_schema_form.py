""" Widgets for working with JSON Schema interactively
"""
# pylint: disable=redefined-builtin

import ipywidgets as W  # noqa
import traitlets as T
from .js import EXTENSION_NAME, EXTENSION_VERSION

@W.register
class JSONSchemaForm(W.Box):
    """Show a form based on an JSON Schema (and/or UI schema)"""
    _model_module = T.Unicode(EXTENSION_NAME).tag(sync=True)
    _model_module_version = T.Unicode(EXTENSION_VERSION).tag(sync=True)
    _view_module = T.Unicode(EXTENSION_NAME).tag(sync=True)
    _view_module_version = T.Unicode(EXTENSION_VERSION).tag(sync=True)
    _model_name = T.Unicode("JSONSchemaFormModel").tag(sync=True)
    _view_name = T.Unicode("JSONSchemaFormView").tag(sync=True)

    value = T.Any(allow_none=True).tag(sync=True)
    schema = T.Dict(allow_none=True).tag(sync=True)
    ui_schema = T.Dict(allow_none=True).tag(sync=True)
    errors = T.List().tag(sync=True)