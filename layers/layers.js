var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Iriondo_1 = new ol.format.GeoJSON();
var features_Iriondo_1 = format_Iriondo_1.readFeatures(json_Iriondo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iriondo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iriondo_1.addFeatures(features_Iriondo_1);
var lyr_Iriondo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iriondo_1, 
                style: style_Iriondo_1,
                popuplayertitle: 'Iriondo',
                interactive: false,
                title: '<img src="styles/legend/Iriondo_1.png" /> Iriondo'
            });
var format_Huellashistricoterritoriales_2 = new ol.format.GeoJSON();
var features_Huellashistricoterritoriales_2 = format_Huellashistricoterritoriales_2.readFeatures(json_Huellashistricoterritoriales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellashistricoterritoriales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellashistricoterritoriales_2.addFeatures(features_Huellashistricoterritoriales_2);
var lyr_Huellashistricoterritoriales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellashistricoterritoriales_2, 
                style: style_Huellashistricoterritoriales_2,
                popuplayertitle: 'Huellas histórico-territoriales',
                interactive: true,
                title: '<img src="styles/legend/Huellashistricoterritoriales_2.png" /> Huellas histórico-territoriales'
            });
var format_Huellasdelaenergia_3 = new ol.format.GeoJSON();
var features_Huellasdelaenergia_3 = format_Huellasdelaenergia_3.readFeatures(json_Huellasdelaenergia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelaenergia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelaenergia_3.addFeatures(features_Huellasdelaenergia_3);
var lyr_Huellasdelaenergia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelaenergia_3, 
                style: style_Huellasdelaenergia_3,
                popuplayertitle: 'Huellas de la energia',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelaenergia_3.png" /> Huellas de la energia'
            });
var format_Huellasdelainfraestructuraylasinstituciones_4 = new ol.format.GeoJSON();
var features_Huellasdelainfraestructuraylasinstituciones_4 = format_Huellasdelainfraestructuraylasinstituciones_4.readFeatures(json_Huellasdelainfraestructuraylasinstituciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelainfraestructuraylasinstituciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelainfraestructuraylasinstituciones_4.addFeatures(features_Huellasdelainfraestructuraylasinstituciones_4);
var lyr_Huellasdelainfraestructuraylasinstituciones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelainfraestructuraylasinstituciones_4, 
                style: style_Huellasdelainfraestructuraylasinstituciones_4,
                popuplayertitle: 'Huellas de la infraestructura y las instituciones',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelainfraestructuraylasinstituciones_4.png" /> Huellas de la infraestructura y las instituciones'
            });
var format_Huellasdelaidentidadylacelebracin_5 = new ol.format.GeoJSON();
var features_Huellasdelaidentidadylacelebracin_5 = format_Huellasdelaidentidadylacelebracin_5.readFeatures(json_Huellasdelaidentidadylacelebracin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelaidentidadylacelebracin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelaidentidadylacelebracin_5.addFeatures(features_Huellasdelaidentidadylacelebracin_5);
var lyr_Huellasdelaidentidadylacelebracin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelaidentidadylacelebracin_5, 
                style: style_Huellasdelaidentidadylacelebracin_5,
                popuplayertitle: 'Huellas de la identidad y la celebración',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelaidentidadylacelebracin_5.png" /> Huellas de la identidad y la celebración'
            });
var format_Huellasdefamiliasypersonalidades_6 = new ol.format.GeoJSON();
var features_Huellasdefamiliasypersonalidades_6 = format_Huellasdefamiliasypersonalidades_6.readFeatures(json_Huellasdefamiliasypersonalidades_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdefamiliasypersonalidades_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdefamiliasypersonalidades_6.addFeatures(features_Huellasdefamiliasypersonalidades_6);
var lyr_Huellasdefamiliasypersonalidades_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdefamiliasypersonalidades_6, 
                style: style_Huellasdefamiliasypersonalidades_6,
                popuplayertitle: 'Huellas de familias y personalidades-',
                interactive: true,
                title: '<img src="styles/legend/Huellasdefamiliasypersonalidades_6.png" /> Huellas de familias y personalidades-'
            });
