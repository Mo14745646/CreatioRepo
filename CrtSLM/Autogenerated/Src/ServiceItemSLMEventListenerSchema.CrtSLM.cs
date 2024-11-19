﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ServiceItemSLMEventListenerSchema

	/// <exclude/>
	public class ServiceItemSLMEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ServiceItemSLMEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ServiceItemSLMEventListenerSchema(ServiceItemSLMEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6f4a86e6-89a4-4be9-99e8-b7e76329f260");
			Name = "ServiceItemSLMEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("be767c31-8cfd-4151-91a1-7a7389e4167f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,84,81,107,219,48,16,126,78,32,255,65,184,47,54,45,102,207,233,82,104,210,52,20,146,173,171,211,237,161,244,65,177,47,142,134,45,37,146,236,17,70,255,251,78,82,156,218,38,206,24,140,13,2,65,119,223,125,223,119,119,178,72,161,24,79,73,180,87,26,242,235,65,191,126,12,39,34,203,32,214,76,112,21,206,128,131,100,113,27,114,71,53,109,199,230,140,239,142,177,37,72,73,149,88,107,100,203,115,193,79,38,36,116,132,195,187,113,87,102,202,53,211,12,212,239,242,225,180,4,174,59,97,247,52,214,66,58,158,65,159,211,28,212,150,198,208,128,241,53,75,11,73,205,32,6,253,159,6,215,187,144,144,226,145,76,50,170,212,144,68,32,75,22,195,3,182,31,205,23,86,113,206,112,24,56,51,11,127,177,110,246,141,132,31,197,27,200,233,39,148,36,35,226,213,40,188,224,21,107,182,197,42,99,49,137,141,194,57,1,50,36,99,170,224,132,2,146,160,219,30,254,142,126,23,160,55,34,65,199,143,150,221,154,171,148,68,137,61,179,4,72,41,88,66,62,243,136,150,56,48,95,172,190,227,37,32,10,120,2,242,138,56,157,49,172,113,122,86,237,86,166,138,64,64,140,84,175,183,66,43,225,177,182,42,130,224,218,102,93,49,1,247,55,34,190,11,4,14,231,48,207,10,36,206,156,187,155,71,138,230,113,116,40,14,155,48,87,90,82,73,64,237,16,196,225,199,193,169,155,242,151,2,228,222,111,114,133,117,192,130,114,154,26,171,222,146,229,240,204,153,246,14,158,145,48,188,77,18,252,24,138,156,251,158,217,87,61,117,207,50,13,82,25,136,111,206,19,9,84,131,139,126,99,122,243,72,37,86,24,136,239,130,248,29,108,169,100,74,240,229,126,139,247,116,87,208,12,101,31,18,239,170,234,109,6,218,228,14,154,95,105,86,192,199,89,193,146,27,223,123,2,106,205,87,46,177,44,8,130,90,251,150,225,253,203,53,3,67,87,200,56,109,101,90,211,168,90,114,14,34,208,53,241,166,236,209,231,59,215,203,135,215,147,166,149,150,120,13,110,170,169,145,75,111,72,188,203,115,109,50,174,91,93,218,184,23,132,75,17,89,54,63,56,49,253,73,6,84,250,181,196,19,40,208,17,24,127,110,247,255,111,101,17,134,186,86,246,119,214,245,199,139,56,187,235,186,223,127,176,235,186,92,215,174,223,220,67,117,129,207,132,123,200,236,217,69,155,193,183,95,231,254,58,253,210,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6f4a86e6-89a4-4be9-99e8-b7e76329f260"));
		}

		#endregion

	}

	#endregion

}
