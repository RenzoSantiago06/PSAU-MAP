ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([120.675595, 15.204041, 120.731137, 15.229748]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OPENSPACE_3 = new ol.format.GeoJSON();
var features_OPENSPACE_3 = format_OPENSPACE_3.readFeatures(json_OPENSPACE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_OPENSPACE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPENSPACE_3.addFeatures(features_OPENSPACE_3);
var lyr_OPENSPACE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPENSPACE_3, 
                style: style_OPENSPACE_3,
                popuplayertitle: 'OPENSPACE ',
                interactive: false,
                title: '<img src="styles/legend/OPENSPACE_3.png" /> OPENSPACE '
            });
var format_ROADMAP_4 = new ol.format.GeoJSON();
var features_ROADMAP_4 = format_ROADMAP_4.readFeatures(json_ROADMAP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ROADMAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADMAP_4.addFeatures(features_ROADMAP_4);
var lyr_ROADMAP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADMAP_4, 
                style: style_ROADMAP_4,
                popuplayertitle: 'ROADMAP',
                interactive: false,
                title: '<img src="styles/legend/ROADMAP_4.png" /> ROADMAP'
            });
var format_PSAUASSUMEDBOUNDARYLINE_5 = new ol.format.GeoJSON();
var features_PSAUASSUMEDBOUNDARYLINE_5 = format_PSAUASSUMEDBOUNDARYLINE_5.readFeatures(json_PSAUASSUMEDBOUNDARYLINE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PSAUASSUMEDBOUNDARYLINE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSAUASSUMEDBOUNDARYLINE_5.addFeatures(features_PSAUASSUMEDBOUNDARYLINE_5);
var lyr_PSAUASSUMEDBOUNDARYLINE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSAUASSUMEDBOUNDARYLINE_5, 
                style: style_PSAUASSUMEDBOUNDARYLINE_5,
                popuplayertitle: 'PSAU ASSUMED BOUNDARY LINE',
                interactive: false,
                title: '<img src="styles/legend/PSAUASSUMEDBOUNDARYLINE_5.png" /> PSAU ASSUMED BOUNDARY LINE'
            });
var format_ADMINISTRATIVEBUILDINGS_6 = new ol.format.GeoJSON();
var features_ADMINISTRATIVEBUILDINGS_6 = format_ADMINISTRATIVEBUILDINGS_6.readFeatures(json_ADMINISTRATIVEBUILDINGS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRATIVEBUILDINGS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRATIVEBUILDINGS_6.addFeatures(features_ADMINISTRATIVEBUILDINGS_6);
var lyr_ADMINISTRATIVEBUILDINGS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRATIVEBUILDINGS_6, 
                style: style_ADMINISTRATIVEBUILDINGS_6,
                popuplayertitle: 'ADMINISTRATIVE BUILDINGS',
                interactive: true,
    title: 'ADMINISTRATIVE BUILDINGS<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_0.png" /> ADMINISTRATION BUILDING<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_1.png" /> ADMISSION AND REGISTRATION BUILDING<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_2.png" /> ALIAS R&DE CENTER<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_3.png" /> ALUMNI BUILDING<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_4.png" /> ANIMAL DISEASE DIAGNOSTICS RESEARCH FACILITY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_5.png" /> DOST PHIVOLCS<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_6.png" /> HON. RAFAEL L/ LAZATIN MEMORIAL AUDIO VISUAL CENTER<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_7.png" /> INFORMATION COMMUNICATION TECHNOLOGY RESEARCH AND DEVELOPMENT FACILITY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_8.png" /> INSTITUTE OF GRADUATE STUDIES<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_9.png" /> INTELLECTUAL PROPERTY AND TECHNOLOGY BUSINESS MANAGEMENT OFFICE<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_10.png" /> NUTRACEUTICAL R&D FACILITY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_11.png" /> NUTRACEUTICAL RESEARCH LABORATORY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_12.png" /> OFFICE OF BUSINESS AFFAIRS - POULTRY PROJECT<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_13.png" /> OFFICE OF STUDENT SERVICES AND DEVELOPMENT (OSSD)<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_14.png" /> PAC-BFAR PROVINCIAL SATELLITE TILAPIA HATCHERY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_15.png" /> PSAU ARGI-BUSINESS CENTER<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_16.png" /> PSAU E-LIBRARY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_17.png" /> PSAU MAIN LIBRARY<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_18.png" /> PSAU-TVET CENTER<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_19.png" /> RESEARCH EXTENSION AND TRAINING<br />\
    <img src="styles/legend/ADMINISTRATIVEBUILDINGS_6_20.png" /> UNIVERSITY CHAPEL<br />'
        });
