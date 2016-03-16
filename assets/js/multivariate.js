/*=====================
phil@affinio.com
@phil_renaud
March 2016
=====================*/


/*=======================================================
ESTABLISH OUR GLOBAL VARIABLES
=======================================================*/

// I've pulled the following as our working data sets from http://www.census.gov/foreign-trade/statistics/product/enduse/exports/
// Since these are at the top-level, they'll be within our "global" scope in the browser.
// Try typing "exportsToFrance" in your console to see what I mean!

//var Africa = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":10932929},{"name":"Neonatal mortality rate","value":47670039},{"name":"Under-five mortality rate","value":53236497},{"name":"transportation","valu,"value":4173651}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":12045684},{"name":"Neonatal mortality rate","value":55398959},{"name":"Under-five mortality rate","value":60654420},{"name":"transportation","valu,"value":4011470}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":13597489},{"name":"Neonatal mortality rate","value":61251666},{"name":"Under-five mortality rate","value":64778364},{"name":"transportation","valu,"value":4516491}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":15828932},{"name":"Neonatal mortality rate","value":66940063},{"name":"Under-five mortality rate","value":66654562},{"name":"transportation","valu,"value":5145773}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":18219404},{"name":"Neonatal mortality rate","value":78250553},{"name":"Under-five mortality rate","value":70007956},{"name":"transportation","valu,"value":5267337}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":17824759},{"name":"Neonatal mortality rate","value":56023688},{"name":"Under-five mortality rate","value":56578386},{"name":"transportation","valu,"value":4360923}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":19348514},{"name":"Neonatal mortality rate","value":71248282},{"name":"Under-five mortality rate","value":67126144},{"name":"transportation","valu,"value":4995005}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":21855377},{"name":"Neonatal mortality rate","value":84782247},{"name":"Under-five mortality rate","value":76557266},{"name":"transportation","valu,"value":5614733}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":23311658},{"name":"Neonatal mortality rate","value":85455718},{"name":"Under-five mortality rate","value":80737858},{"name":"transportation","valu,"value":5947207}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":24219696},{"name":"Neonatal mortality rate","value":91480126},{"name":"Under-five mortality rate","value":79593366},{"name":"transportation","valu,"value":7252143}]}];
//var Americas = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":3760381},{"name":"Neonatal mortality rate","value":12903388},{"name":"Under-five mortality rate","value":15244521},{"name":"transportation",","value":338355}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":3465480},{"name":"Neonatal mortality rate","value":16237672},{"name":"Under-five mortality rate","value":18091920},{"name":"transportation","v,"value":382725}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":4097812},{"name":"Neonatal mortality rate","value":21280422},{"name":"Under-five mortality rate","value":24145976},{"name":"transportation","v,"value":486883}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":6321448},{"name":"Neonatal mortality rate","value":24644385},{"name":"Under-five mortality rate","value":26811284},{"name":"transportation","v,"value":549460}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":9873897},{"name":"Neonatal mortality rate","value":26820153},{"name":"Under-five mortality rate","value":27541382},{"name":"transportation","v,"value":662599}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":11758489},{"name":"Neonatal mortality rate","value":26005110},{"name":"Under-five mortality rate","value":26172536},{"name":"transportation","v,"value":586568}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":14216520},{"name":"Neonatal mortality rate","value":35295819},{"name":"Under-five mortality rate","value":32467931},{"name":"transportation","v,"value":1326890}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":15467816},{"name":"Neonatal mortality rate","value":42798351},{"name":"Under-five mortality rate","value":33508441},{"name":"transportation","v,"value":908030}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":21152691},{"name":"Neonatal mortality rate","value":41382112},{"name":"Under-five mortality rate","value":34920138},{"name":"transportation","v,"value":857359}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":20854017},{"name":"Neonatal mortality rate","value":41951807},{"name":"Under-five mortality rate","value":41257025},{"name":"transportation","va,"value":973463}]}]
// var exportsToIsrael = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":477514},{"name":"Neonatal mortality rate","value":985885},{"name":"Under-five mortality rate","value":2701410},{"name":"transportation","va,"value":182786}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":293266},{"name":"Neonatal mortality rate","value":934065},{"name":"Under-five mortality rate","value":2596534},{"name":"transportation","va,"value":215627}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":405398},{"name":"Neonatal mortality rate","value":1154197},{"name":"Under-five mortality rate","value":2826023},{"name":"transportation","va,"value":254499}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":572852},{"name":"Neonatal mortality rate","value":1548281},{"name":"Under-five mortality rate","value":3458950},{"name":"transportation","va,"value":306739}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":807879},{"name":"Neonatal mortality rate","value":1978991},{"name":"Under-five mortality rate","value":3611967},{"name":"transportation","va,"value":333834}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":438300},{"name":"Neonatal mortality rate","value":1492563},{"name":"Under-five mortality rate","value":2412990},{"name":"transportation","va,"value":218802}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":616042},{"name":"Neonatal mortality rate","value":1583182},{"name":"Under-five mortality rate","value":2695166},{"name":"transportation","v,"value":272220}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":828841},{"name":"Neonatal mortality rate","value":1662102},{"name":"Under-five mortality rate","value":3671263},{"name":"transportation","v,"value":294412}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":568189},{"name":"Neonatal mortality rate","value":1832966},{"name":"Under-five mortality rate","value":4672740},{"name":"transportation","v,"value":347656}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":583103},{"name":"Neonatal mortality rate","value":1721337},{"name":"Under-five mortality rate","value":3674881},{"name":"transportation","v,"value":294356}]}]
// var exportsToHaiti = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":205793},{"name":"Neonatal mortality rate","value":96221},{"name":"Under-five mortality rate","value":69614},{"name":"transportation,"value":65829}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":212928},{"name":"Neonatal mortality rate","value":131645},{"name":"Under-five mortality rate","value":47660},{"name":"transportatio,"value":57331}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":210642},{"name":"Neonatal mortality rate","value":120502},{"name":"Under-five mortality rate","value":122210},{"name":"transportation,"value":69611}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":224027},{"name":"Neonatal mortality rate","value":127645},{"name":"Under-five mortality rate","value":72929},{"name":"transportation,"value":103698}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":390412},{"name":"Neonatal mortality rate","value":121396},{"name":"Under-five mortality rate","value":94224},{"name":"transportatio,"value":211905}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":317155},{"name":"Neonatal mortality rate","value":114649},{"name":"Under-five mortality rate","value":79270},{"name":"transportatio,"value":159441}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":373807},{"name":"Neonatal mortality rate","value":207047},{"name":"Under-five mortality rate","value":141543},{"name":"transportation,"value":206014}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":312061},{"name":"Neonatal mortality rate","value":204074},{"name":"Under-five mortality rate","value":133548},{"name":"transportation,"value":160251}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":360709},{"name":"Neonatal mortality rate","value":182925},{"name":"Under-five mortality rate","value":91661},{"name":"transportatio,"value":121519}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":386573},{"name":"Neonatal mortality rate","value":211080},{"name":"Under-five mortality rate","value":119029},{"name":"transportation,"value":159727}]}]
// var exportsToCuba = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":380567},{"name":"Neonatal mortality rate","value":17143},{"name":"Under-five mortality rate","value":506},{"name":"transpo,"value":4410}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":336403},{"name":"Neonatal mortality rate","value":25560},{"name":"Under-five mortality rate","value":840},{"name":"transpo,"value":3705}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":314410},{"name":"Neonatal mortality rate","value":21204},{"name":"Under-five mortality rate","value":1167},{"name":"transpo,"value":891}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":415603},{"name":"Neonatal mortality rate","value":26336},{"name":"Under-five mortality rate","value":637},{"name":"transpo,"value":1933}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":662170},{"name":"Neonatal mortality rate","value":44296},{"name":"Under-five mortality rate","value":323},{"name":"trans,"value":3509}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":499417},{"name":"Neonatal mortality rate","value":31079},{"name":"Under-five mortality rate","value":99},{"name":"tran,"value":1541}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":326318},{"name":"Neonatal mortality rate","value":34547},{"name":"Under-five mortality rate","value":224},{"name":"tran,"value":1311}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":325609},{"name":"Neonatal mortality rate","value":34640},{"name":"Under-five mortality rate","value":187},{"name":"transpo,"value":446}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":429033},{"name":"Neonatal mortality rate","value":30495},{"name":"Under-five mortality rate","value":827},{"name":"trans,"value":698}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":335152},{"name":"Neonatal mortality rate","value":15066},{"name":"Under-five mortality rate","value":4777},{"name":"transpo,"value":1379}]}]
// var exportsToSaudiArabia = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":337768},{"name":"Neonatal mortality rate","value":691685},{"name":"Under-five mortality rate","value":1893905},{"name":"transportation","v,"value":213484}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":318609},{"name":"Neonatal mortality rate","value":832358},{"name":"Under-five mortality rate","value":2364793},{"name":"transportation","v,"value":201405}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":380851},{"name":"Neonatal mortality rate","value":897103},{"name":"Under-five mortality rate","value":3026660},{"name":"transportation","v,"value":270602}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":638228},{"name":"Neonatal mortality rate","value":1280527},{"name":"Under-five mortality rate","value":4866683},{"name":"transportation","v,"value":304622}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":804658},{"name":"Neonatal mortality rate","value":1477027},{"name":"Under-five mortality rate","value":4921382},{"name":"transportation","v,"value":208711}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":651002},{"name":"Neonatal mortality rate","value":1153368},{"name":"Under-five mortality rate","value":5042968},{"name":"transportation","v,"value":162465}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":796674},{"name":"Neonatal mortality rate","value":1330091},{"name":"Under-five mortality rate","value":3952742},{"name":"transportation","v,"value":238830}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":1222212},{"name":"Neonatal mortality rate","value":1749424},{"name":"Under-five mortality rate","value":4799556},{"name":"transportation","v,"value":219520}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":1113413},{"name":"Neonatal mortality rate","value":2040140},{"name":"Under-five mortality rate","value":6981417},{"name":"transportation","v,"value":247648}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":1098357},{"name":"Neonatal mortality rate","value":2073060},{"name":"Under-five mortality rate","value":7850866},{"name":"transportation","va,"value":286946}]}]
// var exportsToMexico = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":7562067},{"name":"Neonatal mortality rate","value":34271533},{"name":"Under-five mortality rate","value":40388613},{"name":"transportation","val,"value":3802183}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":8547068},{"name":"Neonatal mortality rate","value":39839249},{"name":"Under-five mortality rate","value":41930724},{"name":"transportation","val,"value":4000263}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":9946844},{"name":"Neonatal mortality rate","value":45009254},{"name":"Under-five mortality rate","value":46522583},{"name":"transportation","valu,"value":4444475}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":11622270},{"name":"Neonatal mortality rate","value":46863734},{"name":"Under-five mortality rate","value":42962929},{"name":"transportation","valu,"value":4713861}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":14613236},{"name":"Neonatal mortality rate","value":54650996},{"name":"Under-five mortality rate","value":46173826},{"name":"transportation","valu,"value":5031920}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":11525961},{"name":"Neonatal mortality rate","value":43567379},{"name":"Under-five mortality rate","value":44051404},{"name":"transportation","valu,"value":3955818}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":12821575},{"name":"Neonatal mortality rate","value":58519430},{"name":"Under-five mortality rate","value":53360662},{"name":"transportation","valu,"value":5203239}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":16183686},{"name":"Neonatal mortality rate","value":75946320},{"name":"Under-five mortality rate","value":60742137},{"name":"transportation","valu,"value":6066115}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":17244541},{"name":"Neonatal mortality rate","value":80048704},{"name":"Under-five mortality rate","value":69119798},{"name":"transportation","valu,"value":6608143}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":16622178},{"name":"Neonatal mortality rate","value":82341997},{"name":"Under-five mortality rate","value":74688503},{"name":"transportation","valu,"value":6870088}]}]
// var exportsToSierraLeone = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":12610},{"name":"Neonatal mortality rate","value":4456},{"name":"Under-five mortality rate","value":7732},{"name":"transpor,"value":5079}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":11131},{"name":"Neonatal mortality rate","value":1860},{"name":"Under-five mortality rate","value":12729},{"name":"transpor,"value":3781}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":10244},{"name":"Neonatal mortality rate","value":3932},{"name":"Under-five mortality rate","value":10861},{"name":"transpor,"value":3214}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":14259},{"name":"Neonatal mortality rate","value":7181},{"name":"Under-five mortality rate","value":15754},{"name":"transport,"value":3451}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":12238},{"name":"Neonatal mortality rate","value":4240},{"name":"Under-five mortality rate","value":21762},{"name":"transport,"value":3920}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":6670},{"name":"Neonatal mortality rate","value":2126},{"name":"Under-five mortality rate","value":10051},{"name":"transporta,"value":3309}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":15357},{"name":"Neonatal mortality rate","value":1868},{"name":"Under-five mortality rate","value":14103},{"name":"transportati,"value":4192}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":25138},{"name":"Neonatal mortality rate","value":3592},{"name":"Under-five mortality rate","value":37705},{"name":"transportatio,"value":5653}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":29844},{"name":"Neonatal mortality rate","value":3162},{"name":"Under-five mortality rate","value":30037},{"name":"transportatio,"value":5763}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":17298},{"name":"Neonatal mortality rate","value":3161},{"name":"Under-five mortality rate","value":24560},{"name":"transportat,"value":3858}]}]
// var exportsToFrance = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":417319},{"name":"Neonatal mortality rate","value":3445177},{"name":"Under-five mortality rate","value":11939638},{"name":"transportation","v,"value":637162}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":480419},{"name":"Neonatal mortality rate","value":3757534},{"name":"Under-five mortality rate","value":12327858},{"name":"transportation","v,"value":688665}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":513441},{"name":"Neonatal mortality rate","value":4382235},{"name":"Under-five mortality rate","value":12901207},{"name":"transportation","v,"value":771134}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":579912},{"name":"Neonatal mortality rate","value":4881470},{"name":"Under-five mortality rate","value":14442782},{"name":"transportation","v,"value":881776}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":644597},{"name":"Neonatal mortality rate","value":6127322},{"name":"Under-five mortality rate","value":14724123},{"name":"transportation","v,"value":971483}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":489314},{"name":"Neonatal mortality rate","value":4972952},{"name":"Under-five mortality rate","value":14924743},{"name":"transportation","v,"value":894250}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":676401},{"name":"Neonatal mortality rate","value":5411754},{"name":"Under-five mortality rate","value":13827699},{"name":"transportation","v,"value":1195303}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":665709},{"name":"Neonatal mortality rate","value":7117592},{"name":"Under-five mortality rate","value":13954391},{"name":"transportation","v,"value":954790}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":568167},{"name":"Neonatal mortality rate","value":8336073},{"name":"Under-five mortality rate","value":14888001},{"name":"transportation","v,"value":1035318}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":723202},{"name":"Neonatal mortality rate","value":9191965},{"name":"Under-five mortality rate","value":15211454},{"name":"transportation","v,"value":1152808}]}]
// var exportsToPakistan = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":79089},{"name":"Neonatal mortality rate","value":474025},{"name":"Under-five mortality rate","value":924108},{"name":"transportation,"value":23153}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":53784},{"name":"Neonatal mortality rate","value":519104},{"name":"Under-five mortality rate","value":492500},{"name":"transportatio,"value":36460}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":46125},{"name":"Neonatal mortality rate","value":408390},{"name":"Under-five mortality rate","value":1024729},{"name":"transportation","value":28164}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":62106},{"name":"Neonatal mortality rate","value":569083},{"name":"Under-five mortality rate","value":1012959},{"name":"transportation","value":36859}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":96768},{"name":"Neonatal mortality rate","value":518662},{"name":"Under-five mortality rate","value":804793},{"name":"transportation","value":34881}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":81318},{"name":"Neonatal mortality rate","value":628464},{"name":"Under-five mortality rate","value":503549},{"name":"transportation",,"value":35463}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":156898},{"name":"Neonatal mortality rate","value":621085},{"name":"Under-five mortality rate","value":511153},{"name":"transportation",,"value":42814}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":175498},{"name":"Neonatal mortality rate","value":728909},{"name":"Under-five mortality rate","value":570093},{"name":"transportation","value":43500}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":134105},{"name":"Neonatal mortality rate","value":638238},{"name":"Under-five mortality rate","value":456992},{"name":"transportation","value":28817}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":124103},{"name":"Neonatal mortality rate","value":710335},{"name":"Under-five mortality rate","value":508602},{"name":"transportation","value":29924}]}]
// var exportsToJapan = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":8823068},{"name":"Neonatal mortality rate","value":11608670},{"name":"Under-five mortality rate","value":21341001},{"name":"transportation","val,"value":1555918}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":8696798},{"name":"Neonatal mortality rate","value":11980804},{"name":"Under-five mortality rate","value":21437539},{"name":"transportation","val,"value":1647284}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":8993570},{"name":"Neonatal mortality rate","value":13427303},{"name":"Under-five mortality rate","value":22770475},{"name":"transportation","val,"value":1291088}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":10569345},{"name":"Neonatal mortality rate","value":15141003},{"name":"Under-five mortality rate","value":22449613},{"name":"transportation","val,"value":1275165}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":13685289},{"name":"Neonatal mortality rate","value":16890403},{"name":"Under-five mortality rate","value":21184386},{"name":"transportation","val,"value":1353058}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":11568313},{"name":"Neonatal mortality rate","value":11269810},{"name":"Under-five mortality rate","value":16688918},{"name":"transportation","val,"value":1202006}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":12302278},{"name":"Neonatal mortality rate","value":15695759},{"name":"Under-five mortality rate","value":18515860},{"name":"transportation","val,"value":1767089}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":14556473},{"name":"Neonatal mortality rate","value":17655675},{"name":"Under-five mortality rate","value":20070447},{"name":"transportation","val,"value":1083497}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":13952630},{"name":"Neonatal mortality rate","value":16713505},{"name":"Under-five mortality rate","value":23728020},{"name":"transportation","valu,"value":1034659}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":12671733},{"name":"Neonatal mortality rate","value":16151870},{"name":"Under-five mortality rate","value":22357447},{"name":"transportation","val,"value":1012531}]}]
// var exportsToVaticanCity = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":137},{"name":"Neonatal mortality rate","value":2195},{"name":"Under-five mortality rate","value":954},{"name":"trans,"value":116}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":1268},{"name":"Neonatal mortality rate","value":13531},{"name":"Under-five mortality rate","value":7377},{"name":"transpo,"value":604}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":1629},{"name":"Neonatal mortality rate","value":979},{"name":"Under-five mortality rate","value":8417},{"name":"transp,"value":316}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":365},{"name":"Neonatal mortality rate","value":1558},{"name":"Under-five mortality rate","value":15492},{"name":"transp,"value":464}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":81},{"name":"Neonatal mortality rate","value":1486},{"name":"Under-five mortality rate","value":5584},{"name":"transpo,"value":786}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":189},{"name":"Neonatal mortality rate","value":3629},{"name":"Under-five mortality rate","value":1687},{"name":"transpor,"value":181}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":18},{"name":"Neonatal mortality rate","value":953},{"name":"Under-five mortality rate","value":1652},{"name":"transp,"value":100}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":72},{"name":"Neonatal mortality rate","value":431},{"name":"Under-five mortality rate","value":1100},{"name":"transp,"value":243}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":394},{"name":"Neonatal mortality rate","value":1450},{"name":"Under-five mortality rate","value":2395},{"name":"transp,"value":149}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":1210},{"name":"Neonatal mortality rate","value":107},{"name":"Under-five mortality rate","value":956},{"name":"tran,"value":64}]}]
// var exportsToArgentina = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":31457},{"name":"Neonatal mortality rate","value":1366612},{"name":"Under-five mortality rate","value":1421524},{"name":"transportation","value":98280}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":36634},{"name":"Neonatal mortality rate","value":1546153},{"name":"Under-five mortality rate","value":1877365},{"name":"transportation",,"value":123052}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":41142},{"name":"Neonatal mortality rate","value":1864986},{"name":"Under-five mortality rate","value":2073800},{"name":"transportation",,"value":140356}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":45186},{"name":"Neonatal mortality rate","value":2158620},{"name":"Under-five mortality rate","value":2656210},{"name":"transportation",,"value":165742}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":59844},{"name":"Neonatal mortality rate","value":2969330},{"name":"Under-five mortality rate","value":3313136},{"name":"transportation",,"value":226083}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":44195},{"name":"Neonatal mortality rate","value":2073935},{"name":"Under-five mortality rate","value":2464781},{"name":"transportation",,"value":162311}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":63396},{"name":"Neonatal mortality rate","value":2967344},{"name":"Under-five mortality rate","value":3007252},{"name":"transportation",,"value":229391}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":78068},{"name":"Neonatal mortality rate","value":4629135},{"name":"Under-five mortality rate","value":3672462},{"name":"transportation",,"value":290202}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":76775},{"name":"Neonatal mortality rate","value":5134697},{"name":"Under-five mortality rate","value":3482855},{"name":"transportation",,"value":294615}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":91237},{"name":"Neonatal mortality rate","value":5130251},{"name":"Under-five mortality rate","value":3501758},{"name":"transportation",,"value":292840}]}]
// var exportsToIraq = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":67456},{"name":"Neonatal mortality rate","value":22836},{"name":"Under-five mortality rate","value":495314},{"name":"transportation","value":23956}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":325489},{"name":"Neonatal mortality rate","value":18952},{"name":"Under-five mortality rate","value":670105},{"name":"transportation",,"value":33877}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":451164},{"name":"Neonatal mortality rate","value":21957},{"name":"Under-five mortality rate","value":408043},{"name":"transportation",","value":35362}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":575784},{"name":"Neonatal mortality rate","value":28228},{"name":"Under-five mortality rate","value":450442},{"name":"transportation","value":33612}]},{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":886633},{"name":"Neonatal mortality rate","value":60955},{"name":"Under-five mortality rate","value":653377},{"name":"transportation",,"value":48111}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":153758},{"name":"Neonatal mortality rate","value":61148},{"name":"Under-five mortality rate","value":999985},{"name":"transportation",,"value":57975}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":287269},{"name":"Neonatal mortality rate","value":95207},{"name":"Under-five mortality rate","value":864238},{"name":"transportation",,"value":46688}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":656377},{"name":"Neonatal mortality rate","value":86477},{"name":"Under-five mortality rate","value":1101469},{"name":"transportation",,"value":55202}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":143598},{"name":"Neonatal mortality rate","value":83656},{"name":"Under-five mortality rate","value":1200617},{"name":"transportation",,"value":40613}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":151648},{"name":"Neonatal mortality rate","value":91970},{"name":"Under-five mortality rate","value":1219123},{"name":"transportation",,"value":28372}]}]
// var global = [{"id":"Canada","stats":[{"name":"Infant mortality rate","value":24219696},{"name":"Neonatal mortality rate","value":91480126},{"name":"Under-five mortality rate","value":79593366},{"name":"transportation","valu,"value":7252143}]},{"id":"Mexico","stats":[{"name":"Infant mortality rate","value":16622178},{"name":"Neonatal mortality rate","value":82341997},{"name":"Under-five mortality rate","value":74688503},{"name":"transportation","valu,"value":6870088}]},{"id":"China","stats":[{"name":"Infant mortality rate","value":20854017},{"name":"Neonatal mortality rate","value":41951807},{"name":"Under-five mortality rate","value":41257025},{"name":"transportation","va,"value":973463}]},{"id":"Japan","stats":[{"name":"Infant mortality rate","value":12671733},{"name":"Neonatal mortality rate","value":16151870},{"name":"Under-five mortality rate","value":22357447},{"name":"transportation","val,"value":1012531}]},{"id":"France","stats":[{"name":"Infant mortality rate","value":723202},{"name":"Neonatal mortality rate","value":9191965},{"name":"Under-five mortality rate","value":15211454},{"name":"transportation","v,"value":1152808}]},{"id":"SaudiArabia","stats":[{"name":"Infant mortality rate","value":1098357},{"name":"Neonatal mortality rate","value":2073060},{"name":"Under-five mortality rate","value":7850866},{"name":"transportation","va,"value":286946}]},{"id":"Israel","stats":[{"name":"Infant mortality rate","value":583103},{"name":"Neonatal mortality rate","value":1721337},{"name":"Under-five mortality rate","value":3674881},{"name":"transportation","v,"value":294356}]},{"id":"Argentina","stats":[{"name":"Infant mortality rate","value":91237},{"name":"Neonatal mortality rate","value":5130251},{"name":"Under-five mortality rate","value":3501758},{"name":"transportation",,"value":292840}]},{"id":"Iraq","stats":[{"name":"Infant mortality rate","value":151648},{"name":"Neonatal mortality rate","value":91970},{"name":"Under-five mortality rate","value":1219123},{"name":"transportation",,"value":28372}]},{"id":"Pakistan","stats":[{"name":"Infant mortality rate","value":124103},{"name":"Neonatal mortality rate","value":710335},{"name":"Under-five mortality rate","value":508602},{"name":"transportation","value":29924}]},{"id":"Haiti","stats":[{"name":"Infant mortality rate","value":386573},{"name":"Neonatal mortality rate","value":211080},{"name":"Under-five mortality rate","value":119029},{"name":"transportation,"value":159727}]},{"id":"Cuba","stats":[{"name":"Infant mortality rate","value":335152},{"name":"Neonatal mortality rate","value":15066},{"name":"Under-five mortality rate","value":4777},{"name":"transpo,"value":1379}]},{"id":"SierraLeone","stats":[{"name":"Infant mortality rate","value":17298},{"name":"Neonatal mortality rate","value":3161},{"name":"Under-five mortality rate","value":24560},{"name":"transportat,"value":3858}]},{"id":"VaticanCity","stats":[{"name":"Infant mortality rate","value":1210},{"name":"Neonatal mortality rate","value":107},{"name":"Under-five mortality rate","value":956},{"name":"tran,"value":64}]}]

