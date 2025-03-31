
"""
TODO: Add module docstring
"""
from ipywidgets import DOMWidget, Widget, widget_serialization
from ipywidgets.widgets.trait_types import TypedTuple
from traitlets import Unicode, Instance, Float
from typing import Optional
from ipywidgets.widgets import CallbackDispatcher
from .js import EXTENSION_NAME, EXTENSION_VERSION


class RJSForm(DOMWidget):
    _model_name = Unicode('RJSFModel').tag(sync=True)
    _model_module = Unicode(EXTENSION_NAME).tag(sync=True)
    _model_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)
    _view_name = Unicode("RJSFView").tag(sync=True)
    _view_module = Unicode(EXTENSION_NAME).tag(sync=True)
    _view_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)

    x = Float(default_value=0).tag(sync=True)
    y = Float(default_value=0).tag(sync=True)
    z = Float(default_value=0).tag(sync=True)