var format_Huellasdeltrabajo_7 = new ol.format.GeoJSON();
var features_Huellasdeltrabajo_7 = format_Huellasdeltrabajo_7.readFeatures(json_Huellasdeltrabajo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdeltrabajo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdeltrabajo_7.addFeatures(features_Huellasdeltrabajo_7);
var lyr_Huellasdeltrabajo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdeltrabajo_7, 
                style: style_Huellasdeltrabajo_7,
                popuplayertitle: 'Huellas del trabajo ',
                interactive: true,
                title: '<img src="styles/legend/Huellasdeltrabajo_7.png" /> Huellas del trabajo '
            });
var format_Huellasdeltransporteylascomunicaciones_8 = new ol.format.GeoJSON();
var features_Huellasdeltransporteylascomunicaciones_8 = format_Huellasdeltransporteylascomunicaciones_8.readFeatures(json_Huellasdeltransporteylascomunicaciones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdeltransporteylascomunicaciones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdeltransporteylascomunicaciones_8.addFeatures(features_Huellasdeltransporteylascomunicaciones_8);
var lyr_Huellasdeltransporteylascomunicaciones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdeltransporteylascomunicaciones_8, 
                style: style_Huellasdeltransporteylascomunicaciones_8,
                popuplayertitle: 'Huellas del transporte y las comunicaciones',
                interactive: true,
                title: '<img src="styles/legend/Huellasdeltransporteylascomunicaciones_8.png" /> Huellas del transporte y las comunicaciones'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Iriondo_1.setVisible(true);lyr_Huellashistricoterritoriales_2.setVisible(true);lyr_Huellasdelaenergia_3.setVisible(true);lyr_Huellasdelainfraestructuraylasinstituciones_4.setVisible(true);lyr_Huellasdelaidentidadylacelebracin_5.setVisible(true);lyr_Huellasdefamiliasypersonalidades_6.setVisible(true);lyr_Huellasdeltrabajo_7.setVisible(true);lyr_Huellasdeltransporteylascomunicaciones_8.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Iriondo_1,lyr_Huellashistricoterritoriales_2,lyr_Huellasdelaenergia_3,lyr_Huellasdelainfraestructuraylasinstituciones_4,lyr_Huellasdelaidentidadylacelebracin_5,lyr_Huellasdefamiliasypersonalidades_6,lyr_Huellasdeltrabajo_7,lyr_Huellasdeltransporteylascomunicaciones_8];
