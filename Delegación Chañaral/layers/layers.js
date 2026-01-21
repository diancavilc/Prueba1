var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoLight_3 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_ComunasDelegacinChaaral_4 = new ol.format.GeoJSON();
var features_ComunasDelegacinChaaral_4 = format_ComunasDelegacinChaaral_4.readFeatures(json_ComunasDelegacinChaaral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunasDelegacinChaaral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasDelegacinChaaral_4.addFeatures(features_ComunasDelegacinChaaral_4);
var lyr_ComunasDelegacinChaaral_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunasDelegacinChaaral_4, 
                style: style_ComunasDelegacinChaaral_4,
                popuplayertitle: "Comunas Delegación Chañaral",
                interactive: false,
                title: 'Comunas Delegación Chañaral'
            });
var format_Rodillobase_5 = new ol.format.GeoJSON();
var features_Rodillobase_5 = format_Rodillobase_5.readFeatures(json_Rodillobase_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodillobase_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodillobase_5.addFeatures(features_Rodillobase_5);
var lyr_Rodillobase_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodillobase_5, 
                style: style_Rodillobase_5,
                popuplayertitle: "Rodillo base",
                interactive: true,
                title: '<img src="styles/legend/Rodillobase_5.png" /> Rodillo base'
            });
var format_LaPuntillabase_6 = new ol.format.GeoJSON();
var features_LaPuntillabase_6 = format_LaPuntillabase_6.readFeatures(json_LaPuntillabase_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaPuntillabase_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaPuntillabase_6.addFeatures(features_LaPuntillabase_6);
var lyr_LaPuntillabase_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaPuntillabase_6, 
                style: style_LaPuntillabase_6,
                popuplayertitle: "La Puntilla base",
                interactive: true,
                title: '<img src="styles/legend/LaPuntillabase_6.png" /> La Puntilla base'
            });
var format_IncadeOrobase_7 = new ol.format.GeoJSON();
var features_IncadeOrobase_7 = format_IncadeOrobase_7.readFeatures(json_IncadeOrobase_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncadeOrobase_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncadeOrobase_7.addFeatures(features_IncadeOrobase_7);
var lyr_IncadeOrobase_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncadeOrobase_7, 
                style: style_IncadeOrobase_7,
                popuplayertitle: "Inca de Oro base",
                interactive: true,
                title: '<img src="styles/legend/IncadeOrobase_7.png" /> Inca de Oro base'
            });
var format_ElSalarbase_8 = new ol.format.GeoJSON();
var features_ElSalarbase_8 = format_ElSalarbase_8.readFeatures(json_ElSalarbase_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElSalarbase_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElSalarbase_8.addFeatures(features_ElSalarbase_8);
var lyr_ElSalarbase_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElSalarbase_8, 
                style: style_ElSalarbase_8,
                popuplayertitle: "El Salar base",
                interactive: true,
                title: '<img src="styles/legend/ElSalarbase_8.png" /> El Salar base'
            });
var format_DiegodeAlmagrobase_9 = new ol.format.GeoJSON();
var features_DiegodeAlmagrobase_9 = format_DiegodeAlmagrobase_9.readFeatures(json_DiegodeAlmagrobase_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiegodeAlmagrobase_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiegodeAlmagrobase_9.addFeatures(features_DiegodeAlmagrobase_9);
var lyr_DiegodeAlmagrobase_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiegodeAlmagrobase_9, 
                style: style_DiegodeAlmagrobase_9,
                popuplayertitle: "Diego de Almagro base",
                interactive: true,
                title: '<img src="styles/legend/DiegodeAlmagrobase_9.png" /> Diego de Almagro base'
            });
var format_DesiertoFloridobase_10 = new ol.format.GeoJSON();
var features_DesiertoFloridobase_10 = format_DesiertoFloridobase_10.readFeatures(json_DesiertoFloridobase_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesiertoFloridobase_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesiertoFloridobase_10.addFeatures(features_DesiertoFloridobase_10);
var lyr_DesiertoFloridobase_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesiertoFloridobase_10, 
                style: style_DesiertoFloridobase_10,
                popuplayertitle: "Desierto Florido base",
                interactive: true,
                title: '<img src="styles/legend/DesiertoFloridobase_10.png" /> Desierto Florido base'
            });
var format_Barquitosbase_11 = new ol.format.GeoJSON();
var features_Barquitosbase_11 = format_Barquitosbase_11.readFeatures(json_Barquitosbase_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barquitosbase_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barquitosbase_11.addFeatures(features_Barquitosbase_11);
var lyr_Barquitosbase_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barquitosbase_11, 
                style: style_Barquitosbase_11,
                popuplayertitle: "Barquitos base",
                interactive: true,
                title: '<img src="styles/legend/Barquitosbase_11.png" /> Barquitos base'
            });
