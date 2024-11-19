define("DQUAMPage_qzn8vle", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_oa3fpeo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMEntity_23cdbf9DS_DQUAMStatement_cgslhu5",
					"labelPosition": "auto",
					"control": "$DQUAMEntity_23cdbf9DS_DQUAMStatement_cgslhu5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_em99znn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMEntity_23cdbf9DS_DQUAMInterpretation_ded2alc",
					"labelPosition": "auto",
					"control": "$DQUAMEntity_23cdbf9DS_DQUAMInterpretation_ded2alc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_lhdj03t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DQUAMEntity_23cdbf9DS_DQUAMFrom_oi6akkj",
					"labelPosition": "auto",
					"control": "$DQUAMEntity_23cdbf9DS_DQUAMFrom_oi6akkj"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9vhg2ow",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DQUAMEntity_23cdbf9DS_DQUAMTo_x6lqpfs",
					"labelPosition": "auto",
					"control": "$DQUAMEntity_23cdbf9DS_DQUAMTo_x6lqpfs"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_mf2wixg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMEntity_23cdbf9DS_DQUAMRisk_ciy4j0t",
					"labelPosition": "auto",
					"control": "$DQUAMEntity_23cdbf9DS_DQUAMRisk_ciy4j0t"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DQUAMEntity_23cdbf9DS_DQUAMStatement_cgslhu5": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMStatement"
						}
					},
					"DQUAMEntity_23cdbf9DS_DQUAMInterpretation_ded2alc": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMInterpretation"
						}
					},
					"DQUAMEntity_23cdbf9DS_DQUAMTo_x6lqpfs": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMTo"
						}
					},
					"DQUAMEntity_23cdbf9DS_DQUAMFrom_oi6akkj": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMFrom"
						}
					},
					"DQUAMEntity_23cdbf9DS_DQUAMRisk_ciy4j0t": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMRisk"
						}
					},
					"DQUAMEntity_23cdbf9DS_DQUAMName_twpcjyi": {
						"modelConfig": {
							"path": "DQUAMEntity_23cdbf9DS.DQUAMName"
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
					"primaryDataSourceName": "DQUAMEntity_23cdbf9DS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DQUAMEntity_23cdbf9DS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "DQUAMEntity_23cdbf9"
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