var format_UNIVERSITYSERVICES_7 = new ol.format.GeoJSON();
var features_UNIVERSITYSERVICES_7 = format_UNIVERSITYSERVICES_7.readFeatures(json_UNIVERSITYSERVICES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UNIVERSITYSERVICES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIVERSITYSERVICES_7.addFeatures(features_UNIVERSITYSERVICES_7);
var lyr_UNIVERSITYSERVICES_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNIVERSITYSERVICES_7, 
                style: style_UNIVERSITYSERVICES_7,
                popuplayertitle: 'UNIVERSITY SERVICES',
                interactive: true,
    title: 'UNIVERSITY SERVICES<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_0.png" /> BIO-RESOURCE PROCESSING CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_1.png" /> BREN. Z GUAIO MEMORIAL MULTIPURPOSE CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_2.png" /> CAS - CANTEEN<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_3.png" /> CLONAL NURSERY<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_4.png" /> COFFEE NURSERY<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_5.png" /> CROP PROCESSING LABORATORY<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_6.png" /> DELIVERY, INSPECTION AND TESTING OF FARM MACHINERIES<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_7.png" /> FARMERS MEDICAL CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_8.png" /> FARMERS TRAINING CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_9.png" /> GENERAL AND AUXILIARY SERVICES<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_10.png" /> GENERAL AND AUXILIARY SERVICES EXTENSION<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_11.png" /> GUARD HOUSE GATE 1<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_12.png" /> GUARD HOUSE GATE 2<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_13.png" /> GUARD HOUSE GATE 3<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_14.png" /> JOSE S. LAPID GYMNASIUM<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_15.png" /> JUANITA NEPOMUCENO MEMORIAL STADIUM<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_16.png" /> MEAT CUTTING PLANT AND COLD STORAGE WAREHOUSE<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_17.png" /> MULBERRY TEA FACTORY<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_18.png" /> PSAU BEACH VOLLEYBALL COURT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_19.png" /> PSAU GRANDSTAND OVAL<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_20.png" /> PSAU GRANDSTAND RESTROOM<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_21.png" /> PSAU LAGOON<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_22.png" /> PSAU MUSHROOM CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_23.png" /> PSAU MUSIC ROOM<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_24.png" /> PSAU OLD BASKETBALL COURT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_25.png" /> PSAU OLD VOLLEYBALL COURT 1<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_26.png" /> PSAU OLD VOLLEYBALL COURT 2<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_27.png" /> PSAU SEPAK TAKRAW COURT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_28.png" /> PSAU SMALL LUMBERING<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_29.png" /> PSAU SMART LEARNING HUB<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_30.png" /> PSAU SOCCER FIELD<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_31.png" /> PSAU TENNIS COURT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_32.png" /> PSAU TERMINAL<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_33.png" /> PSAU WATER REFILLING STATION<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_34.png" /> RICE MACHINERY OPERATIONS CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_35.png" /> SECURITY UNIT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_36.png" /> SEN. MANUEL "LITO" LAPID COVERED COURT<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_37.png" /> SHARED-SERVICE FACILITY (SSF) FOR BAMBOO 1<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_38.png" /> SHARED-SERVICE FACILITY (SSF) FOR BAMBOO 2<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_39.png" /> UNIVERSITY FOOD CENTER<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_40.png" /> PSAU ARCHERY<br />\
    <img src="styles/legend/UNIVERSITYSERVICES_7_41.png" /> PSAU FOOD STALLS<br />'
        });
