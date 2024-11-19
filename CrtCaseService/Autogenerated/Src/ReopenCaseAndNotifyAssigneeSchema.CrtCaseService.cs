﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ReopenCaseAndNotifyAssigneeSchema

	/// <exclude/>
	public class ReopenCaseAndNotifyAssigneeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ReopenCaseAndNotifyAssigneeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ReopenCaseAndNotifyAssigneeSchema(ReopenCaseAndNotifyAssigneeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("09d5e522-4a4c-45fb-a412-d5799f195e9c");
			Name = "ReopenCaseAndNotifyAssignee";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("33bac096-c819-4c57-86af-fe71bbb0cb56");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,26,93,115,219,54,242,89,157,233,127,64,120,157,30,53,213,208,125,185,23,219,82,198,150,237,214,115,137,157,179,156,203,67,38,147,161,73,72,226,149,34,20,128,180,163,186,254,239,183,192,2,36,8,126,136,74,103,218,23,91,4,119,23,139,253,222,5,179,112,67,197,54,140,40,185,167,156,135,130,45,243,96,206,178,101,178,42,120,152,39,44,11,230,161,160,11,202,31,147,136,126,255,221,243,247,223,141,10,145,100,43,50,231,84,190,15,174,224,95,193,233,61,91,173,82,88,63,41,1,86,41,123,8,211,227,227,57,219,108,128,204,27,0,168,189,95,236,68,78,55,238,51,108,158,166,52,146,59,139,224,23,154,81,158,68,13,152,55,73,246,165,177,120,79,191,230,213,162,125,26,185,127,251,27,78,187,214,131,139,243,206,87,151,89,158,228,9,21,157,0,87,97,148,51,142,16,0,243,15,78,87,112,30,50,79,67,33,142,201,29,101,91,154,73,177,158,101,241,13,203,147,229,238,76,136,100,149,81,170,192,143,142,142,200,169,40,54,155,144,239,102,250,89,161,18,78,183,156,10,154,229,130,108,57,139,40,44,177,37,172,74,122,146,141,8,104,18,216,40,98,89,156,160,8,13,189,35,139,224,182,120,72,147,136,68,138,102,47,55,163,103,197,81,117,2,32,153,135,176,255,49,121,199,147,199,48,71,142,71,91,124,144,27,139,156,136,156,75,110,46,232,50,44,210,28,105,46,138,135,255,129,90,201,148,120,55,244,137,208,77,152,164,192,121,68,147,71,26,195,143,85,200,99,137,148,175,41,30,227,134,5,207,63,191,120,39,157,228,111,159,192,56,174,99,176,151,98,147,221,128,25,75,218,122,177,7,109,145,131,189,10,23,207,172,246,32,222,20,155,7,202,235,104,184,214,135,100,31,254,77,244,123,137,104,175,123,39,90,202,52,139,81,208,117,169,95,37,52,141,187,68,14,250,200,65,153,224,141,49,203,210,29,185,6,71,35,159,83,248,51,37,240,243,109,152,133,43,202,193,149,114,233,129,148,251,158,212,245,91,176,29,88,127,147,128,235,128,196,188,241,30,22,222,113,176,18,46,141,94,178,193,114,224,154,198,134,17,253,72,46,18,229,183,96,101,167,120,252,137,22,195,140,160,216,206,210,4,246,22,135,236,165,76,21,223,187,126,161,22,174,149,65,66,248,2,71,56,21,20,196,207,233,114,234,189,23,82,85,89,134,145,196,59,154,145,124,183,165,65,73,198,118,7,227,15,117,28,247,241,153,172,104,126,66,74,177,203,135,23,87,21,74,231,159,51,91,185,39,157,172,43,27,72,34,21,101,137,64,232,126,14,219,140,138,200,144,60,26,1,115,250,215,40,89,18,31,33,131,107,113,83,164,233,45,191,220,108,243,157,95,103,108,60,54,8,163,250,11,48,28,101,45,81,152,38,191,135,15,41,93,40,98,255,13,211,130,250,117,169,76,90,13,124,124,130,116,95,240,31,167,144,32,178,54,177,104,8,33,121,39,13,38,30,229,134,74,200,10,208,150,180,202,73,202,101,23,16,104,41,249,28,213,23,186,133,222,97,47,14,193,97,6,227,114,225,62,87,154,153,206,26,44,146,215,175,137,223,88,156,146,12,162,163,67,200,17,250,88,203,87,116,16,54,146,107,145,219,117,22,37,49,228,143,59,240,52,48,17,101,122,87,156,109,46,101,56,254,149,166,224,119,228,51,183,94,226,218,193,226,28,176,207,48,17,15,97,248,174,193,175,35,249,230,129,80,248,45,235,83,204,180,152,192,119,50,106,158,14,96,97,230,107,71,66,237,201,4,192,11,73,225,140,175,138,13,224,250,94,81,15,72,19,226,234,212,81,106,43,111,157,122,85,188,44,32,158,82,126,251,144,135,9,132,244,15,60,220,42,117,138,218,242,193,170,236,38,61,76,131,61,172,213,87,29,165,213,217,70,133,57,107,232,44,221,27,236,241,155,6,181,134,120,91,229,244,62,75,190,20,84,153,4,132,111,64,4,121,129,185,36,143,73,190,147,21,13,227,113,191,68,126,41,146,152,156,105,140,235,216,100,22,59,163,12,222,88,149,74,131,55,149,113,229,128,13,231,172,200,242,170,194,132,12,47,183,19,253,27,37,128,114,167,225,145,64,79,230,60,52,68,159,115,246,219,126,195,179,146,4,34,96,140,196,223,39,78,0,215,16,214,79,43,161,18,147,187,42,252,42,110,235,231,42,100,227,130,15,118,70,106,137,173,6,220,146,213,186,10,33,43,144,12,41,133,84,71,70,5,104,160,85,126,61,133,254,48,79,238,33,224,120,26,169,71,59,83,104,56,64,83,7,12,189,179,86,41,106,225,118,23,150,254,248,100,128,32,223,210,124,205,246,85,208,186,184,26,90,250,56,204,27,142,72,170,107,32,125,102,109,64,242,20,13,178,126,157,68,240,129,241,223,84,47,30,220,81,193,10,30,81,153,208,161,76,159,144,94,237,77,48,251,120,141,13,68,224,145,159,12,71,240,203,11,212,73,188,113,112,207,52,11,227,182,116,242,200,32,88,224,38,170,161,242,85,199,187,83,238,143,63,205,241,244,11,78,55,73,38,251,55,253,60,117,210,27,182,204,187,69,180,134,198,207,106,73,140,171,159,239,36,135,62,156,82,211,241,198,120,166,0,141,26,209,221,120,142,6,243,24,114,197,24,4,182,169,142,112,213,11,134,253,32,188,169,120,151,27,223,131,181,235,22,80,137,228,84,198,199,153,223,232,41,173,61,50,213,235,237,167,100,44,179,102,200,31,221,238,241,147,205,189,105,215,187,205,157,169,162,120,86,86,236,230,255,200,59,43,192,182,121,163,160,8,230,5,231,144,41,228,170,28,232,228,144,162,174,99,141,245,50,33,21,1,253,18,40,104,97,181,1,45,148,57,2,76,169,33,21,156,68,80,62,35,4,114,211,78,67,55,203,19,45,201,54,144,42,43,2,88,245,96,64,117,91,81,73,14,196,163,101,134,230,124,94,36,105,44,67,48,130,44,161,28,14,163,53,241,81,124,24,123,33,62,86,18,71,135,16,101,43,4,4,131,51,168,29,178,216,87,192,227,90,159,130,30,190,14,197,26,118,189,74,82,250,62,79,82,53,10,146,150,240,246,226,95,191,194,43,112,150,136,73,137,4,144,176,225,23,149,239,206,119,16,153,101,87,102,121,158,169,71,28,231,9,22,52,191,160,75,203,164,132,223,13,105,129,249,158,145,254,64,107,24,72,181,132,175,76,100,32,38,218,132,66,28,104,55,3,9,35,246,125,178,161,253,71,5,201,235,199,11,136,34,18,222,31,91,142,167,155,238,121,184,213,222,167,219,230,43,198,55,97,238,191,106,237,162,107,29,175,14,83,163,215,245,70,88,175,30,183,206,192,116,184,30,217,110,48,84,160,53,134,225,236,245,19,56,17,17,195,237,55,7,99,25,75,189,161,140,237,132,77,85,169,188,98,33,120,63,220,100,240,64,37,129,193,136,210,245,0,71,58,103,23,70,248,72,141,39,201,1,89,112,157,45,153,86,245,15,222,71,76,29,199,228,25,127,188,124,170,15,104,158,66,65,228,232,149,228,140,104,143,32,79,73,190,38,165,123,128,160,159,181,127,188,120,221,121,245,253,54,134,223,38,184,189,195,57,46,141,125,85,161,135,101,204,51,33,73,42,211,172,34,170,142,120,248,208,24,200,148,49,180,76,161,32,41,144,43,78,240,203,237,64,84,40,190,224,93,200,65,221,57,68,77,168,53,233,216,96,125,88,83,14,98,5,69,140,193,1,46,191,20,97,234,55,48,44,118,199,4,4,132,60,161,136,235,76,7,151,95,105,84,228,180,189,224,208,101,195,27,22,198,82,250,40,11,84,255,164,111,172,24,153,28,75,69,21,196,141,249,95,138,47,166,69,180,76,243,63,5,229,110,37,209,230,17,32,73,219,1,52,193,0,42,72,89,23,43,42,90,28,215,226,44,125,10,119,98,65,83,28,92,73,57,214,177,206,98,93,34,248,56,161,118,169,90,239,113,146,211,3,0,210,7,51,172,180,172,1,109,73,52,171,13,83,182,212,72,185,80,227,64,254,173,98,200,22,207,250,111,186,131,92,151,87,181,15,16,193,178,12,151,63,128,23,148,38,33,124,92,156,179,205,54,228,137,96,153,44,144,2,101,63,58,240,25,26,119,140,229,58,62,64,244,209,130,173,184,241,199,78,4,48,120,184,129,144,7,241,93,22,157,8,88,93,38,89,188,195,102,168,239,234,109,123,101,169,107,247,58,33,216,158,139,252,150,235,200,222,110,207,85,47,177,40,182,91,198,243,183,97,146,158,179,175,114,110,100,52,215,231,240,244,207,154,174,107,30,146,168,188,109,217,38,96,59,181,59,12,90,183,174,59,3,228,185,214,16,177,237,238,110,8,137,185,13,216,36,163,164,169,66,102,47,17,0,51,149,74,160,130,80,11,25,16,245,138,113,149,174,246,211,210,192,109,196,148,18,84,219,66,109,251,104,196,86,75,89,53,11,169,79,159,130,134,218,205,120,80,117,129,137,200,77,143,80,85,190,154,131,222,134,162,69,127,227,201,33,4,58,52,104,106,152,23,67,172,143,22,246,73,173,74,28,31,136,223,170,61,40,207,70,35,210,159,34,246,121,144,6,165,127,174,23,109,228,209,253,173,40,238,24,92,209,60,90,75,87,191,56,87,9,180,219,112,16,161,45,130,60,48,150,18,40,60,41,141,239,25,238,124,67,159,84,114,236,108,198,53,81,125,35,175,122,18,200,220,153,156,7,196,224,5,54,17,121,88,26,198,183,75,156,43,64,178,207,192,50,18,180,140,117,152,173,32,241,145,31,127,4,14,156,101,223,218,182,135,111,23,171,147,103,44,195,149,179,168,65,174,20,155,46,217,213,51,94,70,245,68,209,51,87,180,109,20,49,103,202,131,15,35,58,104,88,224,100,98,25,87,234,218,213,237,3,166,66,234,247,29,115,178,143,229,137,238,112,171,188,26,220,202,27,243,48,189,94,101,208,230,74,192,49,121,53,37,63,31,56,16,171,221,229,182,207,21,215,52,250,77,144,68,79,155,133,42,80,72,34,244,88,184,99,104,168,86,182,178,44,32,25,248,211,212,171,100,234,205,36,183,218,248,131,211,35,5,85,33,161,244,196,236,52,154,201,74,234,244,40,154,117,111,126,122,100,192,209,10,205,93,116,105,135,18,10,107,170,189,142,227,92,187,5,250,163,0,97,198,217,195,204,162,249,129,193,184,230,41,135,202,88,176,84,126,34,193,160,30,11,11,168,220,255,54,121,55,24,217,43,123,196,184,229,239,20,124,183,252,203,114,223,200,110,232,188,174,69,214,39,195,52,138,172,249,246,166,99,242,199,31,157,24,250,8,53,248,111,215,234,82,58,238,223,164,72,220,123,143,238,174,36,208,62,183,249,203,213,166,184,250,54,29,88,31,73,149,211,214,48,139,245,5,143,32,142,204,50,170,190,74,146,56,234,72,127,149,174,220,125,187,212,244,152,240,28,58,42,84,215,157,57,219,220,28,109,111,168,123,229,132,70,27,16,210,254,171,186,5,56,111,91,92,187,163,42,216,159,127,246,93,106,221,21,80,37,169,209,129,196,211,146,81,146,213,95,192,245,223,89,169,137,11,208,240,205,249,7,13,126,20,253,167,36,5,249,82,147,104,76,39,213,144,172,250,206,74,207,45,230,122,100,81,155,253,107,68,249,89,142,141,5,253,93,145,166,229,228,249,0,198,66,145,253,51,39,75,86,100,113,201,150,86,172,61,174,150,27,182,87,144,150,182,202,253,155,95,81,4,37,146,249,4,226,124,167,106,17,191,86,132,91,5,152,225,101,208,89,62,132,66,222,76,134,210,156,101,99,164,194,212,3,141,164,65,201,171,75,143,252,164,251,137,31,14,173,93,201,18,75,224,82,58,47,132,166,130,86,71,181,175,167,167,214,221,109,128,175,110,179,202,147,128,181,143,159,200,179,173,240,151,73,139,203,77,212,216,231,32,9,220,203,17,27,121,146,127,158,107,60,189,224,69,123,121,239,94,157,163,197,146,14,186,206,146,21,98,172,39,23,18,166,210,191,125,221,231,122,179,181,175,245,221,130,75,170,63,112,148,27,117,205,63,27,133,124,207,21,57,174,218,139,47,255,7,46,38,182,143,201,44,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateNotifySubjectLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateNotifySubjectLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d2f08d4f-1078-4db2-8912-9c582058dbcb"),
				Name = "NotifySubject",
				CreatedInPackageId = new Guid("33bac096-c819-4c57-86af-fe71bbb0cb56"),
				CreatedInSchemaUId = new Guid("09d5e522-4a4c-45fb-a412-d5799f195e9c"),
				ModifiedInSchemaUId = new Guid("09d5e522-4a4c-45fb-a412-d5799f195e9c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("09d5e522-4a4c-45fb-a412-d5799f195e9c"));
		}

		#endregion

	}

	#endregion

}
