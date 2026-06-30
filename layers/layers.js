var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_wilayah_1 = new ol.format.GeoJSON();
var features_wilayah_1 = format_wilayah_1.readFeatures(json_wilayah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayah_1.addFeatures(features_wilayah_1);
var lyr_wilayah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayah_1, 
                style: style_wilayah_1,
                popuplayertitle: 'wilayah',
                interactive: true,
                title: '<img src="styles/legend/wilayah_1.png" /> wilayah'
            });
var format_TitikRawan_2 = new ol.format.GeoJSON();
var features_TitikRawan_2 = format_TitikRawan_2.readFeatures(json_TitikRawan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRawan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRawan_2.addFeatures(features_TitikRawan_2);
var lyr_TitikRawan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRawan_2, 
                style: style_TitikRawan_2,
                popuplayertitle: 'Titik Rawan',
                interactive: true,
    title: 'Titik Rawan<br />\
    <img src="styles/legend/TitikRawan_2_0.png" /> 4 - 7,8<br />\
    <img src="styles/legend/TitikRawan_2_1.png" /> 7,8 - 9,6<br />\
    <img src="styles/legend/TitikRawan_2_2.png" /> 9,6 - 10<br />\
    <img src="styles/legend/TitikRawan_2_3.png" /> 10 - 13,2<br />\
    <img src="styles/legend/TitikRawan_2_4.png" /> 13,2 - 14<br />\
    <img src="styles/legend/TitikRawan_2_5.png" /> 14 - 15,8<br />\
    <img src="styles/legend/TitikRawan_2_6.png" /> 15,8 - 16,6<br />\
    <img src="styles/legend/TitikRawan_2_7.png" /> 16,6 - 19<br />\
    <img src="styles/legend/TitikRawan_2_8.png" /> 19 - 20<br />\
    <img src="styles/legend/TitikRawan_2_9.png" /> 20 - 24<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_wilayah_1.setVisible(true);lyr_TitikRawan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_wilayah_1,lyr_TitikRawan_2];
lyr_wilayah_1.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', });
lyr_TitikRawan_2.set('fieldAliases', {'No': 'No', 'Kecamatan': 'Kecamatan', 'Titik Lokasi': 'Titik Lokasi', 'X': 'X', 'Y': 'Y', 'PKL Liar': 'PKL Liar', 'Parkir Liar': 'Parkir Liar', 'reklame liar': 'reklame liar', 'Gelandangan/pengemis': 'Gelandangan/pengemis', 'Total': 'Total', });
lyr_wilayah_1.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_TitikRawan_2.set('fieldImages', {'No': 'Range', 'Kecamatan': 'TextEdit', 'Titik Lokasi': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PKL Liar': 'Range', 'Parkir Liar': 'Range', 'reklame liar': 'Range', 'Gelandangan/pengemis': 'Range', 'Total': 'Range', });
lyr_wilayah_1.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS': 'hidden field', });
lyr_TitikRawan_2.set('fieldLabels', {'No': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Titik Lokasi': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'PKL Liar': 'inline label - visible with data', 'Parkir Liar': 'inline label - visible with data', 'reklame liar': 'inline label - visible with data', 'Gelandangan/pengemis': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_TitikRawan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});