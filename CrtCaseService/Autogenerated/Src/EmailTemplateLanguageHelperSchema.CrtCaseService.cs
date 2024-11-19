﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailTemplateLanguageHelperSchema

	/// <exclude/>
	public class EmailTemplateLanguageHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailTemplateLanguageHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailTemplateLanguageHelperSchema(EmailTemplateLanguageHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ed98c998-00a1-44de-b0ff-893ddabf9f63");
			Name = "EmailTemplateLanguageHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("91d5b8ed-2389-4812-9e17-f329888285e6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,85,203,78,227,48,20,93,23,137,127,184,202,108,138,132,146,61,208,46,40,175,74,116,132,166,240,1,198,185,105,45,37,118,228,71,103,58,136,127,31,59,78,72,109,218,12,154,110,70,93,52,177,207,61,247,220,103,56,169,80,213,132,34,60,163,148,68,137,66,167,51,193,11,182,50,146,104,38,248,233,201,219,233,201,200,40,198,87,176,220,42,141,213,229,199,251,174,137,196,67,231,233,45,215,76,51,84,22,224,126,163,111,18,87,150,25,102,37,81,234,2,110,43,194,202,103,172,234,146,104,124,36,124,101,200,10,31,176,172,81,54,240,44,203,224,74,153,170,34,114,59,109,223,253,53,20,66,130,66,34,233,218,185,165,162,170,12,103,180,209,13,101,203,4,175,91,160,68,33,160,147,177,77,59,198,108,135,178,54,175,37,163,64,157,160,33,61,23,48,31,84,59,122,107,20,247,17,10,174,180,52,84,11,105,3,125,106,188,120,68,28,84,115,48,231,54,79,164,100,191,17,56,254,4,102,141,9,183,165,17,133,197,34,2,149,88,76,146,1,5,9,100,211,244,131,62,139,249,175,106,34,73,5,220,214,124,146,184,156,204,243,100,58,115,185,145,72,133,204,129,229,46,73,5,67,153,94,101,13,120,191,173,81,40,109,108,28,169,75,117,50,125,177,239,54,253,221,65,96,220,230,118,64,245,248,222,176,28,188,158,115,120,9,184,33,116,117,6,174,27,71,163,8,52,137,96,151,13,168,233,187,237,146,174,177,34,13,125,251,56,137,124,164,187,192,5,225,86,152,76,239,24,207,231,109,1,174,183,223,109,216,227,196,165,42,57,243,228,238,217,219,89,190,158,60,157,73,180,1,250,155,113,232,231,147,101,122,135,154,174,239,164,168,110,174,199,62,126,143,121,111,219,8,121,238,59,169,157,156,143,198,122,146,194,38,206,13,213,133,123,214,214,1,230,3,157,21,23,104,127,143,212,29,83,92,132,232,213,215,96,133,218,7,84,75,182,177,49,219,73,212,135,213,31,208,254,183,145,152,133,147,187,79,116,219,95,190,22,59,101,57,78,229,2,245,90,228,95,145,120,143,26,114,44,136,41,117,191,116,252,102,226,185,219,75,232,90,31,116,219,251,95,157,207,14,239,102,244,54,96,24,28,83,137,218,72,174,166,221,136,133,224,238,118,39,113,27,38,181,33,37,52,67,104,99,233,12,231,185,159,203,94,71,55,124,158,36,194,246,176,115,224,166,44,131,70,254,111,242,54,188,214,58,224,163,32,185,93,166,177,185,210,238,107,118,48,227,63,124,90,202,62,241,199,38,252,28,230,207,129,36,8,21,118,5,217,144,102,184,53,161,250,129,240,188,180,192,73,243,5,153,249,67,231,33,216,191,45,106,220,79,75,188,119,219,93,229,152,157,225,171,248,21,50,47,252,225,113,204,202,212,181,144,122,137,114,195,40,134,14,150,193,221,113,126,218,46,91,160,82,238,163,19,248,185,9,238,254,221,79,152,255,116,105,40,181,148,194,185,9,19,232,225,225,89,0,223,155,21,111,181,247,42,48,222,27,234,229,238,216,70,66,253,127,48,190,81,147,13,108,75,127,26,30,190,255,1,89,239,113,68,83,10,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ed98c998-00a1-44de-b0ff-893ddabf9f63"));
		}

		#endregion

	}

	#endregion

}

