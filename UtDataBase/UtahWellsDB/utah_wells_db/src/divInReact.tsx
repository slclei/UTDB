<div>
<div className="siteHeaderRect">
    <table style={{boxSizing:"border-box", width: "100%", margin: "0px 0px 0px 0px", padding: "0px 10px",maxWidth: "100vw",}}>
        <tbody>
            <tr style={{marginBottom:"10px", display:"block"}}>
                <td className="header2Text" colSpan={2}>
                    <b style={{whiteSpace:"nowrap"}}>Utah CO2 Capture and Storeage</b>
                </td>
                <td style={{width:"100%"}}></td>
                <td className="icons">
                    <i ref="https://www.egi.utah.edu/" tooltip-placement="bottom" uib-tooltip="Google Home" className="material-icons">home</i>
                </td>
                <td className="icons">
                    <a href="javascript: restart();" tooltip-placement="bottom" uib-tooltip="Restart Session"><i className="material-icons">refresh</i></a>
                </td>
                <td id="alertIconDiv" className="icons">
                    <a href="https://www.google.com" tooltip-placement="bottom" uib-tooltip="alert Session"><i className="material-icons">info</i></a>
                </td>
                <td id="helpDiv" className="icons">
                    <a href="javascript: help();" tooltip-placement="bottom" uib-tooltip="Help"><i className="material-icons">help</i></a>
                </td>
                <td id="reportingIconDiv">
                    <a id="reportTop" tooltip-placement="bottom-right" popover-is-open="reportPopoverOpen" popover-trigger="outsideClick" uib-tooltip="Reporting" uib-popover-template="'reportingTemplate.html'" popover-placement="bottom-right"><i className="material-icons">folder</i></a>
                </td>
                <td className="login">
                    <button type="button" id="logInBtn" className="btn btn-primary" data-toggle="modal" data-target="#loginDialog">
                    Log In
                </button>
                    <button type="button" id="logOutBtn" className="btn btn-primary" style={{display:"none", opacity:.5}}>
                    Log Out
                </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<table id="tableSearch">
    <tbody>
        <tr id="trSearchMap">
            {/* Search */}
            <td id="tdSearch" valign="top">
                <div className="contentContainerRect ui-resizable" id="divSearch">
                    <div className="headerRect">
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{padding:"10px"}}>
                                        <i className="material-icons">
                                        search
                                        </i>
                                    </td>
                                    <td className="header1Text" style="font-weight:bold;">
                                        Search
                                    </td>
                                    <td style="width:100%;"></td>
                                    <td id="bToggleSearch">
                                        <i className="material-icons" id="activeSearchIconClear" onClick="resetFilter(true);" uib-tooltip="Reset Filters">clear</i>
                                        <i className="material-icons" id="inactiveSearchClearIcon" style="display:none; opacity:.5;">clear</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="searchContentDiv" style="padding: 10px; overflow: hidden; height: 100%;">
                        <div id="divAdvanced" style="height: 80vh;">
                            <div style="height:100%; width: 100%; overflow: auto;">
                                <div id="filterControl">
                                    <table id="advFilterTable">
                                        <tbody>
                                            <tr>
                                                <td><label>Search:</label></td>
                                                <td>
                                                    <select className="uiOperatorComboBox" id="searchBy" onchange="SearchBySelectionChange(this);" data-placeholder=" ">
                                                  <option value="BoardOrder">Board Order</option><option value="Client">Client</option><option value="Group">Group</option><option value="PermitSurfaceFacility">Permit Surface Facility</option><option value="PermitUIC">Permit UIC</option><option value="PermitSeismic">Permit Seismic</option><option value="ProductionEntity">Production Entity</option><option value="SurfaceFacility">Surface Facility</option><option value="Well" selected="">Well</option></select></td>
                                            </tr>
                                            <tr>
                                                <td className="filterPrompt">API 10:</td>
                                                <td>
                                                    <select id="compareAPI10" className="uiOperatorComboBox" onchange="opSelectionChanged(this);" data-placeholder=" ">
                                                    <option value=""></option><option value="Like">Like</option><option value="=" selected="">=</option></select>
                                                </td>
                                                <td><input type="text" id="API10" value="" className="uiTextBox" placeholder="Filter Input..." onkeyup="textChanged(this);"/>
                                                    <div className="clearSelectedIcon" onClick="clearFilterInput(this);" uib-tooltip="Clear"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="filterPrompt">Well Name:</td>
                                                <td><select id="compareWellName" className="uiOperatorComboBox" onchange="opSelectionChanged(this);" data-placeholder=" ">
                                                  <option value=""></option><option value="Like">Like</option><option value="=">=</option></select>
                                                </td>
                                                <td><input type="text" id="WellName" value="" className="uiTextBox" placeholder="Filter Input..." onkeyup="textChanged(this);"/>
                                                    <div className="clearSelectedIcon" onClick="clearFilterInput(this);" uib-tooltip="Clear"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="jsTreeAdvancedDiv">
                                    <div id="jstreeadvanced" align="left"></div>
                                </div>

                            </div>

                        </div>
                        <div style="height:40px;box-shadow:none; border-top: 1px solid #CACACA; box-sizing:border-box; position:relative; bottom:0; width:100%; left:0;" className="headerRect">
                            <span id="btnAdd" className="linkText" onClick="filterSearch(true);">
                          Add to Results
                      </span>
                            <span id="btnApply" className="linkText" onClick="filterSearch(false);">
                          Filter New Results
                      </span>
                        </div>
                    </div>

                </div>
                <div className="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
                <div className="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div>

            </td>
            {/* Map */}
            <td id="mapTd" style="width:100%; max-width: 100%;" valign="Top" align="center">
                <div id="divMap" className="contentContainerRect" style="height:100%; border:1px solid #e6e6e6; max-width: 100%; max-height: 100%;">
                    <div className="headerRect" style="width:100%;height: 40px;max-width: 100%;">
                        <table>
                            <tbody>
                                <tr>
                                    <td style="padding:10px 5px 10px 10px;">
                                        <i className="material-icons">
                                        public
                                        </i>
                                    </td>
                                    <td style="padding:10px 5px; font-weight:bold;" className="header1Text">
                                        Map
                                    </td>
                                    <td style="width:100%;"></td>
                                    <td id="addressIconDiv">
                                        <div id="addressSelectDiv">
                                            <i style="cursor:pointer;" className="material-icons" id="addressIcon" onClick=" $(this).hide(); $('#addressHideIcon').show(); $('#addressPopoverTemplate').show();" uib-tooltip="Search by Address">place</i>
                                            <i className="material-icons" style="cursor:pointer;display:none;" id="addressHideIcon" onClick="$(this).hide(); $('#addressIcon').show(); $('#addressPopoverTemplate').hide();" uib-tooltip="Search by Address">place</i>
                                        </div>
                                    </td>
                                    <td id="xyIconDiv">
                                        <div id="xySelectDiv">
                                            <i style="cursor:pointer;" id="xyIcon" className="material-icons" onClick=" $(this).hide(); $('#xyHideIcon').show(); $('#xyPopoverTemplate').show();" uib-tooltip="Center by X, Y or Latitude, Longitude">my_location</i>
                                            <i className="material-icons" style="cursor:pointer;display:none;" id="xyHideIcon" onClick="$(this).hide(); $('#xyIcon').show(); $('#xyPopoverTemplate').hide();" uib-tooltip="Center by X, Y or Latitude, Longitude">my_location</i>
                                        </div>
                                    </td>
                                    <td>
                                        <div id="pointSelectDiv">
                                            <i id="activePointSelectIcon" style="cursor:pointer;" className="material-icons" onClick="resetSelectIcons(); $(this).hide(); $('#deactivatePointSelectIcon').show(); arby.activateSelectControl($('#cboActiveLayer').val(), 'pointSelectControl'); setTooltip(false);"
                                                uib-tooltip="Select Wells by Click">near_me</i>
                                            <i id="deactivatePointSelectIcon" style="cursor:pointer;display:none;" className="material-icons" onClick="$(this).hide(); $('#activePointSelectIcon').show(); arby.deactivateSelectControl('pointSelectControl'); setTooltip(toolTip);" uib-tooltip="Select Wells by Click">near_me</i>
                                        </div>
                                    </td>
                                    <td>
                                        <div id="rectangleSelectDiv">
                                            <i id="activeRectangleSelectIcon" style="cursor:pointer;" className="material-icons" onClick="resetSelectIcons(); $('#deactivateRectangleSelectIcon').show(); $(this).hide(); arby.activateSelectControl($('#cboActiveLayer').val(), 'wmsGetFeatureControl'); setTooltip(false);"
                                                uib-tooltip="Select Wells by Rectangle">rectangle</i>
                                            <i id="deactivateRectangleSelectIcon" style="cursor:pointer;display:none;" className="material-icons" onClick="$(this).hide(); $('#activeRectangleSelectIcon').show(); arby.deactivateSelectControl('wmsGetFeatureControl'); setTooltip(toolTip);" uib-tooltip="Select Wells by Rectangle">rectangle</i>
                                        </div>
                                        <i id="inactiveRectangleSelectIcon" className="material-icons" style="display:none;">rectangle</i>
                                    </td>
                                    <td>
                                        <i id="inactivePolygonSelectIcon" className="material-icons" style="display:none;">polyline</i>
                                        <div id="polygonSelectDiv">
                                            <i id="activePolygonSelectIcon" style="cursor:pointer; opacity: 0.5;" className="material-icons" onClick="resetSelectIcons(); $(this).hide(); $('#deactivatePolygonSelectIcon').show(); arby.activateSelectControl($('#cboActiveLayer').val(), 'polySelectControl'); setTooltip(false);"
                                                uib-tooltip="Select Wells by Polygon">polyline</i>
                                            <i id="deactivatePolygonSelectIcon" style="cursor:pointer;display:none;" className="material-icons" onClick="$(this).hide(); $('#activePolygonSelectIcon').show(); arby.deactivateSelectControl('polySelectControl'); setTooltip(toolTip);" uib-tooltip="Select Wells by Polygon">polyline</i>
                                        </div>
                                    </td>
                                    <td id="bufferIconDiv">
                                        <div id="bufferSelectDiv">
                                            <i style="cursor:pointer;opacity: 0.5;" id="bufferIcon" className="material-icons" onClick=" $(this).hide(); $('#bufferHideIcon').show(); $('#bufferPopoverTemplate').show();" uib-tooltip="Buffer Selection">radio_button_checked</i>
                                            <i style="cursor:pointer;display:none;" id="bufferHideIcon" className="material-icons" onClick="$(this).hide(); $('#bufferIcon').show(); $('#bufferPopoverTemplate').hide();" uib-tooltip="Buffer Selection">radio_button_checked</i>
                                        </div>
                                    </td>
                                    <td>
                                        <i id="activeMapClearIcon" style="cursor:pointer;" className="material-icons" onClick="arby.clearSelection(); markerLayer.getSource().clear(); wellFilter.getSource().clear();" uib-tooltip="Clear Selection">clear</i>
                                        <i id="inactiveMapClearIcon" className="material-icons" style="display:none;" uib-tooltip="Clear Selection">clear</i>
                                    </td>
                                    <td>
                                        <div id="measureDistanceDiv">
                                            <i id="activeMeasureDistanceIcon" style="cursor:pointer;" className="material-icons" onClick="resetSelectIcons(); $(this).hide(); $('#deactivateMeasureDistanceIcon').show(); arby.activateControl('measureDistanceControl'); $('#distanceUnitDiv').show(); setTooltip(false);"
                                                uib-tooltip="Measure Distance">straighten</i>
                                            <i id="deactivateMeasureDistanceIcon" style="cursor:pointer;display:none;" className="material-icons" onClick="$(this).hide(); $('#activeMeasureDistanceIcon').show(); arby.deactivateSelectControl('measureDistanceControl'); $('#distanceUnitDiv').hide(); setTooltip(toolTip);"
                                                uib-tooltip="Measure Distance">straighten</i>
                                        </div>
                                    </td>
                                    <td>
                                        <div id="measureAreaDiv">
                                            <i id="activeMeasureAreaIcon" style="cursor:pointer;" className="material-icons" onClick="resetSelectIcons(); $(this).hide(); $('#deactivateMeasureAreaIcon').show(); arby.activateControl('measureAreaControl'); $('#areaUnitDiv').show(); setTooltip(false);"
                                                uib-tooltip="Measure Area">area_chart</i>
                                            <i id="deactivateMeasureAreaIcon" style="cursor:pointer;display:none;" className="material-icons" onClick="$(this).hide(); $('#activeMeasureAreaIcon').show(); arby.deactivateSelectControl('measureAreaControl'); $('#areaUnitDiv').hide(); setTooltip(toolTip);"
                                                uib-tooltip="Measure Area">area_chart</i>
                                        </div>
                                    </td>
                                    <td id="printIconDiv">
                                        <div id="printSelectDiv">
                                            <i style="cursor:pointer;" id="printIcon" className="material-icons" onClick=" $(this).hide(); $('#printHideIcon').show(); $('#printPopoverTemplate').show(); printDialog(); setTooltip(false);" uib-tooltip="Print Map">print</i>
                                            <i style="cursor:pointer; display:none;" id="printHideIcon" className="material-icons" onClick="$('#printHideIcon').hide(); $('#printIcon').show(); $('#printPopoverTemplate').hide(); setTooltip(toolTip);" uib-tooltip="Print Map">print</i>
                                        </div>
                                    </td>
                                    <td id="layerIconDiv" style="padding:10px 10px 10px 5px;">
                                        <div id="layerSelectDiv">
                                            <i id="layersIcon" style="cursor:pointer;" className="material-icons" onClick=" $(this).hide(); $('#layersHideIcon').show(); $('#layersPopoverTemplate').show(); $('#cboActiveLayer_chosen').show(); layersExpanded = true;" uib-tooltip="Layers" tooltip-placement="top-right">layers</i>
                                            <i id="layersHideIcon" style="cursor:pointer;display:none; " className="material-icons" onClick="$(this).hide(); $('#layersIcon').show(); $('#layersPopoverTemplate').hide(); $('#cboActiveLayer_chosen').show(); layersExpanded = false;" uib-tooltip="Layers"
                                                tooltip-placement="top-right">layers</i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="mapContentDiv" style="width: 100%; max-width: 100%; padding: 10px; border: none; position: relative; box-sizing: border-box; height: 100%; max-height: 100%;">
                        <div id="olMap" style="width: 100%; max-width: 100%; height: 100%;max-height: 100%;">
                            <App id="app" className="ol-viewport" touch-action="none" data-view="1" style="position: relative; overflow: hidden; width: 100%; height: 100%; touch-action: none; max-width: 100%; max-height: 100vh;"/>
                              
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>