var Africa = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":76},{"name":"Neonatal mortality rate","value":35},{"name":"Under-five mortality rate","value":120}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":73},{"name":"Neonatal mortality rate","value":34},{"name":"Under-five mortality rate","value":115}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":70},{"name":"Neonatal mortality rate","value":33},{"name":"Under-five mortality rate","value":109}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":67},{"name":"Neonatal mortality rate","value":32},{"name":"Under-five mortality rate","value":104}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":65},{"name":"Neonatal mortality rate","value":31},{"name":"Under-five mortality rate","value":99}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":62},{"name":"Neonatal mortality rate","value":31},{"name":"Under-five mortality rate","value":95}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":60},{"name":"Neonatal mortality rate","value":30},{"name":"Under-five mortality rate","value":91}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":59},{"name":"Neonatal mortality rate","value":29},{"name":"Under-five mortality rate","value":87}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":57},{"name":"Neonatal mortality rate","value":29},{"name":"Under-five mortality rate","value":84}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":55},{"name":"Neonatal mortality rate","value":28},{"name":"Under-five mortality rate","value":81}]}];
var Americas = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":16},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":19}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":15},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":18}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":15},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":18}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":15},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":17}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":15},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":19}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":14},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":16}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":16}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]}]
var SouthEastAsia = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":49},{"name":"Neonatal mortality rate","value":33},{"name":"Under-five mortality rate","value":65}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":47},{"name":"Neonatal mortality rate","value":32},{"name":"Under-five mortality rate","value":62}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":46},{"name":"Neonatal mortality rate","value":31},{"name":"Under-five mortality rate","value":60}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":44},{"name":"Neonatal mortality rate","value":30},{"name":"Under-five mortality rate","value":56}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":42},{"name":"Neonatal mortality rate","value":29},{"name":"Under-five mortality rate","value":54}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":40},{"name":"Neonatal mortality rate","value":28},{"name":"Under-five mortality rate","value":51}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":38},{"name":"Neonatal mortality rate","value":27},{"name":"Under-five mortality rate","value":49}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":37},{"name":"Neonatal mortality rate","value":26},{"name":"Under-five mortality rate","value":46}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":35},{"name":"Neonatal mortality rate","value":25},{"name":"Under-five mortality rate","value":44}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":34},{"name":"Neonatal mortality rate","value":24},{"name":"Under-five mortality rate","value":43}]}]
var Europe = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":14},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":16}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":12},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":12},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":14}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":12},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":13}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":11},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":13}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":11},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":13}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":11},{"name":"Neonatal mortality rate","value":6},{"name":"Under-five mortality rate","value":12}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":10},{"name":"Neonatal mortality rate","value":6},{"name":"Under-five mortality rate","value":12}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":10},{"name":"Neonatal mortality rate","value":6},{"name":"Under-five mortality rate","value":11}]}]
var EasternMed = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":52},{"name":"Neonatal mortality rate","value":32},{"name":"Under-five mortality rate","value":68}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":50},{"name":"Neonatal mortality rate","value":32},{"name":"Under-five mortality rate","value":66}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":49},{"name":"Neonatal mortality rate","value":31},{"name":"Under-five mortality rate","value":65}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":48},{"name":"Neonatal mortality rate","value":31},{"name":"Under-five mortality rate","value":63}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":47},{"name":"Neonatal mortality rate","value":30},{"name":"Under-five mortality rate","value":61}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":46},{"name":"Neonatal mortality rate","value":30},{"name":"Under-five mortality rate","value":60}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":44},{"name":"Neonatal mortality rate","value":29},{"name":"Under-five mortality rate","value":58}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":43},{"name":"Neonatal mortality rate","value":28},{"name":"Under-five mortality rate","value":56}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":42},{"name":"Neonatal mortality rate","value":27},{"name":"Under-five mortality rate","value":54}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":41},{"name":"Neonatal mortality rate","value":27},{"name":"Under-five mortality rate","value":52}]}]
var WesternPacific = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":19},{"name":"Neonatal mortality rate","value":12},{"name":"Under-five mortality rate","value":23}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":18},{"name":"Neonatal mortality rate","value":11},{"name":"Under-five mortality rate","value":22}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":17},{"name":"Neonatal mortality rate","value":11},{"name":"Under-five mortality rate","value":21}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":16},{"name":"Neonatal mortality rate","value":10},{"name":"Under-five mortality rate","value":19}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":15},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":18}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":14},{"name":"Neonatal mortality rate","value":9},{"name":"Under-five mortality rate","value":17}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":16}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":13},{"name":"Neonatal mortality rate","value":8},{"name":"Under-five mortality rate","value":15}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":12},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":14}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":11},{"name":"Neonatal mortality rate","value":7},{"name":"Under-five mortality rate","value":14}]}]
var Global = [{"id":"Value 2006","stats":[{"name":"Infant mortality rate","value":43},{"name":"Neonatal mortality rate","value":25},{"name":"Under-five mortality rate","value":60}]},{"id":"Value 2007","stats":[{"name":"Infant mortality rate","value":41},{"name":"Neonatal mortality rate","value":24},{"name":"Under-five mortality rate","value":58}]},{"id":"Value 2008","stats":[{"name":"Infant mortality rate","value":40},{"name":"Neonatal mortality rate","value":24},{"name":"Under-five mortality rate","value":56}]},{"id":"Value 2009","stats":[{"name":"Infant mortality rate","value":39},{"name":"Neonatal mortality rate","value":23},{"name":"Under-five mortality rate","value":54}]},{"id":"Value 2010","stats":[{"name":"Infant mortality rate","value":38},{"name":"Neonatal mortality rate","value":22},{"name":"Under-five mortality rate","value":52}]},{"id":"Value 2011","stats":[{"name":"Infant mortality rate","value":36},{"name":"Neonatal mortality rate","value":22},{"name":"Under-five mortality rate","value":49}]},{"id":"Value 2012","stats":[{"name":"Infant mortality rate","value":35},{"name":"Neonatal mortality rate","value":21},{"name":"Under-five mortality rate","value":47}]},{"id":"Value 2013","stats":[{"name":"Infant mortality rate","value":34},{"name":"Neonatal mortality rate","value":20},{"name":"Under-five mortality rate","value":46}]},{"id":"Value 2014","stats":[{"name":"Infant mortality rate","value":33},{"name":"Neonatal mortality rate","value":20},{"name":"Under-five mortality rate","value":44}]},{"id":"Value 2015","stats":[{"name":"Infant mortality rate","value":32},{"name":"Neonatal mortality rate","value":19},{"name":"Under-five mortality rate","value":43}]}]




