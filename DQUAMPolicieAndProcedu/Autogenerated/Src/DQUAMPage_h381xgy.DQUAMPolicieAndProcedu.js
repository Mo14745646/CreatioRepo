define("DQUAMPage_h381xgy", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ProgressBar",
				"values": {
					"saveOnChange": true,
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Button_iokqmxp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_iokqmxp_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_64df778",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_5t06k0f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_5t06k0f_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_dcec89b",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_b823t9p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_b823t9p_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_210b41f",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_mgspkbm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_mgspkbm_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_ed1261c",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_s9h6pzs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMProcedureID_65af7su",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMProcedureID_65af7su"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_29d4uuk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMPolicy_w36qk6c",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMPolicy_w36qk6c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_4iyoozd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4iyoozd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_29d4uuk",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_aq28665",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMTitle_aspu1je",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMTitle_aspu1je"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_wvgyku1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMStatusProcedure_dagnqc8",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMStatusProcedure_dagnqc8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_35axpi8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_35axpi8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wvgyku1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_w52ueki",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMnextrevision_d1b4chi",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMnextrevision_d1b4chi",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8z5le75",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DQUAMProcedureDS_DQUAMNextRevesionDate_dfq9dzz",
					"labelPosition": "auto",
					"control": "$DQUAMProcedureDS_DQUAMNextRevesionDate_dfq9dzz",
					"pickerType": "datetime"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_730ugtl",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_txmvi9f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_txmvi9f_title)#",
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
				"parentName": "GridContainer_730ugtl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_dcraexb",
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
				"parentName": "ExpansionPanel_txmvi9f",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ieujkkp",
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
				"parentName": "GridContainer_dcraexb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_o7c3jgo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_o7c3jgo_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMDepartmentProcedure",
							"defaultValues": [
								{
									"attributeName": "DQUAMProcedure",
									"value": "$DQUAMProcedure"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ieujkkp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_fpcxgws",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_fpcxgws_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_htodlrfDS"
						}
					}
				},
				"parentName": "FlexContainer_ieujkkp",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_g6vv33o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_g6vv33o_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ieujkkp",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_clxxl9n",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_clxxl9n_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_htodlrf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_g6vv33o",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9vbkaw0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9vbkaw0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMDepartmentProcedure"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_g6vv33o",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_nmtuizi",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_nmtuizi_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_htodlrf"
					]
				},
				"parentName": "FlexContainer_ieujkkp",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_kdo6n73",
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
				"parentName": "ExpansionPanel_txmvi9f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_htodlrf",
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
						}
					},
					"items": "$GridDetail_htodlrf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_htodlrfDS_Id",
					"columns": [
						{
							"id": "10a530fb-29aa-8c65-0305-d744914aa8a6",
							"code": "GridDetail_htodlrfDS_DQUAMDepartment",
							"caption": "#ResourceString(GridDetail_htodlrfDS_DQUAMDepartment)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_kdo6n73",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_y3jdutp",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ddne3a1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_y3jdutp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3peqpmu",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3peqpmu_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_n3xfd4h",
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
				"parentName": "ExpansionPanel_3peqpmu",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0pz3ln5",
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
				"parentName": "GridContainer_n3xfd4h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_z1wkr88",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_z1wkr88_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMOwnerContact"
						}
					}
				},
				"parentName": "FlexContainer_0pz3ln5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_nrdvgw2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_nrdvgw2_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_enjswhbDS"
						}
					}
				},
				"parentName": "FlexContainer_0pz3ln5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_8ajhfhy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_8ajhfhy_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0pz3ln5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xoqubq7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xoqubq7_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_enjswhb"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8ajhfhy",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_116qxud",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_116qxud_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMOwnerContact"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8ajhfhy",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_nfahoyt",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_nfahoyt_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_enjswhb"
					]
				},
				"parentName": "FlexContainer_0pz3ln5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ffl42he",
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
				"parentName": "ExpansionPanel_3peqpmu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_enjswhb",
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
						}
					},
					"items": "$GridDetail_enjswhb",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_enjswhbDS_Id",
					"columns": [
						{
							"id": "9b74f277-769f-2865-056e-ba3b83b9a9e1",
							"code": "GridDetail_enjswhbDS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_enjswhbDS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "d467a0e3-2e42-b28a-9ec5-c156604119f2",
							"code": "GridDetail_enjswhbDS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_enjswhbDS_DQUAMPPRole)#",
							"dataValueType": 10
						},
						{
							"id": "f87cd97a-a074-4bf7-14bd-1299ca2d280e",
							"code": "GridDetail_enjswhbDS_DQUAMISApproved",
							"caption": "#ResourceString(GridDetail_enjswhbDS_DQUAMISApproved)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ffl42he",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_m7b4mis",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_m7b4mis_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_qxlrcoc",
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
				"parentName": "ExpansionPanel_m7b4mis",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0gwxx2n",
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
				"parentName": "GridContainer_qxlrcoc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_xer8lfn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_xer8lfn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMStakeholdersContactProcedure"
						}
					}
				},
				"parentName": "FlexContainer_0gwxx2n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_2a3ibln",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_2a3ibln_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_kxgetokDS"
						}
					}
				},
				"parentName": "FlexContainer_0gwxx2n",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_fu39hfj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_fu39hfj_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0gwxx2n",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_qeyrnan",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_qeyrnan_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_kxgetok"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fu39hfj",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_o37f8nh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_o37f8nh_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMStakeholdersContactProcedure"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fu39hfj",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_uuba6ex",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_uuba6ex_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_kxgetok"
					]
				},
				"parentName": "FlexContainer_0gwxx2n",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_r1wyzri",
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
				"parentName": "ExpansionPanel_m7b4mis",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_kxgetok",
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
						}
					},
					"items": "$GridDetail_kxgetok",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_kxgetokDS_Id",
					"columns": [
						{
							"id": "19eac3fe-168f-33af-525a-fb5cca500cad",
							"code": "GridDetail_kxgetokDS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_kxgetokDS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "fcd7d802-7d70-0981-3e32-d2f29c1bd40b",
							"code": "GridDetail_kxgetokDS_DQUAMISApproved",
							"caption": "#ResourceString(GridDetail_kxgetokDS_DQUAMISApproved)#",
							"dataValueType": 12
						},
						{
							"id": "9a6e607d-8ca6-3226-103c-10cb569c4bf1",
							"code": "GridDetail_kxgetokDS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_kxgetokDS_DQUAMPPRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_r1wyzri",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_cclgn4p",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_cclgn4p_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ekzfx2e",
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
				"parentName": "ExpansionPanel_cclgn4p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_127woq9",
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
				"parentName": "GridContainer_ekzfx2e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_e0qixvx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_e0qixvx_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMFinalApprovalContactProcedure"
						}
					}
				},
				"parentName": "FlexContainer_127woq9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_jstan37",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_jstan37_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_9b836xmDS"
						}
					}
				},
				"parentName": "FlexContainer_127woq9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_a3liirn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_a3liirn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_127woq9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nacms68",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nacms68_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9b836xm"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a3liirn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_if62lzq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_if62lzq_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMFinalApprovalContactProcedure"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a3liirn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2mvjzwc",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2mvjzwc_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_9b836xm"
					]
				},
				"parentName": "FlexContainer_127woq9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y1u3sdw",
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
				"parentName": "ExpansionPanel_cclgn4p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9b836xm",
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
						}
					},
					"items": "$GridDetail_9b836xm",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_9b836xmDS_Id",
					"columns": [
						{
							"id": "ccfbdd7e-a634-7b21-dad0-bdaf7641ce9c",
							"code": "GridDetail_9b836xmDS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_9b836xmDS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "65b5bce7-892e-bc74-cbbc-6fe259630bfa",
							"code": "GridDetail_9b836xmDS_DQUAMISApproved",
							"caption": "#ResourceString(GridDetail_9b836xmDS_DQUAMISApproved)#",
							"dataValueType": 12
						},
						{
							"id": "6d432a25-0df6-db25-68d3-6d7b984e11c7",
							"code": "GridDetail_9b836xmDS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_9b836xmDS_DQUAMPPRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_y1u3sdw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_y92jwmi",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_y92jwmi_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_njdiyyl",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_y92jwmi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9fjejje",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9fjejje_title)#",
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
				"parentName": "TabContainer_y92jwmi",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9c1cox8",
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
				"parentName": "ExpansionPanel_9fjejje",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_82j1usy",
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
				"parentName": "GridContainer_9c1cox8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7a2tfzy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7a2tfzy_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SysApproval"
						}
					}
				},
				"parentName": "FlexContainer_82j1usy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_m0ecqcl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_m0ecqcl_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gt2uqikDS"
						}
					}
				},
				"parentName": "FlexContainer_82j1usy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1pfsii8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1pfsii8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_82j1usy",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_fa5efha",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_fa5efha_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gt2uqik"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1pfsii8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9j8q8xo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9j8q8xo_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SysApproval"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1pfsii8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_a07cdvf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_a07cdvf_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_gt2uqik"
					]
				},
				"parentName": "FlexContainer_82j1usy",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xuyb5wd",
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
				"parentName": "ExpansionPanel_9fjejje",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gt2uqik",
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
						}
					},
					"items": "$GridDetail_gt2uqik",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gt2uqikDS_Id",
					"columns": [
						{
							"id": "e6a1649e-7048-0a78-541d-9533ceaba01b",
							"code": "GridDetail_gt2uqikDS_VisaOwner",
							"caption": "#ResourceString(GridDetail_gt2uqikDS_VisaOwner)#",
							"dataValueType": 10
						},
						{
							"id": "e9e95e18-6114-3a3e-3ada-32103b36bca6",
							"code": "GridDetail_gt2uqikDS_Comment",
							"caption": "#ResourceString(GridDetail_gt2uqikDS_Comment)#",
							"dataValueType": 30
						},
						{
							"id": "eb62186a-047e-f25c-1b7a-dc569bb7da9f",
							"code": "GridDetail_gt2uqikDS_SetDate",
							"caption": "#ResourceString(GridDetail_gt2uqikDS_SetDate)#",
							"dataValueType": 7
						},
						{
							"id": "1ead81ff-aeeb-11b8-2204-18e0dcca87da",
							"code": "GridDetail_gt2uqikDS_Status",
							"caption": "#ResourceString(GridDetail_gt2uqikDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "abbdf995-ed70-5276-ce83-b131a836d271",
							"code": "GridDetail_gt2uqikDS_ReferenceSchemaName",
							"caption": "#ResourceString(GridDetail_gt2uqikDS_ReferenceSchemaName)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_xuyb5wd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_m76zmid",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_m76zmid_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_oq55k9v",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_m76zmid",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0obrxr5",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0obrxr5_title)#",
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
				"parentName": "TabContainer_m76zmid",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1uisko3",
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
				"parentName": "ExpansionPanel_0obrxr5",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_avpajiu",
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
				"parentName": "GridContainer_1uisko3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_trls5ji",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_trls5ji_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMMergedProcedure",
							"defaultValues": [
								{
									"attributeName": "DQUAMProcedure",
									"value": "$DQUAMProcedure"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_avpajiu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_aw3z4g7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_aw3z4g7_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_eat2mspDS"
						}
					}
				},
				"parentName": "FlexContainer_avpajiu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_n15a0on",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_n15a0on_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_avpajiu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_n238qtt",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_n238qtt_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_eat2msp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_n15a0on",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_a0ewuoh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_a0ewuoh_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMMergedProcedure"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_n15a0on",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_5yr7ycr",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_5yr7ycr_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_eat2msp"
					]
				},
				"parentName": "FlexContainer_avpajiu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ojv99n8",
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
				"parentName": "ExpansionPanel_0obrxr5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eat2msp",
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
						}
					},
					"items": "$GridDetail_eat2msp",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_eat2mspDS_Id",
					"columns": [
						{
							"id": "837c96e1-a05f-92a9-0531-c0d652ee108e",
							"code": "GridDetail_eat2mspDS_DQUAMMergeProcedure",
							"caption": "#ResourceString(GridDetail_eat2mspDS_DQUAMMergeProcedure)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ojv99n8",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DQUAMProcedureDS_DQUAMTitle_aspu1je": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMTitle"
						}
					},
					"DQUAMProcedureDS_DQUAMDepartment_83vnjb3": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMDepartment"
						}
					},
					"DQUAMProcedureDS_DQUAMStatusProcedure_dagnqc8": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMStatusProcedure"
						}
					},
					"GridDetail_enjswhb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_enjswhbDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_enjswhb_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_enjswhbDS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_enjswhbDS.DQUAMcontactID"
									}
								},
								"GridDetail_enjswhbDS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_enjswhbDS.DQUAMPPRole"
									}
								},
								"GridDetail_enjswhbDS_DQUAMISApproved": {
									"modelConfig": {
										"path": "GridDetail_enjswhbDS.DQUAMISApproved"
									}
								},
								"GridDetail_enjswhbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_enjswhbDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_enjswhb_PredefinedFilter": {
						"value": {
							"items": {
								"b4dd7668-0628-43bd-81bb-b1b783fcfaee": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DQUAMPPRole"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "DQUAMPPRoles",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Owner",
													"Id": "73be1b00-fae1-40f3-bc30-1b0b5d52d1b2",
													"value": "73be1b00-fae1-40f3-bc30-1b0b5d52d1b2",
													"displayValue": "Owner"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DQUAMOwnerContact"
						}
					},
					"GridDetail_kxgetok": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_kxgetokDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_kxgetok_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_kxgetokDS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_kxgetokDS.DQUAMcontactID"
									}
								},
								"GridDetail_kxgetokDS_DQUAMISApproved": {
									"modelConfig": {
										"path": "GridDetail_kxgetokDS.DQUAMISApproved"
									}
								},
								"GridDetail_kxgetokDS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_kxgetokDS.DQUAMPPRole"
									}
								},
								"GridDetail_kxgetokDS_Id": {
									"modelConfig": {
										"path": "GridDetail_kxgetokDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_kxgetok_PredefinedFilter": {
						"value": {
							"items": {
								"aa09a8d7-6764-442e-8347-bd7fbfbcb7b1": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DQUAMPPRole"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "DQUAMPPRoles",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Stackholders",
													"Id": "488fa710-b0f2-484e-a0ef-bf7cbc08cb79",
													"value": "488fa710-b0f2-484e-a0ef-bf7cbc08cb79",
													"displayValue": "Stackholders"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DQUAMStakeholdersContactProcedure"
						}
					},
					"GridDetail_9b836xm": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_9b836xmDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_9b836xm_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_9b836xmDS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_9b836xmDS.DQUAMcontactID"
									}
								},
								"GridDetail_9b836xmDS_DQUAMISApproved": {
									"modelConfig": {
										"path": "GridDetail_9b836xmDS.DQUAMISApproved"
									}
								},
								"GridDetail_9b836xmDS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_9b836xmDS.DQUAMPPRole"
									}
								},
								"GridDetail_9b836xmDS_Id": {
									"modelConfig": {
										"path": "GridDetail_9b836xmDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_9b836xm_PredefinedFilter": {
						"value": {
							"items": {
								"a185e6c7-a9ad-44fe-af55-e4d9002e2a7f": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DQUAMPPRole"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "DQUAMPPRoles",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Approver",
													"Id": "5ddb9d32-8fad-4b15-814c-c5ffdba992fa",
													"value": "5ddb9d32-8fad-4b15-814c-c5ffdba992fa",
													"displayValue": "Approver"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DQUAMFinalApprovalContactProcedure"
						}
					},
					"ApprovalList_gddc8j8": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_gddc8j8DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_gddc8j8DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.VisaOwner"
									}
								},
								"ApprovalList_gddc8j8DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.Objective"
									}
								},
								"ApprovalList_gddc8j8DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.CreatedOn"
									}
								},
								"ApprovalList_gddc8j8DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.SetDate"
									}
								},
								"ApprovalList_gddc8j8DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.SetBy"
									}
								},
								"ApprovalList_gddc8j8DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.Status"
									}
								},
								"ApprovalList_gddc8j8DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_gddc8j8DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gt2uqik": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gt2uqikDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_gt2uqik_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gt2uqikDS_VisaOwner": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.VisaOwner"
									}
								},
								"GridDetail_gt2uqikDS_Comment": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.Comment"
									}
								},
								"GridDetail_gt2uqikDS_SetDate": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.SetDate"
									}
								},
								"GridDetail_gt2uqikDS_Status": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.Status"
									}
								},
								"GridDetail_gt2uqikDS_ReferenceSchemaName": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.ReferenceSchemaName"
									}
								},
								"GridDetail_gt2uqikDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gt2uqikDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gt2uqik_PredefinedFilter": {
						"value": {
							"items": {
								"8880be19-d73d-4dd8-b01d-bc61fdabf977": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Status"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "VisaStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Negative",
													"Id": "a93ab0b9-ca36-4b95-9b23-e01aa169c338",
													"value": "a93ab0b9-ca36-4b95-9b23-e01aa169c338",
													"displayValue": "Negative"
												}
											}
										}
									]
								},
								"3c1285ed-05ba-4844-8a8a-50b35851947b": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ReferenceSchemaName"
									},
									"isAggregative": false,
									"dataValueType": 1,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "DQUAMProcedure"
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "SysApproval"
						}
					},
					"GridDetail_ln41hfh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ln41hfhDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ln41hfhDS_Name": {
									"modelConfig": {
										"path": "GridDetail_ln41hfhDS.Name"
									}
								},
								"GridDetail_ln41hfhDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ln41hfhDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_e2ztdhu": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_e2ztdhuDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_e2ztdhuDS_Name": {
									"modelConfig": {
										"path": "GridDetail_e2ztdhuDS.Name"
									}
								},
								"GridDetail_e2ztdhuDS_Id": {
									"modelConfig": {
										"path": "GridDetail_e2ztdhuDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_afzwlpw": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_afzwlpwDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_afzwlpwDS_Name": {
									"modelConfig": {
										"path": "GridDetail_afzwlpwDS.Name"
									}
								},
								"GridDetail_afzwlpwDS_Id": {
									"modelConfig": {
										"path": "GridDetail_afzwlpwDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_htodlrf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_htodlrfDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_htodlrf_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_htodlrfDS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_htodlrfDS.DQUAMDepartment"
									}
								},
								"GridDetail_htodlrfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_htodlrfDS.Id"
									}
								}
							}
						}
					},
					"DQUAMProcedureDS_DQUAMColumn5_fs77qo2": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMColumn5"
						}
					},
					"DQUAMProcedureDS_DQUAMProcedureID_65af7su": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMProcedureID"
						}
					},
					"GridDetail_htodlrf_PredefinedFilter": {
						"value": null
					},
					"DQUAMProcedure": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.Id"
						}
					},
					"DQUAMProcedureDS_DQUAMnextrevision_d1b4chi": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMnextrevision"
						}
					},
					"DQUAMProcedureDS_DQUAMNextRevesionDate_dfq9dzz": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMNextRevesionDate"
						}
					},
					"GridDetail_eat2msp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_eat2mspDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_eat2mspDS_DQUAMMergeProcedure": {
									"modelConfig": {
										"path": "GridDetail_eat2mspDS.DQUAMMergeProcedure"
									}
								},
								"GridDetail_eat2mspDS_Id": {
									"modelConfig": {
										"path": "GridDetail_eat2mspDS.Id"
									}
								}
							}
						}
					},
					"DQUAMProcedureDS_DQUAMPolicy_pm0sk10": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMPolicy"
						}
					},
					"DQUAMProcedureDS_DQUAMPolicyProcedureLink_vim33kj": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMPolicyProcedureLink"
						}
					},
					"DQUAMProcedureDS_DQUAMPolicy_w36qk6c": {
						"modelConfig": {
							"path": "DQUAMProcedureDS.DQUAMPolicy"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "DQUAMProcedureDS",
					"dependencies": {
						"GridDetail_enjswhbDS": [
							{
								"attributePath": "DQUAMProcedure",
								"relationPath": "DQUAMProcedureDS.Id"
							}
						],
						"GridDetail_kxgetokDS": [
							{
								"attributePath": "DQUAMProcedure",
								"relationPath": "DQUAMProcedureDS.Id"
							}
						],
						"GridDetail_9b836xmDS": [
							{
								"attributePath": "DQUAMProcedure",
								"relationPath": "DQUAMProcedureDS.Id"
							}
						],
						"GridDetail_gt2uqikDS": [
							{
								"attributePath": "EntityId",
								"relationPath": "DQUAMProcedureDS.Id"
							}
						],
						"GridDetail_htodlrfDS": [
							{
								"attributePath": "DQUAMProcedure",
								"relationPath": "DQUAMProcedureDS.Id"
							}
						],
						"GridDetail_eat2mspDS": [
							{
								"attributePath": "DQUAMProcedure",
								"relationPath": "DQUAMProcedureDS.Id"
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
					"DQUAMProcedureDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "DQUAMProcedure"
						}
					},
					"GridDetail_enjswhbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMOwnerContact",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								},
								"DQUAMISApproved": {
									"path": "DQUAMISApproved"
								}
							}
						}
					},
					"GridDetail_kxgetokDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMStakeholdersContactProcedure",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMISApproved": {
									"path": "DQUAMISApproved"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								}
							}
						}
					},
					"GridDetail_9b836xmDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMFinalApprovalContactProcedure",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMISApproved": {
									"path": "DQUAMISApproved"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								}
							}
						}
					},
					"ApprovalList_gddc8j8DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Objective": {
									"path": "Objective"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"SetBy": {
									"path": "SetBy"
								},
								"Status": {
									"path": "Status"
								}
							}
						}
					},
					"GridDetail_gt2uqikDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Comment": {
									"path": "Comment"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"Status": {
									"path": "Status"
								},
								"ReferenceSchemaName": {
									"path": "ReferenceSchemaName"
								}
							}
						}
					},
					"GridDetail_ln41hfhDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Department",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_e2ztdhuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Department",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_afzwlpwDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Department",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_htodlrfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMDepartmentProcedure",
							"attributes": {
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
								}
							}
						}
					},
					"GridDetail_eat2mspDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMMergedProcedure",
							"attributes": {
								"DQUAMMergeProcedure": {
									"path": "DQUAMMergeProcedure"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});