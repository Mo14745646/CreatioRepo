﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SupportMailBoxRepositorySchema

	/// <exclude/>
	public class SupportMailBoxRepositorySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SupportMailBoxRepositorySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SupportMailBoxRepositorySchema(SupportMailBoxRepositorySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45ce99dc-bbf7-4b2f-be72-31b2e29b841f");
			Name = "SupportMailBoxRepository";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("77fa8847-960e-4748-ad77-e37bb90e03a0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,85,77,79,227,48,16,61,7,137,255,48,202,94,90,9,37,119,8,149,216,170,69,149,232,138,37,192,30,87,110,50,109,45,37,118,240,71,33,139,248,239,59,142,211,143,4,202,162,61,69,30,63,191,153,121,243,236,8,86,162,174,88,134,112,143,74,49,45,151,38,26,75,177,228,43,171,152,225,82,156,158,188,158,158,4,86,115,177,130,180,214,6,203,139,222,154,240,69,129,153,3,235,232,26,5,42,158,189,195,220,112,241,180,15,30,230,82,120,44,30,77,132,225,134,163,238,179,165,104,12,173,52,92,246,79,116,74,143,8,189,133,18,5,145,124,83,184,162,13,24,23,76,235,115,72,109,85,73,101,230,140,23,223,229,203,29,86,82,115,35,85,221,96,227,56,134,68,219,178,100,170,30,181,235,91,37,55,60,71,13,114,97,24,23,174,34,185,4,237,105,160,36,158,133,124,65,29,109,143,199,7,231,43,187,40,120,6,153,75,125,52,51,156,195,236,120,85,193,107,83,217,174,141,41,199,34,167,62,110,21,223,48,131,126,179,242,11,80,200,114,41,138,26,30,52,42,210,69,248,17,193,111,219,89,95,180,148,40,114,207,218,77,65,64,109,148,205,168,0,151,168,233,193,35,250,250,52,129,153,160,129,177,130,255,65,16,248,12,156,14,51,65,230,34,149,18,141,8,153,194,229,101,120,172,195,48,30,69,59,234,184,207,157,84,76,177,18,4,57,246,50,236,54,17,142,92,147,144,237,2,81,18,55,232,230,112,171,252,177,172,131,158,64,93,234,33,56,255,7,65,79,54,178,222,59,29,131,224,237,115,49,231,104,214,50,255,138,142,215,104,244,123,95,193,51,55,107,40,152,88,89,182,194,207,164,82,104,172,18,122,148,254,131,34,137,183,200,3,161,102,19,97,75,84,108,81,96,210,92,193,122,228,10,154,111,57,6,91,77,54,76,1,234,39,210,194,13,219,67,211,108,141,37,251,105,145,132,237,105,22,29,34,230,76,80,1,234,12,194,150,119,42,213,76,100,116,187,132,185,35,185,200,117,205,37,14,135,141,178,1,229,137,174,242,156,222,26,91,138,65,56,38,139,175,156,101,62,222,110,57,211,90,100,219,23,32,106,99,63,200,63,225,48,114,31,42,60,60,140,126,157,10,181,166,234,111,182,50,206,242,67,198,238,38,237,237,121,167,188,48,168,180,227,31,184,245,152,110,169,65,31,253,69,147,185,117,166,69,7,25,248,224,88,150,100,100,174,165,184,175,43,122,17,159,44,43,206,26,186,224,195,202,82,178,222,196,77,91,63,114,118,191,230,250,42,203,164,21,38,60,3,186,198,56,108,229,242,83,119,195,163,23,219,248,185,236,159,241,254,224,134,135,230,254,178,95,97,169,100,9,186,121,177,65,251,2,255,195,179,31,123,148,236,225,94,223,189,45,167,148,172,243,119,216,185,180,237,181,251,235,112,109,63,178,194,98,226,153,70,253,158,201,152,109,33,41,170,13,207,176,81,149,100,244,248,104,82,86,166,30,126,114,235,125,180,27,124,251,11,79,168,172,67,111,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45ce99dc-bbf7-4b2f-be72-31b2e29b841f"));
		}

		#endregion

	}

	#endregion

}

