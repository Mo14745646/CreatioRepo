﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TouchPointFormSubmitEventListenerSchema

	/// <exclude/>
	public class TouchPointFormSubmitEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TouchPointFormSubmitEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TouchPointFormSubmitEventListenerSchema(TouchPointFormSubmitEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("86d3061f-5deb-43a8-953f-ce0fe02bcdf8");
			Name = "TouchPointFormSubmitEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("30345b58-64fe-4a14-8a92-ab92ab1240c1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,87,93,111,219,58,12,125,238,128,253,7,205,3,6,27,8,156,247,52,201,176,102,253,8,208,109,65,147,238,62,20,197,133,98,51,137,6,91,54,36,57,67,176,245,191,143,150,228,196,114,226,124,188,180,149,204,115,72,30,81,164,202,105,10,50,167,17,144,25,8,65,101,182,80,225,40,227,11,182,44,4,85,44,227,239,223,253,121,255,238,170,144,140,47,201,116,35,21,164,215,141,53,218,39,9,68,165,177,12,239,129,131,96,209,206,166,78,43,160,109,63,188,229,138,41,6,242,164,65,120,187,6,174,218,237,238,104,164,50,97,152,208,230,163,128,37,6,70,70,9,149,178,71,102,89,17,173,38,25,227,234,46,19,233,180,152,167,76,105,194,71,134,169,96,232,26,212,237,118,73,95,22,105,74,197,102,104,215,149,1,89,100,2,63,2,144,72,192,98,224,237,120,188,238,144,64,25,229,134,128,142,49,172,168,186,13,174,18,78,19,153,89,138,27,42,65,167,183,113,66,65,62,180,127,57,240,197,159,70,43,72,233,119,60,59,50,32,245,16,130,87,132,228,197,60,97,17,137,202,148,79,103,76,122,164,37,0,164,250,163,245,216,170,248,13,212,42,139,81,199,137,96,107,170,192,124,205,205,130,72,37,202,3,185,7,245,4,11,60,21,12,244,214,234,161,127,5,164,44,165,171,171,8,11,69,85,214,194,154,98,17,21,41,175,82,170,8,188,107,141,104,216,162,133,97,12,199,210,224,126,210,164,128,199,140,198,16,251,251,140,129,38,185,250,92,161,48,194,217,38,135,184,134,237,27,23,195,118,116,207,70,28,222,166,185,218,152,184,4,168,66,240,109,92,122,243,173,77,148,71,202,99,252,115,66,151,240,44,146,51,164,73,28,128,43,80,157,236,233,209,149,201,197,29,23,171,205,199,37,146,157,224,56,34,156,139,60,36,159,63,214,5,60,205,10,17,65,135,212,87,19,145,229,50,208,202,2,141,205,222,3,36,57,150,221,179,44,15,144,115,211,149,72,225,44,43,173,215,84,16,181,163,67,157,116,147,48,13,68,103,220,175,187,27,250,38,29,14,191,201,168,60,38,81,148,134,95,196,178,72,81,36,223,115,189,120,157,166,91,13,15,174,15,249,214,169,96,0,245,112,152,220,207,150,124,118,5,49,18,212,81,61,18,195,130,22,137,114,116,246,85,93,196,166,227,224,144,240,235,140,197,100,10,170,118,224,110,201,118,170,50,141,182,7,190,221,90,151,230,149,206,108,65,124,91,1,99,249,189,72,146,31,226,191,21,83,48,45,199,142,111,76,141,180,127,255,146,15,13,75,93,51,254,174,8,235,225,236,28,7,225,44,155,106,160,31,4,149,95,155,188,17,226,77,255,180,60,211,54,158,142,141,252,184,32,105,94,40,231,38,156,33,204,125,129,232,200,66,53,168,99,130,156,103,89,82,86,202,87,115,108,187,82,254,217,212,208,65,147,193,64,115,154,75,117,36,229,178,210,214,6,113,172,15,68,23,221,252,210,243,112,31,211,171,133,116,189,141,187,53,57,242,233,147,13,237,195,153,201,156,62,63,71,36,231,28,63,2,143,205,24,107,155,105,122,108,154,143,205,23,128,222,120,192,110,149,128,60,57,253,107,223,127,240,49,199,46,160,176,28,180,65,57,94,195,173,131,110,211,67,63,167,130,166,132,99,42,3,79,98,192,56,1,135,122,38,19,179,10,251,93,109,114,24,1,222,112,182,130,186,255,214,71,148,142,244,6,240,49,3,154,31,219,152,244,8,134,200,176,179,81,142,157,4,71,145,162,140,151,133,172,86,80,249,211,25,144,152,42,234,132,98,159,28,217,26,253,177,216,94,150,90,242,126,54,255,133,109,208,102,209,33,7,253,147,109,185,207,241,65,18,214,225,21,14,106,253,211,170,61,32,246,250,5,198,104,103,224,246,223,93,253,187,211,193,216,59,109,149,168,163,51,103,191,129,146,68,174,144,255,208,40,106,12,1,227,13,205,195,26,73,104,123,202,55,136,89,145,126,225,150,193,47,71,205,87,166,129,88,37,118,222,86,237,101,88,93,147,23,111,158,167,248,96,242,94,77,8,219,199,151,125,90,116,106,102,15,98,103,215,120,143,56,214,111,54,208,227,221,9,121,220,244,202,102,49,150,119,64,241,226,226,139,146,206,19,108,45,222,115,27,222,179,94,90,186,106,213,78,189,209,138,162,135,100,28,227,80,109,72,167,245,15,159,64,90,118,35,225,56,238,28,233,169,231,57,53,136,115,124,86,150,103,250,60,224,235,89,165,38,112,28,98,251,254,194,27,115,112,147,242,186,129,2,33,95,188,66,165,255,167,26,226,189,158,38,55,60,23,145,75,253,245,28,242,17,77,115,202,150,252,34,250,200,130,206,113,128,77,236,50,97,240,175,179,100,193,194,197,127,116,212,101,129,27,76,69,127,120,184,152,93,119,19,247,254,1,124,145,97,200,109,15,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("86d3061f-5deb-43a8-953f-ce0fe02bcdf8"));
		}

		#endregion

	}

	#endregion

}