var format_DORMITORY_8 = new ol.format.GeoJSON();
var features_DORMITORY_8 = format_DORMITORY_8.readFeatures(json_DORMITORY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DORMITORY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DORMITORY_8.addFeatures(features_DORMITORY_8);
var lyr_DORMITORY_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DORMITORY_8, 
                style: style_DORMITORY_8,
                popuplayertitle: 'DORMITORY',
                interactive: true,
    title: 'DORMITORY<br />\
    <img src="styles/legend/DORMITORY_8_0.png" /> LADIES\' DORMITORY<br />\
    <img src="styles/legend/DORMITORY_8_1.png" /> LADIES\' DORMITORY AND UNIVERSITY HOSTEL<br />\
    <img src="styles/legend/DORMITORY_8_2.png" /> MANSION DORMITORY<br />\
    <img src="styles/legend/DORMITORY_8_3.png" /> PSAU MEN\'S DORMITORY NEW BUILDING<br />\
    <img src="styles/legend/DORMITORY_8_4.png" /> PSAU\'S MEN\'S DORMITORY<br />'
        });
var format_ACADEMICBUILDING_9 = new ol.format.GeoJSON();
var features_ACADEMICBUILDING_9 = format_ACADEMICBUILDING_9.readFeatures(json_ACADEMICBUILDING_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ACADEMICBUILDING_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADEMICBUILDING_9.addFeatures(features_ACADEMICBUILDING_9);
var lyr_ACADEMICBUILDING_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACADEMICBUILDING_9, 
                style: style_ACADEMICBUILDING_9,
                popuplayertitle: 'ACADEMIC BUILDING ',
                interactive: true,
    title: 'ACADEMIC BUILDING <br />\
    <img src="styles/legend/ACADEMICBUILDING_9_0.png" /> AGRICULTURAL SCIENCE HIGH SCHOOL BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_1.png" /> COLLEGE OF AGRICULTURAL SYSTEM AND TECHNOLOGY<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_2.png" /> COLLEGE OF ARTS AND SCIENCES<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_3.png" /> COLLEGE OF EDUCATION<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_4.png" /> COLLEGE OF ENGINEERING AND COMPUTER STUDIES<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_5.png" /> COLLEGE OF ENGINEERING AND COMPUTER STUDIES - IT BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_6.png" /> COLLEGE OF VETERINARY MEDICINE<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_7.png" /> COLLEGE OF VETERINARY MEDICINE (ANNEX BUILDING)<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_8.png" /> CROP SCIENCE DEPARTMENT<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_9.png" /> DEPARTMENT OF ANIMAL SCIENCE<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_10.png" /> DEPARTMENT OF FISHERIES SCIENCE<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_11.png" /> DEPARTMENT OF FORESTRY AND AGROFORESTRY<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_12.png" /> HIGHER EDUCATION BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_13.png" /> HIGHER ENGINEERING BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_14.png" /> INNOVATION BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_15.png" /> LABORATORY ANIMAL RESEARCH CENTER (LARC)<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_16.png" /> COLLEGE OF BUSINESS, ECONOMICS, AND ENTREPRENEURSHIP BUILDING<br />\
    <img src="styles/legend/ACADEMICBUILDING_9_17.png" /> COLLEGE OF BUSINESS, ECONOMICS, AND ENTREPRENEURSHIP EXTENSION BUILDING<br />'
        });
