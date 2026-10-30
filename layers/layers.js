var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GEOLOGY1_1 = new ol.format.GeoJSON();
var features_GEOLOGY1_1 = format_GEOLOGY1_1.readFeatures(json_GEOLOGY1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY1_1.addFeatures(features_GEOLOGY1_1);
var lyr_GEOLOGY1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY1_1, 
                style: style_GEOLOGY1_1,
                popuplayertitle: 'GEOLOGY1',
                interactive: false,
    title: 'GEOLOGY1<br />\
    <img src="styles/legend/GEOLOGY1_1_0.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY1_1_1.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY1_1_2.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/GEOLOGY1_1_3.png" /> <br />' });
var format_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_2 = format_GEOMORPHOLOGY_2.readFeatures(json_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_2.addFeatures(features_GEOMORPHOLOGY_2);
var lyr_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_2, 
                style: style_GEOMORPHOLOGY_2,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_1.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_2.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_3.png" /> <br />' });
var format_SOIL_3 = new ol.format.GeoJSON();
var features_SOIL_3 = format_SOIL_3.readFeatures(json_SOIL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_3.addFeatures(features_SOIL_3);
var lyr_SOIL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_3, 
                style: style_SOIL_3,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_3_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOIL_3_1.png" /> Laterite Soil<br />\
    <img src="styles/legend/SOIL_3_2.png" /> <br />' });
var format_BuiltUp_4 = new ol.format.GeoJSON();
var features_BuiltUp_4 = format_BuiltUp_4.readFeatures(json_BuiltUp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuiltUp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuiltUp_4.addFeatures(features_BuiltUp_4);
var lyr_BuiltUp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuiltUp_4, 
                style: style_BuiltUp_4,
                popuplayertitle: 'Built Up',
                interactive: false,
                title: '<img src="styles/legend/BuiltUp_4.png" /> Built Up'
            });
var lyr_DIGITALELEVATIONMAP_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIGITAL ELEVATION MAP<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_0.png" /> 0<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_1.png" /> 30<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_2.png" /> 61<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_3.png" /> 91<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_4.png" /> 121<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIGITALELEVATIONMAP_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8530953.715906, 1018812.202702, 8540601.405108, 1026548.348698]
        })
    });
var lyr_SLOPE_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_6_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_6_1.png" /> 34.366<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8530918.845595, 1018767.139386, 8540638.131967, 1026593.750324]
        })
    });
var lyr_HILLSHADE_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILLSHADE<br />\
    <img src="styles/legend/HILLSHADE_7_0.png" /> 1<br />\
    <img src="styles/legend/HILLSHADE_7_1.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8530953.715906, 1018812.202702, 8540601.405108, 1026548.348698]
        })
    });
var format_paLLICKAL_8 = new ol.format.GeoJSON();
var features_paLLICKAL_8 = format_paLLICKAL_8.readFeatures(json_paLLICKAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paLLICKAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paLLICKAL_8.addFeatures(features_paLLICKAL_8);
var lyr_paLLICKAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paLLICKAL_8, 
                style: style_paLLICKAL_8,
                popuplayertitle: 'paLLICKAL ',
                interactive: false,
                title: '<img src="styles/legend/paLLICKAL_8.png" /> paLLICKAL '
            });
var format_CONTOUR_9 = new ol.format.GeoJSON();
var features_CONTOUR_9 = format_CONTOUR_9.readFeatures(json_CONTOUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_9.addFeatures(features_CONTOUR_9);
var lyr_CONTOUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_9, 
                style: style_CONTOUR_9,
                popuplayertitle: 'CONTOUR',
                interactive: false,
                title: '<img src="styles/legend/CONTOUR_9.png" /> CONTOUR'
            });
var format_DRAINAGE_10 = new ol.format.GeoJSON();
var features_DRAINAGE_10 = format_DRAINAGE_10.readFeatures(json_DRAINAGE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_10.addFeatures(features_DRAINAGE_10);
var lyr_DRAINAGE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_10, 
                style: style_DRAINAGE_10,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_10_0.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_10_1.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_10_2.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_10_3.png" /> 5<br />' });
var format_ROAD_11 = new ol.format.GeoJSON();
var features_ROAD_11 = format_ROAD_11.readFeatures(json_ROAD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_11.addFeatures(features_ROAD_11);
var lyr_ROAD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_11, 
                style: style_ROAD_11,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_11.png" /> ROAD'
            });
