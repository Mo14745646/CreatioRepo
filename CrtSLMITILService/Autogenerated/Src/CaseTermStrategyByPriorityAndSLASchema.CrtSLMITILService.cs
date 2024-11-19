﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseTermStrategyByPriorityAndSLASchema

	/// <exclude/>
	public class CaseTermStrategyByPriorityAndSLASchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseTermStrategyByPriorityAndSLASchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseTermStrategyByPriorityAndSLASchema(CaseTermStrategyByPriorityAndSLASchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("99e2e60e-c28a-44b3-b5a6-f027322df2c4");
			Name = "CaseTermStrategyByPriorityAndSLA";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("914c52f8-7161-4b32-82f6-d4cef8b3a889");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,85,223,111,218,48,16,126,166,82,255,135,91,246,18,36,20,246,220,2,18,163,45,66,106,59,38,216,246,48,237,193,36,7,120,74,236,212,118,152,178,138,255,125,231,56,52,33,208,178,105,191,94,80,124,62,127,223,221,247,157,141,96,9,234,148,133,8,115,84,138,105,185,52,193,72,138,37,95,101,138,25,46,197,249,217,227,249,89,43,211,92,172,96,150,107,131,201,101,99,77,249,113,140,161,77,214,193,24,5,42,30,86,57,117,216,36,145,226,248,142,194,231,226,193,181,48,220,112,212,148,64,41,175,21,174,136,8,70,49,211,26,46,96,196,52,210,129,100,102,168,92,92,229,111,243,169,226,82,113,147,15,69,52,187,29,22,135,186,221,46,244,116,150,36,76,229,131,114,61,4,93,30,1,179,102,6,34,52,4,195,5,106,48,60,65,176,43,13,139,28,210,18,15,152,136,128,16,131,29,96,183,134,152,102,139,152,135,16,22,85,157,170,233,197,178,9,236,177,85,84,93,245,74,194,26,149,133,70,42,219,242,180,224,114,41,205,206,138,192,68,144,96,44,230,223,169,23,6,2,191,1,39,0,38,200,100,185,164,110,145,142,32,66,168,112,217,247,78,21,235,117,7,174,173,224,137,175,219,36,236,165,76,177,4,4,205,82,223,99,106,165,189,193,156,88,232,43,75,80,24,29,244,186,69,70,113,160,148,234,20,175,255,65,163,162,206,133,155,44,200,246,150,29,184,226,197,7,149,209,35,113,104,110,58,32,23,95,105,119,96,121,117,219,82,181,46,96,65,52,126,243,108,145,0,118,174,91,219,82,106,20,145,83,123,95,250,59,52,107,25,21,170,43,190,161,66,221,118,234,22,176,144,50,134,185,202,103,104,70,44,38,12,166,110,148,76,102,168,54,60,196,137,40,63,166,44,52,62,169,13,227,140,71,16,150,153,147,168,172,161,181,97,10,80,63,64,191,48,171,24,248,124,22,174,49,97,239,51,84,121,67,138,160,158,112,199,4,91,161,234,128,119,140,212,107,95,62,17,84,180,116,95,179,68,220,147,91,196,72,188,193,48,42,99,190,183,107,35,152,68,94,59,176,57,14,193,166,221,240,152,110,133,14,110,229,138,19,218,187,20,221,19,65,40,205,16,185,74,254,4,100,229,225,113,98,243,237,122,164,144,52,116,209,79,220,172,167,118,68,236,45,212,190,11,210,131,65,99,195,181,20,243,60,165,135,224,33,99,113,173,81,122,122,188,14,236,230,231,138,25,102,67,65,109,155,20,110,255,53,254,66,223,231,249,237,118,197,239,44,171,30,74,8,171,79,231,193,24,77,51,169,225,123,9,197,151,224,87,167,131,137,190,151,230,58,73,77,238,183,119,243,212,170,188,38,244,42,249,243,155,47,150,199,118,83,26,254,145,197,25,246,236,88,14,252,99,3,82,114,110,139,95,133,38,83,162,54,72,240,170,79,239,230,146,101,177,241,45,134,203,222,158,188,35,255,225,90,252,217,219,224,168,64,87,216,77,23,27,197,157,156,147,202,219,58,40,233,43,178,56,62,238,107,45,241,223,185,250,51,15,165,52,212,52,70,187,49,40,151,32,55,244,199,206,35,116,118,143,171,113,152,68,126,221,242,189,38,15,11,41,68,250,133,55,183,54,87,79,58,30,244,92,23,228,16,255,183,33,203,77,251,103,20,52,26,127,65,92,23,221,15,110,127,0,149,66,74,20,177,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("99e2e60e-c28a-44b3-b5a6-f027322df2c4"));
		}

		#endregion

	}

	#endregion

}
