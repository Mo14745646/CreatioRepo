﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: InvokableMacrosHelperSchema

	/// <exclude/>
	public class InvokableMacrosHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public InvokableMacrosHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public InvokableMacrosHelperSchema(InvokableMacrosHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("05a079fa-220d-4a8c-b1e8-b9ea7d88f6ec");
			Name = "InvokableMacrosHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("33bac096-c819-4c57-86af-fe71bbb0cb56");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,148,91,79,219,48,20,199,159,131,196,119,56,235,36,84,36,218,114,103,131,54,18,43,180,171,70,55,4,187,60,76,211,228,38,167,173,71,98,103,182,83,22,33,190,251,28,59,183,134,82,177,229,33,242,245,248,127,126,231,194,72,136,50,34,30,194,103,20,130,72,62,85,237,62,103,83,58,139,5,81,148,179,205,141,135,205,13,39,150,148,205,224,54,145,10,195,179,218,92,159,15,2,244,210,195,178,61,68,134,130,122,79,206,92,81,246,187,92,236,115,129,229,236,139,162,129,212,83,189,240,90,224,76,219,129,126,64,164,60,133,17,91,240,59,50,9,112,76,60,193,229,123,12,34,20,230,96,167,211,129,174,140,195,144,136,196,205,230,230,18,220,207,169,55,7,143,48,136,37,90,11,56,70,53,231,190,53,242,141,139,59,20,237,220,70,167,98,36,138,39,1,245,192,51,118,86,190,13,167,48,12,248,132,4,203,130,156,7,35,170,144,63,160,24,248,90,255,181,160,11,162,208,110,70,118,2,82,105,176,30,8,36,62,103,65,2,195,152,250,240,51,172,136,27,249,208,51,203,237,107,34,36,54,27,123,199,7,7,111,7,111,246,91,199,131,193,110,235,176,127,114,212,122,183,191,123,209,218,59,24,236,158,156,159,232,173,163,195,198,246,25,100,42,144,249,86,200,178,42,75,161,46,171,78,210,162,156,163,119,7,116,10,84,1,149,192,16,125,80,220,16,165,134,75,26,109,176,154,225,190,32,250,20,105,225,245,132,243,0,70,210,114,43,216,94,254,161,82,201,230,149,254,119,243,173,41,119,51,203,233,88,110,67,154,128,142,35,80,197,130,85,119,218,231,44,105,150,115,232,85,239,181,53,196,87,25,197,203,48,82,137,49,226,108,109,85,207,104,188,200,84,138,187,87,143,192,118,154,159,206,227,139,137,114,165,75,0,253,53,76,111,35,244,232,52,177,0,241,69,240,204,138,117,92,186,227,234,5,208,110,117,59,249,150,5,157,73,128,5,21,42,38,129,77,172,33,170,241,146,99,205,26,208,154,223,255,230,182,41,152,53,62,223,88,129,64,196,44,14,53,106,9,83,46,114,215,23,36,136,81,174,115,61,34,130,132,192,116,143,234,53,244,109,170,146,143,122,220,112,47,205,216,108,100,245,174,51,211,100,232,12,85,249,152,38,100,44,172,54,40,208,227,194,31,249,13,247,198,140,254,223,82,37,39,27,121,152,164,226,130,204,240,233,197,60,102,231,21,219,75,113,180,77,136,47,116,63,166,62,194,5,53,173,85,115,233,166,1,221,129,79,147,95,58,206,110,25,217,194,82,83,42,145,54,212,18,213,142,77,130,220,213,29,91,4,47,41,183,103,159,45,67,217,131,9,145,216,94,161,163,42,160,120,123,233,21,147,102,142,110,48,205,231,122,66,245,180,17,5,181,175,16,242,125,69,142,255,208,234,24,222,195,7,76,190,166,105,118,77,168,232,90,60,150,137,187,82,100,166,235,177,90,32,197,59,107,74,195,174,46,47,62,254,5,117,222,80,200,92,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("05a079fa-220d-4a8c-b1e8-b9ea7d88f6ec"));
		}

		#endregion

	}

	#endregion

}