// Set Region to the data you'd like to use for this experiment, and title your chart to match
var Region =[] ;
// var Region = Americas;
// var Region = SouthEastAsia;
// $('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data by WHO region, 2006-2015');
 // var Region = Europe;	
   $('h4.bar-chart-title').text('Please click a region!');

 // var Region;
 function changePage(page)
{

	if (page =='0') {

		Region = Africa;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Africa, 2006-2015');
		universalController();
		
 	  }else if( page == '1')
	{
	   Region = Americas;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Americas, 2006-2015');
	   universalController();

	}else if( page == '2')
	{
		Region = SouthEastAsia;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in South East Asia, 2006-2015');
		universalController();
	}else if( page == '3')
	{
		Region = Europe;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Europe, 2006-2015');
        universalController();
	}else if( page == '4')
	{
		Region = EasternMed;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Eastern Mediterranea, 2006-2015');
		universalController();
	}else if( page == '5')
	{
		Region = WesternPacific;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Western Pacific, 2006-2015');
		universalController();
	}else if( page == '6')
	{
		Region = Global;
		$('h4.bar-chart-title').text('Probability of dying per 1 000 live births Data in Global, 2006-2015');
		universalController();
	};
		
};





/*=======================================================
INITIALIZATION
=======================================================*/

// jQuery has a $(document).ready() function that fires when your page is ready to go.
// let's use it to kick things off.
$(document).ready(function(){
	 
  //universalController();
}); //document.ready


