	'use strict';
	
	const spinnerContent = ["|","/","-","\\"];
	let spinnerCounter = 0;
	let dictionary = [];
	let dictionaries = [[],[]];
	let listboxPreviousValue = ["","","","","",""];
	let excludedLetters = [];
	
	function importWordlist() {

		const szoreggeltWordList = ["\u0152{c\u0152s","\u0152{cbl","\u0152{i\xFBt","\u0152{jlf","\u0152{m\xE2c","\u0152s\xFDmu","\u0152sk\xEEu","\u0152smfu","\u0152st\xEAh","\u0152t{\xEEu","\u0152t{\xFDm","\u0152t{ft","\u0152tbqb","\u0152tc\u0172o","\u0152tlps","\u0172smbq","\xE2{puu","\xE2{ubu","\xE2dtpm","\xE2gjvn","\xE2hz\xE2t","\xE2hz\xEAl","\xE2hz\xFB{","\xE2hzb{","\xE2hzbt","\xE2mbsd","\xE2md\xE2{","\xE2me\xE2t","\xE2mep{","\xE2mi\xEEs","\xE2mibk","\xE2mm\xE2c","\xE2mm\xE2t","\xE2mm\xEEu","\xE2mmbh","\xE2mmbn","\xE2mmbu","\xE2mnpt","\xE2mo\xEAw","\xE2mopl","\xE2mubm","\xE2mubu","\xE2qpm\xF4","\xE2scpd","\xE2smbq","\xE2su\xEAs","\xE2svm\xF4","\xE2sw\xEE{","\xE2tl\xE2m","\xE2u\xE2mm","\xE2u\xF7ou","\xE2ubmm","\xE2ue\xF7g","\xE2ufku","\xE2ug\xFBs","\xE2ugph","\xE2ugvu","\xE2ui\xE2h","\xE2ui\xFB{","\xE2uibu","\xE2uip{","\xE2uk\xE2s","\xE2uk\xF7o","\xE2ukvu","\xE2ul\xF7u","\xE2ulfm","\xE2ulpt","\xE2um\xE2u","\xE2um\xEAq","\xE2umbh","\xE2uo\xEA{","\xE2us\xE2h","\xE2usbl","\xE2uu\xEAu","\xE2uu\xF7s","\xE2uw\xE2h","\xE2uwfs","\xEAcsfe","\xEAcsfo","\xEAefoj","\xEAhl\xEAl","\xEAhu\xE2k","\xEAic\xEAs","\xEAit\xEAh","\xEAkg\xEAm","\xEAkkfm","\xEAm\xEAol","\xEAmdfm","\xEAmdft","\xEAmufu","\xEAmwf{","\xEAol\xEAq","\xEAs{\xEAl","\xEAs{\xEAt","\xEAs{fu","\xEAsefl","\xEAsefn","\xEAseft","\xEAsfuu","\xEAsjou","\xEAsmfm","\xEAstfl","\xEAsu\xEAl","\xEAswfm","\xEAt{bl","\xEAumbq","\xEAwfm\u0152","\xEE{m\xEAt","\xEE{mfm","\xEE{mjl","\xEEk\xE2t{","\xEEot\xEAh","\xEEsopl","\xEEu\xEAt{","\xEEwfmu","\xF4df\xE2o","\xF4dtlb","\xF4ejvn","\xF4ib{b","\xF4ibku","\xF4qjvn","\xF4sbn\u0172","\xF4sj\xE2t","\xF4wpeb","\xF7cm\xEEu","\xF7cm\xF7t","\xF7nmjl","\xF7o{\xEAt","\xF7ou\xF7{","\xF7se\xF7h","\xF7tt{f","\xF7umfu","\xF7uw\xF7{","\xF7uw\xF7t","\xF7uwfo","\xFBhzjt","\xFBkcps","\xFBklps","\xFBkpod","\xFBkt\xE2h","\xFBsjbt","\xFBsjo\u0152","\xFBt{jl","\xFBube\xF4","\xFBue\xEEk","\xFD{c\xEAh","\xFD{mfu","\xFDe\xEEu\u0152","\xFDe\xFDm\u0152","\xFDew\xF7t","\xFDhzfm","\xFDhzft","\xFDlbqb","\xFDm\u0152lf","\xFDme\xF7{","\xFDmo\xF7l","\xFDmufu","\xFDoofq","\xFDs\xFDhz","\xFDtu\xF7l","\xFDu\u0152\xEAs","\xFDw\xF7mu","{\xE2mph","{\xE2qps","{\xE2seb","{\xE2slb","{\xE2spm","{\xF7s\xF7h","{\xF7sfk","{\xFB{eb","{\xFBe\xEEu","{\xFBevm","{bg\xEEs","{bkpt","{bnbu","{bwbs","{fcsb","{fo\xEAm","{fo\xEAt","{foju","{fshf","{j{fh","{ji\xE2m","{ploj","{plph","{tbmv","{tbsv","{tfm\xEA","{tfoj","{tpme","{tpoh","{v{n\xF4","{vibo","{viph","b{\xEAsu","b{{bm","b{fsj","b{obq","b{u\xE2o","b{u\xEAl","bc\xE2mu","bccbo","bcd\xFBh","bcmbl","bcsbl","bdi\xE2u","beejh","bepnb","bepuu","bgg\xEAs","bggjo","bgh\xE2o","bhbw\xEA","bhhbu","bhpsb","bhs\xE2s","bhz\xEAs","bhzbh","bhzbm","bhzbs","biip{","biphz","bipw\xE2","bipwb","bk\xE2om","bkkbk","bkw\xE2s","bl\xF7{u","bl\xF7s\xEA","blbeu","bldj\xF4","bli\xE2k","bljub","bll\xE2e","bllps","blo\xE2{","blsjm","blu\xEEw","blups","bluvt","bm\xE2\xE2t","bm\xE2\xEEs","bm\xE2cc","bmbl\xFB","bmblj","bmbou","bmboz","bmbuu","bmc\xE2o","bmcvn","bmd\xEEn","bmg\xEAm","bmgbk","bmibt","bmjcj","bmkb{","bmkbt","bml\xF4w","bmlbs","bmlbu","bmlpu","bmm\u0172s","bmm\xEAm","bmnp{","bmqjo","bmubu","bmvmj","bmw\xE2{","bmw\xE2t","bmw\xEAh","bmwbe","bn\u0152cb","bn\xFBhz","bndtj","bnjmz","bnjou","bnjsf","bnpeb","bnpsg","bnpuu","bnqfs","bohpm","bojpo","bol\xEAu","boo\xE2m","boobl","boujl","boz\xF4t","bozbh","bozbj","bozvt","bpsub","bq\xE2db","bq\xE2mz","bqbdt","bqs\xEEu","bqs\xF4e","bqvdj","bqvlb","bs\xE2oz","bs\xEAob","bs{\xEAo","bsbct","bsboz","bsbt{","bsd\xEAm","bshpo","bspnb","bt{bm","bupmm","buzbj","buzvt","bw\xEEuu","bwbhz","bwwbm","c\u0152e\xFDm","c\u0152h\u0152t","c\u0152hfu","c\u0152s\xF7{","c\u0152w\xEEu","c\u0152w\xFDm","c\u0152wfo","c\u0172{\xF7t","c\u0172c\xE2k","c\u0172o\xF7t","c\u0172w\xF7m","c\u0172w\xF7t","c\xE2{jt","c\xE2cp{","c\xE2dtj","c\xE2eph","c\xE2kpm","c\xE2kpt","c\xE2m\xE2{","c\xE2mob","c\xE2nvm","c\xE2obu","c\xE2ojl","c\xE2ozb","c\xE2sib","c\xE2slb","c\xE2slj","c\xE2snj","c\xE2ups","c\xEAhfu","c\xEAl\xEAt","c\xEAl\xEEu","c\xEAl\xFDm","c\xEAm\xEAt","c\xEAmfm","c\xEAmft","c\xEAo\xEEu","c\xEAovm","c\xEAsfm","c\xEAsft","c\xEAsm\u0152","c\xEE{jl","c\xEEcjd","c\xEEcps","c\xEEs\xE2m","c\xF4e\xEEu","c\xF4lpm","c\xF4wmj","c\xF7e\xF7o","c\xF7g\xF7h","c\xF7hsf","c\xF7i\xF7n","c\xF7l\xEAt","c\xF7l\xF7e","c\xF7mdt","c\xF7s{f","c\xFBdt\xFB","c\xFBhbu","c\xFBkjl","c\xFBtvm","c\xFBups","c\xFBw\xE2s","c\xFDe\xF7t","cb{\xE2s","cbc\xEAs","cbcpt","cbcvt","cbebs","cbkps","cbkpt","cbmfl","cbmhb","cbmi\xEA","cbmpt","cbmub","cbncb","cbncj","cbo\xE2o","cboeb","cbouv","cbozb","cbs\xE2u","cbsl\xF4","cbslb","cbsob","cbspn","cbu\xE2s","cbujl","cbulb","cbuzv","cf\xE2mm","cf\xF7ou","cf{\xE2s","cf{\xFB{","cfd\xEA{","cfe\u0152m","cfepc","cfevh","cfg\u0152{","cfg\u0172{","cfg\u0172u","cfg\xFBk","cfgbm","cfgfe","cfgph","cfgpo","cfgvu","cfi\u0172u","cfi\xEEw","cfi\xFB{","cfip{","cfk\xE2s","cfk\xF7o","cfkvu","cfl\xEAs","cfl\xF7q","cfl\xF7u","cflbq","cfm\xE2u","cfm\xEAq","cfm\xF4h","cfm\xF7l","cfm\xFDm","cfmf{","cfmfq","cfmhb","cfmt\u0152","cfnpt","cfo\xEA{","cfoe\u0152","cfot\u0152","cfouj","cfpmu","cfs\xFBh","cfsbl","cfsfl","cft\xF4{","cft\xFBh","cft\xFDm","cft{\u0152","cftt{","cftuf","cfu\u0172{","cfu\xEAs","cfu\xEAu","cfu\xF7n","cfu\xF7s","cfufh","cfumj","cfupm","cfupo","cfw\xE2h","cfw\xEAt","cfwfs","cfwfu","cfwpo","cj{tv","cjcjt","cjctj","cjdbk","cjdfh","cjhz\xF4","cjl\xE2{","cjnc\xF4","cjslb","cjspl","cjups","cm\xF7gg","cm\xF7lj","cmbnb","cmbuu","cmjll","cmpll","cp{\xF4u","cp{po","cpe{b","cpeps","cph\xE2s","cphp{","cpi\xEAn","cpi\xF4d","cpk\xE2s","cplps","cplt{","cpmib","cpmuj","cpncb","cps\xEEu","cps\xFBt","cpse\xF4","cpseb","cpsk\xFB","cpsl\u0152","cpsp{","cpspt","cpst\xF4","cpsvm","cpt{j","cpup{","cpups","cpupt","cpupy","cpyfs","cv{h\xF4","cv{ph","cvdlb","cvh\xE2{","cvhzj","cvl\xE2t","cvljl","cvltj","cvlub","cvmmb","cvnmj","cvoeb","cvol\xF4","cvoz\xF4","cvspl","cvt\xE2t","cvu\xE2o","cvu\xEAo","cvu\xEEu","cvujl","cvuvm","cvuvt","csbij","cspo{","csptt","csvnn","d\xE2gpm","d\xEAh\xEAs","d\xEAlmb","d\xEAmp{","d\xEAsob","d\xEEnf{","d\xEEnfs","d\xEEnlf","d\xF7m\xF7q","d\xF7wfl","dbgbu","dbglb","dfgfu","dfgsf","dfmfc","dfmmb","dfouj","dfumj","djc\xE2m","djd\xE2{","djdvt","djgsb","djlj{","djljt","djnqb","djolf","djqfm","djspl","dju\xE2m","djwjm","dpnq\xF4","dt\u0152t{","dt\xE2l\xF4","dt\xE2m\xEA","dt\xE2w\xF4","dt\xE2wb","dt\xEAwf","dt\xEEoz","dt\xEEq\u0152","dt\xEEsb","dt\xF4lb","dt\xF4s\xF4","dt\xFBdt","dt\xFDoh","dtbm\xF4","dtbmj","dtbq\xF4","dtbub","dtfi\xF4","dtfll","dtfsf","dtjcf","dtjhb","dtjl\xF4","dtjll","dtjqb","dtjuu","dtpeb","dtpn\xF4","dtpol","dtpou","dtvlb","dtvnb","dtvqb","dvebs","dvlps","dvnj{","dvq\xE2l","e\xE2seb","e\xE2uvn","e\xEA{tb","e\xEAl\xE2o","e\xEAnpo","e\xEAwbk","e\xEE{fm","e\xEEkb{","e\xEEkbt","e\xEEwjl","e\xF7d\xF7h","e\xF7h\xF7t","e\xF7mzg","e\xF7ou\u0152","e\xF7s\xF7h","e\xF7sfk","e\xFBdpm","e\xFBepm","e\xFBt\xEEu","e\xFBwbe","e\xFDi\xEEu","e\xFDi\xF7t","ebdpm","ebdpt","ebeph","ebevt","ebhbe","ebklb","ebmn\u0172","ebmpm","ebnjm","ebs\xE2m","ebsbc","ebsvt","ebu\xE2m","efl\xE2{","efmfk","efmfm","efmub","efs\u0172t","efs\xEAl","efs\xEEu","efs\xFDm","efsft","ej\xEAub","ejdt\u0152","ejwbu","epc\xE2m","epcbu","epcp{","epcph","epcpm","epcpt","ephnb","epiph","epipt","epmph","epoh\xF4","epohb","epoob","epops","es\xE2hb","es\xE2nb","esbqq","eve\xE2m","eve\xE2t","eveps","evewb","evh\xEEu","evhvm","evibk","evl\xE2m","evn\xE2m","evn\xE2t","evoej","evqmb","evswb","f{\xEAsu","f{\xFDtu","f{{fm","f{sfe","f{sft","fc\xEAej","fcc\u0152m","fccfo","fcpmb","fdtfu","fe\xEAoz","fe{\xEAt","feejh","fgfm\xEA","fh\xEAt{","fhsft","fhz\xEAc","fhz\xEAo","fhzfe","fhzft","fhzjl","fhzlf","fhzsf","fibwj","fifu\u0152","fiif{","fkozf","fllps","fm\u0152\xE2t","fm\u0152\xEEs","fm\u0152{\u0152","fm\u0152be","fm\u0152cc","fm\u0152lf","fm\u0152oz","fm\u0152sf","fm\u0152uu","fm\xE2mm","fm\xEAcf","fm\xF7ou","fm{\xE2s","fmbe\xF4","fmc\xEEs","fmepc","fmevh","fmfhz","fmfku","fmfnj","fmfwf","fmg\xEAs","fmg\xFBk","fmgfe","fmgph","fmgvu","fmi\xEEw","fmi\xFB{","fmibm","fmip{","fmk\xE2s","fmk\xF7o","fmkvu","fml\xF7u","fmlbq","fmlfm","fmlfo","fmm\xE2u","fmm\xEAq","fmm\xF7l","fmmfo","fmmfq","fmmjl","fmmpq","fmn\xEAt","fmnpt","fmo\xEA{","fmo\xF7l","fmoz\u0172","fmpme","fmpmu","fms\xE2h","fms\xFBh","fmsbl","fmt\u0152t","fmt\xF4{","fmt\xFDm","fmt\xFDu","fmu\u0172s","fmu\xEAq","fmu\xEAs","fmu\xF7n","fmu\xF7s","fmupm","fmw\xE2h","fmw\xE2s","fmw\xEAu","fmwfs","fmwfu","fmwi\u0172","fmwpo","fn\xEEhz","fncfs","fnjef","fnjuu","fnm\u0152t","fnm\xEAl","fnm\xEEu","fo{jn","fohfe","foo\xEAm","foofl","fozif","fqfl\u0152","fqjlb","fqpt{","fs\u0152n\u0172","fs\xEAmz","fs\xEAoz","fse\u0152t","fsefj","fsfe\u0152","fsft{","fskfe","fsoz\u0152","fss\u0152m","ft\xEAmz","ft{fm","ft{ft","ft{nf","ftfoh","ftlfu","ftt{\xEA","fufu\u0152","fujlb","fuu\u0152m","fwf{\u0152","fwwfm","fyusb","g\u0152\xE2hj","g\u0152\xFBsj","g\u0152{fu","g\u0152c\u0172o","g\u0152d\xEAm","g\u0152d\xEEn","g\u0152e\xEEk","g\u0152i\u0152t","g\u0152mfh","g\u0152o\xEAw","g\u0152o\xF7l","g\u0152qbq","g\u0172{fu","g\u0172{gb","g\u0172mjl","g\u0172nbh","g\u0172u\xEAt","g\xE2{jl","g\xE2{jt","g\xE2d\xE2o","g\xE2sb\xF4","g\xE2sbe","g\xE2t\xEEu","g\xE2tmj","g\xE2tvm","g\xEAl\xFBu","g\xEAlf{","g\xEAm\xEAw","g\xEAmgb","g\xEAmjh","g\xEAnft","g\xEAsfh","g\xEAsgj","g\xEAt\xFDm","g\xEAujt","g\xF4mjb","g\xF4svn","g\xF7e\xEAn","g\xF7mej","g\xF7wfh","g\xFB{j\xF4","g\xFBsjb","g\xFBw\xE2t","g\xFBwbu","g\xFD{\xEAs","g\xFD{fu","g\xFDhh\u0152","g\xFDmfm","g\xFDmft","g\xFDmlf","g\xFDmu\u0152","g\xFDse\u0152","g\xFDshf","g\xFDuuz","g\xFDwf{","g\xFDwft","gb\xE2sv","gb{\xEAl","gb{po","gbd\xEAs","gbgbk","gbgfk","gbi\xE2{","gbi\xEAk","gbi\xEEe","gbki\u0152","gbkub","gbkvm","gbl\xEEs","gbl\xEEu","gblbe","gblvm","gbm\xE2c","gbm\xEAd","gbmb{","gbmbq","gbmbu","gbmlb","gbpe\xFB","gbq\xE2d","gbqbe","gbs\xFBe","gbsbh","gbspl","gbspm","gbsu\u0152","gbtps","gbu\xE2m","gbvob","gbw\xE2{","gbypm","gfdoj","gfe\xEAm","gfef{","gfi\xEAs","gfkf{","gfkfm","gfkft","gfkgb","gfm\u0152m","gfm\xE2s","gfm\xE2t","gfm\xEAm","gfm\xEAs","gfm\xEEs","gfm\xFDm","gfm\xFDu","gfmbe","gfmf{","gfmfm","gfmft","gfmi\u0152","gfmo\u0152","gfms\xF4","gfmt\u0152","gfo\xEAl","gfouj","gfoz\u0152","gfsef","gfsu\u0152","gftu\u0152","gj{fu","gjdbn","gjdl\xF4","gjopn","gjslb","gjw\xEAs","gm\xF7su","gmvps","gpeps","gph\xE2t","gphb{","gphbe","gphbo","gphbt","gphbu","gpheb","gphl\u0152","gplp{","gplpt","gpmz\xF4","gpo\xE2l","gpo\xE2m","gpobm","gpobu","gpsnb","gpsph","gpss\xF4","gpufm","gpupo","gs\xE2t{","gsbll","gsbod","gsjhz","gsjtt","gspou","gvh\xE2{","gvlbs","gvsbu","gvu\xE2s","gvubn","gvwbs","h\u0152{\xF7t","h\u0152h\xF7t","h\xE2{\xE2s","h\xE2{m\xF4","h\xE2{pm","h\xE2{tj","h\xE2hph","h\xE2mzb","h\xE2odt","h\xE2seb","h\xE2u\u0152s","h\xE2upm","h\xEAqfm","h\xF4mzb","h\xF7e\xF7s","h\xF7s\xF7h","h\xF7scf","h\xF7sdt","h\xF7sh\u0152","h\xFBo\xE2s","h\xFBozb","h\xFDn\u0152t","hb{eb","hb{pm","hb{pt","hbhzj","hbm\xE2e","hbmmz","hbnnb","hbsbt","hbsbu","hbuzb","hfcfe","hfozb","hfsmf","hj{eb","hjddt","hjqt{","hju\xE2s","hpgsj","hpmz\xF4","hpncb","hsbnn","hsjmm","hvmzb","hvnj{","hvs\xEEu","hvsvm","hz\u0172ku","hz\u0172s\u0172","hz\xE2sj","hz\xE2su","hz\xE2t{","hz\xE2wb","hz\xFBku","hzbmv","hzbo\xFB","hzfq\u0172","hzfsf","hzpst","hzvgb","i\u0152gpl","i\u0152l\xF7m","i\u0152t\xEAh","i\u0152to\u0152","i\u0172c\xEAs","i\u0172t\xEAh","i\u0172t\xEEu","i\u0172t\xF7m","i\u0172w\xF7t","i\xE2{bm","i\xE2{bt","i\xE2kbt","i\xE2m\xE2t","i\xE2np{","i\xE2nps","i\xE2odt","i\xE2qph","i\xE2s\xEEu","i\xE2sfn","i\xE2sgb","i\xE2spn","i\xE2usb","i\xE2ut\xF4","i\xE2uvm","i\xEA{bh","i\xEAcfs","i\xEAkbt","i\xEAug\u0152","i\xEAw\xEE{","i\xEE{jl","i\xEEe\u0152s","i\xEEeg\u0152","i\xEEnf{","i\xEEnft","i\xEEo\xE2s","i\xEEsft","i\xEEwfo","i\xF4e\xEEu","i\xF4epm","i\xF4flf","i\xF4i\xEAs","i\xF4obq","i\xF7mhz","i\xF7s\xF7h","i\xFBtm\xEA","i\xFBtpt","i\xFDmm\u0152","ib{bj","ib{vh","ibc\xE2s","ibcbs","ibcl\u0152","ibcp{","ibcpt","ibe\xFBs","ibebs","ibk\xEEu","ibkb{","ibke\xFB","ibkpm","ibks\xE2","ibku\u0152","ibku\u0172","ibloj","ibm\u0152s","ibm\xE2m","ibmbe","ibmpn","ibnbs","ibnjt","ibofn","ibohb","ibsbh","ibsbq","ibsdj","ibt\xE2c","ibt\xEEu","ibtbe","ibtbm","ibu\xE2s","ibu\xE2t","ibupm","ibwbt","ibwfs","ifcfh","ifhfe","ifhft","ifmzj","ifuft","ifw\xEEu","ifw\xFDm","ifwfs","ifwft","ij\xE2cb","ij\xE2oz","ij\xEAob","ijc\xE2t","ijefh","ijnm\u0152","ijoej","ijoev","ijou\xF4","ijoub","ijufm","ijui\u0172","ip{bn","ip{bu","ipmm\xF4","ipmnj","ipn\xE2s","ipnpl","ipogj","ipopm","ipqq\xE2","ipse\xF4","ipseb","ipsph","iptt{","ipufm","iv{bm","iv{bu","iviph","ivmmb","ivnps","ivslb","ivspl","ivss\xE2","ivsvu","j{{\xEEu","j{{be","j{{jl","j{hbu","j{hvm","j{npt","je\xE2jh","je\xEAoz","je\xFDmu","jef\xE2m","jefjh","jejmm","jh\xEAoz","jhb{j","jimfu","jkfeu","jlubu","jmmbo","jmmbu","jmmfn","jmmfu","jmmjl","jmzfo","jn\xEAou","jnn\xE2s","joe\xEEu","joefy","joepl","joevm","johbu","johfs","joo\xEAu","joofo","jou\xEA{","joujn","jqbsj","js\xE2ou","js\xE2oz","jspeb","jt{bq","jtmfs","jtn\xEAu","jtnfs","jtq\xE2o","jtufo","juubt","k\xE2s\u0152s","k\xE2s\xE2t","k\xE2sbu","k\xE2seb","k\xE2sn\u0172","k\xE2spn","k\xE2svm","k\xE2u\xEAl","k\xE2wps","k\xEAh\xE2s","k\xEAsdf","k\xF4{bo","k\xF4m\xEAu","k\xF4n\xF4e","k\xF4to\u0152","k\xF4tpm","k\xF4u\xEAu","kbq\xE2o","kbw\xEEu","kbwvm","kfhfm","kfhft","kfm\xF7m","kfm{\u0152","kfmf{","kfmfo","kfmft","kph\xE2h","kphbs","kphpt","kvibs","kvsub","l\u0152{fu","l\u0152gbm","l\u0152i\xE2{","l\u0152i\xEEe","l\u0152qps","l\u0152sjt","l\u0152u\xE2s","l\xE2c\xEEu","l\xE2cfm","l\xE2cvm","l\xE2e\xE2s","l\xE2efs","l\xE2ozb","l\xE2pt{","l\xE2s\xE2m","l\xE2sph","l\xE2spt","l\xE2t\xE2t","l\xE2uz\xFB","l\xEAkft","l\xEAl\xEEu","l\xEAl\xFDm","l\xEAnjb","l\xEAno\u0152","l\xEAof{","l\xEAoft","l\xEAol\u0152","l\xEAq{\u0152","l\xEAqf{","l\xEAqft","l\xEAsfh","l\xEAsfu","l\xEAtfm","l\xEAtft","l\xEAtjl","l\xEAuft","l\xEEhz\xF4","l\xEEn\xEAm","l\xEEo\xE2m","l\xEEobj","l\xEEop{","l\xEEopt","l\xEEt\xEAs","l\xEEw\xE2o","l\xF4cps","l\xF4epm","l\xF4spt","l\xF4svt","l\xF4t{b","l\xF4tfs","l\xF7{\xEAq","l\xF7{\xF7m","l\xF7{\xF7t","l\xF7{\xFBu","l\xF7{fh","l\xF7{fm","l\xF7{k\xF4","l\xF7{n\u0172","l\xF7e\xF7t","l\xF7i\xF7h","l\xF7mft","l\xF7moj","l\xF7mu\u0152","l\xF7ooz","l\xF7ozw","l\xF7q\xFDm","l\xF7qfu","l\xF7s\xEEw","l\xF7s\xF7{","l\xF7s\xF7n","l\xF7s\xFBu","l\xF7s\xFDm","l\xF7s{\u0152","l\xF7sfu","l\xF7suf","l\xF7u\xEAm","l\xF7u\xF7{","l\xF7ufh","l\xF7ufu","l\xF7w\xEAs","l\xF7wf{","l\xF7wft","l\xF7wfu","l\xFBs\xE2m","l\xFBsjb","l\xFBug\u0152","l\xFDm\xF7o","l\xFDmm\u0152","l\xFDmt\u0152","l\xFDsu\u0152","l\xFDuz\xFD","lb{\xE2o","lb{bm","lbc\xE2u","lbcjo","lbd\xEAs","lbdbh","lbdbk","lbdbu","lbdtb","lbk\xE2o","lbk\xFDu","lbkbl","lblb\xF4","lblbt","lbm\xF4{","lbmbq","lbnbu","lbnq\xF4","lbnsb","lbo\xE2m","lbo\xF4d","lbobl","lbodb","lbol\xF4","lboob","lbq\xE2m","lbq\xE2t","lbqbs","lbqdb","lbqps","lbqvt","lbs\xE2n","lbs\xEAk","lbsbk","lbsgb","lbspm","lbspn","lbt{b","lbtq\xF4","lbu\xF4e","lbwbs","lf{e\u0152","lf{f{","lf{fm","lf{ft","lfcfm","lfg\xEAm","lfift","lflfd","lfm\xEAt","lfmfu","lfmnf","lfodf","lfoe\u0152","lfofu","lfs\xEAl","lfs\xEEu","lfs\xFDm","lfsfl","lfsft","lfsfu","lfshf","lfuu\u0152","lfw\xEAt","lfwfs","lj\xE2mm","lj\xE2mu","lj\xF7ou","lj{\xE2s","ljbe\xF4","ljc\xEEs","ljc\xF7l","ljdtj","lje\u0152m","ljepc","ljevh","ljfku","ljg\u0152{","ljg\u0172{","ljg\xFBk","ljg\xFBs","ljgfo","ljgmj","ljgph","ljgvu","lji\u0172m","lji\xEEw","lji\xFB{","ljibm","ljibu","ljip{","ljjsu","ljk\xE2s","ljk\xF7o","ljkvu","ljl\xF7q","ljl\xF7u","ljlbq","ljlfm","ljlfo","ljm\xEAq","ljm\xF4h","ljm\xF7l","ljmpq","ljn\xEAs","ljnbs","ljnfs","ljnpt","ljo\xEA{","ljodt","ljouj","ljpme","ljpmu","ljs\xE2{","ljs\xFBh","ljsbl","ljt\xFDu","ljtt\xEA","lju\u0172{","lju\u0172s","lju\xE2s","lju\xEAq","lju\xEAs","lju\xF7n","lju\xF7s","lju\xFBs","ljupm","ljw\xE2h","ljw\xE2k","ljw\xE2s","ljw\xEAe","ljw\xEAt","ljw\xEEw","ljwfu","ljwpo","lm\xEEnb","lmjt\xEA","lpbmb","lpcbl","lpcp{","lpcsb","lpdlb","lpdph","lpdtj","lplt{","lpn\xE2m","lpn\xF4e","lpnm\xF4","lpnps","lpoeb","lpohb","lpopl","lpouz","lpq\xE2s","lpqjl","lpqkb","lpqph","lps\xE2o","lps{\xF4","lpsbj","lpsdt","lpse\xEA","lpseb","lpsgb","lpsi\u0172","lpsph","lpspn","lpspt","lpsqb","lpst\xF4","lpsuz","lpt\xE2s","lpt{u","lpups","lpuub","ls\xEAub","lsfpm","lsfqq","lsjnj","lvdl\xF4","lvhmj","lvkpo","lvlbd","lvlub","lvm\xE2l","lvmdt","lvqbd","lvqbl","lvqfd","lvqpo","lvsub","lvsvd","lvt{b","lvubt","lvubu","lvuzb","lvwjl","lw\xF4ub","m\u0152e\xF7{","m\u0152qps","m\u0152s\xEAt","m\u0152u\xEAs","m\xE2{\xEEu","m\xE2{be","m\xE2{bt","m\xE2cbe","m\xE2cbt","m\xE2nqb","m\xE2snb","m\xE2swb","m\xEA{fs","m\xEAdfm","m\xEAe\xFBt","m\xEAh\xFBu","m\xEAhj\xF4","m\xEAlfm","m\xEAmfl","m\xEAq\xEAt","m\xEAqft","m\xEAusb","m\xEEsbj","m\xF4c\u0152s","m\xF4c\xE2m","m\xF4cbc","m\xF4e\xEEu","m\xF4fs\u0152","m\xF7lfu","m\xF7uuz","m\xF7w\xEAt","m\xF7wfh","m\xF7wfu","m\xFBhp{","mb{\xEEu","mb{\xFBs","mb{bd","mb{vm","mbceb","mbcps","mbejl","mbl\xE2k","mbl\xE2t","mblbu","mbljl","mblmj","mblpm","mblpt","mbolb","mbq\xE2u","mbq\xEEu","mbqlb","mbqp{","mbqpt","mbqvm","mbtlb","mbtt\xFB","mbujo","mbups","mf\xE2mm","mf\xE2oz","mf\xF7mu","mf\xF7ou","mf{\xE2s","mfcfh","mfdlf","mfe\u0152m","mfe\xEAs","mfe\xF7g","mfepc","mffku","mfg\u0152{","mfg\u0172{","mfg\xFBk","mfgph","mfgvu","mfhfm","mfi\u0172m","mfi\u0172u","mfi\xEEw","mfi\xFB{","mfifm","mfifu","mfip{","mfjou","mfk\xE2s","mfk\xF7o","mfku\u0152","mfl\xEAs","mfl\xF7q","mfl\xF7u","mflbq","mflfo","mfm\xEAq","mfm\xF4h","mfm\xF7l","mfmfu","mfmlj","mfn\xEAs","mfnf{","mfnpt","mfnvs","mfo\xEA{","mfohf","mfouj","mfpme","mfqfm","mfqlf","mfqsb","mfs\xE2{","mfs\xE2h","mfs\xFBh","mfsbl","mft\xF4{","mft\xFDu","mfu\u0172{","mfu\xEAq","mfu\xEAs","mfu\xEAu","mfu\xF7s","mfupm","mfuve","mfw\xE2h","mfw\xEAm","mfwfs","mfwft","mfwfu","mfwpo","mjcfh","mjdju","mjhfu","mjifh","mjl\u0152s","mjt{u","mjtub","mjufs","mpcph","mpipm","mpl\xE2m","mploj","mpnib","mpuu\xF4","mpwbh","mvhbt","mvlbt","mvsl\xF4","mvtub","mvusj","mvyvt","n\u0172c\u0152s","n\u0172ebm","n\u0172gbk","n\u0172gph","n\u0172k\xEAh","n\u0172m\xE2c","n\u0172ofn","n\u0172tps","n\u0172u\u0152t","n\u0172u\xEAu","n\u0172wfm","n\xE2{mj","n\xE2{pm","n\xE2{tb","n\xE2hjb","n\xE2hvt","n\xE2kvt","n\xE2mib","n\xE2mob","n\xE2nps","n\xE2ojb","n\xE2sjt","n\xE2slb","n\xE2tjl","n\xE2tpm","n\xE2ulb","n\xEA{ft","n\xEA{hb","n\xEAhjt","n\xEAhtf","n\xEAift","n\xEAm\xE2{","n\xEAmu\xF4","n\xEAoft","n\xEAsdf","n\xEAsfh","n\xEAsfu","n\xEAufs","n\xEEnfm","n\xEEwft","n\xF4lvt","n\xF7h\xFDm","n\xFB{tb","n\xFBmjl","n\xFBnjb","n\xFD{mj","nbe\xE2s","nbgmb","nbh\xE2{","nbh\xE2o","nbhbt","nbhnb","nbhpm","nbkpn","nbkps","nblph","nbmbd","nbmpn","nbodt","nboh\xF4","nbohb","nbol\xF4","nboob","nbqqb","nbs\xEAl","nbsbe","nbsh\xF4","nbsib","nbspl","nbt{l","nbubu","nbufl","nf{fj","nfddt","nfe\xE2m","nfee\u0152","nfefs","nfewf","nfh\xE2t","nfh\xEAh","nfh\xEAm","nfh\xEAs","nfh\xEEs","nfh\xF4w","nfh\xF7m","nfh\xFDm","nfh\xFDu","nfhbe","nfhhz","nfhm\u0152","nfhs\xF4","nfhvo","nfhzf","nfifu","nflfh","nfm\xE2l","nfmfh","nfmm\xEA","nfo\xEAt","nfo{b","nfofu","nfooz","nfou\u0152","nfoub","nfs\xEEu","nfsfe","nfsfw","nfssf","nfst{","nft\xEAm","nft\xEAt","nfu\xE2m","nfu\xE2o","nfu\xEAm","nfus\xF4","nfut{","nj\xEAsu","njbuu","njlps","njmj\u0152","njoub","njt\xEA{","njwfm","np{ph","npcjm","npeps","npevm","nphvm","npllb","npoeb","npqfe","npsbk","npsph","nptbu","npte\xF4","npufm","npup{","npups","npuu\xF4","npuz\xF4","nvibs","nvmbu","nvmzb","nvnvt","nvolb","nvsdj","nvsjt","nvswb","nvu\xE2m","nvubu","nvuzj","o\u0152\xFDhz","o\u0152jft","o\u0152obq","o\u0152ofn","o\u0152t\xFDm","o\u0152w\xEAs","o\xE2cpc","o\xE2ebt","o\xE2eps","o\xE2uib","o\xEA{fu","o\xEAibj","o\xEAipm","o\xEAn\xEEu","o\xEAnfu","o\xEAqft","o\xF4hbu","o\xF7wfm","obi\xE2u","obk\xE2e","obq\xEAw","obqm\xF4","obqpt","obu\xFBs","ofi\xEA{","ofnf{","ofnft","oft{f","ofu\xE2o","ofwf{","ofwfm","ofwft","ofwfu","ojngb","ojodt","opn\xE2e","opsnb","opt{b","ovemj","ovh\xE2u","ovmmb","oz\xE2st","oz\xEAsd","oz\xEEmu","oz\xFBku","ozfmw","ozfst","ozftu","ozjmu","ozpmd","p\xE2{jt","pe\xE2jh","peb\xE2u","peb\xEAh","peb\xEAs","peb\xFBu","peb\xFDu","pebbe","pewbt","pllfs","plu\xE2o","plu\xE2w","plubu","pmbt{","pmdt\xF4","pmebm","pmebu","pmu\xE2s","pmu\xE2t","pmubu","pmwbe","pmwbt","pmzbo","pnmjl","poobo","pqdj\xF4","pqfsb","pse\xEEu","psebt","pshjb","psjh\xF4","psl\xE2o","pspt{","pssu\u0152","pswpt","ptups","ptuzb","q\xE2dm\xEA","q\xE2dpm","q\xE2ipm","q\xE2mdb","q\xE2mnb","q\xE2mzb","q\xE2ojl","q\xE2s\xE2t","q\xE2sob","q\xE2spm","q\xE2spt","q\xEAmeb","q\xEAqft","q\xF4{ob","q\xF4{pm","q\xF4lfs","q\xF4mvt","q\xF4mzb","q\xF4s\xE2{","q\xF4svt","q\xF4upm","q\xF7t{f","q\xFBefs","q\xFBqp{","q\xFBqpt","qb{bs","qbd\xE2l","qbdbm","qbdoj","qbdtj","qbelb","qbem\xF4","qbh\xE2u","qbk{t","qbkub","qblmj","qblpm","qbmm\xF4","qbnqb","qbnvu","qbo\xEEs","qboeb","qbofm","qbq\xEEs","qbqpm","qbsuj","qbtbt","qbtt{","qbubl","qbul\xF4","qbv{b","qfd\xEAs","qfe\xE2m","qfejh","qfnq\u0152","qfoh\u0152","qfohf","qfoob","qfsfd","qfsfh","qfsfm","qfsfn","qfskf","qfspo","qfu\xE2l","qj\xF4db","qjbdj","qjdvs","qjifh","qjifo","qjodf","qjouz","qjs\xEEu","qjspt","qjsvm","qjt{f","qjupo","qm\xE2{b","qm\xE2of","qm\xFDtt","qmvt{","qpdbl","qpdpl","qpg\xE2{","qpgp{","qpgpo","qpi\xE2s","qplpm","qpmjq","qpmlb","qpnqb","qpouz","qps{\xF4","qpsp{","qpspm","qpspt","qpsub","qptub","qpupn","qpuzb","qs\xEAeb","qs\xEAsj","qs\xEEnb","qs\xF4{b","qs\xF4cb","qspgj","qvd\xEAs","qvddt","qvdpm","qvemj","qvewb","qvi\xEEu","qvivm","qvlmj","qvmzb","qvnqb","qvodt","qvt{j","qvtlb","qvusj","s\u0152{tf","s\xE2\xE2mm","s\xE2\xF7ou","s\xE2c\xEE{","s\xE2c\xEEs","s\xE2epc","s\xE2gph","s\xE2i\xFB{","s\xE2k\xE2s","s\xE2k\xF7o","s\xE2l\xF7u","s\xE2lbq","s\xE2lfo","s\xE2lpt","s\xE2m\xEAq","s\xE2mfm","s\xE2npm","s\xE2nqb","s\xE2sbl","s\xE2t\xF4{","s\xE2u\xEAs","s\xE2u\xEAu","s\xE2u\xF7s","s\xE2w\xE2h","s\xE2wfs","s\xEA{t\u0172","s\xEAhfo","s\xEAlmj","s\xEAn\xEEu","s\xEAn\xFDm","s\xEAnft","s\xEAufh","s\xEAuft","s\xEAwfe","s\xEElbu","s\xEEnfm","s\xEEuvt","s\xF4{tb","s\xF7g\xF7h","s\xF7i\xF7h","s\xF7ifk","s\xF7qlf","s\xF7wje","s\xFBqjb","s\xFBuvm","s\xFDt{u","sbccj","sbcm\xF4","sbco\u0152","sbcpm","sbe\xEEs","sbebs","sbhbe","sbhp{","sbhzb","sbkub","sbl\xE2t","sblbu","sboej","sf{fh","sf{ft","sf{tj","sfcfh","sfd\xEAt","sfddt","sfe\u0152t","sfh\xEAm","sflfe","sfn\xEAm","sfn\xEE{","sfnfh","sfnfl","sfq\xFDm","sfqdf","sfqfe","sfqft","sftuj","sfu\xFBs","sfufl","sfvnb","sjbe\xF4","sjbeu","sjefh","sjl\xEEu","sjq\u0152l","sjulb","spcbk","spcph","spcpu","spibe","spibn","spibo","spllb","splpo","spn\xE2o","spnpt","spodt","spoeb","spohz","spqph","sptt{","sptub","spu\xE2m","spups","spw\xE2t","spwbs","spwbu","svcfm","svcjo","svnmj","svujo","t\u0172s\xEEu","t\xE2n\xE2o","t\xE2ngb","t\xE2nmj","t\xE2oub","t\xE2shb","t\xE2tlb","t\xE2u\xE2o","t\xE2ups","t\xEAs\xFDm","t\xEAu\xE2m","t\xEEcpu","t\xEElpt","t\xEEm\xEAd","t\xEEqpm","t\xEEsl\u0152","t\xF4efs","t\xF4hps","t\xF4ibk","t\xF4ifs","t\xF4mzb","t\xF4tbw","t\xF4tlb","t\xF4w\xE2s","t\xF7n\xF7s","t\xF7s\xEAu","t\xF7suf","t\xF7u\xEAu","t\xFBspm","t\xFDh\xEAs","t\xFDlfu","t\xFDme\u0152","t\xFDmm\u0152","t\xFDw\xEEu","t\xFDwfh","t{\u0152lf","t{\u0152m\u0152","t{\u0172dt","t{\u0172s\u0152","t{\xE2mm","t{\xE2ou","t{\xE2t{","t{\xEAob","t{\xEAs\u0172","t{\xF4eb","t{\xF4t{","t{\xF4u\u0152","t{\xF7sq","t{\xF7t{","t{\xFDhz","t{\xFDm\u0152","t{bc\xF4","t{bgu","t{blj","t{bsv","t{bsw","t{fhz","t{fou","t{fsc","t{fsw","t{ft{","t{fuu","t{jlf","t{jsu","t{jub","t{m\xE2w","t{nph","t{opc","t{pcb","t{pnk","t{u\xE2s","t{vlb","t{vt{","tbk\xE2u","tbklb","tbkph","tbku\xF4","tbl\xE2m","tbmbl","tboeb","tbqlb","tbsk\xFB","tbsm\xF4","tbspl","tfcbk","tfcft","tfh\xEAe","tfh\xEAm","tfh\xEEu","tfipm","tfmm\u0152","tfnnj","tfolj","tfsfh","tfsuf","tjl\xE2m","tjl\xEEu","tjlfs","tjlfu","tjlm\xF4","tjn\xEEu","tjnvm","tjodt","tjs\xE2n","tjsbu","tjtbl","tjw\xE2s","tjw\xEEu","tl\xE2mb","tnbgv","tnjol","tofdj","tpeps","tpg\u0152s","tplbo","tpngb","tpolb","tpskb","tpspm","tptfn","tq\xE2k{","tq\xF4sb","tqfk{","tqjdd","tqpsu","tuboe","tubsu","tve\xE2s","tvgoj","tvh\xE2s","tvibo","tviph","tvn\xE2l","tvn\xEAs","tvozj","tvtph","u\u0152{fh","u\u0152l\xEAt","u\u0172ojl","u\xE2cmb","u\xE2cps","u\xE2h\xEEu","u\xE2hbt","u\xE2hvm","u\xE2k\xEAl","u\xE2kpm","u\xE2lpm","u\xE2mbm","u\xE2mdb","u\xE2mlb","u\xE2nbe","u\xE2ngb","u\xE2nmb","u\xE2sdb","u\xE2shz","u\xE2sm\xF4","u\xE2sob","u\xE2spm","u\xE2svm","u\xE2tlb","u\xE2uph","u\xE2wi\u0152","u\xE2wpm","u\xEA{jt","u\xEAhmb","u\xEAq\xE2{","u\xEAs\xEEu","u\xEAsl\u0152","u\xEAufm","u\xEAw\xFBu","u\xEAwfe","u\xEAwft","u\xEEn\xE2s","u\xEEqvt","u\xF4dtb","u\xF4evm","u\xF4ovt","u\xF7cc\xEA","u\xF7ccj","u\xF7mhz","u\xF7n\xEAt","u\xF7n\xEEu","u\xF7n\xF7s","u\xF7nfh","u\xF7nm\u0152","u\xF7s\xF7l","u\xF7s{t","u\xF7sjl","u\xF7sqf","u\xF7wjt","u\xFB{pl","u\xFBm\xEAm","u\xFBmbe","u\xFBmm\u0152","u\xFBmp{","u\xFBmt\xF4","u\xFBs\xF4t","u\xFD{fm","u\xFD{ft","u\xFDl\xF7s","u\xFDm\xF7l","u\xFDoef","u\xFDofu","u\xFDt{\u0152","u\xFDtlf","ubcbl","ubhbe","ubhpm","ubkhb","ublbs","ubm\xE2m","ubm\xE2o","ubmbk","ubmnj","ubmpo","ubo\xE2s","ubo\xEAw","ubo\xEEu","ubovm","ubozb","ubq\xEEs","ubqbe","ubqm\xF4","ubqpt","ubs\xEAk","ubsbk","ubskb","ubsl\xF4","ubslb","ubsm\xF4","ubspm","ubtbl","ubu\xE2s","ufbg\u0172","ufhf{","ufi\xE2u","ufi\xEAo","ufifs","ufk\xFBu","ufkfm","uflfs","uflo\u0152","ufm\xEAs","ufm\xEEu","ufmfl","ufmfm","ufmfq","ufmjl","ufnfu","ufnq\xF4","ufops","ufqfs","ufqtj","ufs\xEEu","ufs\xFDm","ufsfm","ufsfn","ufsfq","ufsft","uft{u","ufufn","ujmpt","ujodt","ujoub","ujqfh","ujqmj","ujqps","ujt{u","uju\xE2o","ujupl","upcp{","upk\xE2t","upkjl","upmbu","upmvm","upnqb","upojl","upoob","upqph","ups{\xF4","upsnb","upsob","upspl","upsub","upufn","us\xEAgb","us\xFDll","usfgg","usfoe","uspmj","uspmm","uspqb","uvc\xE2l","uvcvt","uvdbu","uve\xE2t","uve\xF4t","uvebu","uvl\xE2o","uvmpl","uvozb","uvsvm","uvtl\xF4","uvtpm","uvubk","vewbs","vhs\xE2m","vhsbu","vhsjl","vhzbo","vls\xE2o","vmusb","vodjb","voepl","voeps","voplb","vt{\xEEu","vu\xE2t{","w\xE2{pm","w\xE2emj","w\xE2epm","w\xE2hub","w\xE2k\xE2s","w\xE2kbu","w\xE2mjl","w\xE2mu\xF4","w\xE2mz\xFB","w\xE2n\u0152s","w\xE2npm","w\xE2npt","w\xE2s\xFBs","w\xE2sbu","w\xE2spt","w\xE2t\xE2s","w\xEA{ob","w\xEAen\u0172","w\xEAh\xFDm","w\xEAhf{","w\xEAhft","w\xEAhjh","w\xEAhsf","w\xEAht\u0152","w\xEAo\xFDm","w\xEAsc\u0152","w\xEAsft","w\xEAufl","w\xEAufm","w\xEE{l\u0152","w\xEE{vn","w\xEEsvt","w\xF7e\xF7s","w\xF7mhz","w\xF7s\xF7t","wbdbl","wbdph","wbdpl","wbe\u0152s","wbe\xEEu","wbe\xF4d","wbepo","wbevm","wbhpo","wbkb{","wbkbt","wbkeb","wbkpo","wbl\xEEu","wblbs","wblpm","wblvm","wbm\xF4t","wbshb","wbsk\xFB","wbstb","wbt\xE2s","wbt\xFBu","wbtbm","wbuub","wf{\xEAs","wf{fu","wfefm","wfefs","wfloj","wfs\xEAc","wfsfn","wfu\xEAm","wfu\xEEu","wj{ft","wj{ju","wjbt{","wje\xE2n","wje\xEAl","wje\xEEu","wjesb","wjevm","wjhbe","wjibs","wjiph","wjm\xE2h","wjmmb","wjs\xE2h","wjs\xEEu","wjstj","wjsvm","wjt\xEEu","wjtfm","wjtl\xF4","wju\xEA{","wjubu","wjufu","wpelb","wpm\xE2o","wpobm","wpobu","wpovm"];
		
		const szozatWordList = ["\u0152{jlf","\u01522zs\xFDm\u0152","\u01522zs2zs\xE2k","\u01522zs2zsfm","\u01522zsfm\u0152","\u0152e\xF7oh","\u0152s\xF7mu","\u0152s2zsfn","\u0152si\xE2{","\u0152sif2yl","\u0152tb2ynb","\u0152tb2ytb","\u0172sm\xEA2yn","\xE22szjbj","\xE22yggfk","\xE22ygm\xE2c","\xE22ygu\xE2m","\xE22ygw\xE2{","\xE2gp2ynb","\xE2mm\xE2t","\xE2mm\xEEu","\xE2s2yn\xEAl","\xE2sn\xE22yn","\xE2sq\xE2e","\xE2su\xE22yn","\xE2tw\xE22yn","\xE2u\xE2mm","\xE2u2yg\xFBs","\xE2u2zs\u0172s","\xE2u2zsfm","\xE2ug\u0172u","\xE2ug\xEAs","\xE2ugph","\xE2ulp{","\xE2um\xE2u","\xE2us\xFBh","\xE2uu\xEAu","\xE2uuf2zs","\xEA2zsblj","\xEA2zsm\xEA2yn","\xEA2zsmfm","\xEAmkfo","\xEAmn\xEA2yn","\xEAqq\xFB2yg","\xEAqqp2yl","\xEAqt\xEAh","\xEAs{\xEAt","\xEAseft","\xEAsfuu","\xEAsufn","\xEAsw\xEA2yn","\xEEsnbh","\xEEsopl","\xEEwmbq","\xF4bsb2yn","\xF4mnp{","\xF4o2zs\xEEo","\xF4qjvn","\xF72scl\xF7t","\xF72zs2zsfh","\xF72zs2zsft","\xF72zsu\xF7o","\xF7cm\xEEu","\xF7mu\xEAt","\xF7mu\xF72yn","\xF7o{\xEAt","\xF7ol\xEA2yn","\xF7oo\xF7o","\xF7oufu","\xF7u2zs\xF7h","\xF7w2scbu","\xFB2ygip2yg","\xFB2zs\xF4u\u0172","\xFB2zspuu","\xFB2zsubu","\xFBklps","\xFBkpod","\xFBsjo\u0152","\xFBukph","\xFD2ygg\xEAm","\xFD2ygl\xF7s","\xFDe\xEEu\u0152","\xFDlb2ynb","\xFDsn\xF7t","\xFDuufu","\xFDw\xF7mu","{\xE2s2zs\xF4","{\xE2slb","{\xE2spm","{\xE2svm","{\xF72yt\xF7h","{\xFBe\xEEu","{bcpt","{bkph","{bo{b","{foh\u0152","{jmj{","{pl2zs\xF4","{ploj","{v{n\xF4","2sc\u0152e\xF7s","2sc\u0152s\u0152m","2sc\xE22zs\xE2s","2sc\xE2cpt","2sc\xE2cvm","2sc\xE2l\xE22yn","2sc\xE2oh\xF4","2sc\xE2w\xE2{","2sc\xEAw\xEAm","2sc\xF42sc\xE2m","2sc\xF7c\xF7s","2sc\xF7n\xF7s","2sc\xF7q\xF7h","2sc\xF7s\xF7h","2sc\xFB2sc\xEEw","2sc\xFB2scpt","2sc\xFB2yn\xEEu","2sc\xFB2zslb","2sc\xFBgpm","2sc\xFD2sc\xF7l","2sc\xFD2sc\xFDm","2sc\xFDmm\u0152","2sc\xFDsif","2scb2sclb","2scbqpt","2scf2scfo","2scfmft","2scfmm\xF4","2scfq\xFDm","2scfs{\u0152","2scfwfh","2scj2sc\xE2t","2scjhfs","2scjipm","2scjmm\xF4","2scjsj{","2scju\xEEu","2scjusj","2scpscb","2scv2zslb","2scvn\xE2{","2scvsph","2sz\xE2lpm","2sz\xE2np2yl","2sz\xEAufs","2sz\xEEs{\xF4","2sz\xF72yl2ylf","2szj2szjl","2szjhfs","2szjobu","2szjs\xE2g","2szpmob","2szvsm\xF4","2yg\u0172m\xF7m","2yg\u0172s\u0172{","2yg\u0172s\u0172t","2yg\xE2n\xFD2yg","2yg\xE2wvm","2yg\xEAl\xEA2yn","2yg\xF42yg\xE22zs","2yg\xF42yg\xEEs","2yg\xF42yg\xEEu","2yg\xF42ygg\u0172","2yg\xF42ygvm","2yg\xF72yn\xF7s","2yg\xF7q\xF7t","2yg\xF7u\xF7s","2yg\xFBs\xE2t","2yg\xFBsbu","2ygb2yg\xE2t","2ygbo\xFBt","2ygbqk\xFB","2ygbsm\xF4","2ygfs2ytb","2ygjmpl","2ylvlb2sc","2yn\xE2kbt","2yn\xE2mlb","2yn\xEEs\xE2t","2yn\xFD2zs\xEEu","2ynbl\xEAl","2ynblbt","2ynbljh","2ynbsbm","2ynf2ynfd","2ynju\xE22yn","2ynpn\xF4t","2yt\xFBl\xF4m","2zs\u01522ynfh","2zs\u0152l\xEAt","2zs\u0152m\u0152t","2zs\u0152m\xEA2zs","2zs\xE2mm\xF4","2zs\xE2n\xEEu","2zs\xE2npt","2zs\xEAlf2yl","2zs\xEAqjb","2zs\xEAsjb","2zs\xEAu\xEAh","2zs\xEAug\xFB","2zs\xEAum\u0152","2zs\xEEo\xEA2zs","2zs\xEEwfm","2zs\xF42zs\xEAl","2zs\xF4l\xEAq","2zs\xF4mbm","2zs\xF4mbn","2zs\xF4s\xE2t","2zs\xF72zs\xF7m","2zs\xF72zslf","2zs\xF7hf2sc","2zs\xF7hft","2zs\xF7ljl","2zs\xFDm\xEA2zs","2zsbc\xE22zs","2zsbl\xE22sc","2zsbl2zs\xF4","2zsblb2zs","2zsbqvm","2zsbu\xEAo","2zsbwb{","2zsf\xE2o2zs","2zsf2zs\xEA2yl","2zsf2zsft","2zsfhf{","2zsflvt","2zsfmfm","2zsfn\xEA2zs","2zsfsf{","2zsj\xE2nj","2zsj2yt2ytb","2zsjl\xE2s","2zsjmbk","2zsjslb","2zsju\xE2m","2zslf2sc2sc","2zspo\xE2s","2zsv2zs\xEAl","2zsvgmb","3szdji\xE2e","3szdvolb","b{{bm","b2yn\xE22ynj","b2yn\xF4lb","b2ynb\xF7m","b2ynvlb","b2zs2zs\xEEs","b2zsbmu","b2zspuu","bccbo","bee2zsb","bgh\xE2o","bhbo2sc","bhh\xE22yl","bhhbu","bk\xE2om","bkkbk","bm\xE2\xFDm","bmbuu","bmcvn","bmnp{","bmofn","bmubu","bohpm","boobl","bqs\xEEu","bveju","bwwbm","c\u01522zs\xEEu","c\u0172{\xF7t","c\xE22yn\xE22zs","c\xE2cpt","c\xE2kpt","c\xE2nvm","c\xE2s\xE22yn","c\xE2s2yg\xFB","c\xE2slj","c\xE2snj","c\xEAl\xFDm","c\xEAsft","c\xEEsoj","c\xF4evm","c\xF4ov2zs","c\xF72yg\xF7t","c\xF7h\xF72yl","c\xFBh\xE2t","cbl2sc\xF4","cbmi\xEA","cbncb","cbo3szdb","cbsl\xF4","cbujl","cf2zs\xEAe","cf2zsfh","cfg\xEAs","cfibm","cfk\xE2s","cfm\xE2u","cfm\xF4h","cfoof","cft\xFDm","cfu\xEAs","cfwf2zs","cm\xF7gg","cp2ylh\xF4","cp2zs2zs\xFB","cphbt","cpi\xEAn","cpmib","cps\xE2o","cps\xEEu","cpsvm","cpum\xF4","cpyfs","cvol\xF4","cspo{","d\xE2so\xEA","dbol\xF4","dfgsf","djnqb","djolf","djqfm","djspl","dpcp2yl","dpnq\xF4","dvebs","e\u01522sz\xF7m","e\xEE2zs\xEEu","e\xEEkbt","e\xEEw\xE22yn","e\xF4{jt","e\xF7g\xEAt","e\xFBtvm","ebdpt","ebhbe","ebs\xE2m","ebu\xE2m","ebvfs","efip2yg","efmfm","efscj","ej\xEAub","ej2yn2ynf","ep3szdfn","epcbu","esv2zsb","evqmb","f{\xFDtu","f{{fm","f2yg\xEEw\u0172","f2yg\xFD2yg\u0172","f2yg\xFDuu","f2ygi\xE2{","f2yn\xEAjn","f2zdfuu","fccfo","fiif{","fkufu","fm\u01522zs\xF4","fm\u0152lf","fm\xE2mm","fm2sc\xEEq","fm2sc\xF4s","fm2scfo","fm2ynfm","fm2ynpn","fm2zs\xF4m","fm2zsbc","fm2zsfm","fmc\u0152h","fmepc","fmevh","fmfkf","fmfwf","fmg\u0172{","fmgp2yg","fmk\xF7o","fmkvu","fmlbq","fmlfm","fmmf2zs","fmmfo","fmmfq","fmmft","fmnpt","fmu\u0172{","fmu\xF7n","fmufm","fmw\xEAs","foofl","fs\u0152n\u0172","fsf2zsu","ftfuu","fufu\u0152","g\u0152c\u0172o","g\u0152gbm","g\u0152ojy","g\u0152s\xEA2zs","g\u0172{\u0152t","g\xE2{\xF4t","g\xEA2yn\xE2s","g\xEA2yn\xEAw","g\xEA2zsfl","g\xF7m\xEA2yn","g\xF7m\xEAs","g\xF7wf2yn","g\xFBwbu","g\xFD{ft","g\xFD2yt\xFDm","g\xFDshf","gb2yg2yg\xFB","gb2yt2yt\xFB","gbd\xEAs","gbi\xE2{","gbi\xEEe","gbpe\xFB","gbs\xE22sc","gbspl","gbspm","gbufs","gf2yg\u0152s","gf2yn\xEEu","gfk\u0152t","gfm\xEAm","gfm\xEEs","gfmfm","gfmt\u0152","gfopm","gj{fu","gjdl\xF4","gjo2scj","gjo3szdb","gjof2zs","gjpmb","gphbe","gphbt","gpobu","gpu\xF4t","gs\xE22ynb","gs\xF72sc2sc","gsbod","gspou","gvlbs","h\u0152{\xF7m","h\u0152{\xF7t","h\xE2eps","h\xE2hph","h\xE2u\u0152s","h\xEAh\xEA2zs","h\xEAq\xEA2zs","h\xEAqfm","h\xF4mpt","h\xF72sc\xF7t","h\xF7c\xF72yl","h\xF7d\xF7h","h\xF7s\xF7h","h\xFD2yg\xF7h","hbnnb","hjh\xE22zs","hv2yl\xE2t","hvbop","hvs\xEEu","hvwbe","i\u0152ubo","i\u0172m\xEAt","i\xE2m\xE2m","i\xE2ubt","i\xEE{\xE2t","i\xEEnft","i\xEEwbu","i\xF42ylbh","i\xF4e\xEEu","i\xF4gbm","i\xF4qbe","i\xFBtm\xEA","i\xFD2yl\xFDm","i\xFDmm\u0152","ib2yt2yt\xFB","ibc{\xF4","ibcl\u0152","ibegj","ibkpm","ibm\u0152s","ibmm\xF4","ibtbt","ibu\xE2s","if2ytfh","ifwf2yn","ify\xE2o","ijhb2yn","ijoub","ijqqj","ijuft","ip{bn","ip{bu","ip2ygbo","ip2ygof","ip2zs2zs\xFB","ipse\xF4","ivn\xE2o","j{{jl","jcp2ylb","je\xEAcc","je\xFDmu","jef\xE2m","jejmm","jibu\xF4","jmmjl","jnjuu","joefy","jofsu","joofo","js\xE2ou","jsebm","jsu\xE2t","jtj\xE22zs","jtufo","k\xE22zspm","k\xE2spn","k\xEAh\xE2s","k\xEAobj","k\xEAsdf","kbk2zs\xF4","kbw\xEEu","kf2yg{\u0152","kfmf{","kfmfm","kph\xE22zs","kvllb","kvsub","l\u0152{fu","l\u01522sz\xE2l","l\u01522zs\xEEw","l\u0152i\xE2{","l\u0152t\xEEs","l\xE2c\xEEu","l\xE2cvm","l\xE2s\xE22zs","l\xE2spt","l\xEA2zs\xFDm","l\xEAn\xEA2yn","l\xEAno\u0152","l\xEAs\xEA2zs","l\xEAs\xEAt","l\xEAsfn","l\xEAt\xEAt","l\xEEopt","l\xF4gjd","l\xF4lv2zs","l\xF7{\xF72yn","l\xF7{n\u0172","l\xF72sc\xF7h","l\xF72yl\xF7l","l\xF72yn\xEAl","l\xF72yn\xF7l","l\xF72yn2yn\u0172","l\xF72zs\xF7o","l\xF7m\xF7l","l\xF7mft","l\xF7q\xEAt","l\xF7q\xF72yl","l\xF7q\xFDm","l\xF7sfu","l\xFB2zsjl","l\xFD2zs\xF7c","l\xFDm\xFD2yg","l\xFDme\u0152","l\xFDmt\u0152","l\xFDsfu","lb{\xE2s","lb2sclb","lb2zs2zsb","lbkbl","lblb\xF4","lblbt","lbm\xE22sc","lbnb2zs","lbo\xE2m","lbo3szdj","lboob","lbq2szj","lbqps","lbs\xEAk","lbspn","lbtlb","lf2sclf","lf2zs2yt\u0172","lfew\u0172","lflfd","lfmub","lfn\xEA2yn","lfs\xEEu","lfsfl","lftf2yl","lfw\xEAt","linfs","lj\xF7ou","lj2zs\xF4m","lj2zsfe","ljcvd","ljfku","ljg\xFBk","lji\xE2h","ljibm","ljk\xE2s","ljl\xEAs","ljm\xE2u","ljnbs","ljnfs","ljojo","ljs\xFBh","ljw\xE2k","ljw\xEAm","ljwf2zs","lmjll","lp{\xE2l","lp2ynbl","lp2ytph","lpipm","lpn\xF4e","lpoeb","lpopl","lpqkb","lps\xE2m","lpsi\u0172","lpw\xE22sc","lsfpm","lsvqq","lvlv2sc","lvlvm","lvqpo","lvsvd","lwbsd","m\u01522sc\xF7m","m\u01522zsfs","m\u0152qps","m\u0152u\xEAs","m\xE22ygvm","m\xE2o3szdb","m\xE2qj2zs","m\xE2snb","m\xE2u2sc\u0152","m\xEAlfm","m\xEAmfl","m\xEAqft","m\xF4cbc","m\xF4uv2zs","m\xF72yt\xF7h","m\xF72zs\xF7t","m\xF7l\xEAt","mb2sz\xE2m","mb2zs2zs\xF4","mblpt","mbqp{","mbufy","mf\xE2mm","mf2scbq","mf2ygf{","mf2yn\xFBm","mf2ynfm","mf2zs\xF4m","mf2zsfm","mf2zsje","mfcvk","mfe\u0172m","mfepc","mfevh","mfhfm","mfib2yg","mfk\xE2s","mflfm","mfm\xF7l","mfmfq","mfmft","mfmfu","mfoof","mfqfm","mfwpo","mjmjl","mjmvm","mjn\xE22yn","mjnft","mjufs","mp2scph","mp2scpm","mpibe","mpipm","mpwbh","mpwbl","mv2scpl","mvebt","mvnfo","mvusj","n\u01722zsfn","n\u01722zsfs","n\u0172c\u0152s","n\u0172ubh","n\u0172wfm","n\u0172wft","n\xE2{mj","n\xE22sz\xE2m","n\xE22sz\xE2t","n\xE22zsjl","n\xE2hvt","n\xE2nps","n\xE2t\xEEu","n\xEA{g\u0172","n\xEAi\xEA2zs","n\xEAol\u0172","n\xEAsfh","n\xF7h\xFDm","n\xFBnjb","n\xFD2yt\xFDs","nb2zdbh","nb2zs2zsb","nbhbn","nbhnb","nbho\xF4","nblph","nbpsj","nbqqb","nbubu","nf{\u01522yn","nf{po","nf2zs2zsf","nfh\u0172{","nfhg\u0152","nfm\xE2l","nfm\xF4t","nfmb2zs","nfou\u0152","nfssf","nfu\xE2o","njsib","njsj2yg","np2zsbu","npsbk","npswb","nptp2yl","nvltj","nvmbu","nvnvt","nvswb","o\u0152{\xEAt","o\xE22zs\xE22yg","o\xEAi\xE22yn","o\xEAn\xEEu","o\xEAnfu","o\xF4hbu","o\xF7w\xEA2yn","o\xFDbo2zs","ofn{\u0152","ojo3szdb","peb\xFDu","pebbe","pewbt","plt\xE2h","pmebu","pmwbe","pnm\xE2t","pnm\xF4t","poobo","psspm","pssu\u0152","q\xE22szju","q\xE2l\xE22zs","q\xE2qbj","q\xF4{pm","q\xF72yt\xF7h","q\xF7s\xF72yl","qb2zs2zs\xEA","qbdoj","qbm\xF4d","qbnqb","qbob2zs","qbs\xE22sz","qbtbt","qfe\xE2m","qfsh\u0152","qjsph","qp2ytlb","qp2zsu\xF4","qpdbl","qpo2sc\xF4","qps{\xF4","qpsi\xF4","qvsjn","qvuu\xF4","s\xE2\xE2mm","s\xE2{\xE2s","s\xE22yg\u0172s","s\xE22yg\xFBs","s\xE22zs\u0172s","s\xE22zs\xE2o","s\xE22zs\xF4s","s\xE22zs\xFBs","s\xE2c\xEE{","s\xE2ej\xF4","s\xE2fku","s\xE2k\xE2s","s\xE2l\xE22zs","s\xE2m\xEAq","s\xE2npt","s\xE2nqb","s\xEA{2sc\u0152","s\xEAh\xEA2zs","s\xEAups","s\xEAw\xEA2zs","s\xEAwfe","s\xEEuvt","s\xF4mbe","s\xF72yt\xF7h","s\xF7ifk","s\xFBcfo","s\xFBqjb","s\xFDift","sbebs","sbh\xE22yl","sbkl\xF4","sbwb2zs","sf{fm","sf{h\u0152","sf2ynif","sfh\xEA2yn","sfn\xEE{","sj2scbk","sjltb","sjqb2sc","sjulb","spibn","sptub","spups","svcfm","svncb","svujo","t\xE2wp{","t\xEAlfm","t\xEAu\xE2m","t\xEEsl\u0152","t\xF4hps","t\xF4tu\xF4","t\xF7s\xF7t","t\xFB2ylpt","t\xFDme\u0152","tb2zs2zs\xEA","tb2zsmb","tbku\xF4","tbu2ynb","tbwbt","tf2ylfn","tfcbk","tfh\xEAe","tfh\xEAm","tfl\xEA2yl","tfsjg","tjftt","tjlfs","tjs\xE22yl","tnjol","tpes\xF4","tpngb","tpspt","tqjdd","tqvsj","tv2yt2yt\xF4","tvgoj","tvibo","tvn\xE2l","tvwbe","u\u0152{fh","u\u0152m\xFDl","u\u01722zs\xE2s","u\xE2kpm","u\xE2lpm","u\xE2nb2zs","u\xE2nmb","u\xE2sm\xF4","u\xE2sp{","u\xEA2zsub","u\xF72yt\xF7h","u\xF7cc\xEA","u\xF7n\xEAt","u\xF7s\xEAt","u\xF7s\xFDm","u\xFBmo\u0152","ub2scl\xF4","ub2zs\xEEu","ubsu\xF4","ubyjt","ufifu","ufmfm","ufnfu","ufoj2zs","ufqtj","ufsn\u0152","ufu2zs\u0152","ufufn","ujmef","ujmpt","ujnt\xF4","ujqfh","upnqb","upojl","us\xEAgb","us\xF72zsu","usfoe","usjl\xF4","usp2yt2yt","uvsib","v2szpsb","vkhvs","vmusb","vncsb","voplb","vsbjn","vu\xF42zs\xF4","w\u0152g\xEA2yl","w\xE22zspo","w\xE2h\xE22yn","w\xE2kbu","w\xE2spt","w\xEAhsf","w\xEAo\xFDm","w\xEAs{\u0152","w\xEAsfc","w\xEAt\xEAt","w\xEE{\xE22yg","w\xEE{\xFD2yg","w\xEE{2sc\u0152","w\xEE{j\xF4","w\xEEhb2zs","w\xF72sc\xF7l","wbe\xEE{","wbe\xEEu","wbem\xF4","wbkpo","wbm\xF4t","wbs\xEAh","wbtl\u0152","wbtn\u0172","wbuub","wf2zs\xEA2yl","wf2zs2zs\u0152","wfm\xFBs","wft\xEA{","wfufu","wfw\xEA2yn","wj2zs\xE22yl","wjesb","wjevm","wjhbe","wjiph","wjt\xEEu","wjufm","wvstu"];
		
		let tempArray = [];

		for (let i=0; i<szoreggeltWordList.length; i++) {
			tempArray = [];
			for (let j=0; j<szoreggeltWordList[i].length; j++) {
				let u = szoreggeltWordList[i].charCodeAt(j);
				tempArray.push(String.fromCodePoint(u - 1));
			}
			dictionaries[1].push(tempArray)
		}
		console.log("Beolvasott szavak szama a Szóreggelt játékhoz: " + dictionaries[1].length);

		for (let i=0; i<szozatWordList.length; i++) {
			tempArray = [];
			for (let j=0; j<szozatWordList[i].length; j++) {
				let u = szozatWordList[i].charCodeAt(j);
				if ((u==50) || (u==51)) {
					tempArray.push(szozatWordList[i].substr(j+1,Number(String.fromCodePoint(u))).split("").reverse().join(""));
					j+=Number(String.fromCodePoint(u));
				}
				else {
					tempArray.push(String.fromCodePoint(u - 1));
				}
			}
			dictionaries[0].push(tempArray)
		}
		console.log("Beolvasott szavak szama a Szózat játékhoz: " + dictionaries[0].length);
	}

	function scrollToTop() {
		document.getElementsByTagName('html')[0].scrollIntoView();
		return false;
	}

	function turnSpinner() {
		if (spinnerCounter==3) {
			spinnerCounter=0;
		}
		else {
			spinnerCounter++;
		}
		document.getElementById("target_cell_spinner_area").innerHTML=spinnerContent[spinnerCounter];
	}

	function updateKeyboardColors() {
		for (let i = 1; i<=5; i++) {
			let currentListbox=document.getElementById('letter_'+i);
			if (currentListbox.value != "") {
				document.getElementById('keyboard_letter_' + currentListbox.value.toLowerCase()).classList="c-keyboard-letter";
			}
		}
		
		for (let i = 1; i<=5; i++) {
			let currentListbox=document.getElementById('letter_'+i);
			if (currentListbox.value != "") {
				document.getElementById('keyboard_letter_'+currentListbox.value.toLowerCase()).classList.add(document.getElementById('letter_to_select_box_'+i).classList[1]);
			}
		}
		return false;
	}
	
	function setupGame(gameName) {
		function emtpySelectBox(selectBox) {
			while (selectBox.options.length > 0) {
				selectBox.remove(0);
			}
		}
		
		function fillSelectBox(selectBox, lettersToFill) {
			
			for (let i=0; i<lettersToFill.length; i++) {
				let newOption = document.createElement("option");
				if (lettersToFill[i].length>3) {
					newOption.innerHTML = "&" + lettersToFill[i] + ";"; 
				}
				else {
					newOption.innerHTML=lettersToFill[i];
				}
				newOption.value=lettersToFill[i];
				selectBox.add(newOption);
			}
		}

		function updateKeyboardLayout(lettersToFill) {
			for (let i=1; i<lettersToFill.length; i++) { //az üres első elemet alapból kihagyom!
				document.getElementById("keyboard_letter_" + lettersToFill[i].toLowerCase()).classList.toggle("is-removed");
			}
		}
		
		const szozatLetters = ["","A","Aacute","B","C","CS","D","DZ","DZS","E","Eacute","F","G","GY","H","I","Iacute","J","K","L","LY","M","N","NY","O","Oacute","Ouml","Odblac","P","Q","R","S","SZ","T","TY","U","Uacute","Uuml","Udblac","V","W","X","Y","Z","ZS"]
		const szoreggeltLetters = ["","A","Aacute","B","C","D","E","Eacute","F","G","H","I","Iacute","J","K","L","M","N","O","Oacute","Ouml","Odblac","P","Q","R","S","T","U","Uacute","Uuml","Udblac","V","W","X","Y","Z"];

		for (let i=1; i<=5; i++) {
			let selectionBox = document.getElementById("letter_" + i);
			emtpySelectBox(selectionBox);
			fillSelectBox(selectionBox, eval(gameName + "Letters"));
		}

		let items1 = document.querySelectorAll('.c-keyboard-letter');
		for (let x=0; x<items1.length; x++) {
			if (!((items1[x].id=="form_reset_button") || (items1[x].id=="search_button"))) {
				items1[x].classList.add("is-removed");
			}
		}
		
		updateKeyboardLayout(eval(gameName + "Letters"));
		
		if (gameName=="szozat") {
			dictionary = dictionaries[0];
		}
		else {
			dictionary = dictionaries[1];
		}

		if ((!dictionaries[0]) && (!dictionaries[1])) {
			document.body.innerHTML = "<html><body><h1>Egyik sz&oacute;t&aacute;r bet&ouml;lt&eacute;se sem siker&uuml;lt.</h1></body></html>";
		}
		else if (!dictionary) {
			document.getElementById("target_cell").innerHTML="A sz&oacute;t&aacute;r &uuml;res!";
		}

	}
	
	document.addEventListener('DOMContentLoaded', (event) => {

		function handleFocus_DropdownListbox(e) {
			this.blur();
			return false;
		}

		function handleClick_KeyboardLetter(e) {

			for (let i = 1; i <= 5; i++) {
				let currentListbox=document.getElementById('letter_'+i);
				if (currentListbox.value.toLowerCase() == e.srcElement.id.replace("keyboard_letter_","")) {
					currentListbox.value = "";
					currentListbox.dispatchEvent(new Event('change'));
				}
			}
			
			this.classList.remove('is-at-right-position','is-at-wrong-position');
			this.classList.toggle('is-excluded');
			if (this.classList.contains('is-excluded')) {
				excludedLetters.push(this.innerHTML.toLowerCase());
			}
			else {
				let FilteredLetter = this.innerHTML.toLowerCase();
				excludedLetters = excludedLetters.filter(function(e) { return e !== FilteredLetter });
			}
			return false;
		}
		
		function handleClick_FormResetButton(e) {
		
			let items4 = document.querySelectorAll('.c-dropdown-listbox');
			for (let x=0; x<items4.length; x++) {
				items4[x].value="";
				items4[x].dispatchEvent(new Event('change'));
			}

			let items5 = document.querySelectorAll('.c-keyboard-letter');
			for (let y=0; y<items5.length; y++) {
				switch(items5[y].id) {
					case "search_button":
						break;
					case "form_reset_button":
						break;
					default:
						items5[y].classList.remove("is-excluded");
				}
			}
			excludedLetters=[];
			document.getElementById('target_cell').innerHTML="&nbsp;";
			document.getElementById('target_cell_spinner_area').innerHTML="&nbsp;";
			turnSpinner();
			scrollToTop();
			return false;
		}			
			
		function handleClick_ColorChangeButton(e) {
			let buttonId=this.id.slice(-1);
			document.getElementById('color_change_button_' + buttonId).classList.toggle('is-at-wrong-position');
			document.getElementById('color_change_button_' + buttonId).classList.toggle('is-at-right-position');
			document.getElementById('letter_to_select_box_' + buttonId).classList.toggle('is-at-wrong-position');
			document.getElementById('letter_to_select_box_' + buttonId).classList.toggle('is-at-right-position');
			updateKeyboardColors();
			return false;
		}
			
		function handleChange_DropdownListbox(e) {
			let listboxId=this.id.slice(-1);
			if (listboxPreviousValue[listboxId] != "") {
				document.getElementById('keyboard_letter_' + listboxPreviousValue[listboxId].toLowerCase()).classList="c-keyboard-letter";
			}
			if (this.value != "") {
				if (listboxPreviousValue[listboxId] == "") {
					document.getElementById('color_change_button_' + listboxId).classList.add('is-at-wrong-position');
					document.getElementById('letter_to_select_box_' + listboxId).classList="c-letter-select-box is-at-right-position";
				}
				document.getElementById('color_change_button_' + listboxId).classList.remove('is-hidden');
			}
			else {
				document.getElementById('color_change_button_'+listboxId).classList.remove('is-at-right-position','is-at-wrong-position');
				document.getElementById('color_change_button_'+listboxId).classList.add('is-hidden');
				document.getElementById('letter_to_select_box_' + listboxId).classList="c-letter-select-box";
			}
			updateKeyboardColors();
			listboxPreviousValue[listboxId] = this.value;
			return false;
		}
		
		function handleChange_GameSelectorForm(e) {
			document.getElementById("form_reset_button").dispatchEvent(new Event('click'));
			if (document.getElementsByName(this.name)[0][1].checked) {
				document.getElementById("c-szozat-css").media="none";
				document.getElementById("c-szoreggelt-css").media="";
				setupGame("szoreggelt");
			}	
			else {
				document.getElementById("c-szozat-css").media="";
				document.getElementById("c-szoreggelt-css").media="none";
				setupGame("szozat");
			}
			return false;
		}

		
		function handleClick_SearchButton(e) {

			function findWord(myword) {
				return (regexpContents[0][regexpContents[0].length-1].test(myword[0]) && regexpContents[1][regexpContents[1].length-1].test(myword[1]) && regexpContents[2][regexpContents[2].length-1].test(myword[2]) && regexpContents[3][regexpContents[3].length-1].test(myword[3]) && regexpContents[4][regexpContents[4].length-1].test(myword[4]));
			}

			let regexpContents = [[],[],[],[],[]];
			let wrongPositionLetters = [];
			turnSpinner();


			for (let i = 1; i<=5; i++) {
				let currentListbox=document.getElementById('letter_'+i);
				if (currentListbox.value != "") {					
					if (document.getElementById('letter_to_select_box_' + i).classList.contains('is-at-right-position')) {
						regexpContents[i-1].push(currentListbox.options[currentListbox.selectedIndex].text.toLowerCase());
						regexpContents[i-1].push("*");
					}
					else {
						for (let j = 1; j<=5; j++) {
							if (regexpContents[j-1][regexpContents[j-1].length-1]=="*") {
								continue;
							}
							if (j === i) {
								regexpContents[j-1].push(currentListbox.options[currentListbox.selectedIndex].text.toLowerCase());								
								continue;
							}
						}
						wrongPositionLetters.push(currentListbox.options[currentListbox.selectedIndex].text.toLowerCase());
					}
				}
			}

			for (let k = 1; k<=5; k++) {
				if (regexpContents[k-1][regexpContents[k-1].length-1]!="*") {
					regexpContents[k-1]=regexpContents[k-1].concat(excludedLetters);
				}
			}
			
			if (regexpContents.join().replace(/,/g,"").length + excludedLetters.length == 0) {
				document.getElementById("target_cell").innerHTML="&Uuml;res keres&eacute;s!";
				console.log("üres keresés eldobva!");
				return false;
			}

			for (let x = 1; x<=5; x++) {
				if (regexpContents[x-1][regexpContents[x-1].length-1]=="*") {
					regexpContents[x-1].push(new RegExp(regexpContents[x-1][0]));
				}
				else {
					if (regexpContents[x-1].length>0) {
						regexpContents[x-1].push(new RegExp("(?!(^" + regexpContents[x-1].join("$)|(^") + "$))^[\\w\\u00C0-\\u017F]+$"));
					}
					else {
						regexpContents[x-1].push(new RegExp("^[\\w\\u00C0-\\u017F]+$"));
					}
				}
			}


			let filteredDictionary=[];
			filteredDictionary=dictionary.filter(findWord);
		
			let finalWordList = [];

			var checkedWord;
			if (wrongPositionLetters.length > 0) {
				for (const singleWord of filteredDictionary){
					checkedWord = singleWord.slice();
					for (const [i,v] of wrongPositionLetters.entries()) {
						if (!checkedWord.includes(v)) {
							break;
						}
						else {
							if (checkedWord.indexOf(v) !== -1) {
								checkedWord.splice(checkedWord.indexOf(v),1);
							}
					
							if (i==wrongPositionLetters.length-1) {
								finalWordList.push(singleWord);
							}
						}
					}
				}
			}
			else {
				finalWordList=filteredDictionary;
			}

			const maxWordsToFind=10;
			if (finalWordList.length>0) {
				if (finalWordList.length<=maxWordsToFind) {
					for (const [index, value] of finalWordList.entries()) {
						finalWordList[index]=value.join("");
					}
					document.getElementById('target_cell').innerHTML="Lehets&eacute;ges szavak: " + finalWordList.join(", ");
					document.getElementById("target_cell").scrollIntoView();
				}
				else {
					document.getElementById('target_cell').innerHTML="T&uacute;l sok tal&aacute;lat! (>" + maxWordsToFind + ")";
				}
			}
			else {
				document.getElementById('target_cell').innerHTML="Egyetlen sz&oacute; sem felel meg a keres&eacute;snek!";
			}		
		}			

		function initGame() {
			importWordlist();
			setupGame("szozat");
		return false;
		}
		
		let items1 = document.querySelectorAll('.c-keyboard-letter');
		for (let x=0; x<items1.length; x++) {
			switch(items1[x].id) {
				case "search_button":
					items1[x].addEventListener('click', handleClick_SearchButton);
					break;
				case "form_reset_button":
					items1[x].addEventListener('click', handleClick_FormResetButton);
					break;
				default:
				items1[x].addEventListener('click', handleClick_KeyboardLetter);
			}
		}
		
		let items2 = document.querySelectorAll('.c-color-change-button');
		for (let y=0; y<items2.length; y++) {
			items2[y].addEventListener('click', handleClick_ColorChangeButton);
		}

		let items3 = document.querySelectorAll('.c-dropdown-listbox');
		for (let z=0; z<items3.length; z++) {
			items3[z].addEventListener('change', handleChange_DropdownListbox);
			items3[z].addEventListener('focus', handleFocus_DropdownListbox);
		}

		document.addEventListener('freeze', event => {
			// The page is now frozen.
			console.log('The page is now frozen.');
		});

		document.addEventListener('resume', event => {
			// The page has been unfrozen.
			console.log('The page is now unfrozen.');
		});

		document.getElementById('game_selector_form').addEventListener('change', handleChange_GameSelectorForm);

		turnSpinner();
		scrollToTop();
		initGame();
	});