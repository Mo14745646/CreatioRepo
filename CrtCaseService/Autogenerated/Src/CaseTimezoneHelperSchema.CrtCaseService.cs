﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseTimezoneHelperSchema

	/// <exclude/>
	public class CaseTimezoneHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseTimezoneHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseTimezoneHelperSchema(CaseTimezoneHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("11a06301-1dba-455c-b67a-f3080359187e");
			Name = "CaseTimezoneHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d90d0856-ba58-4278-952e-572fe1ed6e53");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,85,109,79,219,48,16,254,92,36,254,195,41,124,104,34,49,87,211,52,77,98,109,167,81,24,244,3,26,26,148,73,155,246,193,77,174,96,45,113,58,191,148,117,140,255,190,115,28,183,77,90,38,196,169,74,234,123,121,236,123,238,124,145,188,64,61,231,41,194,53,42,197,117,57,51,108,84,202,153,184,181,138,27,81,202,253,189,135,253,61,32,177,90,200,91,184,90,106,131,197,251,109,21,59,225,134,55,244,155,128,69,81,202,39,141,10,255,99,98,39,199,100,245,246,94,175,7,125,109,139,130,171,229,112,173,26,113,141,96,68,129,240,167,148,8,26,213,66,164,200,54,98,122,205,160,185,157,230,34,5,109,40,195,20,210,156,107,93,129,92,19,134,131,56,199,124,142,202,251,62,184,205,59,157,3,133,183,196,6,92,160,185,43,51,125,4,151,74,44,184,65,111,109,29,204,43,70,119,152,254,4,161,1,139,185,89,174,15,200,86,17,189,118,72,127,206,21,47,64,82,81,6,145,165,68,168,20,18,83,87,135,104,56,161,53,164,43,5,235,247,42,239,221,193,228,103,120,106,198,89,52,28,249,191,32,50,148,70,204,4,170,237,80,133,198,42,169,135,99,189,65,100,117,110,242,13,70,231,253,253,243,84,151,57,26,140,163,119,236,245,91,246,6,254,214,156,184,76,51,156,43,76,137,150,236,144,138,137,237,82,58,126,191,17,242,196,136,92,24,129,154,157,161,113,105,5,67,156,128,144,212,77,60,99,81,242,195,237,55,247,52,135,90,77,203,50,135,177,62,117,39,91,5,77,26,68,65,147,183,67,10,85,174,173,86,140,36,80,119,116,144,10,84,232,128,87,129,195,0,140,178,161,49,131,92,97,78,168,212,97,213,107,0,18,239,107,93,220,220,53,105,198,57,33,10,114,91,200,56,10,251,80,109,118,185,125,82,101,17,71,55,247,116,173,62,102,133,144,19,41,204,78,199,175,119,168,168,12,163,85,165,119,57,17,87,191,44,207,99,191,57,187,116,101,167,234,169,248,204,138,204,45,53,198,107,102,146,4,184,174,51,106,165,238,239,102,188,224,10,178,233,233,111,76,173,41,21,81,208,204,155,157,74,109,21,158,28,175,85,113,178,69,248,6,222,216,141,141,47,84,112,234,109,229,95,131,154,95,230,119,65,111,141,215,187,238,6,116,34,102,16,123,20,230,162,158,216,122,229,189,85,242,58,150,186,210,243,117,195,115,139,125,223,64,195,102,229,96,64,229,183,121,14,31,170,70,129,35,152,241,92,183,27,38,200,227,182,186,165,106,45,253,157,107,31,113,3,253,49,12,69,39,7,40,51,63,160,26,218,173,153,85,205,189,77,151,29,19,53,168,137,132,112,103,26,179,171,17,218,219,29,251,194,57,246,36,196,115,167,89,3,32,140,173,209,86,18,155,35,45,132,52,191,9,245,204,168,26,161,138,14,159,134,23,13,155,78,167,83,215,179,117,91,70,86,41,74,195,97,86,77,231,151,116,37,170,79,81,156,176,235,242,170,2,140,163,37,73,247,85,247,226,130,30,89,6,231,231,221,163,110,81,208,67,235,40,121,126,95,144,153,126,255,0,47,167,245,130,246,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("11a06301-1dba-455c-b67a-f3080359187e"));
		}

		#endregion

	}

	#endregion

}