// Think of universalController() as our Table of Contents
function universalController(){
	$('.sandbox').html('');
	$('.legend, .controls').remove();
  console.log('Universal Controller - ready to run your functions!');

////// STEP 1: Draw a bar for each year of our data.
   //var Region  = changePage();
  
   //var Region = Region;
   initializeBars(Region);

////// STEP 2: Allow for user interaction with our visualization
   initializeControls();

////// STEP 3: Advanced interaction through a click and hold interface
     handleTouch();

}; //universalController










/*=======================================================
STEP 1: STATIC BAR GRAPH
=======================================================*/

function initializeBars(comparable) {
// We create a new element using jQuery. We can style it in CSS using the .bar-chart class.
  $('.sandbox').append('<div class="bar-chart"></div>');

// We reduce our comparable to yearly totals
  yearTotals = _.map(comparable, function(obj,iter){
    var valueArray = _.pluck(obj.stats, "value");
    return (_.reduce(valueArray, function(memo,num) { return memo + num})/valueArray.length).toFixed(2);
  }); //_.map

// For each of this yearly totals, create a bar in our new bar chart.
  $.each(yearTotals, function(key,value){
    $('.bar-chart').append('<div class="bar" data-index="'+comparable[key].id+'" data-value="'+value+'"><span><em>' + comparable[key].id + ':</em> <strong>' + commafy(value) + '</strong></span></div>');
  }); //each yearTotals
//////// Step 1A: Make the length of each bar relative to its $ spent
   relativeBarWidths();

//////// Step 1B: Drop another level of metrics in: a breakdown of the yearly spend
   createLegend(comparable);
    applyCategories(comparable);

//////// Step 1C: Make the width of each category proportional to 
   setCategoryWidths();
   setCategoryRatios(comparable);

}; //initializeBars




