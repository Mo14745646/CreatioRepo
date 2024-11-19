﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AsyncEmailSenderSchema

	/// <exclude/>
	public class AsyncEmailSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AsyncEmailSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AsyncEmailSenderSchema(AsyncEmailSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6b9100d0-f647-4a24-b9f0-028ee07c0184");
			Name = "AsyncEmailSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("33bac096-c819-4c57-86af-fe71bbb0cb56");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,193,142,218,48,16,61,103,165,253,135,81,122,1,9,37,247,45,68,66,116,133,168,212,213,74,108,213,99,101,156,9,120,155,216,209,216,102,75,87,252,123,109,39,129,144,45,21,23,144,199,239,141,223,188,60,91,178,10,117,205,56,194,11,18,49,173,10,147,44,148,44,196,214,18,51,66,201,251,187,247,251,187,200,106,33,183,176,62,104,131,213,231,193,218,225,203,18,185,7,235,100,137,18,73,240,51,166,223,150,240,90,253,242,204,171,168,53,223,97,110,75,36,135,112,152,79,132,91,7,135,69,201,180,134,7,152,235,131,228,143,21,19,229,26,101,142,20,64,105,154,194,84,219,170,98,116,200,218,245,28,120,160,20,138,128,121,210,142,148,84,86,3,122,50,104,199,118,167,39,29,59,237,209,107,187,41,5,111,249,31,15,140,222,195,161,39,105,207,164,106,36,35,80,63,192,115,160,54,251,67,85,161,240,93,35,1,87,82,54,110,38,39,96,95,64,167,192,131,23,39,236,112,233,63,90,20,109,209,120,47,163,99,43,202,137,108,116,93,138,116,60,109,44,55,138,110,81,185,146,194,8,86,138,63,168,129,129,196,55,16,142,206,164,203,144,42,192,236,208,81,16,129,19,22,179,120,232,80,156,102,141,119,87,134,11,149,154,17,171,64,186,104,206,98,123,49,87,156,189,184,254,118,224,211,52,13,140,190,59,195,115,71,3,127,46,219,142,91,191,6,160,217,0,118,139,151,223,208,236,84,126,139,143,93,152,53,136,170,194,92,48,131,240,170,54,33,148,109,2,155,60,222,106,21,115,34,247,194,28,86,121,156,253,195,146,189,32,99,89,9,123,37,114,240,174,4,143,70,75,235,150,103,106,103,133,187,219,222,141,149,44,20,112,75,132,210,132,120,206,6,73,75,22,231,205,224,79,164,13,121,233,110,148,37,41,91,59,70,83,241,119,156,51,51,250,152,137,9,196,63,221,143,87,146,60,225,155,255,31,141,199,77,183,61,35,8,163,160,65,210,174,153,15,220,23,17,206,118,78,76,155,222,19,80,155,87,39,40,107,213,71,239,125,55,38,189,249,142,97,255,216,52,159,215,245,233,73,57,61,46,171,238,107,124,85,155,233,80,235,227,111,228,214,93,148,108,212,205,55,25,26,242,67,209,175,240,164,38,79,78,245,164,209,211,179,176,41,247,134,26,255,39,87,77,245,178,120,252,11,89,119,54,167,181,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6b9100d0-f647-4a24-b9f0-028ee07c0184"));
		}

		#endregion

	}

	#endregion

}