var format_PALLICKALWARDSHP_12 = new ol.format.GeoJSON();
var features_PALLICKALWARDSHP_12 = format_PALLICKALWARDSHP_12.readFeatures(json_PALLICKALWARDSHP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PALLICKALWARDSHP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALLICKALWARDSHP_12.addFeatures(features_PALLICKALWARDSHP_12);
var lyr_PALLICKALWARDSHP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PALLICKALWARDSHP_12, 
                style: style_PALLICKALWARDSHP_12,
                popuplayertitle: 'PALLICKAL WARD SHP',
                interactive: true,
    title: 'PALLICKAL WARD SHP<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_0.png" /> ALUMMOODE<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_1.png" /> AMMAKANDAKARA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_2.png" /> CHALA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_3.png" /> CHENNAMPALLIL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_4.png" /> ELAMPALLIL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_5.png" /> KAITHACKAL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_6.png" /> KALLAPPANCHIRA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_7.png" /> KOLLAICKAL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_8.png" /> MALAMEKKARA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_9.png" /> MEKKUNNU<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_10.png" /> MELOOD<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_11.png" /> MULAMUKKU<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_12.png" /> MUNDAPPALLY<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_13.png" /> PALLICKAL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_14.png" /> PARAKKOOTTAM<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_15.png" /> PAZHAKULAM<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_16.png" /> PERINGANAD<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_17.png" /> POTHADI<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_18.png" /> PULLIPPARA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_19.png" /> THENGAMAM<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_20.png" /> THENGINAL<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_21.png" /> THENGUMTHARA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_22.png" /> THOTTAMUKKU<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_23.png" /> THOTTUVA<br />\
    <img src="styles/legend/PALLICKALWARDSHP_12_24.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GEOLOGY1_1.setVisible(true);lyr_GEOMORPHOLOGY_2.setVisible(true);lyr_SOIL_3.setVisible(true);lyr_BuiltUp_4.setVisible(true);lyr_DIGITALELEVATIONMAP_5.setVisible(true);lyr_SLOPE_6.setVisible(true);lyr_HILLSHADE_7.setVisible(true);lyr_paLLICKAL_8.setVisible(true);lyr_CONTOUR_9.setVisible(true);lyr_DRAINAGE_10.setVisible(true);lyr_ROAD_11.setVisible(true);lyr_PALLICKALWARDSHP_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GEOLOGY1_1,lyr_GEOMORPHOLOGY_2,lyr_SOIL_3,lyr_BuiltUp_4,lyr_DIGITALELEVATIONMAP_5,lyr_SLOPE_6,lyr_HILLSHADE_7,lyr_paLLICKAL_8,lyr_CONTOUR_9,lyr_DRAINAGE_10,lyr_ROAD_11,lyr_PALLICKALWARDSHP_12];
lyr_GEOLOGY1_1.set('fieldAliases', {'fid': 'fid', 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_SOIL_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_BuiltUp_4.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_paLLICKAL_8.set('fieldAliases', {'id': 'id', });
lyr_CONTOUR_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_DRAINAGE_10.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_ROAD_11.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_PALLICKALWARDSHP_12.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOLOGY1_1.set('fieldImages', {'fid': 'TextEdit', 'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_SOIL_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_BuiltUp_4.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_paLLICKAL_8.set('fieldImages', {'id': 'TextEdit', });
lyr_CONTOUR_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_DRAINAGE_10.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_ROAD_11.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_PALLICKALWARDSHP_12.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOLOGY1_1.set('fieldLabels', {'fid': 'no label', 'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOMORPHOLOGY_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_SOIL_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_BuiltUp_4.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_paLLICKAL_8.set('fieldLabels', {'id': 'no label', });
lyr_CONTOUR_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_DRAINAGE_10.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_ROAD_11.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_PALLICKALWARDSHP_12.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_PALLICKALWARDSHP_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});