﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseRightsEventListenerSchema

	/// <exclude/>
	public class CaseRightsEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseRightsEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseRightsEventListenerSchema(CaseRightsEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ce1c541d-1f3a-4161-afe5-3ed520df46e0");
			Name = "CaseRightsEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("eac080e5-c7e6-4027-928f-bde13f5a1451");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,86,109,111,219,54,16,254,172,2,253,15,156,6,20,50,224,200,73,11,100,75,93,167,240,107,102,96,91,189,58,233,62,12,195,64,75,103,91,131,68,122,36,229,206,43,242,223,119,36,245,66,41,182,91,228,139,13,30,239,158,123,123,142,39,70,51,144,59,26,1,185,7,33,168,228,107,21,142,57,91,39,155,92,80,149,112,246,242,197,151,151,47,188,92,38,108,67,150,7,169,32,235,87,103,215,36,203,56,59,126,227,128,133,31,147,205,86,201,37,136,125,18,193,113,117,113,82,30,78,70,39,175,166,76,37,42,1,249,85,133,112,186,7,166,28,61,155,212,18,148,194,147,36,131,182,97,51,1,212,46,85,17,2,65,190,23,176,193,11,50,78,169,148,111,201,152,74,176,73,26,63,63,39,8,206,64,24,213,94,175,71,222,201,60,203,168,56,220,22,231,82,129,172,185,32,17,26,19,97,172,195,82,191,231,24,252,97,146,56,52,144,131,101,180,133,140,254,138,125,196,216,125,237,223,239,252,137,202,187,124,149,38,17,137,116,92,167,194,34,111,201,8,111,142,192,34,192,23,19,116,149,224,44,129,52,198,12,23,34,217,83,5,246,114,103,15,68,0,141,57,75,15,228,46,79,98,242,23,23,27,202,146,255,76,201,176,98,195,56,75,216,3,75,212,60,198,24,25,124,54,106,129,63,153,221,188,153,140,71,55,23,215,163,201,15,23,147,217,213,213,197,205,232,245,240,226,242,242,106,114,125,57,189,121,243,227,248,218,239,244,139,56,128,197,54,148,102,92,11,193,119,32,116,107,49,54,147,115,17,154,205,223,102,253,19,164,168,212,56,124,5,246,23,80,91,238,228,235,121,205,140,87,156,167,228,94,28,238,64,45,229,238,131,147,240,60,14,30,36,8,228,13,131,72,11,72,222,56,118,109,145,34,206,20,141,176,36,93,194,115,101,101,188,1,211,33,122,244,60,175,41,197,10,106,221,112,154,237,212,161,111,20,146,53,9,108,40,99,11,58,140,34,158,51,196,14,218,174,143,121,165,165,118,167,244,232,45,33,69,11,34,205,223,111,57,136,67,209,56,123,209,130,237,88,35,207,195,97,73,243,140,5,254,60,246,107,225,76,240,44,240,63,125,198,58,85,76,112,174,127,223,130,128,192,95,112,161,104,90,69,238,119,194,185,156,254,147,211,52,176,160,225,130,10,36,185,66,202,59,1,87,40,67,134,132,114,185,118,127,216,65,35,140,22,28,134,47,85,112,134,170,21,56,149,69,218,182,218,158,83,149,112,250,47,68,185,130,37,62,8,41,124,132,136,139,248,157,46,234,109,160,71,2,41,55,184,45,80,236,57,52,77,210,1,124,162,105,14,133,174,169,151,237,72,139,2,133,75,1,42,23,172,117,73,190,123,74,133,71,243,91,168,175,105,42,205,107,170,197,39,200,251,132,49,207,229,110,221,148,130,68,149,224,8,99,159,199,175,138,94,14,75,202,43,75,178,34,155,90,92,144,235,60,159,170,116,106,62,181,122,254,172,150,159,237,184,147,130,45,98,93,191,190,219,195,186,138,79,187,253,248,173,79,152,243,44,182,151,80,33,0,32,145,128,245,192,63,177,15,194,15,108,206,176,41,10,98,191,87,219,185,219,169,124,113,249,30,23,104,18,3,217,115,164,69,109,23,240,213,223,182,233,12,203,210,37,214,203,112,141,29,48,174,134,2,215,47,148,236,89,97,28,142,211,160,180,130,162,60,214,154,128,253,27,144,192,10,58,86,207,234,52,185,138,74,86,91,119,68,191,14,241,145,182,140,75,109,191,240,99,70,197,157,187,106,149,78,25,93,165,160,97,155,159,16,26,222,96,6,133,187,135,214,8,249,119,130,50,165,113,22,32,178,68,74,148,202,25,23,246,5,116,87,137,223,181,51,220,169,223,249,179,161,188,122,229,164,219,224,139,190,58,181,173,78,132,249,13,11,170,218,23,141,45,59,104,46,221,247,239,205,100,187,178,227,46,203,199,78,167,233,106,155,9,162,108,188,165,108,131,3,71,99,251,201,99,71,207,40,6,246,187,167,91,54,24,119,182,102,165,211,223,58,212,70,172,33,54,205,197,105,230,87,225,213,223,88,103,92,132,247,124,169,4,50,32,192,137,190,236,146,215,157,190,254,104,240,170,87,249,241,244,204,90,105,83,136,178,255,1,183,63,178,36,158,11,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ce1c541d-1f3a-4161-afe5-3ed520df46e0"));
		}

		#endregion

	}

	#endregion

}
