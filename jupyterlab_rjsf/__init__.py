from .form import RJSForm
from ._version import __version__, version_info
from .js import EXTENSION_NAME

def _jupyter_labextension_paths():
    """Called by Jupyter Lab Server to detect if it is a valid labextension and
    to install the widget
    Returns
    =======
    src: Source directory name to copy files from. Webpack outputs generated files
        into this directory and Jupyter Lab copies from this directory during
        widget installation
    dest: Destination directory name to install widget files to. Jupyter Lab copies
        from `src` directory into <jupyter path>/labextensions/<dest> directory
        during widget installation
    """
    from .js import __prefix__

    return [dict(src=str(__prefix__), dest=EXTENSION_NAME)]



