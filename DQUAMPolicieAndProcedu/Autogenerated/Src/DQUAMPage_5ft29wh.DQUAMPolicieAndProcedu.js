define("DQUAMPage_5ft29wh", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_c7jaloy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DQUAMPolicieAndProceduDS_DQUAMName_1xg6ktv",
					"labelPosition": "above",
					"control": "$DQUAMPolicieAndProceduDS_DQUAMName_1xg6ktv"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_jgz4lor",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DQUAMPolicieAndProceduDS_DQUAMDepartment_zqzpi0i",
					"labelPosition": "above",
					"control": "$DQUAMPolicieAndProceduDS_DQUAMDepartment_zqzpi0i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_u9e0rt7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u9e0rt7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jgz4lor",
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
					"DQUAMPolicieAndProceduDS_DQUAMName_1xg6ktv": {
						"modelConfig": {
							"path": "DQUAMPolicieAndProceduDS.DQUAMName"
						}
					},
					"DQUAMPolicieAndProceduDS_DQUAMDepartment_zbc1jym": {
						"modelConfig": {
							"path": "DQUAMPolicieAndProceduDS.DQUAMDepartment"
						}
					},
					"GridDetail_axwk9t3": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_axwk9t3DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_axwk9t3DS_Name": {
									"modelConfig": {
										"path": "GridDetail_axwk9t3DS.Name"
									}
								},
								"GridDetail_axwk9t3DS_Id": {
									"modelConfig": {
										"path": "GridDetail_axwk9t3DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ayovfnj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ayovfnjDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ayovfnjDS_DQUAMDepartment": {
									"modelConfig": {
										"path": "GridDetail_ayovfnjDS.DQUAMDepartment"
									}
								},
								"GridDetail_ayovfnjDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ayovfnjDS.Id"
									}
								}
							}
						}
					},
					"DQUAMPolicy": {
						"modelConfig": {
							"path": "DQUAMPolicieAndProceduDS.Id"
						}
					},
					"DQUAMPolicieAndProceduDS_DQUAMDepartment_zqzpi0i": {
						"modelConfig": {
							"path": "DQUAMPolicieAndProceduDS.DQUAMDepartment"
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
						"DQUAMPolicieAndProceduDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DQUAMPolicieAndProcedu"
							}
						},
						"GridDetail_axwk9t3DS": {
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
						"GridDetail_ayovfnjDS": {
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
					},
					"primaryDataSourceName": "DQUAMPolicieAndProceduDS",
					"dependencies": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});