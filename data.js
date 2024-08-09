/* here we set the constraints for the sample */
const priceChangeFrom = -5;
const priceChangeTo = 5;
const rangeScale = 2;
const colorPriceScale = 3;

/* place here CSV data from https://matrixbot.io/tools/volatility */
const volatilityData = `baseAsset,symbol,avgRange,volume,pumpDump,priceChange
"LUNA","LUNAUSDT",0.3504154768201253,5009393.111556384,7.533234859675048,1.419753086419746
"THETA","THETAUSDT",0.3783728940743404,5083010.188266662,9.656301145662837,2.3235800344234008
"TON","TONUSDT",0.4900435918196215,64943496.502338715,8.574879227053131,1.999380037197767
"LTO","LTOUSDT",0.38525599798197463,634058.213440972,6.87318489835431,1.888667992047715
"SXP","SXPUSDT",0.2574129014724788,1004264.107794063,6.086142322097388,2.5383141762452226
"ALPHA","ALPHAUSDT",0.32516400967561665,647673.7597708337,5.415162454873638,1.1152416356877382
"TRU","TRUUSDT",0.4869759432491381,4289001.569747227,9.801876955161632,2.8353326063249824
"RVN","RVNUSDT",0.28754415061452404,1036133.4658255655,7.082324455205807,2.5481665630826598
"YFI","YFIUSDT",0.24893251568015096,1590420.9930091652,5.2530305945737865,1.43305850019631
"PENDLE","PENDLEUSDT",0.5183548928495557,20983327.271614593,11.276595744680847,2.597891566265048
"G","GUSDT",0.7532416508840449,8870505.499088438,12.697674418604649,1.6348773841961872
"CHR","CHRUSDT",0.36108634002606504,2686437.287785416,7.056798623063685,1.7846519928613986
"STX","STXUSDT",0.49183512075969854,13902250.676064583,13.396825396825392,4.693877551020407
"BNX","BNXUSDT",0.5390998009742182,8832774.115698751,12.923408845738933,4.616094783812898
"WAN","WANUSDT",0.3674369533073023,746260.7905291668,4.613466334164585,1.5862944162436605
"FRONT","FRONTUSDT",0.3531133119302333,1173699.14672257,8.823529411764724,3.0694668820678572
"HOOK","HOOKUSDT",0.3689080422194662,2472500.352738853,6.771527592641959,2.9091897770527595
"DOGE","DOGEUSDT",0.38967365267399634,80283737.3786293,8.398148148148138,1.4688828759180552
"AI","AIUSDT",0.6245455229089618,8596583.889106266,13.28502415458938,7.286432160804026
"OOKI","OOKIUSDT",0.46101700643337995,742657.8601962987,6.879777623349554,2.556818181818187
"KNC","KNCUSDT",0.2638698330718874,925549.4072389583,6.142120600762155,1.9124423963133665
"USDP","USDPUSDT",0.015618363775754714,1517838.3493191025,0.19932230416583252,-0.03992812936712653
"FTM","FTMUSDT",0.40658543981373513,17814256.90218124,9.953837276399312,4.726516052318658
"ENA","ENAUSDT",0.6646811441540377,17883992.43550074,12.380952380952365,6.885245901639351
"WRX","WRXUSDT",0.33924903965753317,539021.0154344792,7.404744787922354,3.6791758646063357
"CFX","CFXUSDT",0.47190921669339164,9715474.333575686,13.735108619481423,8.436363636363637
"STG","STGUSDT",0.20075223929057107,1829355.7314042347,5.548589341692789,3.496503496503493
"REN","RENUSDT",0.3413333850101875,741192.7925230549,4.755717255717258,0.5614973262032095
"ALT","ALTUSDT",0.4409086900266737,7454043.263812504,7.667386609071272,-1.26728110599079
"EDU","EDUUSDT",0.39768638941371226,3039787.6284479164,8.19323671497584,5.59178028057697
"GRT","GRTUSDT",0.37256967654948764,6364140.766775006,9.782608695652172,3.26472675656494
"DYDX","DYDXUSDT",0.37307701599896015,8913434.8892803,6.660231660231659,3.1465093411996037
"ERN","ERNUSDT",0.8657033563559766,3955086.0842704866,14.177777777777777,2.6239067055393406
"PIXEL","PIXELUSDT",0.4130718175704541,7745224.6283644745,8.671328671328666,-0.14958863126399535
"NFP","NFPUSDT",0.38658683683565337,2345318.975883333,8.798882681564251,3.822264691829915
"GNS","GNSUSDT",0.38644908934231176,794201.9476958337,8.152772677194278,-2.5416997617156483
"ICP","ICPUSDT",0.42174460876930214,17325912.45508949,7.101280558789284,1.203530355710086
"XVS","XVSUSDT",0.35583898394526164,1993697.8192624964,10.42296072507554,5.221518987341781
"JTO","JTOUSDT",0.4575946519500335,21408475.721774984,6.989619377162626,2.348754448398566
"AXL","AXLUSDT",0.3906089784697355,3085762.7016826496,11.489066296424852,8.32453361492432
"ALICE","ALICEUSDT",0.3124573820010721,1510919.752281424,7.189542483660134,2.7777777777777857
"EUR","EURUSDT",0.017199285092434638,30358356.557315376,0.42143838754007845,0.13763993393283158
"BSW","BSWUSDT",0.2993860881948819,707188.6095625001,5.11247443762781,1.05485232067511
"CYBER","CYBERUSDT",0.33549184999425624,1598581.0707656965,8.221859706362139,3.466846179737473
"VIDT","VIDTUSDT",0.3741737819632258,827750.6457512496,5.436013590033966,2.240091901206185
"CREAM","CREAMUSDT",0.5860969756542944,1623229.1246969786,6.680851063829778,-1.1358473421172306
"FLM","FLMUSDT",0.3080864265188883,1019590.48070764,6.617647058823522,1.897533206831099
"DEXE","DEXEUSDT",0.2985043393358326,588490.7647062505,3.266810728358962,0
"GNO","GNOUSDT",0.4042002032590803,1245273.320306249,11.614401858304305,7.317073170731703
"SNT","SNTUSDT",0.25949569964374236,893378.1352841661,6.224627875507437,1.9372693726937342
"ONG","ONGUSDT",0.3110569490806647,1351914.4511031262,9.157509157509168,6.4396493594066015
"LINA","LINAUSDT",0.36840068496021483,2102685.47607922,6.8285976168652525,1.682464454976298
"RIF","RIFUSDT",0.5294253213877551,3669787.9955895897,10.741687979539648,4.405874499332441
"NEO","NEOUSDT",0.2639199737734454,2525127.7036291654,5.22540983606558,2.085505735140771
"UMA","UMAUSDT",0.40998309048704756,2852716.1765156253,11.308709530323753,5.95805529075308
"FIL","FILUSDT",0.36419610148934806,19975543.089985814,9.715025906735747,5.095541401273877
"AXS","AXSUSDT",0.31195898865227223,3639698.155176354,8.532904004829959,3.470625130671138
"TNSR","TNSRUSDT",0.48746943086878924,5493726.707962501,9.426786199402343,2.6734926052332355
"RAY","RAYUSDT",0.5621213373635352,9524893.310419105,8.652849740932638,1.6765819361817194
"TRB","TRBUSDT",0.40732382412866097,8740608.664226256,9.116202945990182,3.975430813854288
"RDNT","RDNTUSDT",0.3942526753049881,3489843.3505833335,8.720112517580873,2.635431918008777
"SNX","SNXUSDT",0.35826274728466223,2791448.993763888,8.321167883211686,2.581624905087324
"BEL","BELUSDT",0.27670318221011553,1287242.788125,5.980861244019138,2.946189432675922
"ORN","ORNUSDT",0.42086361964925834,944366.9734850697,8.83392226148409,3.1992687385740624
"TRX","TRXUSDT",0.14300190252981412,24274966.75320933,1.415094339622641,0.9448818897637778
"AMB","AMBUSDT",0.8469184500575011,12420929.878909698,16.832669322709165,13.190184049079761
"SC","SCUSDT",0.5817439296047408,2402474.6788768065,14.495967741935488,6.679594914889037
"FET","FETUSDT",0.6487284948346657,53371156.22213537,9.57683741648107,0.23724792408066264
"XEC","XECUSDT",0.34076179950106744,2426107.9147903067,8.079268292682912,2.5908372827803987
"SOL","SOLUSDT",0.4776636241043092,882732091.7130188,6.682956627978015,-1.9101269101269054
"REQ","REQUSDT",0.3657717805774812,522279.7883684023,6.031746031746039,3.7393162393162385
"ARKM","ARKMUSDT",0.523223107887847,15319563.942327073,8.318098720292525,-0.19512195121950526
"ROSE","ROSEUSDT",0.36593427987424676,3163104.958070099,8.457177876512944,3.172085646312439
"UNFI","UNFIUSDT",0.3818685623664089,1426539.5245986118,8.344923504867864,1.2026239067055542
"KDA","KDAUSDT",0.5137780205212564,1767633.4744745807,9.297520661157023,3.862660944206013
"XAI","XAIUSDT",0.4454455806339673,5838597.967407293,10.025273799494514,3.3039647577092524
"PDA","PDAUSDT",0.587939280556316,2786082.758062499,9.315589353612168,-1.8404907975459963
"XRP","XRPUSDT",0.5014315196427306,349625401.13678056,10.818804483188046,-6.870760132196892
"MLN","MLNUSDT",0.4785810702906541,809880.1177905216,4.888888888888886,0.652741514360315
"OG","OGUSDT",0.29967946561862296,555245.5453319453,6.195965417867427,3.0325173547680038
"AERGO","AERGOUSDT",0.2874633932174253,835380.3544874998,7.991120976692557,3.452243958573078
"FARM","FARMUSDT",0.30600208844062493,633926.7288450697,4.813121806937346,-0.5283648498331388
"SEI","SEIUSDT",0.5885125038035641,29549251.713977214,19.366427171783158,11.056511056511042
"MANA","MANAUSDT",0.2700655258737036,1673235.594087154,6.134094151212551,3.0730296456977584
"KLAY","KLAYUSDT",0.23093765272545042,1944740.269953752,7.686510926902798,3.0983733539891603
"RARE","RAREUSDT",0.36409303847063984,1232189.155836387,6.714285714285722,0.894187779433679
"COS","COSUSDT",0.35674160398803373,1075558.5743792297,5.672705672705675,3.236924921324743
"WING","WINGUSDT",0.4308116671654745,841909.1113125024,4.750593824228034,1.2048192771084416
"BANANA","BANANAUSDT",0.8121549770890274,16879157.880197335,16.18298081652729,7.601572739187418
"BOME","BOMEUSDT",0.5647874704208278,74864726.70475967,8.798988621997466,0.7727151612043741
"XLM","XLMUSDT",0.30908841212476673,8996269.964921882,3.9690222652468634,-1.3052208835341474
"OGN","OGNUSDT",0.3251024019634046,1051452.775768054,7.908163265306129,3.407601572739196
"BTC","BTCUSDT",0.3089306276728919,2604716404.2337775,9.634435431971298,3.66189551931717
"RAD","RADUSDT",0.46732247411046834,2766518.340420832,13.483146067415746,6.836827711941652
"NULS","NULSUSDT",0.31299101736037865,619150.1047642361,4.30756843800323,1.1899876897825266
"PROM","PROMUSDT",0.5182978221203637,1256846.9849037165,8.336215842269112,-1.4068655036578264
"BICO","BICOUSDT",0.32427649271006354,1473084.7023109153,6.935687263556105,1.3026487190620912
"BONK","BONKUSDT",0.5397199175341943,53332925.74741337,7.692307692307693,-0.7782101167315432
"AEVO","AEVOUSDT",0.5870828860961095,10896947.279562486,8.791208791208788,1.1560693641618371
"LISTA","LISTAUSDT",0.5416224402495666,8288307.033777768,12.128205128205124,4.335969457322065
"LTC","LTCUSDT",0.2938010524539693,20709633.890046105,7.177419354838705,2.01633061156474
"PAXG","PAXGUSDT",0.08796689052258813,2522673.122212501,1.2360939431396787,0.7857733664185247
"PERP","PERPUSDT",0.31193102545831686,1021417.4120106668,7.154560349535771,2.460555972952676
"ONT","ONTUSDT",0.263604312966145,941136.530380902,6.472684085510679,2.7272727272727337
"ORDI","ORDIUSDT",0.5080988965869611,36114447.46225143,11.565304087736791,1.4674302075876824
"QTUM","QTUMUSDT",0.23582335742491317,736871.9054590286,6.108897742363865,1.9509981851179674
"TWT","TWTUSDT",0.32055740425884405,3242599.5237083333,6.866858026054317,1.839159241489611
"APE","APEUSDT",0.35434156392168614,4137060.6434227806,6.763285024154598,2.47933884297521
"FXS","FXSUSDT",0.3068485661956081,1985928.9811437468,7.275541795665646,4.240837696335078
"ETHFI","ETHFIUSDT",0.5324025887152799,22294134.0990295,13.043478260869563,5.277221108884447
"LAZIO","LAZIOUSDT",0.3133041268871606,745482.5870333333,5.56009811937858,1.6611295681063183
"COTI","COTIUSDT",0.3850727928822679,1770024.4241863538,9.50846091861402,2.087631994174046
"WIN","WINUSDT",0.30465204291863845,1302492.299700685,4.645476772616135,2.2304832713754763
"WOO","WOOUSDT",0.353970533802525,2021005.191749166,9.274983670803408,3.518267929634632
"LQTY","LQTYUSDT",0.31921187734441825,1124197.0388368063,6.58682634730539,1.7160686427457108
"DCR","DCRUSDT",0.5974979338363944,1527441.6324954908,5.44600938967136,0.38948393378773005
"ZK","ZKUSDT",0.5298352407737179,20462907.634968746,11.769616026711176,4.259094942324765
"MBOX","MBOXUSDT",0.4805623281298365,1629722.483497501,6.258596973865195,1.5042979942693364
"EPX","EPXUSDT",0.5214591810851206,1007722.6619935338,4.52930728241563,0
"LSK","LSKUSDT",0.3089381043463091,1042121.7629375,9.575625680087057,7.439824945295413
"PROS","PROSUSDT",0.45052006841597136,613523.5757805556,5.471220746363059,2.3548387096774093
"GTC","GTCUSDT",0.4164757198439556,2280251.588958335,7.069219440353464,-1.5698587127158703
"KEY","KEYUSDT",0.281882664236255,1260540.7211735696,5.021488351051801,0.42036431574030075
"T","TUSDT",0.24441502203338178,863746.4266700945,6.163708086785007,2.113739305485666
"FUN","FUNUSDT",0.27922539384956774,505026.206075194,4.587155963302763,2.3908192540643967
"FOR","FORUSDT",0.38547371825486176,955769.7340533332,4.996530187369871,-1.6666666666666856
"MATIC","MATICUSDT",0.3246710121358241,24212807.99835486,8.221709006928407,3.3579423672302937
"BEAMX","BEAMXUSDT",0.41398119506856584,8228556.3241036385,7.856598016781078,0.48038430744594507
"COMP","COMPUSDT",0.3139542408388785,3383743.1281402768,6.5510597302505005,1.513272140907958
"ACA","ACAUSDT",0.4521573524862619,1178327.491823922,6.896551724137936,4.3706293706293735
"JOE","JOEUSDT",0.32227366339297936,887293.0956157153,9.001956947162412,2.461538461538453
"TLM","TLMUSDT",0.3243929348132092,975956.0624321179,6.330472103004297,2.092511013215841
"VGX","VGXUSDT",0.36693146138274746,781992.556515834,5.714285714285708,1.5625
"UNI","UNIUSDT",0.345423870166652,8696950.672909336,7.781116558595599,1.3025556471558275
"NEXO","NEXOUSDT",0.48544372076909387,1641220.8406628133,10.442477876106182,3.1627906976744242
"DGB","DGBUSDT",0.3864229303407395,586440.8057156465,7.558139534883708,2.8400597907324396
"ONE","ONEUSDT",0.3294180905515609,1714940.338513863,6.375545851528386,-0.8325624421831748
"SUN","SUNUSDT",0.20941604871878516,1358919.0104862817,2.3001095290251783,0.4434589800443405
"WIF","WIFUSDT",0.8014821933317048,249457059.03918502,15.278487480838024,2.465753424657535
"GLMR","GLMRUSDT",0.4069453147537807,1541350.6109976373,12.044817927170854,2.9643073200242043
"VITE","VITEUSDT",0.3779821912677979,908182.7609179373,5.3398058252427205,0.75
"PYTH","PYTHUSDT",0.37869394692170394,8488353.365490422,7.289908876139052,1.8068102849200756
"ZRX","ZRXUSDT",0.32533555365093086,1856352.9390399295,7.775999999999996,4.251144538914332
"SFP","SFPUSDT",0.21887143721839175,2009427.6948375008,3.24957719255859,-1.8722876627402343
"PUNDIX","PUNDIXUSDT",0.3588212887428678,1139971.840432291,5.615173446468674,0.5900461775269292
"BLZ","BLZUSDT",0.33020825960626154,1094298.6189430556,7.7244258872651415,2.597402597402592
"AST","ASTUSDT",0.40193766097135686,683260.1153923608,5.601092896174876,2.770083102493075
"IQ","IQUSDT",0.49452554858377656,2107280.5858009383,10.480349344978166,6.2123493975903585
"OM","OMUSDT",0.568270100865931,19620638.840722233,10.55257460227807,-4.4497707378074125
"YGG","YGGUSDT",0.45892082869308737,4948816.634264683,11.434108527131784,4.824179017727403
"OMNI","OMNIUSDT",0.44972120034398677,4618470.170666668,11.219512195121936,3.100775193798455
"CAKE","CAKEUSDT",0.29173343100586613,4796998.895161845,6.856084002470666,1.4111610006414423
"QUICK","QUICKUSDT",0.3761105403490184,1118536.431755973,6.93621470895782,-0.07352941176471006
"PEOPLE","PEOPLEUSDT",0.48666178052305437,28004088.491338663,10.114322006986328,2.089951513124902
"GLM","GLMUSDT",0.31947970061127495,1653667.200814932,9.66004712218107,4.08587257617728
"SKL","SKLUSDT",0.49462947831189397,4515295.428420867,8.85722268790164,2.7866473149492066
"FTT","FTTUSDT",0.5214900601454846,4049980.4950205605,7.0527480634452075,0.6187457031548433
"IMX","IMXUSDT",0.3582038837172127,2814453.9641968757,9.726688102893888,4.267782426778254
"CTXC","CTXCUSDT",0.44099605658676094,1540861.221947221,6.015960712093289,-0.06414368184732666
"AVAX","AVAXUSDT",0.36993492357717694,53332412.08406422,10.5263157894737,3.056970819823988
"BAKE","BAKEUSDT",0.4326985438045716,8900576.59217042,6.89442905509388,4.085480829666864
"CLV","CLVUSDT",0.4341569544889645,913826.2271791102,5.47681960124909,2.1426832237643225
"SPELL","SPELLUSDT",0.33046988894160134,1078964.2585794325,6.76706061761341,0.4549950544015928
"IRIS","IRISUSDT",0.488017570597422,1118253.1507990484,6.033287101248277,-1.7518248175182265
"LRC","LRCUSDT",0.296634739300934,1473523.6014145855,7.703814510097246,2.2463206816421177
"PHA","PHAUSDT",0.4866824583010217,1286557.070109375,8.658420551855372,1.198801198801192
"CVC","CVCUSDT",0.4086915121196186,940178.1066840268,6.92307692307692,1.9318181818181728
"CTSI","CTSIUSDT",0.4036577221014527,2241910.4831666662,10.789283128167995,4.4342507645259985
"MDT","MDTUSDT",0.3235740998175023,714382.5495664275,8.809218950064007,5.838090295796562
"SUPER","SUPERUSDT",0.4410582712650148,2065752.43264653,13.233869405154039,7.588566827697264
"ARPA","ARPAUSDT",0.2921354680360152,920840.1707363924,6.504992867332376,1.879588839941249
"LEVER","LEVERUSDT",0.30231039057436915,1377372.850226626,8.048511576626254,3.5694050991501456
"NKN","NKNUSDT",0.3337985888104834,1438712.3484416655,5.750798722044735,0.1666666666666572
"ARDR","ARDRUSDT",0.596398776221217,2177002.372035555,11.689062274237813,5.863490609253333
"REEF","REEFUSDT",0.3061923744107913,1297949.9176507988,6.266094420600851,1.934916446789785
"VIC","VICUSDT",0.36622324789305416,833628.4831750758,7.893970288377517,3.107260233044528
"GMX","GMXUSDT",0.3859265939775878,3759284.2194672865,9.600347523892268,4.82358195623047
"EGLD","EGLDUSDT",0.2856681259047126,4004396.119016668,6.2195969423210755,0.32585083272989834
"BNB","BNBUSDT",0.2848885413661088,145202474.45901456,7.245543415756188,2.3946170591727736
"ZIL","ZILUSDT",0.29743303825906664,1331177.6292836652,7.163120567375898,2.769679300291557
"SANTOS","SANTOSUSDT",0.30235174886043364,1306016.4236937503,5.281418658442561,1.2228796844181602
"ADX","ADXUSDT",0.17028858497842603,708415.4699802076,2.937249666221618,-0.20519835841312783
"BNT","BNTUSDT",0.27687127144373125,662302.3178561806,7.2502030869212035,2.621094569092051
"IOTX","IOTXUSDT",0.36230025469624205,1974965.2300114583,6.901448452144294,1.8491341356031796
"COMBO","COMBOUSDT",0.42353188143055726,3540905.9598949645,13.985507246376798,10.252600297176812
"FORTH","FORTHUSDT",0.37890133257895364,698881.6912393743,5.557522123893804,1.0522496371552847
"ZEC","ZECUSDT",0.5798437082560843,12378061.905773489,13.590692755156013,9.991876523151902
"CVX","CVXUSDT",0.4061869817598211,2158338.3909401023,7.862013638186909,0.253807106598984
"CKB","CKBUSDT",0.4970575687043152,4278636.478245937,10.639021074099247,3.7220843672456425
"STRAX","STRAXUSDT",0.4417127319207292,1121666.0746305569,9.259259259259252,3.030303030303031
"STRK","STRKUSDT",0.5299200550522616,9905737.36376632,8.457711442786078,-0.5305039787798478
"MASK","MASKUSDT",0.247234937225619,1991204.3462781245,5.946481665014858,1.2282497441146347
"FIRO","FIROUSDT",0.4846102562276901,714647.7682361116,7.123534715960318,3.0470914127423754
"AUCTION","AUCTIONUSDT",0.4259679466155264,3286384.691730562,13.308223477715003,7.382992748846405
"ACE","ACEUSDT",0.44672297035419894,4895850.085063891,11.73613921489276,4.088586030664402
"BAL","BALUSDT",0.26973722099750386,623944.0911678476,6.703351675837922,2.104722792607788
"DAR","DARUSDT",0.3596179374354946,2748286.2933337498,8.366737118285826,0.8468704288244027
"SYN","SYNUSDT",0.4355987206114701,832798.0459273611,6.717432689692686,2.614015572858719
"VOXEL","VOXELUSDT",0.3924882957204416,1098000.6592283328,6.631762652705049,1.2567324955116703
"HOT","HOTUSDT",0.31522120879011134,1393912.8716376885,8.333333333333329,4.396371249127711
"JASMY","JASMYUSDT",0.5299454188764836,20093219.81206078,10.847457627118644,0
"QI","QIUSDT",0.4262600417285353,1089376.4534215627,6.899224806201559,1.9184652278177623
"IO","IOUSDT",0.5732790830500404,25551658.061584517,13.265306122448976,-3.8100820633059698
"APT","APTUSDT",0.4182056692570611,13232350.362032643,10.865874363327663,5.954465849387034
"EOS","EOSUSDT",0.27631295741887807,7785492.930896286,6.356620633631195,-0.02119093028183272
"DOT","DOTUSDT",0.30590808490264365,17831652.848564062,6.214459788789611,1.5713387806410992
"VTHO","VTHOUSDT",0.4440571401216174,907485.8390484448,5.909943714821779,0.09789525208027783
"NTRN","NTRNUSDT",0.3125605200977429,1504138.9874666657,8.452868852459034,2.8074866310160473
"W","WUSDT",0.44107162973406405,6167111.040905276,11.789181692094303,5.367504835589941
"C98","C98USDT",0.3112121618980497,1673117.407740625,8.271298593879237,4.142011834319533
"RPL","RPLUSDT",0.44933063959880726,802139.2745527783,7.447633824670291,0.24509803921569073
"MANTA","MANTAUSDT",0.44862816266890504,7186250.310647919,9.1644204851752,3.216783216783213
"NEAR","NEARUSDT",0.47228205036348264,47396403.46816667,11.196355789978412,3.777386048854197
"ALPACA","ALPACAUSDT",0.37435457926586024,840670.4605123616,6.03363006923837,2.0202020202020208
"MINA","MINAUSDT",0.34531838645926666,3922740.9155954127,9.58495757853703,3.6328871892925463
"ENS","ENSUSDT",0.5855843740640148,27409912.053516306,14.637752587481515,8.074534161490675
"LOOM","LOOMUSDT",0.2837952769384733,945438.1498845831,8.277777777777786,4.37845040928994
"KAVA","KAVAUSDT",0.2920155699732716,2511319.177931043,7.00694654183026,4.563431700638887
"MOVR","MOVRUSDT",0.3392931211589102,1469627.4878137074,9.518678160919535,3.453865336658339
"WLD","WLDUSDT",0.5513051918810736,38098129.58215797,14.912744579587525,4.372842347525889
"METIS","METISUSDT",0.3757052916368978,3188559.159529899,13.370069605568432,7.095006090133992
"TAO","TAOUSDT",0.7000181756346564,35877757.9528828,17.280194706419223,6.166666666666671
"VANRY","VANRYUSDT",0.4459540293086518,3657387.8028937527,9.219088937093275,3.2547699214365906
"PYR","PYRUSDT",0.44834185008263777,1140576.2006329282,8.864059590316572,2.7540729247478453
"ETH","ETHUSDT",0.40369164507346383,1404220570.2638793,11.492970155280645,5.167642138867947
"SAND","SANDUSDT",0.29497084348071484,3186604.5448375,7.574626865671647,3.4311856652687567
"ZEN","ZENUSDT",0.4200598170554609,5942820.811674998,10.317460317460316,4.739336492890999
"HIGH","HIGHUSDT",0.3926407069065178,5300097.297669996,8.921933085501848,2.2585669781931585
"ANKR","ANKRUSDT",0.2598048162810829,1192579.3207372932,7.068366164542283,2.6930693069306955
"STEEM","STEEMUSDT",0.2860908750869804,955238.6918983336,6.216377764494922,2.199144777031165
"ICX","ICXUSDT",0.23408775453526923,724627.7542337496,6.428049671292911,2.763256161314402
"ATOM","ATOMUSDT",0.29745580748753153,9771136.097879376,5.716492854383944,0.5204163330664642
"ID","IDUSDT",0.2670454414173158,1487445.1754930553,7.042633567188346,2.5263742365352613
"AR","ARUSDT",0.49245476201241356,17325384.090284716,11.81342632955537,2.604651162790688
"VET","VETUSDT",0.3177865036699468,4067621.332219742,6.528925619834709,0.8168529664660298
"ASR","ASRUSDT",0.24270769519939708,582757.8529048611,4.7573739295908695,3.0157970320727827
"RONIN","RONINUSDT",0.35015720523201216,3004258.9716879507,8.349146110056921,3.2068062827225106
"SSV","SSVUSDT",0.4933577008475781,5947983.247070935,10.930986567855484,5.00722195474242
"VIB","VIBUSDT",0.6558026853074642,3326291.654377952,11.504424778761063,-2.2601794340924926
"MTL","MTLUSDT",0.2383743061706632,757455.8634,7.588357588357582,5.057955742887245
"RSR","RSRUSDT",0.3740791824598493,3080681.081324073,9.242650722471353,4.125838060856111
"FIDA","FIDAUSDT",0.3983430151556615,1233309.1601043404,6.702654071075116,4.2043399638336325
"MAGIC","MAGICUSDT",0.3970401759631459,2805020.8181952075,7.862266857962695,2.70350564468211
"TKO","TKOUSDT",0.3604009320304505,792481.9511612142,4.5619116582186905,1.7673048600883732
"BAND","BANDUSDT",0.3217684517033263,847374.8967444435,8.894645941278071,4.255319148936152
"FIS","FISUSDT",0.36287439918346504,636924.4576055561,6.557911908646005,2.7269704023944286
"FLUX","FLUXUSDT",0.33435720141121383,989092.4113814594,6.865613419153519,0.7358953393295309
"UFT","UFTUSDT",0.4401573518469451,1374945.1039624999,6.142728093947596,-5.3033922599140055
"LOKA","LOKAUSDT",0.3458942487004241,800811.5303427782,4.1222459132906835,-1.0279001468428817
"GFT","GFTUSDT",0.7241566993494398,18335674.616414048,8.656509695290865,-2.8550241008527877
"JST","JSTUSDT",0.1375685589738933,1854309.3264483348,4.023624953857521,2.8210838901262036
"REI","REIUSDT",0.43981398087352114,1647272.0699113612,6.961583236321303,1.5804597701149419
"FDUSD","FDUSDUSDT",0.01073591767150391,368426083.4010447,0.06002400960383625,0
"PEPE","PEPEUSDT",0.7017836939635838,401748439.51023704,13.222222222222229,4.454865181711597
"PORTAL","PORTALUSDT",0.4556514496552418,4965391.808565414,10.65719360568383,2.9279279279279393
"AVA","AVAUSDT",0.4254440701561395,591074.680134201,7.269669220706419,1.6590389016018179
"XVG","XVGUSDT",0.5179902831735749,4773459.170581876,14.588591620393757,8.579017264276217
"PHB","PHBUSDT",0.391712565395229,2651984.394706599,8.333333333333343,2.2350993377483377
"BCH","BCHUSDT",0.47941526403832074,49703079.31652777,14.508328855454053,3.724340175953074
"POND","PONDUSDT",0.36210251618466777,752182.0606572228,5.019305019305023,0.4735595895816971
"POLYX","POLYXUSDT",0.6649029141532279,14674193.319736654,18.46921797004991,9.765976597659758
"DEGO","DEGOUSDT",0.38456416734567134,979171.2250145813,6.646294881589,4.5280122793553375
"WBTC","WBTCUSDT",0.2395377824951912,1533379.4365098248,9.776300847508281,4.0397290397042696
"ALPINE","ALPINEUSDT",0.3586055078999029,1009485.1010095488,5.381165919282509,1.6438356164383663
"SUSHI","SUSHIUSDT",0.32320888048271634,1671403.6787781222,7.432432432432421,3.6269430051813316
"HFT","HFTUSDT",0.3121699975133322,746752.3971534707,6.706908115358829,2.6080988332189463
"AUDIO","AUDIOUSDT",0.5097295355630597,2823932.006548054,13.333333333333329,3.3585222502099015
"HIFI","HIFIUSDT",0.49006898086983497,2684873.5701587484,11.103938024531956,7.824175824175825
"DUSK","DUSKUSDT",0.3696008534232425,2103252.615975001,10.155077538769376,1.337613697164258
"API3","API3USDT",0.4014679544832531,2601823.564865971,11.42668428005284,6.155950752393963
"OAX","OAXUSDT",0.48027647600455264,661372.5055590278,6.634416033172073,3.3707865168539257
"BIFI","BIFIUSDT",0.4027670235102055,550629.408333334,6.458557588805164,3.278688524590166
"ARK","ARKUSDT",0.5849749080266107,4055423.3160590287,18.516468308884583,10.651591788158285
"LDO","LDOUSDT",0.494072591044078,16060106.167941976,10.753598645215916,0.366300366300365
"CHESS","CHESSUSDT",0.3441343823326373,701106.3962954162,5.835543766578255,2.2461814914645117
"TUSD","TUSDUSDT",0.010668354390147497,1941530.5680260418,0.07004202521511615,0.020020020020012907
"CRV","CRVUSDT",0.4953602545914305,19827893.866036654,6.879129420909436,-0.1632653061224545
"BAR","BARUSDT",0.256551943716456,589994.370749687,4.407555809959945,2.0785219399538164
"CELR","CELRUSDT",0.2974578077932355,985956.7139463924,7.028469750889684,2.1296296296296333
"BLUR","BLURUSDT",0.3805353671029972,2445117.7550104903,9.90228013029315,4.72016183412002
"BB","BBUSDT",0.5717582790293234,11956708.870013082,13.630916716596758,7.414330218068528
"INJ","INJUSDT",0.5278873352385185,29911111.33846456,16.324324324324323,6.906558328496814
"USDC","USDCUSDT",0.010663140082393281,643993759.9534086,0.05001000200040551,-0.010004001600648849
"WBETH","WBETHUSDT",0.39694874709872635,1488177.7139979377,11.467817427852111,5.586928447917344
"ENJ","ENJUSDT",0.3217979129098332,2624438.479817535,7.638402242466711,2.8901734104046284
"KP3R","KP3RUSDT",0.4006838591785343,814050.6230000004,8.336842105263159,3.4273318872017313
"POWR","POWRUSDT",0.40416402504328514,3766373.2479572888,11.949685534591197,6.376518218623488
"DODO","DODOUSDT",0.3980455538198359,1478209.3331290274,9.575429087624215,5.565862708719862
"MAV","MAVUSDT",0.39081379843317454,1972059.012029167,10.461538461538467,6.565656565656582
"JUV","JUVUSDT",0.2947318768820182,613845.8996755553,5.498489425981873,2.5782688766114177
"AAVE","AAVEUSDT",0.4717634815559875,34362660.66348293,-0.2601560936561924,-2.5431711145997014
"TFUEL","TFUELUSDT",0.3188834228264195,847397.9381965285,6.494646305072848,1.9189383070301176
"BADGER","BADGERUSDT",0.2749964304208825,686508.1882336457,6.436189775652807,1.3683010262257511
"HIVE","HIVEUSDT",0.31927121617320114,535726.3420406252,6.410256410256423,2.823018458197609
"CVP","CVPUSDT",0.7143457066065521,3736845.6170520815,9.494884910485936,0.13717421124829343
"ADA","ADAUSDT",0.3302757106920189,32734004.51154946,7.3906911142454135,1.0291090855630785
"OP","OPUSDT",0.4495275647387316,22175914.725773852,12.898751733703179,7.271418286537084
"ALGO","ALGOUSDT",0.3137231727528145,3944727.5167947896,7.980456026058633,3.1932773109243726
"ASTR","ASTRUSDT",0.34561179470627074,8494382.949964235,8.514190317195329,3.6458333333333286
"MBL","MBLUSDT",0.3175549049669917,1077173.8813435943,9.55643707176344,3.2012195121951237
"STORJ","STORJUSDT",0.40338680777730657,3527807.034723612,8.151492350137943,0.999736911339113
"SHIB","SHIBUSDT",0.41919932664129544,46320904.67880959,8.680555555555557,2.523431867339582
"ETC","ETCUSDT",0.28888681450183645,12048940.051291661,7.673143996013948,1.7699115044247833
"MEME","MEMEUSDT",0.40267607302774017,8697873.345215349,6.282722513089013,-1.9516728624535205
"GHST","GHSTUSDT",0.5234187318257622,1737421.7511611097,9.662921348314597,-3.075030750307505
"KSM","KSMUSDT",0.28463287653809094,1532610.6470575335,8.130530973451329,3.15005727376861
"BURGER","BURGERUSDT",0.37954780518573317,1009642.806533853,4.556650246305409,-0.15792798483890635
"PORTO","PORTOUSDT",0.3173934851317212,626301.2576019438,4.461538461538467,2.0962732919254705
"AMP","AMPUSDT",0.49415468351480435,2215976.727576611,8.80952380952381,2.870549268561959
"LUNC","LUNCUSDT",0.3341141088622525,6148055.115547103,7.330644039504804,3.2322369357824243
"DASH","DASHUSDT",0.2948616364156012,2146782.371745001,4.993809327280232,2.9521829521829517
"FLOKI","FLOKIUSDT",0.529147121516398,55270766.4551303,8.16084279249202,-0.6147056505634794
"STPT","STPTUSDT",0.3154521494350149,1120288.6671426364,4.805871212121204,2.4384413100645475
"OXT","OXTUSDT",0.2920308533583621,588542.2265444447,5.459770114942529,1.9089574155653395
"AGLD","AGLDUSDT",0.2910031766676585,652961.7308611115,6.5081351689612035,1.8064516129032313
"IOTA","IOTAUSDT",0.2991636276763284,2363023.965818056,5.826656955571735,0.9752438109527333
"STMX","STMXUSDT",0.717730298450841,14631402.327232871,15.490708478513355,7.9962370649106305
"DIA","DIAUSDT",0.34120066075197275,641728.3109161456,5.078005506271026,2.533992583436344
"XTZ","XTZUSDT",0.2697014216359401,1448451.3272444443,7.3446327683615635,2.7656477438136875
"RENDER","RENDERUSDT",0.5890489758924533,22669782.410560016,12.226989079563182,3.7279803359278816
"HBAR","HBARUSDT",0.43765171085767757,10098875.587747905,10.961214165261381,5.105633802816897
"LINK","LINKUSDT",0.3846619947507289,23791151.662451055,7.7490774907749085,2.123552123552102
"BTTC","BTTCUSDT",1.3411033871560205,1238026.852907454,6.410256410256423,1.3157894736842195
"CELO","CELOUSDT",0.29262202953749356,1410610.5262875005,8.789595133207456,5.258657545959807
"RLC","RLCUSDT",0.32512407893047324,788844.6857715283,8.389261744966447,2.314165497896198
"BETA","BETAUSDT",0.4994337479936159,2257408.968944444,13.898008316918364,9.145796064400727
"DYM","DYMUSDT",0.44421485435635377,3684145.719339588,11.747851002865332,6.676449009537777
"IOST","IOSTUSDT",0.3095875617068256,818344.6382583342,7.303370786516851,4
"PSG","PSGUSDT",0.32101894361919553,562583.3227437503,6.269968051118212,3.321182665046578
"NMR","NMRUSDT",0.3223079226701253,917318.236429862,5.9241706161137415,-0.16528925619834922
"NOT","NOTUSDT",0.5623096680090068,90109787.66997935,8.326661329063242,-0.1706484641638326
"SLP","SLPUSDT",0.3490671365203806,1183787.2054296967,8.288437629506845,3.202391118701968
"SYS","SYSUSDT",0.4489775546109753,1092467.4113743082,5.92783505154641,-2.032520325203251
"FIO","FIOUSDT",0.4079690144942483,732390.5029118061,5.202601300650329,1.6153457849570998
"MKR","MKRUSDT",0.4171053396434259,23639078.416920137,10.354745925215724,6.898238747553819
"ELF","ELFUSDT",0.4312298800157644,4390081.2562625,7.692307692307693,3.0271668822768447
"FLOW","FLOWUSDT",0.3025876205295601,1398321.6337688896,6.854130052724059,1.639344262295083
"GALA","GALAUSDT",0.43127376995868216,25123705.83428126,6.429780033840942,-4.561824729891953
"LIT","LITUSDT",0.5017696079779276,3464336.88786354,13.935681470137823,8.437500000000014
"GMT","GMTUSDT",0.32863315363679524,2857297.353046872,8.611599297012305,4.159132007233282
"AKRO","AKROUSDT",0.46474969218816814,1737674.68874125,5.3661616161616195,1.2731981009926727
"ZRO","ZROUSDT",0.5117664155736884,30755123.124807116,14.617486338797818,8.309618668184399
"USTC","USTCUSDT",0.34222473441980106,3101742.458197501,6.998738965952072,1.9556714471968775
"ATA","ATAUSDT",0.283566153936385,966049.8328874978,7.989690721649481,3.2085561497326154
"1000SATS","1000SATSUSDT",0.6413832963753034,80140530.59071177,6.420233463035032,-4.592470004137368
"UTK","UTKUSDT",0.38242842263261306,687397.8006949998,5.566502463054178,1.6859587317564149
"WAXP","WAXPUSDT",0.36072032200667237,2486502.3539440986,8.43549328663164,4.8919567827130805
"TROY","TROYUSDT",0.31985458647586484,585409.6096055001,5.277777777777786,1.3503909026297123
"CITY","CITYUSDT",0.26785850480763246,561068.2181327782,7.480130902290767,5.0919377652051026
"LPT","LPTUSDT",0.3772527972173549,3343523.2461837493,10.261587078651672,3.870732152638311
"KMD","KMDUSDT",0.33971833205202684,636162.7924749998,5.496742671009784,2.15767634854771
"PIVX","PIVXUSDT",0.3115570635539545,637492.9765291663,3.9393939393939377,1.284686536485097
"ALCX","ALCXUSDT",0.3139357048934108,936583.1596345508,5.214723926380373,-0.3993610223642179
"BAT","BATUSDT",0.22577579175377155,868120.3019052079,4.513064133016627,0.4875076173065196
"ILV","ILVUSDT",0.4418545321648887,3692839.3468638905,12.211151155395385,6.508355321020218
"XNO","XNOUSDT",0.3632609541206037,666060.3944739586,5.862457722660665,3.661327231121277
"RUNE","RUNEUSDT",0.3799090994454807,33891359.769839235,10.076605774896876,2.608695652173921
"DENT","DENTUSDT",0.4576094459197275,2290456.28522771,9.51807228915662,2.795425667090228
"JUP","JUPUSDT",0.4906309475513957,26453131.745398883,6.885245901639351,-2.703016241299295
"SCRT","SCRTUSDT",0.38283387099375565,707072.4233299993,5.40172492056287,1.7584451642757983
"DATA","DATAUSDT",0.3640426201392165,621650.0860029999,5.947484973109766,3.298110790906179
"CHZ","CHZUSDT",0.3304447543142459,2573343.0581225697,6.205673758865231,1.6453382084095125
"CTK","CTKUSDT",0.2770893878861136,547627.2672857632,6.03967410556146,3.418650438517986
"1INCH","1INCHUSDT",0.3038221305753605,2084255.6783848614,7.8787878787878896,3.8489736070381326
"QNT","QNTUSDT",0.265713251888896,1754060.2603854155,6.605222734254994,3.5714285714285836
"ACH","ACHUSDT",0.3416848588781231,3047776.536421875,6.600985221674861,-0.8863399374348262
"ATM","ATMUSDT",0.3173223542470508,536604.8171999996,5.063938618925832,2.173913043478265
"HARD","HARDUSDT",0.43762974684702455,1714110.2122895825,9.378185524974512,0.21929824561404132
"ARB","ARBUSDT",0.40678731191564627,37304404.26966091,10.275196568977833,4.738108458263923`;