var format_ALLBUILDINGSFACILITY_10 = new ol.format.GeoJSON();
var features_ALLBUILDINGSFACILITY_10 = format_ALLBUILDINGSFACILITY_10.readFeatures(json_ALLBUILDINGSFACILITY_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ALLBUILDINGSFACILITY_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALLBUILDINGSFACILITY_10.addFeatures(features_ALLBUILDINGSFACILITY_10);
var lyr_ALLBUILDINGSFACILITY_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALLBUILDINGSFACILITY_10, 
                style: style_ALLBUILDINGSFACILITY_10,
                popuplayertitle: 'ALL BUILDINGS/FACILITY',
                interactive: true,
    title: 'ALL BUILDINGS/FACILITY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_0.png" /> ADMINISTRATION BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_1.png" /> ADMISSION AND REGISTRATION BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_2.png" /> AGRICULTURAL SCIENCE HIGH SCHOOL BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_3.png" /> ALIAS R&DE CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_4.png" /> ALUMNI BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_5.png" /> ANIMAL DISEASE DIAGNOSTICS RESEARCH FACILITY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_6.png" /> BIO-RESOURCE PROCESSING CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_7.png" /> BREN. Z GUAIO MEMORIAL MULTIPURPOSE CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_8.png" /> CLONAL NURSERY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_9.png" /> COFFEE NURSERY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_10.png" /> COLLEGE OF AGRICULTURAL SYSTEM AND TECHNOLOGY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_11.png" /> COLLEGE OF ARTS AND SCIENCES<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_12.png" /> COLLEGE OF EDUCATION<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_13.png" /> COLLEGE OF ENGINEERING AND COMPUTER STUDIES<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_14.png" /> COLLEGE OF ENGINEERING AND COMPUTER STUDIES - IT BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_15.png" /> COLLEGE OF VETERINARY MEDICINE<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_16.png" /> COLLEGE OF VETERINARY MEDICINE (ANNEX BUILDING)<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_17.png" /> CROP PROCESSING LABORATORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_18.png" /> CROP SCIENCE DEPARTMENT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_19.png" /> DELIVERY, INSPECTION AND TESTING OF FARM MACHINERIES<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_20.png" /> DEPARTMENT OF ANIMAL SCIENCE<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_21.png" /> DEPARTMENT OF FISHERIES SCIENCE<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_22.png" /> DEPARTMENT OF FORESTRY AND AGROFORESTRY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_23.png" /> DOST PHIVOLCS<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_24.png" /> FARMERS MEDICAL CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_25.png" /> FARMERS TRAINING CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_26.png" /> GENERAL AND AUXILIARY SERVICES<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_27.png" /> GENERAL AND AUXILIARY SERVICES EXTENSION<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_28.png" /> GUARD HOUSE GATE 1<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_29.png" /> GUARD HOUSE GATE 2<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_30.png" /> GUARD HOUSE GATE 3<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_31.png" /> HIGHER EDUCATION BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_32.png" /> HIGHER ENGINEERING BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_33.png" /> HON. RAFAEL L/ LAZATIN MEMORIAL AUDIO VISUAL CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_34.png" /> INFORMATION COMMUNICATION TECHNOLOGY RESEARCH AND DEVELOPMENT FACILITY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_35.png" /> INNOVATION BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_36.png" /> INSTITUTE OF GRADUATE STUDIES<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_37.png" /> INTELLECTUAL PROPERTY AND TECHNOLOGY BUSINESS MANAGEMENT OFFICE<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_38.png" /> JOSE S. LAPID GYMNASIUM<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_39.png" /> JUANITA NEPOMUCENO MEMORIAL STADIUM<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_40.png" /> LABORATORY ANIMAL RESEARCH CENTER (LARC)<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_41.png" /> LADIES\' DORMITORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_42.png" /> LADIES\' DORMITORY AND UNIVERSITY HOSTEL<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_43.png" /> MANSION DORMITORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_44.png" /> MEAT CUTTING PLANT AND COLD STORAGE WAREHOUSE<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_45.png" /> MULBERRY TEA FACTORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_46.png" /> NUTRACEUTICAL R&D FACILITY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_47.png" /> NUTRACEUTICAL RESEARCH LABORATORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_48.png" /> OFFICE OF BUSINESS AFFAIRS - POULTRY PROJECT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_49.png" /> OFFICE OF STUDENT SERVICES AND DEVELOPMENT (OSSD)<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_50.png" /> PAC-BFAR PROVINCIAL SATELLITE TILAPIA HATCHERY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_51.png" /> PSAU ARGI-BUSINESS CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_52.png" /> PSAU BEACH VOLLEYBALL COURT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_53.png" /> PSAU E-LIBRARY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_54.png" /> PSAU GRANDSTAND OVAL<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_55.png" /> PSAU GRANDSTAND RESTROOM<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_56.png" /> PSAU LAGOON<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_57.png" /> PSAU MAIN LIBRARY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_58.png" /> PSAU MEN\'S DORMITORY NEW BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_59.png" /> PSAU MUSHROOM CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_60.png" /> PSAU MUSIC ROOM<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_61.png" /> PSAU OLD BASKETBALL COURT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_62.png" /> PSAU OLD VOLLEYBALL COURT 1<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_63.png" /> PSAU OLD VOLLEYBALL COURT 2<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_64.png" /> PSAU SEPAK TAKRAW COURT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_65.png" /> PSAU SMALL LUMBERING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_66.png" /> PSAU SMART LEARNING HUB<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_67.png" /> PSAU SOCCER FIELD<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_68.png" /> PSAU TENNIS COURT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_69.png" /> PSAU TERMINAL<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_70.png" /> PSAU WATER REFILLING STATION<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_71.png" /> PSAU-TVET CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_72.png" /> PSAU\'S MEN\'S DORMITORY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_73.png" /> RESEARCH EXTENSION AND TRAINING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_74.png" /> RICE MACHINERY OPERATIONS CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_75.png" /> SECURITY UNIT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_76.png" /> SEN. MANUEL "LITO" LAPID COVERED COURT<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_77.png" /> SEN. RENATO L. CAYETANO FOOD PROCESSING CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_78.png" /> SHARED-SERVICE FACILITY (SSF) FOR BAMBOO 1<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_79.png" /> SHARED-SERVICE FACILITY (SSF) FOR BAMBOO 2<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_80.png" /> UNIVERSITY CHAPEL<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_81.png" /> UNIVERSITY FOOD CENTER<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_82.png" /> PSAU ARCHERY<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_83.png" /> COLLEGE OF BUSINESS, ECONOMICS, AND ENTREPRENEURSHIP BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_84.png" /> COLLEGE OF BUSINESS, ECONOMICS, AND ENTREPRENEURSHIP EXTENSION BUILDING<br />\
    <img src="styles/legend/ALLBUILDINGSFACILITY_10_85.png" /> PSAU FOOD STALLS<br />'
        });