var format_BahaInglesabase_12 = new ol.format.GeoJSON();
var features_BahaInglesabase_12 = format_BahaInglesabase_12.readFeatures(json_BahaInglesabase_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BahaInglesabase_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BahaInglesabase_12.addFeatures(features_BahaInglesabase_12);
var lyr_BahaInglesabase_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BahaInglesabase_12, 
                style: style_BahaInglesabase_12,
                popuplayertitle: "Bahía Inglesa base",
                interactive: true,
                title: '<img src="styles/legend/BahaInglesabase_12.png" /> Bahía Inglesa base'
            });
var format_CalderaAlimentadoresMTBase_13 = new ol.format.GeoJSON();
var features_CalderaAlimentadoresMTBase_13 = format_CalderaAlimentadoresMTBase_13.readFeatures(json_CalderaAlimentadoresMTBase_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalderaAlimentadoresMTBase_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalderaAlimentadoresMTBase_13.addFeatures(features_CalderaAlimentadoresMTBase_13);
var lyr_CalderaAlimentadoresMTBase_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CalderaAlimentadoresMTBase_13, 
                style: style_CalderaAlimentadoresMTBase_13,
                popuplayertitle: "Caldera - Alimentadores MT Base",
                interactive: true,
    title: 'Caldera - Alimentadores MT Base<br />\
    <img src="styles/legend/CalderaAlimentadoresMTBase_13_0.png" /> Bahía Inglesa<br />\
    <img src="styles/legend/CalderaAlimentadoresMTBase_13_1.png" /> Desierto Florido<br />\
    <img src="styles/legend/CalderaAlimentadoresMTBase_13_2.png" /> Rodillo<br />'
        });
var format_CalderaTroncaleInterconexionesBase_14 = new ol.format.GeoJSON();
var features_CalderaTroncaleInterconexionesBase_14 = format_CalderaTroncaleInterconexionesBase_14.readFeatures(json_CalderaTroncaleInterconexionesBase_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalderaTroncaleInterconexionesBase_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalderaTroncaleInterconexionesBase_14.addFeatures(features_CalderaTroncaleInterconexionesBase_14);
var lyr_CalderaTroncaleInterconexionesBase_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CalderaTroncaleInterconexionesBase_14, 
                style: style_CalderaTroncaleInterconexionesBase_14,
                popuplayertitle: "Caldera - Troncal e Interconexiones Base",
                interactive: true,
                title: 'Caldera - Troncal e Interconexiones Base'
            });
var format_ChaaralAlimentadoresMTBase_15 = new ol.format.GeoJSON();
var features_ChaaralAlimentadoresMTBase_15 = format_ChaaralAlimentadoresMTBase_15.readFeatures(json_ChaaralAlimentadoresMTBase_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChaaralAlimentadoresMTBase_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChaaralAlimentadoresMTBase_15.addFeatures(features_ChaaralAlimentadoresMTBase_15);
var lyr_ChaaralAlimentadoresMTBase_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChaaralAlimentadoresMTBase_15, 
                style: style_ChaaralAlimentadoresMTBase_15,
                popuplayertitle: "Chañaral - Alimentadores MT Base",
                interactive: true,
    title: 'Chañaral - Alimentadores MT Base<br />\
    <img src="styles/legend/ChaaralAlimentadoresMTBase_15_0.png" /> Barquitos<br />\
    <img src="styles/legend/ChaaralAlimentadoresMTBase_15_1.png" /> Diego de Almagro<br />\
    <img src="styles/legend/ChaaralAlimentadoresMTBase_15_2.png" /> El Salar<br />\
    <img src="styles/legend/ChaaralAlimentadoresMTBase_15_3.png" /> Inca de Oro<br />\
    <img src="styles/legend/ChaaralAlimentadoresMTBase_15_4.png" /> La Puntilla<br />'
        });
var format_ChaaralTroncaleInterconexionesBase_16 = new ol.format.GeoJSON();
var features_ChaaralTroncaleInterconexionesBase_16 = format_ChaaralTroncaleInterconexionesBase_16.readFeatures(json_ChaaralTroncaleInterconexionesBase_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChaaralTroncaleInterconexionesBase_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChaaralTroncaleInterconexionesBase_16.addFeatures(features_ChaaralTroncaleInterconexionesBase_16);
var lyr_ChaaralTroncaleInterconexionesBase_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChaaralTroncaleInterconexionesBase_16, 
                style: style_ChaaralTroncaleInterconexionesBase_16,
                popuplayertitle: "Chañaral - Troncal e Interconexiones Base",
                interactive: true,
                title: 'Chañaral - Troncal e Interconexiones Base'
            });