lyr_Iriondo_1.set('fieldAliases', {'FID': 'FID', });
lyr_Huellashistricoterritoriales_2.set('fieldAliases', {'id': 'id', 'Titulo': 'Titulo', 'Ano': 'Ano', 'Fuente': 'Fuente', 'Pag': 'Pag', 'Link': 'Link', 'Fecha': 'Fecha', 'Realto': 'Realto', });
lyr_Huellasdelaenergia_3.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Link': 'Link', 'Relato': 'Relato', 'PAg': 'PAg', });
lyr_Huellasdelainfraestructuraylasinstituciones_4.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Pag': 'Pag', 'Titulo': 'Titulo', 'Link': 'Link', 'Relato': 'Relato', });
lyr_Huellasdelaidentidadylacelebracin_5.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Pag': 'Pag', 'Relato': 'Relato', 'Link': 'Link', });
lyr_Huellasdefamiliasypersonalidades_6.set('fieldAliases', {'id': 'id', 'a?o': 'a?o', 'fecha': 'fecha', 'fuente': 'fuente', 'pag': 'pag', 'link': 'link', 'titulo': 'titulo', 'relato': 'relato', });
lyr_Huellasdeltrabajo_7.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Pag': 'Pag', 'Link': 'Link', 'Relato': 'Relato', });
lyr_Huellasdeltransporteylascomunicaciones_8.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fechas': 'Fechas', 'pag': 'pag', 'Link': 'Link', 'Titulo': 'Titulo', 'Fuente': 'Fuente', 'Relato': 'Relato', });
lyr_Iriondo_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_Huellashistricoterritoriales_2.set('fieldImages', {'id': 'TextEdit', 'Titulo': 'TextEdit', 'Ano': 'Range', 'Fuente': 'TextEdit', 'Pag': 'Range', 'Link': 'TextEdit', 'Fecha': 'DateTime', 'Realto': 'TextEdit', });
lyr_Huellasdelaenergia_3.set('fieldImages', {'id': 'TextEdit', 'Ano': 'Range', 'Fecha': 'DateTime', 'Fuente': 'TextEdit', 'Titulo': 'TextEdit', 'Link': 'TextEdit', 'Relato': 'TextEdit', 'PAg': 'Range', });
lyr_Huellasdelainfraestructuraylasinstituciones_4.set('fieldImages', {'id': 'TextEdit', 'Ano': 'Range', 'Fecha': 'DateTime', 'Fuente': 'TextEdit', 'Pag': 'Range', 'Titulo': 'TextEdit', 'Link': 'TextEdit', 'Relato': 'TextEdit', });
lyr_Huellasdelaidentidadylacelebracin_5.set('fieldImages', {'id': 'TextEdit', 'Ano': 'Range', 'Fecha': 'DateTime', 'Fuente': 'TextEdit', 'Titulo': 'TextEdit', 'Pag': 'Range', 'Relato': 'TextEdit', 'Link': 'TextEdit', });
lyr_Huellasdefamiliasypersonalidades_6.set('fieldImages', {'id': 'TextEdit', 'a?o': 'Range', 'fecha': 'DateTime', 'fuente': 'TextEdit', 'pag': 'TextEdit', 'link': 'TextEdit', 'titulo': 'TextEdit', 'relato': 'TextEdit', });
lyr_Huellasdeltrabajo_7.set('fieldImages', {'id': 'TextEdit', 'Ano': 'Range', 'Fecha': 'DateTime', 'Fuente': 'TextEdit', 'Titulo': 'TextEdit', 'Pag': 'Range', 'Link': 'TextEdit', 'Relato': 'TextEdit', });
lyr_Huellasdeltransporteylascomunicaciones_8.set('fieldImages', {'id': 'TextEdit', 'Ano': 'Range', 'Fechas': 'DateTime', 'pag': 'Range', 'Link': 'TextEdit', 'Titulo': 'TextEdit', 'Fuente': 'TextEdit', 'Relato': 'TextEdit', });
lyr_Iriondo_1.set('fieldLabels', {'FID': 'no label', });
lyr_Huellashistricoterritoriales_2.set('fieldLabels', {'id': 'no label', 'Titulo': 'inline label - visible with data', 'Ano': 'no label', 'Fuente': 'no label', 'Pag': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'Fecha': 'no label', 'Realto': 'no label', });
lyr_Huellasdelaenergia_3.set('fieldLabels', {'id': 'no label', 'Ano': 'inline label - visible with data', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'Relato': 'no label', 'PAg': 'hidden field', });
lyr_Huellasdelainfraestructuraylasinstituciones_4.set('fieldLabels', {'id': 'no label', 'Ano': 'inline label - visible with data', 'Fecha': 'no label', 'Fuente': 'no label', 'Pag': 'inline label - visible with data', 'Titulo': 'inline label - visible with data', 'Link': 'no label', 'Relato': 'no label', });
lyr_Huellasdelaidentidadylacelebracin_5.set('fieldLabels', {'id': 'no label', 'Ano': 'inline label - visible with data', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'inline label - visible with data', 'Pag': 'inline label - visible with data', 'Relato': 'no label', 'Link': 'no label', });
lyr_Huellasdefamiliasypersonalidades_6.set('fieldLabels', {'id': 'no label', 'a?o': 'no label', 'fecha': 'no label', 'fuente': 'no label', 'pag': 'no label', 'link': 'no label', 'titulo': 'no label', 'relato': 'no label', });
lyr_Huellasdeltrabajo_7.set('fieldLabels', {'id': 'no label', 'Ano': 'inline label - always visible', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'inline label - visible with data', 'Pag': 'inline label - visible with data', 'Link': 'no label', 'Relato': 'no label', });
lyr_Huellasdeltransporteylascomunicaciones_8.set('fieldLabels', {'id': 'no label', 'Ano': 'inline label - visible with data', 'Fechas': 'no label', 'pag': 'no label', 'Link': 'inline label - visible with data', 'Titulo': 'inline label - visible with data', 'Fuente': 'no label', 'Relato': 'no label', });
lyr_Huellasdeltransporteylascomunicaciones_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});