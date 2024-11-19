define("DQUAMPage_mzil96w", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_6acgv2u",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.DQUAMQualityImprovementDS_DQUAMColumn1_pedeui4",
					"labelPosition": "above",
					"control": "$DQUAMQualityImprovementDS_DQUAMColumn1_pedeui4"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DQUAMQualityImprovementDS_DQUAMColumn1_pedeui4": {
						"modelConfig": {
							"path": "DQUAMQualityImprovementDS.DQUAMColumn1"
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
						"DQUAMQualityImprovementDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DQUAMQualityImprovement"
							}
						}
					},
					"primaryDataSourceName": "DQUAMQualityImprovementDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});