define("DQUAMDQUAM_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddButton"
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DQUAMDQUAM"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"_filterOptions": {
						"expose": [],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"targetAttributes": []
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"_filterOptions": {
						"expose": [],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					},
					"rootSchemaName": "DQUAMDQUAM"
				}
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "TabPanel_j2r2q8z",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_7kdbbbr",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_7kdbbbr_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j2r2q8z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_1pd7qko",
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
				"parentName": "TabContainer_7kdbbbr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_v4mu585",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_v4mu585_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "DQUAMPage_mzil96w"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_1pd7qko",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_zty34gs",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zty34gs_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "DQUAMPage_3ye3c9r"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_1pd7qko",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_1vhk4g7",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_1vhk4g7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_1vhk4g7DS_Id",
					"columns": [
						{
							"id": "21a42a4d-bbd9-c5e7-d5cc-dd1295232de7",
							"code": "DataGrid_1vhk4g7DS_CreatedBy",
							"caption": "#ResourceString(DataGrid_1vhk4g7DS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_7kdbbbr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_jg8ab1p",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_jg8ab1p_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j2r2q8z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_x789imu",
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
				"parentName": "TabContainer_jg8ab1p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_lsr58nv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lsr58nv_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "DQUAMPage_bzpvvyl"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_x789imu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_fxa7dki",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fxa7dki_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GridContainer_x789imu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_mpcwvoo",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_mpcwvoo",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_mpcwvooDS_Id",
					"columns": [
						{
							"id": "da7ede6b-c8b7-a133-e4b7-351cef146afc",
							"code": "DataGrid_mpcwvooDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_mpcwvooDS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_jg8ab1p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_puwu1v8",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_puwu1v8_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j2r2q8z",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_f6zhm2m",
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
				"parentName": "TabContainer_puwu1v8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_g5b6xtj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_g5b6xtj_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GridContainer_f6zhm2m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_lzljeeh",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lzljeeh_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GridContainer_f6zhm2m",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_jislura",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_jislura_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j2r2q8z",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_asjbptk",
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
				"parentName": "TabContainer_jislura",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_2y53d6o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_2y53d6o_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPolicyAndProcedure"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_asjbptk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_v2zl8i8",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_v2zl8i8_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j2r2q8z",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_eumbvj1",
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
				"parentName": "TabContainer_v2zl8i8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_wp84vre",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wp84vre_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DQUAMStrategicPlanning"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_eumbvj1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_cp14ygs",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_cp14ygs_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "DQUAMDesktop_ky11pxe"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_eumbvj1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_1hj3a9c",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_1hj3a9c",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_1hj3a9cDS_Id",
					"columns": [
						{
							"id": "6e08e79c-d0a1-17a8-670f-6fe85fbf1b02",
							"code": "DataGrid_1hj3a9cDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_1hj3a9cDS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_v2zl8i8",
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
					"DataGrid_1vhk4g7": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_1vhk4g7DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_1vhk4g7DS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_1vhk4g7DS.CreatedBy"
									}
								},
								"DataGrid_1vhk4g7DS_Id": {
									"modelConfig": {
										"path": "DataGrid_1vhk4g7DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_mpcwvoo": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_mpcwvooDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_mpcwvooDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_mpcwvooDS.CreatedBy"
									}
								},
								"DataGrid_mpcwvooDS_Id": {
									"modelConfig": {
										"path": "DataGrid_mpcwvooDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_1hj3a9c": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_1hj3a9cDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_1hj3a9cDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_1hj3a9cDS.CreatedBy"
									}
								},
								"DataGrid_1hj3a9cDS_Id": {
									"modelConfig": {
										"path": "DataGrid_1hj3a9cDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_6yqv149": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_6yqv149DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrPolicyReference"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_6yqv149DS_UsrPolicyReference": {
									"modelConfig": {
										"path": "DataGrid_6yqv149DS.UsrPolicyReference"
									}
								},
								"DataGrid_6yqv149DS_Id": {
									"modelConfig": {
										"path": "DataGrid_6yqv149DS.Id"
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
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_DQUAMName": {
						"modelConfig": {
							"path": "PDS.DQUAMName"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_1vhk4g7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMComplianceManagement",
							"attributes": {
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"DataGrid_mpcwvooDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMStandardManagement",
							"attributes": {
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"DataGrid_1hj3a9cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DQUAMStrategicPlan",
							"attributes": {
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"DataGrid_6yqv149DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPolicyAndProcedure",
							"attributes": {
								"UsrPolicyReference": {
									"path": "UsrPolicyReference"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "DQUAMDQUAM"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});