define("DQUAMPage_lqhw3go", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_039e3fh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMComplianceManagementType_pikhis4",
					"labelPosition": "above",
					"control": "$DQUAMComplianceManagementDS_DQUAMComplianceManagementType_pikhis4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_lk32icz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lk32icz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_039e3fh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_hg484qx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMComplianceSubject_8217fcr",
					"labelPosition": "above",
					"control": "$DQUAMComplianceManagementDS_DQUAMComplianceSubject_8217fcr"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_2grfy21",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DQUAMComplianceManagementDS_DQUAMComplianceDate_bqs5tra",
					"labelPosition": "above",
					"control": "$DQUAMComplianceManagementDS_DQUAMComplianceDate_bqs5tra"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
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
					"DQUAMComplianceManagementDS_DQUAMComplianceManagementType_pikhis4": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceManagementType"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMColumn2_1o08ey1": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMColumn2"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMSubject_xu5j6mz": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMSubject"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMComplianceSubject_8217fcr": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceSubject"
						}
					},
					"DQUAMComplianceManagementDS_DQUAMComplianceDate_bqs5tra": {
						"modelConfig": {
							"path": "DQUAMComplianceManagementDS.DQUAMComplianceDate"
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
					"dataSources": {
						"DQUAMComplianceManagementDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DQUAMComplianceManagement"
							}
						}
					},
					"primaryDataSourceName": "DQUAMComplianceManagementDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});