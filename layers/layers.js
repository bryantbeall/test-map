var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1 = new ol.format.GeoJSON();
var features_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1 = format_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.readFeatures(json_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.addFeatures(features_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1);
var lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1, 
                style: style_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1,
                interactive: true,
                title: '<img src="styles/legend/day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.png" /> day3otlk_20220408_0730 day_3otlk_20220408_0730_prob'
            });
var format_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2 = new ol.format.GeoJSON();
var features_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2 = format_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.readFeatures(json_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.addFeatures(features_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2);
var lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2, 
                style: style_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2,
                interactive: true,
                title: '<img src="styles/legend/day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.png" /> day3otlk_20220408_0730 day_3otlk_20220408_0730_cat'
            });
var format_amenity_bbq_3 = new ol.format.GeoJSON();
var features_amenity_bbq_3 = format_amenity_bbq_3.readFeatures(json_amenity_bbq_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_bbq_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_bbq_3.addFeatures(features_amenity_bbq_3);
var lyr_amenity_bbq_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenity_bbq_3, 
                style: style_amenity_bbq_3,
                interactive: true,
                title: '<img src="styles/legend/amenity_bbq_3.png" /> amenity_bbq'
            });
var format_amenity_bbq_4 = new ol.format.GeoJSON();
var features_amenity_bbq_4 = format_amenity_bbq_4.readFeatures(json_amenity_bbq_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_bbq_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_bbq_4.addFeatures(features_amenity_bbq_4);
var lyr_amenity_bbq_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenity_bbq_4, 
                style: style_amenity_bbq_4,
                interactive: true,
                title: '<img src="styles/legend/amenity_bbq_4.png" /> amenity_bbq'
            });

lyr_OSMStandard_0.setVisible(true);lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.setVisible(true);lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.setVisible(true);lyr_amenity_bbq_3.setVisible(true);lyr_amenity_bbq_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1,lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2,lyr_amenity_bbq_3,lyr_amenity_bbq_4];
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_amenity_bbq_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'ele:ellipsoid': 'ele:ellipsoid', 'source:geometry': 'source:geometry', 'female': 'female', 'wikimedia_commons': 'wikimedia_commons', 'lit': 'lit', 'survey:date': 'survey:date', 'location': 'location', 'website': 'website', 'description': 'description', 'wheelchair': 'wheelchair', 'takeaway': 'takeaway', 'delivery': 'delivery', 'capacity': 'capacity', 'mapillary': 'mapillary', 'layer': 'layer', 'opening_hours': 'opening_hours', 'name': 'name', 'leisure': 'leisure', 'amenity_1': 'amenity_1', 'addr:street': 'addr:street', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'operator': 'operator', 'check_date': 'check_date', 'tents': 'tents', 'surface': 'surface', 'power_supply': 'power_supply', 'picnic_table': 'picnic_table', 'permanent_camping': 'permanent_camping', 'parking': 'parking', 'drinking_water': 'drinking_water', 'caravans': 'caravans', 'bbq:type': 'bbq:type', 'bbq': 'bbq', 'access': 'access', 'designation': 'designation', 'fuel': 'fuel', 'tourism': 'tourism', 'covered': 'covered', });
lyr_amenity_bbq_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'leisure': 'leisure', 'description': 'description', 'access': 'access', 'landuse': 'landuse', 'natural': 'natural', 'smoking': 'smoking', 'height': 'height', 'name': 'name', 'covered': 'covered', 'building': 'building', 'tourism': 'tourism', 'fuel': 'fuel', });
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_amenity_bbq_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'ele:ellipsoid': '', 'source:geometry': '', 'female': '', 'wikimedia_commons': '', 'lit': '', 'survey:date': '', 'location': '', 'website': '', 'description': '', 'wheelchair': '', 'takeaway': '', 'delivery': '', 'capacity': '', 'mapillary': '', 'layer': '', 'opening_hours': '', 'name': '', 'leisure': '', 'amenity_1': '', 'addr:street': '', 'addr:state': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'operator': '', 'check_date': '', 'tents': '', 'surface': '', 'power_supply': '', 'picnic_table': '', 'permanent_camping': '', 'parking': '', 'drinking_water': '', 'caravans': '', 'bbq:type': '', 'bbq': '', 'access': '', 'designation': '', 'fuel': '', 'tourism': '', 'covered': '', });
lyr_amenity_bbq_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'leisure': '', 'description': '', 'access': '', 'landuse': '', 'natural': '', 'smoking': '', 'height': '', 'name': '', 'covered': '', 'building': '', 'tourism': '', 'fuel': '', });
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_prob_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_day3otlk_20220408_0730day_3otlk_20220408_0730_cat_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_amenity_bbq_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'ele:ellipsoid': 'no label', 'source:geometry': 'no label', 'female': 'no label', 'wikimedia_commons': 'no label', 'lit': 'no label', 'survey:date': 'no label', 'location': 'no label', 'website': 'no label', 'description': 'no label', 'wheelchair': 'no label', 'takeaway': 'no label', 'delivery': 'no label', 'capacity': 'no label', 'mapillary': 'no label', 'layer': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'leisure': 'no label', 'amenity_1': 'no label', 'addr:street': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'operator': 'no label', 'check_date': 'no label', 'tents': 'no label', 'surface': 'no label', 'power_supply': 'no label', 'picnic_table': 'no label', 'permanent_camping': 'no label', 'parking': 'no label', 'drinking_water': 'no label', 'caravans': 'no label', 'bbq:type': 'no label', 'bbq': 'no label', 'access': 'no label', 'designation': 'no label', 'fuel': 'no label', 'tourism': 'no label', 'covered': 'no label', });
lyr_amenity_bbq_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'leisure': 'no label', 'description': 'no label', 'access': 'no label', 'landuse': 'no label', 'natural': 'no label', 'smoking': 'no label', 'height': 'no label', 'name': 'no label', 'covered': 'no label', 'building': 'no label', 'tourism': 'no label', 'fuel': 'no label', });
lyr_amenity_bbq_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});