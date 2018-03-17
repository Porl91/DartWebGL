//Maya ASCII 2013 scene
//Name: igloo.ma
//Last modified: Sat, Dec 24, 2016 07:14:19 AM
//Codeset: 1252
requires maya "2013";
requires "Mayatomr" "2013.0 - 3.10.1.4 ";
currentUnit -l centimeter -a degree -t film;
fileInfo "application" "maya";
fileInfo "product" "Maya 2013";
fileInfo "version" "2013 x64";
fileInfo "cutIdentifier" "201202220241-825136";
fileInfo "osv" "Microsoft Windows 7 Ultimate Edition, 64-bit Windows 7  (Build 7600)\n";
createNode transform -s -n "persp";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 11.624603496248456 6.2178009932920704 -5.9687072519468343 ;
	setAttr ".r" -type "double3" -21.33835272952377 478.60000000000383 0 ;
	setAttr ".rp" -type "double3" -2.2204460492503131e-016 8.8817841970012523e-016 -2.2204460492503131e-016 ;
	setAttr ".rpt" -type "double3" -3.1794816494232983e-015 -1.8378437559642329e-016 
		5.8257828697297087e-015 ;
createNode camera -s -n "perspShape" -p "persp";
	setAttr -k off ".v" no;
	setAttr ".ff" 3;
	setAttr ".ovr" 1.3;
	setAttr ".fl" 34.999999999999979;
	setAttr ".coi" 13.214028207278805;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".tp" -type "double3" 3.5778907627831069 -1.8473433217640771 1.6315669319000401 ;
	setAttr ".hc" -type "string" "viewSet -p %camera";
	setAttr ".dr" yes;
	setAttr ".col" -type "float3" 0.6023041 0.76717782 0.93220419 ;
createNode transform -s -n "top";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0 100.1 0 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 4.0981856990394867 1.0245464247598719 100.1 ;
createNode camera -s -n "frontShape" -p "front";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 100.1 2.3378615873681179 -0.45787493635880239 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 24.612225993591881;
	setAttr ".imn" -type "string" "side";
	setAttr ".den" -type "string" "side_depth";
	setAttr ".man" -type "string" "side_mask";
	setAttr ".hc" -type "string" "viewSet -s %camera";
	setAttr ".o" yes;
createNode transform -n "pSphere1";
	setAttr ".t" -type "double3" 0.041407340302676232 0 -0.020424635417008119 ;
createNode transform -n "transform1" -p "pSphere1";
	setAttr ".v" no;
createNode mesh -n "pSphereShape1" -p "transform1";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr -s 2 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 362 ".pt";
	setAttr ".pt[20]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[21]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[22]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[23]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[24]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[25]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[26]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[27]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[28]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[29]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[30]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[31]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[32]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[33]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[34]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[35]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[36]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[37]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[38]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[39]" -type "float3" 0 0.0019209157 0 ;
	setAttr ".pt[40]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[41]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[42]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[43]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[44]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[45]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[46]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[47]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[48]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[49]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[50]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[51]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[52]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[53]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[54]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[55]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[56]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[57]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[58]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[59]" -type "float3" 0 0.07102897 0 ;
	setAttr ".pt[60]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[61]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[62]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[63]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[64]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[65]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[66]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[67]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[68]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[69]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[70]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[71]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[72]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[73]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[74]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[75]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[76]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[77]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[78]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[79]" -type "float3" 0 0.20843001 0 ;
	setAttr ".pt[80]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[81]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[82]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[83]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[84]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[85]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[86]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[87]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[88]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[89]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[90]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[91]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[92]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[93]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[94]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[95]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[96]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[97]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[98]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[99]" -type "float3" 0 0.34635618 0 ;
	setAttr ".pt[100]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[101]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[102]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[103]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[104]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[105]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[106]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[107]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[108]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[109]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[110]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[111]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[112]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[113]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[114]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[115]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[116]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[117]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[118]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[119]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[120]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[121]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[122]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[123]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[124]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[125]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[126]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[127]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[128]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[129]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[130]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[131]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[132]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[133]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[134]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[135]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[136]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[137]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[138]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[139]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[140]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[141]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[142]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[143]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[144]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[145]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[146]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[147]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[148]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[149]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[150]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[151]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[152]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[153]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[154]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[155]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[156]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[157]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[158]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[159]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[160]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[161]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[162]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[163]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[164]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[165]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[166]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[167]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[168]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[169]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[170]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[171]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[172]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[173]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[174]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[175]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[176]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[177]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[178]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[179]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[180]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[181]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[182]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[183]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[184]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[185]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[186]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[187]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[188]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[189]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[190]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[191]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[192]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[193]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[194]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[195]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[196]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[197]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[198]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[199]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[200]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[203]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[204]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[206]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[208]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[210]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[212]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[214]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[216]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[218]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[220]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[222]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[224]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[226]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[228]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[230]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[232]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[234]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[236]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[238]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[240]" -type "float3" 0 0.0058476608 0 ;
	setAttr ".pt[241]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[242]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[243]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[244]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[245]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[246]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[247]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[248]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[249]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[250]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[251]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[252]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[253]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[254]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[255]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[256]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[257]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[258]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[259]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[260]" -type "float3" 0 0.084790364 0 ;
	setAttr ".pt[261]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[262]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[263]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[264]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[265]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[266]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[267]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[268]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[269]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[270]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[271]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[272]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[273]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[274]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[275]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[276]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[277]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[278]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[279]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[280]" -type "float3" 0 0.22329718 0 ;
	setAttr ".pt[281]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[282]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[283]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[284]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[285]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[286]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[287]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[288]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[289]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[290]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[291]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[292]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[293]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[294]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[295]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[296]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[297]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[298]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[299]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[300]" -type "float3" 0 0.35268259 0 ;
	setAttr ".pt[301]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[302]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[303]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[304]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[305]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[306]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[307]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[308]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[309]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[310]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[311]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[312]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[313]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[314]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[315]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[316]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[317]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[318]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[319]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[320]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[321]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[322]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[323]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[324]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[325]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[326]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[327]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[328]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[329]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[330]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[331]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[332]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[333]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[334]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[335]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[336]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[337]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[338]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[339]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[340]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[341]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[342]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[343]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[344]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[345]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[346]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[347]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[348]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[349]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[350]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[351]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[352]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[353]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[354]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[355]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[356]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[357]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[358]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[359]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[360]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[361]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[362]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[363]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[364]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[365]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[366]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[367]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[368]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[369]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[370]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[371]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[372]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[373]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[374]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[375]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[376]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[377]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[378]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[379]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[380]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[381]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[382]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[383]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[384]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[385]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[386]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[387]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[388]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[389]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[390]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[391]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[392]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[393]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[394]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[395]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[396]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[397]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[398]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[399]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[400]" -type "float3" 0 0.40518516 0 ;
	setAttr ".pt[401]" -type "float3" 0 0.40518516 0 ;
createNode transform -n "pCube1";
	setAttr ".t" -type "double3" 3.0495082306746824 1.9885264152901161 -0.034131999600419682 ;
	setAttr ".s" -type "double3" 1 1 0.71175357631401426 ;
createNode mesh -n "pCubeShape1" -p "pCube1";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".pv" -type "double2" 0.95887723565101635 0.40765860676765442 ;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr ".dr" 3;
	setAttr ".dsm" 2;
createNode transform -n "pCube2";
	setAttr ".t" -type "double3" 3.1811500139524611 1.9885264152901161 -0.034131999600419682 ;
	setAttr ".s" -type "double3" 1 1 0.71175357631401426 ;
createNode transform -n "transform2" -p "pCube2";
	setAttr ".v" no;
createNode mesh -n "pCubeShape2" -p "transform2";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".iog[0].og[0].gcl" -type "componentList" 1 "f[0:57]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 108 ".uvst[0].uvsp[0:107]" -type "float2" 0.625 0.75 0.625
		 0.28358692 0.375 0.32521963 0.625 0.32521963 0.625 0.36682475 0.375 0.36682475 0.625
		 0.37358528 0.375 0.41549262 0.375 0.37358528 0.625 0.41549262 0.375 0.45752764 0.625
		 0 0.625 0.27586561 0.375 0.28358692 0.375 0 0.625 0.53571129 0.375 0.75 0.625 0.45752764
		 0.375 0.47208712 0.375 0.27586558 0.375 0.26040193 0.625 0.26040196 0.375 0.24999999
		 0.625 0.23660085 0.625 0.25 0.37499997 0.23660083 0.625 0.2142887 0.375 0.53571129
		 0.625 0.51373005 0.375 0.51373005 0.375 0.5 0.625 0.5 0.375 0.48850089 0.625 0.47208712
		 0.625 0.48850089 0.375 0.2142887 0.375 0 0.625 0 0.625 0.2142887 0.375 0.2142887
		 0.375 0.27586558 0.625 0.27586561 0.625 0.28358692 0.375 0.28358692 0.375 0.53571129
		 0.625 0.53571129 0.625 0.75 0.375 0.75 0.375 0.45752764 0.625 0.45752764 0.625 0.47208712
		 0.375 0.47208712 0.625 0.32521963 0.375 0.32521963 0.625 0.36682475 0.375 0.36682475
		 0.625 0.37358528 0.625 0.41549262 0.375 0.41549262 0.375 0.37358528 0.375 0.26040193
		 0.625 0.26040196 0.375 0.24999999 0.37499997 0.23660083 0.625 0.23660085 0.625 0.25
		 0.375 0.51373005 0.625 0.51373005 0.375 0.5 0.625 0.5 0.375 0.48850089 0.625 0.48850089
		 0.375 0 0.625 0 0.625 0.2142887 0.375 0.2142887 0.625 0.27586561 0.625 0.28358692
		 0.375 0.28358692 0.375 0.27586558 0.625 0.53571129 0.625 0.75 0.375 0.75 0.375 0.53571129
		 0.625 0.45752764 0.625 0.47208712 0.375 0.47208712 0.375 0.45752764 0.625 0.32521963
		 0.375 0.32521963 0.625 0.36682475 0.375 0.36682475 0.625 0.37358528 0.625 0.41549262
		 0.375 0.41549262 0.375 0.37358528 0.375 0.26040193 0.625 0.26040196 0.375 0.24999999
		 0.37499997 0.23660083 0.625 0.23660085 0.625 0.25 0.375 0.51373005 0.625 0.51373005
		 0.375 0.5 0.625 0.5 0.375 0.48850089 0.625 0.48850089;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 60 ".vt[0:59]"  -2.85064363 -1.98852623 1.50528979 2.85064363 -1.98852623 1.50528979
		 -2.85064363 -1.98852623 -1.50528979 2.85064363 -1.98852623 -1.50528979 2.85064363 0.65129173 0.58883208
		 2.85064363 0.69273365 0.056256603 2.85064363 0.66176116 -0.47772622 2.85064363 0.5132736 -0.99382401
		 2.85064363 0.49289787 1.10082543 -2.85064363 0.66176116 -0.47772622 -2.85064363 0.69273365 0.056256603
		 -2.85064363 0.65129173 0.58883208 -2.85064363 0.49289787 1.10082543 -2.85064363 0.5132736 -0.99382401
		 -2.85064363 0.42678154 1.19380796 -2.85064363 -0.10807967 1.50528979 -2.85064363 0.087715983 1.469051
		 -2.85064363 0.27015245 1.36280727 2.85064363 0.42678154 1.19380796 2.85064363 0.27015245 1.36280727
		 2.85064363 0.087715983 1.469051 2.85064363 -0.10807967 1.50528979 -2.85064363 0.40769947 -1.16915405
		 -2.85064363 0.26164615 -1.35053563 -2.85064363 0.084812522 -1.46577907 -2.85064363 -0.10807967 -1.50528979
		 2.85064363 0.40769947 -1.16915405 2.85064363 -0.10807967 -1.50528979 2.85064363 0.084812522 -1.46577907
		 2.85064363 0.26164615 -1.35053563 -2.85064363 -1.98852623 0.89087188 2.85064363 -1.98852623 0.89087188
		 2.85064363 -0.13663769 0.89350337 -2.85064363 -0.13663769 0.89350337 -2.85064363 0.13891256 0.73303396
		 2.85064363 0.13891256 0.73303396 2.85064363 0.13767564 0.76123959 -2.85064363 0.13767564 0.76123959
		 -2.85064363 -0.13962448 -0.89408565 2.85064363 -0.13962448 -0.89408565 2.85064363 -1.98852623 -0.89087188
		 -2.85064363 -1.98852623 -0.89087188 -2.85064363 0.14362037 -0.68027312 2.85064363 0.14362037 -0.68027312
		 2.85064363 0.095954776 -0.74055713 -2.85064363 0.095954776 -0.74055713 2.85064363 0.23339665 0.43298271
		 -2.85064363 0.23339665 0.43298271 2.85064363 0.25743711 0.047821734 -2.85064363 0.25743711 0.047821734
		 2.85064363 0.24110568 -0.33764124 -2.85064363 0.24110568 -0.33764124 -2.85064363 0.053247571 0.8353616
		 2.85064363 0.053247571 0.8353616 -2.85064363 -0.024567366 0.88067794 2.85064363 -0.024567366 0.88067794
		 -2.85064363 -0.038740635 -0.88309658 2.85064363 -0.038740635 -0.88309658 -2.85064363 0.024825454 -0.84167004
		 2.85064363 0.024825454 -0.84167004;
	setAttr -s 116 ".ed[0:115]"  0 1 0 2 3 0 0 15 0 1 21 0 7 26 0 13 22 0
		 8 12 1 13 7 1 7 6 0 6 5 0 5 4 0 4 8 0 4 11 1 5 10 1 6 9 1 12 11 0 11 10 0 10 9 0
		 9 13 0 14 12 0 18 8 0 25 2 0 27 3 0 14 18 1 21 15 1 25 27 1 26 22 1 14 17 0 17 19 1
		 19 18 0 17 16 0 16 20 1 20 19 0 16 15 0 21 20 0 25 24 0 24 28 1 28 27 0 24 23 0 23 29 1
		 29 28 0 23 22 0 26 29 0 0 30 0 1 31 0 30 31 0 21 32 1 31 32 0 15 33 1 32 33 1 30 33 0
		 14 34 1 18 35 1 34 35 1 8 36 1 35 36 0 12 37 1 36 37 1 34 37 0 25 38 1 27 39 1 38 39 1
		 3 40 0 39 40 0 2 41 0 41 40 0 38 41 0 13 42 1 7 43 1 42 43 1 26 44 1 43 44 0 22 45 1
		 44 45 1 42 45 0 4 46 1 46 36 0 11 47 1 46 47 1 37 47 0 5 48 1 48 46 0 10 49 1 48 49 1
		 47 49 0 6 50 1 50 48 0 9 51 1 50 51 1 49 51 0 43 50 0 51 42 0 17 52 1 34 52 0 19 53 1
		 52 53 1 53 35 0 16 54 1 52 54 0 20 55 1 54 55 1 55 53 0 54 33 0 32 55 0 24 56 1 38 56 0
		 28 57 1 56 57 1 57 39 0 23 58 1 56 58 0 29 59 1 58 59 1 59 57 0 58 45 0 44 59 0;
	setAttr -s 58 -ch 232 ".fc[0:57]" -type "polyFaces" 
		f 4 45 47 49 -51
		mu 0 4 72 73 74 75
		f 4 53 55 57 -59
		mu 0 4 79 76 77 78
		f 4 61 63 -66 -67
		mu 0 4 83 80 81 82
		f 4 69 71 73 -75
		mu 0 4 87 84 85 86
		f 4 -77 78 -80 -58
		mu 0 4 77 88 89 78
		f 4 -82 83 -85 -79
		mu 0 4 88 90 91 89
		f 4 -87 88 -90 -84
		mu 0 4 92 93 94 95
		f 4 -91 -70 -92 -89
		mu 0 4 93 84 87 94
		f 4 93 95 96 -54
		mu 0 4 79 96 97 76
		f 4 98 100 101 -96
		mu 0 4 98 99 100 101
		f 4 102 -50 103 -101
		mu 0 4 99 75 74 100
		f 4 105 107 108 -62
		mu 0 4 83 102 103 80
		f 4 110 112 113 -108
		mu 0 4 102 104 105 103
		f 4 114 -74 115 -113
		mu 0 4 106 86 85 107
		f 4 2 -25 -4 -1
		mu 0 4 36 39 38 37
		f 4 19 -7 -21 -24
		mu 0 4 40 43 42 41
		f 4 21 1 -23 -26
		mu 0 4 44 47 46 45
		f 4 5 -27 -5 -8
		mu 0 4 48 51 50 49
		f 4 6 15 -13 11
		mu 0 4 42 43 53 52
		f 4 12 16 -14 10
		mu 0 4 52 53 55 54
		f 4 13 17 -15 9
		mu 0 4 56 59 58 57
		f 4 14 18 7 8
		mu 0 4 57 58 48 49
		f 4 23 -30 -29 -28
		mu 0 4 40 41 61 60
		f 4 28 -33 -32 -31
		mu 0 4 62 65 64 63
		f 4 31 -35 24 -34
		mu 0 4 63 64 38 39
		f 4 25 -38 -37 -36
		mu 0 4 44 45 67 66
		f 4 36 -41 -40 -39
		mu 0 4 66 67 69 68
		f 4 39 -43 26 -42
		mu 0 4 70 71 50 51
		f 4 0 44 -46 -44
		mu 0 4 14 11 73 72
		f 4 3 46 -48 -45
		mu 0 4 11 26 74 73
		f 4 -3 43 50 -49
		mu 0 4 35 14 72 75
		f 4 20 54 -56 -53
		mu 0 4 12 1 77 76
		f 4 -20 51 58 -57
		mu 0 4 13 19 79 78
		f 4 22 62 -64 -61
		mu 0 4 15 0 81 80
		f 4 -2 64 65 -63
		mu 0 4 0 16 82 81
		f 4 -22 59 66 -65
		mu 0 4 16 27 83 82
		f 4 4 70 -72 -69
		mu 0 4 17 33 85 84
		f 4 -6 67 74 -73
		mu 0 4 18 10 87 86
		f 4 -12 75 76 -55
		mu 0 4 1 3 88 77
		f 4 -16 56 79 -78
		mu 0 4 2 13 78 89
		f 4 -11 80 81 -76
		mu 0 4 3 4 90 88
		f 4 -17 77 84 -83
		mu 0 4 5 2 89 91
		f 4 -10 85 86 -81
		mu 0 4 6 9 93 92
		f 4 -18 82 89 -88
		mu 0 4 7 8 95 94
		f 4 -9 68 90 -86
		mu 0 4 9 17 84 93
		f 4 -19 87 91 -68
		mu 0 4 10 7 94 87
		f 4 27 92 -94 -52
		mu 0 4 19 20 96 79
		f 4 29 52 -97 -95
		mu 0 4 21 12 76 97
		f 4 30 97 -99 -93
		mu 0 4 22 25 99 98
		f 4 32 94 -102 -100
		mu 0 4 23 24 101 100
		f 4 33 48 -103 -98
		mu 0 4 25 35 75 99
		f 4 34 99 -104 -47
		mu 0 4 26 23 100 74
		f 4 35 104 -106 -60
		mu 0 4 27 29 102 83
		f 4 37 60 -109 -107
		mu 0 4 28 15 80 103
		f 4 38 109 -111 -105
		mu 0 4 29 30 104 102
		f 4 40 106 -114 -112
		mu 0 4 31 28 103 105
		f 4 41 72 -115 -110
		mu 0 4 32 18 86 106
		f 4 42 111 -116 -71
		mu 0 4 33 34 107 85;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
createNode transform -n "polySurface1";
createNode transform -n "polySurface2" -p "polySurface1";
createNode mesh -n "polySurfaceShape2" -p "polySurface2";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".pv" -type "double2" 0.59072989225387573 0.5 ;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr ".bw" 3;
	setAttr ".dr" 3;
	setAttr ".dsm" 2;
createNode transform -n "transform3" -p "polySurface1";
	setAttr ".v" no;
createNode mesh -n "polySurfaceShape1" -p "transform3";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr -s 2 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".pv" -type "double2" 0.48402976989746094 0.70537225902080536 ;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr ".dr" 3;
	setAttr ".dsm" 2;
createNode transform -n "pPlane1";
	setAttr ".t" -type "double3" 1.0956195561701101 0 0.098162879020673444 ;
createNode mesh -n "pPlaneShape1" -p "pPlane1";
	setAttr -k off ".v";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".pv" -type "double2" 0.5 0.48392516374588018 ;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 298 ".pt";
	setAttr ".pt[2]" -type "float3" 0.0021610502 0.3746146 0.0022328384 ;
	setAttr ".pt[3]" -type "float3" 0 0.4581849 0 ;
	setAttr ".pt[4]" -type "float3" 0 0.12168711 0 ;
	setAttr ".pt[18]" -type "float3" 0 0.092664324 0 ;
	setAttr ".pt[19]" -type "float3" 0 0.23413615 0 ;
	setAttr ".pt[24]" -type "float3" 0 0.045832481 0 ;
	setAttr ".pt[25]" -type "float3" 0.016077897 0.45100176 0.036638483 ;
	setAttr ".pt[26]" -type "float3" 0.011893097 0.48528704 0.012288145 ;
	setAttr ".pt[27]" -type "float3" 0 0.26788083 0 ;
	setAttr ".pt[34]" -type "float3" 0 0.38619366 0 ;
	setAttr ".pt[35]" -type "float3" 0 0.46779579 0 ;
	setAttr ".pt[36]" -type "float3" 0 0.46622598 0 ;
	setAttr ".pt[37]" -type "float3" 0 0.45630592 0 ;
	setAttr ".pt[38]" -type "float3" 0 0.42227295 0 ;
	setAttr ".pt[39]" -type "float3" -0.0018902877 0.35014406 0.0019530819 ;
	setAttr ".pt[40]" -type "float3" -0.0024812059 0.026589127 0.00096879684 ;
	setAttr ".pt[41]" -type "float3" 0 0.46145272 0 ;
	setAttr ".pt[42]" -type "float3" 0 0.48652115 0 ;
	setAttr ".pt[43]" -type "float3" 0 0.33465475 0 ;
	setAttr ".pt[46]" -type "float3" 0 0.21424958 0 ;
	setAttr ".pt[47]" -type "float3" 0 0.47698659 0 ;
	setAttr ".pt[48]" -type "float3" 0.014630849 0.54941535 0.014368635 ;
	setAttr ".pt[49]" -type "float3" 0.024294253 0.30740833 0.0096593453 ;
	setAttr ".pt[56]" -type "float3" 0.0054056388 0.18769555 0.0055851946 ;
	setAttr ".pt[57]" -type "float3" 0 0.48656458 0 ;
	setAttr ".pt[58]" -type "float3" 0 0.48672599 0 ;
	setAttr ".pt[59]" -type "float3" -0.0080322791 0.48658895 0.0082990685 ;
	setAttr ".pt[60]" -type "float3" -0.014226981 0.48552307 0.031099932 ;
	setAttr ".pt[61]" -type "float3" -0.0072483313 0.48379514 0.052838448 ;
	setAttr ".pt[62]" -type "float3" -0.0057695787 0.48288313 0.060708452 ;
	setAttr ".pt[63]" -type "float3" -0.056543969 0.5016672 0.054527022 ;
	setAttr ".pt[64]" -type "float3" 0 0.48222846 0 ;
	setAttr ".pt[65]" -type "float3" 0 0.48672599 0 ;
	setAttr ".pt[66]" -type "float3" 0 0.47557655 0 ;
	setAttr ".pt[69]" -type "float3" 0 0.40993991 0 ;
	setAttr ".pt[70]" -type "float3" 0 0.48672566 0 ;
	setAttr ".pt[71]" -type "float3" 0 0.48523995 0 ;
	setAttr ".pt[76]" -type "float3" 0 0.080166638 0 ;
	setAttr ".pt[77]" -type "float3" 0 0.46344626 0 ;
	setAttr ".pt[78]" -type "float3" 0 0.46237361 0 ;
	setAttr ".pt[79]" -type "float3" 0.0015078933 0.017037246 0.0016005116 ;
	setAttr ".pt[80]" -type "float3" 0.013496944 0.45027944 0.013945295 ;
	setAttr ".pt[81]" -type "float3" 0 0.48559994 0 ;
	setAttr ".pt[82]" -type "float3" -0.028958062 0.48548192 0.013481373 ;
	setAttr ".pt[83]" -type "float3" -0.043180089 0.74605262 0.042078931 ;
	setAttr ".pt[84]" -type "float3" -0.020550461 0.94995451 0.063204043 ;
	setAttr ".pt[85]" -type "float3" -0.0070429072 0.97776657 0.097343117 ;
	setAttr ".pt[86]" -type "float3" -0.047901448 0.82765436 0.094130941 ;
	setAttr ".pt[87]" -type "float3" -0.045797981 0.93816018 0.0016120684 ;
	setAttr ".pt[88]" -type "float3" -0.0018950176 0.61179841 -0.0014171212 ;
	setAttr ".pt[89]" -type "float3" 0 0.48596767 0 ;
	setAttr ".pt[92]" -type "float3" -0.011468265 0.3722153 0.026178483 ;
	setAttr ".pt[93]" -type "float3" -0.0024459893 0.48533958 0.036628243 ;
	setAttr ".pt[94]" -type "float3" 0.012037281 0.48576117 0.026769839 ;
	setAttr ".pt[99]" -type "float3" 0.00060275313 0.19300428 0.00062277517 ;
	setAttr ".pt[100]" -type "float3" 0 0.48663223 0 ;
	setAttr ".pt[101]" -type "float3" 0 0.48672584 0 ;
	setAttr ".pt[102]" -type "float3" 0 0.48165104 0 ;
	setAttr ".pt[106]" -type "float3" 0 0.4286617 0 ;
	setAttr ".pt[107]" -type "float3" 0 0.48672599 0 ;
	setAttr ".pt[108]" -type "float3" 0.0053138076 0.62691033 0.0069452086 ;
	setAttr ".pt[109]" -type "float3" -0.0067161256 0.90529037 0.010447357 ;
	setAttr ".pt[110]" -type "float3" -0.017163141 0.78350073 -0.010230036 ;
	setAttr ".pt[111]" -type "float3" -0.021008724 0.95545954 -0.018058058 ;
	setAttr ".pt[112]" -type "float3" 0 0.48612472 0 ;
	setAttr ".pt[113]" -type "float3" 0 0.028630942 0 ;
	setAttr ".pt[115]" -type "float3" -0.0090998299 0.24694544 0.0088035241 ;
	setAttr ".pt[116]" -type "float3" -0.0073027248 0.87959617 0.045969967 ;
	setAttr ".pt[117]" -type "float3" 0.038328048 0.71308243 0.033745196 ;
	setAttr ".pt[118]" -type "float3" 0.0070420811 0.15663612 0.0035346325 ;
	setAttr ".pt[121]" -type "float3" 0 0.049626965 0 ;
	setAttr ".pt[123]" -type "float3" 0.003307122 0.45912066 0.0034169748 ;
	setAttr ".pt[124]" -type "float3" 0 0.48672202 0 ;
	setAttr ".pt[125]" -type "float3" 0 0.48672166 0 ;
	setAttr ".pt[126]" -type "float3" 0 0.36849347 0 ;
	setAttr ".pt[129]" -type "float3" -0.00053863862 0.088828728 0.0027809527 ;
	setAttr ".pt[130]" -type "float3" 0.0058858721 0.48543972 0.01215263 ;
	setAttr ".pt[131]" -type "float3" 0.002949266 0.48670748 0.0030472302 ;
	setAttr ".pt[132]" -type "float3" 0.021350292 0.82945192 -0.012671876 ;
	setAttr ".pt[133]" -type "float3" 0.0088749481 0.55948383 -0.034044459 ;
	setAttr ".pt[134]" -type "float3" -0.018395027 0.81679678 -0.042976294 ;
	setAttr ".pt[135]" -type "float3" 0 0.38963345 0 ;
	setAttr ".pt[138]" -type "float3" -0.0019298808 0.2403706 -0.00083761715 ;
	setAttr ".pt[139]" -type "float3" -0.0073792981 0.95326263 -0.026262481 ;
	setAttr ".pt[140]" -type "float3" 0.045528907 0.78755963 -0.021445725 ;
	setAttr ".pt[141]" -type "float3" 0.0054215565 0.15861389 -0.00023764998 ;
	setAttr ".pt[142]" -type "float3" 0 0.043900777 0 ;
	setAttr ".pt[143]" -type "float3" 0 0.47425759 0 ;
	setAttr ".pt[144]" -type "float3" 0 0.47694933 0 ;
	setAttr ".pt[145]" -type "float3" 0 0.11452377 0 ;
	setAttr ".pt[147]" -type "float3" 0 0.42676598 0 ;
	setAttr ".pt[148]" -type "float3" 0 0.47966683 0 ;
	setAttr ".pt[149]" -type "float3" 0 0.27734962 0 ;
	setAttr ".pt[152]" -type "float3" -0.00064968271 0.19277382 0.0016143309 ;
	setAttr ".pt[153]" -type "float3" 2.7582088e-005 0.09629859 0.0010018694 ;
	setAttr ".pt[154]" -type "float3" 0.021280058 0.47503123 0.01839591 ;
	setAttr ".pt[155]" -type "float3" 0.0011042891 0.46765098 0.0011409711 ;
	setAttr ".pt[156]" -type "float3" -0.0015706081 0.059127498 -0.0016227784 ;
	setAttr ".pt[162]" -type "float3" -0.0020705315 0.55655241 -0.037171755 ;
	setAttr ".pt[163]" -type "float3" 0.020666879 0.41579375 -0.028781557 ;
	setAttr ".pt[165]" -type "float3" 0 0.20352297 0 ;
	setAttr ".pt[166]" -type "float3" 0 0.4862037 0 ;
	setAttr ".pt[167]" -type "float3" 0 0.48428729 0 ;
	setAttr ".pt[168]" -type "float3" 0 0.11834122 0 ;
	setAttr ".pt[171]" -type "float3" 0.00024888557 0.072378606 -0.0028456224 ;
	setAttr ".pt[174]" -type "float3" -0.0015589555 0.19223218 0.0012773521 ;
	setAttr ".pt[175]" -type "float3" -0.0033103693 0.52787793 0.0049579837 ;
	setAttr ".pt[176]" -type "float3" 0.00039422736 0.52550906 0.0051381411 ;
	setAttr ".pt[177]" -type "float3" 0 0.037521839 0 ;
	setAttr ".pt[178]" -type "float3" 0.00078261062 0.024791574 0.00068871171 ;
	setAttr ".pt[181]" -type "float3" 0 0.076349176 0 ;
	setAttr ".pt[189]" -type "float3" 0 0.28633189 0 ;
	setAttr ".pt[190]" -type "float3" 0 0.21593928 0 ;
	setAttr ".pt[193]" -type "float3" -0.00050072611 0.17369288 -0.000517359 ;
	setAttr ".pt[194]" -type "float3" -0.0043482678 0.6615296 0.016315058 ;
	setAttr ".pt[195]" -type "float3" 0.021540966 0.52455121 0.012468535 ;
	setAttr ".pt[197]" -type "float3" -0.0012022272 0.13809548 0.0003575249 ;
	setAttr ".pt[198]" -type "float3" -0.0029020447 0.53086257 0.00089134689 ;
	setAttr ".pt[199]" -type "float3" 0.00047391691 0.53097159 0.00015809177 ;
	setAttr ".pt[200]" -type "float3" 0.0043343874 0.43009311 0.00014986828 ;
	setAttr ".pt[201]" -type "float3" -7.8696758e-008 -1.2767565e-015 -8.7899025e-008 ;
	setAttr ".pt[203]" -type "float3" -4.0233135e-007 0.30115238 1.5180558e-007 ;
	setAttr ".pt[204]" -type "float3" 9.1525726e-007 0.48290461 -5.2154064e-008 ;
	setAttr ".pt[205]" -type "float3" 0 0.37563723 0 ;
	setAttr ".pt[216]" -type "float3" 0 0.19278167 0 ;
	setAttr ".pt[217]" -type "float3" 0.0091177355 0.74281728 -0.021016702 ;
	setAttr ".pt[218]" -type "float3" -0.0076264967 0.42856443 -0.0071541942 ;
	setAttr ".pt[219]" -type "float3" -0.034286134 -0.26843575 0.0072496142 ;
	setAttr ".pt[220]" -type "float3" 0 0.02422137 0 ;
	setAttr ".pt[221]" -type "float3" -0.0029746913 0.51911396 -0.0011213506 ;
	setAttr ".pt[222]" -type "float3" 0.00037286602 0.53097236 -0.00016006081 ;
	setAttr ".pt[223]" -type "float3" 0.0048514102 0.47611111 -7.6197663e-005 ;
	setAttr ".pt[224]" -type "float3" -1.1827797e-007 -8.8817842e-016 6.1649189e-008 ;
	setAttr ".pt[225]" -type "float3" 0 -8.8817842e-016 0 ;
	setAttr ".pt[226]" -type "float3" -4.2840838e-007 0.47099239 5.4948032e-008 ;
	setAttr ".pt[227]" -type "float3" 0.0046396325 0.099066392 -0.016909638 ;
	setAttr ".pt[228]" -type "float3" -0.043797616 0.14275892 -0.011783404 ;
	setAttr ".pt[230]" -type "float3" 0 0.24957949 0 ;
	setAttr ".pt[231]" -type "float3" 0 0.33679166 0 ;
	setAttr ".pt[233]" -type "float3" 0 0.055227816 0 ;
	setAttr ".pt[234]" -type "float3" 0 0.092046365 0 ;
	setAttr ".pt[238]" -type "float3" -0.006350812 0.52391088 -0.0065634223 ;
	setAttr ".pt[240]" -type "float3" -0.0013407343 0.30072358 -0.019146325 ;
	setAttr ".pt[241]" -type "float3" 0.0098180966 0.25311023 -0.016859224 ;
	setAttr ".pt[242]" -type "float3" 0.00045466915 0.039038304 0.00029406822 ;
	setAttr ".pt[243]" -type "float3" -0.021017233 0.34500808 -0.0062643378 ;
	setAttr ".pt[244]" -type "float3" -0.010951408 0.35698637 -0.024164299 ;
	setAttr ".pt[245]" -type "float3" 5.2967382e-005 0.42386872 -0.0034863488 ;
	setAttr ".pt[246]" -type "float3" 0.0014277053 0.19407326 -0.0010398193 ;
	setAttr ".pt[247]" -type "float3" 4.0885061e-007 -4.4408921e-016 4.4703484e-008 ;
	setAttr ".pt[248]" -type "float3" 0 -4.4408921e-016 2.220446e-016 ;
	setAttr ".pt[249]" -type "float3" 0.039140791 0.23166475 -0.0021561731 ;
	setAttr ".pt[250]" -type "float3" 0.015589938 0.16148767 -0.03551285 ;
	setAttr ".pt[251]" -type "float3" -0.0680378 0.088003062 -0.027167244 ;
	setAttr ".pt[252]" -type "float3" 3.5576522e-007 -4.2674198e-016 -3.7718564e-008 ;
	setAttr ".pt[253]" -type "float3" 0 0.48533389 1.0776579e-016 ;
	setAttr ".pt[254]" -type "float3" 0 0.48672318 1.0807427e-016 ;
	setAttr ".pt[255]" -type "float3" -0.037961274 0.41610542 0.01159781 ;
	setAttr ".pt[256]" -type "float3" 0 0.46342686 1.0290144e-016 ;
	setAttr ".pt[257]" -type "float3" 0 0.48251274 1.0713935e-016 ;
	setAttr ".pt[258]" -type "float3" 0 0.095822141 2.1276789e-017 ;
	setAttr ".pt[266]" -type "float3" -0.00023500643 0.039558943 0.00048544572 ;
	setAttr ".pt[267]" -type "float3" 0.0011119156 0.076088086 -0.0034300236 ;
	setAttr ".pt[268]" -type "float3" -3.8464816e-007 0.014072197 5.2503361e-007 ;
	setAttr ".pt[269]" -type "float3" 2.5588088e-007 0.0038174575 1.4810801e-007 ;
	setAttr ".pt[270]" -type "float3" 8.5914508e-008 0 0 ;
	setAttr ".pt[272]" -type "float3" 0.06709297 -0.076424107 -0.0057324427 ;
	setAttr ".pt[273]" -type "float3" 0.035252787 0.49261621 -0.048781991 ;
	setAttr ".pt[274]" -type "float3" -0.045458745 0.093756109 -0.035576541 ;
	setAttr ".pt[275]" -type "float3" -7.301569e-007 0 0 ;
	setAttr ".pt[276]" -type "float3" 0 0.4860763 0 ;
	setAttr ".pt[277]" -type "float3" 0 0.48672599 0 ;
	setAttr ".pt[278]" -type "float3" -0.055651862 0.46820936 0.00052262825 ;
	setAttr ".pt[279]" -type "float3" 0 0.48569855 0 ;
	setAttr ".pt[280]" -type "float3" 0 0.48672581 0 ;
	setAttr ".pt[281]" -type "float3" 0 0.42270243 0 ;
	setAttr ".pt[287]" -type "float3" 0 4.3021142e-016 2.5291229e-008 ;
	setAttr ".pt[288]" -type "float3" 9.8953024e-009 4.4408921e-016 2.5611371e-008 ;
	setAttr ".pt[289]" -type "float3" 0.00046667506 0.25922087 0.0024782615 ;
	setAttr ".pt[290]" -type "float3" 0.01712051 0.45010033 -0.0042730314 ;
	setAttr ".pt[291]" -type "float3" -2.0974724e-007 3.1978897e-023 -1.4402015e-007 ;
	setAttr ".pt[292]" -type "float3" 7.481234e-007 2.4923008e-023 -1.1224325e-007 ;
	setAttr ".pt[293]" -type "float3" -2.587185e-007 4.4408921e-016 -2.0227162e-009 ;
	setAttr ".pt[294]" -type "float3" 0 4.4408921e-016 2.220446e-016 ;
	setAttr ".pt[295]" -type "float3" 0.069513932 -0.059912279 -0.0083564445 ;
	setAttr ".pt[296]" -type "float3" 0.060640581 0.34411737 -0.041891105 ;
	setAttr ".pt[297]" -type "float3" -0.036789432 0.463328 -0.018594887 ;
	setAttr ".pt[298]" -type "float3" 0.011032283 0.060189508 0.003017914 ;
	setAttr ".pt[299]" -type "float3" 0 0.27173358 0 ;
	setAttr ".pt[300]" -type "float3" 0 0.4649806 0 ;
	setAttr ".pt[301]" -type "float3" -0.023059964 0.20278805 -0.0013319416 ;
	setAttr ".pt[302]" -type "float3" 0 0.48082501 0 ;
	setAttr ".pt[303]" -type "float3" 0 0.48672605 0 ;
	setAttr ".pt[304]" -type "float3" 0 0.48356712 0 ;
	setAttr ".pt[308]" -type "float3" -0.0028991476 0.39788619 0.0028068058 ;
	setAttr ".pt[309]" -type "float3" -9.0209678e-006 0.0036439006 1.0006193e-005 ;
	setAttr ".pt[310]" -type "float3" -0.00092465489 0.018708248 0.00058420701 ;
	setAttr ".pt[311]" -type "float3" -0.01707536 0.37425479 0.025091376 ;
	setAttr ".pt[312]" -type "float3" 1.0896474e-007 0.059170611 1.1175871e-008 ;
	setAttr ".pt[313]" -type "float3" 5.581544e-007 1.1169864e-022 -5.0304595e-007 ;
	setAttr ".pt[314]" -type "float3" -2.9423049e-007 1.7821626e-022 -8.0261469e-007 ;
	setAttr ".pt[315]" -type "float3" 1.1322525e-006 1.3776128e-022 -6.2042164e-007 ;
	setAttr ".pt[318]" -type "float3" 0.038834721 0.093820587 -0.0042074071 ;
	setAttr ".pt[319]" -type "float3" 0.088884227 0.14531806 -0.013606037 ;
	setAttr ".pt[320]" -type "float3" -0.024158863 0.47687462 -0.013886153 ;
	setAttr ".pt[321]" -type "float3" 0.016097469 0.07815221 -0.0021431246 ;
	setAttr ".pt[325]" -type "float3" 0 0.38360357 0 ;
	setAttr ".pt[326]" -type "float3" 0 0.48672506 0 ;
	setAttr ".pt[327]" -type "float3" 0 0.48657131 0 ;
	setAttr ".pt[328]" -type "float3" 0 0.0095137069 0 ;
	setAttr ".pt[332]" -type "float3" -0.0010699836 0.10856304 0.0018020624 ;
	setAttr ".pt[333]" -type "float3" 0 0.0019087296 -9.8720193e-008 ;
	setAttr ".pt[334]" -type "float3" 0.018233025 0.090090461 0.017254965 ;
	setAttr ".pt[335]" -type "float3" -0.0042754086 0.42042741 -0.0040405518 ;
	setAttr ".pt[336]" -type "float3" -0.016677992 -0.13633776 -0.0054218522 ;
	setAttr ".pt[337]" -type "float3" -3.2649729e-007 -9.4991412e-023 4.2780329e-007 ;
	setAttr ".pt[338]" -type "float3" 2.0236253e-007 -3.5743982e-023 1.6097658e-007 ;
	setAttr ".pt[341]" -type "float3" 0.019795109 -0.13952199 0.012034631 ;
	setAttr ".pt[342]" -type "float3" 0.027797941 0.32545227 0.017725926 ;
	setAttr ".pt[343]" -type "float3" -0.0014954358 0.36381549 0.00043154508 ;
	setAttr ".pt[349]" -type "float3" 0 0.48262969 0 ;
	setAttr ".pt[350]" -type "float3" 0 0.4808878 0 ;
	setAttr ".pt[351]" -type "float3" 0 0.038174588 0 ;
	setAttr ".pt[355]" -type "float3" 0 0.070016682 0 ;
	setAttr ".pt[356]" -type "float3" 0.029985137 0.13602333 -0.031911481 ;
	setAttr ".pt[357]" -type "float3" 0.01092802 0.0023204319 -0.012730351 ;
	setAttr ".pt[358]" -type "float3" -0.055972438 0.0019775683 0.0066292896 ;
	setAttr ".pt[359]" -type "float3" -0.054807004 -0.46351022 0.0054470799 ;
	setAttr ".pt[360]" -type "float3" 0.0028535498 -0.20195383 -0.0034503906 ;
	setAttr ".pt[364]" -type "float3" -3.6135316e-007 1.7208457e-015 4.8428774e-008 ;
	setAttr ".pt[365]" -type "float3" -1.1175871e-007 1.7208457e-015 -1.4901161e-008 ;
	setAttr ".pt[366]" -type "float3" 8.5681677e-007 1.7069679e-015 1.0430813e-007 ;
	setAttr ".pt[372]" -type "float3" 0 0.11261503 0 ;
	setAttr ".pt[373]" -type "float3" 0 0.12597615 0 ;
	setAttr ".pt[378]" -type "float3" 0 0.43352094 0 ;
	setAttr ".pt[379]" -type "float3" 0.016237807 0.045761958 -0.0017078226 ;
	setAttr ".pt[380]" -type "float3" -0.020589218 0.0010020921 0.023814233 ;
	setAttr ".pt[381]" -type "float3" -0.054346714 -0.099051006 0.035080861 ;
	setAttr ".pt[382]" -type "float3" -0.023830639 -0.48414114 0.0019440308 ;
	setAttr ".pt[383]" -type "float3" 0.0086366301 -0.1270702 -0.011454259 ;
	setAttr ".pt[384]" -type "float3" 0 0.30811384 0 ;
	setAttr ".pt[385]" -type "float3" 0 0.09925393 0 ;
	setAttr ".pt[387]" -type "float3" -3.5110861e-007 2.1094237e-015 -3.4132972e-007 ;
	setAttr ".pt[388]" -type "float3" 8.7916851e-007 2.1094237e-015 -2.1234155e-007 ;
	setAttr ".pt[389]" -type "float3" 7.0454553e-007 2.1094237e-015 -3.8556755e-007 ;
	setAttr ".pt[401]" -type "float3" 0 0.29181105 0 ;
	setAttr ".pt[402]" -type "float3" 0.00090438855 0.39318734 0.0094998544 ;
	setAttr ".pt[403]" -type "float3" -0.025785672 -0.034765985 0.046804018 ;
	setAttr ".pt[404]" -type "float3" -0.029483918 -0.39113075 0.03177556 ;
	setAttr ".pt[405]" -type "float3" 0.0010905999 -0.017143551 -0.00011105501 ;
	setAttr ".pt[406]" -type "float3" 0 0.4624556 0 ;
	setAttr ".pt[407]" -type "float3" 0 0.4867118 0 ;
	setAttr ".pt[408]" -type "float3" 0 0.42893946 0 ;
	setAttr ".pt[410]" -type "float3" 0 0.072254762 0 ;
	setAttr ".pt[411]" -type "float3" 0 0.40513849 0 ;
	setAttr ".pt[412]" -type "float3" 0 0.20455591 0 ;
	setAttr ".pt[429]" -type "float3" 6.7759487e-010 0.48503405 0.0013197166 ;
	setAttr ".pt[430]" -type "float3" 0.00064085907 0.48671854 0.00066214526 ;
	setAttr ".pt[431]" -type "float3" 0 0.4075098 0 ;
	setAttr ".pt[433]" -type "float3" 0 0.47272187 0 ;
	setAttr ".pt[434]" -type "float3" 0 0.4867245 0 ;
	setAttr ".pt[435]" -type "float3" 0 0.45319611 0 ;
	setAttr ".pt[439]" -type "float3" 0 0.1266432 0 ;
	setAttr ".pt[440]" -type "float3" 0 0.23903008 0 ;
	setAttr ".pt[452]" -type "float3" 0.0016768117 0.4294934 0.04867053 ;
	setAttr ".pt[453]" -type "float3" 0.014791773 0.44709012 0.037489161 ;
	setAttr ".pt[456]" -type "float3" 0 0.48658869 0 ;
	setAttr ".pt[457]" -type "float3" 0 0.48672587 0 ;
	setAttr ".pt[458]" -type "float3" 0 0.42728183 0 ;
	setAttr ".pt[460]" -type "float3" 0 0.39054251 0 ;
	setAttr ".pt[461]" -type "float3" 0 0.48562759 0 ;
	setAttr ".pt[462]" -type "float3" 0 0.48671722 0 ;
	setAttr ".pt[463]" -type "float3" 0 0.48662364 0 ;
	setAttr ".pt[464]" -type "float3" 0 0.30202091 0 ;
	setAttr ".pt[474]" -type "float3" 0 0.47503328 0 ;
	setAttr ".pt[475]" -type "float3" 0 0.4859803 0 ;
	setAttr ".pt[476]" -type "float3" 0 0.40915453 0 ;
	setAttr ".pt[478]" -type "float3" 0 0.1014995 0 ;
	setAttr ".pt[479]" -type "float3" 0 0.48662382 0 ;
	setAttr ".pt[480]" -type "float3" 0 0.48667338 0 ;
	setAttr ".pt[481]" -type "float3" 0 0.070910245 0 ;
	setAttr ".pt[483]" -type "float3" 0 0.48652613 0 ;
	setAttr ".pt[484]" -type "float3" 0 0.48672599 0 ;
	setAttr ".pt[485]" -type "float3" 0 0.48672563 0 ;
	setAttr ".pt[486]" -type "float3" 0 0.48585224 0 ;
	setAttr ".pt[487]" -type "float3" 0 0.22282732 0 ;
	setAttr ".pt[496]" -type "float3" 0 0.41952506 0 ;
	setAttr ".pt[497]" -type "float3" 0 0.48672575 0 ;
	setAttr ".pt[498]" -type "float3" 0 0.48672572 0 ;
	setAttr ".pt[499]" -type "float3" 0 0.45032185 0 ;
	setAttr ".pt[502]" -type "float3" 0 0.43471652 0 ;
	setAttr ".pt[503]" -type "float3" 0 0.41853648 0 ;
	setAttr ".pt[506]" -type "float3" 0 0.45712441 0 ;
	setAttr ".pt[507]" -type "float3" 0 0.47934908 0 ;
	setAttr ".pt[508]" -type "float3" 0 0.3628051 0 ;
	setAttr ".pt[519]" -type "float3" 0 0.32747811 0 ;
	setAttr ".pt[520]" -type "float3" 0 0.48407048 0 ;
	setAttr ".pt[521]" -type "float3" 0 0.46826813 0 ;
