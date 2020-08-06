# AUTO GENERATED FILE - DO NOT EDIT

''NestedDataCRUD <- function(id=NULL, dataSource=NULL, keyField=NULL, keyHeader=NULL, valueField=NULL, valueHeader=NULL, childrenField=NULL, nodeLabel=NULL, leafLabel=NULL, height=NULL) {
    
    props <- list(id=id, dataSource=dataSource, keyField=keyField, keyHeader=keyHeader, valueField=valueField, valueHeader=valueHeader, childrenField=childrenField, nodeLabel=nodeLabel, leafLabel=leafLabel, height=height)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NestedDataCRUD',
        namespace = 'dash_to_react',
        propNames = c('id', 'dataSource', 'keyField', 'keyHeader', 'valueField', 'valueHeader', 'childrenField', 'nodeLabel', 'leafLabel', 'height'),
        package = 'dashToReact'
        )

    structure(component, class = c('dash_component', 'list'))
}