var format_GEOTAGGEDPHOTOS_11 = new ol.format.GeoJSON();
var features_GEOTAGGEDPHOTOS_11 = format_GEOTAGGEDPHOTOS_11.readFeatures(json_GEOTAGGEDPHOTOS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GEOTAGGEDPHOTOS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOTAGGEDPHOTOS_11.addFeatures(features_GEOTAGGEDPHOTOS_11);
var lyr_GEOTAGGEDPHOTOS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOTAGGEDPHOTOS_11, 
                style: style_GEOTAGGEDPHOTOS_11,
                popuplayertitle: 'GEOTAGGED PHOTOS',
                interactive: true,
                title: '<img src="styles/legend/GEOTAGGEDPHOTOS_11.png" /> GEOTAGGED PHOTOS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_OPENSPACE_3.setVisible(true);lyr_ROADMAP_4.setVisible(true);lyr_PSAUASSUMEDBOUNDARYLINE_5.setVisible(true);lyr_ADMINISTRATIVEBUILDINGS_6.setVisible(true);lyr_UNIVERSITYSERVICES_7.setVisible(true);lyr_DORMITORY_8.setVisible(true);lyr_ACADEMICBUILDING_9.setVisible(true);lyr_ALLBUILDINGSFACILITY_10.setVisible(true);lyr_GEOTAGGEDPHOTOS_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_OPENSPACE_3,lyr_ROADMAP_4,lyr_PSAUASSUMEDBOUNDARYLINE_5,lyr_ADMINISTRATIVEBUILDINGS_6,lyr_UNIVERSITYSERVICES_7,lyr_DORMITORY_8,lyr_ACADEMICBUILDING_9,lyr_ALLBUILDINGSFACILITY_10,lyr_GEOTAGGEDPHOTOS_11];
lyr_OPENSPACE_3.set('fieldAliases', {'id': 'id', });
lyr_ROADMAP_4.set('fieldAliases', {'id': 'id', });
lyr_PSAUASSUMEDBOUNDARYLINE_5.set('fieldAliases', {'id': 'id', });
lyr_ADMINISTRATIVEBUILDINGS_6.set('fieldAliases', {'id': 'id', 'BUILDING': 'BUILDING', 'AREA': 'AREA', });
lyr_UNIVERSITYSERVICES_7.set('fieldAliases', {'id': 'id', 'BUILDING': 'BUILDING', 'AREA': 'AREA', });
lyr_DORMITORY_8.set('fieldAliases', {'id': 'id', 'BUILDING': 'BUILDING', 'AREA': 'AREA', });
lyr_ACADEMICBUILDING_9.set('fieldAliases', {'id': 'id', 'BUILDING': 'BUILDING', 'AREA': 'AREA', });
lyr_ALLBUILDINGSFACILITY_10.set('fieldAliases', {'id': 'id', 'BUILDING': 'BUILDING', 'AREA': 'AREA', });
lyr_GEOTAGGEDPHOTOS_11.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'narrative': 'narrative', });
lyr_OPENSPACE_3.set('fieldImages', {'id': '', });
lyr_ROADMAP_4.set('fieldImages', {'id': 'TextEdit', });
lyr_PSAUASSUMEDBOUNDARYLINE_5.set('fieldImages', {'id': 'TextEdit', });
lyr_ADMINISTRATIVEBUILDINGS_6.set('fieldImages', {'id': 'TextEdit', 'BUILDING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_UNIVERSITYSERVICES_7.set('fieldImages', {'id': 'TextEdit', 'BUILDING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_DORMITORY_8.set('fieldImages', {'id': 'TextEdit', 'BUILDING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_ACADEMICBUILDING_9.set('fieldImages', {'id': 'TextEdit', 'BUILDING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_ALLBUILDINGSFACILITY_10.set('fieldImages', {'id': 'TextEdit', 'BUILDING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_GEOTAGGEDPHOTOS_11.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', 'narrative': 'TextEdit', });
lyr_OPENSPACE_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ROADMAP_4.set('fieldLabels', {'id': 'no label', });
lyr_PSAUASSUMEDBOUNDARYLINE_5.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ADMINISTRATIVEBUILDINGS_6.set('fieldLabels', {'id': 'inline label - visible with data', 'BUILDING': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_UNIVERSITYSERVICES_7.set('fieldLabels', {'id': 'inline label - visible with data', 'BUILDING': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_DORMITORY_8.set('fieldLabels', {'id': 'inline label - visible with data', 'BUILDING': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_ACADEMICBUILDING_9.set('fieldLabels', {'id': 'inline label - visible with data', 'BUILDING': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_ALLBUILDINGSFACILITY_10.set('fieldLabels', {'id': 'inline label - visible with data', 'BUILDING': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_GEOTAGGEDPHOTOS_11.set('fieldLabels', {'photo': 'inline label - visible with data', 'filename': 'inline label - visible with data', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'timestamp': 'no label', 'narrative': 'inline label - visible with data', });
lyr_GEOTAGGEDPHOTOS_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});