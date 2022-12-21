var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Gemolong<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Gesi<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Gondang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Jenar<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" /> Kalijambe<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_5.png" /> Karangmalang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_6.png" /> Kedawung<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_7.png" /> Masaran<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_8.png" /> Miri<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_9.png" /> Mondokan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_10.png" /> Ngrampal<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_11.png" /> Plupuh<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_12.png" /> Sambirejo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_13.png" /> Sambungmacan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_14.png" /> Sidoharjo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_15.png" /> Sragen<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_16.png" /> Sukodono<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_17.png" /> Sumberlawang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_18.png" /> Tangen<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_19.png" /> Tanon<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_20.png" /> <br />'
        });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});