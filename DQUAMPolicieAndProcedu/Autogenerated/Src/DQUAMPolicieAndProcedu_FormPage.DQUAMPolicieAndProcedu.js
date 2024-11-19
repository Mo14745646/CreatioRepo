define("DQUAMPolicieAndProcedu_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
					"entitySchemaName": "DQUAMPolicieAndProcedu"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "188b42d1-6738-8a30-5244-c99042d89ece",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "91a5bfce-739e-6d4a-5b03-0fd73386ffd2",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "47f99707-51a7-391a-8bba-bc63259ddb8a",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f1bb3b57-0ebe-5212-3333-f8e0a10a3b77",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentAddButton",
				"values": {
					"caption": "#ResourceString(AttachmentAddButton_caption)#",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "insert",
				"name": "Button_kmnw4b7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kmnw4b7_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_e668619DQUAMPolicieAndProcedu3",
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
				"name": "Button_2tbhovs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_2tbhovs_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_ee288fe",
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
				"name": "Button_imfhdx6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_imfhdx6_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_4932169",
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
				"name": "Button_6oo3g37",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_6oo3g37_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DQUAMProcess_dce9831",
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
				"name": "EntityStageProgressBar_m3zocw2",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "DQUAMPolicieAndProcedu",
					"visible": null
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_ucfxr56",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_DQUAMPolicyID_sbb985h",
					"labelPosition": "auto",
					"control": "$PDS_DQUAMPolicyID_sbb985h",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DQUAMName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DQUAMName",
					"control": "$DQUAMName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_4m5b5v8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DQUAMStatus_cjzoqpe",
					"labelPosition": "auto",
					"control": "$PDS_DQUAMStatus_cjzoqpe",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_2wdryod",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2wdryod_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4m5b5v8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_nj9r8uq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DQUAMDepartment_ye6qog4",
					"labelPosition": "auto",
					"control": "$PDS_DQUAMDepartment_ye6qog4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_2ztjopz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2ztjopz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_nj9r8uq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_a9x78u2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DQUAMSLANextRevist_528m5m8",
					"labelPosition": "auto",
					"control": "$PDS_DQUAMSLANextRevist_528m5m8",
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
				"name": "DateTimePicker_i3dnlc0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DQUAMNextRevesionDate_cpdbpl1",
					"labelPosition": "auto",
					"control": "$PDS_DQUAMNextRevesionDate_cpdbpl1",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_4b1buix",
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
				"name": "ExpansionPanel_2ys3amc",
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
					"title": "#ResourceString(ExpansionPanel_2ys3amc_title)#",
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
				"parentName": "GridContainer_4b1buix",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_7oikl29",
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
				"parentName": "ExpansionPanel_2ys3amc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_015s43z",
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
				"parentName": "GridContainer_7oikl29",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_igeo0e6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_igeo0e6_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMDepartmentPolicy",
							"defaultValues": [
								{
									"attributeName": "DQUAMPolicy",
									"value": "$DQUAMPolicy"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_015s43z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0vmm1ui",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0vmm1ui_caption)#",
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
							"dataSourceName": "GridDetail_wujrxyxDS"
						}
					}
				},
				"parentName": "FlexContainer_015s43z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_15fitqd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_15fitqd_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_015s43z",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_lm76rpb",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_lm76rpb_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_wujrxyx"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_15fitqd",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ynqgs12",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ynqgs12_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMDepartmentPolicy"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_15fitqd",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_l0dvn2r",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_l0dvn2r_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_wujrxyx"
					]
				},
				"parentName": "FlexContainer_015s43z",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d520sqs",
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
				"parentName": "ExpansionPanel_2ys3amc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wujrxyx",
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
					"items": "$GridDetail_wujrxyx",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wujrxyxDS_Id",
					"columns": [
						{
							"id": "e5919087-55f0-1d77-7bac-7d15abeed119",
							"code": "GridDetail_wujrxyxDS_DQUAMDepartment",
							"caption": "#ResourceString(GridDetail_wujrxyxDS_DQUAMDepartment)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_d520sqs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_p1k2au0",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_p1k2au0_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_sy2neh2",
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
				},
				"parentName": "TabContainer_p1k2au0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_i8uwunb",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_i8uwunb_title)#",
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
				"parentName": "TabContainer_p1k2au0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_u2t4nlz",
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
				"parentName": "ExpansionPanel_i8uwunb",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lamjwyg",
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
				"parentName": "GridContainer_u2t4nlz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9re0md1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9re0md1_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMPolicycontactrelationship",
							"defaultValues": [
								{
									"attributeName": "DQUAMpolicyID",
									"value": "$DQUAMpolicyID"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_lamjwyg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_24g8azs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_24g8azs_caption)#",
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
							"dataSourceName": "GridDetail_91h4wpsDS"
						}
					}
				},
				"parentName": "FlexContainer_lamjwyg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_x23sqv0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_x23sqv0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_lamjwyg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zjy6ot6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zjy6ot6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_91h4wps"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_x23sqv0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_5xcnoma",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_5xcnoma_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMPolicycontactrelationship"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_x23sqv0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mjvmb6j",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mjvmb6j_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_91h4wps"
					]
				},
				"parentName": "FlexContainer_lamjwyg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_pefrivd",
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
				"parentName": "ExpansionPanel_i8uwunb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_91h4wps",
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
					"items": "$GridDetail_91h4wps",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_91h4wpsDS_Id",
					"columns": [
						{
							"id": "ae7f1618-be1a-32f8-d37d-9bec665b2e98",
							"code": "GridDetail_91h4wpsDS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_91h4wpsDS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "c5e0d65b-bef6-4f5e-bea5-009205cd6363",
							"code": "GridDetail_91h4wpsDS_DQUAMpolicyID",
							"caption": "#ResourceString(GridDetail_91h4wpsDS_DQUAMpolicyID)#",
							"dataValueType": 10
						},
						{
							"id": "de4e3b4d-d9b1-74d5-e066-c4b2d8a9d305",
							"code": "GridDetail_91h4wpsDS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_91h4wpsDS_DQUAMPPRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"referenceSchema": "DQUAMPPRoles"
				},
				"parentName": "GridContainer_pefrivd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jpmnt0o",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jpmnt0o_title)#",
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
				"parentName": "TabContainer_p1k2au0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_nbuwd16",
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
				"parentName": "ExpansionPanel_jpmnt0o",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7mqji29",
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
				"parentName": "GridContainer_nbuwd16",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_2flusj1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2flusj1_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMPolicyStakeholders",
							"defaultValues": [
								{
									"attributeName": "DQUAMpolicyID",
									"value": "$DQUAMpolicyID"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7mqji29",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_vs3t1to",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_vs3t1to_caption)#",
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
							"dataSourceName": "GridDetail_r48ssz9DS"
						}
					}
				},
				"parentName": "FlexContainer_7mqji29",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ah7ubh9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ah7ubh9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7mqji29",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_c6ikboo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_c6ikboo_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_r48ssz9"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ah7ubh9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2iw49ar",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2iw49ar_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMPolicyStakeholders"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ah7ubh9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_z1podq8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_z1podq8_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_r48ssz9"
					]
				},
				"parentName": "FlexContainer_7mqji29",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_rya3sbw",
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
				"parentName": "ExpansionPanel_jpmnt0o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_r48ssz9",
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
					"items": "$GridDetail_r48ssz9",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_r48ssz9DS_Id",
					"columns": [
						{
							"id": "5c3c6dfa-37ca-ada7-f776-eecc63d1d771",
							"code": "GridDetail_r48ssz9DS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_r48ssz9DS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "414a7c0f-dee3-7666-580d-c5d846ca3781",
							"code": "GridDetail_r48ssz9DS_DQUAMpolicyID",
							"caption": "#ResourceString(GridDetail_r48ssz9DS_DQUAMpolicyID)#",
							"dataValueType": 10
						},
						{
							"id": "04a12abb-d332-085b-11fa-9a6970f57ba9",
							"code": "GridDetail_r48ssz9DS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_r48ssz9DS_DQUAMPPRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_rya3sbw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jx8c6yp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jx8c6yp_title)#",
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
				"parentName": "ExpansionPanel_jpmnt0o",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_satw59o",
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
				"parentName": "ExpansionPanel_jx8c6yp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xe6myp4",
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
				"parentName": "GridContainer_satw59o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_8bzx1cf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_8bzx1cf_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMPolicyApprovals",
							"defaultValues": [
								{
									"attributeName": "DQUAMpolicyID",
									"value": "$DQUAMpolicyID"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_xe6myp4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_byee9zo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_byee9zo_caption)#",
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
							"dataSourceName": "GridDetail_erqecuzDS"
						}
					}
				},
				"parentName": "FlexContainer_xe6myp4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_6jjxcb3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_6jjxcb3_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_xe6myp4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zew6s5h",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zew6s5h_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_erqecuz"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6jjxcb3",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_fr8byhm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_fr8byhm_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMPolicyApprovals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6jjxcb3",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zgl9gj1",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zgl9gj1_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_erqecuz"
					]
				},
				"parentName": "FlexContainer_xe6myp4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_neiqjga",
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
				"parentName": "ExpansionPanel_jx8c6yp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_erqecuz",
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
					"items": "$GridDetail_erqecuz",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_erqecuzDS_Id",
					"columns": [
						{
							"id": "fbb8694a-3c49-4d44-84dc-0cb0b435e4fe",
							"code": "GridDetail_erqecuzDS_DQUAMcontactID",
							"caption": "#ResourceString(GridDetail_erqecuzDS_DQUAMcontactID)#",
							"dataValueType": 10
						},
						{
							"id": "2dbbea36-5c60-8db5-2ced-35b8c92f671d",
							"code": "GridDetail_erqecuzDS_DQUAMpolicyID",
							"caption": "#ResourceString(GridDetail_erqecuzDS_DQUAMpolicyID)#",
							"dataValueType": 10
						},
						{
							"id": "c28ddcd6-179e-fd37-5306-cc5d569ff6af",
							"code": "GridDetail_erqecuzDS_DQUAMPPRole",
							"caption": "#ResourceString(GridDetail_erqecuzDS_DQUAMPPRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_neiqjga",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_28sr4ji",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_28sr4ji_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gze8ol3",
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
				"parentName": "TabContainer_28sr4ji",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_t0es321",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_t0es321_title)#",
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
				"parentName": "TabContainer_28sr4ji",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2ji8xuv",
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
				"parentName": "ExpansionPanel_t0es321",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xjw0pl9",
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
				"parentName": "GridContainer_2ji8xuv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9wlwm19",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9wlwm19_caption)#",
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
				"parentName": "FlexContainer_xjw0pl9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_lsn6r14",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_lsn6r14_caption)#",
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
							"dataSourceName": "GridDetail_8hhtto8DS"
						}
					}
				},
				"parentName": "FlexContainer_xjw0pl9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3lutgpq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3lutgpq_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_xjw0pl9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_njip94h",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_njip94h_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8hhtto8"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3lutgpq",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_c2hlzbg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_c2hlzbg_caption)#",
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
				"parentName": "GridDetailSettingsBtn_3lutgpq",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_31dqiyo",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_31dqiyo_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_8hhtto8"
					]
				},
				"parentName": "FlexContainer_xjw0pl9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_9n5zpt0",
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
				"parentName": "ExpansionPanel_t0es321",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8hhtto8",
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
					"items": "$GridDetail_8hhtto8",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_8hhtto8DS_Id",
					"columns": [
						{
							"id": "eff3c8a7-b80c-a279-6165-fd27c47db6dc",
							"code": "GridDetail_8hhtto8DS_VisaOwner",
							"caption": "#ResourceString(GridDetail_8hhtto8DS_VisaOwner)#",
							"dataValueType": 10
						},
						{
							"id": "933ce95a-ed38-3825-78b9-976f467ca758",
							"code": "GridDetail_8hhtto8DS_Comment",
							"caption": "#ResourceString(GridDetail_8hhtto8DS_Comment)#",
							"dataValueType": 30
						},
						{
							"id": "2ae37b86-24b3-20bf-5102-30f770143c3c",
							"code": "GridDetail_8hhtto8DS_SetDate",
							"caption": "#ResourceString(GridDetail_8hhtto8DS_SetDate)#",
							"dataValueType": 7
						},
						{
							"id": "94d74f94-5108-62ab-b789-41b8691ccff2",
							"code": "GridDetail_8hhtto8DS_Status",
							"caption": "#ResourceString(GridDetail_8hhtto8DS_Status)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_9n5zpt0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_eerz0wz",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_eerz0wz_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7p64w3i",
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
				},
				"parentName": "TabContainer_eerz0wz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_j4c6l7v",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_j4c6l7v_title)#",
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
				"parentName": "TabContainer_eerz0wz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_7qdhw2l",
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
				"parentName": "ExpansionPanel_j4c6l7v",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fiy1h7m",
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
				"parentName": "GridContainer_7qdhw2l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_gpr6ie5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_gpr6ie5_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMMergedPolicy",
							"defaultValues": [
								{
									"attributeName": "DQUAMpolicy",
									"value": "$DQUAMpolicy"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_fiy1h7m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_lk8wfie",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_lk8wfie_caption)#",
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
							"dataSourceName": "GridDetail_1o8llf5DS"
						}
					}
				},
				"parentName": "FlexContainer_fiy1h7m",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_e8j68g1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_e8j68g1_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_fiy1h7m",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_rbcw9c8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rbcw9c8_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_1o8llf5"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_e8j68g1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_4qfdj76",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_4qfdj76_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMMergedPolicy"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_e8j68g1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_hncfjrq",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hncfjrq_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_1o8llf5"
					]
				},
				"parentName": "FlexContainer_fiy1h7m",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dyh3b5a",
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
				"parentName": "ExpansionPanel_j4c6l7v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_1o8llf5",
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
					"items": "$GridDetail_1o8llf5",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_1o8llf5DS_Id",
					"columns": [
						{
							"id": "e6344695-ad24-351b-bb3a-7a3ab321b3f3",
							"code": "GridDetail_1o8llf5DS_DQUAMMergedpolicyPolicy",
							"caption": "#ResourceString(GridDetail_1o8llf5DS_DQUAMMergedpolicyPolicy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_dyh3b5a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_7bq8z6k",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_7bq8z6k_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_02y5gah",
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
				"parentName": "TabContainer_7bq8z6k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_dwez3g9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_dwez3g9_title)#",
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
				"parentName": "TabContainer_7bq8z6k",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_qu1ghnl",
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
				"parentName": "ExpansionPanel_dwez3g9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9uk2qo1",
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
				"parentName": "GridContainer_qu1ghnl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5x58j6j",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5x58j6j_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMProcedure",
							"defaultValues": [
								{
									"attributeName": "DQUAMPolicy",
									"value": "$DQUAMPolicy"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9uk2qo1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_e69of4q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_e69of4q_caption)#",
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
							"dataSourceName": "GridDetail_59anabbDS"
						}
					}
				},
				"parentName": "FlexContainer_9uk2qo1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1a3m7v6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1a3m7v6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9uk2qo1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_hllgmh7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_hllgmh7_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_59anabb"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1a3m7v6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_cad1ycp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_cad1ycp_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMProcedure"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1a3m7v6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_3wtuak3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_3wtuak3_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_59anabb"
					]
				},
				"parentName": "FlexContainer_9uk2qo1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_9cdwnn7",
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
				"parentName": "ExpansionPanel_dwez3g9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_59anabb",
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
					"items": "$GridDetail_59anabb",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_59anabbDS_Id",
					"columns": [
						{
							"id": "ba668b28-7be1-054c-584a-5ee817f47e5e",
							"code": "GridDetail_59anabbDS_DQUAMStatusProcedure",
							"caption": "#ResourceString(GridDetail_59anabbDS_DQUAMStatusProcedure)#",
							"dataValueType": 10
						},
						{
							"id": "fa33364f-fb90-77c2-b755-e11d59e3c1d3",
							"code": "GridDetail_59anabbDS_DQUAMTitle",
							"caption": "#ResourceString(GridDetail_59anabbDS_DQUAMTitle)#",
							"dataValueType": 30
						},
						{
							"id": "e4acd365-6ac7-6160-368a-c51dceea5ce2",
							"code": "GridDetail_59anabbDS_DQUAMPolicy",
							"caption": "#ResourceString(GridDetail_59anabbDS_DQUAMPolicy)#",
							"dataValueType": 10
						},
						{
							"id": "a9fd9952-ed58-2a5b-ae60-1258517eef54",
							"code": "GridDetail_59anabbDS_DQUAMDepartment",
							"caption": "#ResourceString(GridDetail_59anabbDS_DQUAMDepartment)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_9cdwnn7",
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
					"DQUAMName": {
						"modelConfig": {
							"path": "PDS.DQUAMName"
						}
					},
					"PDS_DQUAMDepartment_6rs2ze9": {
						"modelConfig": {
							"path": "PDS.DQUAMDepartment"
						}
					},
					"PDS_DQUAMStatus_cjzoqpe": {
						"modelConfig": {
							"path": "PDS.DQUAMStatus"
						}
					},
					"GridDetail_tcoczg4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tcoczg4DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DQUAMTitle"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tcoczg4DS_DQUAMTitle": {
									"modelConfig": {
										"path": "GridDetail_tcoczg4DS.DQUAMTitle"
									}
								},
								"GridDetail_tcoczg4DS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_tcoczg4DS.DQUAMDepartment"
									}
								},
								"GridDetail_tcoczg4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_tcoczg4DS.Id"
									}
								}
							}
						}
					},
					"DQUAMPolicy": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"ApprovalList_7xobe6l": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_7xobe6lDS",
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
								"ApprovalList_7xobe6lDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.VisaOwner"
									}
								},
								"ApprovalList_7xobe6lDS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.Objective"
									}
								},
								"ApprovalList_7xobe6lDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.CreatedOn"
									}
								},
								"ApprovalList_7xobe6lDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.SetDate"
									}
								},
								"ApprovalList_7xobe6lDS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.SetBy"
									}
								},
								"ApprovalList_7xobe6lDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.Status"
									}
								},
								"ApprovalList_7xobe6lDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_7xobe6lDS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_t84uc20": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_t84uc20DS",
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
								"ApprovalList_t84uc20DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.VisaOwner"
									}
								},
								"ApprovalList_t84uc20DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.Objective"
									}
								},
								"ApprovalList_t84uc20DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.CreatedOn"
									}
								},
								"ApprovalList_t84uc20DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.SetDate"
									}
								},
								"ApprovalList_t84uc20DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.SetBy"
									}
								},
								"ApprovalList_t84uc20DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.Status"
									}
								},
								"ApprovalList_t84uc20DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_t84uc20DS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_h6xul0s": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_h6xul0sDS",
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
								"ApprovalList_h6xul0sDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.VisaOwner"
									}
								},
								"ApprovalList_h6xul0sDS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.Objective"
									}
								},
								"ApprovalList_h6xul0sDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.CreatedOn"
									}
								},
								"ApprovalList_h6xul0sDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.SetDate"
									}
								},
								"ApprovalList_h6xul0sDS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.SetBy"
									}
								},
								"ApprovalList_h6xul0sDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.Status"
									}
								},
								"ApprovalList_h6xul0sDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_h6xul0sDS.Id"
									}
								}
							}
						}
					},
					"FileList_xzrd1v5": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_xzrd1v5DS",
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
								"FileList_xzrd1v5DS_Name": {
									"modelConfig": {
										"path": "FileList_xzrd1v5DS.Name"
									}
								},
								"FileList_xzrd1v5DS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_xzrd1v5DS.CreatedOn"
									}
								},
								"FileList_xzrd1v5DS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_xzrd1v5DS.CreatedBy"
									}
								},
								"FileList_xzrd1v5DS_Size": {
									"modelConfig": {
										"path": "FileList_xzrd1v5DS.Size"
									}
								},
								"FileList_xzrd1v5DS_Id": {
									"modelConfig": {
										"path": "FileList_xzrd1v5DS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_8n51jqq": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_8n51jqqDS",
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
								"ApprovalList_8n51jqqDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.VisaOwner"
									}
								},
								"ApprovalList_8n51jqqDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.CreatedOn"
									}
								},
								"ApprovalList_8n51jqqDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.SetDate"
									}
								},
								"ApprovalList_8n51jqqDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.Status"
									}
								},
								"ApprovalList_8n51jqqDS_Comment": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.Comment"
									}
								},
								"ApprovalList_8n51jqqDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_8n51jqqDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_jteudke": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_jteudkeDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_jteudkeDS_DQUAMName": {
									"modelConfig": {
										"path": "GridDetail_jteudkeDS.DQUAMName"
									}
								},
								"GridDetail_jteudkeDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_jteudkeDS.CreatedBy"
									}
								},
								"GridDetail_jteudkeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_jteudkeDS.Id"
									}
								}
							}
						}
					},
					"DQUAMpolicy": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"GridDetail_ec2z35x": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ec2z35xDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ec2z35xDS_Name": {
									"modelConfig": {
										"path": "GridDetail_ec2z35xDS.Name"
									}
								},
								"GridDetail_ec2z35xDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ec2z35xDS.Id"
									}
								}
							}
						}
					},
					"PDS_DQUAMPPRoles_6bqjzre": {
						"modelConfig": {
							"path": "PDS.DQUAMPPRoles"
						}
					},
					"PDS_DQUAMColumn6_2c1sna5": {
						"modelConfig": {
							"path": "PDS.DQUAMColumn6"
						}
					},
					"PDS_DQUAMPPRoles_pqgvhpf": {
						"modelConfig": {
							"path": "PDS.DQUAMPPRoles"
						}
					},
					"GridDetail_91h4wps": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_91h4wpsDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_91h4wps_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_91h4wpsDS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_91h4wpsDS.DQUAMcontactID"
									}
								},
								"GridDetail_91h4wpsDS_DQUAMpolicyID": {
									"modelConfig": {
										"path": "GridDetail_91h4wpsDS.DQUAMpolicyID"
									}
								},
								"GridDetail_91h4wpsDS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_91h4wpsDS.DQUAMPPRole"
									}
								},
								"GridDetail_91h4wpsDS_Id": {
									"modelConfig": {
										"path": "GridDetail_91h4wpsDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_91h4wps_PredefinedFilter": {
						"value": {
							"items": {
								"e6ef1b87-b00f-4906-847c-343461d00de7": {
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
							"rootSchemaName": "DQUAMPolicycontactrelationship"
						}
					},
					"DQUAMpolicyID": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"DQUAMPPRole": {
						"modelConfig": {
							"path": "PDS.DQUAMPPRoles"
						}
					},
					"GridDetail_r48ssz9": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_r48ssz9DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_r48ssz9_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_r48ssz9DS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_r48ssz9DS.DQUAMcontactID"
									}
								},
								"GridDetail_r48ssz9DS_DQUAMpolicyID": {
									"modelConfig": {
										"path": "GridDetail_r48ssz9DS.DQUAMpolicyID"
									}
								},
								"GridDetail_r48ssz9DS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_r48ssz9DS.DQUAMPPRole"
									}
								},
								"GridDetail_r48ssz9DS_Id": {
									"modelConfig": {
										"path": "GridDetail_r48ssz9DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_r48ssz9_PredefinedFilter": {
						"value": {
							"items": {
								"5a8422ee-8f3d-441b-8064-acaec6dce130": {
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
							"rootSchemaName": "DQUAMPolicyStakeholders"
						}
					},
					"GridDetail_erqecuz": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_erqecuzDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_erqecuz_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_erqecuzDS_DQUAMcontactID": {
									"modelConfig": {
										"path": "GridDetail_erqecuzDS.DQUAMcontactID"
									}
								},
								"GridDetail_erqecuzDS_DQUAMpolicyID": {
									"modelConfig": {
										"path": "GridDetail_erqecuzDS.DQUAMpolicyID"
									}
								},
								"GridDetail_erqecuzDS_DQUAMPPRole": {
									"modelConfig": {
										"path": "GridDetail_erqecuzDS.DQUAMPPRole"
									}
								},
								"GridDetail_erqecuzDS_Id": {
									"modelConfig": {
										"path": "GridDetail_erqecuzDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_erqecuz_PredefinedFilter": {
						"value": {
							"items": {
								"bc130c6f-511a-47e9-85d4-32773e1731b0": {
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
							"rootSchemaName": "DQUAMPolicyApprovals"
						}
					},
					"GridDetail_59anabb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_59anabbDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_59anabbDS_DQUAMStatusProcedure": {
									"modelConfig": {
										"path": "GridDetail_59anabbDS.DQUAMStatusProcedure"
									}
								},
								"GridDetail_59anabbDS_DQUAMTitle": {
									"modelConfig": {
										"path": "GridDetail_59anabbDS.DQUAMTitle"
									}
								},
								"GridDetail_59anabbDS_DQUAMPolicy": {
									"modelConfig": {
										"path": "GridDetail_59anabbDS.DQUAMPolicy"
									}
								},
								"GridDetail_59anabbDS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_59anabbDS.DQUAMDepartment"
									}
								},
								"GridDetail_59anabbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_59anabbDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_0abmoeu": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_0abmoeuDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_0abmoeuDS_Objective": {
									"modelConfig": {
										"path": "GridDetail_0abmoeuDS.Objective"
									}
								},
								"GridDetail_0abmoeuDS_Id": {
									"modelConfig": {
										"path": "GridDetail_0abmoeuDS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_l4q0o9y": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_l4q0o9yDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_l4q0o9yDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.VisaOwner"
									}
								},
								"ApprovalList_l4q0o9yDS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.Objective"
									}
								},
								"ApprovalList_l4q0o9yDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.CreatedOn"
									}
								},
								"ApprovalList_l4q0o9yDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.SetDate"
									}
								},
								"ApprovalList_l4q0o9yDS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.SetBy"
									}
								},
								"ApprovalList_l4q0o9yDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.Status"
									}
								},
								"ApprovalList_l4q0o9yDS_Comment": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.Comment"
									}
								},
								"ApprovalList_l4q0o9yDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_l4q0o9yDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_8hhtto8": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8hhtto8DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_8hhtto8_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8hhtto8DS_VisaOwner": {
									"modelConfig": {
										"path": "GridDetail_8hhtto8DS.VisaOwner"
									}
								},
								"GridDetail_8hhtto8DS_Comment": {
									"modelConfig": {
										"path": "GridDetail_8hhtto8DS.Comment"
									}
								},
								"GridDetail_8hhtto8DS_SetDate": {
									"modelConfig": {
										"path": "GridDetail_8hhtto8DS.SetDate"
									}
								},
								"GridDetail_8hhtto8DS_Status": {
									"modelConfig": {
										"path": "GridDetail_8hhtto8DS.Status"
									}
								},
								"GridDetail_8hhtto8DS_Id": {
									"modelConfig": {
										"path": "GridDetail_8hhtto8DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_8hhtto8_PredefinedFilter": {
						"value": {
							"items": {
								"f74cabee-7018-400c-aa27-d1417b3bf33d": {
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
											"value": "DQUAMPolicieAndProcedu"
										}
									}
								},
								"fcb33ec1-76fa-418a-870e-8025b4a2b798": {
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
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "SysApproval"
						}
					},
					"PageParameters_DQUAMRichTextParameter1_81aol3s": {
						"modelConfig": {
							"path": "PageParameters.DQUAMRichTextParameter1"
						}
					},
					"PDS_DQUAMSLANextRevist_2lefnuw": {
						"modelConfig": {
							"path": "PDS.DQUAMSLANextRevist"
						}
					},
					"PDS_DQUAMColumn6_r4kydb5": {
						"modelConfig": {
							"path": "PDS.DQUAMColumn6"
						}
					},
					"PDS_DQUAMNextRevesionDate_cpdbpl1": {
						"modelConfig": {
							"path": "PDS.DQUAMNextRevesionDate"
						}
					},
					"PDS_DQUAMSLANextRevist_528m5m8": {
						"modelConfig": {
							"path": "PDS.DQUAMSLANextRevist"
						}
					},
					"GridDetail_cdemt1i": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_cdemt1iDS",
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_cdemt1iDS_Name": {
									"modelConfig": {
										"path": "GridDetail_cdemt1iDS.Name"
									}
								},
								"GridDetail_cdemt1iDS_Id": {
									"modelConfig": {
										"path": "GridDetail_cdemt1iDS.Id"
									}
								}
							}
						}
					},
					"PDS_DQUAMPolicyID_sbb985h": {
						"modelConfig": {
							"path": "PDS.DQUAMPolicyID"
						}
					},
					"GridDetail_xieuuj2": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_xieuuj2DS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_xieuuj2DS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_xieuuj2DS.DQUAMDepartment"
									}
								},
								"GridDetail_xieuuj2DS_Id": {
									"modelConfig": {
										"path": "GridDetail_xieuuj2DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_xieuuj2_PredefinedFilter": {
						"value": null
					},
					"GridDetail_ppkc5r7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ppkc5r7DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DQUAMDepartment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ppkc5r7DS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_ppkc5r7DS.DQUAMDepartment"
									}
								},
								"GridDetail_ppkc5r7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ppkc5r7DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_1o8llf5": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_1o8llf5DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_1o8llf5DS_DQUAMMergedpolicyPolicy": {
									"modelConfig": {
										"path": "GridDetail_1o8llf5DS.DQUAMMergedpolicyPolicy"
									}
								},
								"GridDetail_1o8llf5DS_Id": {
									"modelConfig": {
										"path": "GridDetail_1o8llf5DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_wujrxyx": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wujrxyxDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wujrxyxDS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_wujrxyxDS.DQUAMDepartment"
									}
								},
								"GridDetail_wujrxyxDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wujrxyxDS.Id"
									}
								}
							}
						}
					},
					"PDS_DQUAMDepartment_ye6qog4": {
						"modelConfig": {
							"path": "PDS.DQUAMDepartment"
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
						"GridDetail_91h4wpsDS": [
							{
								"attributePath": "DQUAMpolicyID",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_r48ssz9DS": [
							{
								"attributePath": "DQUAMpolicyID",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_erqecuzDS": [
							{
								"attributePath": "DQUAMpolicyID",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_59anabbDS": [
							{
								"attributePath": "DQUAMPolicy",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_8hhtto8DS": [
							{
								"attributePath": "EntityId",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_1o8llf5DS": [
							{
								"attributePath": "DQUAMpolicy",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_wujrxyxDS": [
							{
								"attributePath": "DQUAMPolicy",
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
							"entitySchemaName": "DQUAMPolicieAndProcedu"
						},
						"scope": "page"
					},
					"GridDetail_tcoczg4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMProcedure",
							"attributes": {
								"DQUAMTitle": {
									"path": "DQUAMTitle"
								},
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
								}
							}
						}
					},
					"ApprovalList_7xobe6lDS": {
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
					"ApprovalList_t84uc20DS": {
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
					"ApprovalList_h6xul0sDS": {
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
					"FileList_xzrd1v5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"ApprovalList_8n51jqqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"Status": {
									"path": "Status"
								},
								"Comment": {
									"path": "Comment"
								}
							}
						}
					},
					"GridDetail_ec2z35xDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contact",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_91h4wpsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMPolicycontactrelationship",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMpolicyID": {
									"path": "DQUAMpolicyID"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								}
							}
						}
					},
					"GridDetail_r48ssz9DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMPolicyStakeholders",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMpolicyID": {
									"path": "DQUAMpolicyID"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								}
							}
						}
					},
					"GridDetail_erqecuzDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMPolicyApprovals",
							"attributes": {
								"DQUAMcontactID": {
									"path": "DQUAMcontactID"
								},
								"DQUAMpolicyID": {
									"path": "DQUAMpolicyID"
								},
								"DQUAMPPRole": {
									"path": "DQUAMPPRole"
								}
							}
						}
					},
					"GridDetail_59anabbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMProcedure",
							"attributes": {
								"DQUAMStatusProcedure": {
									"path": "DQUAMStatusProcedure"
								},
								"DQUAMTitle": {
									"path": "DQUAMTitle"
								},
								"DQUAMPolicy": {
									"path": "DQUAMPolicy"
								},
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
								}
							}
						}
					},
					"GridDetail_0abmoeuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"Objective": {
									"path": "Objective"
								}
							}
						}
					},
					"ApprovalList_l4q0o9yDS": {
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
								},
								"Comment": {
									"path": "Comment"
								}
							}
						}
					},
					"GridDetail_8hhtto8DS": {
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
								}
							}
						}
					},
					"GridDetail_cdemt1iDS": {
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
					"GridDetail_xieuuj2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMDepartmentPolicy",
							"attributes": {
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
								}
							}
						}
					},
					"GridDetail_ppkc5r7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMDepartmentPolicy",
							"attributes": {
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
								}
							}
						}
					},
					"GridDetail_1o8llf5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMMergedPolicy",
							"attributes": {
								"DQUAMMergedpolicyPolicy": {
									"path": "DQUAMMergedpolicyPolicy"
								}
							}
						}
					},
					"GridDetail_wujrxyxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMDepartmentPolicy",
							"attributes": {
								"DQUAMDepartment": {
									"path": "DQUAMDepartment"
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