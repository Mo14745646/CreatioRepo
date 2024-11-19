﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalcResponseDateRuleHandlerSchema

	/// <exclude/>
	public class CalcResponseDateRuleHandlerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalcResponseDateRuleHandlerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalcResponseDateRuleHandlerSchema(CalcResponseDateRuleHandlerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cf92978c-b250-40c8-8c48-5699a7bb22e2");
			Name = "CalcResponseDateRuleHandler";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b11d550e-0087-4f53-ae17-fb00d41102cf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,86,89,111,35,55,12,126,158,5,246,63,176,179,192,194,1,140,241,251,214,49,144,117,154,212,64,15,35,73,247,101,209,7,101,134,177,213,106,70,3,29,94,24,65,254,123,169,203,35,159,189,30,108,152,20,245,145,252,120,200,29,107,81,247,172,70,120,66,165,152,150,47,166,154,203,238,133,175,172,98,134,203,238,253,187,215,247,239,10,171,121,183,130,199,173,54,216,126,127,32,87,183,204,176,35,229,92,10,129,181,67,208,213,61,118,168,120,61,216,228,190,218,86,118,167,79,20,158,211,87,183,159,207,30,253,208,25,110,56,234,179,6,119,172,54,82,157,181,200,114,175,230,76,96,215,48,229,76,201,248,131,194,21,169,97,46,152,214,159,96,206,52,62,88,129,55,125,47,56,42,111,210,219,103,193,107,168,157,5,25,136,250,129,232,37,14,144,72,242,198,63,178,174,17,168,96,50,249,4,139,132,16,149,116,223,145,93,184,79,242,117,199,81,52,228,108,169,248,134,32,188,147,162,15,2,40,100,141,236,196,22,180,81,148,199,215,223,129,9,65,204,219,182,211,112,13,29,126,27,78,94,161,124,68,181,225,53,46,168,62,229,120,39,46,137,15,39,146,7,162,197,108,253,17,97,56,6,126,221,160,106,44,150,240,22,24,40,62,16,31,33,178,40,39,74,40,71,163,172,99,214,5,235,89,136,177,6,70,46,112,49,250,77,163,34,128,46,244,11,216,61,241,10,60,39,197,129,209,245,129,153,43,102,241,118,57,200,165,146,61,42,215,28,39,67,60,240,112,32,134,40,86,104,188,167,93,9,116,84,252,141,235,159,209,172,229,81,29,39,147,9,76,181,109,91,166,182,179,164,152,83,85,9,184,103,138,102,211,160,210,240,34,21,208,143,150,234,93,19,141,86,132,238,220,33,76,14,33,166,254,50,116,4,112,93,162,27,136,109,57,243,131,177,157,78,252,217,96,170,208,88,213,233,217,45,247,121,18,12,124,227,102,13,181,111,35,143,161,129,10,149,20,27,38,44,234,106,58,73,23,243,134,28,64,166,161,241,198,32,159,255,32,6,103,112,143,102,169,80,83,52,177,65,71,33,32,8,241,165,50,111,152,2,222,4,147,47,206,21,85,58,88,208,26,49,79,219,30,243,195,233,189,229,205,108,84,46,154,242,42,212,229,66,4,76,173,108,75,88,105,52,46,152,134,88,138,215,210,77,40,129,143,247,99,122,243,199,111,193,35,85,7,89,189,134,145,11,61,144,244,11,145,6,188,203,166,49,165,87,132,164,31,235,53,182,44,156,37,98,119,121,134,195,42,222,172,238,120,215,124,222,58,200,209,128,30,179,45,248,11,140,22,122,23,26,111,162,205,56,209,186,115,92,132,220,162,183,99,106,179,244,34,70,242,81,236,136,171,110,154,228,160,202,236,93,64,227,28,56,221,140,60,249,239,208,46,67,17,242,169,57,61,7,107,172,255,4,74,48,242,211,135,238,241,189,40,36,107,176,169,224,31,142,64,64,72,35,16,1,143,38,225,63,12,205,66,103,99,193,155,51,83,241,44,165,128,253,42,157,109,131,49,156,28,139,200,94,36,31,190,163,14,182,66,192,199,143,169,130,25,188,197,159,60,61,169,140,87,255,110,65,101,139,241,100,93,40,62,218,17,189,228,84,11,183,153,20,109,114,88,187,85,78,35,244,255,151,82,92,198,27,201,27,8,15,196,233,69,225,30,145,39,78,115,166,13,83,198,73,212,206,251,59,187,154,91,165,232,150,211,250,22,15,98,186,57,138,109,58,204,237,77,182,33,142,247,85,244,31,46,185,197,64,127,27,218,121,92,200,232,105,89,122,86,112,248,25,54,205,5,227,131,199,47,11,73,197,215,210,39,121,157,129,86,119,82,213,184,195,114,192,122,116,144,192,120,160,37,66,166,229,178,63,233,101,254,38,211,154,203,157,86,15,180,215,92,80,78,56,219,68,81,183,223,87,164,251,11,191,188,175,152,90,10,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cf92978c-b250-40c8-8c48-5699a7bb22e2"));
		}

		#endregion

	}

	#endregion

}

