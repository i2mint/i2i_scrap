# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NestedDataCRUD(Component):
    """A NestedDataCRUD component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- dataSource (list of dicts; optional)
- keyField (string; optional)
- keyHeader (string; optional)
- valueField (string; optional)
- valueHeader (string; optional)
- childrenField (string; optional)
- nodeLabel (string; optional)
- leafLabel (string; optional)
- height (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, dataSource=Component.UNDEFINED, keyField=Component.UNDEFINED, keyHeader=Component.UNDEFINED, valueField=Component.UNDEFINED, valueHeader=Component.UNDEFINED, childrenField=Component.UNDEFINED, nodeLabel=Component.UNDEFINED, leafLabel=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'dataSource', 'keyField', 'keyHeader', 'valueField', 'valueHeader', 'childrenField', 'nodeLabel', 'leafLabel', 'height']
        self._type = 'NestedDataCRUD'
        self._namespace = 'dash_to_react'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'dataSource', 'keyField', 'keyHeader', 'valueField', 'valueHeader', 'childrenField', 'nodeLabel', 'leafLabel', 'height']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NestedDataCRUD, self).__init__(**args)
