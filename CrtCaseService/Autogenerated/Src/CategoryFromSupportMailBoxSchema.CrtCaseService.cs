﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CategoryFromSupportMailBoxSchema

	/// <exclude/>
	public class CategoryFromSupportMailBoxSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CategoryFromSupportMailBoxSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CategoryFromSupportMailBoxSchema(CategoryFromSupportMailBoxSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4c515b42-8402-4aff-b2f9-ce3ea977fd29");
			Name = "CategoryFromSupportMailBox";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b11d550e-0087-4f53-ae17-fb00d41102cf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,86,219,78,219,64,16,125,54,18,255,48,53,47,142,132,156,119,72,34,17,18,144,91,1,45,233,229,177,218,216,147,176,146,189,14,123,1,210,42,255,222,89,175,237,216,206,5,154,23,123,215,103,110,103,206,236,70,176,12,213,138,197,8,223,81,74,166,242,133,14,175,115,177,224,75,35,153,230,185,56,61,249,123,122,226,25,197,197,18,102,107,165,49,187,236,172,9,159,166,24,91,176,10,111,81,160,228,241,14,102,194,52,219,110,54,99,101,89,46,246,127,145,120,104,63,156,140,233,19,125,60,147,184,164,184,112,157,50,165,46,224,154,105,92,230,114,125,35,243,108,102,86,171,92,234,59,198,211,113,254,86,160,251,253,62,12,148,201,50,38,215,163,114,253,48,215,140,11,80,14,13,25,193,97,158,191,161,10,43,131,126,195,98,101,230,41,143,33,182,225,142,68,131,11,136,142,229,226,89,78,235,228,111,56,166,9,101,255,85,242,23,50,42,82,245,86,110,1,18,89,146,139,116,13,63,20,74,234,140,112,76,195,111,211,90,59,58,188,51,20,137,243,90,174,43,126,168,55,90,154,88,231,210,6,42,170,112,136,46,39,197,70,36,184,230,44,229,127,16,4,190,2,39,99,38,72,35,249,130,176,136,16,75,92,12,253,195,21,250,253,81,88,59,239,119,189,15,86,76,178,12,4,73,111,232,183,203,240,71,182,76,136,235,141,112,208,47,208,133,113,201,254,225,184,65,135,164,182,243,30,20,180,123,29,234,96,8,59,92,122,222,230,56,161,119,168,159,242,157,166,237,37,179,24,9,219,74,133,118,76,224,217,160,92,195,34,151,176,68,173,173,184,155,226,171,181,119,136,60,137,218,72,161,70,179,134,55,98,169,218,110,106,167,132,220,162,118,111,65,197,192,11,147,101,54,223,138,100,134,69,155,75,80,135,158,94,97,225,126,118,212,77,38,2,63,83,202,63,7,255,206,37,124,79,157,244,247,226,108,101,86,15,132,173,186,22,37,239,66,175,82,206,212,85,66,196,83,152,6,56,180,29,15,170,168,55,185,140,68,204,19,20,250,145,154,66,250,46,14,44,191,23,94,169,173,187,166,121,68,53,201,207,57,23,181,143,217,90,196,51,215,5,85,26,102,237,152,94,248,208,78,110,143,165,45,41,140,212,244,217,176,180,230,166,93,39,83,37,189,133,184,60,215,173,102,15,254,79,116,239,13,48,181,92,237,202,10,94,185,126,130,184,108,196,135,68,246,142,139,142,238,220,124,78,120,33,28,114,56,160,166,16,65,231,112,107,120,50,178,89,149,131,138,234,23,249,41,37,193,81,213,202,60,104,155,85,134,165,88,15,1,131,158,99,184,212,126,91,229,141,73,112,40,119,185,4,147,241,244,13,99,67,167,35,36,115,251,74,216,206,24,132,83,161,140,196,201,120,187,21,244,170,172,43,63,145,189,230,30,233,196,166,51,76,186,199,176,153,66,232,194,160,131,4,46,214,214,139,247,250,196,83,132,192,153,134,22,213,136,225,121,174,80,192,226,146,26,150,17,232,202,213,110,134,126,178,212,96,201,198,40,232,76,209,101,229,132,47,32,40,60,144,98,239,77,154,62,200,105,182,210,235,86,32,239,131,33,90,243,95,71,216,84,47,182,33,181,86,162,228,160,63,215,184,214,9,209,74,247,83,221,124,251,223,196,222,215,234,11,174,93,21,173,180,183,56,170,219,125,63,111,36,176,155,98,249,116,143,77,115,52,107,87,71,6,211,237,54,55,55,255,0,147,165,170,72,80,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4c515b42-8402-4aff-b2f9-ce3ea977fd29"));
		}

		#endregion

	}

	#endregion

}
