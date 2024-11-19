﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ContactCommLanguageSchema

	/// <exclude/>
	public class ContactCommLanguageSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ContactCommLanguageSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ContactCommLanguageSchema(ContactCommLanguageSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("68ffb092-baa1-47a4-868e-862c4c2fed50");
			Name = "ContactCommLanguage";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("77fa8847-960e-4748-ad77-e37bb90e03a0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,85,75,79,227,64,12,62,7,137,255,224,205,94,82,9,165,119,104,123,128,22,84,9,36,118,217,199,113,53,36,78,59,210,100,82,230,1,219,69,252,247,157,87,210,73,8,168,151,166,227,216,159,237,207,223,56,156,212,40,119,164,64,248,129,66,16,217,84,42,191,106,120,69,55,90,16,69,27,126,122,242,122,122,146,104,73,249,6,30,246,82,97,125,49,56,231,75,162,200,193,24,227,212,117,195,199,223,8,252,200,158,47,47,135,25,30,80,41,115,146,48,31,250,246,74,205,141,119,235,106,32,12,200,87,129,27,243,2,174,24,145,242,28,140,183,34,133,178,117,221,18,190,209,100,131,206,109,58,157,194,76,234,186,38,98,191,8,231,123,209,60,211,18,101,27,4,44,68,228,109,192,52,138,216,233,71,70,11,40,108,158,177,52,112,14,235,209,236,201,171,171,160,171,244,154,34,43,77,169,247,130,62,19,229,203,75,118,254,0,2,73,217,112,182,135,159,18,133,129,227,88,216,190,225,143,238,157,47,2,36,242,210,163,246,83,24,71,169,132,46,84,35,108,34,87,185,247,24,242,224,12,107,78,21,37,140,254,67,224,248,2,212,4,19,110,244,210,84,198,23,17,10,129,213,60,29,105,46,157,46,242,14,117,58,132,157,237,136,32,53,112,163,191,121,218,175,63,93,216,254,160,232,12,179,169,115,118,177,129,233,145,124,217,128,149,62,232,4,172,142,147,100,192,149,145,212,59,242,146,228,237,115,6,239,80,109,155,242,24,242,110,240,32,28,48,114,226,138,86,212,244,38,144,153,129,150,240,66,213,214,54,106,123,57,150,172,224,190,46,211,69,171,205,3,114,30,115,229,66,5,42,45,184,92,220,190,47,195,56,183,111,35,106,111,52,45,109,225,153,251,211,101,107,9,116,214,182,167,117,105,8,180,150,124,85,239,212,222,145,151,60,32,51,92,130,116,143,111,26,197,222,58,161,242,246,236,128,232,221,105,5,89,236,251,101,14,92,51,214,230,11,155,32,91,94,174,254,98,161,141,106,161,124,180,127,13,232,96,152,249,138,75,45,112,121,121,48,101,147,14,167,5,90,219,125,245,221,92,37,55,7,247,152,199,197,230,62,15,122,151,204,39,139,96,146,151,45,101,8,153,143,205,173,91,156,37,73,122,228,4,47,211,254,85,195,116,205,127,17,166,113,102,41,91,100,233,109,231,153,6,50,18,39,190,248,233,31,254,215,79,43,98,63,86,235,7,2,228,40,236,238,240,13,194,147,163,88,53,221,90,147,197,22,107,242,153,246,90,137,68,183,221,79,210,92,240,110,29,140,75,41,40,225,48,251,113,73,141,10,198,46,155,16,53,24,243,196,19,147,123,66,251,44,134,87,215,162,169,179,118,41,117,214,223,91,20,120,48,159,65,106,67,242,181,92,61,105,194,50,143,151,187,253,24,169,116,2,68,134,74,46,226,41,68,229,30,49,6,37,161,196,138,104,22,45,132,202,84,9,210,125,226,12,154,251,112,29,51,136,229,16,231,216,27,29,2,179,150,247,208,72,255,35,107,165,234,68,58,164,221,208,21,0,238,80,74,147,183,91,244,103,109,107,110,190,147,201,39,59,212,91,99,227,219,127,146,140,77,100,131,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("68ffb092-baa1-47a4-868e-862c4c2fed50"));
		}

		#endregion

	}

	#endregion

}

