define("DQUAMPage_c8d08jm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "insert",
				"name": "ComboBox_ya5zy9i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMComplianceManagementType_t226mrm",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMComplianceManagementType_t226mrm",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_fnnj01p",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fnnj01p_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ya5zy9i",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_tojxt2u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMSubject_71ee50c",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMSubject_71ee50c",
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
				"name": "DateTimePicker_9wumws6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMColumn2_8u7z91j",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMColumn2_8u7z91j",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_u8s160h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMColumn11_qkcg31a",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMColumn11_qkcg31a",
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
				"name": "addRecord_flm08mp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_flm08mp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_u8s160h",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_Circulation",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_tkyaabi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMComMgtFrom_36nht4g",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMComMgtFrom_36nht4g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_Circulation",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_z1uvgp0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z1uvgp0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_tkyaabi",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_bob9gki",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMCompMgtCircDate_olmfwq4",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMCompMgtCircDate_olmfwq4",
					"pickerType": "date"
				},
				"parentName": "GridContainer_Circulation",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_bazttkf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMSection_ozv3k1z",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMSection_ozv3k1z",
					"multiline": false
				},
				"parentName": "GridContainer_Circulation",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ComplianceIssue",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_nfm6fwm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMDeadline_foaq38l",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMDeadline_foaq38l",
					"pickerType": "date"
				},
				"parentName": "GridContainer_ComplianceIssue",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_IncomingCorrespondence",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_c8qvrsi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMIncCorrespFrom_1gyke9r",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMIncCorrespFrom_1gyke9r",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_IncomingCorrespondence",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_49zoivg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_49zoivg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_c8qvrsi",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_RegulatoryInspection",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_5qcyb52",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMInspectionType_679fdyk",
					"labelPosition": "auto",
					"control": "$DQUAMComplianceManagementDS_DQUAMInspectionType_679fdyk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_RegulatoryInspection",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_jy27e9s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jy27e9s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5qcyb52",
				"propertyName": "listActions",
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
					"DQUAMComplianceManagementDS_DQUAMComplianceManagementType_t226mrm": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceManagementType"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMSubject_71ee50c": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceSubject"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn2_8u7z91j": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceDate"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn4_xz1qpua": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn4"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMCompMgtCircDate_olmfwq4": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMCompMgtCircDate"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMSection_ozv3k1z": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMSection"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMDeadline_foaq38l": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMDeadline"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn8_mfsajoe": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn8"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn9_tywief0": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn9"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMIncCorrespFrom_1gyke9r": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMIncCorrespFrom"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMInspectionType_679fdyk": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMInspectionType"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMComMgtFrom_36nht4g": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComMgtFrom"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn10_4aq0qx9": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn10"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMComplianceManagementStatus_1wrnjio": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceManagementStatus"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn11_qkcg31a": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn11"
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
					"primaryDataSourceName": "DQUAMComplianceManagementDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DQUAMComplianceManagementDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "DQUAMComplianceManagement"
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