ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([93.820708, -15.575529, 142.171245, 10.644640]);
var wms_layers = [];

var format_adm_prov__0 = new ol.format.GeoJSON();
var features_adm_prov__0 = format_adm_prov__0.readFeatures(json_adm_prov__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_adm_prov__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov__0.addFeatures(features_adm_prov__0);
var lyr_adm_prov__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_prov__0, 
                style: style_adm_prov__0,
                popuplayertitle: "adm_prov_",
                interactive: true,
    title: 'adm_prov_<br />\
    <img src="styles/legend/adm_prov__0_0.png" /> DIBAWAH IR RATA-RATA<br />\
    <img src="styles/legend/adm_prov__0_1.png" /> DIATAS IR RATA-RATA<br />'
        });

lyr_adm_prov__0.setVisible(true);
var layersList = [lyr_adm_prov__0];
lyr_adm_prov__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'IR DBD': 'IR DBD', });
lyr_adm_prov__0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'IR DBD': 'TextEdit', });
lyr_adm_prov__0.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'header label - visible with data', 'IR DBD': 'inline label - visible with data', });
lyr_adm_prov__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});