var format_016Caldera_17 = new ol.format.GeoJSON();
var features_016Caldera_17 = format_016Caldera_17.readFeatures(json_016Caldera_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_016Caldera_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_016Caldera_17.addFeatures(features_016Caldera_17);
var lyr_016Caldera_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_016Caldera_17, 
                style: style_016Caldera_17,
                popuplayertitle: "016. Caldera",
                interactive: true,
                title: '<img src="styles/legend/016Caldera_17.png" /> 016. Caldera'
            });
var format_015Chaaral_18 = new ol.format.GeoJSON();
var features_015Chaaral_18 = format_015Chaaral_18.readFeatures(json_015Chaaral_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_015Chaaral_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_015Chaaral_18.addFeatures(features_015Chaaral_18);
var lyr_015Chaaral_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_015Chaaral_18, 
                style: style_015Chaaral_18,
                popuplayertitle: "015. Chañaral",
                interactive: true,
                title: '<img src="styles/legend/015Chaaral_18.png" /> 015. Chañaral'
            });
var format_DiagramabaseCaldera_19 = new ol.format.GeoJSON();
var features_DiagramabaseCaldera_19 = format_DiagramabaseCaldera_19.readFeatures(json_DiagramabaseCaldera_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiagramabaseCaldera_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiagramabaseCaldera_19.addFeatures(features_DiagramabaseCaldera_19);
var lyr_DiagramabaseCaldera_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiagramabaseCaldera_19, 
                style: style_DiagramabaseCaldera_19,
                popuplayertitle: "Diagrama base Caldera",
                interactive: true,
                title: '<img src="styles/legend/DiagramabaseCaldera_19.png" /> Diagrama base Caldera'
            });
var format_DiagramabaseChaaral_20 = new ol.format.GeoJSON();
var features_DiagramabaseChaaral_20 = format_DiagramabaseChaaral_20.readFeatures(json_DiagramabaseChaaral_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiagramabaseChaaral_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiagramabaseChaaral_20.addFeatures(features_DiagramabaseChaaral_20);
var lyr_DiagramabaseChaaral_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiagramabaseChaaral_20, 
                style: style_DiagramabaseChaaral_20,
                popuplayertitle: "Diagrama base Chañaral",
                interactive: true,
                title: '<img src="styles/legend/DiagramabaseChaaral_20.png" /> Diagrama base Chañaral'
            });
var format_SubestacionesBase_21 = new ol.format.GeoJSON();
var features_SubestacionesBase_21 = format_SubestacionesBase_21.readFeatures(json_SubestacionesBase_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubestacionesBase_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubestacionesBase_21.addFeatures(features_SubestacionesBase_21);cluster_SubestacionesBase_21 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SubestacionesBase_21
});
var lyr_SubestacionesBase_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SubestacionesBase_21, 
                style: style_SubestacionesBase_21,
                popuplayertitle: "Subestaciones Base",
                interactive: false,
                title: '<img src="styles/legend/SubestacionesBase_21.png" /> Subestaciones Base'
            });
var group_SUBESTACIONES = new ol.layer.Group({
                                layers: [lyr_SubestacionesBase_21,],
                                fold: "open",
                                title: "SUBESTACIONES"});
var group_UNILINEALESYCUADRODECARGA = new ol.layer.Group({
                                layers: [lyr_DiagramabaseCaldera_19,lyr_DiagramabaseChaaral_20,],
                                fold: "open",
                                title: "UNILINEALES Y CUADRO DE CARGA"});
var group_SISTEMAS = new ol.layer.Group({
                                layers: [lyr_016Caldera_17,lyr_015Chaaral_18,],
                                fold: "open",
                                title: "SISTEMAS"});
var group_CASOBASE = new ol.layer.Group({
                                layers: [lyr_CalderaAlimentadoresMTBase_13,lyr_CalderaTroncaleInterconexionesBase_14,lyr_ChaaralAlimentadoresMTBase_15,lyr_ChaaralTroncaleInterconexionesBase_16,],
                                fold: "open",
                                title: "CASO BASE"});
var group_ANEXOALIMENTADORES = new ol.layer.Group({
                                layers: [lyr_Rodillobase_5,lyr_LaPuntillabase_6,lyr_IncadeOrobase_7,lyr_ElSalarbase_8,lyr_DiegodeAlmagrobase_9,lyr_DesiertoFloridobase_10,lyr_Barquitosbase_11,lyr_BahaInglesabase_12,],
                                fold: "open",
                                title: "ANEXO ALIMENTADORES"});
