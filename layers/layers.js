var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BATASADMINISTRASI_1 = new ol.format.GeoJSON();
var features_BATASADMINISTRASI_1 = format_BATASADMINISTRASI_1.readFeatures(json_BATASADMINISTRASI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASADMINISTRASI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASI_1.addFeatures(features_BATASADMINISTRASI_1);
var lyr_BATASADMINISTRASI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASADMINISTRASI_1, 
                style: style_BATASADMINISTRASI_1,
                interactive: true,
    title: 'BATAS ADMINISTRASI<br />\
    <img src="styles/legend/BATASADMINISTRASI_1_0.png" /> JAKARTA BARAT<br />\
    <img src="styles/legend/BATASADMINISTRASI_1_1.png" /> JAKARTA PUSAT<br />\
    <img src="styles/legend/BATASADMINISTRASI_1_2.png" /> JAKARTA SELATAN<br />\
    <img src="styles/legend/BATASADMINISTRASI_1_3.png" /> JAKARTA TIMUR<br />\
    <img src="styles/legend/BATASADMINISTRASI_1_4.png" /> JAKARTA UTARA<br />'
        });
var format_JalurTransjakarta_2 = new ol.format.GeoJSON();
var features_JalurTransjakarta_2 = format_JalurTransjakarta_2.readFeatures(json_JalurTransjakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurTransjakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurTransjakarta_2.addFeatures(features_JalurTransjakarta_2);
var lyr_JalurTransjakarta_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalurTransjakarta_2, 
                style: style_JalurTransjakarta_2,
                interactive: true,
                title: '<img src="styles/legend/JalurTransjakarta_2.png" /> Jalur Transjakarta'
            });
var format_BufferHalteTransJakarta_3 = new ol.format.GeoJSON();
var features_BufferHalteTransJakarta_3 = format_BufferHalteTransJakarta_3.readFeatures(json_BufferHalteTransJakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferHalteTransJakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferHalteTransJakarta_3.addFeatures(features_BufferHalteTransJakarta_3);
var lyr_BufferHalteTransJakarta_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BufferHalteTransJakarta_3, 
                style: style_BufferHalteTransJakarta_3,
                interactive: true,
                title: '<img src="styles/legend/BufferHalteTransJakarta_3.png" /> Buffer Halte TransJakarta'
            });
var format_HalteTransJakarta_4 = new ol.format.GeoJSON();
var features_HalteTransJakarta_4 = format_HalteTransJakarta_4.readFeatures(json_HalteTransJakarta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteTransJakarta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteTransJakarta_4.addFeatures(features_HalteTransJakarta_4);
var lyr_HalteTransJakarta_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HalteTransJakarta_4, 
                style: style_HalteTransJakarta_4,
                interactive: true,
                title: '<img src="styles/legend/HalteTransJakarta_4.png" /> Halte TransJakarta'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_BATASADMINISTRASI_1.setVisible(true);lyr_JalurTransjakarta_2.setVisible(true);lyr_BufferHalteTransJakarta_3.setVisible(true);lyr_HalteTransJakarta_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_BATASADMINISTRASI_1,lyr_JalurTransjakarta_2,lyr_BufferHalteTransJakarta_3,lyr_HalteTransJakarta_4];
lyr_BATASADMINISTRASI_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JalurTransjakarta_2.set('fieldAliases', {'KORIDOR': 'KORIDOR', 'JURUSAN': 'JURUSAN', });
lyr_BufferHalteTransJakarta_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JENIS': 'JENIS', 'Alamat': 'Alamat', 'Koridor': 'Koridor', });
lyr_HalteTransJakarta_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JENIS': 'JENIS', 'Alamat': 'Alamat', 'Koridor': 'Koridor', });
lyr_BATASADMINISTRASI_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JalurTransjakarta_2.set('fieldImages', {'KORIDOR': '', 'JURUSAN': '', });
lyr_BufferHalteTransJakarta_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JENIS': '', 'Alamat': '', 'Koridor': '', });
lyr_HalteTransJakarta_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JENIS': '', 'Alamat': '', 'Koridor': '', });
lyr_BATASADMINISTRASI_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JalurTransjakarta_2.set('fieldLabels', {'KORIDOR': 'no label', 'JURUSAN': 'no label', });
lyr_BufferHalteTransJakarta_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JENIS': 'no label', 'Alamat': 'no label', 'Koridor': 'no label', });
lyr_HalteTransJakarta_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JENIS': 'no label', 'Alamat': 'no label', 'Koridor': 'no label', });
lyr_HalteTransJakarta_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});