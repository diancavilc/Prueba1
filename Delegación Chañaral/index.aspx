<!doctype html>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html lang="en" xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
    <%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link href="resources/ol-geocoder.min.css" rel="stylesheet">
        <link rel="stylesheet" href="resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="resources/qgis2web.css">
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control > * {
            background-color: #f8f8f8!important;
            color: #444444!important;
            border-radius: 0px;
        }
        .ol-attribution a, .gcd-gl-input::placeholder, .search-layer-input-search::placeholder {
            color: #444444!important;
        }
        .search-layer-input-search {
            background-color: #f8f8f8!important;
        }
        .ol-control > *:focus, .ol-control >*:hover {
            background-color: rgba(248, 248, 248, 0.7)!important;
        } 
        .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 2px !important;
        } 
        </style>

        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    
<!--[if gte mso 9]><SharePoint:CTFieldRefs runat=server Prefix="mso:" FieldList="FileLeafRef"><xml>
<mso:CustomDocumentProperties>
<mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor msdt:dt="string">Max Jeremías Jara Merino EXT</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor>
<mso:Order msdt:dt="string">4825600.00000000</mso:Order>
<mso:ComplianceAssetId msdt:dt="string"></mso:ComplianceAssetId>
<mso:_ExtendedDescription msdt:dt="string"></mso:_ExtendedDescription>
<mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author msdt:dt="string">Max Jeremías Jara Merino EXT</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author>
<mso:ContentTypeId msdt:dt="string">0x010100D933ADA3E300E944B8E9FB6C37196CB7</mso:ContentTypeId>
<mso:TriggerFlowInfo msdt:dt="string"></mso:TriggerFlowInfo>
<mso:_SourceUrl msdt:dt="string"></mso:_SourceUrl>
<mso:_SharedFileIndex msdt:dt="string"></mso:_SharedFileIndex>
</mso:CustomDocumentProperties>
</xml></SharePoint:CTFieldRefs><![endif]-->
</head>
    <body>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
        <script src="resources/qgis2web_expressions.js"></script>
        <script src="resources/functions.js"></script>
        <script src="resources/ol.js"></script>
        <script src="resources/ol-layerswitcher.js"></script>
        <script src="resources/ol-geocoder.js"></script>
        <script src="layers/ComunasDelegacinChaaral_4.js"></script><script src="layers/Rodillobase_5.js"></script><script src="layers/LaPuntillabase_6.js"></script><script src="layers/IncadeOrobase_7.js"></script><script src="layers/ElSalarbase_8.js"></script><script src="layers/DiegodeAlmagrobase_9.js"></script><script src="layers/DesiertoFloridobase_10.js"></script><script src="layers/Barquitosbase_11.js"></script><script src="layers/BahaInglesabase_12.js"></script><script src="layers/CalderaAlimentadoresMTBase_13.js"></script><script src="layers/CalderaTroncaleInterconexionesBase_14.js"></script><script src="layers/ChaaralAlimentadoresMTBase_15.js"></script><script src="layers/ChaaralTroncaleInterconexionesBase_16.js"></script><script src="layers/016Caldera_17.js"></script><script src="layers/015Chaaral_18.js"></script><script src="layers/DiagramabaseCaldera_19.js"></script><script src="layers/DiagramabaseChaaral_20.js"></script><script src="layers/SubestacionesBase_21.js"></script>
        <script src="styles/ComunasDelegacinChaaral_4_style.js"></script><script src="styles/Rodillobase_5_style.js"></script><script src="styles/LaPuntillabase_6_style.js"></script><script src="styles/IncadeOrobase_7_style.js"></script><script src="styles/ElSalarbase_8_style.js"></script><script src="styles/DiegodeAlmagrobase_9_style.js"></script><script src="styles/DesiertoFloridobase_10_style.js"></script><script src="styles/Barquitosbase_11_style.js"></script><script src="styles/BahaInglesabase_12_style.js"></script><script src="styles/CalderaAlimentadoresMTBase_13_style.js"></script><script src="styles/CalderaTroncaleInterconexionesBase_14_style.js"></script><script src="styles/ChaaralAlimentadoresMTBase_15_style.js"></script><script src="styles/ChaaralTroncaleInterconexionesBase_16_style.js"></script><script src="styles/016Caldera_17_style.js"></script><script src="styles/015Chaaral_18_style.js"></script><script src="styles/DiagramabaseCaldera_19_style.js"></script><script src="styles/DiagramabaseChaaral_20_style.js"></script><script src="styles/SubestacionesBase_21_style.js"></script>
        <script src="layers/layers.js" type="text/javascript"></script> 
        <script src="resources/Autolinker.min.js"></script>
        <script src="resources/qgis2web.js"></script>
    </body>
</html>
