﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseRatingManagementServiceSchema

	/// <exclude/>
	public class CaseRatingManagementServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseRatingManagementServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseRatingManagementServiceSchema(CaseRatingManagementServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f");
			Name = "CaseRatingManagementService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1c03a3fe-87f3-466f-a6b7-a88ed4e512f8");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,27,107,115,219,198,241,51,51,211,255,112,65,59,14,56,145,64,63,146,212,149,68,186,122,198,106,109,89,149,232,106,58,178,167,5,129,163,136,10,4,232,59,64,18,171,232,191,119,247,30,192,29,0,130,164,236,164,153,102,198,51,50,239,177,187,183,239,221,59,36,254,148,242,153,31,80,50,164,140,249,60,29,103,222,126,154,140,163,171,156,249,89,148,38,222,190,207,233,25,252,55,185,122,235,39,254,21,157,210,36,59,167,236,38,10,232,239,190,186,255,221,87,157,156,195,28,57,159,243,140,78,183,43,191,1,86,28,211,0,1,113,239,71,154,80,22,5,181,53,111,162,228,83,109,240,44,79,178,104,74,61,64,21,249,113,244,31,65,76,109,213,57,13,114,22,101,243,133,19,222,41,139,146,32,154,249,113,195,18,113,136,183,105,72,219,39,189,93,56,192,205,34,2,140,117,23,116,84,91,48,164,119,89,125,112,194,168,31,194,64,57,99,178,127,58,53,49,153,51,140,46,26,247,14,246,22,78,29,2,43,179,136,242,166,5,64,115,11,70,156,125,157,101,51,111,119,196,51,230,75,65,194,66,88,250,123,70,175,224,23,217,143,125,206,183,200,57,240,135,143,229,138,55,244,134,198,103,160,87,176,152,138,197,189,94,143,236,240,124,58,245,217,124,160,126,159,209,25,163,28,180,137,19,166,214,146,113,202,8,55,32,145,24,65,145,56,77,175,243,25,249,148,83,54,247,52,184,158,1,239,242,192,207,124,208,91,65,227,71,24,152,229,163,56,10,72,128,196,45,166,141,108,17,75,217,149,52,75,210,59,247,130,252,226,176,167,44,157,81,134,188,220,34,167,2,133,156,175,158,79,12,148,186,79,210,113,195,177,184,87,108,53,207,34,15,243,150,78,71,148,185,39,96,159,164,79,28,94,61,2,119,186,120,78,125,208,55,17,207,118,90,76,213,171,241,128,35,187,252,8,76,114,80,103,16,39,104,217,157,206,21,205,182,9,167,66,131,59,15,138,23,52,9,37,59,224,151,28,51,135,80,26,10,169,41,144,203,93,62,59,161,25,168,218,12,144,141,162,24,140,243,140,126,202,35,38,200,228,174,249,3,205,9,78,189,100,11,174,242,212,64,216,173,73,189,133,27,32,247,61,152,45,220,88,231,222,20,242,74,26,189,68,195,74,238,226,90,201,204,101,74,84,215,34,49,130,42,224,149,243,150,170,104,42,192,56,209,112,133,182,72,100,182,232,180,236,22,160,56,158,2,127,150,225,248,49,143,66,185,242,81,40,194,213,224,135,157,71,0,63,77,163,36,91,145,71,98,109,251,9,44,13,111,82,123,75,91,64,37,50,31,212,17,132,201,48,76,208,22,151,32,145,7,105,156,79,19,146,104,193,214,105,158,73,72,176,18,128,91,148,239,139,189,218,45,136,33,103,123,225,22,244,236,180,186,73,13,182,108,59,78,50,202,166,52,140,96,6,162,243,53,238,186,127,250,208,51,163,93,175,205,219,240,155,160,103,2,17,225,24,87,83,220,213,187,127,246,208,187,127,254,208,66,193,17,165,225,200,15,174,79,1,240,121,48,161,83,191,160,190,64,107,174,89,1,212,69,148,77,142,113,102,85,152,197,134,21,233,124,207,98,0,246,103,167,119,146,71,61,61,225,249,124,118,247,234,102,218,215,3,192,188,60,166,79,178,244,154,38,125,96,234,19,94,144,210,7,190,172,123,144,47,130,244,9,132,63,248,143,148,72,187,186,31,69,52,14,171,186,174,201,85,132,254,147,83,206,97,241,113,8,164,161,89,123,39,244,22,255,186,93,111,152,158,139,69,174,115,226,116,183,27,55,207,249,123,78,25,210,182,189,208,144,0,52,196,212,108,66,73,4,9,21,25,179,116,74,2,8,155,113,122,69,222,2,118,224,204,73,154,69,227,136,178,37,38,38,220,78,101,139,32,60,161,183,98,210,117,14,15,190,127,250,236,240,96,111,243,229,225,222,209,230,119,251,127,252,97,115,247,197,247,7,155,63,28,61,127,177,119,248,252,187,23,79,191,123,33,14,179,212,79,176,60,200,82,182,82,242,0,25,98,70,57,129,236,21,188,11,132,44,56,238,14,167,160,18,140,142,251,78,139,241,57,3,146,205,103,11,61,139,116,134,45,251,221,174,242,142,40,5,160,58,81,57,12,196,227,217,172,252,253,202,147,201,172,189,74,58,82,83,134,171,237,243,246,115,198,128,6,28,245,10,209,119,116,26,63,68,197,125,159,97,10,0,97,83,9,167,121,210,181,1,119,205,212,229,23,229,180,24,153,249,204,159,10,79,223,119,114,139,48,103,80,225,192,78,79,44,94,85,74,21,233,216,192,23,138,48,95,46,173,124,5,193,44,137,137,86,134,99,57,10,121,174,81,154,198,228,152,159,209,156,251,163,152,150,201,166,142,203,140,102,57,75,8,216,11,45,66,243,122,88,151,217,215,177,136,218,82,218,232,70,12,137,55,235,149,211,27,200,100,175,213,174,22,40,236,130,97,35,201,22,255,107,201,180,205,131,190,165,217,36,173,57,225,102,229,158,208,224,154,147,16,92,35,4,19,6,50,77,192,213,173,170,177,156,98,1,195,157,129,169,155,98,149,20,16,135,9,253,63,211,167,42,249,202,162,140,33,86,87,20,40,231,2,222,128,40,184,90,75,111,124,70,34,115,53,104,97,41,122,156,149,27,32,1,207,227,76,199,148,195,233,76,22,254,114,9,20,147,55,11,23,64,93,73,253,96,66,220,18,24,216,123,149,142,78,5,141,252,233,29,222,129,244,32,135,9,252,216,103,59,8,122,224,74,183,210,233,84,201,182,32,124,221,55,169,122,242,196,62,164,130,96,209,109,110,55,20,95,219,67,125,127,155,99,59,167,80,90,67,64,76,73,36,178,246,44,45,11,237,209,156,112,225,134,49,251,69,7,179,170,74,104,8,206,224,245,112,120,74,116,77,228,213,52,196,220,36,240,163,243,112,6,111,144,30,27,53,40,102,104,3,208,122,116,147,66,108,134,99,104,44,184,217,197,126,68,81,192,107,114,54,116,250,80,160,210,66,53,182,99,47,198,173,238,240,142,82,54,245,51,215,217,9,40,102,172,131,157,216,31,209,152,68,97,255,131,115,230,71,72,33,226,253,224,192,134,121,76,97,20,51,170,43,150,230,73,184,69,114,22,187,89,209,47,241,239,194,87,188,239,144,111,165,108,157,36,143,54,71,81,2,220,220,132,51,171,243,62,97,152,130,117,183,201,109,20,102,147,45,242,236,249,203,167,179,187,237,9,141,174,38,217,22,249,211,83,252,69,194,136,207,98,127,190,5,122,26,67,29,185,57,138,211,224,122,251,3,218,162,32,16,254,42,130,157,13,227,212,203,227,29,48,164,212,131,12,88,66,166,50,251,1,76,160,34,147,108,26,175,175,11,134,76,90,53,1,241,57,131,179,38,244,171,40,128,144,96,187,2,32,72,211,177,72,105,246,107,210,126,61,124,251,102,176,179,247,238,224,31,3,144,198,78,79,252,111,167,39,134,157,13,41,63,1,107,91,89,160,82,244,11,240,227,212,21,80,215,228,245,12,14,249,243,113,54,128,92,225,56,116,6,152,51,128,242,174,194,77,172,31,22,113,83,164,197,18,166,230,166,98,176,94,35,43,143,11,58,42,226,153,247,35,205,176,175,2,249,30,196,66,209,81,131,69,2,3,182,67,128,153,58,155,16,109,27,202,53,115,21,100,190,114,161,39,36,59,86,195,128,67,74,245,75,85,95,29,243,136,223,86,85,167,134,118,67,241,105,195,56,64,119,187,234,124,4,179,75,254,26,40,44,53,122,140,172,234,130,209,34,43,180,246,53,245,67,202,248,165,35,4,145,100,155,67,72,92,157,143,200,103,148,75,15,173,126,155,4,19,159,129,147,234,231,217,120,243,165,193,105,156,221,203,163,24,64,232,220,91,160,84,99,238,247,207,158,119,165,197,120,32,123,200,90,192,190,112,207,192,81,195,198,248,40,13,231,229,184,49,193,3,22,205,50,99,170,156,115,199,121,34,51,88,44,78,192,111,38,97,122,235,129,67,148,87,20,19,76,219,62,56,224,118,45,229,252,150,56,224,180,31,92,240,137,77,248,122,85,132,198,148,69,164,49,174,14,213,232,18,12,38,149,85,110,183,85,184,102,139,196,18,180,246,101,168,166,165,124,133,49,104,209,26,86,133,109,2,241,183,79,140,209,221,32,0,199,154,50,180,74,157,237,186,11,244,82,1,240,206,74,251,175,82,167,217,234,42,162,20,53,141,231,83,4,47,134,177,194,249,84,202,99,219,94,181,49,181,241,185,254,71,59,122,235,76,43,150,140,255,146,61,102,221,60,32,175,33,197,77,217,28,116,16,50,237,112,69,79,175,130,159,51,120,91,143,130,237,62,254,120,177,143,151,244,225,42,5,85,145,118,38,40,211,220,87,168,27,125,125,52,38,149,10,83,222,34,205,101,227,76,150,163,204,59,2,75,60,134,84,110,111,142,78,207,117,234,40,157,46,166,193,73,30,23,62,169,99,2,82,46,19,52,119,5,108,134,34,183,33,220,54,209,136,115,217,43,212,68,95,225,246,36,183,228,104,245,208,86,235,162,177,115,161,209,45,194,227,129,173,29,208,177,108,193,254,221,143,65,237,220,85,246,24,27,228,49,65,240,58,210,172,189,191,214,223,2,80,181,177,181,161,190,246,249,110,150,65,93,37,218,201,27,100,236,199,156,62,150,54,216,175,20,114,57,4,255,166,240,100,15,191,160,173,182,152,95,125,109,209,114,119,6,34,163,73,199,36,159,65,29,78,67,213,255,95,97,187,224,144,51,16,127,218,1,52,152,191,121,39,245,94,108,84,230,111,152,123,225,123,75,114,55,72,58,250,55,22,179,6,9,86,161,14,46,156,101,42,13,56,22,63,170,45,55,21,54,193,89,167,174,83,39,163,12,184,160,10,160,219,130,218,240,93,2,26,32,21,195,59,197,115,81,112,245,46,212,187,116,136,239,0,222,103,193,73,122,219,181,183,66,54,135,186,251,168,189,133,73,225,57,254,134,55,203,229,78,101,101,214,6,147,67,77,91,12,110,117,137,207,21,107,164,146,74,158,233,70,130,219,24,51,15,34,193,34,80,190,29,41,19,45,155,1,57,197,172,76,180,142,176,252,119,71,243,140,94,126,20,61,29,59,88,106,191,7,245,52,198,204,247,195,163,151,232,51,85,42,34,214,23,39,130,8,153,185,223,60,249,198,56,35,182,30,220,59,210,31,144,59,61,223,255,166,219,245,118,249,97,146,79,41,195,86,157,91,172,31,166,37,197,238,53,157,227,62,248,115,249,244,227,6,185,17,10,11,3,226,63,151,207,62,46,206,130,118,195,176,118,121,186,155,132,234,142,74,135,170,138,182,202,56,109,40,175,88,108,106,169,220,0,131,186,25,36,120,232,90,238,19,99,220,215,42,191,56,230,39,16,162,222,49,209,51,114,117,110,163,35,214,18,131,42,144,109,84,239,232,236,148,66,3,90,24,152,207,173,100,7,181,236,13,228,184,248,250,5,88,175,196,88,9,80,23,41,187,22,15,120,48,119,75,115,22,192,186,148,97,88,87,130,106,109,96,111,16,167,134,129,215,223,10,40,98,61,233,143,186,197,169,54,74,62,155,238,184,133,179,90,84,143,96,109,237,46,115,163,16,252,106,220,253,85,240,83,157,162,198,209,70,70,22,6,147,102,64,30,56,126,51,43,18,14,8,115,108,5,62,11,180,184,14,249,39,215,52,6,202,63,41,127,93,219,191,66,146,7,103,170,41,132,78,178,0,50,190,176,194,144,41,192,41,31,124,204,119,227,91,127,206,165,79,177,186,185,184,3,108,94,46,116,29,241,158,192,132,102,204,137,224,217,60,37,239,189,141,185,163,40,6,47,204,113,141,139,191,165,42,200,81,188,47,45,28,53,119,229,160,120,85,194,34,158,38,88,9,123,135,159,114,63,86,34,118,128,124,124,241,133,226,124,214,45,138,61,81,142,0,236,38,87,38,187,219,109,79,108,74,57,149,243,229,3,33,75,92,76,180,127,141,215,67,82,118,75,113,232,148,72,244,184,171,235,14,133,14,44,212,150,166,54,121,21,132,232,152,55,192,197,24,35,245,198,56,80,37,37,232,150,55,59,246,225,132,196,68,71,97,241,201,244,222,142,106,13,213,136,64,10,80,140,161,145,88,170,40,58,208,122,164,237,87,220,237,174,6,65,182,250,29,200,18,202,221,162,147,190,46,0,220,100,66,145,207,64,214,62,136,210,122,5,229,193,114,185,74,63,171,236,93,239,58,105,217,165,217,112,66,201,196,79,194,24,100,162,238,205,130,56,194,40,203,163,171,196,143,9,197,128,47,10,111,114,11,86,71,184,120,247,33,235,252,85,111,24,196,98,103,160,175,204,212,230,214,108,89,134,35,149,152,203,31,214,134,203,119,51,42,95,248,153,79,210,58,151,23,116,4,12,119,223,179,104,72,167,179,24,45,185,79,156,234,99,21,65,192,67,239,94,2,126,176,31,222,137,36,70,228,102,167,44,197,134,139,234,44,172,210,226,104,235,0,85,58,18,157,206,178,58,231,183,33,155,182,71,69,203,229,100,238,222,247,227,120,125,145,97,102,211,124,153,235,13,217,28,173,183,72,211,21,152,52,207,136,202,216,51,61,87,186,67,116,180,98,184,12,80,112,204,74,194,95,238,219,46,119,201,132,1,99,171,189,253,82,87,54,31,213,226,202,33,117,42,109,37,166,15,4,252,109,241,174,47,155,176,244,214,122,98,113,120,23,208,153,240,235,127,112,108,225,75,93,194,252,95,241,159,220,66,241,147,164,25,25,227,5,153,231,172,90,167,175,161,191,171,106,107,84,94,135,0,28,249,24,232,23,212,213,82,51,163,176,85,45,155,213,48,170,214,59,95,164,243,139,10,92,201,204,47,38,17,24,19,230,188,110,20,118,201,79,63,145,197,11,170,149,81,169,42,187,236,42,199,204,214,200,246,75,173,209,156,181,66,150,120,37,16,241,35,200,212,192,142,15,19,76,153,197,139,177,56,29,249,241,238,108,118,46,239,75,185,7,201,196,254,249,238,80,102,221,42,215,182,110,142,100,43,62,208,121,191,240,20,24,116,135,160,81,215,28,234,41,117,145,171,238,52,140,14,136,249,208,43,42,42,67,208,186,153,138,209,192,211,27,44,222,135,41,120,143,23,207,93,203,110,212,17,22,61,93,80,212,213,74,2,157,209,253,175,139,145,166,226,206,162,124,90,240,211,46,77,107,112,43,254,68,56,168,52,9,35,196,162,16,232,103,91,13,141,14,243,113,72,145,198,202,143,36,116,199,190,248,142,67,65,41,190,81,40,38,68,22,169,190,49,17,149,20,182,115,205,183,77,93,217,184,145,72,69,159,162,124,168,104,166,206,130,142,195,59,160,137,11,71,208,151,204,150,254,80,52,73,42,201,45,232,198,204,125,86,116,70,138,218,38,44,110,144,142,88,58,149,45,167,98,232,98,66,25,149,139,192,208,68,253,225,214,90,88,186,17,133,13,37,137,187,153,78,153,159,127,49,66,27,234,61,139,234,74,151,163,229,0,194,138,234,244,215,116,67,148,1,210,102,149,169,158,164,217,17,70,16,213,161,51,85,68,92,2,214,143,175,19,226,54,224,40,130,117,32,11,5,208,128,51,168,183,149,223,43,42,165,162,5,101,227,196,90,169,78,199,95,233,188,124,108,212,105,122,18,5,218,93,219,118,89,29,209,145,189,246,250,200,126,114,165,95,55,21,171,177,43,99,109,41,105,233,212,61,104,21,171,6,211,25,193,209,175,245,175,7,85,140,200,63,136,98,1,134,149,26,61,13,13,52,169,65,219,22,148,133,45,158,226,74,203,190,39,177,168,179,227,77,73,224,242,59,209,10,80,43,103,234,84,159,41,213,183,87,88,108,19,247,128,207,151,81,161,138,160,73,232,93,65,92,245,9,76,29,56,189,243,108,184,75,19,46,48,138,226,9,133,238,164,225,27,49,100,238,154,245,192,95,120,154,108,142,69,104,192,46,149,178,9,204,226,150,215,7,10,115,11,16,181,162,14,70,63,61,212,95,245,20,23,242,246,171,196,150,172,237,56,185,1,10,93,89,1,139,15,42,222,157,15,193,47,168,84,172,120,86,2,75,21,119,229,144,135,196,110,144,189,52,156,159,227,163,48,107,73,49,234,93,48,127,6,197,188,140,214,90,86,237,64,173,236,176,237,227,52,34,218,97,86,151,220,46,92,26,186,226,197,83,36,25,67,219,192,187,117,159,103,85,29,70,83,93,160,213,218,92,75,28,126,21,137,78,115,215,213,106,27,47,245,76,197,119,51,235,246,157,155,157,82,147,193,155,93,50,169,201,229,100,159,152,79,161,141,126,143,88,184,244,201,2,148,2,77,95,86,138,135,193,226,235,9,249,141,101,155,225,47,50,55,213,78,168,3,15,202,46,223,255,139,69,46,254,148,180,169,193,235,86,30,179,52,246,57,11,8,247,77,223,97,246,27,1,91,157,227,135,165,194,255,172,222,16,129,141,98,20,59,25,170,40,254,98,237,162,245,42,234,67,158,69,211,5,253,158,126,72,199,126,30,103,77,5,182,185,111,141,102,207,103,21,218,63,223,107,201,202,235,196,138,43,69,82,42,57,142,235,192,154,119,113,104,189,163,236,146,87,166,199,214,149,93,229,131,182,13,205,160,230,15,242,186,100,139,180,65,169,126,170,86,3,183,224,163,188,74,57,185,60,53,91,244,156,114,105,226,35,241,8,29,215,57,144,252,8,254,113,153,144,104,218,137,207,216,3,209,67,18,17,96,197,4,104,191,204,193,112,243,106,173,42,25,19,11,171,110,220,247,155,207,147,234,142,185,45,99,90,224,13,62,63,129,250,210,205,227,71,118,143,215,107,31,119,150,188,208,176,251,201,181,220,168,82,37,253,28,173,229,150,10,234,203,36,84,149,139,51,24,133,127,255,5,44,98,208,235,58,69,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateSatisfactionLevelMessageLocalizableString());
			LocalizableStrings.Add(CreateSatisfactionCommentMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateSatisfactionLevelMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("ab3c17d7-33c5-4de2-a399-e7879744f3df"),
				Name = "SatisfactionLevelMessage",
				CreatedInPackageId = new Guid("c3c90037-274c-4793-841e-197eb228d3cd"),
				CreatedInSchemaUId = new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f"),
				ModifiedInSchemaUId = new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateSatisfactionCommentMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("04116657-8ba6-48bc-a1c9-4c90fcf7410b"),
				Name = "SatisfactionCommentMessage",
				CreatedInPackageId = new Guid("c3c90037-274c-4793-841e-197eb228d3cd"),
				CreatedInSchemaUId = new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f"),
				ModifiedInSchemaUId = new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("07cd0230-240d-4c09-8dec-f39bc3e6322f"));
		}

		#endregion

	}

	#endregion

}