createNode transform -n "directionalLight1";
	setAttr ".t" -type "double3" 3.3466720130397078 2.8580229079588628 4.1026836383476919 ;
	setAttr ".r" -type "double3" -18.312103650506145 12.381292003216029 14.131068591145626 ;
createNode directionalLight -n "directionalLightShape1" -p "directionalLight1";
	setAttr -k off ".v";
	setAttr ".cl" -type "float3" 0.88267201 0.93833601 0.99400002 ;
	setAttr ".urs" yes;
	setAttr ".sc" -type "float3" 0.084031433 0.084031433 0.084031433 ;
	setAttr ".shr" 16;
	setAttr ".lang" 2;
createNode lightLinker -s -n "lightLinker1";
	setAttr -s 5 ".lnk";
	setAttr -s 5 ".slnk";
createNode displayLayerManager -n "layerManager";
createNode displayLayer -n "defaultLayer";
createNode renderLayerManager -n "renderLayerManager";
createNode renderLayer -n "defaultRenderLayer";
	setAttr ".g" yes;
createNode polySphere -n "polySphere1";
	setAttr ".r" 4.4106400294622947;
createNode deleteComponent -n "deleteComponent1";
	setAttr ".dc" -type "componentList" 2 "f[0:179]" "f[360:379]";
createNode polyExtrudeFace -n "polyExtrudeFace1";
	setAttr ".ics" -type "componentList" 1 "f[0:199]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0.041407340302676232 0 -0.020424635417008119 1;
	setAttr ".ws" yes;
	setAttr ".pvt" -type "float3" 0.041406862 2.2053201 -0.020425351 ;
	setAttr ".rs" 62219;
	setAttr ".lt" -type "double3" -9.1593399531575415e-016 6.591949208711867e-017 -0.25749483075268315 ;
	setAttr ".c[0]"  0 1 1;
	setAttr ".cbn" -type "double3" -4.3692338530872163 0 -4.4310667824812171 ;
	setAttr ".cbx" -type "double3" 4.4520475800182524 4.4106402397155762 4.3902160811357263 ;
createNode polyCube -n "polyCube1";
	setAttr ".w" 5.70128714447684;
	setAttr ".h" 3.9770528305802322;
	setAttr ".d" 3.0105798257835201;
	setAttr ".cuv" 4;
createNode polySplitRing -n "polySplitRing1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 2 "e[6:7]" "e[10:11]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 4.8456276321056695 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".wt" 0.4806596040725708;
	setAttr ".re" 7;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polyTweak -n "polyTweak1";
	setAttr ".uopa" yes;
	setAttr -s 4 ".tk[2:5]" -type "float3"  0 -1.78322899 0 0 -1.78322899
		 0 0 -1.78322899 0 0 -1.78322899 0;
createNode polyBevel -n "polyBevel1";
	setAttr ".ics" -type "componentList" 3 "e[14]" "e[16]" "e[18:19]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 4.8456276321056695 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".ws" yes;
	setAttr ".oaf" yes;
	setAttr ".o" 0.77018633628298783;
	setAttr ".sg" 4;
	setAttr ".at" 180;
	setAttr ".fn" yes;
	setAttr ".mv" yes;
	setAttr ".mvt" 0.0001;
	setAttr ".sa" 30;
	setAttr ".ma" 180;
createNode polyTweak -n "polyTweak2";
	setAttr ".uopa" yes;
	setAttr -s 2 ".tk[8:9]" -type "float3"  0 0.42789203 0 0 0.42789203
		 0;
createNode polyBevel -n "polyBevel2";
	setAttr ".ics" -type "componentList" 1 "e[1:2]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 4.8456276321056695 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".ws" yes;
	setAttr ".oaf" yes;
	setAttr ".o" 0.77018633628298783;
	setAttr ".sg" 3;
	setAttr ".at" 180;
	setAttr ".fn" yes;
	setAttr ".mv" yes;
	setAttr ".mvt" 0.0001;
	setAttr ".sa" 30;
	setAttr ".ma" 180;
createNode polyTweak -n "polyTweak3";
	setAttr ".uopa" yes;
	setAttr -s 10 ".tk[8:17]" -type "float3"  0 0.2141266 0 0 0.2141266
		 0 0 0.2141266 0 0 0.16800164 0 0 0.16800164 0 0 0.2141266 0 0 0.2141266 0 0 0.2141266
		 0 0 0.16800164 0 0 0.16800164 0;
createNode deleteComponent -n "deleteComponent2";
	setAttr ".dc" -type "componentList" 3 "f[3:5]" "f[7:13]" "f[18:25]";
createNode deleteComponent -n "deleteComponent3";
	setAttr ".dc" -type "componentList" 1 "f[16:17]";
createNode deleteComponent -n "deleteComponent4";
	setAttr ".dc" -type "componentList" 1 "f[14:15]";
createNode polyExtrudeFace -n "polyExtrudeFace2";
	setAttr ".ics" -type "componentList" 1 "f[0:13]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 3.1811500139524611 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".ws" yes;
	setAttr ".pvt" -type "float3" 3.18115 1.3406302 -0.034132 ;
	setAttr ".rs" 48334;
	setAttr ".lt" -type "double3" 0 -1.1102230246251563e-016 -0.43731415522804817 ;
	setAttr ".c[0]"  0 1 1;
	setAttr ".cbn" -type "double3" 0.33050637915631853 1.9020008901193819e-007 -1.1055273931674912 ;
	setAttr ".cbx" -type "double3" 6.0317936487486037 2.6812601799385538 1.0372633939666518 ;
createNode polyBoolOp -n "polyBoolOp1";
	setAttr -s 2 ".ip";
	setAttr -s 2 ".im";
	setAttr ".op" 2;
	setAttr ".uth" yes;
createNode groupId -n "groupId1";
	setAttr ".ihi" 0;
createNode groupId -n "groupId2";
	setAttr ".ihi" 0;
createNode groupId -n "groupId3";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts1";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:419]";
createNode groupId -n "groupId4";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts2";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:463]";
	setAttr ".gi" 5;
createNode deleteComponent -n "deleteComponent5";
	setAttr ".dc" -type "componentList" 9 "f[374]" "f[379:381]" "f[383]" "f[399]" "f[416:418]" "f[431:433]" "f[450:451]" "f[453:460]" "f[462:463]";
createNode deleteComponent -n "deleteComponent6";
	setAttr ".dc" -type "componentList" 4 "f[396]" "f[409:411]" "f[420:422]" "f[439]";
createNode deleteComponent -n "deleteComponent7";
	setAttr ".dc" -type "componentList" 1 "f[416]";
createNode deleteComponent -n "deleteComponent8";
	setAttr ".dc" -type "componentList" 1 "f[430]";
createNode polySplit -n "polySplit1";
	setAttr -s 2 ".e[0:1]"  0 0;
	setAttr -s 2 ".d[0:1]"  -2147482849 -2147482802;
createNode polySplit -n "polySplit2";
	setAttr -s 2 ".e[0:1]"  0 1;
	setAttr -s 2 ".d[0:1]"  -2147482798 -2147482849;
createNode polySplit -n "polySplit3";
	setAttr -s 2 ".e[0:1]"  1 0;
	setAttr -s 2 ".d[0:1]"  -2147482821 -2147482880;
createNode polySplit -n "polySplit4";
	setAttr -s 2 ".e[0:1]"  0 0;
	setAttr -s 2 ".d[0:1]"  -2147482821 -2147482883;
createNode polySplit -n "polySplit5";
	setAttr -s 2 ".e[0:1]"  0 0;
	setAttr -s 2 ".d[0:1]"  -2147482889 -2147482818;
createNode polySplit -n "polySplit6";
	setAttr -s 3 ".e[0:2]"  1 0.32113856 1;
	setAttr -s 3 ".d[0:2]"  -2147482800 -2147482896 -2147482896;
createNode polySplit -n "polySplit7";
	setAttr -s 2 ".e[0:1]"  1 0;
	setAttr -s 2 ".d[0:1]"  -2147482900 -2147482774;
createNode polyDelEdge -n "polyDelEdge1";
	setAttr ".ics" -type "componentList" 1 "e[874]";
	setAttr ".cv" yes;
createNode polyDelEdge -n "polyDelEdge2";
	setAttr ".ics" -type "componentList" 1 "e[859:860]";
	setAttr ".cv" yes;
createNode polyDelEdge -n "polyDelEdge3";
	setAttr ".ics" -type "componentList" 1 "e[853:854]";
	setAttr ".cv" yes;
createNode polyDelEdge -n "polyDelEdge4";
	setAttr ".ics" -type "componentList" 2 "e[849:850]" "e[854]";
	setAttr ".cv" yes;
createNode polyTweak -n "polyTweak4";
	setAttr ".uopa" yes;
	setAttr -s 4 ".tk";
	setAttr ".tk[407]" -type "float3" 0.0029425831 -0.058447249 0.0086009856 ;
	setAttr ".tk[418]" -type "float3" 0 2.3841858e-007 0 ;
	setAttr ".tk[422]" -type "float3" 2.3841858e-007 0 0 ;
	setAttr ".tk[423]" -type "float3" 0.011695342 -0.066899382 0.042328782 ;
createNode polyDelEdge -n "polyDelEdge5";
	setAttr ".ics" -type "componentList" 2 "e[841:842]" "e[844]";
	setAttr ".cv" yes;
createNode polyMergeVert -n "polyMergeVert1";
	setAttr ".ics" -type "componentList" 1 "vtx[411:412]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode polyTweak -n "polyTweak5";
	setAttr ".uopa" yes;
	setAttr -s 2 ".tk[411:412]" -type "float3"  -0.0026180744 0.001073122
		 0.013166736 0.0026180744 -0.0010728836 -0.013166736;
createNode polyMergeVert -n "polyMergeVert2";
	setAttr ".ics" -type "componentList" 1 "vtx[375:376]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode polyTweak -n "polyTweak6";
	setAttr ".uopa" yes;
	setAttr -s 2 ".tk[375:376]" -type "float3"  -0.0026192665 0.001073122
		 0.013166837 0.0026192665 -0.0010728836 -0.013166837;
createNode polySplit -n "polySplit8";
	setAttr -s 2 ".e[0:1]"  0 0;
	setAttr -s 2 ".d[0:1]"  -2147482824 -2147482847;
createNode polyTweak -n "polyTweak7";
	setAttr ".uopa" yes;
	setAttr ".tk[375]" -type "float3"  0 -0.021921707 0;
createNode polySplit -n "polySplit9";
	setAttr -s 2 ".e[0:1]"  1 1;
	setAttr -s 2 ".d[0:1]"  -2147482827 -2147482848;
createNode polySplit -n "polySplit10";
	setAttr -s 2 ".e[0:1]"  0 0;
	setAttr -s 2 ".d[0:1]"  -2147482895 -2147482945;
createNode polySplit -n "polySplit11";
	setAttr -s 2 ".e[0:1]"  1 1;
	setAttr -s 2 ".d[0:1]"  -2147482898 -2147482947;
createNode polyAppend -n "polyAppend1";
	setAttr -s 3 ".d[0:2]"  -2147482889 -2147482859 -2147482892;
	setAttr ".tx" 1;
createNode groupParts -n "groupParts3";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:430]";
	setAttr ".gi" 6;
createNode polyAppend -n "polyAppend2";
	setAttr -s 4 ".d[0:3]"  -2147482802 -2147482857 -2147482836 -2147482817;
	setAttr ".tx" 1;
createNode groupParts -n "groupParts4";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:431]";
	setAttr ".gi" 7;
createNode polyAppend -n "polyAppend3";
	setAttr -s 3 ".d[0:2]"  -2147482862 -2147482861 -2147482837;
	setAttr ".tx" 1;
createNode groupParts -n "groupParts5";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:432]";
	setAttr ".gi" 8;
createNode polyAppend -n "polyAppend4";
	setAttr -s 4 ".d[0:3]"  -2147482801 -2147482816 -2147482819 -2147482838;
	setAttr ".tx" 1;
createNode groupId -n "groupId5";
	setAttr ".ihi" 0;
createNode polySplitRing -n "polySplitRing2";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 19 "e[297:298]" "e[342]" "e[383]" "e[423]" "e[460]" "e[500]" "e[533]" "e[572]" "e[601]" "e[636]" "e[661]" "e[692]" "e[713]" "e[740]" "e[761]" "e[784]" "e[791]" "e[810]" "e[831:841]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".wt" 0.071183785796165466;
	setAttr ".re" 837;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polySplitRing -n "polySplitRing3";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 28 "e[298]" "e[342]" "e[423]" "e[500]" "e[572]" "e[636]" "e[692]" "e[740]" "e[784]" "e[810]" "e[832:833]" "e[836]" "e[840:841]" "e[848]" "e[853]" "e[855]" "e[861]" "e[863]" "e[865]" "e[867]" "e[869]" "e[871]" "e[873]" "e[875]" "e[877]" "e[879]" "e[881]" "e[883]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".wt" 0.94695955514907837;
	setAttr ".dr" no;
	setAttr ".re" 848;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polySplitRing -n "polySplitRing4";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 44 "e[229:230]" "e[257]" "e[295]" "e[299:300]" "e[341]" "e[344]" "e[381]" "e[384]" "e[422]" "e[425]" "e[458]" "e[461]" "e[499]" "e[502]" "e[531]" "e[534]" "e[571]" "e[574]" "e[599]" "e[602]" "e[635]" "e[638]" "e[659]" "e[662]" "e[691]" "e[694]" "e[711]" "e[714]" "e[739]" "e[742]" "e[759]" "e[762]" "e[783]" "e[786]" "e[789]" "e[792]" "e[809]" "e[811]" "e[814]" "e[830]" "e[866]" "e[907]" "e[926]" "e[967]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".wt" 0.014763739891350269;
	setAttr ".re" 830;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polySplitRing -n "polySplitRing5";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 23 "e[0:1]" "e[6:7]" "e[12:14]" "e[23:26]" "e[28]" "e[31]" "e[36]" "e[39]" "e[45]" "e[49]" "e[53]" "e[57]" "e[61]" "e[65]" "e[69]" "e[73]" "e[78]" "e[83]" "e[88]" "e[95]" "e[100]" "e[107]" "e[112]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 3.1811500139524611 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".wt" 0.98729687929153442;
	setAttr ".dr" no;
	setAttr ".re" 25;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polyTweak -n "polyTweak8";
	setAttr ".uopa" yes;
	setAttr -s 30 ".tk";
	setAttr ".tk[0]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[2]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[9]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[10]" -type "float3" 2.6221838 0 -6.9388939e-018 ;
	setAttr ".tk[11]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[12]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[13]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[14]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[15]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[16]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[17]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[22]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[23]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[24]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[25]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[30]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[33]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[34]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[37]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[38]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[41]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[42]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[45]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[47]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[49]" -type "float3" 2.6221838 0 -6.9388939e-018 ;
	setAttr ".tk[51]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[52]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[54]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[56]" -type "float3" 2.6221838 0 0 ;
	setAttr ".tk[58]" -type "float3" 2.6221838 0 0 ;
createNode polySplitRing -n "polySplitRing6";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 5 "e[2:3]" "e[47]" "e[50]" "e[142]" "e[146]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 3.1811500139524611 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".wt" 0.025658654049038887;
	setAttr ".re" 47;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode polySplitRing -n "polySplitRing7";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 5 "e[21:22]" "e[63]" "e[66]" "e[172]" "e[175]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 0.71175357631401426 0 3.1811500139524611 1.9885264152901161 -0.034131999600419682 1;
	setAttr ".wt" 0.97752141952514648;
	setAttr ".dr" no;
	setAttr ".re" 63;
	setAttr ".sma" 29.999999999999996;
	setAttr ".div" 8;
	setAttr ".p[0]"  0 0 1;
	setAttr ".fq" yes;
createNode deleteComponent -n "deleteComponent9";
	setAttr ".dc" -type "componentList" 15 "f[30]" "f[32]" "f[35]" "f[37]" "f[39]" "f[41]" "f[43]" "f[45:46]" "f[48]" "f[50]" "f[52]" "f[54]" "f[56]" "f[90]" "f[96]";
