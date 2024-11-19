﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITILIncidentRegistrationFromEmailHelperSchema

	/// <exclude/>
	public class ITILIncidentRegistrationFromEmailHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITILIncidentRegistrationFromEmailHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITILIncidentRegistrationFromEmailHelperSchema(ITILIncidentRegistrationFromEmailHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e5e5743f-4160-4ea2-ae07-18b17d70fcc4");
			Name = "ITILIncidentRegistrationFromEmailHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("828aae12-9105-4428-91be-95ccb167b0a7");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,85,91,107,226,80,16,126,78,161,255,97,106,161,68,144,8,251,184,85,23,113,109,87,40,108,169,189,60,44,251,112,140,163,61,144,156,216,115,177,202,214,255,190,115,114,114,51,38,75,89,48,146,57,51,243,205,55,183,19,193,98,84,27,22,34,60,162,148,76,37,43,29,76,18,177,226,107,35,153,230,137,56,63,251,115,126,230,25,197,197,26,230,123,165,49,190,174,201,100,31,69,24,90,99,21,220,162,64,201,195,19,155,59,46,222,78,14,31,113,167,131,7,92,155,136,201,233,110,35,81,41,11,82,218,85,57,197,113,34,154,53,18,219,206,131,169,208,92,115,84,39,161,95,112,209,236,84,73,61,152,163,220,242,16,239,89,168,179,215,214,64,55,100,147,200,163,72,53,139,123,153,132,148,160,213,211,239,82,226,154,66,192,36,98,74,125,133,217,227,236,110,38,66,190,68,161,169,32,92,105,71,225,70,38,241,52,102,60,250,129,209,6,37,57,246,251,125,24,40,19,199,76,238,71,153,60,134,208,194,128,126,101,26,88,20,37,239,10,120,134,6,178,2,7,43,194,3,180,128,65,142,213,175,128,253,250,185,37,210,228,247,155,132,141,89,68,60,204,160,63,73,16,40,149,79,165,97,135,170,44,2,53,93,75,99,43,72,181,184,79,227,90,189,125,50,22,159,140,239,119,33,69,62,252,167,251,147,66,73,108,132,27,103,48,71,98,215,2,122,95,23,76,161,95,211,212,162,94,162,88,186,220,206,207,172,92,111,90,122,240,128,218,72,161,128,65,72,136,240,206,245,43,176,48,76,12,53,141,137,37,132,137,208,52,85,176,216,131,114,211,7,180,168,58,40,0,251,117,196,193,134,73,22,131,160,157,30,118,44,104,58,254,251,206,104,98,3,96,42,4,131,126,106,213,226,228,98,206,150,228,147,133,231,203,127,187,100,148,173,203,56,99,223,228,34,93,182,53,42,249,105,218,42,153,104,42,39,46,33,201,166,16,28,127,184,69,109,221,94,168,66,149,149,244,51,109,153,104,15,110,13,47,10,55,91,102,114,193,48,107,147,199,87,126,97,3,23,195,212,42,152,198,27,2,187,186,42,205,143,85,185,179,183,101,50,111,136,165,241,29,53,202,152,11,124,210,60,82,48,116,43,237,238,131,61,221,135,122,48,111,51,126,254,50,242,29,166,39,240,189,186,6,99,185,54,49,85,201,239,28,15,90,167,7,199,35,218,237,94,59,132,217,84,144,135,100,139,8,7,115,195,181,125,169,4,30,129,58,61,180,108,91,51,177,212,27,128,84,149,113,147,254,1,223,12,42,157,87,203,243,38,69,169,135,149,214,228,218,113,81,237,97,89,249,76,121,200,147,107,136,3,113,162,10,126,149,36,8,70,152,40,202,28,249,10,252,166,196,131,177,216,251,221,162,165,94,59,88,179,247,122,77,235,205,52,250,126,104,108,201,122,176,235,194,112,4,121,86,217,49,12,29,27,248,248,128,93,144,7,184,195,45,70,48,0,103,83,59,254,6,59,186,68,157,170,104,238,161,204,166,141,233,133,139,84,166,84,174,5,125,199,52,125,163,77,44,158,89,100,208,239,84,114,161,181,237,181,149,50,160,141,57,34,224,254,221,206,86,214,238,58,191,251,14,217,183,173,114,251,29,254,2,205,215,0,190,97,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e5e5743f-4160-4ea2-ae07-18b17d70fcc4"));
		}

		#endregion

	}

	#endregion

}