/*=======================================================
STEP 1A: RELATIVE BAR WIDTHS
=======================================================*/

// Each bar should have its width proportional to the relative max
function relativeBarWidths(){
  var max = _.max(yearTotals);
  $('.bar').each(function(){
    $(this).css({'width': $(this).attr('data-value') / max * 100 + "%"})
  }); //each bar
}; //relativeBarWidths




/*=======================================================
STEP 1B: SPEND-BY-CATEGORY LEVEL OF DATA
=======================================================*/

function createLegend(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar-chart').after('<div class="legend"></div>');
   var categories = _.pluck(comparable[0].stats, 'name');

  $.each(categories, function(key,value){
    var span = $('<span>'+value+'</span>');
    span.css({'border-color': d3.rgb(colorRange(key)).brighter(1)});
    span.css({'background-color': d3.rgb(colorRange(key)).darker(1)});
    $('.legend').append(span);
  })
}; //createLegend

function applyCategories(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar').each(function(){
    var bar = $(this);
    bar.append('<div class="statsblock"></div>');
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(comparable, {'id':index})['stats'];
    $.each(relevantStats, function(key,value) {
      var stat = $('<span class="stat" data-index="'+value['name']+'" data-value="'+value['value']+'"></span>');
      stat.css({'background-color': colorRange(key)});
      bar.children('.statsblock').append(stat);
    }); //each relevantStats
  }); //each bar
}; //applyCategories