createNode script -n "uiConfigurationScriptNode";
	setAttr ".b" -type "string" (
		"// Maya Mel UI Configuration File.\n//\n//  This script is machine generated.  Edit at your own risk.\n//\n//\n\nglobal string $gMainPane;\nif (`paneLayout -exists $gMainPane`) {\n\n\tglobal int $gUseScenePanelConfig;\n\tint    $useSceneConfig = $gUseScenePanelConfig;\n\tint    $menusOkayInPanels = `optionVar -q allowMenusInPanels`;\tint    $nVisPanes = `paneLayout -q -nvp $gMainPane`;\n\tint    $nPanes = 0;\n\tstring $editorName;\n\tstring $panelName;\n\tstring $itemFilterName;\n\tstring $panelConfig;\n\n\t//\n\t//  get current state of the UI\n\t//\n\tsceneUIReplacement -update $gMainPane;\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Top View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"top\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n"
		+ "                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -objectFilterShowInHUD 1\n                -isFiltered 0\n"
		+ "                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n"
		+ "                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"top\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n"
		+ "            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n"
		+ "            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n"
		+ "            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Side View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"side\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n"
		+ "                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n"
		+ "                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n"
		+ "                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"side\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n"
		+ "            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n"
		+ "            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -shadows 0\n            $editorName;\n"
		+ "modelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Front View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"front\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n"
		+ "                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n"
		+ "                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n"
		+ "                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"front\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n"
		+ "            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n"
		+ "            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Persp View\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n                -displayLights \"all\" \n                -displayAppearance \"smoothShaded\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 1\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n"
		+ "                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -rendererName \"base_OpenGL_Renderer\" \n                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n"
		+ "                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 0\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 0\n                -clipGhosts 1\n                -shadows 0\n                $editorName;\n"
		+ "modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"persp\" \n            -useInteractiveMode 0\n            -displayLights \"all\" \n            -displayAppearance \"smoothShaded\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 1\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n"
		+ "            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n"
		+ "            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 0\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 0\n            -clipGhosts 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"outlinerPanel\" (localizedPanelLabel(\"Outliner\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `outlinerPanel -unParent -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels `;\n"
		+ "\t\t\t$editorName = $panelName;\n            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 0\n                -showConnected 1\n                -showAnimCurvesOnly 0\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 1\n                -showAssets 1\n                -showContainedOnly 1\n                -showPublishedAsConnected 0\n                -showContainerContents 1\n                -ignoreDagHierarchy 0\n                -expandConnections 0\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 0\n                -highlightActive 1\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n"
		+ "                -transmitFilters 0\n                -setFilter \"defaultSetFilter\" \n                -showSetMembers 1\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\toutlinerPanel -edit -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\t$editorName = $panelName;\n        outlinerEditor -e \n            -showShapes 1\n            -showReferenceNodes 0\n            -showReferenceMembers 0\n            -showAttributes 0\n            -showConnected 1\n            -showAnimCurvesOnly 0\n            -showMuteInfo 0\n            -organizeByLayer 1\n            -showAnimLayerWeight 1\n            -autoExpandLayers 1\n            -autoExpand 0\n            -showDagOnly 1\n            -showAssets 1\n            -showContainedOnly 1\n            -showPublishedAsConnected 0\n            -showContainerContents 1\n            -ignoreDagHierarchy 0\n            -expandConnections 0\n            -showUpstreamCurves 1\n            -showUnitlessCurves 1\n            -showCompounds 1\n            -showLeafs 1\n            -showNumericAttrsOnly 0\n            -highlightActive 1\n            -autoSelectNewObjects 0\n            -doNotSelectNewObjects 0\n            -dropIsParent 1\n            -transmitFilters 0\n            -setFilter \"defaultSetFilter\" \n            -showSetMembers 1\n            -allowMultiSelection 1\n"
		+ "            -alwaysToggleSelect 0\n            -directSelect 0\n            -displayMode \"DAG\" \n            -expandObjects 0\n            -setsIgnoreFilters 1\n            -containersIgnoreFilters 0\n            -editAttrName 0\n            -showAttrValues 0\n            -highlightSecondary 0\n            -showUVAttrsOnly 0\n            -showTextureNodesOnly 0\n            -attrAlphaOrder \"default\" \n            -animLayerFilterOptions \"allAffecting\" \n            -sortOrder \"none\" \n            -longNames 0\n            -niceNames 1\n            -showNamespace 1\n            -showPinIcons 0\n            -mapMotionTrails 0\n            $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"graphEditor\" (localizedPanelLabel(\"Graph Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"graphEditor\" -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n"
		+ "            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n"
		+ "                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n"
		+ "                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                -classicMode 1\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n"
		+ "                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n"
		+ "                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n"
		+ "                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                -classicMode 1\n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dopeSheetPanel\" (localizedPanelLabel(\"Dope Sheet\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dopeSheetPanel\" -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n"
		+ "                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n"
		+ "                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n"
		+ "                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n"
		+ "                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n"
		+ "                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"clipEditorPanel\" (localizedPanelLabel(\"Trax Editor\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"clipEditorPanel\" -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n"
		+ "                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"sequenceEditorPanel\" (localizedPanelLabel(\"Camera Sequencer\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"sequenceEditorPanel\" -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n"
		+ "\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperGraphPanel\" (localizedPanelLabel(\"Hypergraph Hierarchy\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperGraphPanel\" -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n"
		+ "                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n                -heatMapDisplay 0\n                -updateSelection 1\n                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n                -range 0 0 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n                -heatMapDisplay 0\n                -updateSelection 1\n                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n                -range 0 0 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n"
		+ "                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperShadePanel\" (localizedPanelLabel(\"Hypershade\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperShadePanel\" -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"visorPanel\" (localizedPanelLabel(\"Visor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"visorPanel\" -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"nodeEditorPanel\" (localizedPanelLabel(\"Node Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"nodeEditorPanel\" -l (localizedPanelLabel(\"Node Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"NodeEditorEd\");\n            nodeEditor -e \n                -allAttributes 0\n                -allNodes 0\n                -autoSizeNodes 1\n                -createNodeCommand \"nodeEdCreateNodeCommand\" \n                -ignoreAssets 1\n                -additiveGraphingMode 0\n                -settingsChangedCallback \"nodeEdSyncControls\" \n                -traversalDepthLimit -1\n                -keyPressCommand \"nodeEdKeyPressCommand\" \n                -popupMenuScript \"nodeEdBuildPanelMenus\" \n                -island 0\n                -showShapes 1\n                -showSGShapes 0\n                -showTransforms 1\n                -syncedSelection 1\n"
		+ "                -extendToShapes 1\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Node Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"NodeEditorEd\");\n            nodeEditor -e \n                -allAttributes 0\n                -allNodes 0\n                -autoSizeNodes 1\n                -createNodeCommand \"nodeEdCreateNodeCommand\" \n                -ignoreAssets 1\n                -additiveGraphingMode 0\n                -settingsChangedCallback \"nodeEdSyncControls\" \n                -traversalDepthLimit -1\n                -keyPressCommand \"nodeEdKeyPressCommand\" \n                -popupMenuScript \"nodeEdBuildPanelMenus\" \n                -island 0\n                -showShapes 1\n                -showSGShapes 0\n                -showTransforms 1\n                -syncedSelection 1\n                -extendToShapes 1\n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n"
		+ "\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"createNodePanel\" (localizedPanelLabel(\"Create Node\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"createNodePanel\" -l (localizedPanelLabel(\"Create Node\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Create Node\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"polyTexturePlacementPanel\" (localizedPanelLabel(\"UV Texture Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"polyTexturePlacementPanel\" -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n"
		+ "\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"renderWindowPanel\" (localizedPanelLabel(\"Render View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"renderWindowPanel\" -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"blendShapePanel\" (localizedPanelLabel(\"Blend Shape\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\tblendShapePanel -unParent -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels ;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tblendShapePanel -edit -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n"
		+ "\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynRelEdPanel\" (localizedPanelLabel(\"Dynamic Relationships\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynRelEdPanel\" -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"relationshipPanel\" (localizedPanelLabel(\"Relationship Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"relationshipPanel\" -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"referenceEditorPanel\" (localizedPanelLabel(\"Reference Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"referenceEditorPanel\" -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"componentEditorPanel\" (localizedPanelLabel(\"Component Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"componentEditorPanel\" -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynPaintScriptedPanelType\" (localizedPanelLabel(\"Paint Effects\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynPaintScriptedPanelType\" -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"scriptEditorPanel\" (localizedPanelLabel(\"Script Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"scriptEditorPanel\" -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\tif ($useSceneConfig) {\n        string $configName = `getPanel -cwl (localizedPanelLabel(\"Current Layout\"))`;\n        if (\"\" != $configName) {\n\t\t\tpanelConfiguration -edit -label (localizedPanelLabel(\"Current Layout\")) \n\t\t\t\t-defaultImage \"\"\n\t\t\t\t-image \"\"\n\t\t\t\t-sc false\n\t\t\t\t-configString \"global string $gMainPane; paneLayout -e -cn \\\"single\\\" -ps 1 100 100 $gMainPane;\"\n\t\t\t\t-removeAllPanels\n\t\t\t\t-ap false\n\t\t\t\t\t(localizedPanelLabel(\"Persp View\")) \n\t\t\t\t\t\"modelPanel\"\n"
		+ "\t\t\t\t\t\"$panelName = `modelPanel -unParent -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels `;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"all\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 0\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 0\\n    -xray 0\\n    -jointXray 0\\n    -activeComponentsXray 0\\n    -displayTextures 1\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 16384\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -objectFilterShowInHUD 1\\n    -isFiltered 0\\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 1\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 0\\n    -imagePlane 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -motionTrails 0\\n    -clipGhosts 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t\t\"modelPanel -edit -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels  $panelName;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"all\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 0\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 0\\n    -xray 0\\n    -jointXray 0\\n    -activeComponentsXray 0\\n    -displayTextures 1\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 16384\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -objectFilterShowInHUD 1\\n    -isFiltered 0\\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 1\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 0\\n    -imagePlane 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -motionTrails 0\\n    -clipGhosts 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t$configName;\n\n            setNamedPanelLayout (localizedPanelLabel(\"Current Layout\"));\n        }\n\n        panelHistory -e -clear mainPanelHistory;\n        setFocus `paneLayout -q -p1 $gMainPane`;\n        sceneUIReplacement -deleteRemaining;\n        sceneUIReplacement -clear;\n\t}\n\n\ngrid -spacing 5 -size 12 -divisions 5 -displayAxes yes -displayGridLines yes -displayDivisionLines yes -displayPerspectiveLabels no -displayOrthographicLabels no -displayAxesBold yes -perspectiveLabelPosition axis -orthographicLabelPosition edge;\nviewManip -drawCompass 0 -compassAngle 0 -frontParameters \"\" -homeParameters \"\" -selectionLockParameters \"\";\n}\n");
	setAttr ".st" 3;
createNode script -n "sceneConfigurationScriptNode";
	setAttr ".b" -type "string" "playbackOptions -min 1 -max 24 -ast 1 -aet 48 ";
	setAttr ".st" 6;
createNode polyPlane -n "polyPlane1";
	setAttr ".w" 43.694371305082434;
	setAttr ".h" 42.289613281132446;
	setAttr ".sw" 22;
	setAttr ".sh" 22;
	setAttr ".cuv" 2;
createNode lambert -n "lambert2";
createNode shadingEngine -n "lambert2SG";
	setAttr ".ihi" 0;
	setAttr ".ro" yes;
createNode materialInfo -n "materialInfo1";
createNode file -n "file1";
	setAttr ".ftn" -type "string" "D:/3D models//TO-DO/igloo/snow.jpg";
createNode place2dTexture -n "place2dTexture1";
createNode polyTweakUV -n "polyTweakUV1";
	setAttr ".uopa" yes;
	setAttr -s 529 ".uvtk";
	setAttr ".uvtk[0:249]" -type "float2" 2.46952224 2.39012814 2.24502039 2.39012814
		 2.020518303 2.39012814 1.79601645 2.39012814 1.57151413 2.39012814 1.34701204 2.39012814
		 1.12251019 2.39012814 0.89800829 2.39012814 0.67350614 2.39012814 0.44900399 2.39012814
		 0.22450194 2.39012814 0 2.39012814 -0.22450209 2.39012814 -0.44900432 2.39012814
		 -0.67350602 2.39012814 -0.89800829 2.39012814 -1.12251043 2.39012814 -1.34701228
		 2.39012814 -1.57151461 2.39012814 -1.79601657 2.39012814 -2.020518541 2.39012814
		 -2.24502039 2.39012814 -2.46952224 2.39012814 2.46952224 2.17284369 2.24502039 2.17284369
		 2.020518303 2.17284369 1.79601645 2.17284369 1.57151413 2.17284369 1.34701204 2.17284369
		 1.12251019 2.17284369 0.89800829 2.17284369 0.67350614 2.17284369 0.44900399 2.17284369
		 0.22450194 2.17284369 0 2.17284369 -0.22450209 2.17284369 -0.44900432 2.17284369
		 -0.67350602 2.17284369 -0.89800829 2.17284369 -1.12251043 2.17284369 -1.34701228
		 2.17284369 -1.57151461 2.17284369 -1.79601657 2.17284369 -2.020518541 2.17284369
		 -2.24502039 2.17284369 -2.46952224 2.17284369 2.46952224 1.95555925 2.24502039 1.95555925
		 2.020518303 1.95555925 1.79601645 1.95555925 1.57151413 1.95555925 1.34701204 1.95555925
		 1.12251019 1.95555925 0.89800829 1.95555925 0.67350614 1.95555925 0.44900399 1.95555925
		 0.22450194 1.95555925 0 1.95555925 -0.22450209 1.95555925 -0.44900432 1.95555925
		 -0.67350602 1.95555925 -0.89800829 1.95555925 -1.12251043 1.95555925 -1.34701228
		 1.95555925 -1.57151461 1.95555925 -1.79601657 1.95555925 -2.020518541 1.95555925
		 -2.24502039 1.95555925 -2.46952224 1.95555925 2.46952224 1.73827493 2.24502039 1.73827493
		 2.020518303 1.73827493 1.79601645 1.73827493 1.57151413 1.73827493 1.34701204 1.73827493
		 1.12251019 1.73827493 0.89800829 1.73827493 0.67350614 1.73827493 0.44900399 1.73827493
		 0.22450194 1.73827493 0 1.73827493 -0.22450209 1.73827493 -0.44900432 1.73827493
		 -0.67350602 1.73827493 -0.89800829 1.73827493 -1.12251043 1.73827493 -1.34701228
		 1.73827493 -1.57151461 1.73827493 -1.79601657 1.73827493 -2.020518541 1.73827493
		 -2.24502039 1.73827493 -2.46952224 1.73827493 2.46952224 1.52099049 2.24502039 1.52099049
		 2.020518303 1.52099049 1.79601645 1.52099049 1.57151413 1.52099049 1.34701204 1.52099049
		 1.12251019 1.52099049 0.89800829 1.52099049 0.67350614 1.52099049 0.44900399 1.52099049
		 0.22450194 1.52099049 0 1.52099049 -0.22450209 1.52099049 -0.44900432 1.52099049
		 -0.67350602 1.52099049 -0.89800829 1.52099049 -1.12251043 1.52099049 -1.34701228
		 1.52099049 -1.57151461 1.52099049 -1.79601657 1.52099049 -2.020518541 1.52099049
		 -2.24502039 1.52099049 -2.46952224 1.52099049 2.46952224 1.30370605 2.24502039 1.30370605
		 2.020518303 1.30370605 1.79601645 1.30370605 1.57151413 1.30370605 1.34701204 1.30370605
		 1.12251019 1.30370605 0.89800829 1.30370605 0.67350614 1.30370605 0.44900399 1.30370605
		 0.22450194 1.30370605 0 1.30370605 -0.22450209 1.30370605 -0.44900432 1.30370605
		 -0.67350602 1.30370605 -0.89800829 1.30370605 -1.12251043 1.30370605 -1.34701228
		 1.30370605 -1.57151461 1.30370605 -1.79601657 1.30370605 -2.020518541 1.30370605
		 -2.24502039 1.30370605 -2.46952224 1.30370605 2.46952224 1.086421847 2.24502039 1.086421847
		 2.020518303 1.086421847 1.79601645 1.086421847 1.57151413 1.086421847 1.34701204
		 1.086421847 1.12251019 1.086421847 0.89800829 1.086421847 0.67350614 1.086421847
		 0.44900399 1.086421847 0.22450194 1.086421847 0 1.086421847 -0.22450209 1.086421847
		 -0.44900432 1.086421847 -0.67350602 1.086421847 -0.89800829 1.086421847 -1.12251043
		 1.086421847 -1.34701228 1.086421847 -1.57151461 1.086421847 -1.79601657 1.086421847
		 -2.020518541 1.086421847 -2.24502039 1.086421847 -2.46952224 1.086421847 2.46952224
		 0.86913753 2.24502039 0.86913753 2.020518303 0.86913753 1.79601645 0.86913753 1.57151413
		 0.86913753 1.34701204 0.86913753 1.12251019 0.86913753 0.89800829 0.86913753 0.67350614
		 0.86913753 0.44900399 0.86913753 0.22450194 0.86913753 0 0.86913753 -0.22450209 0.86913753
		 -0.44900432 0.86913753 -0.67350602 0.86913753 -0.89800829 0.86913753 -1.12251043
		 0.86913753 -1.34701228 0.86913753 -1.57151461 0.86913753 -1.79601657 0.86913753 -2.020518541
		 0.86913753 -2.24502039 0.86913753 -2.46952224 0.86913753 2.46952224 0.65185302 2.24502039
		 0.65185302 2.020518303 0.65185302 1.79601645 0.65185302 1.57151413 0.65185302 1.34701204
		 0.65185302 1.12251019 0.65185302 0.89800829 0.65185302 0.67350614 0.65185302 0.44900399
		 0.65185302 0.22450194 0.65185302 0 0.65185302 -0.22450209 0.65185302 -0.44900432
		 0.65185302 -0.67350602 0.65185302 -0.89800829 0.65185302 -1.12251043 0.65185302 -1.34701228
		 0.65185302 -1.57151461 0.65185302 -1.79601657 0.65185302 -2.020518541 0.65185302
		 -2.24502039 0.65185302 -2.46952224 0.65185302 2.46952224 0.43456873 2.24502039 0.43456873
		 2.020518303 0.43456873 1.79601645 0.43456873 1.57151413 0.43456873 1.34701204 0.43456873
		 1.12251019 0.43456873 0.89800829 0.43456873 0.67350614 0.43456873 0.44900399 0.43456873
		 0.22450194 0.43456873 0 0.43456873 -0.22450209 0.43456873 -0.44900432 0.43456873
		 -0.67350602 0.43456873 -0.89800829 0.43456873 -1.12251043 0.43456873 -1.34701228
		 0.43456873 -1.57151461 0.43456873 -1.79601657 0.43456873 -2.020518541 0.43456873
		 -2.24502039 0.43456873 -2.46952224 0.43456873 2.46952224 0.21728426 2.24502039 0.21728426
		 2.020518303 0.21728426 1.79601645 0.21728426 1.57151413 0.21728426 1.34701204 0.21728426
		 1.12251019 0.21728426 0.89800829 0.21728426 0.67350614 0.21728426 0.44900399 0.21728426
		 0.22450194 0.21728426 0 0.21728426 -0.22450209 0.21728426 -0.44900432 0.21728426
		 -0.67350602 0.21728426 -0.89800829 0.21728426 -1.12251043 0.21728426 -1.34701228
		 0.21728426 -1.57151461 0.21728426 -1.79601657 0.21728426;
	setAttr ".uvtk[250:499]" -2.020518541 0.21728426 -2.24502039 0.21728426 -2.46952224
		 0.21728426 2.46952224 0 2.24502039 0 2.020518303 0 1.79601645 0 1.57151413 0 1.34701204
		 0 1.12251019 0 0.89800829 0 0.67350614 0 0.44900399 0 0.22450194 0 0 0 -0.22450209
		 0 -0.44900432 0 -0.67350602 0 -0.89800829 0 -1.12251043 0 -1.34701228 0 -1.57151461
		 0 -1.79601657 0 -2.020518541 0 -2.24502039 0 -2.46952224 0 2.46952224 -0.21728426
		 2.24502039 -0.21728426 2.020518303 -0.21728426 1.79601645 -0.21728426 1.57151413
		 -0.21728426 1.34701204 -0.21728426 1.12251019 -0.21728426 0.89800829 -0.21728426
		 0.67350614 -0.21728426 0.44900399 -0.21728426 0.22450194 -0.21728426 0 -0.21728426
		 -0.22450209 -0.21728426 -0.44900432 -0.21728426 -0.67350602 -0.21728426 -0.89800829
		 -0.21728426 -1.12251043 -0.21728426 -1.34701228 -0.21728426 -1.57151461 -0.21728426
		 -1.79601657 -0.21728426 -2.020518541 -0.21728426 -2.24502039 -0.21728426 -2.46952224
		 -0.21728426 2.46952224 -0.43456882 2.24502039 -0.43456882 2.020518303 -0.43456882
		 1.79601645 -0.43456882 1.57151413 -0.43456882 1.34701204 -0.43456882 1.12251019 -0.43456882
		 0.89800829 -0.43456882 0.67350614 -0.43456882 0.44900399 -0.43456882 0.22450194 -0.43456882
		 0 -0.43456882 -0.22450209 -0.43456882 -0.44900432 -0.43456882 -0.67350602 -0.43456882
		 -0.89800829 -0.43456882 -1.12251043 -0.43456882 -1.34701228 -0.43456882 -1.57151461
		 -0.43456882 -1.79601657 -0.43456882 -2.020518541 -0.43456882 -2.24502039 -0.43456882
		 -2.46952224 -0.43456882 2.46952224 -0.65185302 2.24502039 -0.65185302 2.020518303
		 -0.65185302 1.79601645 -0.65185302 1.57151413 -0.65185302 1.34701204 -0.65185302
		 1.12251019 -0.65185302 0.89800829 -0.65185302 0.67350614 -0.65185302 0.44900399 -0.65185302
		 0.22450194 -0.65185302 0 -0.65185302 -0.22450209 -0.65185302 -0.44900432 -0.65185302
		 -0.67350602 -0.65185302 -0.89800829 -0.65185302 -1.12251043 -0.65185302 -1.34701228
		 -0.65185302 -1.57151461 -0.65185302 -1.79601657 -0.65185302 -2.020518541 -0.65185302
		 -2.24502039 -0.65185302 -2.46952224 -0.65185302 2.46952224 -0.86913776 2.24502039
		 -0.86913776 2.020518303 -0.86913776 1.79601645 -0.86913776 1.57151413 -0.86913776
		 1.34701204 -0.86913776 1.12251019 -0.86913776 0.89800829 -0.86913776 0.67350614 -0.86913776
		 0.44900399 -0.86913776 0.22450194 -0.86913776 0 -0.86913776 -0.22450209 -0.86913776
		 -0.44900432 -0.86913776 -0.67350602 -0.86913776 -0.89800829 -0.86913776 -1.12251043
		 -0.86913776 -1.34701228 -0.86913776 -1.57151461 -0.86913776 -1.79601657 -0.86913776
		 -2.020518541 -0.86913776 -2.24502039 -0.86913776 -2.46952224 -0.86913776 2.46952224
		 -1.086421967 2.24502039 -1.086421967 2.020518303 -1.086421967 1.79601645 -1.086421967
		 1.57151413 -1.086421967 1.34701204 -1.086421967 1.12251019 -1.086421967 0.89800829
		 -1.086421967 0.67350614 -1.086421967 0.44900399 -1.086421967 0.22450194 -1.086421967
		 0 -1.086421967 -0.22450209 -1.086421967 -0.44900432 -1.086421967 -0.67350602 -1.086421967
		 -0.89800829 -1.086421967 -1.12251043 -1.086421967 -1.34701228 -1.086421967 -1.57151461
		 -1.086421967 -1.79601657 -1.086421967 -2.020518541 -1.086421967 -2.24502039 -1.086421967
		 -2.46952224 -1.086421967 2.46952224 -1.30370629 2.24502039 -1.30370629 2.020518303
		 -1.30370629 1.79601645 -1.30370629 1.57151413 -1.30370629 1.34701204 -1.30370629
		 1.12251019 -1.30370629 0.89800829 -1.30370629 0.67350614 -1.30370629 0.44900399 -1.30370629
		 0.22450194 -1.30370629 0 -1.30370629 -0.22450209 -1.30370629 -0.44900432 -1.30370629
		 -0.67350602 -1.30370629 -0.89800829 -1.30370629 -1.12251043 -1.30370629 -1.34701228
		 -1.30370629 -1.57151461 -1.30370629 -1.79601657 -1.30370629 -2.020518541 -1.30370629
		 -2.24502039 -1.30370629 -2.46952224 -1.30370629 2.46952224 -1.52099097 2.24502039
		 -1.52099097 2.020518303 -1.52099097 1.79601645 -1.52099097 1.57151413 -1.52099097
		 1.34701204 -1.52099097 1.12251019 -1.52099097 0.89800829 -1.52099097 0.67350614 -1.52099097
		 0.44900399 -1.52099097 0.22450194 -1.52099097 0 -1.52099097 -0.22450209 -1.52099097
		 -0.44900432 -1.52099097 -0.67350602 -1.52099097 -0.89800829 -1.52099097 -1.12251043
		 -1.52099097 -1.34701228 -1.52099097 -1.57151461 -1.52099097 -1.79601657 -1.52099097
		 -2.020518541 -1.52099097 -2.24502039 -1.52099097 -2.46952224 -1.52099097 2.46952224
		 -1.73827505 2.24502039 -1.73827505 2.020518303 -1.73827505 1.79601645 -1.73827505
		 1.57151413 -1.73827505 1.34701204 -1.73827505 1.12251019 -1.73827505 0.89800829 -1.73827505
		 0.67350614 -1.73827505 0.44900399 -1.73827505 0.22450194 -1.73827505 0 -1.73827505
		 -0.22450209 -1.73827505 -0.44900432 -1.73827505 -0.67350602 -1.73827505 -0.89800829
		 -1.73827505 -1.12251043 -1.73827505 -1.34701228 -1.73827505 -1.57151461 -1.73827505
		 -1.79601657 -1.73827505 -2.020518541 -1.73827505 -2.24502039 -1.73827505 -2.46952224
		 -1.73827505 2.46952224 -1.95555949 2.24502039 -1.95555949 2.020518303 -1.95555949
		 1.79601645 -1.95555949 1.57151413 -1.95555949 1.34701204 -1.95555949 1.12251019 -1.95555949
		 0.89800829 -1.95555949 0.67350614 -1.95555949 0.44900399 -1.95555949 0.22450194 -1.95555949
		 0 -1.95555949 -0.22450209 -1.95555949 -0.44900432 -1.95555949 -0.67350602 -1.95555949
		 -0.89800829 -1.95555949 -1.12251043 -1.95555949 -1.34701228 -1.95555949 -1.57151461
		 -1.95555949 -1.79601657 -1.95555949 -2.020518541 -1.95555949 -2.24502039 -1.95555949
		 -2.46952224 -1.95555949 2.46952224 -2.17284393 2.24502039 -2.17284393 2.020518303
		 -2.17284393 1.79601645 -2.17284393 1.57151413 -2.17284393 1.34701204 -2.17284393
		 1.12251019 -2.17284393 0.89800829 -2.17284393 0.67350614 -2.17284393 0.44900399 -2.17284393
		 0.22450194 -2.17284393 0 -2.17284393 -0.22450209 -2.17284393 -0.44900432 -2.17284393
		 -0.67350602 -2.17284393 -0.89800829 -2.17284393 -1.12251043 -2.17284393;
	setAttr ".uvtk[500:528]" -1.34701228 -2.17284393 -1.57151461 -2.17284393 -1.79601657
		 -2.17284393 -2.020518541 -2.17284393 -2.24502039 -2.17284393 -2.46952224 -2.17284393
		 2.46952224 -2.39012814 2.24502039 -2.39012814 2.020518303 -2.39012814 1.79601645
		 -2.39012814 1.57151413 -2.39012814 1.34701204 -2.39012814 1.12251019 -2.39012814
		 0.89800829 -2.39012814 0.67350614 -2.39012814 0.44900399 -2.39012814 0.22450194 -2.39012814
		 0 -2.39012814 -0.22450209 -2.39012814 -0.44900432 -2.39012814 -0.67350602 -2.39012814
		 -0.89800829 -2.39012814 -1.12251043 -2.39012814 -1.34701228 -2.39012814 -1.57151461
		 -2.39012814 -1.79601657 -2.39012814 -2.020518541 -2.39012814 -2.24502039 -2.39012814
		 -2.46952224 -2.39012814;
createNode lambert -n "lambert3";
createNode shadingEngine -n "lambert3SG";
	setAttr ".ihi" 0;
	setAttr -s 4 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 3 ".gn";
createNode materialInfo -n "materialInfo2";
createNode file -n "file2";
	setAttr ".ftn" -type "string" "D:/3D models//TO-DO/igloo/snowy_bricks.jpg";
createNode place2dTexture -n "place2dTexture2";
createNode polyPlanarProj -n "polyPlanarProj1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "f[0:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" -0.042350530624389648 2.3979348540306091 -0.020425558090209961 ;
	setAttr ".ro" -type "double3" -90 0 0 ;
	setAttr ".ps" -type "double2" 8.6537671089172363 8.8212828636169434 ;
	setAttr ".cam" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode polySphProj -n "polySphProj1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "f[0:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" -0.042350530624389648 2.3979348540306091 -0.020425558090209961 ;
	setAttr ".ps" -type "double2" 360 180 ;
	setAttr ".r" 8.8212828636169434;
createNode polyTweakUV -n "polyTweakUV2";
	setAttr ".uopa" yes;
	setAttr -s 553 ".uvtk";
	setAttr ".uvtk[0:249]" -type "float2" -0.31492391 -0.4293502 -0.27042961
		 -0.43898544 -0.54772818 -0.61675668 -0.2503694 -0.38736564 -0.15628824 -0.24192911
		 -0.15779054 -0.21359661 -0.075617865 -0.43735528 -0.23176497 -0.34589726 -0.15581319
		 -0.17501897 -0.10137829 -0.10669547 -0.09608832 -0.068382293 -0.13543482 -0.26623088
		 -0.13597606 -0.44053358 -0.21751305 -0.31402606 -0.15634644 -0.13297698 -0.092417717
		 -0.023137659 -0.019822486 -0.39861736 0.54789227 -0.23260614 0.47363567 -0.24990317
		 0.39873654 -0.26079643 -0.061097581 0.00065776706 -0.049061295 0.044689089 -0.10685009
		 -0.13956064 -0.14549579 -0.28735405 -0.18776153 -0.44727769 -0.2088882 -0.29320118
		 -0.1642811 -0.091711015 -0.093764767 0.027800292 -0.040313352 0.095923394 0.50707781
		 -0.09449324 0.43212289 -0.11766413 0.62267596 -0.2175577 0.32943624 -0.27213871 0.36160558
		 -0.13976893 -0.026656112 0.089388698 -0.0088598197 0.13721284 -0.075833753 -0.037403703
		 -0.12180673 -0.168441 -0.16974016 -0.3071326 -0.23440765 -0.45673892 -0.78490496
		 -0.65871429 -0.18461791 -0.055528075 -0.10483235 0.08304444 -0.037471857 0.15484068
		 0.0054829735 0.19293126 0.47218841 0.021240681 0.39743149 -0.0097521842 0.58692282
		 -0.072368592 0.6975534 -0.20612225 0.26564217 -0.28351599 0.2958501 -0.16077217 0.32849127
		 -0.038998872 0.0061256457 0.17075798 0.02941658 0.22125506 -0.047378819 0.048038304
		 -0.095834389 -0.070852935 -0.14485051 -0.19471079 -0.20089217 -0.32666036 -0.27863848
		 -0.46853176 -0.70154071 -0.63627648 -0.71805537 -0.64980638 -0.13165587 0.14042905
		 -0.044475272 0.22185832 0.014455872 0.25783876 0.049881872 0.28028116 0.43880177
		 0.1198754 0.36564964 0.082168013 0.55399126 0.05245325 0.67222846 -0.053659409 0.77183324
		 -0.19997719 0.20717327 -0.29474857 0.23463227 -0.18059409 0.26481193 -0.066454321
		 0.29893732 0.047281653 0.071695581 0.31711909 0.1061717 0.37039682 0.06848076 0.30137482
		 0.039534237 0.24894789 -0.019594871 0.12699375 -0.071471497 0.011582583 -0.12077464
		 -0.10102758 -0.17332552 -0.21958554 -0.23578648 -0.3467527 -0.32161042 -0.48258504
		 -0.6290952 -0.61149251 -0.63692862 -0.60299802 -0.64705688 -0.60975605 -0.067542419
		 0.29758003 0.014583157 0.33389673 0.066089198 0.34979495 0.095705017 0.36268201 0.14008088
		 0.43285903 0.13967304 0.42477581 0.17966606 0.4872092 0.40638238 0.2048527 0.33579212
		 0.16141912 0.52019036 0.15984127 0.64495289 0.082077891 0.76338553 -0.041540176 -0.20671706
		 -0.37362278 0.15382649 -0.30570525 0.17769532 -0.19934267 0.20552434 -0.091822624
		 0.23729964 0.015151352 0.27164876 0.12189361 0.10047638 0.37139592 0.036608238 0.27077368
		 0.0089861173 0.20346212 -0.047533553 0.08842206 -0.09882538 -0.021119684 -0.14947499
		 -0.12907881 -0.20520927 -0.24402979 -0.27293119 -0.36825824 -0.36496356 -0.49890584
		 -0.56536734 -0.58615434 -0.56630826 -0.5597297 -0.57454669 -0.54985344 -0.58333659
		 -0.55782807 0.00055976398 0.42394659 0.075508803 0.43273506 0.12039502 0.43532887
		 0.17337872 0.50698918 0.22079115 0.56140018 0.16984956 0.46889037 0.21512435 0.53050631
		 0.21461187 0.52993143 0.16941018 0.46829677 0.37236422 0.28477082 0.30520386 0.2361955
		 0.48561442 0.25250462 0.61267513 0.20085222 0.74744093 0.10689721 -0.19496118 -0.34368485
		 -0.17569171 -0.37741923 0.10492367 -0.31682524 0.12491043 -0.21762094 0.1502025 -0.11554497
		 0.17994295 -0.014436007 0.2123902 0.085960716 0.24415354 0.19262823 0.12643389 0.41587767
		 0.12605454 0.41528478 0.061411779 0.3249388 0.0010890309 0.22991496 -0.022833889
		 0.16342378 -0.077593789 0.054025978 -0.12880053 -0.051088661 -0.18070136 -0.15597141
		 -0.23933564 -0.26923692 -0.31206205 -0.39195734 -0.40968329 -0.51762933 -0.50851971
		 -0.56166714 -0.50392091 -0.5197584 -0.50994873 -0.49688721 -0.52031785 -0.49145859
		 -0.52745354 -0.5017857 0.073953398 0.53368479 0.14082582 0.52308226 0.20546593 0.59698695
		 0.26357329 0.65152657 0.26337567 0.60359174 0.26276085 0.6030485 0.18042441 0.46015251
		 0.22752593 0.52125549 0.22666867 0.52189982 0.17969538 0.46076006 0.22801743 0.520711
		 0.18084179 0.45962882 0.29659551 0.4282411 0.26073307 0.48012823 0.20854948 0.42065135
		 0.23903127 0.3713893 0.33480427 0.36193272 0.27214363 0.30875704 0.44790059 0.33937368
		 0.57679218 0.30396774 0.72051936 0.24046504 -0.1898347 -0.31651905 -0.17705916 -0.34575492
		 -0.14601319 -0.37708956 0.06026895 -0.32767686 0.076064602 -0.23541245 0.098374784
		 -0.1383259 0.12620978 -0.041783571 0.15707625 0.053246111 0.18762882 0.15358546 0.21491979
		 0.2617515 0.18608455 0.32173482 0.15964951 0.36922231 0.13558023 0.40743944 0.13593729
		 0.40693036 0.1349508 0.40802297 0.083923802 0.36984798 0.083596662 0.36924341 0.02258078
		 0.28387514 -0.034819905 0.19355488 -0.055817794 0.12780783 -0.10925491 0.022822678
		 -0.16028063 -0.079274535 -0.21318598 -0.18275949 -0.2748988 -0.29654631 -0.35363048
		 -0.41872981 -0.45713273 -0.53861409 -0.44838607 -0.48280305 -0.45159674 -0.44896847
		 -0.46188128 -0.43378437 -0.47354284 -0.4331125 -0.47547263 -0.43939492 0.15438835
		 0.63143635 0.23492824 0.70885229 0.30786675 0.76343584 0.31596443 0.69223052 0.31520781
		 0.69170785 0.27820551 0.59366775 0.27718261 0.5943653 0.27879894 0.59309804 0.36045125
		 0.49452817 0.31800988 0.55015004 0.40514842 0.42294291 0.5353291 0.40074816 0.68529862
		 0.35867032 -0.19149737 -0.29235357 -0.18150137 -0.31389076 -0.15722422 -0.34172666
		 -0.11627622 -0.37319398 0.019235909 -0.33848485 0.030879337 -0.25308898 0.049854647
		 -0.16054475 0.07546182 -0.06778881 0.10494334 0.023247719 0.13450141 0.11844888 0.16162272
		 0.22004843 0.13610284 0.27801731 0.11298327 0.32416549 0.091925561 0.36167726 0.092235535
		 0.36117479 0.091372728 0.3622407 0.042109009 0.32893133 0.041824993 0.32831833 -0.016105302
		 0.24717471 -0.070919916 0.16108868 -0.08963047 0.095840067 -0.14179115 -0.0058665872
		 -0.19215859 -0.10634616 -0.24587469 -0.21114498 -0.3122499 -0.32742625 -0.39861733
		 -0.44908297 -0.3991887 -0.40453887 -0.40704045 -0.3815532 -0.42083824 -0.37392989;
	setAttr ".uvtk[250:499]" -0.43053961 -0.37112159 -0.42489308 -0.36911172 -0.37911344
		 -0.29838455 -0.34141541 -0.23346514 0.37355796 0.80132055 0.37258449 0.80087197 0.334102
		 0.6814214 0.33285341 0.68218839 0.33482838 0.68081248 0.43366018 0.57321662 0.38261676
		 0.63437414 0.48623765 0.49387085 0.64009356 0.47025776 -0.19819222 -0.27096549 -0.1894341
		 -0.28408793 -0.16873662 -0.30544865 -0.13494293 -0.33315897 -0.08565481 -0.36677265
		 -0.018490262 -0.34883359 -0.010470993 -0.27097544 0.004395904 -0.18273622 0.027157176
		 -0.092917711 0.055318307 -0.0049107373 0.084236577 0.086232543 0.11106591 0.1826829
		 0.08828643 0.2389906 0.067744359 0.28408074 0.049194466 0.32098329 0.049468528 0.3204897
		 0.048705589 0.32153219 0.0009097103 0.29202184 0.00066345371 0.291412 -0.054264616
		 0.21438453 -0.10707755 0.13215461 -0.12371598 0.066921979 -0.17382048 -0.032612324
		 -0.22241341 -0.13408744 -0.27838144 -0.2437886 -0.35292614 -0.36362556 -0.35649323
		 -0.33199593 -0.36817735 -0.32012856 -0.38318729 -0.313106 -0.38902241 -0.30368322
		 -0.3520776 -0.23751821 -0.3218984 -0.17807952 -0.31012362 -0.17305343 0.39747429
		 0.79206645 0.39579397 0.79273868 0.39842358 0.79135394 0.5209716 0.6681602 0.45842198
		 0.73850858 0.58363765 0.57701683 -0.20985882 -0.24924287 -0.19979702 -0.25658494
		 -0.18135373 -0.27135512 -0.15226458 -0.29234758 -0.10973676 -0.3208853 -0.053324711
		 -0.35851836 -0.047873329 -0.28870231 -0.037576515 -0.205652 -0.018770523 -0.11817527
		 0.0074578542 -0.032094091 0.035975475 0.056366414 0.062799379 0.14876094 0.042224135
		 0.20381895 0.023822732 0.24802956 0.0071911234 0.28426793 0.0074352641 0.2837801
		 0.006754728 0.28480005 -0.039174814 0.25925547 -0.039399106 0.2586433 -0.092364654
		 0.18541121 -0.14293279 0.10683388 -0.15727417 0.041035175 -0.20270126 -0.058037728
		 -0.24941359 -0.16590899 -0.31352246 -0.28457358 -0.31715709 -0.26673046 -0.33214074
		 -0.26019579 -0.34772414 -0.24905556 -0.31733176 -0.18783419 -0.29335332 -0.13370764
		 -0.29705161 -0.12349088 -0.29739588 -0.12426694 -0.30010772 -0.17383763 -0.29970431
		 -0.17405036 -0.24971707 -0.2063306 -0.2743181 -0.18938367 -0.22747989 -0.22656107
		 -0.21284424 -0.22824562 -0.19426028 -0.24005738 -0.16909645 -0.25490749 -0.13197839
		 -0.27495608 -0.08092095 -0.30563253 -0.075109199 -0.22943836 -0.062131766 -0.14472717
		 -0.039159615 -0.059086293 -0.011235422 0.027996153 0.016267242 0.11765242 -0.0024011191
		 0.17191491 -0.018884785 0.21566814 -0.033550121 0.25163087 -0.033334978 0.25114447
		 -0.033939578 0.25215301 -0.078974888 0.23019513 -0.079171672 0.22958553 -0.13090774
		 0.16026047 -0.17704843 0.086800456 -0.18727817 0.018856913 -0.22283052 -0.084427983
		 -0.27674419 -0.21117604 -0.27579635 -0.20471022 -0.29887033 -0.20085868 -0.27345264
		 -0.14692622 -0.25563675 -0.099217832 -0.27412659 -0.084148243 -0.27439207 -0.084851563
		 -0.28914922 -0.12636442 -0.28968525 -0.12618642 -0.28882933 -0.12665816 -0.24857052
		 -0.171051 -0.26865125 -0.14756149 -0.22937556 -0.19846189 -0.20784734 -0.20797512
		 -0.18490575 -0.22163904 -0.15350132 -0.23373705 -0.10679747 -0.25329989 -0.10135384
		 -0.17392936 -0.084730402 -0.087921381 -0.058333736 0.0002129972 -0.029820925 0.088687986
		 -0.046845865 0.14268395 -0.061359379 0.18644762 -0.074063674 0.22257039 -0.073879525
		 0.22208419 -0.07440339 0.22309569 -0.11996473 0.20471922 -0.1201265 0.20411849 -0.16921823
		 0.1406692 -0.20722167 0.076464266 -0.20712136 0.0026532412 -0.23679902 -0.13539478
		 -0.23592655 -0.15236428 -0.21573867 -0.11444843 -0.20615213 -0.076743275 -0.24270631
		 -0.054842591 -0.24287809 -0.055480003 -0.26816332 -0.088663936 -0.26856619 -0.088372588
		 -0.26792216 -0.089024335 -0.23771752 -0.14239842 -0.25283274 -0.11434418 -0.22260307
		 -0.17420906 -0.19986759 -0.18891597 -0.17464457 -0.19894335 -0.13240194 -0.20566177
		 -0.12793951 -0.12179989 -0.10660456 -0.029366374 -0.076668814 0.061029673 -0.092420354
		 0.11582008 -0.10517736 0.16040263 -0.11584429 0.19700456 -0.11568935 0.19651461 -0.11612885
		 0.19753879 -0.16215269 0.18451077 -0.16225921 0.18392259 -0.20768289 0.13089573 -0.21113847
		 0.077125072 -0.20741953 0.0020262301 -0.21300794 -0.053630561 -0.22722752 -0.11737439
		 -0.23831119 -0.15358186 -0.22851984 -0.1468778 -0.20806311 -0.11165538 -0.19805817
		 -0.074423671 -0.20140605 -0.039178699 -0.20145063 -0.039729178 -0.2390001 -0.060916334
		 -0.2392474 -0.060517818 -0.23884858 -0.061340839 -0.22134791 -0.12195748 -0.2298
		 -0.090626478 -0.2123764 -0.15529829 -0.19636248 -0.1694358 -0.15968679 -0.16352344
		 -0.15801202 -0.066150188 -0.12663443 0.033349305 -0.14126633 0.091357261 -0.15148027
		 0.13836694 -0.15930997 0.17640471 -0.15920226 0.17589858 -0.15951116 0.17696851 -0.20674352
		 0.17346573 -0.20676355 0.17290819 -0.2144195 0.13155568 -0.20071499 -0.047144264
		 -0.20075051 -0.046621263 -0.2006834 -0.047648519 -0.20360236 -0.11571676 -0.20046495
		 -0.081565827 -0.20879535 -0.14528909 -0.1931334 -0.1236937 -0.18717881 0.0075248182
		 -0.19808431 0.070945382 -0.2033789 0.12362432 -0.20602421 0.16452789 -0.20599543
		 0.1639891 -0.20607825 0.16515684 -0.19125305 -0.04572618 -0.19127451 -0.046263695
		 -0.19349907 -0.081588745 -0.20038895 -0.11706012 -0.21214803 -0.1455833 -0.21531864
		 -0.14296418 -0.20906816 -0.10851228 -0.19906475 -0.045013249 -0.20083614 0.0023912787
		 -0.20999081 0.069465667 -0.21526574 0.12334266 -0.21688302 0.16452637 -0.21687619
		 0.16505378 -0.21703161 -0.14373511 -0.21337034 -0.14560392 -0.21005856 0.069948047
		 -0.20125689 0.0022677183 -0.20008023 -0.045698702 -0.21032678 -0.10915542 -0.19147746
		 -0.04575181 -0.19142585 -0.045220643 -0.21520399 0.12388104 -0.21672846 0.16559607
		 -0.21674253 0.16504979 -0.19382291 -0.081076026 -0.20094655 -0.11665604 -0.19410847
		 -0.03856343 -0.19411819 -0.039132297 -0.21486147 0.17224228 -0.2148778 0.17275929
		 -0.21446438 0.13111848 -0.21107183 0.076705813 -0.20706429 0.0019796789 -0.21233167
		 -0.053249687 -0.22630824 -0.11694548 -0.23720272 -0.15304646 -0.22774647 -0.14677492
		 -0.20770113 -0.11191198 -0.19784169 -0.074773163 -0.19398753 -0.039509952 -0.19398098
		 -0.039004296 -0.20136254 -0.0396038;
	setAttr ".uvtk[500:552]" -0.24251135 -0.055165946 -0.27381724 -0.084388554
		 -0.29664224 -0.12364668 0.37475908 0.80087125 0.31688964 0.6916886 0.26413214 0.6031
		 0.21575688 0.53003705 0.17038698 0.46844429 0.12689914 0.41545293 0.084331974 0.36943445
		 0.042470183 0.32852551 0.0012301449 0.2916255 -0.038892675 0.25886473 -0.07872425
		 0.22980723 -0.1197549 0.20432889 -0.16200899 0.18410036 -0.2067102 0.17301655 -0.21498193
		 0.17236143 -0.21495904 0.17183828 -1.21012819 -0.53003198 -1.1182673 -0.60578978
		 -0.39343011 -0.30500349 -0.46103436 -0.28538501 -1.0047341585 -0.65627158 -0.33342212
		 -0.32620999 -0.28240979 -0.34674555 -0.88158047 -0.67585623 -0.8129679 -0.70070499
		 -0.73051786 -0.67941558 -0.24044116 -0.36452058 -0.65336579 -0.63718492 -0.21158712
		 -0.33343312 -0.58397949 -0.58519948 -0.1930425 -0.31069571 -0.45558161 -0.45004731
		 -0.51889193 -0.52306938 -0.39818549 -0.37435067 -0.18516307 -0.2937665 -0.31055999
		 -0.17393082 -0.31264138 -0.23628914 -0.18572347 -0.28121707 -0.30078685 -0.17380366
		 -0.29858261 -0.23505163 -0.29757178 -0.23498321 -0.29705286 -0.23504874 -0.23655476
		 -0.24827604 -0.21199004 -0.25764236 -0.1944149 -0.26941308 -0.30960536 -0.17311521
		 -0.31136066 -0.2353023 -0.31209439 -0.23529404 -0.26549965 -0.24154095 -0.35077566
		 -0.30306894;
createNode polyMapCut -n "polyMapCut1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 16 "e[0]" "e[8]" "e[19]" "e[39]" "e[67]" "e[69]" "e[103]" "e[105]" "e[150]" "e[152]" "e[208]" "e[210]" "e[274]" "e[276]" "e[361]" "e[363]";
createNode polyTweakUV -n "polyTweakUV3";
	setAttr ".uopa" yes;
	setAttr -s 549 ".uvtk";
	setAttr ".uvtk[1]" -type "float2" 0.29827121 0.00062841177 ;
	setAttr ".uvtk[3]" -type "float2" 0.16803005 0.17911047 ;
	setAttr ".uvtk[4]" -type "float2" 0.27173948 0.012960732 ;
	setAttr ".uvtk[5]" -type "float2" 0.28573936 0.040891524 ;
	setAttr ".uvtk[7]" -type "float2" 0.21033719 0.20916235 ;
	setAttr ".uvtk[8]" -type "float2" 0.28951907 0.088521004 ;
	setAttr ".uvtk[9]" -type "float2" 0.27786851 0.0048967004 ;
	setAttr ".uvtk[10]" -type "float2" 0.29960933 0.02354449 ;
	setAttr ".uvtk[11]" -type "float2" 0.23255804 -0.0023534894 ;
	setAttr ".uvtk[13]" -type "float2" 0.24226415 0.23951042 ;
	setAttr ".uvtk[14]" -type "float2" 0.31258431 0.12856442 ;
	setAttr ".uvtk[15]" -type "float2" 0.32276279 0.049395807 ;
	setAttr ".uvtk[16]" -type "float2" 0.1004775 -0.10479698 ;
	setAttr ".uvtk[17]" -type "float2" 0.12493716 -0.16001564 ;
	setAttr ".uvtk[18]" -type "float2" 0.12756597 -0.14524263 ;
	setAttr ".uvtk[19]" -type "float2" 0.13302152 -0.13370866 ;
	setAttr ".uvtk[20]" -type "float2" 0.28393802 -0.0085362196 ;
	setAttr ".uvtk[21]" -type "float2" 0.30823675 0.0028963163 ;
	setAttr ".uvtk[22]" -type "float2" 0.25471207 -0.0068795122 ;
	setAttr ".uvtk[23]" -type "float2" 0.21979152 -0.010758676 ;
	setAttr ".uvtk[25]" -type "float2" 0.26465142 0.2731232 ;
	setAttr ".uvtk[26]" -type "float2" 0.34484169 0.16941714 ;
	setAttr ".uvtk[27]" -type "float2" 0.35502318 0.077568114 ;
	setAttr ".uvtk[28]" -type "float2" 0.33729681 0.018184543 ;
	setAttr ".uvtk[29]" -type "float2" 0.16061912 -0.17068636 ;
	setAttr ".uvtk[30]" -type "float2" 0.16245763 -0.15272915 ;
	setAttr ".uvtk[31]" -type "float2" 0.12088196 -0.17391521 ;
	setAttr ".uvtk[32]" -type "float2" 0.13570414 -0.12316224 ;
	setAttr ".uvtk[33]" -type "float2" 0.16283302 -0.136742 ;
	setAttr ".uvtk[34]" -type "float2" 0.28650609 -0.022178046 ;
	setAttr ".uvtk[35]" -type "float2" 0.311946 -0.01629556 ;
	setAttr ".uvtk[36]" -type "float2" 0.26269317 -0.015894234 ;
	setAttr ".uvtk[37]" -type "float2" 0.23941028 -0.013249695 ;
	setAttr ".uvtk[38]" -type "float2" 0.2178648 -0.014163256 ;
	setAttr ".uvtk[40]" -type "float2" 0.39093319 0.074115098 ;
	setAttr ".uvtk[41]" -type "float2" 0.38190955 0.21825767 ;
	setAttr ".uvtk[42]" -type "float2" 0.39765978 0.1095032 ;
	setAttr ".uvtk[43]" -type "float2" 0.37512082 0.035887539 ;
	setAttr ".uvtk[44]" -type "float2" 0.34331927 -0.008554101 ;
	setAttr ".uvtk[45]" -type "float2" 0.18796413 -0.17410707 ;
	setAttr ".uvtk[46]" -type "float2" 0.18690567 -0.15297031 ;
	setAttr ".uvtk[47]" -type "float2" 0.15610968 -0.18998981 ;
	setAttr ".uvtk[48]" -type "float2" 0.11466233 -0.18630031 ;
	setAttr ".uvtk[49]" -type "float2" 0.13638632 -0.11354592 ;
	setAttr ".uvtk[50]" -type "float2" 0.1617112 -0.12253242 ;
	setAttr ".uvtk[51]" -type "float2" 0.18433814 -0.13477439 ;
	setAttr ".uvtk[52]" -type "float2" 0.28654513 -0.035768799 ;
	setAttr ".uvtk[53]" -type "float2" 0.31222972 -0.034728467 ;
	setAttr ".uvtk[54]" -type "float2" 0.2656686 -0.025729537 ;
	setAttr ".uvtk[55]" -type "float2" 0.24670897 -0.019555036 ;
	setAttr ".uvtk[56]" -type "float2" 0.2307369 -0.015469909 ;
	setAttr ".uvtk[57]" -type "float2" 0.22041009 -0.013680845 ;
	setAttr ".uvtk[59]" -type "float2" 0.35711613 0.064295143 ;
	setAttr ".uvtk[60]" -type "float2" 0.3407841 0.14574876 ;
	setAttr ".uvtk[61]" -type "float2" 0.45166621 0.14995539 ;
	setAttr ".uvtk[62]" -type "float2" 0.4245486 0.05665645 ;
	setAttr ".uvtk[63]" -type "float2" 0.38366356 0.0003246069 ;
	setAttr ".uvtk[64]" -type "float2" 0.34426567 -0.033380032 ;
	setAttr ".uvtk[65]" -type "float2" 0.21112798 -0.17312557 ;
	setAttr ".uvtk[66]" -type "float2" 0.20665209 -0.15012741 ;
	setAttr ".uvtk[67]" -type "float2" 0.18630867 -0.19816738 ;
	setAttr ".uvtk[68]" -type "float2" 0.14757375 -0.21005297 ;
	setAttr ".uvtk[69]" -type "float2" 0.10575263 -0.19642285 ;
	setAttr ".uvtk[70]" -type "float2" 0.13561814 -0.10469338 ;
	setAttr ".uvtk[71]" -type "float2" 0.15946327 -0.11000746 ;
	setAttr ".uvtk[72]" -type "float2" 0.18048446 -0.11874967 ;
	setAttr ".uvtk[73]" -type "float2" 0.20101373 -0.13080883 ;
	setAttr ".uvtk[74]" -type "float2" 0.27991042 -0.062722802 ;
	setAttr ".uvtk[75]" -type "float2" 0.30416337 -0.070035517 ;
	setAttr ".uvtk[76]" -type "float2" 0.30953094 -0.053147919 ;
	setAttr ".uvtk[77]" -type "float2" 0.28422534 -0.049670823 ;
	setAttr ".uvtk[78]" -type "float2" 0.26587263 -0.035789609 ;
	setAttr ".uvtk[79]" -type "float2" 0.24927236 -0.026735544 ;
	setAttr ".uvtk[80]" -type "float2" 0.23551132 -0.019989081 ;
	setAttr ".uvtk[81]" -type "float2" 0.22632121 -0.014204323 ;
	setAttr ".uvtk[82]" -type "float2" 0.22489189 -0.010052741 ;
	setAttr ".uvtk[84]" -type "float2" 0.3304458 0.052289248 ;
	setAttr ".uvtk[85]" -type "float2" 0.31176469 0.11689347 ;
	setAttr ".uvtk[86]" -type "float2" 0.2894333 0.18062085 ;
	setAttr ".uvtk[87]" -type "float2" 0.48920891 0.083250314 ;
	setAttr ".uvtk[88]" -type "float2" 0.4363983 0.010289878 ;
	setAttr ".uvtk[89]" -type "float2" 0.38520804 -0.032574266 ;
	setAttr ".uvtk[90]" -type "float2" 0.34097812 -0.05768615 ;
	setAttr ".uvtk[91]" -type "float2" 0.3342357 -0.079666287 ;
	setAttr ".uvtk[92]" -type "float2" 0.29741713 -0.084186196 ;
	setAttr ".uvtk[93]" -type "float2" 0.32558176 -0.097722501 ;
	setAttr ".uvtk[94]" -type "float2" 0.23130982 -0.16945645 ;
	setAttr ".uvtk[95]" -type "float2" 0.22329259 -0.14555871 ;
	setAttr ".uvtk[96]" -type "float2" 0.21341948 -0.20061889 ;
	setAttr ".uvtk[97]" -type "float2" 0.17994688 -0.22549322 ;
	setAttr ".uvtk[98]" -type "float2" 0.13320725 -0.22990873 ;
	setAttr ".uvtk[99]" -type "float2" 0.062435791 -0.083131731 ;
	setAttr ".uvtk[100]" -type "float2" 0.13344257 -0.096760154 ;
	setAttr ".uvtk[101]" -type "float2" 0.15627877 -0.098805845 ;
	setAttr ".uvtk[102]" -type "float2" 0.17599873 -0.10496455 ;
	setAttr ".uvtk[103]" -type "float2" 0.19499621 -0.1142211 ;
	setAttr ".uvtk[104]" -type "float2" 0.21495524 -0.12575579 ;
	setAttr ".uvtk[105]" -type "float2" 0.27440605 -0.073768914 ;
	setAttr ".uvtk[106]" -type "float2" 0.26052222 -0.05633276 ;
	setAttr ".uvtk[107]" -type "float2" 0.26400268 -0.046233714 ;
	setAttr ".uvtk[108]" -type "float2" 0.24944639 -0.03428793 ;
	setAttr ".uvtk[109]" -type "float2" 0.23690569 -0.025442004 ;
	setAttr ".uvtk[110]" -type "float2" 0.22792983 -0.017656833 ;
	setAttr ".uvtk[111]" -type "float2" 0.22459944 -0.010127395 ;
	setAttr ".uvtk[112]" -type "float2" 0.23010789 -0.003670752 ;
	setAttr ".uvtk[114]" -type "float2" 0.30914751 0.0394696 ;
	setAttr ".uvtk[115]" -type "float2" 0.28972977 0.091413826 ;
	setAttr ".uvtk[116]" -type "float2" 0.26922888 0.14166865 ;
	setAttr ".uvtk[117]" -type "float2" 0.24415703 0.19666332 ;
	setAttr ".uvtk[118]" -type "float2" 0.50619102 0.022165656 ;
	setAttr ".uvtk[119]" -type "float2" 0.43847987 -0.033071339 ;
	setAttr ".uvtk[120]" -type "float2" 0.38083819 -0.064433545 ;
	setAttr ".uvtk[121]" -type "float2" 0.37179419 -0.09289521 ;
	setAttr ".uvtk[122]" -type "float2" 0.36022326 -0.11605951 ;
	setAttr ".uvtk[123]" -type "float2" 0.28979161 -0.096209586 ;
	setAttr ".uvtk[124]" -type "float2" 0.3159695 -0.11280915 ;
	setAttr ".uvtk[125]" -type "float2" 0.31612054 -0.11258957 ;
	setAttr ".uvtk[126]" -type "float2" 0.28991184 -0.096029758 ;
	setAttr ".uvtk[127]" -type "float2" 0.25045097 -0.16327241 ;
	setAttr ".uvtk[128]" -type "float2" 0.23878072 -0.13921392 ;
	setAttr ".uvtk[129]" -type "float2" 0.23801862 -0.19894972 ;
	setAttr ".uvtk[130]" -type "float2" 0.21170579 -0.23357052 ;
	setAttr ".uvtk[131]" -type "float2" 0.16615437 -0.25609788 ;
	setAttr ".uvtk[132]" -type "float2" 0.039067909 -0.054088414 ;
	setAttr ".uvtk[133]" -type "float2" 0.070985004 -0.075547636 ;
	setAttr ".uvtk[134]" -type "float2" 0.13020901 -0.089498222 ;
	setAttr ".uvtk[135]" -type "float2" 0.15216498 -0.088359386 ;
	setAttr ".uvtk[136]" -type "float2" 0.17097454 -0.092740715 ;
	setAttr ".uvtk[137]" -type "float2" 0.18866937 -0.099823892 ;
	setAttr ".uvtk[138]" -type "float2" 0.20683001 -0.10904855 ;
	setAttr ".uvtk[139]" -type "float2" 0.22766159 -0.11955582 ;
	setAttr ".uvtk[140]" -type "float2" 0.26817521 -0.083239496 ;
	setAttr ".uvtk[141]" -type "float2" 0.26827475 -0.083108664 ;
	setAttr ".uvtk[142]" -type "float2" 0.25605732 -0.065149538 ;
	setAttr ".uvtk[143]" -type "float2" 0.24485104 -0.050250232 ;
	setAttr ".uvtk[144]" -type "float2" 0.2477895 -0.042314589 ;
	setAttr ".uvtk[145]" -type "float2" 0.23657978 -0.031344537 ;
	setAttr ".uvtk[146]" -type "float2" 0.22772974 -0.022067398 ;
	setAttr ".uvtk[147]" -type "float2" 0.22296244 -0.012959152 ;
	setAttr ".uvtk[148]" -type "float2" 0.22453552 -0.0033747554 ;
	setAttr ".uvtk[149]" -type "float2" 0.23577975 0.0053086281 ;
	setAttr ".uvtk[151]" -type "float2" 0.29166582 0.026873976 ;
	setAttr ".uvtk[152]" -type "float2" 0.2728402 0.06889233 ;
	setAttr ".uvtk[153]" -type "float2" 0.25398475 0.10911721 ;
	setAttr ".uvtk[154]" -type "float2" 0.2328151 0.15295652 ;
	setAttr ".uvtk[155]" -type "float2" 0.20523603 0.20214409 ;
	setAttr ".uvtk[156]" -type "float2" 0.50898588 -0.035782814 ;
	setAttr ".uvtk[157]" -type "float2" 0.432354 -0.074954629 ;
	setAttr ".uvtk[158]" -type "float2" 0.41961053 -0.11192507 ;
	setAttr ".uvtk[159]" -type "float2" 0.40356264 -0.14182794 ;
	setAttr ".uvtk[160]" -type "float2" 0.34726736 -0.13508554 ;
	setAttr ".uvtk[161]" -type "float2" 0.34747007 -0.13482876 ;
	setAttr ".uvtk[162]" -type "float2" 0.28672442 -0.10025769 ;
	setAttr ".uvtk[163]" -type "float2" 0.31203303 -0.11775091 ;
	setAttr ".uvtk[164]" -type "float2" 0.3123143 -0.11741278 ;
	setAttr ".uvtk[165]" -type "float2" 0.28694013 -0.09998256 ;
	setAttr ".uvtk[166]" -type "float2" 0.31187764 -0.11794505 ;
	setAttr ".uvtk[167]" -type "float2" 0.28660336 -0.10041618 ;
	setAttr ".uvtk[168]" -type "float2" 0.28649873 -0.14268818 ;
	setAttr ".uvtk[169]" -type "float2" 0.30063865 -0.13040325 ;
	setAttr ".uvtk[170]" -type "float2" 0.27802682 -0.1105305 ;
	setAttr ".uvtk[171]" -type "float2" 0.2672756 -0.12086433 ;
	setAttr ".uvtk[172]" -type "float2" 0.26941189 -0.15410271 ;
	setAttr ".uvtk[173]" -type "float2" 0.2538791 -0.1307798 ;
	setAttr ".uvtk[174]" -type "float2" 0.26200819 -0.19355726 ;
	setAttr ".uvtk[175]" -type "float2" 0.24196224 -0.23559165 ;
	setAttr ".uvtk[176]" -type "float2" 0.20275997 -0.27324545 ;
	setAttr ".uvtk[177]" -type "float2" 0.025592491 -0.024672627 ;
	setAttr ".uvtk[178]" -type "float2" 0.056580409 -0.045846403 ;
	setAttr ".uvtk[179]" -type "float2" 0.080347642 -0.070660889 ;
	setAttr ".uvtk[180]" -type "float2" 0.12585412 -0.083077371 ;
	setAttr ".uvtk[181]" -type "float2" 0.1470881 -0.078836113 ;
	setAttr ".uvtk[182]" -type "float2" 0.16554193 -0.081424236 ;
	setAttr ".uvtk[183]" -type "float2" 0.18226998 -0.087202728 ;
	setAttr ".uvtk[184]" -type "float2" 0.19889103 -0.094713807 ;
	setAttr ".uvtk[185]" -type "float2" 0.21743904 -0.10325003 ;
	setAttr ".uvtk[186]" -type "float2" 0.23981498 -0.11194944 ;
	setAttr ".uvtk[187]" -type "float2" 0.25047204 -0.10350018 ;
	setAttr ".uvtk[188]" -type "float2" 0.25904539 -0.094970219 ;
	setAttr ".uvtk[189]" -type "float2" 0.26574382 -0.086474001 ;
	setAttr ".uvtk[190]" -type "float2" 0.26565126 -0.086603642 ;
	setAttr ".uvtk[191]" -type "float2" 0.26591346 -0.086252809 ;
	setAttr ".uvtk[192]" -type "float2" 0.25096893 -0.072890401 ;
	setAttr ".uvtk[193]" -type "float2" 0.25105059 -0.072788358 ;
	setAttr ".uvtk[194]" -type "float2" 0.24110459 -0.057412267 ;
	setAttr ".uvtk[195]" -type "float2" 0.23206802 -0.044176161 ;
	setAttr ".uvtk[196]" -type "float2" 0.23484868 -0.037729979 ;
	setAttr ".uvtk[197]" -type "float2" 0.22644931 -0.027030081 ;
	setAttr ".uvtk[198]" -type "float2" 0.2208057 -0.01686281 ;
	setAttr ".uvtk[199]" -type "float2" 0.21954483 -0.0060786307 ;
	setAttr ".uvtk[200]" -type "float2" 0.22507349 0.006187588 ;
	setAttr ".uvtk[201]" -type "float2" 0.24217325 0.017009079 ;
	setAttr ".uvtk[202]" -type "float2" 0.27688894 0.01487191 ;
	setAttr ".uvtk[203]" -type "float2" 0.25987393 0.048921674 ;
	setAttr ".uvtk[204]" -type "float2" 0.24237627 0.081310481 ;
	setAttr ".uvtk[205]" -type "float2" 0.22388507 0.11701679 ;
	setAttr ".uvtk[206]" -type "float2" 0.20187132 0.15699181 ;
	setAttr ".uvtk[207]" -type "float2" 0.16985831 0.20076567 ;
	setAttr ".uvtk[208]" -type "float2" 0.49982408 -0.091365814 ;
	setAttr ".uvtk[209]" -type "float2" 0.48155621 -0.139768 ;
	setAttr ".uvtk[210]" -type "float2" 0.45879546 -0.17823982 ;
	setAttr ".uvtk[211]" -type "float2" 0.38557014 -0.16596508 ;
	setAttr ".uvtk[212]" -type "float2" 0.38585272 -0.16562247 ;
	setAttr ".uvtk[213]" -type "float2" 0.34203133 -0.14120054 ;
	setAttr ".uvtk[214]" -type "float2" 0.34240338 -0.1407873 ;
	setAttr ".uvtk[215]" -type "float2" 0.3418214 -0.14144576 ;
	setAttr ".uvtk[216]" -type "float2" 0.30838844 -0.17120083 ;
	setAttr ".uvtk[217]" -type "float2" 0.32685253 -0.15668905 ;
	setAttr ".uvtk[218]" -type "float2" 0.28616437 -0.18399227 ;
	setAttr ".uvtk[219]" -type "float2" 0.27236071 -0.23231536 ;
	setAttr ".uvtk[220]" -type "float2" 0.24018113 -0.28205991 ;
	setAttr ".uvtk[221]" -type "float2" 0.018682048 0.0031861663 ;
	setAttr ".uvtk[222]" -type "float2" 0.04979448 -0.018693388 ;
	setAttr ".uvtk[223]" -type "float2" 0.073234007 -0.041882873 ;
	setAttr ".uvtk[224]" -type "float2" 0.089661762 -0.068342149 ;
	setAttr ".uvtk[225]" -type "float2" 0.12055121 -0.077487558 ;
	setAttr ".uvtk[226]" -type "float2" 0.14108543 -0.069973588 ;
	setAttr ".uvtk[227]" -type "float2" 0.15950011 -0.070864826 ;
	setAttr ".uvtk[228]" -type "float2" 0.17580806 -0.075543761 ;
	setAttr ".uvtk[229]" -type "float2" 0.1913095 -0.08218056 ;
	setAttr ".uvtk[230]" -type "float2" 0.20814173 -0.089458466 ;
	setAttr ".uvtk[231]" -type "float2" 0.22750489 -0.096561372 ;
	setAttr ".uvtk[232]" -type "float2" 0.23631893 -0.089398146 ;
	setAttr ".uvtk[233]" -type "float2" 0.2433518 -0.082322896 ;
	setAttr ".uvtk[234]" -type "float2" 0.24898092 -0.075506032 ;
	setAttr ".uvtk[235]" -type "float2" 0.24890395 -0.075609982 ;
	setAttr ".uvtk[236]" -type "float2" 0.24912147 -0.075328052 ;
	setAttr ".uvtk[237]" -type "float2" 0.23689343 -0.06379205 ;
	setAttr ".uvtk[238]" -type "float2" 0.23695795 -0.063693047 ;
	setAttr ".uvtk[239]" -type "float2" 0.22887366 -0.049962163 ;
	setAttr ".uvtk[240]" -type "float2" 0.22148623 -0.037883639 ;
	setAttr ".uvtk[241]" -type "float2" 0.22433621 -0.032493114 ;
	setAttr ".uvtk[242]" -type "float2" 0.21846837 -0.021493949 ;
	setAttr ".uvtk[243]" -type "float2" 0.21534365 -0.010192156 ;
	setAttr ".uvtk[244]" -type "float2" 0.21658438 0.0032550097 ;
	setAttr ".uvtk[245]" -type "float2" 0.2263608 0.018993974 ;
	setAttr ".uvtk[246]" -type "float2" 0.24988186 0.031625763 ;
	setAttr ".uvtk[247]" -type "float2" 0.23408836 0.05694592 ;
	setAttr ".uvtk[248]" -type "float2" 0.21680723 0.08632198 ;
	setAttr ".uvtk[249]" -type "float2" 0.19852318 0.11991039 ;
	setAttr ".uvtk[250]" -type "float2" 0.17392382 0.15626931 ;
	setAttr ".uvtk[251]" -type "float2" 0.13639116 0.19357967 ;
	setAttr ".uvtk[252]" -type "float2" 0.10690783 0.18175331 ;
	setAttr ".uvtk[253]" -type "float2" 0.083555564 0.16735002 ;
	setAttr ".uvtk[254]" -type "float2" 0.43328121 -0.20861077 ;
	setAttr ".uvtk[255]" -type "float2" 0.4336957 -0.20819283 ;
	setAttr ".uvtk[256]" -type "float2" 0.37845597 -0.17361915 ;
	setAttr ".uvtk[257]" -type "float2" 0.37895921 -0.17310429 ;
	setAttr ".uvtk[258]" -type "float2" 0.37817171 -0.17392272 ;
	setAttr ".uvtk[259]" -type "float2" 0.33316901 -0.209535 ;
	setAttr ".uvtk[260]" -type "float2" 0.35796276 -0.19252592 ;
	setAttr ".uvtk[261]" -type "float2" 0.30384228 -0.2234838 ;
	setAttr ".uvtk[262]" -type "float2" 0.27953646 -0.2832824 ;
	setAttr ".uvtk[263]" -type "float2" 0.016253397 0.029204279 ;
	setAttr ".uvtk[264]" -type "float2" 0.04768984 0.0057584345 ;
	setAttr ".uvtk[265]" -type "float2" 0.071526036 -0.016999066 ;
	setAttr ".uvtk[266]" -type "float2" 0.08864145 -0.0411928 ;
	setAttr ".uvtk[267]" -type "float2" 0.098657116 -0.06822297 ;
	setAttr ".uvtk[268]" -type "float2" 0.11422788 -0.073091067 ;
	setAttr ".uvtk[269]" -type "float2" 0.13385116 -0.061598241 ;
	setAttr ".uvtk[270]" -type "float2" 0.15283076 -0.060714781 ;
	setAttr ".uvtk[271]" -type "float2" 0.16938996 -0.064568669 ;
	setAttr ".uvtk[272]" -type "float2" 0.18415515 -0.070675194 ;
	setAttr ".uvtk[273]" -type "float2" 0.19942884 -0.077191293 ;
	setAttr ".uvtk[274]" -type "float2" 0.21675663 -0.083492815 ;
	setAttr ".uvtk[275]" -type "float2" 0.22430386 -0.077306211 ;
	setAttr ".uvtk[276]" -type "float2" 0.23037855 -0.071440756 ;
	setAttr ".uvtk[277]" -type "float2" 0.2352079 -0.065929055 ;
	setAttr ".uvtk[278]" -type "float2" 0.23514135 -0.066013873 ;
	setAttr ".uvtk[279]" -type "float2" 0.23532702 -0.065784633 ;
	setAttr ".uvtk[280]" -type "float2" 0.22532587 -0.055018961 ;
	setAttr ".uvtk[281]" -type "float2" 0.22537865 -0.054948926 ;
	setAttr ".uvtk[282]" -type "float2" 0.21836545 -0.04263407 ;
	setAttr ".uvtk[283]" -type "float2" 0.21256889 -0.03130427 ;
	setAttr ".uvtk[284]" -type "float2" 0.21559656 -0.026446968 ;
	setAttr ".uvtk[285]" -type "float2" 0.21152824 -0.014897406 ;
	setAttr ".uvtk[286]" -type "float2" 0.20961642 -0.0014879704 ;
	setAttr ".uvtk[287]" -type "float2" 0.21332201 0.016235769 ;
	setAttr ".uvtk[288]" -type "float2" 0.22892714 0.035983205 ;
	setAttr ".uvtk[289]" -type "float2" 0.21191727 0.059020698 ;
	setAttr ".uvtk[290]" -type "float2" 0.19465144 0.088078588 ;
	setAttr ".uvtk[291]" -type "float2" 0.17538092 0.12003964 ;
	setAttr ".uvtk[292]" -type "float2" 0.1474973 0.15157869 ;
	setAttr ".uvtk[293]" -type "float2" 0.12454002 0.14361286 ;
	setAttr ".uvtk[294]" -type "float2" 0.10629378 0.13376582 ;
	setAttr ".uvtk[295]" -type "float2" 0.06501399 0.15155816 ;
	setAttr ".uvtk[296]" -type "float2" 0.42423055 -0.21970457 ;
	setAttr ".uvtk[297]" -type "float2" 0.42488202 -0.21894181 ;
	setAttr ".uvtk[298]" -type "float2" 0.42380229 -0.22008204 ;
	setAttr ".uvtk[299]" -type "float2" 0.36091533 -0.26203966 ;
	setAttr ".uvtk[300]" -type "float2" 0.39530423 -0.24259663 ;
	setAttr ".uvtk[301]" -type "float2" 0.32114914 -0.27638429 ;
	setAttr ".uvtk[302]" -type "float2" 0.017702743 0.055199265 ;
	setAttr ".uvtk[303]" -type "float2" 0.048479721 0.02770704 ;
	setAttr ".uvtk[304]" -type "float2" 0.072823927 0.0047175586 ;
	setAttr ".uvtk[305]" -type "float2" 0.091091082 -0.018728524 ;
	setAttr ".uvtk[306]" -type "float2" 0.10260873 -0.043314457 ;
	setAttr ".uvtk[307]" -type "float2" 0.10690169 -0.069813997 ;
	setAttr ".uvtk[308]" -type "float2" 0.12528895 -0.054093659 ;
	setAttr ".uvtk[309]" -type "float2" 0.14511023 -0.050589681 ;
	setAttr ".uvtk[310]" -type "float2" 0.16255073 -0.053709693 ;
	setAttr ".uvtk[311]" -type "float2" 0.17734203 -0.059494883 ;
	setAttr ".uvtk[312]" -type "float2" 0.19158982 -0.066004753 ;
	setAttr ".uvtk[313]" -type "float2" 0.20720498 -0.071873844 ;
	setAttr ".uvtk[314]" -type "float2" 0.21398579 -0.066535234 ;
	setAttr ".uvtk[315]" -type "float2" 0.21942796 -0.061533093 ;
	setAttr ".uvtk[316]" -type "float2" 0.22388177 -0.056818426 ;
	setAttr ".uvtk[317]" -type "float2" 0.22382043 -0.056888998 ;
	setAttr ".uvtk[318]" -type "float2" 0.22398625 -0.056694746 ;
	setAttr ".uvtk[319]" -type "float2" 0.21513657 -0.046942297 ;
	setAttr ".uvtk[320]" -type "float2" 0.2151901 -0.046881799 ;
	setAttr ".uvtk[321]" -type "float2" 0.20932297 -0.035489716 ;
	setAttr ".uvtk[322]" -type "float2" 0.20491667 -0.024630822 ;
	setAttr ".uvtk[323]" -type "float2" 0.20812602 -0.019985199 ;
	setAttr ".uvtk[324]" -type "float2" 0.20394565 -0.0074862689 ;
	setAttr ".uvtk[325]" -type "float2" 0.20234068 0.01047498 ;
	setAttr ".uvtk[326]" -type "float2" 0.21086229 0.034933031 ;
	setAttr ".uvtk[327]" -type "float2" 0.19171585 0.05852598 ;
	setAttr ".uvtk[328]" -type "float2" 0.17421058 0.088562846 ;
	setAttr ".uvtk[329]" -type "float2" 0.15386806 0.11769357 ;
	setAttr ".uvtk[330]" -type "float2" 0.13566928 0.11318526 ;
	setAttr ".uvtk[331]" -type "float2" 0.12151162 0.10722131 ;
	setAttr ".uvtk[332]" -type "float2" 0.091820821 0.1228427 ;
	setAttr ".uvtk[333]" -type "float2" 0.092016086 0.12301067 ;
	setAttr ".uvtk[334]" -type "float2" 0.059270307 0.1453079 ;
	setAttr ".uvtk[335]" -type "float2" 0.0590422 0.14506075 ;
	setAttr ".uvtk[336]" -type "float2" 0.032955751 0.10673174 ;
	setAttr ".uvtk[337]" -type "float2" 0.045209453 0.12776169 ;
	setAttr ".uvtk[338]" -type "float2" 0.023421869 0.081857502 ;
	setAttr ".uvtk[339]" -type "float2" 0.05172132 0.04893136 ;
	setAttr ".uvtk[340]" -type "float2" 0.075683877 0.023865819 ;
	setAttr ".uvtk[341]" -type "float2" 0.095161244 0.0008866787 ;
	setAttr ".uvtk[342]" -type "float2" 0.10856752 -0.023430169 ;
	setAttr ".uvtk[343]" -type "float2" 0.11491315 -0.047874272 ;
	setAttr ".uvtk[344]" -type "float2" 0.1356784 -0.040552229 ;
	setAttr ".uvtk[345]" -type "float2" 0.15507101 -0.042377092 ;
	setAttr ".uvtk[346]" -type "float2" 0.1707902 -0.048368007 ;
	setAttr ".uvtk[347]" -type "float2" 0.18454729 -0.055112749 ;
	setAttr ".uvtk[348]" -type "float2" 0.19864178 -0.061194897 ;
	setAttr ".uvtk[349]" -type "float2" 0.2047898 -0.056582212 ;
	setAttr ".uvtk[350]" -type "float2" 0.20977239 -0.052372694 ;
	setAttr ".uvtk[351]" -type "float2" 0.21375458 -0.048458997 ;
	setAttr ".uvtk[352]" -type "float2" 0.21369816 -0.048514906 ;
	setAttr ".uvtk[353]" -type "float2" 0.21385224 -0.048353378 ;
	setAttr ".uvtk[354]" -type "float2" 0.20598389 -0.03916803 ;
	setAttr ".uvtk[355]" -type "float2" 0.20603628 -0.039116174 ;
	setAttr ".uvtk[356]" -type "float2" 0.20200478 -0.028375626 ;
	setAttr ".uvtk[357]" -type "float2" 0.19781514 -0.019029826 ;
	setAttr ".uvtk[358]" -type "float2" 0.20002563 -0.013898462 ;
	setAttr ".uvtk[359]" -type "float2" 0.19265832 0.0012320876 ;
	setAttr ".uvtk[360]" -type "float2" 0.19422258 0.030546963 ;
	setAttr ".uvtk[361]" -type "float2" 0.17041463 0.057488143 ;
	setAttr ".uvtk[362]" -type "float2" 0.15515672 0.08889547 ;
	setAttr ".uvtk[363]" -type "float2" 0.14037374 0.088733017 ;
	setAttr ".uvtk[364]" -type "float2" 0.13004236 0.086803615 ;
	setAttr ".uvtk[365]" -type "float2" 0.11042444 0.10005352 ;
	setAttr ".uvtk[366]" -type "float2" 0.11057489 0.1001654 ;
	setAttr ".uvtk[367]" -type "float2" 0.08732526 0.11841235 ;
	setAttr ".uvtk[368]" -type "float2" 0.08762674 0.11872721 ;
	setAttr ".uvtk[369]" -type "float2" 0.087147519 0.11823368 ;
	setAttr ".uvtk[370]" -type "float2" 0.066221699 0.089615405 ;
	setAttr ".uvtk[371]" -type "float2" 0.07629256 0.10549054 ;
	setAttr ".uvtk[372]" -type "float2" 0.057662234 0.070286661 ;
	setAttr ".uvtk[373]" -type "float2" 0.079751775 0.042100221 ;
	setAttr ".uvtk[374]" -type "float2" 0.099884734 0.018429786 ;
	setAttr ".uvtk[375]" -type "float2" 0.11547677 -0.0059626102 ;
	setAttr ".uvtk[376]" -type "float2" 0.12366585 -0.03112489 ;
	setAttr ".uvtk[377]" -type "float2" 0.14598207 -0.029996961 ;
	setAttr ".uvtk[378]" -type "float2" 0.1642375 -0.036341913 ;
	setAttr ".uvtk[379]" -type "float2" 0.17824458 -0.044154167 ;
	setAttr ".uvtk[380]" -type "float2" 0.19123998 -0.050919384 ;
	setAttr ".uvtk[381]" -type "float2" 0.19689392 -0.046974331 ;
	setAttr ".uvtk[382]" -type "float2" 0.20122339 -0.04349339 ;
	setAttr ".uvtk[383]" -type "float2" 0.20473672 -0.040376991 ;
	setAttr ".uvtk[384]" -type "float2" 0.20468904 -0.040425062 ;
	setAttr ".uvtk[385]" -type "float2" 0.2048247 -0.04029569 ;
	setAttr ".uvtk[386]" -type "float2" 0.19894327 -0.031398684 ;
	setAttr ".uvtk[387]" -type "float2" 0.19898863 -0.031357139 ;
	setAttr ".uvtk[388]" -type "float2" 0.19603933 -0.022438109 ;
	setAttr ".uvtk[389]" -type "float2" 0.19037507 -0.016917646 ;
	setAttr ".uvtk[390]" -type "float2" 0.18854268 -0.0098761171 ;
	setAttr ".uvtk[391]" -type "float2" 0.17636809 0.022646934 ;
	setAttr ".uvtk[392]" -type "float2" 0.14872983 0.060888678 ;
	setAttr ".uvtk[393]" -type "float2" 0.13672422 0.069445759 ;
	setAttr ".uvtk[394]" -type "float2" 0.13091664 0.073438168 ;
	setAttr ".uvtk[395]" -type "float2" 0.12280814 0.083103716 ;
	setAttr ".uvtk[396]" -type "float2" 0.12289922 0.083171755 ;
	setAttr ".uvtk[397]" -type "float2" 0.10706346 0.096945137 ;
	setAttr ".uvtk[398]" -type "float2" 0.10728769 0.097167939 ;
	setAttr ".uvtk[399]" -type "float2" 0.10693352 0.096820176 ;
	setAttr ".uvtk[400]" -type "float2" 0.091649994 0.075602472 ;
	setAttr ".uvtk[401]" -type "float2" 0.099023268 0.087685198 ;
	setAttr ".uvtk[402]" -type "float2" 0.085130677 0.059999108 ;
	setAttr ".uvtk[403]" -type "float2" 0.10480271 0.035523877 ;
	setAttr ".uvtk[404]" -type "float2" 0.12302773 0.010560513 ;
	setAttr ".uvtk[405]" -type "float2" 0.13309239 -0.016762614 ;
	setAttr ".uvtk[406]" -type "float2" 0.15677135 -0.021836936 ;
	setAttr ".uvtk[407]" -type "float2" 0.17311512 -0.031885833 ;
	setAttr ".uvtk[408]" -type "float2" 0.1851494 -0.040527165 ;
	setAttr ".uvtk[409]" -type "float2" 0.19064419 -0.037498146 ;
	setAttr ".uvtk[410]" -type "float2" 0.19472919 -0.034888059 ;
	setAttr ".uvtk[411]" -type "float2" 0.19774403 -0.032378167 ;
	setAttr ".uvtk[412]" -type "float2" 0.19770108 -0.032417625 ;
	setAttr ".uvtk[413]" -type "float2" 0.19782485 -0.032312006 ;
	setAttr ".uvtk[414]" -type "float2" 0.19412802 -0.024716198 ;
	setAttr ".uvtk[415]" -type "float2" 0.19415595 -0.024686873 ;
	setAttr ".uvtk[416]" -type "float2" 0.19160037 -0.019826591 ;
	setAttr ".uvtk[417]" -type "float2" 0.18946092 -0.017273068 ;
	setAttr ".uvtk[418]" -type "float2" 0.18658982 -0.0099511296 ;
	setAttr ".uvtk[419]" -type "float2" 0.1833943 -0.00049313903 ;
	setAttr ".uvtk[420]" -type "float2" 0.172481 0.019910902 ;
	setAttr ".uvtk[421]" -type "float2" 0.15998571 0.044414014 ;
	setAttr ".uvtk[422]" -type "float2" 0.14732531 0.057796836 ;
	setAttr ".uvtk[423]" -type "float2" 0.13557498 0.06791833 ;
	setAttr ".uvtk[424]" -type "float2" 0.13030027 0.072335154 ;
	setAttr ".uvtk[425]" -type "float2" 0.12815605 0.074011624 ;
	setAttr ".uvtk[426]" -type "float2" 0.12818114 0.074021339 ;
	setAttr ".uvtk[427]" -type "float2" 0.12074928 0.081159741 ;
	setAttr ".uvtk[428]" -type "float2" 0.12088542 0.081300288 ;
	setAttr ".uvtk[429]" -type "float2" 0.12066762 0.081082404 ;
	setAttr ".uvtk[430]" -type "float2" 0.1121975 0.065946102 ;
	setAttr ".uvtk[431]" -type "float2" 0.11596613 0.075095922 ;
	setAttr ".uvtk[432]" -type "float2" 0.10896055 0.052453965 ;
	setAttr ".uvtk[433]" -type "float2" 0.13111167 0.029071599 ;
	setAttr ".uvtk[434]" -type "float2" 0.14377479 -0.0037919283 ;
	setAttr ".uvtk[435]" -type "float2" 0.16927771 -0.015767381 ;
	setAttr ".uvtk[436]" -type "float2" 0.18115228 -0.029347897 ;
	setAttr ".uvtk[437]" -type "float2" 0.18687962 -0.028038718 ;
	setAttr ".uvtk[438]" -type "float2" 0.19062839 -0.026870228 ;
	setAttr ".uvtk[439]" -type "float2" 0.19325404 -0.025375068 ;
	setAttr ".uvtk[440]" -type "float2" 0.19322018 -0.02540186 ;
	setAttr ".uvtk[441]" -type "float2" 0.19331704 -0.025332332 ;
	setAttr ".uvtk[442]" -type "float2" 0.19167779 -0.020817995 ;
	setAttr ".uvtk[443]" -type "float2" 0.19168018 -0.020812482 ;
	setAttr ".uvtk[444]" -type "float2" 0.19117723 -0.019979715 ;
	setAttr ".uvtk[445]" -type "float2" 0.12771706 0.073404044 ;
	setAttr ".uvtk[446]" -type "float2" 0.12774055 0.073457599 ;
	setAttr ".uvtk[447]" -type "float2" 0.12769847 0.073382586 ;
	setAttr ".uvtk[448]" -type "float2" 0.13021581 0.064396441 ;
	setAttr ".uvtk[449]" -type "float2" 0.12772255 0.070794284 ;
	setAttr ".uvtk[450]" -type "float2" 0.1348574 0.050268978 ;
	setAttr ".uvtk[451]" -type "float2" 0.15755948 0.009668529 ;
	setAttr ".uvtk[452]" -type "float2" 0.18212321 -0.015459388 ;
	setAttr ".uvtk[453]" -type "float2" 0.18744193 -0.019089282 ;
	setAttr ".uvtk[454]" -type "float2" 0.1902744 -0.020838857 ;
	setAttr ".uvtk[455]" -type "float2" 0.19146626 -0.020911753 ;
	setAttr ".uvtk[456]" -type "float2" 0.19145565 -0.020917714 ;
	setAttr ".uvtk[457]" -type "float2" 0.19148324 -0.020911723 ;
	setAttr ".uvtk[458]" -type "float2" 0.1280394 0.073063433 ;
	setAttr ".uvtk[459]" -type "float2" 0.12805252 0.073067427 ;
	setAttr ".uvtk[460]" -type "float2" 0.12908165 0.071394473 ;
	setAttr ".uvtk[461]" -type "float2" 0.13280343 0.065642923 ;
	setAttr ".uvtk[462]" -type "float2" 0.14138661 0.051313639 ;
	setAttr ".uvtk[463]" -type "float2" 0.14980039 0.038169742 ;
	setAttr ".uvtk[464]" -type "float2" 0.16459231 0.014662415 ;
	setAttr ".uvtk[465]" -type "float2" 0.17741829 -0.0050368011 ;
	setAttr ".uvtk[466]" -type "float2" 0.18355225 -0.012539446 ;
	setAttr ".uvtk[467]" -type "float2" 0.18833272 -0.018082082 ;
	setAttr ".uvtk[468]" -type "float2" 0.19068895 -0.020279706 ;
	setAttr ".uvtk[469]" -type "float2" 0.19131766 -0.020609915 ;
	setAttr ".uvtk[470]" -type "float2" 0.19130097 -0.020586908 ;
	setAttr ".uvtk[471]" -type "float2" 0.15057394 0.038637966 ;
	setAttr ".uvtk[472]" -type "float2" 0.14185052 0.051727235 ;
	setAttr ".uvtk[473]" -type "float2" 0.18840073 -0.018012822 ;
	setAttr ".uvtk[474]" -type "float2" 0.18373899 -0.012323394 ;
	setAttr ".uvtk[475]" -type "float2" 0.17783874 -0.0046656132 ;
	setAttr ".uvtk[476]" -type "float2" 0.16513567 0.015047789 ;
	setAttr ".uvtk[477]" -type "float2" 0.12808876 0.07309112 ;
	setAttr ".uvtk[478]" -type "float2" 0.12806372 0.073097944 ;
	setAttr ".uvtk[479]" -type "float2" 0.19071828 -0.020250529 ;
	setAttr ".uvtk[480]" -type "float2" 0.19130342 -0.020599246 ;
	setAttr ".uvtk[481]" -type "float2" 0.1913235 -0.020608962 ;
	setAttr ".uvtk[482]" -type "float2" 0.12917142 0.071448028 ;
	setAttr ".uvtk[483]" -type "float2" 0.13301472 0.06577754 ;
	setAttr ".uvtk[484]" -type "float2" 0.12831698 0.073397815 ;
	setAttr ".uvtk[485]" -type "float2" 0.12832509 0.073447794 ;
	setAttr ".uvtk[486]" -type "float2" 0.19139664 -0.020627916 ;
	setAttr ".uvtk[487]" -type "float2" 0.19141643 -0.020610511 ;
	setAttr ".uvtk[488]" -type "float2" 0.19115256 -0.019990593 ;
	setAttr ".uvtk[489]" -type "float2" 0.18939559 -0.017307639 ;
	setAttr ".uvtk[490]" -type "float2" 0.18641852 -0.010058627 ;
	setAttr ".uvtk[491]" -type "float2" 0.18309622 -0.00069230795 ;
	setAttr ".uvtk[492]" -type "float2" 0.17207947 0.019662827 ;
	setAttr ".uvtk[493]" -type "float2" 0.15950006 0.044108033 ;
	setAttr ".uvtk[494]" -type "float2" 0.14705926 0.057447553 ;
	setAttr ".uvtk[495]" -type "float2" 0.13545452 0.067789346 ;
	setAttr ".uvtk[496]" -type "float2" 0.13024847 0.072273999 ;
	setAttr ".uvtk[497]" -type "float2" 0.12832747 0.073441654 ;
	setAttr ".uvtk[498]" -type "float2" 0.1283329 0.073449165 ;
	setAttr ".uvtk[499]" -type "float2" 0.12812959 0.073988169 ;
	setAttr ".uvtk[500]" -type "float2" 0.12269644 0.083010077 ;
	setAttr ".uvtk[501]" -type "float2" 0.11024831 0.099897832 ;
	setAttr ".uvtk[502]" -type "float2" 0.091584906 0.12261996 ;
	setAttr ".uvtk[503]" -type "float2" 0.43283543 -0.20918131 ;
	setAttr ".uvtk[504]" -type "float2" 0.3852177 -0.16635329 ;
	setAttr ".uvtk[505]" -type "float2" 0.34700683 -0.13540848 ;
	setAttr ".uvtk[506]" -type "float2" 0.31577477 -0.1130558 ;
	setAttr ".uvtk[507]" -type "float2" 0.2896395 -0.096408784 ;
	setAttr ".uvtk[508]" -type "float2" 0.26805398 -0.083408058 ;
	setAttr ".uvtk[509]" -type "float2" 0.25087142 -0.07303232 ;
	setAttr ".uvtk[510]" -type "float2" 0.23680814 -0.063895881 ;
	setAttr ".uvtk[511]" -type "float2" 0.22525258 -0.055112898 ;
	setAttr ".uvtk[512]" -type "float2" 0.21507199 -0.047020916 ;
	setAttr ".uvtk[513]" -type "float2" 0.20592143 -0.039231628 ;
	setAttr ".uvtk[514]" -type "float2" 0.19888009 -0.031449527 ;
	setAttr ".uvtk[515]" -type "float2" 0.19408162 -0.024749994 ;
	setAttr ".uvtk[516]" -type "float2" 0.19167058 -0.020822585 ;
	setAttr ".uvtk[517]" -type "float2" 0.19140683 -0.020600021 ;
	setAttr ".uvtk[518]" -type "float2" 0.19138663 -0.020622253 ;
	setAttr ".uvtk[521]" -type "float2" 0.065825924 -0.13529897 ;
	setAttr ".uvtk[522]" -type "float2" 0.076969132 -0.14438874 ;
	setAttr ".uvtk[524]" -type "float2" 0.057978973 -0.12292692 ;
	setAttr ".uvtk[525]" -type "float2" 0.054270789 -0.10862619 ;
	setAttr ".uvtk[527]" -type "float2" 0.37944719 0.17891854 ;
	setAttr ".uvtk[528]" -type "float2" 0.31675485 0.22861463 ;
	setAttr ".uvtk[529]" -type "float2" 0.055286393 -0.093961656 ;
	setAttr ".uvtk[530]" -type "float2" 0.25935408 0.2517406 ;
	setAttr ".uvtk[531]" -type "float2" 0.021272942 -0.067878544 ;
	setAttr ".uvtk[532]" -type "float2" 0.20883466 0.25945571 ;
	setAttr ".uvtk[533]" -type "float2" -0.0014292747 -0.03685081 ;
	setAttr ".uvtk[534]" -type "float2" 0.11958919 0.24720311 ;
	setAttr ".uvtk[535]" -type "float2" 0.16288523 0.25735521 ;
	setAttr ".uvtk[536]" -type "float2" 0.081510052 0.23058176 ;
	setAttr ".uvtk[537]" -type "float2" -0.015393928 -0.0049922466 ;
	setAttr ".uvtk[538]" -type "float2" 0.065266654 0.15181261 ;
	setAttr ".uvtk[539]" -type "float2" 0.028640077 0.18850413 ;
	setAttr ".uvtk[540]" -type "float2" -0.022973433 0.02640453 ;
	setAttr ".uvtk[541]" -type "float2" 0.059655115 0.14574566 ;
	setAttr ".uvtk[542]" -type "float2" 0.020286247 0.18088156 ;
	setAttr ".uvtk[543]" -type "float2" 0.019694015 0.18031281 ;
	setAttr ".uvtk[544]" -type "float2" 0.019406006 0.17994225 ;
	setAttr ".uvtk[545]" -type "float2" -0.011203006 0.12637335 ;
	setAttr ".uvtk[546]" -type "float2" -0.020819739 0.093469471 ;
	setAttr ".uvtk[547]" -type "float2" -0.024918988 0.059050262 ;
	setAttr ".uvtk[548]" -type "float2" 0.064713582 0.15125403 ;
	setAttr ".uvtk[549]" -type "float2" 0.027883217 0.18776444 ;
	setAttr ".uvtk[550]" -type "float2" 0.028323933 0.18815047 ;
	setAttr ".uvtk[551]" -type "float2" 0.0025456399 0.15532807 ;
	setAttr ".uvtk[552]" -type "float2" 0.051430568 0.2102946 ;
	setAttr ".uvtk[555]" -type "float2" 0.26359531 0.0040121675 ;
	setAttr ".uvtk[557]" -type "float2" 0.25081807 -0.0055087209 ;
	setAttr ".uvtk[559]" -type "float2" 0.23745047 -0.013378382 ;
	setAttr ".uvtk[561]" -type "float2" 0.22260185 -0.019591004 ;
	setAttr ".uvtk[563]" -type "float2" 0.20446171 -0.023888886 ;
	setAttr ".uvtk[564]" -type "float2" 0.43391231 0.079408407 ;
	setAttr ".uvtk[565]" -type "float2" 0.18146399 -0.025801927 ;
	setAttr ".uvtk[566]" -type "float2" 0.14986213 -0.024568617 ;
	setAttr ".uvtk[567]" -type "float2" 0.1044239 -0.019162461 ;
	setAttr ".uvtk[568]" -type "float2" 0.35018244 -0.018033564 ;
createNode polyMapCut -n "polyMapCut2";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 10 "e[30]" "e[54]" "e[86]" "e[125:126]" "e[181:182]" "e[243:244]" "e[321:322]" "e[402:403]" "e[479:480]" "e[552:553]";
createNode polyTweakUV -n "polyTweakUV4";
	setAttr ".uopa" yes;
	setAttr -s 587 ".uvtk";
	setAttr ".uvtk[0:249]" -type "float2" 0.13391358 -0.13391359 0.04397054 -0.0018449351
		 0.13391356 -0.13391358 0.19129544 -0.23448727 -0.08277227 -0.060615949 -0.068990886
		 -0.12177592 0.13391356 -0.13391359 0.16876701 -0.31006977 -0.046535656 -0.21431673
		 -0.14799732 -0.06667202 -0.1517019 -0.12857437 -0.090148382 -0.01673799 0.13391356
		 -0.13391359 0.16174906 -0.3784112 -0.041012555 -0.30497012 -0.15570274 -0.20605129
		 -0.096515574 -0.225315 -0.48431766 0.40652737 -0.45781952 0.40131381 -0.43023837
		 0.39443251 -0.19691136 -0.057472877 -0.21198368 -0.11690574 -0.1422219 -0.018259339
		 -0.091967933 0.016926832 0.13391356 -0.13391359 0.1709134 -0.44155785 -0.037272833
		 -0.39929214 -0.16505045 -0.2941263 -0.23015746 -0.18874544 -0.50794947 0.33787915
		 -0.47207206 0.33038852 -0.50862145 0.41594622 -0.40315562 0.3912029 -0.43781689 0.32661834
		 -0.2352035 -0.043039493 -0.25854957 -0.099380903 -0.18224531 -0.0094335005 -0.13479587
		 0.020745017 -0.087045573 0.04342819 0.13391356 -0.13391359 0.13404813 0.15637007
		 -0.025230043 -0.50181615 -0.17668611 -0.39450356 -0.25358737 -0.27304545 -0.28666854
		 -0.16652757 -0.52085036 0.28358582 -0.47749174 0.27902928 -0.54454857 0.35114786
		 -0.52988261 0.42984274 -0.37679031 0.3908281 -0.40424347 0.32677922 -0.43763876 0.27891949
		 -0.26839262 -0.025287621 -0.29835355 -0.077879481 -0.21400732 0.0031139329 -0.16827291
		 0.030380167 -0.12369852 0.05215577 -0.078214727 0.066201158 0.13391356 -0.13391359
		 0.11706666 0.15430748 0.13597777 0.20775405 -0.18550721 -0.51208645 -0.28205812 -0.37262174
		 -0.32169244 -0.24599341 -0.33461195 -0.13998407 -0.52655596 0.23671171 -0.47776887
		 0.23654965 -0.5676387 0.29478326 -0.5806967 0.37223241 -0.54676998 0.44851103 -0.35142028
		 0.39252034 -0.3726511 0.32956788 -0.40082732 0.28197494 -0.43414983 0.24048451 -0.32527605
		 0.019012161 -0.36555362 -0.024328701 -0.33464101 -0.052149586 -0.29891297 -0.0039809272
		 -0.24185199 0.018312372 -0.19473934 0.041888155 -0.15256059 0.063109614 -0.11075608
		 0.079215713 -0.066116981 0.086711474 0.13391359 -0.13391359 0.099909857 0.14830258
		 0.10900024 0.20527112 0.13365057 0.24973646 -0.31382155 -0.49330845 -0.36489135 -0.34114906
		 -0.37947294 -0.21345109 -0.37781194 -0.1083756 -0.41421622 -0.074275069 -0.38996154
		 0.0026000813 -0.44248712 -0.041279845 -0.52724338 0.19470924 -0.4745279 0.1995948
		 -0.58125609 0.24324819 -0.61748886 0.31548557 -0.61406392 0.4034144 -0.092426755
		 -0.2486712 -0.32700163 0.39591917 -0.34292966 0.33425626 -0.36624086 0.28793266 -0.39515358
		 0.24688688 -0.42841655 0.20781189 -0.34644735 0.041279651 -0.29076725 0.055774786
		 -0.26789054 0.036370672 -0.21851912 0.055370368 -0.17606717 0.074670233 -0.13660374
		 0.091576882 -0.096223108 0.10358013 -0.05174946 0.10672779 0.13391359 -0.13391359
		 0.079035282 0.1390225 0.082685411 0.19892249 0.10146187 0.24468324 0.12800369 0.28461865
		 -0.41733271 -0.45784381 -0.43547332 -0.30148819 -0.43125254 -0.17438549 -0.47428074
		 -0.13211709 -0.5070591 -0.091177754 -0.4095107 0.028454103 -0.46468139 -0.0096551701
		 -0.46438169 -0.010132723 -0.40924162 0.028061666 -0.52374429 0.15340596 -0.46828103
		 0.16416001 -0.58788496 0.1952042 -0.64263695 0.2594271 -0.66907585 0.3497521 -0.15170336
		 0.48290494 -0.09861473 -0.24820295 -0.30352196 0.40093002 -0.31491923 0.34041533
		 -0.33421981 0.29532734 -0.35882902 0.25583592 -0.38767204 0.21800098 -0.4204579 0.17702442
		 -0.36362925 0.062736608 -0.36339122 0.062412955 -0.30943173 0.074626841 -0.26110452
		 0.087878086 -0.240998 0.071098365 -0.19705173 0.087182708 -0.15775946 0.10323878
		 -0.12029867 0.11744137 -0.08031439 0.12681532 -0.034736916 0.1258496 0.13391356 -0.13391358
		 0.058101334 0.12809891 0.057028785 0.18965295 0.070644684 0.23614344 0.092839472
		 0.27609119 0.12026892 0.31420615 -0.50575793 -0.40935203 -0.49835959 -0.25295267
		 -0.5498718 -0.19994497 -0.58837843 -0.14830238 -0.53213215 -0.051945619 -0.53179836
		 -0.052526884 -0.41570389 0.038015105 -0.4715516 0.0019522086 -0.47109067 0.0011422113
		 -0.41528532 0.03734801 -0.47182161 0.0024105683 -0.41594732 0.0383927 -0.50336635
		 0.069922961 -0.4883464 0.033778824 -0.43115926 0.064224698 -0.44572031 0.094292738
		 -0.51566064 0.11077754 -0.45850849 0.12822312 -0.58893454 0.14685351 -0.65840745
		 0.20465797 -0.71104974 0.29040942 -0.11904834 0.48335537 -0.15322202 0.46252611 -0.10412554
		 -0.24644619 -0.28140369 0.40557751 -0.28844577 0.34780475 -0.30437621 0.30377021
		 -0.32566619 0.26571098 -0.35087448 0.2294558 -0.37877154 0.19096094 -0.40974307 0.14617538
		 -0.39696187 0.11738892 -0.3833093 0.092411198 -0.36919791 0.070668556 -0.36941862
		 0.070981421 -0.3688204 0.070115723 -0.324808 0.092823423 -0.32459551 0.092557527
		 -0.27782905 0.10413708 -0.23447075 0.11619462 -0.21687552 0.1013313 -0.17668635 0.11511524
		 -0.14018643 0.12936723 -0.10338248 0.14211375 -0.062203996 0.14947355 -0.015150174
		 0.14420292 0.037655845 0.11611651 0.031302288 0.17649773 0.041265562 0.22529712 0.060255781
		 0.26593205 0.084155552 0.30241713 0.11042515 0.3414115 -0.58346915 -0.34829935 -0.64631027
		 -0.28092322 -0.69222367 -0.21483904 -0.61698866 -0.098818831 -0.61661541 -0.099560551
		 -0.53972721 -0.037576847 -0.53922153 -0.038578145 -0.54002655 -0.037007503 -0.57310009
		 0.046165682 -0.55789387 0.0017888919 -0.58403558 0.09578792 -0.66658646 0.14767826
		 -0.74106991 0.22781846 -0.089903519 0.48173437 -0.12196063 0.45656833 -0.15895429
		 0.44315711 -0.10883544 -0.24355331 -0.26111436 0.41149846 -0.26340586 0.35633042
		 -0.27613747 0.31305042 -0.29489794 0.27607504 -0.31712997 0.24163029 -0.34185869
		 0.20521289 -0.36781576 0.1641773 -0.35540515 0.13940847 -0.34266895 0.11806227 -0.3298412
		 0.099565722 -0.33003968 0.099835016 -0.32949901 0.099098183 -0.29143736 0.11980565
		 -0.29124638 0.11956562 -0.24899721 0.13042635 -0.21059945 0.14117712 -0.19468999
		 0.12801284 -0.15810394 0.14070654 -0.12317733 0.15462834 -0.085499451 0.16724336
		 -0.041260354 0.17161709 0.0070039779 0.16127205 0.011587396 0.21047026 0.028447822
		 0.2541196 0.051027849 0.29079619;
	setAttr ".uvtk[250:499]" 0.074736223 0.32634309 0.097819313 0.36747584 0.083282873
		 0.39067611 0.068246588 0.40956846 -0.72457576 -0.15129012 -0.72415912 -0.1522612
		 -0.62543952 -0.080698542 -0.62488276 -0.081960492 -0.62577295 -0.079978578 -0.65931261
		 0.024470963 -0.64490402 -0.031030677 -0.66702217 0.085707523 -0.76048398 0.15941042
		 -0.063865259 0.47830734 -0.095138118 0.45122698 -0.12923895 0.43216947 -0.16850811
		 0.4247745 -0.112622 -0.23988983 -0.24277943 0.41871163 -0.23982602 0.36626056 -0.2491737
		 0.32331988 -0.2658996 0.28664491 -0.2861701 0.25373098 -0.30800053 0.21974382 -0.33110306
		 0.18158209 -0.31932878 0.15994257 -0.30758417 0.14147317 -0.29596236 0.1255849 -0.29614189
		 0.12581462 -0.29565462 0.12518293 -0.26116699 0.14414257 -0.26099563 0.14393908 -0.22371882
		 0.1536659 -0.18971062 0.16359228 -0.17498234 0.15224749 -0.1411685 0.16545677 -0.1062495
		 0.18106693 -0.06440299 0.19299859 -0.016458675 0.19246942 -0.0048258156 0.23886439
		 0.018079177 0.27906457 0.042247608 0.31327465 0.063786432 0.34902582 0.051797107
		 0.36880526 0.039729998 0.38466081 0.052940592 0.42515597 -0.73734814 -0.12855732
		 -0.73648465 -0.13017887 -0.73769915 -0.1275683 -0.76807952 0.0078512803 -0.75695741
		 -0.063416176 -0.76905298 0.083926894 -0.038597241 0.47279778 -0.071340993 0.44537166
		 -0.10352139 0.42301664 -0.14018166 0.4089025 -0.18171212 0.40751973 -0.22662914 0.42705271
		 -0.21800411 0.37797233 -0.22310892 0.3349829 -0.23779315 0.29762229 -0.25701559 0.2653003
		 -0.27729791 0.23354915 -0.29765451 0.19855273 -0.28667703 0.17934752 -0.27586538
		 0.16310656 -0.26528198 0.14921308 -0.26544404 0.14941174 -0.26500106 0.14885926 -0.23477304
		 0.16565394 -0.23461762 0.16547614 -0.20151383 0.1742292 -0.17205471 0.18430632 -0.1579856
		 0.1753093 -0.12619941 0.19211018 -0.08707951 0.21058327 -0.037242524 0.21830407 -0.018772714
		 0.26525268 0.0089983493 0.30237725 0.033425882 0.33428791 0.02442579 0.35187063 0.015674159
		 0.36532643 0.027531192 0.3974807 0.027720496 0.39730296 0.047030613 0.43017742 0.046797737
		 0.43037596 0.010413028 0.45423439 0.03035982 0.44265184 -0.013126515 0.46462002 -0.048764601
		 0.43874636 -0.080759719 0.41516629 -0.11506061 0.39628515 -0.15515187 0.3866379 -0.19840211
		 0.39176574 -0.19800234 0.34892723 -0.20979485 0.30962148 -0.22853246 0.27616611 -0.24856651
		 0.24609378 -0.26757795 0.21414062 -0.25755495 0.19680178 -0.24785742 0.18234563 -0.23842946
		 0.17011356 -0.23857176 0.17029023 -0.23817885 0.1698041 -0.21125829 0.18446428 -0.21112335
		 0.18431097 -0.18271142 0.19245052 -0.159585 0.20437479 -0.14513353 0.19979352 -0.1129149
		 0.22543922 -0.057592206 0.24230394 -0.03047841 0.29381678 0.002916649 0.32425389
		 -0.00065990537 0.34105793 -0.0046164021 0.35236713 0.0067242756 0.37573805 0.0068646446
		 0.37559739 0.022780284 0.4015536 0.023115441 0.40127841 0.022591695 0.40171465 -0.0070189461
		 0.42153212 0.0092903152 0.41177073 -0.026775144 0.43070468 -0.059474662 0.40813908
		 -0.092106327 0.38617983 -0.13079557 0.36962017 -0.17469716 0.36619297 -0.18128729
		 0.32410201 -0.19939426 0.28752658 -0.22053361 0.2569761 -0.23980898 0.22788861 -0.23102596
		 0.21198753 -0.22259843 0.19904184 -0.21445072 0.18830127 -0.21457541 0.18845385 -0.21423298
		 0.18803233 -0.19091398 0.20049721 -0.1908012 0.20037001 -0.16919112 0.20847583 -0.15679306
		 0.22445688 -0.14042515 0.230468 -0.080850109 0.26857665 -0.032535009 0.32327524 -0.023651205
		 0.34044638 -0.019608937 0.3485193 -0.0098296627 0.35995647 -0.0097360834 0.35986158
		 0.0031498447 0.37893716 0.0034031048 0.37872335 0.0030056611 0.3790628 -0.021273099
		 0.39393774 -0.0076076016 0.38668236 -0.038851969 0.40101615 -0.069465265 0.37796304
		 -0.10671823 0.35516492 -0.15333873 0.34416559 -0.16736674 0.30048051 -0.19138941
		 0.2665312 -0.2132909 0.23901096 -0.20650864 0.224242 -0.20005697 0.21273252 -0.19347239
		 0.20364815 -0.19357616 0.20377308 -0.1932978 0.20342392 -0.17550915 0.21319702 -0.17542738
		 0.21311614 -0.16431886 0.2211853 -0.15782201 0.22666541 -0.14126939 0.23506114 -0.12142836
		 0.24492297 -0.087233171 0.27430227 -0.052824907 0.30317393 -0.036984019 0.32428172
		 -0.025763296 0.34155145 -0.020785175 0.3490282 -0.019055031 0.35209069 -0.019043766
		 0.35206285 -0.012238406 0.36197671 -0.012062691 0.36184683 -0.012334846 0.36205515
		 -0.031013928 0.36955431 -0.019782804 0.36631921 -0.047538653 0.37242439 -0.079009458
		 0.34258202 -0.13242877 0.32292601 -0.15600175 0.27392527 -0.1863867 0.24692497 -0.18370754
		 0.23217079 -0.18095472 0.22226569 -0.17718205 0.2154077 -0.17724854 0.21549442 -0.17707303
		 0.21524552 -0.16756088 0.22066477 -0.1675342 0.22065213 -0.16468504 0.22248504 -0.019721232
		 0.35236421 -0.01966282 0.35235921 -0.019748293 0.35237613 -0.030903958 0.34722152
		 -0.022988819 0.35161963 -0.048988454 0.33927217 -0.10874991 0.29859295 -0.15499887
		 0.24493316 -0.16287076 0.23140916 -0.16709626 0.22453764 -0.16779628 0.22134057 -0.16780725
		 0.22136948 -0.16779217 0.22128323 -0.019927047 0.35194018 -0.019931577 0.35193607
		 -0.022054814 0.3501173 -0.029022954 0.34439483 -0.046774797 0.33063611 -0.064305112
		 0.31621733 -0.098759219 0.2867507 -0.13303691 0.2568185 -0.148148 0.24184856 -0.16015199
		 0.22944453 -0.16562051 0.22364905 -0.1672444 0.22132501 -0.16724598 0.22130975 -0.063465342
		 0.31521788 -0.046143405 0.33010742 -0.15996403 0.22927794 -0.14760429 0.2414386 -0.13214731
		 0.25596091 -0.097946331 0.28588387 -0.019926511 0.35190812 -0.019927345 0.35191688
		 -0.16554016 0.22358206 -0.16724691 0.22130069 -0.16722926 0.22131529 -0.021980725
		 0.3500255 -0.02882468 0.34417155 -0.019537352 0.35183313 -0.019553684 0.35181823
		 -0.16714349 0.22108534 -0.16716233 0.22108701 -0.16472 0.22255418 -0.15792161 0.22682437
		 -0.14156836 0.23544338 -0.12195991 0.24551055 -0.08780615 0.27492747 -0.053395681
		 0.30378011 -0.037506036 0.32454512 -0.025944047 0.34167072 -0.020858012 0.34907207
		 -0.019579791 0.35181853 -0.019560717 0.35184005 -0.019081198 0.35211501;
	setAttr ".uvtk[500:586]" -0.0099430904 0.36006644 0.0065476075 0.37590566 0.027295753
		 0.39769122 -0.72523624 -0.15016156 -0.6174382 -0.097909205 -0.53253204 -0.051218443
		 -0.46504211 -0.0090752169 -0.40983236 0.028929986 -0.36391664 0.063133694 -0.3250702
		 0.09316919 -0.29167035 0.12009217 -0.26137829 0.14439994 -0.23496196 0.16588086 -0.21142441
		 0.18465835 -0.19104576 0.20065171 -0.1755982 0.21330395 -0.16758302 0.22069004 -0.16716954
		 0.2210885 -0.16714373 0.22109845 0.13391358 -0.13391358 0.13391358 -0.13391358 -0.072009243
		 -0.22977638 -0.071810104 -0.2219927 0.13391358 -0.13391358 -0.074572243 -0.23713598
		 -0.079402722 -0.24327514 0.13391356 -0.13391358 0.16463923 0.20524341 0.16966727
		 0.25100836 -0.085877635 -0.24760118 0.16803601 0.29087284 -0.15509725 0.50438368
		 0.16208664 0.32571849 -0.12094204 0.51210475 0.13802621 0.3892208 0.1521512 0.35810307
		 0.12099008 0.41720167 -0.08913599 0.51568061 0.053175375 0.42493853 0.084088489 0.45873073
		 -0.059393719 0.5159874 0.047446892 0.42983916 0.077578172 0.46589139 0.077091023
		 0.46640405 0.076772854 0.46665105 0.030088879 0.49454835 0.0011480227 0.5053373 -0.029588237
		 0.51267964 0.05264543 0.42541525 0.083464488 0.4593707 0.083790883 0.45899579 0.055414066
		 0.48145208 0.10276733 0.44025591 0.13391356 -0.13391358 0.13391359 -0.13391358 0.018604413
		 0.10334264 0.13391356 -0.13391358 0.0011806041 0.090147413 0.13391356 -0.13391358
		 -0.014129266 0.076680489 0.13391356 -0.13391358 -0.02695094 0.063288487 0.13391356
		 -0.13391358 -0.036516234 0.052487798 0.15037361 0.15413329 -0.040823981 0.042035259
		 -0.038453624 0.031710126 -0.024241909 0.021552898 0.001709424 0.010136463 0.13391358
		 -0.13391359 -0.11721841 -0.23073712 -0.11547551 -0.23553622 -0.21307433 0.4364731
		 -0.11790083 -0.22565275 -0.2022326 0.44668856 -0.11750982 -0.22054026 -0.19446462
		 0.45759645 -0.11604027 -0.21554172 -0.18999058 0.46867338 -0.11343197 -0.21065608
		 -0.18910107 0.47968099 -0.10972331 -0.20625928 -0.19191182 0.49016592 -0.10481725
		 -0.20244458 -0.09857849 -0.19943824 -0.091018476 -0.19770741 -0.082126714 -0.19774497;
createNode polyChipOff -n "polyChipOff1";
	setAttr ".ics" -type "componentList" 46 "f[107]" "f[120]" "f[139]" "f[141]" "f[160]" "f[162]" "f[181]" "f[183]" "f[202]" "f[204]" "f[221]" "f[223]" "f[242]" "f[244]" "f[259]" "f[261]" "f[280]" "f[282]" "f[295]" "f[297]" "f[314]" "f[316]" "f[327]" "f[329]" "f[344]" "f[346]" "f[355]" "f[357]" "f[370]" "f[372]" "f[379]" "f[381]" "f[392]" "f[394]" "f[397]" "f[406]" "f[408]" "f[415]" "f[421]" "f[423]" "f[430]" "f[432]" "f[442]" "f[463]" "f[472]" "f[493:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".rs" 46491;
createNode polySeparate -n "polySeparate1";
	setAttr ".ic" 2;
createNode groupId -n "groupId6";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts6";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:631]";
createNode groupId -n "groupId7";
	setAttr ".ihi" 0;
createNode groupId -n "groupId8";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts7";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:539]";
createNode groupId -n "groupId9";
	setAttr ".ihi" 0;
createNode polyPlanarProj -n "polyPlanarProj2";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "f[0:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" -0.042350530624389648 2.3979348540306091 -0.020425558090209961 ;
	setAttr ".ro" -type "double3" -90 0 0 ;
	setAttr ".ps" -type "double2" 8.6537671089172363 8.8212828636169434 ;
	setAttr ".cam" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode polyMapCut -n "polyMapCut3";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 31 "e[910]" "e[912]" "e[914]" "e[916]" "e[918]" "e[920]" "e[922]" "e[924]" "e[926]" "e[928]" "e[930]" "e[932]" "e[934]" "e[936]" "e[938]" "e[940]" "e[942]" "e[944]" "e[946]" "e[948]" "e[950]" "e[952]" "e[954]" "e[956]" "e[958]" "e[960]" "e[962]" "e[964]" "e[966:967]" "e[1011]" "e[1055]";
createNode polyTweakUV -n "polyTweakUV5";
	setAttr ".uopa" yes;
	setAttr -s 554 ".uvtk";
	setAttr ".uvtk[0:249]" -type "float2" -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -0.085787684 0.078707829 -0.018088635 0.029436979 -0.0060614948 0.052407559
		 -0.0018371348 0.077875689 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 0.04792618
		 -0.018990602 0.071681812 0.026422981 -0.036792103 0.011217793 -0.0057851975 0.10335609
		 0.080016628 0.076711252 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 0.11028291 -0.066484183 0.145538 0.00022005104 0.01094138 -0.055085775 -0.060365595
		 -0.00043969788 -0.017480221 0.12638131 0.072284833 0.12691653 0.15814787 0.074126989
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 0.16709858 -0.1128708 0.21368888 -0.026623476 0.055583827 -0.11944228
		 -0.035768423 -0.078246847 -0.086513728 -0.0043280665 -0.03578696 0.14476958 0.049345188
		 0.17226368 0.14716116 0.14794853 0.23096445 0.069249153 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 0.21660736 -0.15803477 0.274459 -0.054508027 0.095417812 -0.18106335 -0.013434824
		 -0.15342188 -0.087676257 -0.086034998 -0.11264248 -3.6427751e-005 -0.058923278 0.15674928
		 0.013488669 0.20847666 0.11389951 0.21460909 0.21759641 0.1651985 0.29701528 0.061162673
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 0.25611058 -0.20559359
		 0.3263666 -0.087619469 0.1288904 -0.23914379 0.0051661385 -0.22465241 -0.090141147
		 -0.16470179 -0.1396513 -0.077478364 -0.13616982 0.012074104 -0.08467555 0.1611996
		 -0.031840518 0.23222119 0.061719216 0.26795155 0.175468 0.25185916 0.28238142 0.17748994
		 0.35618326 0.04551911 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 0.42424676
		 -0.26992404 0.28905869 -0.41122425 0.28657654 -0.4118225 0.42218718 -0.27128661 0.28923145
		 -0.41056821 0.42413977 -0.26925412 0.29900485 -0.30935845 0.30091777 -0.36077631
		 0.4174518 -0.22001499 0.39887005 -0.17242053 0.28384516 -0.25651869 0.36815694 -0.12736169
		 0.15228194 -0.29660293 0.018702913 -0.29085428 -0.094831705 -0.23866421 -0.16701555
		 -0.15182659 -0.186517 -0.053272124 -0.15472364 0.030807767 -0.11057501 0.1576691
		 -0.082307577 0.24132344 -0.0043132906 0.3031559 0.10866813 0.32150328 0.23339614
		 0.28242624 0.34289297 0.18037492 0.40776503 0.020709846 0.45056593 -0.012137795 0.48242292
		 -0.050751921 0.50377208 -0.094647616 0.50346196 -0.094040334 0.50221598 -0.096521735
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 0.1281112 -0.49838838 0.12564757 -0.49819806
		 0.1284485 -0.49780196 0.16319561 -0.40807202 0.15151292 -0.45708987 0.16376528 -0.35354769
		 0.024049247 -0.35257083 -0.10263662 -0.30642569 -0.19499227 -0.22124776 -0.23639807
		 -0.11566357 -0.22344878 -0.0157074 -0.1664452 0.054296281 -0.13414347 0.14647016
		 -0.13322845 0.23494408 -0.077916861 0.31713784 0.02386927 0.36782295 0.15418512 0.36745733
		 0.28902283 0.30338836 0.39881703 0.17227262 0.4485682 0.15392682 0.48990491 0.12747163
		 0.52192485 0.092641383 0.52145898 0.093136311 0.52097416 0.0904015 -1.54945612 0
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0;
	setAttr ".uvtk[250:499]" -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -0.054269094 -0.53853208 -0.056472499 -0.53763545 -0.05379175
		 -0.53804755 0.0024007056 -0.4621461 -0.021823077 -0.50522101 0.018394772 -0.41018003
		 -0.11645465 -0.36750895 -0.22387913 -0.28399676 -0.28546104 -0.17338902 -0.29108143
		 -0.059442997 -0.2465663 0.03148124 -0.17015803 0.080155432 -0.15308997 0.12861592
		 -0.1798695 0.21362266 -0.15234002 0.30885237 -0.070761204 0.3870098 0.053000323 0.42465645
		 0.20023912 0.40347964 0.34358427 0.31231105 0.39554653 0.30914995 0.44167665 0.29565743
		 0.48122153 0.27185374 0.48064485 0.27220321 0.48095939 0.26941437 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -0.2450507 -0.5263499 -0.24680465 -0.52489209
		 -0.24446656 -0.52599341 -0.16980153 -0.46729487 -0.2058567 -0.5021711 -0.13920942
		 -0.42170906 -0.25622186 -0.33887649 -0.33339176 -0.22480866 -0.35681152 -0.099044517
		 -0.32499337 0.011341741 -0.25340381 0.083286792 -0.16553116 0.10577628 -0.21786234
		 0.17907387 -0.22100568 0.27903253 -0.16657972 0.37788969 -0.06008444 0.44942105 0.085665151
		 0.47189999 0.24898145 0.42741254 0.29874083 0.43901312 0.34659693 0.43892658 0.38973746
		 0.42598161 0.38909909 0.42617312 0.39020494 0.42353359 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -0.42497838 -0.45656586 -0.42617097 -0.45466101 -0.42428386 -0.45639634
		 -0.33710194 -0.42074716 -0.38069522 -0.44487959 -0.29456758 -0.38492185 -0.38220638
		 -0.26812321 -0.41990814 -0.1332123 -0.40074703 -0.0049994234 -0.33406469 0.089062482
		 -0.24335703 0.13423395 -0.27787405 0.22987115 -0.25554493 0.3417483 -0.17469302 0.44069988
		 -0.042936217 0.50333846 0.12445889 0.5080477 0.1675477 0.53238815 0.21177492 0.54488903
		 0.25629219 0.54490143 0.25562796 0.54489547 0.2574949 0.54269618 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -0.58043242
		 -0.33857107 -0.58094513 -0.33647811 -0.57973009 -0.33857077 -0.48613068 -0.32544202
		 -0.53513134 -0.33794564 -0.43394446 -0.30191761 -0.48183799 -0.15994212 -0.47304702
		 -0.016737547 -0.41105863 0.098602682 -0.31734133 0.16467533 -0.33079964 0.28104842
		 -0.28153768 0.40070105 -0.17336369 0.49689507 -0.016395684 0.54784948 0.01770537
		 0.58167827 0.056111746 0.60417402 0.098052725 0.61474365 0.097419426 0.61458153 0.099873349
		 0.61293083 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -0.70056576 -0.17949814 -0.70041746 -0.17747641 -0.69988799 -0.17964143 -0.60377765
		 -0.18728113 -0.65620619 -0.18820167 -0.54418612 -0.17783451 -0.54323232 -0.021818001
		 -0.48376787 0.11305863 -0.38570279 0.19803783 -0.37407094 0.33288544 -0.29513422
		 0.45625186 -0.15941262 0.54586941 -0.13482296 0.58545703 -0.103191 0.61445677 -0.065022513
		 0.63317335 -0.065597221 0.63289219 -0.062694408 0.63187891 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -0.77683216
		 0.011303579 -0.77612269 0.013016691 -0.77619278 0.011061227 -0.67916977 -0.013998054
		 -0.73420298 -0.0042368267 -0.61329281 -0.019960899 -0.55393159 0.13644376 -0.44681224
		 0.2356728 -0.40317023 0.38864422 -0.29199651 0.50729305 -0.27460065 0.54943007 -0.2482591
		 0.58146942 -0.21392238 0.60475367 -0.21444476 0.60439759 -0.21122503 0.60406375 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -0.8055101 0.22228339 -0.80439144 0.22343102 -0.80496252
		 0.22195819 -0.70503044 0.18739668 -0.76508737 0.20498946 -0.62924486 0.16494575 -0.4992803
		 0.28295439 -0.40416315 0.4475494 -0.38846555 0.48710054 -0.36270097 0.51749474 -0.33283141
		 0.53993118 -0.33322397 0.53952873 -0.32993498 0.53984487 -0.8043685 0.26319757 -0.80422342
		 0.26301041 -0.76324594 0.24877384 -0.7012108 0.22343567 -0.6208297 0.202279 -0.57381999
		 0.22452512 -0.51287913 0.30593348 -0.44437757 0.39615512 -0.42048791 0.43684149 -0.401876
		 0.47398239 -0.37591878 0.50094897 -0.34603658 0.51614445 -0.34608093 0.51634741 -0.57121146
		 0.22624946 -0.61841917 0.20329693 -0.4005585 0.47503418 -0.4193534 0.43795508 -0.44249219
		 0.39787495 -0.51060623 0.30753076 -0.80202687 0.26361623 -0.80239069 0.26349679 -0.3743346
		 0.50198203 -0.34384695 0.51667351 -0.34403732 0.51678509 -0.7606827 0.24977055 -0.69855893
		 0.22449329 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -0.35469821 0.5156033
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0;
	setAttr ".uvtk[500:553]" -0.77822971 0.27325523 -1.54945612 0 -1.54945612 0
		 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612 0 -1.54945612
		 0 -0.31739846 0.52725857 -1.54945612 0 -1.54945612 0 -0.77683198 0.27363837 -1.54945612
		 0 -0.31611457 0.52687323 -0.29384103 0.53972453 -0.1774801 0.59580916 -0.033376947
		 0.61610746 0.12301843 0.59064412 0.27308249 0.51540214 0.39665452 0.3929843 0.47833499
		 0.23882237 0.50973547 0.062086754 0.4833394 -0.12048712 0.3968249 -0.2890839 0.25551888
		 -0.42000401 0.094671801 -0.49644426 -0.084300667 -0.52697814 -0.26913449 -0.50714576
		 -0.44168457 -0.43114805 -0.58798575 -0.31048959 -0.69917339 -0.15223822 -0.76779783
		 0.034474287 -0.79087633 0.23853937 -0.72907519 0.26289907 -0.66587293 0.23793188
		 -0.58972675 0.21482161 -0.53920841 0.2453666 -0.48253891 0.327209 -0.41831508 0.41715705
		 -0.40428141 0.45100361 -0.38434091 0.48856711;
createNode polyCylProj -n "polyCylProj1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "f[0:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" -0.042350530624389648 2.3979348540306091 -0.020425558090209961 ;
	setAttr ".ps" -type "double2" 180 4.8357812166213989 ;
	setAttr ".r" 8.8212828636169434;
createNode polyMapCut -n "polyMapCut4";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 9 "e[747:748]" "e[750]" "e[752:753]" "e[755]" "e[757]" "e[788:789]" "e[811]" "e[1013]" "e[1053]";
createNode polyMapCut -n "polyMapCut5";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 19 "e[228]" "e[256]" "e[294]" "e[343]" "e[380]" "e[424]" "e[457]" "e[501]" "e[530]" "e[573]" "e[598]" "e[637]" "e[658]" "e[693]" "e[710]" "e[741]" "e[758]" "e[785]" "e[846:847]";
createNode polyTweakUV -n "polyTweakUV6";
	setAttr ".uopa" yes;
	setAttr -s 243 ".uvtk";
	setAttr ".uvtk[0]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[1]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[2]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[3]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[4]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[5]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[6]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[7]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[8]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[9]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[10]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[11]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[12]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[13]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[14]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[15]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[20]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[21]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[22]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[23]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[24]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[25]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[26]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[27]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[28]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[34]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[35]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[36]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[37]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[38]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[39]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[40]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[41]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[42]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[43]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[44]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[52]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[53]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[54]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[55]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[56]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[57]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[58]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[59]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[60]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[61]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[62]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[63]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[64]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[74]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[75]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[76]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[77]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[78]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[79]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[80]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[81]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[82]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[83]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[84]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[85]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[86]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[87]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[88]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[89]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[90]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[91]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[92]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[93]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[105]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[106]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[107]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[108]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[109]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[110]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[111]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[112]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[113]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[114]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[115]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[116]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[117]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[118]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[119]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[120]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[121]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[122]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[123]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[125]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[126]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[140]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[141]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[142]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[143]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[144]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[145]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[146]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[147]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[148]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[149]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[150]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[151]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[152]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[153]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[154]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[155]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[156]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[157]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[158]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[159]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[161]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[192]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[193]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[194]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[195]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[196]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[197]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[198]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[199]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[200]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[201]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[202]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[203]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[204]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[205]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[206]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[207]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[208]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[209]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[210]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[212]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[237]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[238]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[239]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[240]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[241]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[242]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[243]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[244]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[245]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[246]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[247]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[248]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[249]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[250]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[251]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[252]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[253]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[255]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[280]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[281]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[282]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[283]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[284]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[285]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[286]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[287]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[288]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[289]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[290]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[291]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[292]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[293]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[294]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[319]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[320]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[321]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[322]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[323]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[324]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[325]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[326]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[327]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[328]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[329]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[330]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[331]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[333]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[354]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[355]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[356]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[357]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[358]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[359]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[360]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[361]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[362]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[363]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[364]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[366]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[386]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[387]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[388]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[389]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[390]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[391]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[392]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[393]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[394]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[396]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[414]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[415]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[416]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[421]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[424]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[426]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[442]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[443]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[485]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[487]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[519]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[520]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[523]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[526]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[527]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[528]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[530]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[532]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[534]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[535]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[536]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[538]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[539]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[550]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[552]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[553]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[556]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[557]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[558]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[559]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[561]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[562]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[563]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[566]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[567]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[569]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[571]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[573]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[575]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[577]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[580]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[582]" -type "float2" -2.5249619 0 ;
	setAttr ".uvtk[584]" -type "float2" -2.5249619 0 ;
createNode polyMapCut -n "polyMapCut6";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 19 "e[80]" "e[90]" "e[121]" "e[130]" "e[177]" "e[186]" "e[239]" "e[248]" "e[317]" "e[326]" "e[398]" "e[407]" "e[475]" "e[484]" "e[548]" "e[556]" "e[616]" "e[620]" "e[676:677]";
createNode polyTweakUV -n "polyTweakUV7";
	setAttr ".uopa" yes;
	setAttr -s 68 ".uvtk";
	setAttr ".uvtk[16]" -type "float2" -0.45631346 0.43096274 ;
	setAttr ".uvtk[17]" -type "float2" 0.74817771 0.45849007 ;
	setAttr ".uvtk[18]" -type "float2" 0.62427199 0.48480719 ;
	setAttr ".uvtk[19]" -type "float2" 0.49349856 0.5071134 ;
	setAttr ".uvtk[29]" -type "float2" 0.82887787 0.5122475 ;
	setAttr ".uvtk[30]" -type "float2" 0.70213646 0.56344622 ;
	setAttr ".uvtk[31]" -type "float2" 0.86205548 0.43029135 ;
	setAttr ".uvtk[32]" -type "float2" 0.35884497 0.52305812 ;
	setAttr ".uvtk[33]" -type "float2" 0.56130129 0.60631889 ;
	setAttr ".uvtk[45]" -type "float2" 0.91432071 0.58751506 ;
	setAttr ".uvtk[47]" -type "float2" 0.93891639 0.45725721 ;
	setAttr ".uvtk[48]" -type "float2" 0.96426862 0.40269941 ;
	setAttr ".uvtk[49]" -type "float2" 0.22384897 0.5312838 ;
	setAttr ".uvtk[50]" -type "float2" 0.4101848 0.6370005 ;
	setAttr ".uvtk[67]" -type "float2" 1.0247653 0.50594348 ;
	setAttr ".uvtk[68]" -type "float2" 1.031209 0.40327233 ;
	setAttr ".uvtk[69]" -type "float2" 1.0546317 0.37822622 ;
	setAttr ".uvtk[70]" -type "float2" 0.091680661 0.53110427 ;
	setAttr ".uvtk[71]" -type "float2" 0.25340721 0.65269417 ;
	setAttr ".uvtk[97]" -type "float2" 1.1101265 0.4259364 ;
	setAttr ".uvtk[98]" -type "float2" 1.1062564 0.35496539 ;
	setAttr ".uvtk[99]" -type "float2" -0.88184088 0.35880369 ;
	setAttr ".uvtk[100]" -type "float2" -0.035073683 0.52258795 ;
	setAttr ".uvtk[101]" -type "float2" 0.096230671 0.652008 ;
	setAttr ".uvtk[131]" -type "float2" 1.1718216 0.35455054 ;
	setAttr ".uvtk[132]" -type "float2" -0.8672331 0.3086789 ;
	setAttr ".uvtk[133]" -type "float2" -0.81226331 0.35211772 ;
	setAttr ".uvtk[134]" -type "float2" -0.15437113 0.50655693 ;
	setAttr ".uvtk[135]" -type "float2" -0.056236133 0.634978 ;
	setAttr ".uvtk[177]" -type "float2" -0.84087437 0.27933982 ;
	setAttr ".uvtk[178]" -type "float2" -0.8223179 0.29635194 ;
	setAttr ".uvtk[179]" -type "float2" -0.74626225 0.35393757 ;
	setAttr ".uvtk[180]" -type "float2" -0.2647481 0.48451537 ;
	setAttr ".uvtk[181]" -type "float2" -0.19923203 0.60315222 ;
	setAttr ".uvtk[222]" -type "float2" -0.82165998 0.2614167 ;
	setAttr ".uvtk[223]" -type "float2" -0.78009659 0.3005431 ;
	setAttr ".uvtk[224]" -type "float2" -0.68056661 0.36402649 ;
	setAttr ".uvtk[225]" -type "float2" -0.3654145 0.45850843 ;
	setAttr ".uvtk[226]" -type "float2" -0.32893389 0.55950969 ;
	setAttr ".uvtk[265]" -type "float2" -0.80535477 0.26796702 ;
	setAttr ".uvtk[266]" -type "float2" -0.73526138 0.32085389 ;
	setAttr ".uvtk[267]" -type "float2" -0.61206585 0.38141865 ;
	setAttr ".uvtk[268]" -type "float2" -0.45631349 0.43096274 ;
	setAttr ".uvtk[269]" -type "float2" -0.44264716 0.50804561 ;
	setAttr ".uvtk[305]" -type "float2" -0.78421801 0.29847077 ;
	setAttr ".uvtk[306]" -type "float2" -0.68285233 0.35542196 ;
	setAttr ".uvtk[307]" -type "float2" -0.5380196 0.40444177 ;
	setAttr ".uvtk[308]" -type "float2" -0.53905898 0.45355815 ;
	setAttr ".uvtk[342]" -type "float2" -0.75113887 0.35032743 ;
	setAttr ".uvtk[343]" -type "float2" -0.61853081 0.40105218 ;
	setAttr ".uvtk[521]" -type "float2" -1.2519205 0.45022434 ;
	setAttr ".uvtk[522]" -type "float2" -1.3722987 0.47783703 ;
	setAttr ".uvtk[524]" -type "float2" -1.1422322 0.42183489 ;
	setAttr ".uvtk[525]" -type "float2" -1.0444167 0.3954224 ;
	setAttr ".uvtk[529]" -type "float2" -0.95816773 0.3735401 ;
	setAttr ".uvtk[531]" -type "float2" -0.91967255 0.33655876 ;
	setAttr ".uvtk[533]" -type "float2" -0.87004584 0.31982774 ;
	setAttr ".uvtk[586]" -type "float2" -0.62602264 0.49748057 ;
	setAttr ".uvtk[587]" -type "float2" -0.6999374 0.41873211 ;
	setAttr ".uvtk[589]" -type "float2" -0.5271582 0.57915992 ;
	setAttr ".uvtk[591]" -type "float2" -0.40306085 0.65629691 ;
	setAttr ".uvtk[593]" -type "float2" -0.25606501 0.72175664 ;
	setAttr ".uvtk[595]" -type "float2" -0.090557083 0.76945108 ;
	setAttr ".uvtk[597]" -type "float2" 0.087577596 0.79500979 ;
	setAttr ".uvtk[600]" -type "float2" 0.27107528 0.79611868 ;
	setAttr ".uvtk[602]" -type "float2" 0.4523986 0.77280825 ;
	setAttr ".uvtk[604]" -type "float2" 0.62405699 0.72722334 ;
	setAttr ".uvtk[606]" -type "float2" 0.77970558 0.66353172 ;
createNode polyCylProj -n "polyCylProj2";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 12 "f[12:13]" "f[22:25]" "f[36:41]" "f[55:60]" "f[81:86]" "f[111:116]" "f[148:153]" "f[190:195]" "f[230:235]" "f[268:273]" "f[304:307]" "f[336:337]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" 0.041407227516174323 4.5754599571228027 -0.020424962043762207 ;
	setAttr ".ic" -type "double2" 0.58238992755584684 1.0196903320153554 ;
	setAttr ".ps" -type "double2" 180 0.48073101043701166 ;
	setAttr ".is" -type "double2" 1 0.23525243825382669 ;
	setAttr ".r" 4.0047791004180908;
createNode polyTweakUV -n "polyTweakUV8";
	setAttr ".uopa" yes;
	setAttr -s 65 ".uvtk";
	setAttr ".uvtk[16]" -type "float2" 0.053303897 0.29787126 ;
	setAttr ".uvtk[17]" -type "float2" 0.13869601 0 ;
	setAttr ".uvtk[18]" -type "float2" 0.12669602 0 ;
	setAttr ".uvtk[19]" -type "float2" 0.11469603 0 ;
	setAttr ".uvtk[29]" -type "float2" 0.13869613 0 ;
	setAttr ".uvtk[30]" -type "float2" 0.12669608 0 ;
	setAttr ".uvtk[31]" -type "float2" 0.15069604 0 ;
	setAttr ".uvtk[32]" -type "float2" 0.10269603 0 ;
	setAttr ".uvtk[33]" -type "float2" 0.11469603 0 ;
	setAttr ".uvtk[45]" -type "float2" 0.13869613 0 ;
	setAttr ".uvtk[47]" -type "float2" 0.12669599 0 ;
	setAttr ".uvtk[48]" -type "float2" 0.15069598 0 ;
	setAttr ".uvtk[49]" -type "float2" 0.16269606 0 ;
	setAttr ".uvtk[50]" -type "float2" 0.090696037 0 ;
	setAttr ".uvtk[67]" -type "float2" 0.10269606 0 ;
	setAttr ".uvtk[68]" -type "float2" 0.11469603 0 ;
	setAttr ".uvtk[69]" -type "float2" 0.15069604 0 ;
	setAttr ".uvtk[70]" -type "float2" 0.162696 0 ;
	setAttr ".uvtk[71]" -type "float2" 0.17469603 0 ;
	setAttr ".uvtk[97]" -type "float2" 0.078696072 0 ;
	setAttr ".uvtk[98]" -type "float2" 0.090696037 0 ;
	setAttr ".uvtk[99]" -type "float2" 0.10269606 0 ;
	setAttr ".uvtk[100]" -type "float2" 0.16269606 0 ;
	setAttr ".uvtk[101]" -type "float2" 0.17469603 0 ;
	setAttr ".uvtk[131]" -type "float2" 0.18669611 0 ;
	setAttr ".uvtk[132]" -type "float2" 0.066696048 0 ;
	setAttr ".uvtk[133]" -type "float2" 0.078696072 0 ;
	setAttr ".uvtk[134]" -type "float2" 0.090696067 0 ;
	setAttr ".uvtk[135]" -type "float2" 0.17469609 0 ;
	setAttr ".uvtk[177]" -type "float2" 0.18669605 0 ;
	setAttr ".uvtk[178]" -type "float2" -0.041303992 0 ;
	setAttr ".uvtk[179]" -type "float2" 0.054696083 0 ;
	setAttr ".uvtk[180]" -type "float2" 0.066696048 0 ;
	setAttr ".uvtk[181]" -type "float2" 0.078696072 0 ;
	setAttr ".uvtk[222]" -type "float2" 0.18669605 0 ;
	setAttr ".uvtk[223]" -type "float2" -0.041303873 0 ;
	setAttr ".uvtk[224]" -type "float2" -0.029303908 0 ;
	setAttr ".uvtk[225]" -type "float2" 0.042696059 0 ;
	setAttr ".uvtk[226]" -type "float2" 0.054696023 0 ;
	setAttr ".uvtk[265]" -type "float2" 0.066696048 0 ;
	setAttr ".uvtk[266]" -type "float2" -0.029303908 0 ;
	setAttr ".uvtk[267]" -type "float2" -0.017303944 0 ;
	setAttr ".uvtk[268]" -type "float2" 0.030696034 0 ;
	setAttr ".uvtk[304]" -type "float2" 0.042696059 0 ;
	setAttr ".uvtk[305]" -type "float2" 0.054696023 0 ;
	setAttr ".uvtk[306]" -type "float2" -0.029303908 0 ;
	setAttr ".uvtk[307]" -type "float2" -0.017303944 0 ;
	setAttr ".uvtk[341]" -type "float2" -0.0053039789 0 ;
	setAttr ".uvtk[342]" -type "float2" 0.01869607 0 ;
	setAttr ".uvtk[520]" -type "float2" 0.030696034 0 ;
	setAttr ".uvtk[521]" -type "float2" 0.042696059 0 ;
	setAttr ".uvtk[523]" -type "float2" -0.017303944 0 ;
	setAttr ".uvtk[524]" -type "float2" -0.0053039789 0 ;
	setAttr ".uvtk[528]" -type "float2" 0.006696105 0 ;
	setAttr ".uvtk[530]" -type "float2" 0.01869607 0 ;
	setAttr ".uvtk[532]" -type "float2" 0.030696034 0 ;
	setAttr ".uvtk[585]" -type "float2" -0.0053039789 0 ;
	setAttr ".uvtk[586]" -type "float2" 0.006696105 0 ;
	setAttr ".uvtk[588]" -type "float2" 0.01869607 0 ;
	setAttr ".uvtk[590]" -type "float2" 0.006696105 0 ;
	setAttr ".uvtk[599]" -type "float2" -1.2089052 0.25211191 ;
	setAttr ".uvtk[600]" -type "float2" -0.053303957 0 ;
	setAttr ".uvtk[601]" -type "float2" -0.041303992 0 ;
	setAttr ".uvtk[602]" -type "float2" -0.053303957 0 ;
	setAttr ".uvtk[603]" -type "float2" -0.053303957 0 ;
createNode polyMapSewMove -n "polyMapSewMove1";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "e[242]";
createNode polyTweakUV -n "polyTweakUV9";
	setAttr ".uopa" yes;
	setAttr ".uvtk[16]" -type "float2" -0.4671042 -0.022879481;
createNode polyMapCut -n "polyMapCut7";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 11 "e[28]" "e[30]" "e[53:54]" "e[85:86]" "e[125:126]" "e[181:182]" "e[243:244]" "e[321:322]" "e[402:403]" "e[479:480]" "e[552:553]";
createNode polyMapCut -n "polyMapCut8";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 20 "e[27]" "e[29]" "e[31]" "e[52]" "e[55]" "e[84]" "e[87]" "e[124]" "e[127]" "e[180]" "e[183]" "e[242]" "e[245]" "e[320]" "e[323]" "e[401]" "e[404]" "e[478]" "e[481]" "e[551]";
createNode polyTweakUV -n "polyTweakUV10";
	setAttr ".uopa" yes;
	setAttr -s 414 ".uvtk";
	setAttr ".uvtk[16]" -type "float2" 0.39951968 2.3841858e-007 ;
	setAttr ".uvtk[17]" -type "float2" -0.0046933293 0 ;
	setAttr ".uvtk[18]" -type "float2" -0.003911078 0 ;
	setAttr ".uvtk[19]" -type "float2" -0.0031288564 0 ;
	setAttr ".uvtk[29]" -type "float2" -0.0046933293 0 ;
	setAttr ".uvtk[30]" -type "float2" -0.003911078 0 ;
	setAttr ".uvtk[31]" -type "float2" -0.0054755211 0 ;
	setAttr ".uvtk[32]" -type "float2" -0.0023466647 0 ;
	setAttr ".uvtk[33]" -type "float2" -0.0031288862 0 ;
	setAttr ".uvtk[45]" -type "float2" -0.0046933293 0 ;
	setAttr ".uvtk[46]" -type "float2" -0.24415508 0.0014399644 ;
	setAttr ".uvtk[47]" -type "float2" -0.003911078 0 ;
	setAttr ".uvtk[48]" -type "float2" -0.0054755211 0 ;
	setAttr ".uvtk[49]" -type "float2" -0.0062577724 0 ;
	setAttr ".uvtk[50]" -type "float2" -0.0015644431 0 ;
	setAttr ".uvtk[51]" -type "float2" -0.20105082 0.0014399644 ;
	setAttr ".uvtk[65]" -type "float2" -0.2868436 -0.024770254 ;
	setAttr ".uvtk[66]" -type "float2" -0.24415511 -0.024770254 ;
	setAttr ".uvtk[67]" -type "float2" -0.0023466647 0 ;
	setAttr ".uvtk[68]" -type "float2" -0.0031288862 0 ;
	setAttr ".uvtk[69]" -type "float2" -0.0054755211 0 ;
	setAttr ".uvtk[70]" -type "float2" -0.0062577724 0 ;
	setAttr ".uvtk[71]" -type "float2" -0.0070399642 0 ;
	setAttr ".uvtk[72]" -type "float2" -0.15814108 0.0014399644 ;
	setAttr ".uvtk[73]" -type "float2" -0.20146671 -0.024770254 ;
	setAttr ".uvtk[94]" -type "float2" -0.28660893 -0.028141506 ;
	setAttr ".uvtk[95]" -type "float2" -0.2441552 -0.028141506 ;
	setAttr ".uvtk[96]" -type "float2" -0.32938695 -0.024770254 ;
	setAttr ".uvtk[97]" -type "float2" -0.00078219175 0 ;
	setAttr ".uvtk[98]" -type "float2" -0.0015644431 0 ;
	setAttr ".uvtk[99]" -type "float2" -0.0023466647 0 ;
	setAttr ".uvtk[100]" -type "float2" -0.0062577724 0 ;
	setAttr ".uvtk[101]" -type "float2" -0.0070399642 0 ;
	setAttr ".uvtk[102]" -type "float2" -0.11559245 0.0014399644 ;
	setAttr ".uvtk[103]" -type "float2" -0.15892327 -0.024770254 ;
	setAttr ".uvtk[104]" -type "float2" -0.20170137 -0.028141506 ;
	setAttr ".uvtk[124]" -type "float2" -0.28632361 0.10395002 ;
	setAttr ".uvtk[127]" -type "float2" -0.28646457 -0.037457645 ;
	setAttr ".uvtk[128]" -type "float2" -0.2441552 -0.037457645 ;
	setAttr ".uvtk[129]" -type "float2" -0.32894456 -0.028141506 ;
	setAttr ".uvtk[130]" -type "float2" -0.37165976 -0.024770254 ;
	setAttr ".uvtk[131]" -type "float2" -0.007822156 0 ;
	setAttr ".uvtk[133]" -type "float2" -0.00078219175 0 ;
	setAttr ".uvtk[134]" -type "float2" -0.0015644431 0 ;
	setAttr ".uvtk[135]" -type "float2" -0.0070399642 0 ;
	setAttr ".uvtk[136]" -type "float2" -0.07352218 0.0014399644 ;
	setAttr ".uvtk[137]" -type "float2" -0.11665058 -0.024770254 ;
	setAttr ".uvtk[138]" -type "float2" -0.15936568 -0.028141506 ;
	setAttr ".uvtk[139]" -type "float2" -0.20184571 -0.037457645 ;
	setAttr ".uvtk[160]" -type "float2" -0.32840568 0.10395002 ;
	setAttr ".uvtk[162]" -type "float2" -0.24415517 0.10299629 ;
	setAttr ".uvtk[163]" -type "float2" -0.28627473 0.10299629 ;
	setAttr ".uvtk[164]" -type "float2" -0.28627801 0.10306418 ;
	setAttr ".uvtk[165]" -type "float2" -0.24415517 0.10306418 ;
	setAttr ".uvtk[166]" -type "float2" -0.28627491 0.1025081 ;
	setAttr ".uvtk[167]" -type "float2" -0.24415517 0.1025081 ;
	setAttr ".uvtk[168]" -type "float2" -0.28631598 0.034463137 ;
	setAttr ".uvtk[169]" -type "float2" -0.28628474 0.069929257 ;
	setAttr ".uvtk[170]" -type "float2" -0.24415517 0.069929257 ;
	setAttr ".uvtk[171]" -type "float2" -0.24415517 0.034463137 ;
	setAttr ".uvtk[172]" -type "float2" -0.2863729 -0.0026629269 ;
	setAttr ".uvtk[173]" -type "float2" -0.2441552 -0.0026629269 ;
	setAttr ".uvtk[174]" -type "float2" -0.32867211 -0.037457645 ;
	setAttr ".uvtk[175]" -type "float2" -0.37105912 -0.028141506 ;
	setAttr ".uvtk[176]" -type "float2" -0.41357052 -0.024770254 ;
	setAttr ".uvtk[177]" -type "float2" -0.007822156 0 ;
	setAttr ".uvtk[178]" -type "float2" 0.0070400238 0 ;
	setAttr ".uvtk[179]" -type "float2" 0.00078225136 0 ;
	setAttr ".uvtk[181]" -type "float2" -0.00078219175 0 ;
	setAttr ".uvtk[182]" -type "float2" -0.031988382 0.0014399644 ;
	setAttr ".uvtk[183]" -type "float2" -0.074739784 -0.024770254 ;
	setAttr ".uvtk[184]" -type "float2" -0.11725125 -0.028141506 ;
	setAttr ".uvtk[185]" -type "float2" -0.15963826 -0.037457645 ;
	setAttr ".uvtk[186]" -type "float2" -0.20193738 -0.0026629269 ;
	setAttr ".uvtk[187]" -type "float2" -0.2019943 0.034463137 ;
	setAttr ".uvtk[188]" -type "float2" -0.20202556 0.069929257 ;
	setAttr ".uvtk[189]" -type "float2" -0.20203555 0.10299629 ;
	setAttr ".uvtk[190]" -type "float2" -0.2020354 0.1025081 ;
	setAttr ".uvtk[191]" -type "float2" -0.2020323 0.10306418 ;
	setAttr ".uvtk[211]" -type "float2" -0.37032521 0.10395002 ;
	setAttr ".uvtk[213]" -type "float2" -0.32831323 0.10299629 ;
	setAttr ".uvtk[214]" -type "float2" -0.32831943 0.10306418 ;
	setAttr ".uvtk[215]" -type "float2" -0.32831353 0.1025081 ;
	setAttr ".uvtk[216]" -type "float2" -0.32839119 0.034463137 ;
	setAttr ".uvtk[217]" -type "float2" -0.32833207 0.069929257 ;
	setAttr ".uvtk[218]" -type "float2" -0.32849884 -0.0026629269 ;
	setAttr ".uvtk[219]" -type "float2" -0.3706882 -0.037457645 ;
	setAttr ".uvtk[220]" -type "float2" -0.41287625 -0.028141506 ;
	setAttr ".uvtk[221]" -type "float2" 0.37159562 -0.024770254 ;
	setAttr ".uvtk[222]" -type "float2" -0.007822156 0 ;
	setAttr ".uvtk[223]" -type "float2" 0.0070400238 0 ;
	setAttr ".uvtk[224]" -type "float2" 0.0062577724 0 ;
	setAttr ".uvtk[225]" -type "float2" 0.0015644431 0 ;
	setAttr ".uvtk[226]" -type "float2" 0.00078219175 0 ;
	setAttr ".uvtk[227]" -type "float2" 0.0090093017 0.0014399644 ;
	setAttr ".uvtk[228]" -type "float2" -0.033239365 -0.024770254 ;
	setAttr ".uvtk[229]" -type "float2" -0.075434029 -0.028141506 ;
	setAttr ".uvtk[230]" -type "float2" -0.11762208 -0.037457645 ;
	setAttr ".uvtk[231]" -type "float2" -0.15981144 -0.0026629269 ;
	setAttr ".uvtk[232]" -type "float2" -0.15991911 0.034463137 ;
	setAttr ".uvtk[233]" -type "float2" -0.15997821 0.069929257 ;
	setAttr ".uvtk[234]" -type "float2" -0.15999708 0.10299629 ;
	setAttr ".uvtk[235]" -type "float2" -0.15999684 0.1025081 ;
	setAttr ".uvtk[236]" -type "float2" -0.15999088 0.10306418 ;
	setAttr ".uvtk[254]" -type "float2" -0.41202509 0.10395002 ;
	setAttr ".uvtk[256]" -type "float2" -0.37019914 0.10299629 ;
	setAttr ".uvtk[257]" -type "float2" -0.37020755 0.10306418 ;
	setAttr ".uvtk[258]" -type "float2" -0.37019944 0.1025081 ;
	setAttr ".uvtk[259]" -type "float2" -0.37030548 0.034463137 ;
	setAttr ".uvtk[260]" -type "float2" -0.37022489 0.069929257 ;
	setAttr ".uvtk[261]" -type "float2" -0.37045223 -0.0026629269 ;
	setAttr ".uvtk[262]" -type "float2" -0.41244662 -0.037457645 ;
	setAttr ".uvtk[263]" -type "float2" 0.37231231 -0.028141506 ;
	setAttr ".uvtk[264]" -type "float2" 0.33051002 -0.024770254 ;
	setAttr ".uvtk[266]" -type "float2" 0.0062577724 0 ;
	setAttr ".uvtk[267]" -type "float2" 0.0054755211 0 ;
	setAttr ".uvtk[268]" -type "float2" 0.0023466349 0 ;
	setAttr ".uvtk[269]" -type "float2" 0.049521983 0.0014399644 ;
	setAttr ".uvtk[270]" -type "float2" 0.0078461766 -0.024770254 ;
	setAttr ".uvtk[271]" -type "float2" -0.033956021 -0.028141506 ;
	setAttr ".uvtk[272]" -type "float2" -0.075863779 -0.037457645 ;
	setAttr ".uvtk[273]" -type "float2" -0.11785808 -0.0026629269 ;
	setAttr ".uvtk[274]" -type "float2" -0.11800477 0.034463137 ;
	setAttr ".uvtk[275]" -type "float2" -0.11808544 0.069929257 ;
	setAttr ".uvtk[276]" -type "float2" -0.11811122 0.10299629 ;
	setAttr ".uvtk[277]" -type "float2" -0.11811084 0.1025081 ;
	setAttr ".uvtk[278]" -type "float2" -0.1181027 0.10306418 ;
	setAttr ".uvtk[294]" -type "float2" 0.37319434 0.10395002 ;
	setAttr ".uvtk[295]" -type "float2" -0.41187841 0.10299629 ;
	setAttr ".uvtk[296]" -type "float2" -0.41188836 0.10306418 ;
	setAttr ".uvtk[297]" -type "float2" -0.41187888 0.1025081 ;
	setAttr ".uvtk[298]" -type "float2" -0.41200215 0.034463137 ;
	setAttr ".uvtk[299]" -type "float2" -0.41190839 0.069929257 ;
	setAttr ".uvtk[300]" -type "float2" -0.41217262 -0.0026629269 ;
	setAttr ".uvtk[301]" -type "float2" 0.37275696 -0.037457645 ;
	setAttr ".uvtk[302]" -type "float2" 0.33117938 -0.028141506 ;
	setAttr ".uvtk[303]" -type "float2" 0.2898041 -0.024770254 ;
	setAttr ".uvtk[304]" -type "float2" 0.0015644431 0 ;
	setAttr ".uvtk[305]" -type "float2" 0.00078219175 0 ;
	setAttr ".uvtk[306]" -type "float2" 0.0062577724 0 ;
	setAttr ".uvtk[307]" -type "float2" 0.0054755211 0 ;
	setAttr ".uvtk[308]" -type "float2" 0.089639783 0.0014399644 ;
	setAttr ".uvtk[309]" -type "float2" 0.048552155 -0.024770254 ;
	setAttr ".uvtk[310]" -type "float2" 0.0071768761 -0.028141506 ;
	setAttr ".uvtk[311]" -type "float2" -0.034400821 -0.037457645 ;
	setAttr ".uvtk[312]" -type "float2" -0.076137692 -0.0026629269 ;
	setAttr ".uvtk[313]" -type "float2" -0.076308161 0.034463137 ;
	setAttr ".uvtk[314]" -type "float2" -0.076401949 0.069929257 ;
	setAttr ".uvtk[315]" -type "float2" -0.0764319 0.10299629 ;
	setAttr ".uvtk[316]" -type "float2" -0.076431453 0.1025081 ;
	setAttr ".uvtk[317]" -type "float2" -0.076422006 0.10306418 ;
	setAttr ".uvtk[331]" -type "float2" 0.33200622 0.10395002 ;
	setAttr ".uvtk[333]" -type "float2" 0.37334657 0.10299629 ;
	setAttr ".uvtk[334]" -type "float2" 0.37334609 0.1025081 ;
	setAttr ".uvtk[335]" -type "float2" 0.37321806 0.034463137 ;
	setAttr ".uvtk[336]" -type "float2" 0.37331533 0.069929257 ;
	setAttr ".uvtk[337]" -type "float2" 0.37304115 -0.0026629269 ;
	setAttr ".uvtk[338]" -type "float2" 0.3315959 -0.037457645 ;
	setAttr ".uvtk[339]" -type "float2" 0.29036438 -0.028141506 ;
	setAttr ".uvtk[340]" -type "float2" 0.24941015 -0.024770254 ;
	setAttr ".uvtk[341]" -type "float2" 0.0046933889 0 ;
	setAttr ".uvtk[342]" -type "float2" 0.0031288862 0 ;
	setAttr ".uvtk[343]" -type "float2" 0.12948024 0.0014399644 ;
	setAttr ".uvtk[344]" -type "float2" 0.088945985 -0.024770254 ;
	setAttr ".uvtk[345]" -type "float2" 0.047991812 -0.028141506 ;
	setAttr ".uvtk[346]" -type "float2" 0.0067602992 -0.037457645 ;
	setAttr ".uvtk[347]" -type "float2" -0.034684867 -0.0026629269 ;
	setAttr ".uvtk[348]" -type "float2" -0.034861833 0.034463137 ;
	setAttr ".uvtk[349]" -type "float2" -0.034959257 0.069929257 ;
	setAttr ".uvtk[350]" -type "float2" -0.03499037 0.10299629 ;
	setAttr ".uvtk[351]" -type "float2" -0.034989893 0.1025081 ;
	setAttr ".uvtk[352]" -type "float2" -0.034980118 0.10306418 ;
	setAttr ".uvtk[364]" -type "float2" 0.29105878 0.10395002 ;
	setAttr ".uvtk[366]" -type "float2" 0.33214927 0.10299629 ;
	setAttr ".uvtk[367]" -type "float2" 0.33213973 0.10306418 ;
	setAttr ".uvtk[368]" -type "float2" 0.33214891 0.1025081 ;
	setAttr ".uvtk[369]" -type "float2" 0.33202863 0.034463137 ;
	setAttr ".uvtk[370]" -type "float2" 0.33212018 0.069929257 ;
	setAttr ".uvtk[371]" -type "float2" 0.33186245 -0.0026629269 ;
	setAttr ".uvtk[372]" -type "float2" 0.29071391 -0.037457645 ;
	setAttr ".uvtk[373]" -type "float2" 0.24981225 -0.028141506 ;
	setAttr ".uvtk[374]" -type "float2" 0.2092371 -0.024770254 ;
	setAttr ".uvtk[375]" -type "float2" 0.16917801 0.0014399644 ;
	setAttr ".uvtk[376]" -type "float2" 0.12911904 -0.024770254 ;
	setAttr ".uvtk[377]" -type "float2" 0.088543952 -0.028141506 ;
	setAttr ".uvtk[378]" -type "float2" 0.047642291 -0.037457645 ;
	setAttr ".uvtk[379]" -type "float2" 0.0064938068 -0.0026629269 ;
	setAttr ".uvtk[380]" -type "float2" 0.0063276291 0.034463137 ;
	setAttr ".uvtk[381]" -type "float2" 0.006236136 0.069929257 ;
	setAttr ".uvtk[382]" -type "float2" 0.0062068701 0.10299629 ;
	setAttr ".uvtk[383]" -type "float2" 0.0062072873 0.1025081 ;
	setAttr ".uvtk[384]" -type "float2" 0.006216526 0.10306418 ;
	setAttr ".uvtk[394]" -type "float2" 0.25031161 0.10395002 ;
	setAttr ".uvtk[396]" -type "float2" 0.29117918 0.10299629 ;
	setAttr ".uvtk[397]" -type "float2" 0.29117107 0.10306418 ;
	setAttr ".uvtk[398]" -type "float2" 0.29117882 0.1025081 ;
	setAttr ".uvtk[399]" -type "float2" 0.29107761 0.034463137 ;
	setAttr ".uvtk[400]" -type "float2" 0.29115462 0.069929257 ;
	setAttr ".uvtk[401]" -type "float2" 0.29093778 -0.0026629269 ;
	setAttr ".uvtk[402]" -type "float2" 0.25006342 -0.037457645 ;
	setAttr ".uvtk[403]" -type "float2" 0.20718229 -0.043745704 ;
	setAttr ".uvtk[404]" -type "float2" 0.16917801 -0.024770254 ;
	setAttr ".uvtk[405]" -type "float2" 0.13152111 -0.043762572 ;
	setAttr ".uvtk[406]" -type "float2" 0.088292778 -0.037457645 ;
	setAttr ".uvtk[407]" -type "float2" 0.047418416 -0.0026629269 ;
	setAttr ".uvtk[408]" -type "float2" 0.047278583 0.034463137 ;
	setAttr ".uvtk[409]" -type "float2" 0.047201574 0.069929257 ;
	setAttr ".uvtk[410]" -type "float2" 0.047176957 0.10299629 ;
	setAttr ".uvtk[411]" -type "float2" 0.047177315 0.1025081 ;
	setAttr ".uvtk[412]" -type "float2" 0.047185063 0.10306418 ;
	setAttr ".uvtk[416]" -type "float2" 0.26170504 0.050210625 ;
	setAttr ".uvtk[417]" -type "float2" 0.23786104 0.023912966 ;
	setAttr ".uvtk[418]" -type "float2" 0.21161139 -0.0037388802 ;
	setAttr ".uvtk[419]" -type "float2" 0.17117041 -0.0086506009 ;
	setAttr ".uvtk[421]" -type "float2" 0.094501734 0.022467315 ;
	setAttr ".uvtk[422]" -type "float2" 0.082162857 0.049797535 ;
	setAttr ".uvtk[424]" -type "float2" 0.20976067 0.10316476 ;
	setAttr ".uvtk[426]" -type "float2" 0.2503984 0.10299629 ;
	setAttr ".uvtk[427]" -type "float2" 0.25039256 0.10306418 ;
	setAttr ".uvtk[428]" -type "float2" 0.25039816 0.1025081 ;
	setAttr ".uvtk[429]" -type "float2" 0.2503252 0.034463137 ;
	setAttr ".uvtk[430]" -type "float2" 0.25038075 0.069929257 ;
	setAttr ".uvtk[431]" -type "float2" 0.25022459 -0.0026629269 ;
	setAttr ".uvtk[432]" -type "float2" 0.20298231 -0.033249617 ;
	setAttr ".uvtk[433]" -type "float2" 0.1692642 -0.042975016 ;
	setAttr ".uvtk[434]" -type "float2" 0.13631028 -0.033313572 ;
	setAttr ".uvtk[435]" -type "float2" 0.088131607 -0.0026629269 ;
	setAttr ".uvtk[436]" -type "float2" 0.088030934 0.034463137 ;
	setAttr ".uvtk[437]" -type "float2" 0.087975442 0.069929257 ;
	setAttr ".uvtk[438]" -type "float2" 0.08795774 0.10299629 ;
	setAttr ".uvtk[439]" -type "float2" 0.087957978 0.1025081 ;
	setAttr ".uvtk[440]" -type "float2" 0.087963581 0.10306418 ;
	setAttr ".uvtk[443]" -type "float2" 0.25923371 0.068985432 ;
	setAttr ".uvtk[444]" -type "float2" 0.20975304 0.10299629 ;
	setAttr ".uvtk[445]" -type "float2" 0.20974994 0.10306418 ;
	setAttr ".uvtk[446]" -type "float2" 0.20975304 0.1025081 ;
	setAttr ".uvtk[447]" -type "float2" 0.20971477 0.034463137 ;
	setAttr ".uvtk[448]" -type "float2" 0.20974374 0.069929257 ;
	setAttr ".uvtk[449]" -type "float2" 0.20966208 -0.0026629269 ;
	setAttr ".uvtk[450]" -type "float2" 0.16924906 -0.022670805 ;
	setAttr ".uvtk[451]" -type "float2" 0.12845457 0.00013038516 ;
	setAttr ".uvtk[452]" -type "float2" 0.12864137 0.034463137 ;
	setAttr ".uvtk[453]" -type "float2" 0.1286124 0.069929257 ;
	setAttr ".uvtk[454]" -type "float2" 0.1286031 0.10299629 ;
	setAttr ".uvtk[455]" -type "float2" 0.12860328 0.1025081 ;
	setAttr ".uvtk[456]" -type "float2" 0.1286062 0.10306418 ;
	setAttr ".uvtk[457]" -type "float2" 0.18555069 0.11322162 ;
	setAttr ".uvtk[458]" -type "float2" 0.18604064 0.11132139 ;
	setAttr ".uvtk[459]" -type "float2" 0.16041279 0.066141695 ;
	setAttr ".uvtk[460]" -type "float2" 0.16323566 0.035364807 ;
	setAttr ".uvtk[461]" -type "float2" 0.17119801 0.0051874816 ;
	setAttr ".uvtk[462]" -type "float2" 0.16859734 6.8604946e-005 ;
	setAttr ".uvtk[463]" -type "float2" 0.16978502 -0.0022926331 ;
	setAttr ".uvtk[464]" -type "float2" 0.16861308 -6.5386295e-005 ;
	setAttr ".uvtk[465]" -type "float2" 0.16708565 0.0073368251 ;
	setAttr ".uvtk[466]" -type "float2" 0.18065035 0.034880698 ;
	setAttr ".uvtk[467]" -type "float2" 0.18283492 0.065899342 ;
	setAttr ".uvtk[468]" -type "float2" 0.15619576 0.11212161 ;
	setAttr ".uvtk[469]" -type "float2" 0.15670729 0.11399525 ;
	setAttr ".uvtk[470]" -type "float2" 0.16572332 -0.00076723099 ;
	setAttr ".uvtk[471]" -type "float2" 0.16551757 0.0063143373 ;
	setAttr ".uvtk[472]" -type "float2" 0.18626481 0.035955131 ;
	setAttr ".uvtk[473]" -type "float2" 0.17237622 0.0084536672 ;
	setAttr ".uvtk[474]" -type "float2" 0.17177033 -0.00079751015 ;
	setAttr ".uvtk[475]" -type "float2" 0.16987085 -0.0042932034 ;
	setAttr ".uvtk[476]" -type "float2" 0.18351817 0.11118749 ;
	setAttr ".uvtk[477]" -type "float2" 0.18449795 0.11278424 ;
	setAttr ".uvtk[478]" -type "float2" 0.18798363 0.066194549 ;
	setAttr ".uvtk[479]" -type "float2" 0.15775132 0.11351955 ;
	setAttr ".uvtk[480]" -type "float2" 0.15870643 0.11192873 ;
	setAttr ".uvtk[481]" -type "float2" 0.15525603 0.066441 ;
	setAttr ".uvtk[482]" -type "float2" 0.15757155 0.036384553 ;
	setAttr ".uvtk[483]" -type "float2" 0.15190041 0.10078087 ;
	setAttr ".uvtk[485]" -type "float2" 0.19792521 0.10202712 ;
	setAttr ".uvtk[487]" -type "float2" 0.25517404 0.068885162 ;
	setAttr ".uvtk[488]" -type "float2" 0.25759089 0.049425632 ;
	setAttr ".uvtk[489]" -type "float2" 0.23449755 0.023064703 ;
	setAttr ".uvtk[490]" -type "float2" 0.20975685 -0.0037791133 ;
	setAttr ".uvtk[491]" -type "float2" 0.17108953 -0.0085937381 ;
	setAttr ".uvtk[492]" -type "float2" 0.1287775 -0.0033229589 ;
	setAttr ".uvtk[493]" -type "float2" 0.098261237 0.02152133 ;
	setAttr ".uvtk[494]" -type "float2" 0.086262703 0.049058169 ;
	setAttr ".uvtk[495]" -type "float2" 0.087980628 0.06921877 ;
	setAttr ".uvtk[496]" -type "float2" 0.14765358 0.10243124 ;
	setAttr ".uvtk[497]" -type "float2" 0.15237236 0.1031183 ;
	setAttr ".uvtk[498]" -type "float2" 0.20971 0.10390303 ;
	setAttr ".uvtk[499]" -type "float2" 0.25031614 0.10390303 ;
	setAttr ".uvtk[500]" -type "float2" 0.2910651 0.10390303 ;
	setAttr ".uvtk[501]" -type "float2" 0.33201361 0.10390303 ;
	setAttr ".uvtk[502]" -type "float2" -0.41201746 0.10390303 ;
	setAttr ".uvtk[503]" -type "float2" -0.37031871 0.10390303 ;
	setAttr ".uvtk[504]" -type "float2" -0.32840085 0.10390303 ;
	setAttr ".uvtk[505]" -type "float2" -0.2863211 0.10390303 ;
	setAttr ".uvtk[506]" -type "float2" -0.24415517 0.10390303 ;
	setAttr ".uvtk[507]" -type "float2" -0.20198923 0.10390303 ;
	setAttr ".uvtk[508]" -type "float2" -0.15990943 0.10390303 ;
	setAttr ".uvtk[509]" -type "float2" -0.11799166 0.10390303 ;
	setAttr ".uvtk[510]" -type "float2" -0.076292902 0.10390303 ;
	setAttr ".uvtk[511]" -type "float2" -0.034845948 0.10390303 ;
	setAttr ".uvtk[512]" -type "float2" 0.0063425899 0.10390303 ;
	setAttr ".uvtk[513]" -type "float2" 0.04729116 0.10390303 ;
	setAttr ".uvtk[514]" -type "float2" 0.088039994 0.10390303 ;
	setAttr ".uvtk[515]" -type "float2" 0.12864614 0.10390303 ;
	setAttr ".uvtk[516]" -type "float2" 0.18941289 0.10326913 ;
	setAttr ".uvtk[517]" -type "float2" 0.19413877 0.10261109 ;
	setAttr ".uvtk[520]" -type "float2" 0.0023466349 0 ;
	setAttr ".uvtk[521]" -type "float2" 0.0015644431 0 ;
	setAttr ".uvtk[523]" -type "float2" 0.0054755211 0 ;
	setAttr ".uvtk[524]" -type "float2" 0.0046933889 0 ;
	setAttr ".uvtk[528]" -type "float2" 0.0039110184 0 ;
	setAttr ".uvtk[530]" -type "float2" 0.0031288862 0 ;
	setAttr ".uvtk[532]" -type "float2" 0.0023466349 0 ;
	setAttr ".uvtk[536]" -type "float2" 0.41309595 -0.024770254 ;
	setAttr ".uvtk[539]" -type "float2" 0.41379023 -0.028141506 ;
	setAttr ".uvtk[540]" -type "float2" 0.37333632 0.10306418 ;
	setAttr ".uvtk[541]" -type "float2" 0.41477823 0.10306418 ;
	setAttr ".uvtk[542]" -type "float2" 0.41478801 0.10299629 ;
	setAttr ".uvtk[543]" -type "float2" 0.41478789 0.1025081 ;
	setAttr ".uvtk[544]" -type "float2" 0.41466463 0.034463137 ;
	setAttr ".uvtk[545]" -type "float2" 0.41449392 -0.0026629269 ;
	setAttr ".uvtk[546]" -type "float2" 0.41421986 -0.037457645 ;
	setAttr ".uvtk[547]" -type "float2" 0.37320209 0.10390303 ;
	setAttr ".uvtk[548]" -type "float2" 0.41464901 0.10390303 ;
	setAttr ".uvtk[550]" -type "float2" 0.41475821 0.069929257 ;
	setAttr ".uvtk[553]" -type "float2" 0.14384222 0.10186163 ;
	setAttr ".uvtk[554]" -type "float2" 0.083919048 0.069328755 ;
	setAttr ".uvtk[559]" -type "float2" 0.12693548 -0.003252387 ;
	setAttr ".uvtk[563]" -type "float2" 0.18977392 0.10104766 ;
	setAttr ".uvtk[564]" -type "float2" 0.12864852 0.10395002 ;
	setAttr ".uvtk[567]" -type "float2" 0.088044465 0.10395002 ;
	setAttr ".uvtk[569]" -type "float2" 0.047297418 0.10395002 ;
	setAttr ".uvtk[571]" -type "float2" 0.0063499808 0.10395002 ;
	setAttr ".uvtk[573]" -type "float2" -0.034838021 0.10395002 ;
	setAttr ".uvtk[575]" -type "float2" -0.076285243 0.10395002 ;
	setAttr ".uvtk[577]" -type "float2" 0.41464138 0.10395002 ;
	setAttr ".uvtk[578]" -type "float2" -0.11798507 0.10395002 ;
	setAttr ".uvtk[580]" -type "float2" -0.1599046 0.10395002 ;
	setAttr ".uvtk[582]" -type "float2" -0.2019867 0.10395002 ;
	setAttr ".uvtk[584]" -type "float2" -0.24415517 0.10395002 ;
	setAttr ".uvtk[585]" -type "float2" 0.0046933889 0 ;
	setAttr ".uvtk[586]" -type "float2" 0.0039111376 0 ;
	setAttr ".uvtk[587]" -type "float2" 0.20887589 0.0014399644 ;
	setAttr ".uvtk[588]" -type "float2" 0.0031288862 0 ;
	setAttr ".uvtk[589]" -type "float2" 0.24871635 0.0014399644 ;
	setAttr ".uvtk[590]" -type "float2" 0.0039111376 0 ;
	setAttr ".uvtk[591]" -type "float2" 0.28883421 0.0014399644 ;
	setAttr ".uvtk[592]" -type "float2" -0.2872594 0.0014399644 ;
	setAttr ".uvtk[593]" -type "float2" 0.32934678 0.0014399644 ;
	setAttr ".uvtk[594]" -type "float2" -0.3301692 0.0014399644 ;
	setAttr ".uvtk[595]" -type "float2" 0.37034464 0.0014399644 ;
	setAttr ".uvtk[596]" -type "float2" -0.3727178 0.0014399644 ;
	setAttr ".uvtk[597]" -type "float2" -0.41478807 0.0014399644 ;
	setAttr ".uvtk[598]" -type "float2" 0.41187847 0.0014399644 ;
	setAttr ".uvtk[599]" -type "float2" 0.007822156 0 ;
	setAttr ".uvtk[600]" -type "float2" 0.007822156 0 ;
	setAttr ".uvtk[601]" -type "float2" 0.0070400238 0 ;
	setAttr ".uvtk[602]" -type "float2" 0.007822156 0 ;
	setAttr ".uvtk[603]" -type "float2" 0.0031288862 0 ;
	setAttr ".uvtk[604]" -type "float2" 0.0039110184 0 ;
	setAttr ".uvtk[605]" -type "float2" 0.0046933889 0 ;
	setAttr ".uvtk[606]" -type "float2" 0.0023466349 0 ;
	setAttr ".uvtk[607]" -type "float2" 0.0054755211 0 ;
	setAttr ".uvtk[608]" -type "float2" 0.0015644431 0 ;
	setAttr ".uvtk[609]" -type "float2" 0.0062577724 0 ;
	setAttr ".uvtk[610]" -type "float2" 0.00078225136 0 ;
	setAttr ".uvtk[611]" -type "float2" 0.0070400238 0 ;
	setAttr ".uvtk[613]" -type "float2" -0.007822156 0 ;
	setAttr ".uvtk[614]" -type "float2" 0.007822156 0 ;
	setAttr ".uvtk[615]" -type "float2" -0.00078219175 0 ;
	setAttr ".uvtk[616]" -type "float2" -0.0070399642 0 ;
	setAttr ".uvtk[617]" -type "float2" -0.0015644431 0 ;
	setAttr ".uvtk[618]" -type "float2" -0.0062577724 0 ;
	setAttr ".uvtk[619]" -type "float2" -0.0023466647 0 ;
	setAttr ".uvtk[620]" -type "float2" -0.0054755211 0 ;
	setAttr ".uvtk[621]" -type "float2" -0.0031288564 0 ;
	setAttr ".uvtk[622]" -type "float2" -0.0046933293 0 ;
	setAttr ".uvtk[623]" -type "float2" -0.003911078 0 ;
	setAttr ".uvtk[624]" -type "float2" 0.31073761 -1.1920929e-007 ;
	setAttr ".uvtk[625]" -type "float2" 0.2219553 -1.1920929e-007 ;
	setAttr ".uvtk[626]" -type "float2" 0.13317329 -1.1920929e-007 ;
	setAttr ".uvtk[627]" -type "float2" 0.044391215 0 ;
	setAttr ".uvtk[628]" -type "float2" -0.044391274 -1.1920929e-007 ;
	setAttr ".uvtk[629]" -type "float2" -0.13317329 1.1920929e-007 ;
	setAttr ".uvtk[630]" -type "float2" -0.22195551 -2.3841858e-007 ;
	setAttr ".uvtk[631]" -type "float2" -0.31073758 0 ;
	setAttr ".uvtk[632]" -type "float2" -0.39951992 1.1920929e-007 ;
	setAttr ".uvtk[633]" -type "float2" -0.48830229 -1.1920929e-007 ;
	setAttr ".uvtk[634]" -type "float2" -0.57708466 1.1920929e-007 ;
	setAttr ".uvtk[635]" -type "float2" -0.66586655 2.3841858e-007 ;
	setAttr ".uvtk[636]" -type "float2" -0.75464886 2.3841858e-007 ;
	setAttr ".uvtk[637]" -type "float2" -0.84343106 1.1920929e-007 ;
	setAttr ".uvtk[638]" -type "float2" 0.84343052 1.1920929e-007 ;
	setAttr ".uvtk[639]" -type "float2" 0.75464892 -3.5762787e-007 ;
	setAttr ".uvtk[640]" -type "float2" 0.66586661 5.9604645e-007 ;
	setAttr ".uvtk[641]" -type "float2" 0.57708418 -1.1920929e-007 ;
	setAttr ".uvtk[642]" -type "float2" 0.48830152 -3.5762787e-007 ;
	setAttr ".uvtk[643]" -type "float2" 0.0039110184 0 ;
	setAttr ".uvtk[644]" -type "float2" 0.0031288862 0 ;
	setAttr ".uvtk[645]" -type "float2" 0.0046933889 0 ;
	setAttr ".uvtk[646]" -type "float2" 0.0023466349 0 ;
	setAttr ".uvtk[647]" -type "float2" 0.0054755211 0 ;
	setAttr ".uvtk[648]" -type "float2" 0.0015644431 0 ;
	setAttr ".uvtk[649]" -type "float2" 0.0062577724 0 ;
	setAttr ".uvtk[650]" -type "float2" 0.00078225136 0 ;
	setAttr ".uvtk[651]" -type "float2" 0.0070400238 0 ;
	setAttr ".uvtk[653]" -type "float2" -0.00078219175 0 ;
	setAttr ".uvtk[654]" -type "float2" -0.0070399642 0 ;
	setAttr ".uvtk[655]" -type "float2" -0.0015644431 0 ;
	setAttr ".uvtk[656]" -type "float2" -0.0062577724 0 ;
	setAttr ".uvtk[657]" -type "float2" -0.0023466647 0 ;
	setAttr ".uvtk[658]" -type "float2" -0.0054755211 0 ;
	setAttr ".uvtk[659]" -type "float2" -0.0031288564 0 ;
	setAttr ".uvtk[660]" -type "float2" -0.003911078 0 ;
	setAttr ".uvtk[661]" -type "float2" -0.0046933293 0 ;
createNode polyCylProj -n "polyCylProj3";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 24 "f[54]" "f[61]" "f[79:80]" "f[87:88]" "f[108:110]" "f[117:119]" "f[140:147]" "f[154:161]" "f[182:189]" "f[196:203]" "f[222:229]" "f[236:243]" "f[260:267]" "f[274:281]" "f[296:303]" "f[308:315]" "f[328:335]" "f[338:345]" "f[356:371]" "f[380:393]" "f[396:427]" "f[431]" "f[433:516]" "f[537:539]";
	setAttr ".ix" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".ws" yes;
	setAttr ".pc" -type "double3" -0.042350530624389648 2.1575693488121033 -0.020425558090209961 ;
	setAttr ".ps" -type "double2" 180 4.3550502061843872 ;
	setAttr ".r" 8.8212828636169434;
createNode polyTweakUV -n "polyTweakUV11";
	setAttr ".uopa" yes;
	setAttr -s 297 ".uvtk";
	setAttr ".uvtk[46]" -type "float2" -0.12973005 0 ;
	setAttr ".uvtk[51]" -type "float2" -0.12954223 0 ;
	setAttr ".uvtk[65]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[66]" -type "float2" -0.11026356 0 ;
	setAttr ".uvtk[72]" -type "float2" -0.090984911 0 ;
	setAttr ".uvtk[73]" -type "float2" -0.090797126 0 ;
	setAttr ".uvtk[94]" -type "float2" -0.12943625 0 ;
	setAttr ".uvtk[95]" -type "float2" -0.11026362 0 ;
	setAttr ".uvtk[96]" -type "float2" -0.14910859 0 ;
	setAttr ".uvtk[102]" -type "float2" -0.14875537 0 ;
	setAttr ".uvtk[103]" -type "float2" -0.071771801 0 ;
	setAttr ".uvtk[104]" -type "float2" -0.071418554 0 ;
	setAttr ".uvtk[124]" -type "float2" -0.091090888 0 ;
	setAttr ".uvtk[127]" -type "float2" -0.12937105 0 ;
	setAttr ".uvtk[128]" -type "float2" -0.11026362 0 ;
	setAttr ".uvtk[129]" -type "float2" -0.14855558 0 ;
	setAttr ".uvtk[130]" -type "float2" -0.16832417 0 ;
	setAttr ".uvtk[136]" -type "float2" -0.16784632 0 ;
	setAttr ".uvtk[137]" -type "float2" -0.05268088 0 ;
	setAttr ".uvtk[138]" -type "float2" -0.052203029 0 ;
	setAttr ".uvtk[139]" -type "float2" -0.071971565 0 ;
	setAttr ".uvtk[160]" -type "float2" -0.091156125 0 ;
	setAttr ".uvtk[162]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[163]" -type "float2" -0.12928534 0 ;
	setAttr ".uvtk[164]" -type "float2" -0.12928683 0 ;
	setAttr ".uvtk[165]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[166]" -type "float2" -0.1292854 0 ;
	setAttr ".uvtk[167]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[168]" -type "float2" -0.12930399 0 ;
	setAttr ".uvtk[169]" -type "float2" -0.12928987 0 ;
	setAttr ".uvtk[170]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[171]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[172]" -type "float2" -0.12932968 0 ;
	setAttr ".uvtk[173]" -type "float2" -0.11026362 0 ;
	setAttr ".uvtk[174]" -type "float2" -0.14843249 0 ;
	setAttr ".uvtk[175]" -type "float2" -0.16757506 0 ;
	setAttr ".uvtk[176]" -type "float2" -0.18732363 0 ;
	setAttr ".uvtk[182]" -type "float2" -0.18677378 0 ;
	setAttr ".uvtk[183]" -type "float2" -0.033753455 0 ;
	setAttr ".uvtk[184]" -type "float2" -0.033203542 0 ;
	setAttr ".uvtk[185]" -type "float2" -0.05295217 0 ;
	setAttr ".uvtk[186]" -type "float2" -0.072094679 0 ;
	setAttr ".uvtk[187]" -type "float2" -0.091197491 0 ;
	setAttr ".uvtk[188]" -type "float2" -0.09122324 0 ;
	setAttr ".uvtk[189]" -type "float2" -0.091237336 0 ;
	setAttr ".uvtk[190]" -type "float2" -0.091241837 0 ;
	setAttr ".uvtk[191]" -type "float2" -0.091241807 0 ;
	setAttr ".uvtk[211]" -type "float2" -0.091240376 0 ;
	setAttr ".uvtk[213]" -type "float2" -0.14827049 0 ;
	setAttr ".uvtk[214]" -type "float2" -0.14827329 0 ;
	setAttr ".uvtk[215]" -type "float2" -0.14827061 0 ;
	setAttr ".uvtk[216]" -type "float2" -0.14830565 0 ;
	setAttr ".uvtk[217]" -type "float2" -0.14827895 0 ;
	setAttr ".uvtk[218]" -type "float2" -0.14835429 0 ;
	setAttr ".uvtk[219]" -type "float2" -0.16740751 0 ;
	setAttr ".uvtk[220]" -type "float2" -0.18646026 0 ;
	setAttr ".uvtk[221]" -type "float2" 0.1672523 0 ;
	setAttr ".uvtk[227]" -type "float2" 0.16781735 0 ;
	setAttr ".uvtk[228]" -type "float2" -0.015011311 0 ;
	setAttr ".uvtk[229]" -type "float2" -0.014446378 0 ;
	setAttr ".uvtk[230]" -type "float2" -0.034066975 0 ;
	setAttr ".uvtk[231]" -type "float2" -0.05311963 0 ;
	setAttr ".uvtk[232]" -type "float2" -0.07217291 0 ;
	setAttr ".uvtk[233]" -type "float2" -0.072221518 0 ;
	setAttr ".uvtk[234]" -type "float2" -0.072248191 0 ;
	setAttr ".uvtk[235]" -type "float2" -0.072256744 0 ;
	setAttr ".uvtk[236]" -type "float2" -0.072256625 0 ;
	setAttr ".uvtk[254]" -type "float2" -0.072253913 0 ;
	setAttr ".uvtk[256]" -type "float2" -0.16718668 0 ;
	setAttr ".uvtk[257]" -type "float2" -0.16719043 0 ;
	setAttr ".uvtk[258]" -type "float2" -0.16718686 0 ;
	setAttr ".uvtk[259]" -type "float2" -0.16723472 0 ;
	setAttr ".uvtk[260]" -type "float2" -0.16719824 0 ;
	setAttr ".uvtk[261]" -type "float2" -0.167301 0 ;
	setAttr ".uvtk[262]" -type "float2" -0.18626618 0 ;
	setAttr ".uvtk[263]" -type "float2" 0.16814089 0 ;
	setAttr ".uvtk[264]" -type "float2" 0.14873731 0 ;
	setAttr ".uvtk[269]" -type "float2" 0.14926255 0 ;
	setAttr ".uvtk[270]" -type "float2" 0.0035434365 0 ;
	setAttr ".uvtk[271]" -type "float2" 0.0040687323 0 ;
	setAttr ".uvtk[272]" -type "float2" -0.015334964 0 ;
	setAttr ".uvtk[273]" -type "float2" -0.034261048 0 ;
	setAttr ".uvtk[274]" -type "float2" -0.053226203 0 ;
	setAttr ".uvtk[275]" -type "float2" -0.053292483 0 ;
	setAttr ".uvtk[276]" -type "float2" -0.053328902 0 ;
	setAttr ".uvtk[277]" -type "float2" -0.053340524 0 ;
	setAttr ".uvtk[278]" -type "float2" -0.053340375 0 ;
	setAttr ".uvtk[294]" -type "float2" -0.05333671 0 ;
	setAttr ".uvtk[295]" -type "float2" -0.18600959 0 ;
	setAttr ".uvtk[296]" -type "float2" -0.18601406 0 ;
	setAttr ".uvtk[297]" -type "float2" -0.18600982 0 ;
	setAttr ".uvtk[298]" -type "float2" -0.1860655 0 ;
	setAttr ".uvtk[299]" -type "float2" -0.18602312 0 ;
	setAttr ".uvtk[300]" -type "float2" -0.18614239 0 ;
	setAttr ".uvtk[301]" -type "float2" 0.16834188 0 ;
	setAttr ".uvtk[302]" -type "float2" 0.14956486 0 ;
	setAttr ".uvtk[303]" -type "float2" 0.13044119 0 ;
	setAttr ".uvtk[308]" -type "float2" 0.13087928 0 ;
	setAttr ".uvtk[309]" -type "float2" 0.021926761 0 ;
	setAttr ".uvtk[310]" -type "float2" 0.022364736 0 ;
	setAttr ".uvtk[311]" -type "float2" 0.0032411814 0 ;
	setAttr ".uvtk[312]" -type "float2" -0.015535861 0 ;
	setAttr ".uvtk[313]" -type "float2" -0.034384757 0 ;
	setAttr ".uvtk[314]" -type "float2" -0.034461737 0 ;
	setAttr ".uvtk[315]" -type "float2" -0.034504116 0 ;
	setAttr ".uvtk[316]" -type "float2" -0.034517646 0 ;
	setAttr ".uvtk[317]" -type "float2" -0.034517407 0 ;
	setAttr ".uvtk[331]" -type "float2" -0.034513175 0 ;
	setAttr ".uvtk[333]" -type "float2" 0.16860819 0 ;
	setAttr ".uvtk[334]" -type "float2" 0.16860795 0 ;
	setAttr ".uvtk[335]" -type "float2" 0.16855001 0 ;
	setAttr ".uvtk[336]" -type "float2" 0.16859412 0 ;
	setAttr ".uvtk[337]" -type "float2" 0.16847014 0 ;
	setAttr ".uvtk[338]" -type "float2" 0.14975297 0 ;
	setAttr ".uvtk[339]" -type "float2" 0.13113225 0 ;
	setAttr ".uvtk[342]" -type "float2" 0.11232352 0 ;
	setAttr ".uvtk[343]" -type "float2" 0.1126368 0 ;
	setAttr ".uvtk[344]" -type "float2" 0.04016912 0 ;
	setAttr ".uvtk[345]" -type "float2" 0.040482461 0 ;
	setAttr ".uvtk[346]" -type "float2" 0.021673679 0 ;
	setAttr ".uvtk[347]" -type "float2" 0.0030530095 0 ;
	setAttr ".uvtk[348]" -type "float2" -0.01566413 0 ;
	setAttr ".uvtk[349]" -type "float2" -0.01574403 0 ;
	setAttr ".uvtk[350]" -type "float2" -0.015788049 0 ;
	setAttr ".uvtk[351]" -type "float2" -0.015802085 0 ;
	setAttr ".uvtk[363]" -type "float2" -0.015801907 0 ;
	setAttr ".uvtk[365]" -type "float2" -0.015797466 0 ;
	setAttr ".uvtk[366]" -type "float2" 0.15000296 0 ;
	setAttr ".uvtk[367]" -type "float2" 0.14999855 0 ;
	setAttr ".uvtk[368]" -type "float2" 0.15000272 0 ;
	setAttr ".uvtk[369]" -type "float2" 0.14994836 0 ;
	setAttr ".uvtk[370]" -type "float2" 0.1499896 0 ;
	setAttr ".uvtk[371]" -type "float2" 0.14987326 0 ;
	setAttr ".uvtk[372]" -type "float2" 0.1312902 0 ;
	setAttr ".uvtk[373]" -type "float2" 0.11281848 0 ;
	setAttr ".uvtk[374]" -type "float2" 0.094331026 0 ;
	setAttr ".uvtk[375]" -type "float2" 0.094494104 0 ;
	setAttr ".uvtk[376]" -type "float2" 0.05831182 0 ;
	setAttr ".uvtk[377]" -type "float2" 0.058474898 0 ;
	setAttr ".uvtk[378]" -type "float2" 0.039987564 0 ;
	setAttr ".uvtk[379]" -type "float2" 0.021515846 0 ;
	setAttr ".uvtk[380]" -type "float2" 0.0029327273 0 ;
	setAttr ".uvtk[381]" -type "float2" 0.0028576255 0 ;
	setAttr ".uvtk[382]" -type "float2" 0.0028163195 0 ;
	setAttr ".uvtk[383]" -type "float2" 0.0028030872 0 ;
	setAttr ".uvtk[393]" -type "float2" 0.002803266 0 ;
	setAttr ".uvtk[395]" -type "float2" 0.0028074384 0 ;
	setAttr ".uvtk[396]" -type "float2" 0.13150024 0 ;
	setAttr ".uvtk[397]" -type "float2" 0.13149667 0 ;
	setAttr ".uvtk[398]" -type "float2" 0.13150012 0 ;
	setAttr ".uvtk[399]" -type "float2" 0.13145447 0 ;
	setAttr ".uvtk[400]" -type "float2" 0.13148916 0 ;
	setAttr ".uvtk[401]" -type "float2" 0.13139129 0 ;
	setAttr ".uvtk[402]" -type "float2" 0.11293185 0 ;
	setAttr ".uvtk[403]" -type "float2" 0.094588757 0 ;
	setAttr ".uvtk[404]" -type "float2" 0.076403022 0 ;
	setAttr ".uvtk[405]" -type "float2" 0.076403022 0 ;
	setAttr ".uvtk[406]" -type "float2" 0.058217168 0 ;
	setAttr ".uvtk[407]" -type "float2" 0.039874136 0 ;
	setAttr ".uvtk[408]" -type "float2" 0.021414757 0 ;
	setAttr ".uvtk[409]" -type "float2" 0.021351635 0 ;
	setAttr ".uvtk[410]" -type "float2" 0.021316826 0 ;
	setAttr ".uvtk[411]" -type "float2" 0.02130574 0 ;
	setAttr ".uvtk[415]" -type "float2" 0.021305859 0 ;
	setAttr ".uvtk[416]" -type "float2" 0.021309376 0 ;
	setAttr ".uvtk[417]" -type "float2" 0.11308312 0 ;
	setAttr ".uvtk[418]" -type "float2" 0.1130805 0 ;
	setAttr ".uvtk[420]" -type "float2" 0.113083 0 ;
	setAttr ".uvtk[421]" -type "float2" 0.1130501 0 ;
	setAttr ".uvtk[423]" -type "float2" 0.11307514 0 ;
	setAttr ".uvtk[425]" -type "float2" 0.11300468 0 ;
	setAttr ".uvtk[426]" -type "float2" 0.094648123 0 ;
	setAttr ".uvtk[427]" -type "float2" 0.076403022 0 ;
	setAttr ".uvtk[428]" -type "float2" 0.058157861 0 ;
	setAttr ".uvtk[429]" -type "float2" 0.039801359 0 ;
	setAttr ".uvtk[430]" -type "float2" 0.03975594 0 ;
	setAttr ".uvtk[431]" -type "float2" 0.039730847 0 ;
	setAttr ".uvtk[432]" -type "float2" 0.0397228 0 ;
	setAttr ".uvtk[433]" -type "float2" 0.039722979 0 ;
	setAttr ".uvtk[434]" -type "float2" 0.039725482 0 ;
	setAttr ".uvtk[435]" -type "float2" 0.094727159 0 ;
	setAttr ".uvtk[436]" -type "float2" 0.094725847 0 ;
	setAttr ".uvtk[437]" -type "float2" 0.094727039 0 ;
	setAttr ".uvtk[438]" -type "float2" 0.094709873 0 ;
	setAttr ".uvtk[439]" -type "float2" 0.094722986 0 ;
	setAttr ".uvtk[442]" -type "float2" 0.094686151 0 ;
	setAttr ".uvtk[443]" -type "float2" 0.076403022 0 ;
	setAttr ".uvtk[444]" -type "float2" 0.05801177 0 ;
	setAttr ".uvtk[445]" -type "float2" 0.058096111 0 ;
	setAttr ".uvtk[446]" -type "float2" 0.058082998 0 ;
	setAttr ".uvtk[447]" -type "float2" 0.058078825 0 ;
	setAttr ".uvtk[448]" -type "float2" 0.058078885 0 ;
	setAttr ".uvtk[449]" -type "float2" 0.058080196 0 ;
	setAttr ".uvtk[450]" -type "float2" 0.091016889 0 ;
	setAttr ".uvtk[451]" -type "float2" 0.091019392 0 ;
	setAttr ".uvtk[452]" -type "float2" 0.091195345 0 ;
	setAttr ".uvtk[453]" -type "float2" 0.091752172 0 ;
	setAttr ".uvtk[454]" -type "float2" 0.091380596 0 ;
	setAttr ".uvtk[455]" -type "float2" 0.08767581 0 ;
	setAttr ".uvtk[456]" -type "float2" 0.076195955 0 ;
	setAttr ".uvtk[457]" -type "float2" 0.064395547 0 ;
	setAttr ".uvtk[458]" -type "float2" 0.06111598 0 ;
	setAttr ".uvtk[459]" -type "float2" 0.061440349 0 ;
	setAttr ".uvtk[460]" -type "float2" 0.061983824 0 ;
	setAttr ".uvtk[461]" -type "float2" 0.062155366 0 ;
	setAttr ".uvtk[462]" -type "float2" 0.062157869 0 ;
	setAttr ".uvtk[463]" -type "float2" 0.087734699 0 ;
	setAttr ".uvtk[464]" -type "float2" 0.091492176 0 ;
	setAttr ".uvtk[465]" -type "float2" 0.061379254 0 ;
	setAttr ".uvtk[466]" -type "float2" 0.061049283 0 ;
	setAttr ".uvtk[467]" -type "float2" 0.064333141 0 ;
	setAttr ".uvtk[468]" -type "float2" 0.076194763 0 ;
	setAttr ".uvtk[469]" -type "float2" 0.091078758 0 ;
	setAttr ".uvtk[470]" -type "float2" 0.091076136 0 ;
	setAttr ".uvtk[471]" -type "float2" 0.061924815 0 ;
	setAttr ".uvtk[472]" -type "float2" 0.062100172 0 ;
	setAttr ".uvtk[473]" -type "float2" 0.062097549 0 ;
	setAttr ".uvtk[474]" -type "float2" 0.091255665 0 ;
	setAttr ".uvtk[475]" -type "float2" 0.091814756 0 ;
	setAttr ".uvtk[476]" -type "float2" 0.0611552 0 ;
	setAttr ".uvtk[477]" -type "float2" 0.060582161 0 ;
	setAttr ".uvtk[478]" -type "float2" 0.060176194 0 ;
	setAttr ".uvtk[479]" -type "float2" 0.063506246 0 ;
	setAttr ".uvtk[480]" -type "float2" 0.07618022 0 ;
	setAttr ".uvtk[481]" -type "float2" 0.088514447 0 ;
	setAttr ".uvtk[482]" -type "float2" 0.09294641 0 ;
	setAttr ".uvtk[484]" -type "float2" 0.09263134 0 ;
	setAttr ".uvtk[486]" -type "float2" 0.092044353 0 ;
	setAttr ".uvtk[487]" -type "float2" 0.091851234 0 ;
	setAttr ".uvtk[488]" -type "float2" 0.091848254 0 ;
	setAttr ".uvtk[489]" -type "float2" 0.094707727 0 ;
	setAttr ".uvtk[490]" -type "float2" 0.11304593 0 ;
	setAttr ".uvtk[491]" -type "float2" 0.13144863 0 ;
	setAttr ".uvtk[492]" -type "float2" 0.14994168 0 ;
	setAttr ".uvtk[493]" -type "float2" -0.18607235 0 ;
	setAttr ".uvtk[494]" -type "float2" -0.16724068 0 ;
	setAttr ".uvtk[495]" -type "float2" -0.14831007 0 ;
	setAttr ".uvtk[496]" -type "float2" -0.12930626 0 ;
	setAttr ".uvtk[497]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[498]" -type "float2" -0.091220915 0 ;
	setAttr ".uvtk[499]" -type "float2" -0.072217137 0 ;
	setAttr ".uvtk[500]" -type "float2" -0.053286552 0 ;
	setAttr ".uvtk[501]" -type "float2" -0.034454852 0 ;
	setAttr ".uvtk[502]" -type "float2" -0.015736878 0 ;
	setAttr ".uvtk[503]" -type "float2" 0.0028643608 0 ;
	setAttr ".uvtk[504]" -type "float2" 0.021357298 0 ;
	setAttr ".uvtk[505]" -type "float2" 0.039759994 0 ;
	setAttr ".uvtk[506]" -type "float2" 0.058098257 0 ;
	setAttr ".uvtk[507]" -type "float2" 0.061346471 0 ;
	setAttr ".uvtk[508]" -type "float2" 0.061343729 0 ;
	setAttr ".uvtk[509]" -type "float2" 0.061109662 0 ;
	setAttr ".uvtk[510]" -type "float2" 0.060535014 0 ;
	setAttr ".uvtk[511]" -type "float2" 0.060124397 0 ;
	setAttr ".uvtk[512]" -type "float2" 0.063456595 0 ;
	setAttr ".uvtk[513]" -type "float2" 0.076179326 0 ;
	setAttr ".uvtk[514]" -type "float2" 0.088561296 0 ;
	setAttr ".uvtk[515]" -type "float2" 0.093032122 0 ;
	setAttr ".uvtk[534]" -type "float2" 0.09267962 0 ;
	setAttr ".uvtk[537]" -type "float2" 0.092090964 0 ;
	setAttr ".uvtk[538]" -type "float2" 0.091896772 0 ;
	setAttr ".uvtk[539]" -type "float2" 0.091893911 0 ;
	setAttr ".uvtk[540]" -type "float2" 0.094706774 0 ;
	setAttr ".uvtk[541]" -type "float2" 0.11304402 0 ;
	setAttr ".uvtk[542]" -type "float2" 0.13144588 0 ;
	setAttr ".uvtk[543]" -type "float2" 0.14993823 0 ;
	setAttr ".uvtk[544]" -type "float2" 0.1685394 0 ;
	setAttr ".uvtk[545]" -type "float2" -0.18607581 0 ;
	setAttr ".uvtk[546]" -type "float2" -0.1672436 0 ;
	setAttr ".uvtk[548]" -type "float2" -0.14831221 0 ;
	setAttr ".uvtk[551]" -type "float2" -0.12930739 0 ;
	setAttr ".uvtk[552]" -type "float2" -0.11026359 0 ;
	setAttr ".uvtk[557]" -type "float2" -0.091219753 0 ;
	setAttr ".uvtk[561]" -type "float2" -0.072214961 0 ;
	setAttr ".uvtk[562]" -type "float2" -0.053283572 0 ;
	setAttr ".uvtk[565]" -type "float2" -0.034451395 0 ;
	setAttr ".uvtk[567]" -type "float2" -0.015733302 0 ;
	setAttr ".uvtk[569]" -type "float2" 0.0028677583 0 ;
	setAttr ".uvtk[571]" -type "float2" 0.021360099 0 ;
	setAttr ".uvtk[573]" -type "float2" 0.03976202 0 ;
	setAttr ".uvtk[575]" -type "float2" 0.058099329 0 ;
	setAttr ".uvtk[576]" -type "float2" 0.061302006 0 ;
	setAttr ".uvtk[578]" -type "float2" 0.061299205 0 ;
	setAttr ".uvtk[648]" -type "float2" 0.18600953 0 ;
	setAttr ".uvtk[649]" -type "float2" 0.18655944 0 ;
	setAttr ".uvtk[650]" -type "float2" 0.18687296 0 ;
	setAttr ".uvtk[651]" -type "float2" 0.16860342 0 ;
	setAttr ".uvtk[652]" -type "float2" 0.18731904 0 ;
	setAttr ".uvtk[653]" -type "float2" 0.18732357 0 ;
	setAttr ".uvtk[654]" -type "float2" 0.18732345 0 ;
	setAttr ".uvtk[655]" -type "float2" 0.1872679 0 ;
	setAttr ".uvtk[656]" -type "float2" 0.18719089 0 ;
	setAttr ".uvtk[657]" -type "float2" 0.18706703 0 ;
	setAttr ".uvtk[658]" -type "float2" 0.16854286 0 ;
	setAttr ".uvtk[659]" -type "float2" 0.18726087 0 ;
	setAttr ".uvtk[660]" -type "float2" 0.18725729 0 ;
	setAttr ".uvtk[661]" -type "float2" 0.18730998 0 ;
createNode polyMapSewMove -n "polyMapSewMove2";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 1 "e[0:184]";
createNode polyMapCut -n "polyMapCut9";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 3 "e[0:1]" "e[128]" "e[160]";
createNode polyMapCut -n "polyMapCut10";
	setAttr ".uopa" yes;
	setAttr ".ics" -type "componentList" 2 "e[44]" "e[58]";
createNode polyTweakUV -n "polyTweakUV12";
	setAttr ".uopa" yes;
	setAttr -s 108 ".uvtk[0:107]" -type "float2" -0.12416441 -1.069131851
		 -0.16951568 0.24758221 -0.16871078 0.13874131 -0.16761191 0.031558514 -0.12367953
		 -0.98298478 -0.16700883 -0.036857583 -0.11348794 1.21146333 -0.16937222 0.27019686
		 0.61540097 1.23754203 -0.12674148 -0.40123564 -0.25904867 -1.079816937 -0.16607244
		 -0.14582849 -0.16921146 0.31807029 -0.16832371 0.36394328 -0.12522978 -0.98260903
		 -0.16625078 0.41922772 -0.16266258 -0.28004515 -0.16437288 -0.23488122 -0.16515394
		 -0.18679436 -0.25904867 -0.99435848 0.61540097 -0.97484273 -0.061198883 -0.98751265
		 -0.069370978 -0.98721355 -0.25904873 0.42675668 -0.25904873 0.26490003 -0.16400565
		 1.085213304 -0.16545214 1.084492087 -0.25904873 0.23981608 -0.25904873 -0.39438933
		 -0.25904867 1.073114038 0.61540097 1.1200279 -0.10285172 1.094444275 -0.25904873
		 -0.17608567 -0.1109135 1.093732119 -0.12535304 -1.06809032 -0.25904873 -0.21546966
		 -0.061345033 -1.074430585 -0.25904873 0.12466186 -0.061955854 -0.38045061 -0.25904873
		 0.012654753 -0.1005616 -0.25517207 -0.1014522 -0.22324343 -0.25904873 -0.055097725
		 -0.10248974 -0.18039472 -0.25904873 0.31709975 -0.10308918 -0.14909768 -0.10461465
		 -0.038976945 -0.2590487 0.36738265 -0.10555193 0.034496486 -0.10649267 0.14666905
		 -0.25904873 -0.31849745 -0.10676184 0.25356865 -0.25904873 -0.26825008 -0.10670903
		 0.2665059 -0.10634294 0.31118375 -0.10586396 0.34635204 0.61540097 1.13650596 -0.11146866
		 1.10986388 -0.11321847 0.39929485 0.61540091 0.40776116 -0.1160659 0.26581264 -0.11697738
		 0.25299174 0.61540091 0.27151608 0.61540091 0.28397804 -0.07054171 -0.38230047 -0.069849245
		 -1.073992372 0.61540097 -1.061868072 0.61540091 -0.40541378 -0.1131113 -0.14893401
		 -0.11187045 -0.18070801 0.61540091 -0.13971367 0.61540091 -0.10982311 -0.11570053
		 0.14588936 0.61540091 0.17020638 -0.11423485 0.034209132 0.61540091 0.063277081 -0.10499188
		 0.39737308 -0.11385565 -0.038864709 0.61540091 -0.0050741117 -0.10305449 1.11080182
		 0.61540091 0.32591015 -0.11645822 0.31186509 -0.16554834 1.099249959 0.61540097 0.35909647
		 -0.11573856 0.34809548 -0.16762359 0.42107117 0.61540091 -0.2108231 -0.11072674 -0.25789732
		 0.61540091 -0.18033043 -0.1118912 -0.22483797 -0.16882159 0.3649832 -0.16962768 0.31847668
		 -0.12838595 -0.40300813 -0.16300787 -0.28150982 -0.16467156 -0.23556519 -0.17000069
		 0.27016395 -0.16586079 -0.18706541 -0.16668715 -0.14552164 -0.16790147 -0.036769725
		 -0.16869994 0.031331182 -0.17007609 0.24688788 -0.1695915 0.138197 -0.062944703 -1.17685294
		 -0.10499863 1.21180904 0.61540097 -1.16436708 -0.25904867 1.087856293 -0.071513765
		 -1.1769855 -0.16453446 1.10056603;
createNode groupId -n "groupId10";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts8";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:83]";
createNode groupId -n "groupId11";
	setAttr ".ihi" 0;
createNode mentalrayItemsList -s -n "mentalrayItemsList";
	setAttr -s 17 ".opt";
createNode mentalrayGlobals -s -n "mentalrayGlobals";
	addAttr -ci true -h true -sn "sunAndSkyShader" -ln "sunAndSkyShader" -at "message";
	setAttr ".rvb" 3;
	setAttr ".ivb" no;
createNode mentalrayOptions -s -n "miDefaultOptions";
	addAttr -ci true -m -sn "stringOptions" -ln "stringOptions" -at "compound" -nc 
		3;
	addAttr -ci true -sn "name" -ln "name" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "value" -ln "value" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "type" -ln "type" -dt "string" -p "stringOptions";
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 3;
	setAttr ".rflr" 10;
	setAttr ".rfrr" 10;
	setAttr ".maxr" 20;
	setAttr ".fg" yes;
	setAttr -s 28 ".stringOptions";
	setAttr ".stringOptions[0].name" -type "string" "rast motion factor";
	setAttr ".stringOptions[0].value" -type "string" "1.0";
	setAttr ".stringOptions[0].type" -type "string" "scalar";
	setAttr ".stringOptions[1].name" -type "string" "rast transparency depth";
	setAttr ".stringOptions[1].value" -type "string" "8";
	setAttr ".stringOptions[1].type" -type "string" "integer";
	setAttr ".stringOptions[2].name" -type "string" "rast useopacity";
	setAttr ".stringOptions[2].value" -type "string" "true";
	setAttr ".stringOptions[2].type" -type "string" "boolean";
	setAttr ".stringOptions[3].name" -type "string" "importon";
	setAttr ".stringOptions[3].value" -type "string" "false";
	setAttr ".stringOptions[3].type" -type "string" "boolean";
	setAttr ".stringOptions[4].name" -type "string" "importon density";
	setAttr ".stringOptions[4].value" -type "string" "1.0";
	setAttr ".stringOptions[4].type" -type "string" "scalar";
	setAttr ".stringOptions[5].name" -type "string" "importon merge";
	setAttr ".stringOptions[5].value" -type "string" "0.0";
	setAttr ".stringOptions[5].type" -type "string" "scalar";
	setAttr ".stringOptions[6].name" -type "string" "importon trace depth";
	setAttr ".stringOptions[6].value" -type "string" "0";
	setAttr ".stringOptions[6].type" -type "string" "integer";
	setAttr ".stringOptions[7].name" -type "string" "importon traverse";
	setAttr ".stringOptions[7].value" -type "string" "true";
	setAttr ".stringOptions[7].type" -type "string" "boolean";
	setAttr ".stringOptions[8].name" -type "string" "shadowmap pixel samples";
	setAttr ".stringOptions[8].value" -type "string" "3";
	setAttr ".stringOptions[8].type" -type "string" "integer";
	setAttr ".stringOptions[9].name" -type "string" "ambient occlusion";
	setAttr ".stringOptions[9].value" -type "string" "false";
	setAttr ".stringOptions[9].type" -type "string" "boolean";
	setAttr ".stringOptions[10].name" -type "string" "ambient occlusion rays";
	setAttr ".stringOptions[10].value" -type "string" "256";
	setAttr ".stringOptions[10].type" -type "string" "integer";
	setAttr ".stringOptions[11].name" -type "string" "ambient occlusion cache";
	setAttr ".stringOptions[11].value" -type "string" "false";
	setAttr ".stringOptions[11].type" -type "string" "boolean";
	setAttr ".stringOptions[12].name" -type "string" "ambient occlusion cache density";
	setAttr ".stringOptions[12].value" -type "string" "1.0";
	setAttr ".stringOptions[12].type" -type "string" "scalar";
	setAttr ".stringOptions[13].name" -type "string" "ambient occlusion cache points";
	setAttr ".stringOptions[13].value" -type "string" "64";
	setAttr ".stringOptions[13].type" -type "string" "integer";
	setAttr ".stringOptions[14].name" -type "string" "irradiance particles";
	setAttr ".stringOptions[14].value" -type "string" "false";
	setAttr ".stringOptions[14].type" -type "string" "boolean";
	setAttr ".stringOptions[15].name" -type "string" "irradiance particles rays";
	setAttr ".stringOptions[15].value" -type "string" "256";
	setAttr ".stringOptions[15].type" -type "string" "integer";
	setAttr ".stringOptions[16].name" -type "string" "irradiance particles interpolate";
	setAttr ".stringOptions[16].value" -type "string" "1";
	setAttr ".stringOptions[16].type" -type "string" "integer";
	setAttr ".stringOptions[17].name" -type "string" "irradiance particles interppoints";
	setAttr ".stringOptions[17].value" -type "string" "64";
	setAttr ".stringOptions[17].type" -type "string" "integer";
	setAttr ".stringOptions[18].name" -type "string" "irradiance particles indirect passes";
	setAttr ".stringOptions[18].value" -type "string" "0";
	setAttr ".stringOptions[18].type" -type "string" "integer";
	setAttr ".stringOptions[19].name" -type "string" "irradiance particles scale";
	setAttr ".stringOptions[19].value" -type "string" "1.0";
	setAttr ".stringOptions[19].type" -type "string" "scalar";
	setAttr ".stringOptions[20].name" -type "string" "irradiance particles env";
	setAttr ".stringOptions[20].value" -type "string" "true";
	setAttr ".stringOptions[20].type" -type "string" "boolean";
	setAttr ".stringOptions[21].name" -type "string" "irradiance particles env rays";
	setAttr ".stringOptions[21].value" -type "string" "256";
	setAttr ".stringOptions[21].type" -type "string" "integer";
	setAttr ".stringOptions[22].name" -type "string" "irradiance particles env scale";
	setAttr ".stringOptions[22].value" -type "string" "1";
	setAttr ".stringOptions[22].type" -type "string" "integer";
	setAttr ".stringOptions[23].name" -type "string" "irradiance particles rebuild";
	setAttr ".stringOptions[23].value" -type "string" "true";
	setAttr ".stringOptions[23].type" -type "string" "boolean";
	setAttr ".stringOptions[24].name" -type "string" "irradiance particles file";
	setAttr ".stringOptions[24].value" -type "string" "";
	setAttr ".stringOptions[24].type" -type "string" "string";
	setAttr ".stringOptions[25].name" -type "string" "geom displace motion factor";
	setAttr ".stringOptions[25].value" -type "string" "1.0";
	setAttr ".stringOptions[25].type" -type "string" "scalar";
	setAttr ".stringOptions[26].name" -type "string" "contrast all buffers";
	setAttr ".stringOptions[26].value" -type "string" "true";
	setAttr ".stringOptions[26].type" -type "string" "boolean";
	setAttr ".stringOptions[27].name" -type "string" "finalgather normal tolerance";
	setAttr ".stringOptions[27].value" -type "string" "25.842";
	setAttr ".stringOptions[27].type" -type "string" "scalar";
createNode mentalrayFramebuffer -s -n "miDefaultFramebuffer";
createNode mentalrayOptions -s -n "miContourPreset";
createNode mentalrayOptions -s -n "Draft";
	setAttr ".maxr" 2;
createNode mentalrayOptions -s -n "DraftMotionBlur";
	setAttr ".maxr" 2;
	setAttr ".mb" 1;
	setAttr ".tconr" 1;
	setAttr ".tcong" 1;
	setAttr ".tconb" 1;
	setAttr ".tcona" 1;
createNode mentalrayOptions -s -n "DraftRapidMotion";
	setAttr ".scan" 3;
	setAttr ".rapc" 1;
	setAttr ".raps" 0.25;
	setAttr ".maxr" 2;
	setAttr ".mb" 1;
	setAttr ".tconr" 1;
	setAttr ".tcong" 1;
	setAttr ".tconb" 1;
	setAttr ".tcona" 1;
createNode mentalrayOptions -s -n "Preview";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
createNode mentalrayOptions -s -n "PreviewMotionblur";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
	setAttr ".mb" 1;
	setAttr ".tconr" 0.5;
	setAttr ".tcong" 0.5;
	setAttr ".tconb" 0.5;
	setAttr ".tcona" 0.5;
createNode mentalrayOptions -s -n "PreviewRapidMotion";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".scan" 3;
	setAttr ".rapc" 3;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
	setAttr ".mb" 1;
	setAttr ".tconr" 0.5;
	setAttr ".tcong" 0.5;
	setAttr ".tconb" 0.5;
	setAttr ".tcona" 0.5;
createNode mentalrayOptions -s -n "PreviewCaustics";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
	setAttr ".ca" yes;
	setAttr ".cc" 1;
	setAttr ".cr" 1;
createNode mentalrayOptions -s -n "PreviewGlobalIllum";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
	setAttr ".gi" yes;
	setAttr ".gc" 1;
	setAttr ".gr" 1;
createNode mentalrayOptions -s -n "PreviewFinalGather";
	setAttr ".minsp" -1;
	setAttr ".maxsp" 1;
	setAttr ".fil" 1;
	setAttr ".rflr" 2;
	setAttr ".rfrr" 2;
	setAttr ".maxr" 4;
	setAttr ".fg" yes;
createNode mentalrayOptions -s -n "Production";
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 2;
	setAttr ".rflr" 10;
	setAttr ".rfrr" 10;
	setAttr ".maxr" 20;
createNode mentalrayOptions -s -n "ProductionMotionblur";
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 2;
	setAttr ".rflr" 10;
	setAttr ".rfrr" 10;
	setAttr ".maxr" 20;
	setAttr ".mb" 2;
createNode mentalrayOptions -s -n "ProductionRapidMotion";
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 2;
	setAttr ".scan" 3;
	setAttr ".rapc" 8;
	setAttr ".raps" 2;
	setAttr ".rflr" 10;
	setAttr ".rfrr" 10;
	setAttr ".maxr" 20;
	setAttr ".mb" 2;
createNode mentalrayOptions -s -n "ProductionFineTrace";
	setAttr ".conr" 0.019999999552965164;
	setAttr ".cong" 0.019999999552965164;
	setAttr ".conb" 0.019999999552965164;
	setAttr ".minsp" 1;
	setAttr ".maxsp" 2;
	setAttr ".fil" 1;
	setAttr ".filw" 0.75;
	setAttr ".filh" 0.75;
	setAttr ".jit" yes;
createNode mentalrayOptions -s -n "ProductionRapidFur";
	setAttr ".conr" 0.039999999105930328;
	setAttr ".cong" 0.029999999329447746;
	setAttr ".conb" 0.070000000298023224;
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 1;
	setAttr ".filw" 1.1449999809265137;
	setAttr ".filh" 1.1449999809265137;
	setAttr ".jit" yes;
	setAttr ".scan" 3;
	setAttr ".rapc" 3;
	setAttr ".raps" 0.25;
	setAttr ".ray" no;
	setAttr ".shmth" 3;
	setAttr ".shmap" 3;
	setAttr ".mbsm" no;
	setAttr ".bism" 0.019999999552965164;
createNode mentalrayOptions -s -n "ProductionRapidHair";
	setAttr ".conr" 0.039999999105930328;
	setAttr ".cong" 0.029999999329447746;
	setAttr ".conb" 0.070000000298023224;
	setAttr ".minsp" 0;
	setAttr ".maxsp" 2;
	setAttr ".fil" 1;
	setAttr ".filw" 1.1449999809265137;
	setAttr ".filh" 1.1449999809265137;
	setAttr ".jit" yes;
	setAttr ".scan" 3;
	setAttr ".rapc" 6;
	setAttr ".ray" no;
	setAttr ".shmth" 3;
	setAttr ".shmap" 3;
	setAttr ".mbsm" no;
	setAttr ".bism" 0.019999999552965164;
createNode file -n "file3";
	setAttr ".ail" yes;
	setAttr ".ftn" -type "string" "D:/3D models//TO-DO/igloo/snow.jpg";
createNode place2dTexture -n "place2dTexture3";
createNode bump2d -n "bump2d1";
	setAttr ".bd" 0.20000000298023224;
	setAttr ".vc1" -type "float3" 0 5.9999998e-005 0 ;
	setAttr ".vc2" -type "float3" 9.9999997e-006 9.9999997e-006 0 ;
createNode lambert -n "lambert4";
createNode shadingEngine -n "lambert4SG";
	setAttr ".ihi" 0;
	setAttr ".ro" yes;
createNode materialInfo -n "materialInfo3";
createNode file -n "file4";
	setAttr ".ftn" -type "string" "D:/3D models//TExtures_LIBRARY/snow.png";
createNode place2dTexture -n "place2dTexture4";
select -ne :time1;
	setAttr ".o" 1;
	setAttr ".unw" 1;
select -ne :renderPartition;
	setAttr -s 5 ".st";
select -ne :initialShadingGroup;
	setAttr -s 5 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 6 ".gn";
select -ne :initialParticleSE;
	setAttr ".ro" yes;
select -ne :defaultShaderList1;
	setAttr -s 5 ".s";
select -ne :defaultTextureList1;
	setAttr -s 4 ".tx";
select -ne :lightList1;
select -ne :postProcessList1;
	setAttr -s 2 ".p";
select -ne :defaultRenderUtilityList1;
	setAttr -s 5 ".u";
select -ne :defaultRenderingList1;
select -ne :renderGlobalsList1;
select -ne :defaultRenderGlobals;
	setAttr ".ren" -type "string" "mentalRay";
select -ne :defaultResolution;
	setAttr ".w" 800;
	setAttr ".h" 800;
	setAttr ".pa" 1;
	setAttr ".dar" 1;
select -ne :defaultLightSet;
select -ne :hardwareRenderGlobals;
	setAttr ".ctrs" 256;
	setAttr ".btrs" 512;
select -ne :defaultHardwareRenderGlobals;
	setAttr ".fn" -type "string" "im";
	setAttr ".res" -type "string" "ntsc_4d 646 485 1.333";
connectAttr "groupId3.id" "pSphereShape1.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "pSphereShape1.iog.og[0].gco";
connectAttr "groupParts1.og" "pSphereShape1.i";
connectAttr "groupId4.id" "pSphereShape1.ciog.cog[0].cgid";
connectAttr "groupId10.id" "pCubeShape1.iog.og[0].gid";
connectAttr "lambert3SG.mwc" "pCubeShape1.iog.og[0].gco";
connectAttr "groupParts8.og" "pCubeShape1.i";
connectAttr "polyTweakUV12.uvtk[0]" "pCubeShape1.uvst[0].uvtw";
connectAttr "groupId11.id" "pCubeShape1.ciog.cog[0].cgid";
connectAttr "groupId1.id" "pCubeShape2.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "pCubeShape2.iog.og[0].gco";
connectAttr "groupId2.id" "pCubeShape2.ciog.cog[0].cgid";
connectAttr "polyTweakUV11.out" "polySurfaceShape2.i";
connectAttr "groupId8.id" "polySurfaceShape2.iog.og[0].gid";
connectAttr "lambert3SG.mwc" "polySurfaceShape2.iog.og[0].gco";
connectAttr "polyTweakUV11.uvtk[0]" "polySurfaceShape2.uvst[0].uvtw";
connectAttr "groupParts6.og" "polySurfaceShape1.i";
connectAttr "groupId6.id" "polySurfaceShape1.iog.og[1].gid";
connectAttr "lambert3SG.mwc" "polySurfaceShape1.iog.og[1].gco";
connectAttr "polyTweakUV4.uvtk[0]" "polySurfaceShape1.uvst[0].uvtw";
connectAttr "groupId7.id" "polySurfaceShape1.ciog.cog[0].cgid";
connectAttr "polyTweakUV1.out" "pPlaneShape1.i";
connectAttr "polyTweakUV1.uvtk[0]" "pPlaneShape1.uvst[0].uvtw";
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "lambert2SG.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "lambert3SG.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "lambert4SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "lambert2SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "lambert3SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "lambert4SG.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr "polySphere1.out" "deleteComponent1.ig";
connectAttr "deleteComponent1.og" "polyExtrudeFace1.ip";
connectAttr "pSphereShape1.wm" "polyExtrudeFace1.mp";
connectAttr "polyTweak1.out" "polySplitRing1.ip";
connectAttr "pCubeShape1.wm" "polySplitRing1.mp";
connectAttr "polyCube1.out" "polyTweak1.ip";
connectAttr "polyTweak2.out" "polyBevel1.ip";
connectAttr "pCubeShape1.wm" "polyBevel1.mp";
connectAttr "polySplitRing1.out" "polyTweak2.ip";
connectAttr "polyTweak3.out" "polyBevel2.ip";
connectAttr "pCubeShape1.wm" "polyBevel2.mp";
connectAttr "polyBevel1.out" "polyTweak3.ip";
connectAttr "polyBevel2.out" "deleteComponent2.ig";
connectAttr "deleteComponent2.og" "deleteComponent3.ig";
connectAttr "deleteComponent3.og" "deleteComponent4.ig";
connectAttr "deleteComponent4.og" "polyExtrudeFace2.ip";
connectAttr "pCubeShape1.wm" "polyExtrudeFace2.mp";
connectAttr "pCubeShape2.o" "polyBoolOp1.ip[0]";
connectAttr "pSphereShape1.o" "polyBoolOp1.ip[1]";
connectAttr "pCubeShape2.wm" "polyBoolOp1.im[0]";
connectAttr "pSphereShape1.wm" "polyBoolOp1.im[1]";
connectAttr "polyExtrudeFace1.out" "groupParts1.ig";
connectAttr "groupId3.id" "groupParts1.gi";
connectAttr "polyBoolOp1.out" "groupParts2.ig";
connectAttr "groupParts2.og" "deleteComponent5.ig";
connectAttr "deleteComponent5.og" "deleteComponent6.ig";
connectAttr "deleteComponent6.og" "deleteComponent7.ig";
connectAttr "deleteComponent7.og" "deleteComponent8.ig";
connectAttr "deleteComponent8.og" "polySplit1.ip";
connectAttr "polySplit1.out" "polySplit2.ip";
connectAttr "polySplit2.out" "polySplit3.ip";
connectAttr "polySplit3.out" "polySplit4.ip";
connectAttr "polySplit4.out" "polySplit5.ip";
connectAttr "polySplit5.out" "polySplit6.ip";
connectAttr "polySplit6.out" "polySplit7.ip";
connectAttr "polySplit7.out" "polyDelEdge1.ip";
connectAttr "polyDelEdge1.out" "polyDelEdge2.ip";
connectAttr "polyDelEdge2.out" "polyDelEdge3.ip";
connectAttr "polyTweak4.out" "polyDelEdge4.ip";
connectAttr "polyDelEdge3.out" "polyTweak4.ip";
connectAttr "polyDelEdge4.out" "polyDelEdge5.ip";
connectAttr "polyTweak5.out" "polyMergeVert1.ip";
connectAttr "polySurfaceShape1.wm" "polyMergeVert1.mp";
connectAttr "polyDelEdge5.out" "polyTweak5.ip";
connectAttr "polyTweak6.out" "polyMergeVert2.ip";
connectAttr "polySurfaceShape1.wm" "polyMergeVert2.mp";
connectAttr "polyMergeVert1.out" "polyTweak6.ip";
connectAttr "polyTweak7.out" "polySplit8.ip";
connectAttr "polyMergeVert2.out" "polyTweak7.ip";
connectAttr "polySplit8.out" "polySplit9.ip";
connectAttr "polySplit9.out" "polySplit10.ip";
connectAttr "polySplit10.out" "polySplit11.ip";
connectAttr "polySplit11.out" "polyAppend1.ip";
connectAttr "polyAppend1.out" "groupParts3.ig";
connectAttr "groupParts3.og" "polyAppend2.ip";
connectAttr "polyAppend2.out" "groupParts4.ig";
connectAttr "groupParts4.og" "polyAppend3.ip";
connectAttr "polyAppend3.out" "groupParts5.ig";
connectAttr "groupParts5.og" "polyAppend4.ip";
connectAttr "polyAppend4.out" "polySplitRing2.ip";
connectAttr "polySurfaceShape1.wm" "polySplitRing2.mp";
connectAttr "polySplitRing2.out" "polySplitRing3.ip";
connectAttr "polySurfaceShape1.wm" "polySplitRing3.mp";
connectAttr "polySplitRing3.out" "polySplitRing4.ip";
connectAttr "polySurfaceShape1.wm" "polySplitRing4.mp";
connectAttr "polyTweak8.out" "polySplitRing5.ip";
connectAttr "pCubeShape1.wm" "polySplitRing5.mp";
connectAttr "polyExtrudeFace2.out" "polyTweak8.ip";
connectAttr "polySplitRing5.out" "polySplitRing6.ip";
connectAttr "pCubeShape1.wm" "polySplitRing6.mp";
connectAttr "polySplitRing6.out" "polySplitRing7.ip";
connectAttr "pCubeShape1.wm" "polySplitRing7.mp";
connectAttr "polySplitRing7.out" "deleteComponent9.ig";
connectAttr "file1.oc" "lambert2.c";
connectAttr "lambert2.oc" "lambert2SG.ss";
connectAttr "pPlaneShape1.iog" "lambert2SG.dsm" -na;
connectAttr "lambert2SG.msg" "materialInfo1.sg";
connectAttr "lambert2.msg" "materialInfo1.m";
connectAttr "file1.msg" "materialInfo1.t" -na;
connectAttr "place2dTexture1.c" "file1.c";
connectAttr "place2dTexture1.tf" "file1.tf";
connectAttr "place2dTexture1.rf" "file1.rf";
connectAttr "place2dTexture1.mu" "file1.mu";
connectAttr "place2dTexture1.mv" "file1.mv";
connectAttr "place2dTexture1.s" "file1.s";
connectAttr "place2dTexture1.wu" "file1.wu";
connectAttr "place2dTexture1.wv" "file1.wv";
connectAttr "place2dTexture1.re" "file1.re";
connectAttr "place2dTexture1.of" "file1.of";
connectAttr "place2dTexture1.r" "file1.ro";
connectAttr "place2dTexture1.n" "file1.n";
connectAttr "place2dTexture1.vt1" "file1.vt1";
connectAttr "place2dTexture1.vt2" "file1.vt2";
connectAttr "place2dTexture1.vt3" "file1.vt3";
connectAttr "place2dTexture1.vc1" "file1.vc1";
connectAttr "place2dTexture1.o" "file1.uv";
connectAttr "place2dTexture1.ofs" "file1.fs";
connectAttr "polyPlane1.out" "polyTweakUV1.ip";
connectAttr "file2.oc" "lambert3.c";
connectAttr "bump2d1.o" "lambert3.n";
connectAttr "lambert3.oc" "lambert3SG.ss";
connectAttr "polySurfaceShape1.iog.og[1]" "lambert3SG.dsm" -na;
connectAttr "polySurfaceShape1.ciog.cog[0]" "lambert3SG.dsm" -na;
connectAttr "polySurfaceShape2.iog.og[0]" "lambert3SG.dsm" -na;
connectAttr "pCubeShape1.iog.og[0]" "lambert3SG.dsm" -na;
connectAttr "groupId6.msg" "lambert3SG.gn" -na;
connectAttr "groupId7.msg" "lambert3SG.gn" -na;
connectAttr "groupId8.msg" "lambert3SG.gn" -na;
connectAttr "lambert3SG.msg" "materialInfo2.sg";
connectAttr "lambert3.msg" "materialInfo2.m";
connectAttr "file2.msg" "materialInfo2.t" -na;
connectAttr "place2dTexture2.c" "file2.c";
connectAttr "place2dTexture2.tf" "file2.tf";
connectAttr "place2dTexture2.rf" "file2.rf";
connectAttr "place2dTexture2.mu" "file2.mu";
connectAttr "place2dTexture2.mv" "file2.mv";
connectAttr "place2dTexture2.s" "file2.s";
connectAttr "place2dTexture2.wu" "file2.wu";
connectAttr "place2dTexture2.wv" "file2.wv";
connectAttr "place2dTexture2.re" "file2.re";
connectAttr "place2dTexture2.of" "file2.of";
connectAttr "place2dTexture2.r" "file2.ro";
connectAttr "place2dTexture2.n" "file2.n";
connectAttr "place2dTexture2.vt1" "file2.vt1";
connectAttr "place2dTexture2.vt2" "file2.vt2";
connectAttr "place2dTexture2.vt3" "file2.vt3";
connectAttr "place2dTexture2.vc1" "file2.vc1";
connectAttr "place2dTexture2.o" "file2.uv";
connectAttr "place2dTexture2.ofs" "file2.fs";
connectAttr "polySplitRing4.out" "polyPlanarProj1.ip";
connectAttr "polySurfaceShape1.wm" "polyPlanarProj1.mp";
connectAttr "polyPlanarProj1.out" "polySphProj1.ip";
connectAttr "polySurfaceShape1.wm" "polySphProj1.mp";
connectAttr "polySphProj1.out" "polyTweakUV2.ip";
connectAttr "polyTweakUV2.out" "polyMapCut1.ip";
connectAttr "polyMapCut1.out" "polyTweakUV3.ip";
connectAttr "polyTweakUV3.out" "polyMapCut2.ip";
connectAttr "polyMapCut2.out" "polyTweakUV4.ip";
connectAttr "polyTweakUV4.out" "polyChipOff1.ip";
connectAttr "polySurfaceShape1.wm" "polyChipOff1.mp";
connectAttr "polySurfaceShape1.o" "polySeparate1.ip";
connectAttr "polyChipOff1.out" "groupParts6.ig";
connectAttr "groupId6.id" "groupParts6.gi";
connectAttr "polySeparate1.out[0]" "groupParts7.ig";
connectAttr "groupId8.id" "groupParts7.gi";
connectAttr "groupParts7.og" "polyPlanarProj2.ip";
connectAttr "polySurfaceShape2.wm" "polyPlanarProj2.mp";
connectAttr "polyPlanarProj2.out" "polyMapCut3.ip";
connectAttr "polyMapCut3.out" "polyTweakUV5.ip";
connectAttr "polyTweakUV5.out" "polyCylProj1.ip";
connectAttr "polySurfaceShape2.wm" "polyCylProj1.mp";
connectAttr "polyCylProj1.out" "polyMapCut4.ip";
connectAttr "polyMapCut4.out" "polyMapCut5.ip";
connectAttr "polyMapCut5.out" "polyTweakUV6.ip";
connectAttr "polyTweakUV6.out" "polyMapCut6.ip";
connectAttr "polyMapCut6.out" "polyTweakUV7.ip";
connectAttr "polyTweakUV7.out" "polyCylProj2.ip";
connectAttr "polySurfaceShape2.wm" "polyCylProj2.mp";
connectAttr "polyCylProj2.out" "polyTweakUV8.ip";
connectAttr "polyTweakUV8.out" "polyMapSewMove1.ip";
connectAttr "polyMapSewMove1.out" "polyTweakUV9.ip";
connectAttr "polyTweakUV9.out" "polyMapCut7.ip";
connectAttr "polyMapCut7.out" "polyMapCut8.ip";
connectAttr "polyMapCut8.out" "polyTweakUV10.ip";
connectAttr "polyTweakUV10.out" "polyCylProj3.ip";
connectAttr "polySurfaceShape2.wm" "polyCylProj3.mp";
connectAttr "polyCylProj3.out" "polyTweakUV11.ip";
connectAttr "deleteComponent9.og" "polyMapSewMove2.ip";
connectAttr "polyMapSewMove2.out" "polyMapCut9.ip";
connectAttr "polyMapCut9.out" "polyMapCut10.ip";
connectAttr "polyMapCut10.out" "polyTweakUV12.ip";
connectAttr "polyTweakUV12.out" "groupParts8.ig";
connectAttr "groupId10.id" "groupParts8.gi";
connectAttr ":mentalrayGlobals.msg" ":mentalrayItemsList.glb";
connectAttr ":miDefaultOptions.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":miContourPreset.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":Draft.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":DraftMotionBlur.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":DraftRapidMotion.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":Preview.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":PreviewMotionblur.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":PreviewRapidMotion.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":PreviewCaustics.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":PreviewGlobalIllum.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":PreviewFinalGather.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":Production.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":ProductionMotionblur.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":ProductionRapidMotion.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":ProductionFineTrace.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":ProductionRapidFur.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":ProductionRapidHair.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayItemsList.fb" -na;
connectAttr ":miDefaultOptions.msg" ":mentalrayGlobals.opt";
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayGlobals.fb";
connectAttr "place2dTexture3.c" "file3.c";
connectAttr "place2dTexture3.tf" "file3.tf";
connectAttr "place2dTexture3.rf" "file3.rf";
connectAttr "place2dTexture3.mu" "file3.mu";
connectAttr "place2dTexture3.mv" "file3.mv";
connectAttr "place2dTexture3.s" "file3.s";
connectAttr "place2dTexture3.wu" "file3.wu";
connectAttr "place2dTexture3.wv" "file3.wv";
connectAttr "place2dTexture3.re" "file3.re";
connectAttr "place2dTexture3.of" "file3.of";
connectAttr "place2dTexture3.r" "file3.ro";
connectAttr "place2dTexture3.n" "file3.n";
connectAttr "place2dTexture3.vt1" "file3.vt1";
connectAttr "place2dTexture3.vt2" "file3.vt2";
connectAttr "place2dTexture3.vt3" "file3.vt3";
connectAttr "place2dTexture3.vc1" "file3.vc1";
connectAttr "place2dTexture3.o" "file3.uv";
connectAttr "place2dTexture3.ofs" "file3.fs";
connectAttr "file3.oa" "bump2d1.bv";
connectAttr "file4.oc" "lambert4.c";
connectAttr "file4.ot" "lambert4.it";
connectAttr "lambert4.oc" "lambert4SG.ss";
connectAttr "lambert4SG.msg" "materialInfo3.sg";
connectAttr "lambert4.msg" "materialInfo3.m";
connectAttr "file4.msg" "materialInfo3.t" -na;
connectAttr "place2dTexture4.c" "file4.c";
connectAttr "place2dTexture4.tf" "file4.tf";
connectAttr "place2dTexture4.rf" "file4.rf";
connectAttr "place2dTexture4.mu" "file4.mu";
connectAttr "place2dTexture4.mv" "file4.mv";
connectAttr "place2dTexture4.s" "file4.s";
connectAttr "place2dTexture4.wu" "file4.wu";
connectAttr "place2dTexture4.wv" "file4.wv";
connectAttr "place2dTexture4.re" "file4.re";
connectAttr "place2dTexture4.of" "file4.of";
connectAttr "place2dTexture4.r" "file4.ro";
connectAttr "place2dTexture4.n" "file4.n";
connectAttr "place2dTexture4.vt1" "file4.vt1";
connectAttr "place2dTexture4.vt2" "file4.vt2";
connectAttr "place2dTexture4.vt3" "file4.vt3";
connectAttr "place2dTexture4.vc1" "file4.vc1";
connectAttr "place2dTexture4.o" "file4.uv";
connectAttr "place2dTexture4.ofs" "file4.fs";
connectAttr "lambert2SG.pa" ":renderPartition.st" -na;
connectAttr "lambert3SG.pa" ":renderPartition.st" -na;
connectAttr "lambert4SG.pa" ":renderPartition.st" -na;
connectAttr "pCubeShape2.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "pCubeShape2.ciog.cog[0]" ":initialShadingGroup.dsm" -na;
connectAttr "pSphereShape1.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "pSphereShape1.ciog.cog[0]" ":initialShadingGroup.dsm" -na;
connectAttr "pCubeShape1.ciog.cog[0]" ":initialShadingGroup.dsm" -na;
connectAttr "groupId1.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId2.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId3.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId4.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId10.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId11.msg" ":initialShadingGroup.gn" -na;
connectAttr "lambert2.msg" ":defaultShaderList1.s" -na;
connectAttr "lambert3.msg" ":defaultShaderList1.s" -na;
connectAttr "lambert4.msg" ":defaultShaderList1.s" -na;
connectAttr "file1.msg" ":defaultTextureList1.tx" -na;
connectAttr "file2.msg" ":defaultTextureList1.tx" -na;
connectAttr "file3.msg" ":defaultTextureList1.tx" -na;
connectAttr "file4.msg" ":defaultTextureList1.tx" -na;
connectAttr "directionalLightShape1.ltd" ":lightList1.l" -na;
connectAttr "place2dTexture1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture2.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture3.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "bump2d1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture4.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "defaultRenderLayer.msg" ":defaultRenderingList1.r" -na;
connectAttr "directionalLight1.iog" ":defaultLightSet.dsm" -na;
// End of igloo.ma
