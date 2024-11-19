define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "da2c0b5f-6327-4b87-843c-4fb4bd121b2e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_y3qlgkx_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "save-button-icon",
					"clicked": {
						"request": "usr.PushButtonRequest",
						"ClickMode": "default"
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_mtkrltd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrNumber_wfbgbw1",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_wfbgbw1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_zntf57b",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_zntf57b"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_hqvk7q5",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_hqvk7q5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommisionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommisionUSD_4uyscqm",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommisionUSD_4uyscqm"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EntityHierarchyFilter_vjjoe6d",
				"values": {
					"type": "crt.EntityHierarchyFilter",
					"_filterOptions": {
						"from": "EntityHierarchyFilter_vjjoe6d_SelectedNode",
						"expose": [
							{
								"attribute": "EntityHierarchyFilter_vjjoe6d_Filters",
								"converters": [
									{
										"converter": "crt.ToHierarchyFiltersConverter"
									}
								]
							}
						]
					},
					"visible": true,
					"schemaName": "Account",
					"nodesConfig": [
						{
							"columnName": "AddressType",
							"children": [
								{
									"columnName": "City",
									"children": [
										{
											"columnName": "PrimaryContact",
											"children": []
										}
									]
								}
							]
						}
					],
					"layoutConfig": {
						"height": 206
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyType_l1x6lqa",
					"labelPosition": "auto",
					"control": "$PDS_UsrRealtyType_l1x6lqa",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$ComboBox_s14yqy2_ValueDetails",
					"secondaryDisplayValue": "Name"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_w5s97hp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_w5s97hp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "RealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_8a644a2",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_8a644a2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_u4o2doh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u4o2doh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_gs6r863",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_gs6r863",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_np5jbzk",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_np5jbzk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_210wpbe",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_ash7xr1",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_ash7xr1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_fyz4ao0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_tmdkdpp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_tmdkdpp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_xkmf4ad",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xkmf4ad_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fyz4ao0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommisionPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_ewmrhik_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommission",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Promotiondate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPromotionDate_368ovcw",
					"labelPosition": "auto",
					"control": "$PDS_UsrPromotionDate_368ovcw",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_pa375hi",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_pa375hi_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_dxs27gb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_pa375hi",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_55szkea",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_dxs27gb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7dzbt48",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7dzbt48_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealityVisits",
							"defaultValues": [
								{
									"attributeName": "UsrParentReality",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_55szkea",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_vkeuxih",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_vkeuxih_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_l6ppejnDS"
						}
					}
				},
				"parentName": "FlexContainer_55szkea",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_8bqke5d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_8bqke5d_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_55szkea",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_1bvr6tp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_1bvr6tp_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetailVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8bqke5d",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_o6kbpgu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_o6kbpgu_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealityVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8bqke5d",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_fv8w2o3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_fv8w2o3_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_fv8w2o3_GridDetail_l6ppejn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_l6ppejn"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_fv8w2o3_SearchValue",
							"GridDetailSearchFilter_fv8w2o3_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_55szkea",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1muluju",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_pa375hi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailVisits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_l6ppejn",
					"activeRow": "$GridDetail_l6ppejn_ActiveRow",
					"selectionState": "$GridDetail_l6ppejn_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_l6ppejn_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_l6ppejnDS_Id",
					"columns": [
						{
							"id": "5f2e6737-2580-966c-02dd-d5324b661ee6",
							"code": "GridDetail_l6ppejnDS_Usrpotentialcustomer",
							"caption": "#ResourceString(GridDetail_l6ppejnDS_Usrpotentialcustomer)#",
							"dataValueType": 10
						},
						{
							"id": "d3c1677f-9f80-5f10-1164-d0db85e258d6",
							"code": "GridDetail_l6ppejnDS_UsrVisitdateTime",
							"caption": "#ResourceString(GridDetail_l6ppejnDS_UsrVisitdateTime)#",
							"dataValueType": 7,
							"width": 156
						},
						{
							"id": "df93b991-b843-fafc-a947-3fd79ed818b9",
							"code": "GridDetail_l6ppejnDS_UsrManager",
							"caption": "#ResourceString(GridDetail_l6ppejnDS_UsrManager)#",
							"dataValueType": 10,
							"width": 137
						},
						{
							"id": "8ce8ad5b-50ca-35fa-476f-885fda07d4b4",
							"code": "GridDetail_l6ppejnDS_UsrComment",
							"caption": "#ResourceString(GridDetail_l6ppejnDS_UsrComment)#",
							"dataValueType": 28,
							"width": 147
						},
						{
							"id": "aaf095d9-d7c6-89db-5f71-c771e3c59c71",
							"code": "GridDetail_l6ppejnDS_UsrParentReality",
							"caption": "#ResourceString(GridDetail_l6ppejnDS_UsrParentReality)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_1muluju",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l6ppejn_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l6ppejnDS",
							"filters": "$GridDetail_l6ppejn | crt.ToCollectionFilters : 'GridDetail_l6ppejn' : $GridDetail_l6ppejn_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l6ppejn_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetailVisits",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l6ppejn_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l6ppejnDS",
							"filters": "$GridDetail_l6ppejn | crt.ToCollectionFilters : 'GridDetail_l6ppejn' : $GridDetail_l6ppejn_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l6ppejn_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_l6ppejn_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l6ppejn_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetailVisits",
							"filters": "$GridDetail_l6ppejn | crt.ToCollectionFilters : 'GridDetail_l6ppejn' : $GridDetail_l6ppejn_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l6ppejn_SelectionState"
						}
					}
				},
				"parentName": "GridDetailVisits",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_l6ppejn_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l6ppejnDS",
							"filters": "$GridDetail_l6ppejn | crt.ToCollectionFilters : 'GridDetail_l6ppejn' : $GridDetail_l6ppejn_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l6ppejn_SelectionState"
						}
					}
				},
				"parentName": "GridDetailVisits",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_zntf57b": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.Price",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotbeless)#"
								}
							}
						}
					},
					"PDS_UsrArea_hqvk7q5": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.Area",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaNotLessThan100)#"
								}
							}
						}
					},
					"PDS_UsrRealtyType_l1x6lqa": {
						"modelConfig": {
							"path": "PDS.UsrRealtyType"
						}
					},
					"ComboBox_s14yqy2_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrRealtyTypeName"
						}
					},
					"PDS_UsrOfferType_8a644a2": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_gs6r863": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_np5jbzk": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_wfbgbw1": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrColumn9_5bwusin": {
						"modelConfig": {
							"path": "PDS.UsrMutipleSelect"
						}
					},
					"PDS_UsrCountry_ash7xr1": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_tmdkdpp": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_ajp3ocj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ajp3ocjDS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ajp3ocjDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_ajp3ocjDS.UsrName"
									}
								},
								"GridDetail_ajp3ocjDS_UsrTeam": {
									"modelConfig": {
										"path": "GridDetail_ajp3ocjDS.UsrTeam"
									}
								},
								"GridDetail_ajp3ocjDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ajp3ocjDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ajp3ocj_PredefinedFilter": {
						"value": {
							"items": {
								"6879223b-e510-4b5d-b55c-396197a2298b": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrTeam"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "Contact",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "ALM integration",
													"Email": "",
													"Account": "",
													"Id": "52febb94-d673-48a5-abab-bf852c3df284",
													"Photo": "",
													"value": "52febb94-d673-48a5-abab-bf852c3df284",
													"displayValue": "ALM integration"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrEntity_e2fcb5e"
						}
					},
					"PDS_UsrCommisionUSD_4uyscqm": {
						"modelConfig": {
							"path": "PDS.UsrCommisionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommission": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommission"
						}
					},
					"PDS_UsrPromotionDate_368ovcw": {
						"modelConfig": {
							"path": "PDS.UsrPromotionDate"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.FuturedateValidator",
								"params": {
									"message": "#ResourceString(FutureDateWarning)#"
								}
							}
						}
					},
					"GridDetail_l6ppejn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_l6ppejnDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_fv8w2o3_GridDetail_l6ppejn",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_l6ppejnDS_Usrpotentialcustomer": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.Usrpotentialcustomer"
									}
								},
								"GridDetail_l6ppejnDS_UsrVisitdateTime": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.UsrVisitdateTime"
									}
								},
								"GridDetail_l6ppejnDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.UsrManager"
									}
								},
								"GridDetail_l6ppejnDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.UsrComment"
									}
								},
								"GridDetail_l6ppejnDS_UsrParentReality": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.UsrParentReality"
									}
								},
								"GridDetail_l6ppejnDS_Id": {
									"modelConfig": {
										"path": "GridDetail_l6ppejnDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_l6ppejnDS": [
							{
								"attributePath": "UsrParentReality",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrRealtyTypeName": {
									"path": "UsrRealtyType.Name",
									"type": "ForwardReference"
								},
								"UsrOfferTypeUsrCommission": {
									"path": "UsrOfferType.UsrCommission",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_ajp3ocjDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrEntity_e2fcb5e",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrTeam": {
									"path": "UsrTeam"
								}
							}
						}
					},
					"GridDetail_l6ppejnDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealityVisits",
							"attributes": {
								"Usrpotentialcustomer": {
									"path": "Usrpotentialcustomer"
								},
								"UsrVisitdateTime": {
									"path": "UsrVisitdateTime"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrParentReality": {
									"path": "UsrParentReality"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[

	{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_zntf57b;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_hqvk7q5 = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},

          
                  //This function Calc  Commision USD    
{
				 
                               
                  request: "crt.HandleViewModelAttributeChangeRequest",
/* The custom implementation of the system query handler. */
			
                 
                               handler: async (request, next) => {
      					
             
                                 if (request.attributeName === 'PDS_UsrPrice_zntf57b' || 				             // if price changed
			
                                  request.attributeName === 'PDS_UsrOfferTypeUsrCommission' ) { 		// or percent changed
					
               
                                   var price = await request.$context.PDS_UsrPrice_zntf57b;
				
           
                                   var percent = await request.$context.PDS_UsrOfferTypeUsrCommission;
					
              
                                   var commission = price * percent / 100;
					
               
                                   request.$context.PDS_UsrCommisionUSD_4uyscqm= commission;
}
	/* Call the next handler if it exists and return its result. */
			
     
                                    return                            next?.handle(request);
				}
			
                             
                             
                             }
          
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
		/* The validator type must contain a vendor prefix.
Format the validator type in PascalCase. */
		
          "usr.FuturedateValidator": {
				
            validator: function (config) 
          {
return function (control) {
					
          let value = control.value;
	
          let today=new Date();
          let minValue = config.minValue;
						
          let valueIsCorrect = value >= today;
					
          var result;
						
          if (valueIsCorrect) {
							
            result = null;
} 
             else {
							
            result = {
								
              "usr.FuturedateValidator": { message: config.message
	
                 }
		};
	}
						
            return result;
};
				
          },
				
            params: [
					{
						
              name: "minValue"
					},
					{
					
              name: "message"
					}
				],
			
            async: false
			},
            

            "usr.Price": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.Price": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			},
                "usr.Area": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.Area": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
          
          



        }/**SCHEMA_VALIDATORS*/
	};
});