var size = 0;
var placement = 'point';
function categories_ChaaralAlimentadoresMTBase_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Barquitos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,195,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diego de Almagro':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,56,51,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'El Salar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,135,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inca de Oro':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,212,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'La Puntilla':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,61,238,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ChaaralAlimentadoresMTBase_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Alim");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ChaaralAlimentadoresMTBase_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