var group_ANEXOMAPAS = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleMaps_2,lyr_CartoLight_3,lyr_ComunasDelegacinChaaral_4,],
                                fold: "open",
                                title: "ANEXO MAPAS"});

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_GoogleMaps_2.setVisible(false);lyr_CartoLight_3.setVisible(true);lyr_ComunasDelegacinChaaral_4.setVisible(true);lyr_Rodillobase_5.setVisible(false);lyr_LaPuntillabase_6.setVisible(false);lyr_IncadeOrobase_7.setVisible(false);lyr_ElSalarbase_8.setVisible(false);lyr_DiegodeAlmagrobase_9.setVisible(false);lyr_DesiertoFloridobase_10.setVisible(false);lyr_Barquitosbase_11.setVisible(false);lyr_BahaInglesabase_12.setVisible(false);lyr_CalderaAlimentadoresMTBase_13.setVisible(false);lyr_CalderaTroncaleInterconexionesBase_14.setVisible(false);lyr_ChaaralAlimentadoresMTBase_15.setVisible(false);lyr_ChaaralTroncaleInterconexionesBase_16.setVisible(false);lyr_016Caldera_17.setVisible(true);lyr_015Chaaral_18.setVisible(true);lyr_DiagramabaseCaldera_19.setVisible(true);lyr_DiagramabaseChaaral_20.setVisible(true);lyr_SubestacionesBase_21.setVisible(true);
var layersList = [group_ANEXOMAPAS,group_ANEXOALIMENTADORES,group_CASOBASE,group_SISTEMAS,group_UNILINEALESYCUADRODECARGA,group_SUBESTACIONES];
lyr_ComunasDelegacinChaaral_4.set('fieldAliases', {'Delegacion': 'Delegacion', 'Zonal': 'Zonal', 'Comuna': 'Comuna', 'Región': 'Región', });
lyr_Rodillobase_5.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_LaPuntillabase_6.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_IncadeOrobase_7.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_ElSalarbase_8.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_DiegodeAlmagrobase_9.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_DesiertoFloridobase_10.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_Barquitosbase_11.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_BahaInglesabase_12.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_CalderaAlimentadoresMTBase_13.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_CalderaTroncaleInterconexionesBase_14.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_ChaaralAlimentadoresMTBase_15.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_ChaaralTroncaleInterconexionesBase_16.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_016Caldera_17.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_015Chaaral_18.set('fieldAliases', {'ID Interno': 'ID Interno', 'Comuna': 'Comuna', 'Aéreo/Sub': 'Aéreo/Sub', 'Fases': 'Fases', 'Empresa': 'Empresa', 'Conductor': 'Conductor', 'Alim': 'Alim', 'Largo [m]': 'Largo [m]', 'Material': 'Material', 'Propiedad': 'Propiedad', 'PP 1': 'PP 1', 'PP 2': 'PP 2', 'Aislación': 'Aislación', });
lyr_DiagramabaseCaldera_19.set('fieldAliases', {'Nombre': 'Nombre', 'Dirección': 'Dirección', });
lyr_DiagramabaseChaaral_20.set('fieldAliases', {'Nombre': 'Nombre', 'Dirección': 'Dirección', });
lyr_SubestacionesBase_21.set('fieldAliases', {'cod_comu0': 'cod_comu0', 'zona1': 'zona1', 'direccio2': 'direccio2', 'fecha_al3': 'fecha_al3', 'fecha_ba4': 'fecha_ba4', 'id_igea_5': 'id_igea_5', 'id_sap6': 'id_sap6', 'id_inter7': 'id_inter7', 'propieda8': 'propieda8', 'cen_nemo9': 'cen_nemo9', 'cen_nomb10': 'cen_nomb10', 'cen_prop11': 'cen_prop11', 'cen_id_s12': 'cen_id_s12', 'cen_id_t13': 'cen_id_t13', 'nombre_s14': 'nombre_s14', 'tension_15': 'tension_15', 'ubicacio16': 'ubicacio16', 'fecha_pu17': 'fecha_pu17', 'tipo_sis18': 'tipo_sis18', });
lyr_ComunasDelegacinChaaral_4.set('fieldImages', {'Delegacion': 'TextEdit', 'Zonal': 'TextEdit', 'Comuna': 'TextEdit', 'Región': 'TextEdit', });
lyr_Rodillobase_5.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_LaPuntillabase_6.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_IncadeOrobase_7.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_ElSalarbase_8.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_DiegodeAlmagrobase_9.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_DesiertoFloridobase_10.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_Barquitosbase_11.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_BahaInglesabase_12.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_CalderaAlimentadoresMTBase_13.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_CalderaTroncaleInterconexionesBase_14.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_ChaaralAlimentadoresMTBase_15.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_ChaaralTroncaleInterconexionesBase_16.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_016Caldera_17.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_015Chaaral_18.set('fieldImages', {'ID Interno': 'TextEdit', 'Comuna': 'TextEdit', 'Aéreo/Sub': 'TextEdit', 'Fases': 'TextEdit', 'Empresa': 'TextEdit', 'Conductor': 'TextEdit', 'Alim': 'TextEdit', 'Largo [m]': 'TextEdit', 'Material': 'TextEdit', 'Propiedad': 'TextEdit', 'PP 1': 'TextEdit', 'PP 2': 'TextEdit', 'Aislación': 'TextEdit', });
lyr_DiagramabaseCaldera_19.set('fieldImages', {'Nombre': 'TextEdit', 'Dirección': 'ExternalResource', });
lyr_DiagramabaseChaaral_20.set('fieldImages', {'Nombre': 'TextEdit', 'Dirección': 'ExternalResource', });
lyr_SubestacionesBase_21.set('fieldImages', {'cod_comu0': 'TextEdit', 'zona1': 'TextEdit', 'direccio2': 'TextEdit', 'fecha_al3': 'TextEdit', 'fecha_ba4': 'TextEdit', 'id_igea_5': 'TextEdit', 'id_sap6': 'TextEdit', 'id_inter7': 'TextEdit', 'propieda8': 'TextEdit', 'cen_nemo9': 'TextEdit', 'cen_nomb10': 'TextEdit', 'cen_prop11': 'TextEdit', 'cen_id_s12': 'TextEdit', 'cen_id_t13': 'TextEdit', 'nombre_s14': 'TextEdit', 'tension_15': 'TextEdit', 'ubicacio16': 'TextEdit', 'fecha_pu17': 'TextEdit', 'tipo_sis18': 'TextEdit', });
lyr_ComunasDelegacinChaaral_4.set('fieldLabels', {'Delegacion': 'inline label - visible with data', 'Zonal': 'inline label - visible with data', 'Comuna': 'inline label - visible with data', 'Región': 'inline label - visible with data', });
lyr_Rodillobase_5.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_LaPuntillabase_6.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_IncadeOrobase_7.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_ElSalarbase_8.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_DiegodeAlmagrobase_9.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_DesiertoFloridobase_10.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_Barquitosbase_11.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_BahaInglesabase_12.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_CalderaAlimentadoresMTBase_13.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_CalderaTroncaleInterconexionesBase_14.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_ChaaralAlimentadoresMTBase_15.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_ChaaralTroncaleInterconexionesBase_16.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_016Caldera_17.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_015Chaaral_18.set('fieldLabels', {'ID Interno': 'hidden field', 'Comuna': 'hidden field', 'Aéreo/Sub': 'hidden field', 'Fases': 'inline label - visible with data', 'Empresa': 'hidden field', 'Conductor': 'inline label - visible with data', 'Alim': 'inline label - visible with data', 'Largo [m]': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Propiedad': 'inline label - visible with data', 'PP 1': 'inline label - visible with data', 'PP 2': 'inline label - visible with data', 'Aislación': 'hidden field', });
lyr_DiagramabaseCaldera_19.set('fieldLabels', {'Nombre': 'hidden field', 'Dirección': 'no label', });
lyr_DiagramabaseChaaral_20.set('fieldLabels', {'Nombre': 'hidden field', 'Dirección': 'no label', });
lyr_SubestacionesBase_21.set('fieldLabels', {'cod_comu0': 'inline label - visible with data', 'zona1': 'inline label - visible with data', 'direccio2': 'inline label - visible with data', 'fecha_al3': 'inline label - visible with data', 'fecha_ba4': 'inline label - visible with data', 'id_igea_5': 'inline label - visible with data', 'id_sap6': 'inline label - visible with data', 'id_inter7': 'inline label - visible with data', 'propieda8': 'inline label - visible with data', 'cen_nemo9': 'inline label - visible with data', 'cen_nomb10': 'inline label - visible with data', 'cen_prop11': 'inline label - visible with data', 'cen_id_s12': 'inline label - visible with data', 'cen_id_t13': 'inline label - visible with data', 'nombre_s14': 'inline label - visible with data', 'tension_15': 'inline label - visible with data', 'ubicacio16': 'inline label - visible with data', 'fecha_pu17': 'inline label - visible with data', 'tipo_sis18': 'inline label - visible with data', });
lyr_SubestacionesBase_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});