define("DQUAMPage_bzpvvyl", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_y4jjvxc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DQUAMStandardManagementDS_DQUAMColumn1_s6ve69i",
					"labelPosition": "above",
					"control": "$DQUAMStandardManagementDS_DQUAMColumn1_s6ve69i",
					"multiline": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_s48q6lc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DQUAMStandardManagementDS_DQUAMColumn2_fjfzjpr",
					"labelPosition": "above",
					"control": "$DQUAMStandardManagementDS_DQUAMColumn2_fjfzjpr",
					"pickerType": "date"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_g7hsefy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DQUAMStandardManagementDS_DQUAMColumn3_veio0or",
					"labelPosition": "above",
					"control": "$DQUAMStandardManagementDS_DQUAMColumn3_veio0or",
					"pickerType": "date"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_7p2os46",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DQUAMStandardManagementDS_DQUAMColumn4_qsq83z8",
					"labelPosition": "above",
					"control": "$DQUAMStandardManagementDS_DQUAMColumn4_qsq83z8",
					"multiline": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DQUAMStandardManagementDS_DQUAMColumn1_s6ve69i": {
						"modelConfig": {
							"path": "DQUAMStandardManagementDS.DQUAMColumn1"
						}
					},
					"DQUAMStandardManagementDS_DQUAMColumn2_fjfzjpr": {
						"modelConfig": {
							"path": "DQUAMStandardManagementDS.DQUAMColumn2"
						}
					},
					"DQUAMStandardManagementDS_DQUAMColumn3_veio0or": {
						"modelConfig": {
							"path": "DQUAMStandardManagementDS.DQUAMColumn3"
						}
					},
					"DQUAMStandardManagementDS_DQUAMColumn4_qsq83z8": {
						"modelConfig": {
							"path": "DQUAMStandardManagementDS.DQUAMColumn4"
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
						"DQUAMStandardManagementDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DQUAMStandardManagement"
							}
						}
					},
					"primaryDataSourceName": "DQUAMStandardManagementDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});