/*=======================================================
STEP 1C: CATEGORY LEVEL WIDTHS AS PROPORATION OF SPEND
=======================================================*/

function setCategoryWidths(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(Region, {'id':index})['stats'];
    var barTotal = _.reduce(_.pluck(relevantStats, 'value'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') / barTotal * 100 + "%"});
    })
  })  
}

// ratios of each spending category, will be used later to normalize by category spending
function setCategoryRatios(comparable) {
  var categoryTotals = _.map(comparable[0]['stats'], function(obj,iter){
    return _.reduce(_.map(comparable, function(obj2,iter2){
      return _.find(obj2.stats, function(obj3,iter3){
        return obj3.name == obj.name;
      }).value;
    }), function(memo,num){
      return memo+num
    }); //reduce
  }); //categoryTotals
  var average = _.reduce(categoryTotals, function(memo, num){ return memo + num; }, 0) / categoryTotals.length;

// Setting categoryRatios as a global variable that we can access later
  categoryRatios = [];
  $.each(categoryTotals, function(i){
    categoryRatios[i] = 1/(categoryTotals[i] / average);
  })
  categoryRatios = _.object(_.pluck(comparable[0]['stats'], 'name'), categoryRatios);

// storing the categoryRatios on the comparable object and Region
  comparable = _.map(comparable, function(obj,iter){
    var stats = _.map(obj.stats, function(obj2,iter2){
      obj2.normalizedValue = categoryRatios[obj2.name] * obj2.value;
      return obj2;
    }); //innermap
    obj.stats = stats;
    return obj;
  }); //map
  Region = comparable;

}; //setCategoryRatios



















