
"""
TODO: Add module docstring
"""
from ipywidgets import DOMWidget, Widget, widget_serialization
from ipywidgets.widgets.trait_types import TypedTuple
from traitlets import Unicode, Dict, List
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
    value = Dict(default_factory=dict).tag(sync=True)
    schema = Dict(default_factory=dict).tag(sync=True)
    props = Dict(default_factory=dict).tag(sync=True)
    options = Dict(default_factory=dict).tag(sync=True)
    errors = List(default_factory=list).tag(sync=True)
