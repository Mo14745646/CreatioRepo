﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IncidentRegistrationFromEmaillHelperSchema

	/// <exclude/>
	public class IncidentRegistrationFromEmaillHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IncidentRegistrationFromEmaillHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IncidentRegistrationFromEmaillHelperSchema(IncidentRegistrationFromEmaillHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b71b5962-3320-40fb-83d2-34b80b685827");
			Name = "IncidentRegistrationFromEmaillHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3148fb3e-f2dd-48f6-9b89-0b40779627d9");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,61,107,115,219,72,114,159,117,85,247,31,198,184,212,22,100,211,148,119,147,75,82,182,68,159,68,203,187,188,248,21,83,142,63,72,218,45,144,28,81,88,131,0,23,0,101,51,107,253,151,252,150,252,178,116,207,11,61,131,193,131,178,125,201,85,197,31,44,18,232,233,233,153,233,247,244,12,211,104,197,139,117,52,231,236,140,231,121,84,100,87,229,112,156,165,87,241,114,147,71,101,156,165,127,252,195,239,127,252,195,222,166,136,211,37,155,110,139,146,175,158,56,223,1,62,73,248,28,129,139,225,143,60,229,121,60,175,193,60,139,202,168,254,48,142,150,105,86,148,241,188,168,189,251,49,201,102,81,18,255,167,32,162,246,246,69,156,254,86,123,120,198,63,149,222,135,195,183,124,185,73,162,252,244,211,58,231,69,129,132,86,112,227,108,181,162,61,140,179,156,219,223,134,207,78,156,7,167,105,25,151,49,47,156,199,207,163,121,153,229,214,243,134,89,29,142,163,130,79,121,126,19,207,73,103,63,149,229,250,93,25,39,113,185,101,71,122,0,239,249,108,72,94,184,3,156,242,178,132,111,5,52,16,52,216,221,0,140,6,168,26,46,197,212,62,126,44,71,62,124,145,45,151,240,24,222,3,196,159,114,190,132,134,108,156,68,69,241,152,77,210,121,188,224,105,9,19,24,23,165,68,250,60,207,86,167,171,40,78,126,226,201,154,231,162,217,193,193,1,59,44,54,171,85,148,111,71,234,187,110,203,114,210,152,93,101,57,139,211,121,182,66,74,248,67,196,195,128,5,139,104,201,139,161,198,116,64,80,173,55,179,36,158,179,57,18,212,135,30,246,152,121,223,2,42,228,100,119,132,111,242,248,38,42,185,24,197,222,90,126,81,157,189,137,114,96,205,120,29,165,229,36,189,202,222,228,217,13,116,158,35,160,192,100,192,29,64,246,203,218,126,32,167,182,130,207,121,180,200,210,100,203,222,21,60,135,5,75,165,244,176,95,54,214,119,211,76,206,64,3,57,161,131,196,198,177,207,36,169,123,14,110,96,151,90,103,0,117,219,218,37,251,145,151,225,143,155,120,193,128,209,227,27,224,198,201,194,116,16,95,177,208,29,56,59,58,98,233,38,73,12,208,94,29,2,145,2,25,37,160,156,44,112,181,72,167,33,233,71,207,6,210,136,127,114,94,110,242,212,55,215,116,28,13,43,212,214,103,211,0,197,243,185,110,133,132,195,131,225,233,106,45,133,82,67,68,243,121,182,73,27,32,166,28,53,37,43,196,159,127,223,240,28,4,93,205,204,94,202,63,50,249,62,116,22,107,31,85,236,102,149,134,193,60,24,176,96,178,8,246,117,163,61,251,213,177,238,156,66,224,0,67,120,37,71,68,134,250,54,75,56,5,60,46,194,32,90,231,244,209,4,104,200,255,154,197,169,23,65,189,49,125,242,58,149,232,106,36,79,138,211,223,54,81,34,224,225,37,146,225,0,212,123,173,117,85,239,73,78,128,94,55,127,135,30,98,170,190,20,75,184,93,205,253,93,81,158,242,247,230,89,173,247,215,60,231,102,90,198,217,130,251,90,202,53,69,93,94,148,97,128,235,23,236,83,162,210,133,127,40,190,230,132,147,247,89,84,40,22,83,252,40,13,66,248,236,228,244,19,159,111,192,120,177,197,12,63,2,239,58,60,8,54,175,216,228,252,217,73,245,40,220,175,228,90,33,154,160,157,127,11,234,13,244,112,46,255,28,81,110,31,202,126,184,4,9,101,103,4,205,222,199,235,56,225,44,148,109,135,8,70,123,217,219,163,242,167,128,132,44,227,128,255,35,74,54,252,16,101,110,20,138,153,121,98,154,81,161,108,109,70,4,200,180,86,10,71,255,181,245,15,74,173,163,93,66,67,228,160,210,6,251,70,49,25,237,228,26,77,241,224,45,71,31,5,205,102,12,168,242,85,101,53,231,224,50,104,124,48,136,4,244,218,130,125,140,203,107,173,148,12,78,106,62,219,109,90,101,203,180,89,4,179,2,70,20,157,27,176,141,194,10,40,85,90,163,86,60,81,34,195,132,85,142,175,98,105,30,61,100,104,147,34,116,164,209,189,122,101,151,92,115,164,38,183,208,79,110,91,251,87,235,69,250,175,230,138,43,47,173,15,69,102,221,119,160,232,79,60,93,200,89,211,15,180,107,129,130,151,111,208,25,236,55,139,147,20,8,69,111,151,11,126,138,161,121,148,130,79,158,93,1,48,135,181,203,249,213,81,224,172,93,112,48,106,26,153,120,4,134,49,90,177,20,28,252,163,192,112,100,48,170,175,216,225,129,0,109,104,106,56,56,24,213,39,219,106,234,119,26,66,219,110,14,152,109,37,141,112,143,137,100,27,104,181,4,199,68,124,77,203,230,197,48,79,221,21,170,249,126,89,9,154,137,47,250,200,99,193,162,212,113,88,135,77,18,167,208,42,153,211,238,39,74,218,23,201,218,117,150,21,188,128,217,201,115,244,34,230,73,134,42,25,190,47,56,91,240,53,12,182,96,128,54,6,90,33,12,1,167,126,216,202,32,82,131,21,163,49,197,3,107,3,158,220,21,76,241,98,120,120,160,65,92,121,121,202,84,35,180,96,68,100,140,166,70,111,112,82,156,36,209,252,67,2,190,56,95,16,37,174,52,39,134,64,66,82,10,208,243,115,30,223,112,225,138,145,54,98,226,180,26,190,37,152,239,29,231,252,39,161,198,171,41,124,253,161,181,139,99,176,110,168,76,231,2,41,172,106,178,117,49,107,141,14,14,235,19,170,234,219,53,144,164,131,173,13,33,236,6,36,121,33,245,118,177,153,207,129,87,26,215,65,77,233,44,203,18,230,29,211,23,43,200,73,1,234,132,205,244,164,246,162,196,90,184,175,65,193,175,155,244,3,195,121,239,217,253,95,17,222,195,85,106,133,108,250,62,127,102,126,126,216,97,17,79,165,92,95,187,107,217,69,47,168,121,17,184,59,125,127,241,156,41,122,102,217,98,219,147,132,19,0,253,242,110,69,175,96,53,19,222,179,219,51,132,253,6,86,188,171,251,59,27,237,190,110,76,47,2,190,166,31,35,189,244,221,167,64,123,247,95,105,241,65,21,199,235,24,237,93,79,14,168,26,252,47,187,78,96,160,107,222,83,121,205,169,7,37,134,24,176,131,81,187,97,164,238,15,77,94,5,35,154,89,50,29,13,219,29,40,46,58,29,153,21,22,110,233,118,232,115,157,4,125,161,55,125,101,101,209,6,76,100,32,1,23,190,50,118,175,166,134,142,36,0,198,58,103,219,53,95,208,128,71,46,31,132,60,110,43,19,249,8,149,210,11,5,66,154,102,82,37,244,106,39,64,77,67,234,229,53,55,110,12,212,168,3,217,217,220,0,147,222,141,36,233,246,111,242,24,57,131,52,87,176,132,231,143,148,28,12,101,10,225,9,68,229,61,6,142,14,143,64,16,236,15,180,207,210,163,217,56,91,111,73,83,77,186,109,15,143,44,86,25,142,175,249,252,131,5,17,74,174,209,227,246,186,29,62,36,199,73,226,66,134,238,131,253,102,57,239,246,202,51,33,80,165,155,149,245,250,229,47,163,79,241,106,179,98,9,79,151,16,2,43,89,87,142,185,48,156,224,18,95,69,155,164,108,244,210,85,92,140,189,130,44,151,136,242,153,108,34,36,14,153,250,133,196,126,196,254,252,232,209,147,47,163,6,188,176,151,39,95,66,203,20,195,195,35,246,189,38,164,105,26,159,199,60,89,52,101,182,27,146,200,181,52,170,126,241,196,110,14,235,3,80,85,2,123,242,34,91,178,95,18,248,239,136,193,199,151,81,10,227,21,185,21,220,85,224,121,24,248,50,246,193,190,131,118,50,221,172,95,138,97,126,122,17,165,203,138,170,194,251,188,247,4,88,225,93,21,150,9,47,115,12,131,40,57,70,8,5,42,89,116,57,197,84,139,141,18,2,44,204,44,190,69,80,181,38,83,152,134,141,11,248,44,22,89,49,88,83,37,176,50,212,29,73,173,142,244,111,96,114,142,147,24,187,236,24,66,179,25,244,178,223,14,70,16,22,202,187,38,206,46,10,26,201,1,211,248,49,203,148,109,74,192,93,172,65,245,129,119,178,16,219,7,200,176,58,63,216,192,217,210,176,245,232,49,84,102,172,45,57,246,173,199,41,179,152,136,103,215,113,214,172,190,157,61,13,70,239,28,52,212,252,239,48,73,237,155,61,66,231,62,102,51,224,176,208,191,15,228,101,100,179,217,168,247,10,81,128,133,233,113,250,83,182,42,240,98,1,203,71,226,109,177,193,41,158,191,226,31,77,250,179,81,232,118,38,161,17,19,144,113,21,37,5,215,61,98,10,70,110,204,110,135,103,249,22,208,30,54,168,27,48,176,246,11,64,133,92,223,160,133,20,37,200,133,68,92,143,243,229,102,5,139,24,186,28,48,112,118,251,180,245,246,105,7,152,13,68,219,164,81,66,217,84,73,202,215,226,30,237,84,86,219,249,34,141,90,156,108,5,10,205,92,229,117,92,52,48,215,152,128,99,22,143,124,165,4,55,41,61,43,29,182,139,241,122,99,125,147,180,144,180,129,111,103,210,64,119,238,80,86,144,190,92,127,195,46,172,118,174,218,247,42,137,61,219,179,183,6,122,77,17,177,10,58,126,112,23,208,90,17,51,49,178,191,202,114,233,240,172,77,245,34,38,152,169,213,12,51,236,188,156,95,67,187,43,96,47,229,237,182,106,127,21,41,190,140,68,51,196,244,74,34,170,81,100,135,139,54,131,211,136,219,218,123,187,11,26,160,193,205,30,116,181,111,152,150,146,47,65,181,96,206,72,178,9,110,63,168,228,205,167,14,163,168,27,107,62,120,159,71,107,172,96,104,122,238,208,217,50,62,177,224,211,109,58,159,202,122,151,142,166,13,198,214,187,11,129,83,119,146,103,31,192,118,30,140,88,9,177,74,135,83,91,53,96,191,204,205,231,39,132,100,2,65,62,86,114,124,52,162,45,217,211,167,66,18,43,80,165,15,113,84,46,236,17,102,99,85,220,214,33,91,47,57,56,57,53,199,217,59,53,96,68,10,225,38,136,125,38,152,31,237,233,203,4,98,33,55,48,226,20,185,62,210,82,3,96,8,222,215,129,80,105,131,151,18,51,117,23,236,228,189,217,233,218,58,249,122,61,255,42,85,128,251,157,232,23,72,93,96,37,14,234,130,121,164,193,229,119,43,98,68,117,170,98,222,73,241,10,116,231,235,92,148,56,132,53,52,213,206,45,134,8,67,84,121,207,197,150,102,248,151,224,220,101,209,201,226,241,239,143,110,47,63,91,154,230,99,84,176,87,175,207,64,160,148,198,1,225,170,2,245,199,236,247,239,111,7,146,217,69,42,1,30,252,112,27,12,106,236,175,99,242,170,169,126,34,154,105,109,93,219,0,184,53,3,166,138,212,25,118,53,74,199,254,169,41,44,42,125,236,153,162,39,95,62,65,187,76,206,144,129,15,196,80,168,160,21,54,154,27,226,238,60,111,114,150,200,150,139,153,168,231,113,94,148,175,115,229,38,218,110,75,147,96,73,153,146,195,219,81,86,20,107,215,243,107,150,196,188,149,132,210,110,252,130,163,204,150,45,9,30,241,81,112,115,225,252,46,248,203,168,248,208,236,206,154,100,142,227,214,186,190,179,198,132,127,7,210,69,145,179,45,130,215,148,243,5,216,64,80,115,50,71,215,212,25,2,215,187,10,212,23,233,48,159,108,171,225,77,82,145,202,211,46,180,228,205,239,190,99,247,38,133,201,67,188,190,1,13,7,33,152,157,71,34,147,224,215,33,39,91,240,76,249,39,217,104,128,239,132,48,224,24,229,11,58,127,251,3,123,136,93,170,103,238,209,57,138,162,40,41,121,158,70,88,115,2,189,172,239,176,50,193,113,34,198,113,18,167,11,0,16,120,96,138,84,122,73,17,100,146,113,189,103,192,33,204,63,98,75,182,42,212,187,10,18,113,213,216,108,139,185,61,172,135,101,220,20,196,126,85,73,163,13,214,81,137,195,20,169,115,167,79,86,102,224,99,69,249,252,90,26,198,86,60,214,228,4,163,87,240,149,180,199,45,78,148,132,171,36,90,126,35,201,215,171,71,20,192,64,3,170,65,14,88,93,56,53,59,122,88,247,253,117,92,242,41,22,95,135,10,65,197,188,13,166,72,160,125,35,129,67,211,43,6,169,130,56,53,29,111,232,11,69,98,206,215,9,244,164,94,41,238,146,241,176,107,231,165,114,31,184,200,108,12,22,242,185,107,207,112,180,213,67,223,136,247,25,168,21,239,76,53,81,133,48,189,136,170,81,211,32,68,174,29,103,79,197,124,179,199,13,130,166,185,67,109,82,123,20,162,199,56,168,94,105,53,250,105,58,207,80,145,12,223,165,49,214,92,160,6,58,217,150,160,252,32,28,33,131,221,103,7,236,251,71,255,244,175,127,254,151,127,190,98,163,166,148,112,167,42,152,174,19,172,8,49,234,6,165,31,88,69,113,15,102,155,51,182,136,175,174,120,142,85,103,74,160,162,116,161,231,150,97,212,90,244,85,16,70,222,159,227,84,186,157,42,236,10,168,93,226,37,172,212,182,163,231,88,144,178,83,115,155,51,52,134,106,76,106,244,87,160,144,226,66,84,204,192,194,1,31,104,158,230,137,163,146,244,242,223,100,16,96,89,130,232,106,1,87,30,197,231,54,105,180,28,137,243,75,57,227,42,225,32,181,206,95,130,240,233,225,209,249,207,23,23,151,225,197,5,56,114,251,247,247,47,14,130,253,161,88,93,163,63,116,28,100,122,181,144,8,180,231,143,46,7,242,251,235,181,60,179,49,89,166,89,46,82,105,236,179,253,102,156,173,214,113,194,117,246,206,166,26,80,75,206,208,155,36,71,236,7,16,33,217,201,247,151,32,70,65,208,201,156,103,120,92,2,21,249,21,24,87,203,98,129,74,47,65,90,190,204,92,21,217,38,159,243,96,52,21,127,5,194,29,152,206,111,178,144,210,221,88,79,79,24,52,182,100,202,63,54,120,84,224,182,85,107,23,149,134,210,156,109,91,181,6,182,173,169,86,197,143,114,158,6,62,174,245,114,108,147,246,87,140,124,19,201,18,76,225,225,137,10,96,131,112,40,158,133,178,67,98,45,238,25,248,225,84,22,77,25,123,96,121,84,138,167,180,98,117,227,52,155,76,175,225,241,227,173,186,39,27,189,183,66,11,120,225,237,142,20,77,24,129,133,184,125,23,3,196,163,39,240,231,144,32,254,49,207,54,107,20,42,80,243,240,238,193,131,42,233,88,35,69,89,168,183,178,151,48,184,184,8,216,3,22,15,106,232,206,227,75,73,177,157,114,236,172,51,214,14,98,65,34,64,228,199,171,24,85,118,95,249,162,108,56,110,96,64,59,93,81,117,166,242,33,69,107,218,130,192,123,194,233,86,6,228,197,111,74,251,73,84,83,8,146,87,145,40,67,119,92,252,33,5,80,123,152,24,37,1,90,93,30,0,200,134,199,139,197,113,146,72,40,185,61,95,132,246,107,125,22,67,110,124,0,247,61,143,211,40,161,56,158,139,233,45,16,56,196,239,114,27,67,62,125,31,151,224,216,192,180,113,4,9,229,67,84,193,81,30,23,89,138,101,1,67,81,224,15,180,169,73,31,208,177,235,29,15,59,11,129,189,192,212,185,211,233,79,88,123,130,248,78,21,14,78,73,156,114,153,15,203,102,191,98,101,42,44,173,62,118,192,164,67,35,187,223,71,14,155,44,250,114,87,206,231,89,190,192,202,227,215,18,111,3,210,137,71,31,107,150,106,109,217,157,49,19,203,35,11,81,101,33,179,166,201,226,52,53,213,221,92,133,43,161,243,170,39,219,87,48,74,122,194,69,113,131,108,231,95,32,233,29,62,199,4,60,110,238,60,59,9,13,65,214,10,2,243,36,130,106,149,48,47,104,176,222,182,154,216,80,174,101,180,41,175,65,159,93,225,110,250,64,151,100,163,186,0,245,197,115,52,96,91,61,173,104,195,237,137,221,45,156,236,90,164,175,191,182,245,249,241,85,84,225,226,214,15,172,89,219,77,184,162,97,83,185,144,150,72,223,166,197,145,139,121,56,182,171,222,237,61,138,58,248,177,93,8,143,180,22,60,149,59,85,61,106,137,166,2,86,235,38,195,198,160,152,208,15,1,28,150,185,22,192,86,146,234,148,64,107,63,150,218,78,131,81,173,146,82,197,66,146,112,15,81,101,18,221,172,150,20,129,87,252,163,94,152,59,238,12,19,12,207,179,252,93,250,33,205,62,166,148,102,142,59,197,101,190,161,78,136,111,161,164,202,45,194,234,44,223,221,210,218,114,190,181,28,137,196,109,154,149,178,210,94,166,103,60,7,236,138,97,91,70,87,102,187,149,11,209,148,187,109,41,130,195,234,183,94,229,106,170,78,79,187,24,47,32,96,146,56,36,249,100,169,78,36,131,224,87,121,96,25,139,168,193,10,26,24,101,85,66,202,108,181,173,113,213,15,46,137,213,193,240,56,165,249,246,38,193,178,219,120,147,208,30,249,170,206,132,170,167,94,118,168,154,107,54,163,103,71,9,195,91,73,243,86,76,74,101,115,114,218,225,182,154,0,191,80,124,247,29,184,204,180,55,85,52,255,249,115,115,97,19,153,56,33,213,146,35,165,76,164,11,171,14,193,89,30,218,81,85,251,88,77,133,127,25,92,170,125,75,255,13,166,19,39,141,54,52,106,181,77,146,181,101,157,90,167,2,105,157,104,71,175,13,237,143,133,17,237,110,110,157,45,180,242,85,21,91,116,185,243,137,90,60,60,195,35,14,193,105,85,19,67,16,246,17,12,30,155,137,77,92,113,112,16,19,60,98,227,136,197,165,117,138,176,104,221,209,111,178,224,99,187,113,107,236,42,64,42,54,82,217,228,2,93,43,93,122,222,24,192,118,50,174,206,222,88,249,89,167,71,189,234,66,143,41,37,135,189,115,83,211,43,112,162,2,43,134,34,211,67,13,71,232,98,171,236,71,67,165,16,187,231,20,153,160,109,212,171,37,68,165,161,161,40,164,212,35,171,8,164,250,145,160,185,71,15,156,87,156,237,43,48,146,241,135,156,163,10,195,142,33,164,76,167,75,103,81,236,178,163,223,159,100,115,81,160,183,80,115,223,59,113,136,255,7,35,116,137,253,104,26,189,192,179,246,238,187,50,252,47,100,139,104,150,240,169,120,40,37,87,1,32,85,78,42,23,221,152,90,35,55,162,124,159,229,31,196,189,42,160,47,101,174,99,90,102,57,204,178,246,82,90,203,181,116,113,34,4,122,181,158,138,33,102,2,144,46,248,19,72,143,11,66,135,179,76,17,210,237,226,75,85,171,43,40,69,222,104,166,28,95,229,4,183,159,111,108,210,1,103,61,2,192,246,101,236,209,186,197,167,175,236,13,110,214,41,99,227,73,201,235,236,148,106,118,215,184,77,166,7,122,196,108,216,159,76,171,168,72,82,109,218,142,19,30,229,63,149,171,4,119,5,104,222,95,41,148,20,55,233,63,153,22,166,22,93,108,157,186,207,67,162,134,106,157,233,20,237,200,131,208,186,192,195,153,9,28,117,241,28,198,183,201,97,132,200,131,11,8,28,162,43,110,112,140,55,194,41,15,136,37,245,13,21,219,0,168,121,84,39,113,224,35,77,235,35,43,13,231,237,160,62,228,233,102,38,101,56,124,212,138,155,88,220,138,41,208,142,131,195,72,76,185,73,245,216,64,150,177,151,178,140,100,188,174,215,123,14,199,155,28,119,88,240,169,184,124,64,126,125,6,204,115,22,175,48,47,217,137,31,134,132,242,17,248,138,48,218,154,109,193,32,100,43,81,25,235,78,83,119,235,215,226,36,177,244,96,236,18,5,249,134,238,73,25,19,210,130,15,236,41,12,155,220,211,81,47,50,81,72,228,26,32,114,93,16,23,86,120,237,240,81,164,102,10,145,117,211,241,176,113,3,181,107,12,46,115,179,107,92,21,13,72,28,192,82,205,53,255,173,227,35,7,163,201,224,200,211,59,151,252,96,200,152,27,22,27,176,217,70,158,1,199,19,13,91,121,198,86,101,111,187,131,198,187,150,250,88,146,72,38,171,185,242,251,73,163,128,217,76,170,112,5,3,179,142,68,125,246,79,194,212,184,232,46,113,253,221,18,54,213,46,196,189,93,59,212,37,102,38,30,245,0,35,3,223,107,76,2,181,6,55,59,166,146,116,52,210,198,229,61,227,34,57,27,29,35,179,247,65,26,122,172,14,252,13,236,242,221,118,77,94,21,225,96,122,93,93,185,246,6,200,181,116,137,111,8,254,110,40,133,209,13,15,233,89,3,82,97,32,65,180,43,182,183,215,232,140,201,170,83,81,202,2,54,146,205,65,166,85,153,14,26,49,54,1,151,54,42,74,86,108,87,179,44,97,49,158,230,95,0,131,23,241,12,239,201,225,195,229,16,224,179,95,227,253,129,12,228,100,148,151,195,179,27,140,242,74,22,37,73,79,55,14,3,64,60,87,56,154,170,109,21,249,189,61,152,3,203,42,13,106,48,210,135,224,84,59,237,99,203,51,113,205,142,159,234,77,196,160,57,255,109,19,131,114,171,26,181,56,239,53,167,162,176,232,30,48,229,65,217,126,142,217,207,196,77,86,116,254,100,17,6,34,171,92,6,131,66,250,14,150,203,32,183,25,197,22,45,117,171,28,111,202,224,87,160,150,59,98,55,127,200,126,240,21,170,72,32,205,66,76,253,243,204,131,119,4,122,99,183,204,229,60,128,82,205,65,216,23,184,165,139,223,19,139,92,145,60,158,169,28,173,92,144,147,77,156,224,193,134,132,142,93,36,117,211,205,138,67,192,146,97,162,89,194,10,37,130,25,68,112,100,79,19,142,231,95,78,13,84,40,104,168,250,87,168,212,77,79,21,182,225,75,96,217,87,232,10,219,122,177,106,201,70,71,14,221,123,123,51,48,233,246,77,15,122,133,151,121,180,6,23,94,28,69,174,58,177,169,52,217,64,210,201,131,35,211,84,173,16,209,101,197,140,148,59,60,170,200,144,91,216,215,17,22,21,189,200,62,78,193,185,203,150,176,70,161,70,117,254,232,146,102,155,212,154,153,227,3,243,8,121,69,32,0,10,157,183,6,9,240,99,149,112,146,53,86,37,18,226,192,15,95,101,41,110,118,195,44,188,140,114,145,20,108,0,84,80,227,108,53,19,213,234,29,224,167,41,250,27,10,206,189,150,43,78,205,249,232,166,59,179,96,246,142,215,120,79,141,25,145,143,241,1,106,135,104,22,51,95,38,90,204,237,219,11,122,40,189,234,122,52,114,68,63,110,217,80,60,174,247,53,96,191,102,113,10,90,43,78,245,105,240,174,172,67,149,62,106,186,111,208,232,169,250,81,115,114,163,96,203,133,130,228,62,193,119,158,99,130,226,159,185,61,80,220,38,71,142,150,55,129,56,39,208,155,192,78,18,145,242,247,195,58,23,18,66,12,93,187,208,79,95,147,167,239,184,219,253,106,187,150,155,237,106,225,126,203,197,118,95,233,94,187,142,107,237,220,181,110,188,165,206,119,129,128,145,57,139,85,240,58,2,194,100,148,89,205,103,79,211,238,158,157,85,253,27,247,238,99,172,175,65,66,61,24,243,200,57,131,96,44,32,205,171,221,139,230,244,125,5,220,169,201,144,98,154,5,151,165,153,74,230,123,170,179,156,164,213,201,45,21,70,43,181,86,173,41,112,210,114,192,128,115,231,215,172,184,206,54,201,2,61,75,169,233,154,213,227,95,165,38,204,61,125,183,104,68,103,177,106,186,143,148,161,233,165,35,117,213,247,188,103,2,42,80,226,148,181,221,219,209,198,34,119,93,83,115,82,204,83,231,39,54,125,35,61,178,85,84,124,232,187,202,177,74,30,227,81,9,171,240,74,98,105,41,128,175,17,161,170,176,250,214,195,59,103,54,212,11,74,15,117,41,243,90,9,234,95,130,139,223,207,127,254,253,246,242,193,197,45,173,61,16,165,158,71,178,129,170,57,176,144,210,84,128,174,62,165,0,166,82,78,148,120,10,165,49,96,208,217,226,65,96,7,103,107,82,176,215,122,250,17,239,216,172,246,55,86,221,23,124,232,123,39,219,22,81,79,110,247,125,33,13,43,129,174,123,67,254,215,87,112,94,63,228,2,8,106,39,92,84,210,195,169,237,64,220,160,13,199,162,224,80,133,55,242,52,82,227,69,41,221,222,218,84,148,29,42,167,183,207,140,185,213,134,50,176,14,156,115,143,93,187,141,119,216,156,176,182,29,61,169,72,149,94,160,89,4,207,94,131,168,107,89,114,211,172,186,207,105,215,178,22,89,102,39,22,137,224,82,155,134,206,165,7,194,165,92,104,130,171,22,158,43,169,81,127,122,233,251,238,59,215,81,242,238,6,248,136,113,243,90,254,211,204,238,166,104,221,227,61,46,84,110,224,200,113,153,27,82,125,123,123,254,49,55,80,32,156,12,66,254,116,179,94,103,121,169,70,17,214,233,240,101,154,112,132,158,94,209,97,117,78,135,250,105,219,137,9,136,136,62,171,99,27,208,237,95,55,37,233,167,241,85,86,186,100,182,37,253,84,67,145,131,243,32,180,58,221,61,189,237,84,40,136,132,80,213,165,72,100,215,207,184,254,224,158,113,253,71,127,118,219,67,110,175,148,183,255,236,207,43,171,40,71,28,171,118,213,1,117,80,104,58,82,114,61,6,217,228,177,183,252,74,30,222,84,153,241,95,76,49,177,98,117,144,207,73,33,55,83,144,0,241,178,11,163,170,251,170,90,97,108,181,95,59,117,134,85,113,30,183,71,104,152,150,73,113,137,145,23,255,138,94,28,227,36,54,104,197,1,125,224,65,155,122,92,4,223,46,170,211,165,214,202,216,248,109,188,188,118,10,56,141,70,110,90,21,177,7,12,97,132,124,42,49,136,218,107,125,236,6,228,146,190,147,27,242,195,177,183,9,53,34,67,185,111,140,91,196,74,104,233,203,122,137,232,128,81,129,171,218,210,199,141,133,165,93,68,30,47,86,113,42,203,11,56,158,95,196,74,225,66,77,151,123,202,213,63,27,222,201,23,11,91,47,151,179,47,122,166,51,221,246,155,8,114,37,68,35,186,241,126,247,109,121,125,137,191,68,175,57,128,246,80,221,48,77,113,246,220,201,247,180,180,214,71,84,176,248,59,0,106,107,160,225,14,168,155,232,150,103,17,228,49,66,129,179,15,141,86,191,2,193,89,38,234,202,61,135,38,100,171,243,75,99,35,122,81,161,183,108,148,202,186,173,28,14,171,189,85,205,222,69,249,160,98,176,129,67,119,165,198,40,187,217,93,237,114,161,164,165,251,236,91,199,251,223,36,210,125,193,184,168,2,145,65,134,8,130,84,13,247,79,103,47,95,60,4,192,15,155,117,255,168,112,189,41,165,167,2,254,46,226,18,14,54,224,79,189,193,191,169,188,65,208,232,170,228,22,176,29,125,232,171,130,110,226,188,220,68,137,142,8,237,18,22,19,13,26,58,168,18,184,6,176,247,242,34,185,201,10,127,238,199,212,152,235,216,141,52,196,224,45,60,140,87,203,139,131,167,231,63,143,46,31,140,246,131,129,149,255,108,60,196,72,24,59,205,198,69,189,155,26,33,216,217,193,197,253,225,131,167,23,247,15,218,187,153,194,139,132,39,224,137,91,221,72,31,167,148,190,170,221,155,160,65,244,112,120,239,225,195,243,139,226,98,122,121,255,233,195,135,163,131,229,157,70,52,45,183,226,122,85,183,151,138,132,1,11,14,11,132,26,222,127,10,44,131,159,70,119,26,213,116,158,199,235,210,211,151,160,65,116,35,32,100,63,226,227,221,58,66,102,71,181,163,122,36,199,222,242,139,20,80,175,163,20,17,7,76,127,86,173,73,75,252,80,181,83,112,216,188,181,157,59,48,124,140,107,117,184,136,111,70,159,15,147,88,116,43,208,244,109,138,192,191,255,48,184,221,185,225,161,228,243,207,255,253,95,206,28,246,67,16,28,194,50,184,211,239,54,37,63,36,54,68,177,125,198,113,127,71,225,232,75,232,207,23,197,131,127,56,199,177,93,222,55,163,116,22,250,37,248,218,49,89,231,238,209,227,165,133,56,3,247,59,88,168,38,22,162,72,94,174,255,20,119,241,10,148,237,80,205,189,177,9,46,171,84,59,165,63,12,244,179,246,253,88,9,212,153,225,208,69,96,86,125,37,42,226,40,173,210,14,248,117,45,127,176,33,46,113,243,31,127,91,2,207,161,235,227,140,59,149,94,234,156,72,219,21,211,150,198,159,84,191,150,130,249,63,21,112,141,229,37,28,126,197,47,156,187,73,42,142,243,39,122,140,52,242,161,137,20,207,217,56,239,225,31,5,78,60,17,17,1,0,184,190,92,5,187,37,235,236,22,116,221,235,174,232,106,201,236,163,121,197,34,9,245,3,5,167,170,102,252,67,188,150,17,105,237,135,235,172,200,243,145,27,121,126,127,235,169,101,107,187,104,74,142,150,178,90,45,94,169,202,87,106,119,112,249,162,80,18,232,220,237,238,45,129,205,170,11,254,118,215,109,89,163,244,22,239,210,33,239,217,209,158,21,230,145,97,63,169,7,93,181,82,51,85,4,148,103,120,204,156,47,236,115,96,123,134,7,251,5,211,196,97,148,197,113,118,192,191,75,100,143,201,1,153,198,163,201,152,59,209,178,123,250,5,171,238,56,22,24,137,83,105,72,208,144,29,47,116,0,47,146,47,168,167,180,236,136,236,12,168,132,38,14,208,177,124,67,170,174,126,178,126,135,97,218,249,139,47,30,48,25,236,154,96,254,234,67,22,255,183,49,166,26,145,198,68,143,252,54,180,144,58,64,113,178,147,4,222,101,66,222,173,23,56,25,154,230,161,200,211,75,114,30,251,231,225,78,73,184,166,25,242,169,7,107,216,88,105,87,47,178,179,163,177,214,179,14,168,209,204,0,72,249,35,235,105,103,105,153,8,176,6,217,66,104,191,166,195,83,87,168,17,168,119,246,158,131,137,179,48,191,229,61,19,231,148,139,168,223,211,242,117,164,181,136,149,86,209,45,9,228,14,9,23,41,106,109,167,216,9,94,39,5,227,233,89,252,156,87,3,61,61,210,49,158,182,45,133,251,13,208,78,145,41,41,75,143,92,9,238,131,193,94,234,129,127,97,250,163,83,191,141,57,48,242,166,127,206,170,222,22,65,209,7,218,5,59,143,22,88,202,229,104,142,62,77,39,41,64,112,186,218,150,21,237,143,226,45,47,214,48,38,239,40,233,232,52,88,250,44,219,204,58,38,177,82,23,189,246,230,175,163,116,145,8,207,251,58,43,184,184,6,69,92,238,74,111,58,208,135,41,35,113,13,149,112,32,196,179,28,30,222,101,255,82,157,138,87,62,119,183,10,65,189,161,105,240,221,119,97,43,43,243,147,125,250,247,34,123,92,145,209,234,254,235,188,207,169,117,153,172,91,82,237,217,19,237,247,235,127,141,149,211,157,138,93,5,89,178,131,129,168,142,158,71,34,140,146,191,213,119,183,115,172,77,199,88,205,53,54,42,100,210,43,66,126,181,169,107,6,229,253,211,13,71,163,233,121,85,175,250,86,29,126,203,28,121,149,52,221,41,47,30,155,228,62,12,11,255,210,204,118,42,147,226,42,172,87,14,73,0,190,7,11,193,187,192,212,94,243,73,204,160,154,38,164,190,6,101,238,48,208,21,250,18,182,197,18,160,135,238,61,21,59,150,215,54,23,255,198,183,42,246,104,62,178,235,67,112,46,26,93,234,64,162,34,196,210,123,47,12,154,192,115,250,246,214,29,132,173,51,177,141,9,137,155,160,112,158,0,46,173,210,252,77,144,98,20,65,195,4,54,156,111,136,119,76,130,119,253,122,201,183,57,143,170,21,237,223,254,84,42,189,139,191,146,116,125,224,215,28,76,253,202,105,147,254,145,180,149,104,217,53,176,220,37,10,191,123,16,254,255,81,210,215,139,146,122,26,212,182,188,37,149,197,250,19,39,125,41,110,131,218,57,135,41,157,21,53,119,142,183,114,254,122,86,128,115,91,194,82,130,249,49,148,106,137,18,63,2,4,158,236,48,216,191,36,2,168,13,174,8,165,172,140,165,48,193,170,87,219,202,90,227,58,170,221,0,166,219,200,57,182,112,214,4,243,239,48,71,220,57,113,205,58,203,155,25,254,191,62,39,206,153,15,226,194,245,155,19,205,128,94,134,18,21,107,54,220,100,97,115,208,223,225,116,180,108,35,84,71,147,189,161,132,61,143,186,132,196,51,69,222,201,20,81,132,20,197,113,203,30,193,180,204,214,31,197,173,54,31,213,213,163,230,137,220,28,2,179,168,85,100,153,155,31,204,189,131,240,239,185,212,244,147,128,189,61,77,76,182,54,135,207,132,13,122,198,103,155,101,183,17,194,187,2,170,159,184,183,118,40,208,2,85,214,162,49,77,41,9,56,77,162,117,193,181,77,33,121,217,185,152,184,240,244,211,156,139,29,55,96,40,123,43,225,52,207,179,188,135,181,84,191,92,162,118,13,198,81,146,192,10,204,63,40,67,56,129,16,34,55,157,52,27,67,44,7,151,136,196,103,129,226,12,130,110,249,213,198,98,198,32,50,186,201,150,86,161,202,81,79,138,183,155,52,37,133,9,222,245,160,245,157,187,172,141,72,43,95,71,5,155,113,158,82,121,80,153,99,53,21,142,83,224,247,1,40,119,185,139,164,141,59,133,105,113,201,229,83,251,33,60,251,31,138,171,95,98,251,139,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateNewContactNameLocalizableStringLocalizableString());
			LocalizableStrings.Add(CreateUnableToGetClosureCodeErrorMsgLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateNewContactNameLocalizableStringLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("e2333bfd-1c31-4dff-8d70-a9288a413a5c"),
				Name = "NewContactNameLocalizableString",
				CreatedInPackageId = new Guid("c2657f9d-1b86-4f69-b0c1-b23085f13744"),
				CreatedInSchemaUId = new Guid("b71b5962-3320-40fb-83d2-34b80b685827"),
				ModifiedInSchemaUId = new Guid("b71b5962-3320-40fb-83d2-34b80b685827")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateUnableToGetClosureCodeErrorMsgLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("508fcc8a-3ea1-4803-8d4f-7d5717f894f5"),
				Name = "UnableToGetClosureCodeErrorMsg",
				CreatedInPackageId = new Guid("c3c90037-274c-4793-841e-197eb228d3cd"),
				CreatedInSchemaUId = new Guid("b71b5962-3320-40fb-83d2-34b80b685827"),
				ModifiedInSchemaUId = new Guid("b71b5962-3320-40fb-83d2-34b80b685827")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b71b5962-3320-40fb-83d2-34b80b685827"));
		}

		#endregion

	}

	#endregion

}