/*=======================================================
STEP 2: User Interface Controls
=======================================================*/

function initializeControls(){
// Set up a controls box that can be style with css with .controls{}
  $('#world-container').after('<div class="controls"><h5>Controls</h5></div>');
  $('.controls').append('<div><h6>Categories Full Height:</h6><a class="cat_full_height_on">On</a><a class="cat_full_height_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Annual Volume ("what is the % of annual spend?"):</h6><a class="norm_tv_on">On</a><a class="norm_tv_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Category Size: ("what year made the biggest impact to a given category?")</h6><a class="norm_cs_on">On</a><a class="norm_cs_off">Off</a></div>')

// Set the initial state of our on/off switches
  $('.norm_tv_off').addClass('active');
  $('.norm_cs_off').addClass('active');
  $('.cat_full_height_off').addClass('active');

// Category heights
  $(document).on('click', '.cat_full_height_on', function(){
    $('.statsblock').css({'height':'100%'});
    $('.cat_full_height_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.cat_full_height_off', function(){
    $('.statsblock').css({'height':'3px'});
    $('.cat_full_height_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Annual Volume
  $(document).on('click', '.norm_tv_on', function(){
    $('.bar').css({'width':'100%'});
    $('.norm_tv_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_tv_off', function(){
    relativeBarWidths();
    $('.norm_tv_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Category Size
  $(document).on('click', '.norm_cs_on', function(){
    normalizeCategories();
    $('.norm_cs_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_cs_off', function(){
    setCategoryWidths();
    $('.norm_cs_off').addClass('active').siblings().removeClass('active');
  })
}; //initializeControls


function normalizeCategories(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(Region, {'id':index})['stats'];
    var normalizedBarTotal = _.reduce(_.pluck(relevantStats, 'normalizedValue'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') * categoryRatios[$(stat).attr('data-index')] / normalizedBarTotal * 100 + "%"});
    }); //each stat (category) in the bar
  }); //each bar
}; //normalizeCategories










/*=======================================================
STEP 3: HANDLE ADVANCED INTERACTION
=======================================================*/

function handleTouch(){
// Observe the "mousedown" (click + hold) event on all of our category color-bars
  $(document).on('mousedown', '.stat', function(evt){
    var self = this;
    var globaloffset = $(this).position().left;
    $('.statsblock').each(function(){
      $(this).css({'height': '100%'});
      var blockoffset = $(this).children('[data-index="'+$(self).attr('data-index')+'"]').position().left;
      $(this).animate({'left': globaloffset-blockoffset}, 200);
      $(this).parents('.bar').children('span').children('strong').text(commafy($(this).children('[data-index="'+$(self).attr('data-index')+'"]').attr('data-value')));
    }); //each

// Fade out all bars not of the category you clicked
    $('.stat:not("[data-index='+$(self).attr('data-index')+']")').css({'opacity':0.2});
    $('.stat[data-index='+$(self).attr('data-index')+']').addClass('active');
    $('.bar').css({'background-color':'transparent'});

////// OPTIONAL: Sort bars based on order
    var barHeight = $('.bar').height() + 11;
    var sorted = _.sortBy($('.stat[data-index="'+$(self).attr('data-index')+'"]'), function(obj,iter){
      return $(obj).width();
    }); //sorted
    _.map(sorted, function(obj,iter){
      var startHeight = barHeight * (iter) - $(obj).parents('.bar').position().top + 20;
      $(obj).parents('.bar').css({'top':startHeight}).attr('which', iter);
    })

// Reset the position of everything wehn you release your mouse
    $(document).on('mouseup', function(){
      $('.statsblock').animate({'left':'0px', 'height': $('.cat_full_height_on').is('.active') ? '100%' : '3px'}, 200);
      $('.stat').css({'opacity':'1'}).removeClass('active');
      $('.bar').css({'top':'0px', 'background-color': 'rgba(0,0,0,0.1)'});
      $('.bar').each(function(){
        $(this).children('span').children('strong').text(commafy($(this).attr('data-value')));
      })
      $(document).off('mouseup');
    }); //documnet on mouseup
    return false;
  }) //click

}; //handleTouch

















// Make big numbers into pretty numbers
function commafy(num) {
  if (num){
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
}; //commafy
