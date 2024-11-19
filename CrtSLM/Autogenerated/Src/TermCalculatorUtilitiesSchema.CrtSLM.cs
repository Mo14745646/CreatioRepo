﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TermCalculatorUtilitiesSchema

	/// <exclude/>
	public class TermCalculatorUtilitiesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TermCalculatorUtilitiesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TermCalculatorUtilitiesSchema(TermCalculatorUtilitiesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("257542a2-5e41-4492-9c9c-f7ec5871ed0b");
			Name = "TermCalculatorUtilities";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d862795b-510a-489d-988e-e22493fe3a79");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,90,235,111,211,72,16,255,28,164,251,31,182,229,139,115,151,179,78,247,177,37,32,26,90,46,58,64,61,82,64,226,11,50,241,182,181,72,236,222,122,93,136,160,255,251,237,219,179,47,59,118,43,164,147,42,53,222,199,204,111,30,59,51,59,118,153,109,113,125,147,173,49,186,192,132,100,117,117,73,211,69,85,94,22,87,13,201,104,81,149,191,60,250,254,203,163,73,83,23,229,21,90,237,106,138,183,199,230,25,110,33,56,54,158,158,150,180,160,5,174,217,2,182,228,49,193,87,140,46,90,108,178,186,62,66,23,197,22,127,172,74,204,152,222,98,66,43,34,22,221,52,159,55,197,26,173,249,154,208,146,9,7,213,146,170,202,154,146,102,205,166,24,197,115,177,87,144,209,116,60,10,137,30,89,150,151,21,90,103,27,92,230,25,209,131,51,100,77,55,53,54,83,83,36,56,79,22,206,22,52,247,168,28,139,133,239,192,102,182,8,210,18,11,238,36,208,199,108,171,148,70,61,43,209,206,73,117,195,16,51,237,117,10,38,112,122,152,190,35,1,225,10,211,99,249,171,214,191,238,226,84,44,192,189,20,98,184,95,99,122,93,229,97,208,47,50,138,57,7,116,81,113,102,250,49,49,227,90,147,122,64,43,157,96,218,144,210,130,155,42,147,10,2,238,190,153,196,60,113,199,211,191,139,50,71,243,185,65,194,159,211,87,21,91,135,158,41,47,79,45,46,114,238,200,83,241,76,50,128,58,155,30,251,10,6,18,47,28,44,173,212,13,208,197,190,18,195,61,90,90,56,54,94,82,40,146,146,210,21,126,26,115,96,62,54,225,71,29,142,249,71,255,45,139,60,236,228,10,92,254,169,183,103,237,3,223,115,42,138,146,162,247,217,166,177,252,215,184,175,111,158,151,77,145,11,29,191,43,11,186,204,251,118,141,241,121,78,125,117,147,149,232,37,166,250,119,194,117,204,172,89,226,53,143,180,194,1,218,71,237,2,183,25,65,210,13,112,110,168,204,13,193,244,35,38,149,132,89,92,162,4,72,193,172,206,2,241,150,89,109,221,108,68,44,23,113,50,43,105,157,182,94,184,107,119,104,142,147,0,187,18,127,53,44,19,161,219,25,250,67,254,73,55,16,54,31,132,225,67,69,190,176,108,17,134,192,165,190,174,26,82,159,115,103,222,49,4,9,179,234,84,228,19,43,63,165,204,137,87,152,82,70,169,78,153,114,5,182,196,86,165,62,25,147,67,197,243,175,150,242,243,109,213,148,244,80,9,209,43,58,196,244,43,2,138,24,171,5,109,9,14,9,108,249,241,67,65,30,166,76,155,202,24,131,58,114,12,21,227,117,81,54,50,210,24,65,148,242,135,9,226,210,217,91,20,38,131,150,198,18,69,69,82,119,123,87,8,235,143,96,156,10,144,226,244,27,197,101,93,179,95,53,140,103,76,50,106,21,51,177,45,118,144,235,10,39,138,36,140,145,60,178,192,231,132,94,23,53,18,181,215,14,97,241,111,102,109,88,84,155,102,91,214,242,52,161,53,124,114,210,15,87,176,197,74,217,66,198,216,185,162,206,79,223,197,238,6,231,146,176,152,124,194,14,237,211,196,162,157,138,9,185,230,13,171,62,167,51,223,63,186,40,242,96,237,146,212,123,1,85,105,250,1,230,141,231,167,87,217,103,188,113,28,150,229,211,44,158,179,226,59,6,229,177,207,85,181,65,203,90,83,93,150,32,108,215,123,230,182,150,6,211,13,199,49,138,138,200,144,122,95,127,134,28,90,157,238,133,95,233,128,161,230,166,190,135,252,251,82,24,17,15,128,201,131,55,25,107,254,253,159,210,31,188,171,12,15,132,65,135,88,243,89,118,248,9,191,101,157,100,53,214,74,5,73,112,81,229,252,76,30,194,233,195,227,238,202,229,172,192,27,17,105,72,113,203,10,69,197,83,62,56,160,159,139,140,90,163,79,153,252,113,108,47,86,241,230,147,46,185,157,105,225,71,102,114,153,59,211,150,195,152,101,224,190,20,98,197,158,43,194,126,69,166,89,37,112,91,172,241,82,222,92,187,180,208,127,141,116,204,215,93,192,205,164,180,128,255,50,87,99,26,114,155,215,28,74,115,135,150,244,207,21,36,197,214,88,164,229,146,115,67,153,205,183,108,6,95,53,73,69,25,103,156,107,157,170,71,228,224,116,30,251,142,164,33,35,180,96,139,51,108,47,144,115,216,70,24,196,244,62,157,207,120,217,6,156,19,29,204,197,158,244,116,123,67,119,166,2,209,89,209,118,227,137,169,52,38,144,196,156,167,229,150,103,98,215,153,62,141,187,32,114,229,203,64,97,106,36,44,2,240,11,46,67,217,108,54,62,122,251,92,40,248,45,17,199,215,58,53,193,25,184,52,120,1,15,113,204,29,95,145,93,161,221,106,125,141,183,217,235,172,204,174,48,225,249,94,14,159,236,120,18,79,14,1,138,195,153,67,65,171,146,163,5,156,210,51,76,215,215,103,164,218,190,56,177,165,152,182,192,63,217,208,130,186,232,84,86,167,157,180,115,118,26,73,31,206,184,133,64,96,243,204,3,207,249,40,219,24,246,227,12,179,96,217,69,99,232,180,140,230,99,153,165,69,15,109,2,32,249,162,199,21,211,105,10,125,244,58,77,161,15,97,220,20,32,157,121,166,0,17,101,156,41,12,251,177,166,80,73,190,203,12,154,135,101,134,22,57,52,3,128,227,139,29,87,74,216,12,61,37,96,167,57,204,178,94,179,216,45,215,176,121,148,7,204,35,180,98,198,193,245,191,234,138,9,141,241,79,131,201,46,233,183,214,12,29,106,108,166,197,192,40,166,207,115,117,167,97,230,99,245,154,153,227,28,169,86,25,207,30,54,250,142,11,145,225,179,204,13,53,37,50,101,59,84,251,153,243,54,14,228,224,159,1,206,208,117,204,118,207,12,190,165,230,118,171,242,172,40,115,217,100,212,195,39,236,204,39,106,251,68,83,14,138,37,171,220,167,90,65,83,215,56,221,62,0,189,113,108,111,61,88,247,234,255,97,215,85,69,113,220,99,219,170,25,28,40,179,77,245,50,66,140,61,99,129,195,235,212,20,22,143,125,20,209,118,26,66,245,191,105,80,107,76,248,5,222,100,44,252,24,4,12,20,105,251,216,156,40,51,158,190,244,170,222,180,233,215,16,208,72,224,3,90,71,92,127,7,74,216,116,89,243,233,101,169,186,65,203,146,178,4,156,109,146,16,237,41,232,13,249,179,76,167,154,40,243,178,115,130,111,139,170,169,21,93,201,68,210,62,45,243,48,121,216,69,2,66,74,41,0,155,32,247,223,60,121,37,57,163,142,175,24,127,97,90,4,237,44,0,247,131,61,153,184,92,103,65,166,10,177,114,7,151,193,129,211,59,150,170,123,214,99,93,159,243,239,14,97,217,113,153,28,121,170,177,139,241,152,79,61,180,59,137,123,127,17,118,35,160,228,65,142,214,182,217,15,34,148,7,184,226,27,252,141,6,220,112,69,51,66,255,7,142,24,50,138,139,229,158,142,216,239,131,247,113,65,213,66,85,253,33,88,154,240,230,80,34,46,139,180,237,63,243,173,86,83,180,157,27,254,166,165,109,239,15,164,18,123,75,48,144,140,219,93,239,215,15,239,21,62,184,110,66,111,128,70,203,100,81,137,182,241,38,145,188,103,218,29,114,69,91,192,222,22,132,54,44,100,8,153,157,187,188,221,37,23,106,217,251,13,149,155,206,59,186,121,230,61,171,139,205,109,255,51,179,194,161,147,157,190,103,37,214,74,117,153,213,99,234,237,88,252,213,128,60,77,185,55,1,51,183,115,229,117,235,31,139,191,190,190,233,65,22,106,236,237,169,251,42,35,138,192,174,124,92,194,105,252,101,235,20,61,113,245,208,181,90,185,228,51,143,133,154,56,114,137,5,94,61,133,86,24,163,238,227,164,126,137,170,157,211,79,167,125,249,243,1,76,238,119,163,220,187,149,121,231,230,35,128,250,177,156,3,102,41,217,61,115,188,186,207,25,56,180,64,60,135,116,211,54,80,76,247,1,235,36,207,46,71,217,43,71,183,64,35,168,238,247,222,92,95,227,204,215,78,224,29,169,253,21,148,247,57,139,219,128,88,52,132,224,146,242,81,243,153,136,62,116,222,231,58,111,195,53,143,7,39,13,124,5,211,81,240,76,2,37,78,136,166,245,45,145,174,93,216,69,187,213,87,157,116,65,53,95,9,88,70,17,209,122,234,4,154,176,65,245,105,247,208,6,42,154,158,10,170,207,205,236,202,170,179,220,233,139,20,0,211,67,92,225,122,218,45,123,134,132,159,231,198,63,203,139,3,124,2,133,187,173,87,244,116,104,137,220,237,223,158,221,116,189,220,125,247,27,72,212,114,205,222,131,26,83,71,232,51,58,237,196,61,117,79,50,62,175,41,212,94,106,27,88,145,216,176,251,190,10,128,95,110,196,214,152,98,211,146,125,107,11,30,206,151,209,68,242,22,203,78,81,44,147,6,88,169,119,232,35,152,173,192,214,16,179,192,167,38,81,125,169,88,2,27,239,110,105,30,249,100,17,116,84,77,176,144,43,59,62,145,152,135,238,135,158,62,96,81,1,105,134,62,221,232,160,24,44,82,130,24,205,103,12,115,247,126,54,20,91,31,165,32,38,25,173,7,124,47,113,247,31,25,62,83,120,108,46,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("257542a2-5e41-4492-9c9c-f7ec5871ed0b"));
		}

		#endregion

	}

	#endregion

}
