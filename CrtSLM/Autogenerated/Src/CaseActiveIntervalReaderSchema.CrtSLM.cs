﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseActiveIntervalReaderSchema

	/// <exclude/>
	public class CaseActiveIntervalReaderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseActiveIntervalReaderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseActiveIntervalReaderSchema(CaseActiveIntervalReaderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9b299706-707d-4ea1-bb1f-dd34d3b36ef1");
			Name = "CaseActiveIntervalReader";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c4b72b51-b2ae-4127-a458-608f5464622c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,88,219,110,227,54,16,125,246,2,253,7,198,11,44,100,192,85,250,188,177,181,200,58,201,194,64,246,210,117,210,125,40,138,130,145,104,135,173,76,57,36,229,173,219,205,191,119,120,147,40,234,18,251,41,18,53,115,102,56,115,230,226,48,188,37,98,135,83,130,238,8,231,88,20,107,25,47,10,182,166,155,146,99,73,11,246,211,171,255,126,122,53,42,5,101,27,180,58,8,73,182,23,193,123,124,75,217,83,235,112,81,228,57,73,21,130,136,63,16,70,56,77,107,25,223,214,118,91,176,238,47,156,244,157,199,87,239,123,63,93,51,73,37,37,162,87,96,37,13,50,124,127,205,201,6,60,68,139,28,11,129,222,162,5,22,228,18,156,222,147,37,147,132,239,113,254,149,224,140,112,45,124,126,126,142,102,162,220,110,49,63,36,246,253,3,145,40,173,110,138,138,53,50,234,72,72,44,75,129,50,44,137,136,157,242,185,167,189,43,31,114,154,162,84,91,238,183,59,82,209,239,244,243,10,75,172,253,106,57,166,15,62,17,72,67,102,240,127,78,11,38,49,133,36,160,117,193,145,216,145,148,174,193,184,144,144,99,178,57,40,55,113,92,65,249,110,142,118,156,238,65,200,115,212,24,30,25,207,220,61,62,148,52,211,95,151,25,50,31,70,27,34,47,204,147,112,79,207,190,202,251,162,200,9,102,104,85,228,165,138,222,231,61,225,89,73,142,85,127,0,117,180,120,36,233,223,202,236,87,96,49,80,141,116,128,32,95,191,31,97,192,13,212,244,192,194,188,38,44,51,121,177,239,54,73,95,120,177,35,92,81,16,50,5,47,18,200,65,178,129,84,1,137,4,146,143,4,149,2,50,4,185,98,134,78,61,25,209,39,64,145,146,84,175,119,131,202,181,236,206,121,131,238,65,122,81,9,135,175,230,238,85,6,28,7,92,24,94,8,192,13,37,121,102,46,175,245,6,174,190,114,84,76,33,3,199,208,144,67,93,20,44,63,84,76,68,127,166,246,233,162,83,14,138,127,187,192,121,90,230,186,157,221,22,27,93,255,74,173,117,120,49,124,47,8,16,84,76,153,130,168,190,157,102,209,192,229,150,12,26,17,206,233,191,192,4,140,24,249,142,40,0,96,6,205,22,26,133,74,248,76,16,168,44,78,214,243,113,95,11,24,159,39,166,246,134,216,176,195,28,111,17,131,94,62,31,151,141,84,142,147,251,128,23,179,115,45,221,173,140,249,166,220,18,38,197,56,81,156,170,94,27,90,182,124,250,60,142,2,50,53,29,154,162,43,170,31,224,2,51,8,39,52,232,41,42,30,254,130,175,73,109,111,98,41,24,64,205,3,48,67,207,174,84,130,104,79,230,235,172,112,24,76,82,159,69,77,216,73,133,107,57,54,247,34,113,87,124,214,222,206,28,3,147,104,114,76,85,124,36,242,177,200,196,49,85,161,123,18,42,25,125,42,97,114,66,219,5,186,232,2,201,233,154,164,135,52,119,243,229,88,78,136,162,228,41,25,39,202,229,26,163,30,92,195,164,48,182,96,160,151,91,246,9,78,198,201,202,76,183,84,31,105,169,54,2,39,178,228,76,36,247,67,215,240,102,231,195,193,93,106,118,238,116,253,138,174,187,245,21,21,146,178,84,26,47,34,61,240,15,245,190,129,204,109,167,200,176,11,133,238,59,110,233,145,181,166,92,200,235,156,168,220,66,154,141,234,239,191,252,161,168,113,119,216,145,204,232,253,166,90,232,76,105,36,81,11,207,176,69,251,71,133,115,174,2,139,47,243,60,34,206,66,98,166,202,200,30,156,98,6,205,231,13,119,173,93,19,43,207,178,79,198,70,240,192,214,82,40,10,216,17,23,233,8,164,122,104,79,141,72,170,226,235,102,169,127,230,166,163,11,30,93,163,232,172,33,141,222,188,65,103,157,178,206,197,53,206,5,241,39,249,138,168,148,193,88,209,127,230,186,69,154,179,160,135,76,12,78,108,162,17,233,102,57,158,162,113,48,179,199,125,114,193,118,208,43,231,240,160,172,95,6,107,8,221,240,98,107,69,38,241,183,71,2,61,101,188,204,224,121,41,174,159,74,156,71,6,37,254,162,138,132,64,187,140,76,220,39,19,132,133,189,180,9,141,137,70,124,253,15,73,75,73,86,192,224,28,182,155,180,224,89,196,117,127,173,73,212,138,191,41,15,240,203,101,216,104,40,150,249,4,83,18,119,116,75,146,40,184,12,74,144,251,22,127,164,70,26,253,248,129,186,97,20,59,60,136,42,184,83,235,222,137,198,39,96,201,191,152,75,198,9,23,179,30,181,104,49,237,185,129,231,75,51,245,238,14,69,41,145,45,108,11,102,171,78,241,191,115,238,156,1,141,203,60,87,78,215,58,174,16,186,52,128,33,110,229,156,215,42,126,153,84,21,238,127,235,42,240,86,148,244,105,97,94,110,114,12,147,214,221,216,157,170,119,231,94,245,141,21,223,245,223,121,205,134,123,153,126,42,190,55,58,142,135,171,56,18,121,136,170,85,101,100,141,203,92,70,14,98,130,222,153,14,0,171,147,47,58,115,230,78,153,162,199,172,95,95,205,16,65,82,93,133,218,21,197,159,56,107,168,89,189,197,220,186,121,52,52,79,221,76,186,235,129,11,199,150,89,146,246,148,75,40,127,180,188,102,176,63,112,252,144,215,172,115,107,83,162,58,115,115,147,18,145,75,202,45,116,245,14,13,78,4,4,215,246,204,110,153,168,73,85,179,172,196,65,109,132,61,218,224,250,236,83,234,173,201,81,227,45,236,248,240,78,122,126,147,117,202,132,238,188,236,207,30,115,68,196,147,189,186,25,254,43,104,24,91,252,107,73,248,33,152,28,177,47,240,17,51,188,33,28,122,120,35,235,99,27,168,122,95,224,82,69,179,158,189,96,12,76,198,151,89,230,134,193,202,9,65,139,255,204,161,181,188,63,92,138,52,154,196,74,188,1,7,68,126,9,236,218,136,140,59,180,195,45,160,211,19,181,52,233,97,211,163,174,142,143,128,208,187,93,7,8,21,55,148,225,124,117,10,214,210,232,116,195,1,49,138,124,79,178,19,17,157,90,55,232,23,12,75,252,169,144,70,169,1,168,68,111,104,14,69,36,148,74,164,222,23,48,62,36,49,167,223,168,124,172,166,184,136,204,225,162,216,194,250,75,69,193,212,54,23,235,145,111,105,54,110,240,222,14,125,99,170,181,185,146,240,192,120,14,229,23,138,134,11,82,93,234,33,70,124,201,14,81,93,87,237,53,181,107,167,14,65,166,237,45,218,254,115,70,47,130,53,94,101,71,215,41,110,54,53,251,101,222,186,167,221,152,170,174,58,79,208,153,123,233,92,145,205,160,31,74,250,4,38,176,181,119,28,212,16,41,39,122,185,61,10,166,183,84,92,210,71,163,53,76,125,156,62,34,251,203,165,30,38,148,133,17,171,195,57,10,251,187,94,220,27,7,166,35,134,114,81,101,119,20,106,196,186,139,169,181,99,232,102,245,146,212,209,25,107,112,221,151,77,35,59,30,177,213,28,7,156,133,46,169,234,193,153,152,119,172,170,239,156,114,240,143,131,120,81,114,14,164,83,167,122,7,52,175,14,0,134,237,219,74,211,26,168,252,48,19,72,183,130,208,165,218,217,151,214,65,47,143,221,75,160,25,255,62,184,233,62,42,163,224,117,214,248,82,65,213,160,163,128,9,161,171,211,90,82,143,221,138,160,47,229,202,244,87,247,115,52,160,116,5,250,92,135,226,217,62,216,191,207,237,69,214,155,233,29,219,158,61,243,143,158,255,7,108,116,130,177,166,24,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9b299706-707d-4ea1-bb1f-dd34d3b36ef1"));
		}

		#endregion

	}

	#endregion

}
