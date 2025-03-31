"""Client resource discovery and metadata for ``jupyterlab_rjsf``."""
from pathlib import Path
import sys 
EXTENSION_NAME = "@polusai/jupyterlab-rjsf"
EXTENSION_VERSION = "1.1.1"



HERE = Path(__file__).parent

IN_TREE = (HERE / "labextension").resolve()
IN_PREFIX = Path(sys.prefix) / f"share/jupyter/labextensions/{EXTENSION_NAME}"

__prefix__ = IN_TREE if IN_TREE.exists() else IN_PREFIX

PKG_JSON = __prefix__ / "package.json"