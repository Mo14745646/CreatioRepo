﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CrtBaseEmailWithMacrosManagerSchema

	/// <exclude/>
	public class CrtBaseEmailWithMacrosManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CrtBaseEmailWithMacrosManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CrtBaseEmailWithMacrosManagerSchema(CrtBaseEmailWithMacrosManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("672eca07-a8cb-44ef-afb8-ff1b25a30536");
			Name = "CrtBaseEmailWithMacrosManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f1773fe1-394d-47f6-b668-13c7c22c835e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,90,235,111,27,185,17,255,236,3,238,127,96,85,32,88,1,138,220,187,143,137,165,192,81,148,68,184,56,73,107,37,5,154,30,2,106,151,146,216,91,45,117,36,215,142,98,248,127,239,12,31,251,224,62,36,231,144,162,5,250,37,177,184,195,225,204,112,230,55,143,221,140,238,152,218,211,152,145,37,147,146,42,177,214,227,153,200,214,124,147,75,170,185,200,126,252,225,238,199,31,206,114,197,179,13,185,62,40,205,118,79,131,223,64,159,166,44,70,98,53,126,197,50,38,121,92,210,204,132,100,245,95,227,121,166,185,230,76,5,203,47,105,172,133,172,173,95,81,158,142,175,89,150,48,217,56,117,201,190,232,10,7,201,80,220,241,75,248,47,151,108,41,54,155,20,214,129,0,72,254,44,217,6,164,35,179,148,42,245,132,60,167,138,205,119,192,250,239,92,111,175,104,44,133,186,162,25,221,48,105,168,207,207,207,201,133,202,119,59,42,15,83,247,27,183,16,246,24,55,17,101,228,33,183,91,30,111,9,77,83,113,171,136,22,36,22,153,150,34,37,122,203,200,26,22,137,88,19,208,136,223,112,125,32,177,17,47,219,140,200,154,167,40,24,161,89,66,118,230,108,166,200,94,138,152,41,84,100,236,5,56,15,36,184,208,135,61,219,83,73,119,36,131,59,155,12,150,86,242,247,118,171,144,131,233,18,40,240,84,203,214,51,21,114,124,113,94,108,70,118,251,124,149,242,152,208,149,210,18,36,36,49,154,5,44,168,187,13,115,17,158,134,124,206,110,183,76,130,227,4,143,200,19,242,65,243,84,141,237,250,107,150,238,153,252,248,243,136,100,236,54,26,194,190,59,99,230,242,86,192,111,52,205,52,220,204,123,201,111,168,102,246,121,120,15,102,193,136,71,224,254,247,41,16,18,134,174,116,32,42,222,178,29,53,134,25,23,91,171,22,60,219,91,206,120,75,74,19,80,28,239,224,51,67,110,75,199,236,218,48,121,11,60,200,132,12,230,213,71,131,167,78,100,184,122,43,117,93,133,151,156,165,201,73,242,207,40,156,146,20,10,168,35,226,130,219,36,34,75,15,228,5,55,1,6,207,47,94,229,60,25,17,19,68,135,41,249,28,27,142,94,82,5,178,131,157,59,233,163,225,17,85,224,26,225,186,48,60,65,29,227,40,61,218,44,193,215,119,116,143,78,39,25,156,31,179,29,220,72,169,212,66,195,227,3,89,49,146,43,212,90,160,83,222,240,132,153,40,89,209,248,183,91,42,125,28,192,221,236,246,16,37,43,158,226,157,130,35,1,189,99,11,225,114,32,224,192,26,143,194,189,46,22,53,128,0,73,168,166,93,118,180,174,94,177,134,189,250,145,115,129,41,249,91,41,247,21,104,130,96,135,230,23,26,16,13,68,222,48,3,50,103,103,202,253,113,223,99,142,15,10,112,1,60,44,179,104,216,47,19,18,207,10,218,240,167,149,163,56,221,251,67,32,133,95,190,122,67,179,13,236,214,160,133,133,209,3,56,70,237,247,211,78,169,175,242,20,194,21,24,228,16,233,196,237,34,107,187,173,95,135,182,115,219,214,10,109,200,100,26,10,70,158,61,35,81,184,102,157,184,133,85,84,183,211,112,88,220,78,27,235,9,185,161,105,206,218,76,54,3,172,91,242,29,251,135,200,152,5,42,224,122,3,158,15,87,136,108,236,159,221,86,195,253,68,3,3,242,21,56,144,98,71,191,193,250,78,245,235,229,74,195,108,110,221,91,204,253,180,198,234,97,29,24,109,68,6,72,60,112,198,187,239,7,4,3,207,50,71,131,26,132,115,145,209,19,6,139,12,210,59,77,249,87,64,35,106,100,227,6,225,99,230,163,247,66,49,134,57,113,61,25,244,166,157,193,249,212,102,167,78,152,244,113,218,203,38,26,90,83,246,197,238,127,78,104,179,82,205,228,121,237,118,32,143,111,13,94,214,160,228,226,188,72,223,39,107,29,64,74,253,152,161,241,173,39,160,25,87,222,62,103,193,142,73,176,231,20,119,185,98,122,43,26,185,176,192,47,155,120,95,49,125,153,36,220,96,114,250,26,114,28,147,165,16,55,84,18,147,152,221,3,16,3,232,203,188,244,134,43,29,185,184,71,218,173,33,43,159,187,120,184,54,71,61,207,121,154,160,7,88,250,53,20,154,144,47,73,20,28,2,151,93,59,211,203,114,22,50,31,95,238,247,160,121,84,33,30,99,201,224,248,119,210,15,38,131,99,36,85,150,31,17,182,142,242,252,103,230,153,222,155,127,37,131,218,55,107,24,100,188,20,214,24,209,176,13,9,87,2,170,214,133,122,203,88,50,219,2,224,122,244,128,180,0,149,116,113,45,142,185,43,176,177,210,215,11,53,207,232,42,101,32,10,120,142,221,86,222,235,123,116,88,6,240,163,6,214,217,206,30,61,234,218,110,60,248,10,202,71,112,92,147,143,222,184,124,244,241,231,65,77,232,79,174,250,127,193,233,38,19,74,243,88,65,255,145,176,75,56,240,160,184,26,207,191,196,105,158,176,151,82,236,112,125,38,0,2,129,207,175,45,26,191,134,66,228,50,215,194,28,254,86,104,190,230,177,233,121,10,185,78,211,189,155,207,224,36,132,173,132,204,113,112,133,163,85,89,253,60,180,12,54,43,86,27,53,157,31,231,114,113,238,137,235,192,83,244,14,101,64,207,219,107,233,162,224,108,213,6,60,57,197,144,173,86,143,88,246,33,222,110,248,13,203,252,1,22,48,1,124,29,102,42,145,203,152,33,212,174,14,33,58,215,75,58,160,57,21,136,29,211,233,181,249,191,134,185,53,195,217,231,228,22,16,183,94,247,118,153,203,41,129,218,30,42,210,169,200,61,176,7,123,111,115,139,224,104,16,9,128,102,246,105,11,128,137,52,177,65,135,240,85,215,122,252,11,59,148,40,134,196,128,137,142,120,18,208,126,42,248,252,234,16,167,56,218,254,49,118,244,81,65,56,42,217,181,33,144,221,118,180,94,54,190,28,186,31,220,167,189,249,226,129,100,177,128,46,1,162,44,195,216,2,180,94,67,116,135,183,222,237,130,71,60,64,2,153,252,77,77,63,96,39,142,221,20,182,225,120,147,118,185,213,83,120,2,105,186,83,190,110,207,89,214,149,237,116,24,219,173,161,129,252,142,8,219,56,56,195,223,169,163,240,70,178,151,192,215,88,24,214,27,66,28,231,104,10,197,12,120,68,4,251,11,167,40,236,59,105,52,145,159,120,226,92,225,158,176,20,10,221,138,31,49,245,187,203,176,86,4,107,231,191,230,172,81,156,143,171,4,174,40,25,245,66,133,207,120,112,198,24,18,201,76,164,249,46,139,6,215,249,234,95,192,114,208,241,248,185,72,14,181,103,47,121,138,105,7,105,34,252,109,134,67,204,174,98,153,84,102,166,200,46,206,176,243,148,92,137,12,103,40,227,249,239,57,77,161,74,94,36,131,17,154,220,243,174,88,12,217,162,38,70,195,70,125,13,123,220,150,198,109,160,76,216,143,123,94,109,225,83,187,212,239,18,64,56,125,114,228,77,239,61,17,45,61,251,197,3,99,161,202,195,146,35,135,121,151,52,189,251,85,25,228,211,37,221,152,85,204,31,216,51,209,140,112,184,91,170,197,119,9,200,231,128,228,86,120,27,154,165,57,192,199,113,193,235,230,103,13,164,20,182,90,234,186,150,245,23,142,120,219,210,241,162,155,205,10,154,168,100,50,234,156,95,57,159,10,32,2,216,151,103,85,184,70,85,201,189,208,142,69,143,67,250,98,170,49,254,251,188,171,47,244,76,30,194,65,229,169,40,157,210,175,7,146,10,154,52,161,186,188,178,134,96,225,239,178,189,190,243,105,207,104,27,42,0,253,182,125,126,118,22,53,158,89,40,108,156,117,23,14,116,38,225,194,125,53,242,251,130,220,162,23,116,165,69,101,237,42,124,69,160,26,40,102,204,71,91,228,27,46,53,224,26,193,254,233,162,90,112,219,158,99,218,214,101,213,235,95,212,180,115,247,157,205,9,141,39,240,192,207,84,177,72,126,12,96,190,227,26,4,26,140,172,85,77,175,131,143,41,62,198,122,138,195,67,114,79,238,143,226,95,97,154,172,28,181,35,180,225,144,29,138,34,109,75,180,132,173,41,150,51,102,22,212,219,149,251,216,191,244,204,142,160,130,55,169,139,52,43,142,223,236,114,67,53,214,189,144,54,84,27,62,209,150,48,77,175,225,38,17,207,15,38,77,14,252,9,131,74,23,92,232,63,9,78,113,217,175,53,83,185,253,133,11,93,51,253,130,173,109,94,53,215,162,162,22,146,202,243,8,115,36,25,33,222,141,223,178,91,252,191,200,226,157,91,222,221,102,76,154,220,26,168,63,203,165,4,139,227,170,173,90,98,93,32,81,39,55,204,216,134,153,183,138,25,88,65,35,104,176,17,30,126,56,206,195,57,108,23,171,119,185,222,8,128,154,130,101,193,241,5,88,22,135,110,36,19,183,205,235,172,234,131,120,107,127,250,61,71,77,123,173,169,52,212,32,17,240,63,70,254,34,103,167,19,23,26,194,142,13,100,153,78,11,54,9,143,122,132,122,173,119,169,41,202,160,204,145,197,28,163,115,131,57,7,223,242,129,194,58,87,109,162,44,50,64,166,13,180,21,202,18,59,66,63,253,181,249,181,101,16,212,62,104,42,139,229,147,134,0,69,197,220,163,50,178,104,32,91,115,114,179,200,18,246,229,221,58,106,64,33,249,203,200,77,172,202,90,212,251,143,155,196,44,54,25,52,127,56,185,29,146,63,77,200,227,159,106,165,99,167,108,175,3,25,224,172,80,172,122,178,247,156,30,88,125,174,224,194,13,248,186,116,14,246,47,222,111,210,53,206,169,107,77,62,87,36,17,89,239,156,162,171,208,155,183,205,41,190,99,145,169,247,233,67,107,220,70,121,137,214,57,154,70,202,97,74,81,100,194,182,168,81,62,54,10,76,91,128,162,152,29,237,33,150,41,121,154,214,194,197,92,216,196,29,10,193,190,119,87,110,2,227,91,230,116,109,157,101,123,193,108,68,29,85,43,228,176,118,61,115,210,53,94,138,248,89,132,71,209,43,231,99,81,193,204,197,158,23,2,53,64,204,78,42,81,225,222,2,78,125,239,248,176,61,94,103,156,47,250,151,40,65,163,220,110,1,171,247,31,215,144,60,68,183,26,74,184,51,155,131,40,124,80,195,197,238,113,240,163,71,141,74,26,130,249,85,42,86,52,173,190,242,31,6,101,117,20,238,162,173,187,140,78,236,75,105,52,20,109,84,243,254,240,170,205,187,66,195,99,254,69,227,215,25,73,37,9,220,17,127,95,139,4,84,239,53,29,198,81,229,130,33,234,135,245,58,221,235,18,168,242,0,153,135,15,132,85,101,103,31,255,71,214,46,100,117,6,250,6,112,117,99,165,111,194,87,44,185,43,65,254,45,112,105,157,247,217,55,64,164,221,249,164,19,90,156,66,112,35,41,107,141,246,211,240,163,24,187,253,151,2,131,209,239,127,13,25,122,132,62,14,13,182,17,212,220,54,189,69,147,90,251,46,77,111,241,173,9,252,237,95,19,157,10,4,56,211,198,42,220,124,157,230,121,159,20,145,245,65,249,66,227,107,99,5,93,8,137,115,165,197,142,164,98,195,99,208,89,248,175,129,152,125,73,151,148,131,252,24,114,41,252,99,95,214,217,55,238,224,59,225,107,244,234,81,127,240,77,96,8,15,55,2,66,28,213,247,157,71,56,112,199,136,175,191,14,191,148,27,255,237,69,249,141,4,44,230,24,100,81,248,90,63,236,118,43,189,187,25,227,205,82,94,251,114,197,124,172,88,153,1,218,161,75,141,106,26,53,4,170,112,117,254,96,37,44,134,18,190,215,98,18,191,28,136,154,71,119,200,105,185,153,143,49,35,94,119,213,224,189,166,93,173,47,222,147,127,3,126,238,255,97,105,42,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("672eca07-a8cb-44ef-afb8-ff1b25a30536"));
		}

		#endregion

	}

	#endregion

}

