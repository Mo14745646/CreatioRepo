﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CasePushNotifierSchema

	/// <exclude/>
	public class CasePushNotifierSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CasePushNotifierSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CasePushNotifierSchema(CasePushNotifierSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0");
			Name = "CasePushNotifier";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ff020f92-eb95-49ea-a251-6a0ed7e274a5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,25,75,111,219,54,248,156,2,253,15,172,118,145,1,67,201,174,113,146,161,115,146,206,64,18,100,117,178,30,138,162,160,37,218,38,42,81,30,73,165,245,90,255,247,125,124,201,36,37,187,94,186,221,118,73,34,242,123,191,63,134,225,138,136,21,206,9,122,32,156,99,81,207,101,54,174,217,156,46,26,142,37,173,217,203,23,95,95,190,56,106,4,101,11,52,93,11,73,170,81,244,13,240,101,73,114,5,44,178,55,132,17,78,243,14,204,155,178,158,225,146,254,165,105,110,111,23,250,248,244,116,92,87,85,205,178,155,122,177,128,227,237,189,47,148,130,232,191,225,100,215,121,118,197,36,149,148,136,157,0,215,56,151,53,55,16,0,243,19,39,11,144,16,141,75,44,196,41,26,99,65,238,27,177,188,171,37,157,83,194,53,204,241,241,49,58,19,77,85,97,190,190,176,223,22,64,32,89,163,188,17,178,174,8,71,120,86,55,18,97,99,26,68,153,38,151,57,10,199,30,137,247,151,100,142,155,82,254,74,89,1,66,166,114,189,34,245,60,157,196,252,7,131,15,0,189,106,102,37,205,81,174,100,236,136,136,78,81,7,13,112,190,106,209,143,86,156,62,97,73,60,220,9,155,215,234,70,185,249,200,145,126,211,208,2,77,10,100,14,143,22,68,142,204,95,148,73,194,25,46,145,112,71,27,31,79,72,174,108,124,215,84,51,144,228,159,98,107,174,83,137,101,35,158,193,91,99,67,236,74,48,248,163,32,252,7,73,140,193,29,13,39,207,55,66,72,231,14,18,237,96,74,27,227,172,54,24,33,124,36,102,18,2,242,222,248,47,114,166,186,119,108,115,240,233,52,95,146,10,107,150,231,40,81,94,78,70,93,4,96,142,86,109,148,228,58,53,111,137,16,120,65,110,104,69,37,224,254,124,114,114,18,96,130,28,18,84,228,4,23,53,43,215,104,2,41,139,62,150,240,227,28,193,159,183,152,1,54,135,50,32,85,46,19,158,38,113,44,38,131,145,213,142,176,194,40,216,163,45,111,84,90,42,133,181,77,173,190,198,190,49,197,84,121,27,176,152,41,66,168,9,62,7,214,234,31,195,99,144,55,60,24,249,134,223,33,218,53,37,101,177,203,11,173,77,34,113,62,118,248,236,99,113,75,228,178,14,120,128,236,161,7,180,155,193,194,247,145,239,30,168,44,73,26,164,224,176,141,138,109,20,58,131,216,27,169,176,30,72,181,42,21,245,115,164,93,151,235,90,61,43,201,31,184,108,72,154,40,86,15,62,96,50,12,72,154,216,229,4,14,152,101,153,93,215,188,194,50,13,232,15,173,92,3,223,218,93,205,58,2,216,171,114,123,62,213,39,138,249,62,29,111,98,132,46,9,80,153,145,207,168,3,153,70,126,203,222,213,252,147,110,149,217,91,34,234,134,231,0,88,115,8,247,161,201,229,110,164,15,35,83,36,29,38,34,251,122,178,201,180,142,0,221,171,222,192,26,247,9,115,167,33,136,236,170,19,20,111,149,108,222,103,186,211,47,29,242,30,166,22,225,29,149,203,107,92,150,51,156,127,114,100,134,104,142,75,65,122,29,246,84,171,122,13,129,172,180,78,117,241,84,54,131,150,255,186,168,40,123,100,84,78,138,161,169,170,170,44,169,15,63,234,218,175,89,93,172,157,203,46,169,54,55,52,198,51,115,235,160,46,16,46,10,170,239,202,75,44,177,117,220,110,248,212,170,31,162,101,175,139,34,77,136,154,11,214,202,70,42,146,131,146,185,7,139,147,188,230,197,164,176,56,147,34,123,168,109,180,248,110,138,139,170,149,52,206,215,56,194,44,5,201,215,174,81,196,132,50,101,236,180,207,198,214,158,202,144,195,200,78,150,236,6,68,150,249,18,165,87,95,114,178,210,98,145,47,206,232,71,170,132,103,87,156,215,60,133,211,110,43,234,230,168,233,211,157,76,53,206,118,189,211,58,95,216,158,238,216,41,35,17,241,167,181,139,158,209,214,198,1,191,55,132,175,59,169,231,67,216,22,51,52,125,205,72,145,180,122,140,49,123,11,117,248,145,229,48,47,82,73,10,27,41,208,80,108,158,110,140,114,192,30,172,217,86,26,197,166,237,248,105,43,255,96,11,12,1,0,131,110,83,177,52,209,97,227,249,219,168,7,92,20,28,152,198,136,27,107,49,220,154,193,160,210,57,74,45,234,43,176,68,83,150,173,26,109,37,85,183,138,228,3,12,132,150,191,182,243,153,139,241,64,152,13,34,144,171,17,145,36,217,237,78,55,0,42,135,186,191,83,47,95,255,85,135,69,105,230,196,156,44,24,12,226,151,84,64,135,88,107,229,68,224,176,195,125,186,245,133,177,148,245,136,231,57,19,46,25,100,176,231,62,166,91,210,46,20,211,176,2,119,7,185,183,11,239,189,159,162,167,118,24,116,191,63,68,34,228,173,233,148,163,159,73,114,28,16,137,36,110,131,251,153,196,167,45,137,72,244,45,109,229,213,31,167,30,39,23,45,174,105,9,83,178,165,57,134,49,75,18,115,164,250,213,61,230,128,0,31,34,53,135,176,40,174,48,167,194,88,33,187,250,179,193,37,20,11,175,104,123,73,109,80,132,174,238,142,145,199,219,68,181,219,110,227,4,223,222,236,168,228,42,193,67,18,224,163,6,166,238,11,116,210,134,191,161,5,211,163,0,3,180,83,169,67,120,127,242,193,174,10,38,43,131,245,230,220,98,245,22,8,5,127,145,246,197,106,230,117,57,181,129,104,150,10,127,63,65,128,188,72,251,2,53,164,7,58,71,82,158,235,38,144,93,85,43,208,243,219,183,45,59,168,122,41,80,29,60,218,131,108,58,189,7,0,67,168,51,177,103,227,134,115,232,219,10,58,51,116,3,70,173,69,93,225,83,21,213,74,181,9,42,162,170,97,109,229,115,72,218,158,118,74,177,71,237,42,122,136,161,189,186,99,12,226,168,216,101,120,47,13,87,205,253,82,20,82,25,71,158,15,84,143,128,182,171,235,97,17,18,213,134,94,198,254,26,123,144,42,125,117,33,160,188,217,211,179,182,174,235,235,90,179,186,46,209,68,196,243,148,184,98,106,14,41,82,23,9,150,88,28,71,32,245,68,92,67,25,1,217,28,74,2,134,188,173,103,180,36,225,20,111,41,39,193,252,251,253,221,205,91,90,245,91,15,101,75,194,169,44,234,28,29,95,120,171,236,19,229,18,234,147,153,164,53,199,245,29,249,108,226,174,175,15,171,236,122,181,79,243,104,130,240,95,39,218,136,167,234,199,121,208,242,131,194,168,152,24,152,222,169,196,167,217,221,188,128,176,194,205,186,97,51,234,108,157,70,136,254,53,86,19,113,75,108,119,165,241,22,135,239,237,174,173,65,3,38,251,246,88,75,188,29,235,118,79,187,61,170,170,161,87,31,79,195,105,207,147,24,72,134,139,161,175,134,27,19,45,90,187,94,249,172,108,214,183,75,149,55,253,7,129,250,140,216,179,15,64,105,223,210,86,153,187,255,131,113,119,48,110,133,182,198,234,140,246,54,0,226,151,237,204,236,145,143,146,150,250,193,90,201,252,68,184,252,77,86,229,67,125,95,98,10,49,251,69,58,178,174,221,90,106,234,87,118,67,216,66,46,97,184,216,251,168,247,139,1,158,54,51,35,118,122,50,220,139,48,64,167,158,102,97,181,182,220,119,165,157,37,115,112,222,109,126,60,226,163,210,108,78,163,67,27,255,250,237,117,174,254,245,177,227,189,252,168,243,210,31,61,245,47,137,158,101,220,59,63,202,151,152,129,199,41,211,87,182,124,212,115,253,149,219,167,255,238,219,191,57,89,169,57,22,49,48,198,121,98,148,76,46,148,88,48,255,170,183,10,37,85,118,118,172,161,52,210,119,59,198,200,43,1,7,171,80,168,255,62,128,38,106,66,114,1,12,141,237,191,21,254,144,146,51,50,206,220,252,13,83,35,0,28,176,26,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreatePushTitleTemplateLocalizableString());
			LocalizableStrings.Add(CreateNewMessageNotificationTemplateLocalizableString());
			LocalizableStrings.Add(CreateNewStatusNotificationTemplateLocalizableString());
		}

		protected virtual SchemaLocalizableString CreatePushTitleTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("99fc7669-8aa8-1c59-89a4-91c13ef3b4a3"),
				Name = "PushTitleTemplate",
				CreatedInPackageId = new Guid("ff020f92-eb95-49ea-a251-6a0ed7e274a5"),
				CreatedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0"),
				ModifiedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateNewMessageNotificationTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("0b72463e-bd2a-a97b-c756-55954f1696ec"),
				Name = "NewMessageNotificationTemplate",
				CreatedInPackageId = new Guid("ff020f92-eb95-49ea-a251-6a0ed7e274a5"),
				CreatedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0"),
				ModifiedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateNewStatusNotificationTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("bcbe6491-6f66-d1c7-3490-8d53b9663ddb"),
				Name = "NewStatusNotificationTemplate",
				CreatedInPackageId = new Guid("ff020f92-eb95-49ea-a251-6a0ed7e274a5"),
				CreatedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0"),
				ModifiedInSchemaUId = new Guid("4e903d4e-ddc8-400a-8835-1289325835e0")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4e903d4e-ddc8-400a-8835-1289325835e0"));
		}

		#endregion

	}

	#endregion

}
