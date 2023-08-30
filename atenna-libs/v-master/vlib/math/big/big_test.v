import math.big

struct IntegerRadix {
	digit_string string
	radix        u32
}

type TestInteger = IntegerRadix | []u8 | big.Integer | i64 | int | string | u32 | u64

fn (a TestInteger) parse() big.Integer {
	return match a {
		big.Integer {
			a
		}
		string {
			big.integer_from_string(a) or { panic('Cannot read decimal') }
		}
		int {
			big.integer_from_int(a)
		}
		u32 {
			big.integer_from_u32(a)
		}
		u64 {
			big.integer_from_u64(a)
		}
		i64 {
			big.integer_from_i64(a)
		}
		[]u8 {
			big.integer_from_bytes(a)
		}
		IntegerRadix {
			big.integer_from_radix(a.digit_string, a.radix) or {
				panic('Cannot read decimal base ${a.radix}')
			}
		}
	}
}

struct IntegerFromTest {
	value    TestInteger
	expected string // prefix with 0x for hex
}

// vfmt off
const integer_from_int_test_data = [
	// use int
	IntegerFromTest{ 0, '0' },
	IntegerFromTest{ 1, '1' },
	IntegerFromTest{ 255, '255' },
	IntegerFromTest{ 127, '127' },
	IntegerFromTest{ 1024, '1024' },
	IntegerFromTest{ 2147483647, '0x7fffffff' },
]

const integer_from_u64_test_data = [
	// use u64
	IntegerFromTest{ u64(0), '0' },
	IntegerFromTest{ u64(1), '1' },
	IntegerFromTest{ u64(255), '255' },
	IntegerFromTest{ u64(127), '127' },
	IntegerFromTest{ u64(1024), '1024' },
	IntegerFromTest{ u64(4294967295), '0xffffffff' },
	IntegerFromTest{ u64(4398046511104), '0x40000000000' },
	IntegerFromTest{ u64(-1), '0xffffffffffffffff' },
]

const integer_from_bytes_test_data = [
	// use []u8
	IntegerFromTest{ []u8{}, '0' },
	IntegerFromTest{ [u8(0)], '0' },
	IntegerFromTest{ [u8(0x13), 0x37], '0x1337' },
	IntegerFromTest{ [u8(0x13), 0x37, 0xca], '0x1337ca' },
	IntegerFromTest{ [u8(0x13), 0x37, 0xca, 0xfe], '0x1337cafe' },
	IntegerFromTest{ [u8(0x13), 0x37, 0xca, 0xfe, 0xba], '0x1337cafeba' },
	IntegerFromTest{ [u8(0x13), 0x37, 0xca, 0xfe, 0xba, 0xbe], '0x1337cafebabe' },
]

const integer_from_string_test_data = [
	// use string
	IntegerFromTest{ '00000000', '0' },
	IntegerFromTest{ '00', '0' },
	IntegerFromTest{ '0', '0' },
	IntegerFromTest{ '1', '1' },
	IntegerFromTest{ '0012', '12' },
	IntegerFromTest{ '1349173614', '1349173614' },
	IntegerFromTest{ '+24', '24' },
	IntegerFromTest{ '-325', '-325' },
	IntegerFromTest{ '-2147483648', '-2147483648' },
	IntegerFromTest{ '2147483647', '2147483647' },
]

const integer_from_radix_test_data = [
	// use IntegerRadix
	IntegerFromTest{ IntegerRadix{ '101010', 2 }, '42' },
	IntegerFromTest{ IntegerRadix{ '1010', 2 }, '10' },
	IntegerFromTest{ IntegerRadix{ '-0000101', 2 }, '-5' },
	IntegerFromTest{ IntegerRadix{ 'CAFE', 16 }, '0xcafe' },
	IntegerFromTest{ IntegerRadix{ 'DED', 16 }, '0xded' },
	IntegerFromTest{ IntegerRadix{ '-abcd', 16 }, '-43981' },
]
// vfmt on

// is_*
struct IsXTest {
	value    TestInteger
	expected bool
}

// vfmt off
const is_power_of_2_test_data = [
	IsXTest{ u32(0b110000000000), false },
	IsXTest{ "537502395172353242345", false },
	IsXTest{ "590295810358705700000", false },
	IsXTest{ "1125899906842624", true },
	IsXTest{ "590295810358705651712", true },
	IsXTest{ "4611686018427388002", false },
	IsXTest{ "31195165372897259196222538898096203590151924108450147950531565441852619837316692843188389598728651769482088968838700984268947453885587967878549286444999755742573423371025356539077075265986419171772426279084559025861175301940492273427120221755816136975739916983004778387946699939545354293487098252428954036286183995782377175227121587657233553706589448547148066273280603243167958729707736664649187444136702017299877489729451997277875868782399735511520086969969766278182145454186690598629675562422923132555707758646587702550600894625696538109646366308973392363200122154242784576162149305816215109893613161331026672647000825615987247035266514313689413563779184515427920269935280569035788081552413007563772309295149800172031645681720569680154349893907395864528243629654386620034655445226295834594630792819545156798270599481573436039129275439653984521135652249263653985326577886990615665734998585216581730937090703518997669223802429711292740491797911117308280939507973715877108492303860661291987529284719391551256912380499409630332506454532263266457209921483705507359152839264852808182519011100934922492651373859423833024010283468753147686188675294998119637462200763443029190704825719342806119404339670408160210011918981038977425180213726646978883378058838510330816291941879581568740273684084511318422175006728346276489384220596694727036836687670632486602655240593463885077059375085482211864761344849868123074687509143827139683659102930877963676911995751113159944160296419825178911962487549670296207457410515598040046860567719116506974858703739531721991704589155513182996455827177472", true },
]

const is_odd_test_data = [
	IsXTest{ u32(0), false },
	IsXTest{ u32(1), true },
	IsXTest{ u32(1805), true },
	IsXTest{ "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", true },
	IsXTest{ "57495732561923751347562394571325712358054", false },
]
// vfmt on

struct AddTest {
	augend TestInteger
	addend TestInteger
	sum    TestInteger
}

// vfmt off
const add_test_data = [
	AddTest{ 2, 3, 5 },
	AddTest{ 1024, 1024, 2048 },
	AddTest{ 1024, 1024, 2048 },
	AddTest{
		'84885164052257330097714121751630835360966663883732297726369399',
		'137347080577163115432025771710279131845700275212767467264610201',
		'222232244629420445529739893461909967206666939096499764990979600'
	},
]
// vfmt on

struct SubTest {
	minuend    TestInteger
	subtrahend TestInteger
	difference TestInteger
}

// vfmt off
const sub_test_data = [
	SubTest{ 2, 3, -1 },
	SubTest{ 3, 2, 1 },
	SubTest{ 1024, 1024, 0 },
	SubTest{ 1025, 1023, 2 },
	SubTest{ -37, -54, 17 },
	SubTest{
		'606649970971701574041811686113740270202550876483709086148210605390116266828180223053050209778348894403980564356645388786075884763988241017548715303094260467104311496756419021350006724017740287475611178032365989622403609173077177580917766063674998982266831659846883191228163839505500376638406380518500245205640396836251745520989267049355350124770273420388742964392659042390255365913227741421167939209094197448839427828553490702868654886044542868294392357965495270538217024561541188096726845410444367476070654975991208949317364651403789852688275944360458918380026777837704864009506175958100724200063354587117724445105352507371251655385818390017704579668464509118556289300149193216670709993199698192433115976551775179800369638443387559604023762303996929773104264181192752852969235821274398832731350067075624797873057893457025900696931888413170836093304160937994690818677414459443711940357617086640671088053946435282979649549418554954712352988774810660384276492179755146895039071579530616412414312102806763864081256558973934032350169887606110957605908487251732839382994454544873238510239304731396067785963044777530602823206256913249732064244398147271369308044244332002083201889676311272588373015273349596481282728910186314212094495644361558295140446865360550851657930415001417226985487444959716363633445225371706716914389021896551395496211883459788574558837045534063579702308219870597512062392856506558380417078205327200246935706335015817156527870338168318120000713685289299174193726065869808768486103389894925715767295',
		'7216848130098425850',
		'606649970971701574041811686113740270202550876483709086148210605390116266828180223053050209778348894403980564356645388786075884763988241017548715303094260467104311496756419021350006724017740287475611178032365989622403609173077177580917766063674998982266831659846883191228163839505500376638406380518500245205640396836251745520989267049355350124770273420388742964392659042390255365913227741421167939209094197448839427828553490702868654886044542868294392357965495270538217024561541188096726845410444367476070654975991208949317364651403789852688275944360458918380026777837704864009506175958100724200063354587117724445105352507371251655385818390017704579668464509118556289300149193216670709993199698192433115976551775179800369638443387559604023762303996929773104264181192752852969235821274398832731350067075624797873057893457025900696931888413170836093304160937994690818677414459443711940357617086640671088053946435282979649549418554954712352988774810660384276492179755146895039071579530616412414312102806763864081256558973934032350169887606110957605908487251732839382994454544873238510239304731396067785963044777530602823206256913249732064244398147271369308044244332002083201889676311272588373015273349596481282728910186314212094495644361558295140446865360550851657930415001417226985487444959716363633445225371706716914389021896551395496211883459788574558837045534063579702308219870597512062392856506558380417078205327200246935706335015817156527870338168318120000713685289299174193726065869808768486096173046795617341445',
	},
]
// vfmt on

struct MulTest {
	multiplicand TestInteger
	multiplier   TestInteger
	product      TestInteger
}

// vfmt off
const mul_test_data = [
	MulTest{ 2, 3, 6 },
	MulTest{ -869, 789, -685641 },
	MulTest{ -869, 789, -685641 },
	MulTest{
		'58347508324752098346789015701837509173586123875823769823749056132786590812379812508163208610983759827349812730',
		'14213098571932561236783245987342583245873465877179284713298718093758173895718957198751983759745983467856287759872365123980571298307512352359812753907',
		'829298887246357277468549979504958437413899799327432161171392486113084301523868147373815625368847440980180012682723545766706164916763514684200098693771786210459637448034580321756504306033681868059717237409850393775584813902875585559881251293651935822025836110',
	},
	MulTest{
		'157894047392519583862123936251422583282863434486161035821830453040785097509971311098714713467802515421581208662454854025309513312726555776113715381698473216141765400957534609297819356059233676661532235280302251223761244857785344705006637894902125836430726519102261679054112732204572631900384085596495981525783',
		'172750769107109861232750661741561572021207635860888814481781323903637921618217893620438648685692072759912890797284948206448457977080536627892119852493829355756035584640064060706092098984542716937323104336194056741403356304500304286336281585594296381344018535478383343176463402322692068381151973870461499748949',
		'27276318124492212465432029043652584179286098914879267159076000142724287743892530142734241126306064189405321580796475224876708675570413592358715948396724932685085972846389975012793388131866028332508690735727488135870026351955805826642739703000986587467280495743559787380135296551334471419857554510187338555406214731430906002559624746468831645485763335047438526317636794466414295301915951975626967409997005043887959717124157434636781107429998249363525957258509402650503217872035874896065023377356660153975719637017472701236397203173555796145677008784279961849944450443054513670798899182054747598702569678446196470652067',
	},
]
// vfmt on

struct DivModTest {
	dividend  TestInteger
	divisor   TestInteger
	quotient  TestInteger
	remainder TestInteger
}

// vfmt off
const div_mod_test_data = [
	DivModTest{13, 10, 1, 3},
	DivModTest{13, 9, 1, 4},
	DivModTest{7, 5, 1, 2},
	DivModTest{'2103180314840157', '1631403814113', 1289, '300798448500'},
	DivModTest{'21408410031413414147401', '3130541314113413', '6838564', '2900204736088469'}
	DivModTest{
		'13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096',
		'13407807926845237209807376456131917626043958556151178674833163543294276330515137663421134775482798690129946803802212663956180562088664022929883876655300863',
		1,
		'3097359889766648542073928501435407264441214702890397900427487699558409313380739522684104737560085054384273386897573320723282547016549772350783233',
	},
	DivModTest{
		'24388660549343689307666288436614463270948472382596516055139370678271628439810393042585576900667596857198513726355043536294702186342478937800831',
		'38733748171303628844838787580045178098452927239062690602450784467058896912531690007767956310348951731921168881868406259712',
		'629648864382619361826',
		'2724578611525334851445652767465274410979805962941953382558409365935061481311529445551691298696266856092833571769883246719',
	},
]
// vfmt on

enum Comparison {
	less = -1
	equal = 0
	greater = 1
}

struct ComparisonTest {
	lhs TestInteger
	rhs TestInteger
	cmp Comparison
}

// vfmt off
const comparison_test_data = [
	ComparisonTest{ -45, 35, .less },
	ComparisonTest{ -3, 13, .less },
	ComparisonTest{ u32(352395), u32(51830), .greater },
	ComparisonTest{ u32(52395), u32(52395), .equal },
	ComparisonTest{ '574720348957234098573049571938519023857709',
		'58745908123509182375091823601928385712908347298341752397182643294', .less },
]
// vfmt on

struct StrTest {
	value    TestInteger
	expected string
}

// vfmt off
const str_test_data = [
	StrTest{ 255, '255' },
	StrTest{ 127, '127' },
	StrTest{ 1024, '1024' },
	StrTest{ u64(4294967295), '4294967295' },
	StrTest{ u64(4398046511104), '4398046511104' },
	StrTest{ u64(-1), '18446744073709551615' },
	StrTest{ IntegerRadix{ 'e'.repeat(80), 16 }, '1993587900192849410235353592424915306962524220866209251950572167300738410728597846688097947807470' },
]
// vfmt on

struct BytesTest {
	value           TestInteger
	expected        []u8
	expected_signum int
}

// vfmt off
const bytes_test_data = [
	BytesTest{ u64(0x1337cafebabe), [u8(0x13), 0x37, 0xca, 0xfe, 0xba, 0xbe], 1 },
]
// vfmt on

struct HexTest {
	// `value` must be in hex, as we get a big.Integer with radix 16, then
	// check if the output of .hex() is the same as the original `value`.
	value string
}

// vfmt off
const hex_test_data = [
	HexTest{ '123' },
	HexTest{ 'a'.repeat(11) },
	HexTest{ 'b'.repeat(15) },
	HexTest{ 'c'.repeat(32) },
	HexTest{ 'd'.repeat(5185) },
	HexTest{ 'e'.repeat(5185) },
	HexTest{ 'cafe'.repeat(85) },
	HexTest{ '0' },
]
// vfmt on

struct PowTest {
	base     TestInteger
	exponent u32
	power    TestInteger
}

// vfmt off
const pow_test_data = [
	PowTest{ 2, 0, 1 },
	PowTest{ 2, 1, 2 },
	PowTest{ 2, 5, 32 },
	PowTest{ 2, 10, 1024 },
	PowTest{ 2, 30, 1073741824 },
	PowTest{ 2, 234, '27606985387162255149739023449108101809804435888681546220650096895197184' },
	PowTest{ 2, 524, '54918381281044877719855206392651145738155482401146443275155707673484345467181248416980477125291636439818370491131846864296975903997733150500592226328920457216' },
	PowTest{ 2, 291, '3978585891278293137243057985174566720803649206378781739523711815145275976100267004264448' },
	PowTest{ 2, 13051, '55267956948146482939580690892144167523198080345777838207973892310290788736821578114330455608899403999039109810492889769112675765371767842822434294904209432777633054910495035098236995390194172097907719098491142950680893121170415521376299250142695723393227633360829843822866024641522563385984082711736391348667978440753913719338262829073043347247299392139063557930790932287363651577574134082253690763995791163252208415844758727346329281304595424562991322680879863770722706799961809876056054813814521080566806686543718660613598426151803438498674178140121315919034857314115503781267190616565875833106631659285123886667080327050174176636018357664222092316439777145540128647880814336995055642164733977751410563822190384321689041057299634727749812974144023207025653904438780374867988942510987313912358915642077631661267839921263001062107729173356916478717702317027506423498272334490092958377684733699662429071107215486273972618250534115869723283498114137145525373906475082833289104669492127120264073453925068828669125794548775264089233042803009595366761575381131720150020416662597433270991992738498853512916968911947303026796659580500368762437079002069661349769285545784372450396095376496629526120146056228969588758257289220372378463001533895184835727768908852564233327092981929411751106985223047814350329661006786989543912993534105514927316542621884655977620130711246926843567109456472355504038497809114457931293164130666363146093971664611970414478485192994816264742799354431903294883107927606299200191395563965045258006700385533997784569469661002395464091760511030079955508794507716517333922113296290807049250301483689712907877303498967096232669748824940257740874215641972642675515304831959934847559373172772025875939941676740275689817054162918846662455567085919928556650978239087803483530882408322645489433079587537294621171822004369279659604911446107164265409771411479042191057214450986176256578104398112366947709868794481776078240442638184240046590399307658325666682824402555546582169125084299171911366515003536406493880562467793738217233554231178610461637407108387422104493358650812565981939865004194724312308819851360505832016659131404286536166604042995985362843053197530692653760538388205506347898194204185268035169011980847365832662902833167362084522724032944503999606348026648228492541892525660287991575613769500299950657228084617208982541726107251394954812792421965613075539830944521759805581201863306109230481535735866977702920938163637191044218917218763676996478413703527738808285760128085267402333007136279283870165611587883351595579551530437487879301447035074519559776804970191650066388050122761542282202772884141794482588913487773583646082244648646898935682167457258599202486566745556266587599528210145725708324833027469913664602498185234663551855895508091756784116786760256088764788750159984191050146275837122761351322740020869396023016337700936855961260331330031678574208143275974341369638055331776401934895373348591440122433244331646746067969385005236926872015898048323445768868147713435873976237988151319143506783129013204847868879150394120372376677277312144782189330256123263292237715700439809503932239415509520929779856708018666527067600827221597869399175438321388641981165828368557419771140117333070030872143102607788421073131616871657178020327435898081376870580959579623464843234800465871796556467456341474610533391530095305196315887535933316836459037786625667180354374811843995688474490608169113180680143676925870456310071925085465713774179009107449991929491343540484244181606094673172473788660554675839157004904589906389801922612312350223513086754383162398737177774230411158150377305076748192396441454734336654918968445280484743879759859090769539002965788922965135895758979301734303194298909826556775859142046683115828058122817136236184480127270446495870009273426474586242661860904296452193946364822434632085953525238418258226591281397400949183681177585810194950485799542968112294068369136156497511211228725248' },
	PowTest{ 324, 315, '66325146064916587705822805477951823674769212922003325230500180789514487101799702287247301347816140714887582527826252837635296749781071351621748491469338347097923896026211183517655658952346069454893422558286798338709431368762851475568899541999504754550056265493269010870696623999709399529395247064542825851568385196637089440522882877102429945439977107582295420418108331098961838419917230847980056560488541780255425015021238743932289115066701337398107639567748102191005710201353615093246958907555634902309636451244444952203735074916066229982498598205421944122042066749035283837586883383420374291325389757869347147357807188516650352693616763867685354382631931356465247637321960345782811272139101785279798666504361229957479336436466489780129445016691164329417001378480690804715301830926348058624' },
]
// vfmt on

struct ModPowTest {
	base     TestInteger
	exponent u32
	modulus  TestInteger
	power    TestInteger
}

// vfmt off
const mod_pow_test_data = [
	ModPowTest{ 324, 315, 632, 512 },
	ModPowTest{ 65, 17, 3233, 2790 },
	ModPowTest{ 2790, 413, 3233, 65 },
]
// vfmt on

struct BigModPowTest {
	base     TestInteger
	exponent TestInteger
	modulus  TestInteger
	power    TestInteger
}

// vfmt off
const big_mod_pow_test_data = [
	BigModPowTest{ 23, 35, 4205, 552 }, // passed to mod_pow
	BigModPowTest{
		'5155371529688',
		'2791323022555160232601405723625177570767523893639864538140315412',
		'108959927459825236754563833',
		'26860526814751021488886966'
	},
	BigModPowTest{ // odd modulus
		'352374589237450928347609812740958719304509123759871239856523745782375908723095729758275893947985713250128357912349123412939358823582385385198351236046127834612374812370491327508137250913279785120956123875610235871239857198203659081236598012735981327096129836712397538257324587324658973246586212305713209851290386517823650983',
		'1435987139846732486843289483294829493285238539385476982375980650172394182703846128975612083751298035612365812378908579834576456739458768754674674758467957697513267415734673649713598712634987126359872685236563875',
		'235091287508475298347528357901372598012305123512513252139683276908769284375274983274732895287478365817326581273509823651087861235876123563725193512827341395182375612384723587131912725187352562171235812387132578235385239913578132684794719844871326571632561325617256983275689175687132487134894717895941563769587165871727358791326578126587261589732165781623578921653625871256781326587132658716237561235612783569812358791263985688921356634756374561398756298576128463875627',
		'169366899917096971139137080261692248176119100321982279129907315595573960531869689311776921667033660828498254917762241531493510090131310371752611041591194730984721766392649610729748330695093443476931010397820703902902374473806912248240019857777647140275706106146415293419050004306619925031697942412075960435433660980502714238024766862370671258678169869169308956145487178274009104771385352022837969419172440632584754050020898915411115587200113298960058827089497449758704',
	},
	BigModPowTest{
		'65963856903485603485069234860923480925798172358172309571298347102836578126398512837409812375712637895612379856123981237510298356120347129803401236571623978561287347129837563453245983475983457439573985398456987356198236481727340813259182735619827356189723658763578623842342348791856178236598273498213492641265929375983589324658972364587869871263587612387568767345727346273647235738786247865198746132879461234613284823467',
		'83272598179813257612837472873648237598405840629839475914921364871236813258573298457912734897123942134273981',
		'5839857294085157278513295172390857198203571235213752396329429342385198326512374982374982394818327590816263059612397512983479812378951235123571239857908674389573485791835127834617823648791263587321501273958734987520983475818586128374612837589734985729073459081628387561982736547958729875923652356138756183576',
		'1473628912328925119498300555459646092229919432628304743927027840523966896206312866878166443381090567655363186687840805386391819767096022910509388879763843632740700147538366282034781700814905320520871339523971198789410048087451530293781098724024347130773477767285944506944257502250353223975013799044669645147',
	},
	BigModPowTest{
		'113242346235324852305823906832570234458325884382848882352385183957109823579028553482572308468203945823946234096234056990567506978059607985823049523458273598234750329857',
		'8' + '0'.repeat(304),
		'538232475982347092375235252304678234670293486732980467394932151374571938467459586739087429813752353459823475982375983259823495510986571430996238476587342658172851235761398456398765813459801238751782351252542389712789568712342749837482748292340120120350125012352859821657823501275012365123985761983576123561273561257632958127659327160124712350123571029356123512507123598321797',
		'192406008638594029999856291470760872362212741932343638540342189789173751505083836385843995643278520411152869906156437055678588013127671381619800101872065097151880787029771615331116606406595932983669815757450573569058422413443800383057849205750667577751024330669200452034408252515262931175662782786664172617789499914619948520343146045783354828154425927051367644302499369000252',
	},
	BigModPowTest{ // even modulus
		'235823052395732458137502345873250',
		'9247324572804102889565555777311914057954687482673431192869682151395651003606366864848904841770165182604035932529621174486515688424932060959148379649412557',
		'2176617445861743577319100889181907668374255538511144643224689886235383840957210909013086056401571399717235807266581649606472148410291413364152197364477180887395655483738115072677402235101762521901569820740293149529620419333266262073471054548368736039519702486226506248861060256971802984953561121442680157668000761429988222457090413873973970171927093992114751765168063614761119615476233422096442783117971236371647333871414335895773474667308967050807005509320424799678417036867928316761272274230314067548291133582479583061439577559347101961771406173684378522703483495337037655006751328447510550299250924469288818',
		'442997670902441289693502035236411859724060788065895656400579052337406446773758010436855122951259016429941998670112046510440662262181776245572088822784133641469508278250883828352296420961829921453124482851450238472747959697964344812370952273954391788494014188845640003786259215718720844436373044245757220429613176387487778233231542432645946351180509817097194411903946161272789482180797502735809791321387092632573236334305080001390892058454801700346356574718281589228939135660037060121182304974907075601193595994210348704718150369101358547875357900995290428579291079564736470284970163062216850888677989344123412'
	},
	BigModPowTest{
		'5155342534532472457235424353715296885321784212092346234575235718572938457284759829789708703754094283682345782309123940810923850923745723498672398459023845028309402347698798128209480234598716824503042159',
		'86088201503667039039649712985497870124991029230637396538140315482910296196688861780721773488400937149055855947456947824680518799310618149812585881185273945728945238450238465982768132749812308932579342985729345798328459832591982374981237590923882894732852358383128938192888912389148132163716923461512177401900495710673973552425181964932538140315421936569702910921834517138450159290932430254268769414',
		'274591906405224388599271723580726658164960647214841029141336415219736447718088739565548373811507267740223510760319632557286907774120057322163752385728943578236484780326508234652347012734098132747829056238742677853836742172732148487951998402235107603196866575250296113164460906849287604912497386435248807205228608',
		'191409711082233170599206818399072245570776992384487887400529042633340865718475272702984694979757086140971619519330041885966232600204343618098862571914303534164078578922423233100444505069197147657365390879382972696958855409999020160689093198793125749417593529720182526801136320146027275209623807723638007207345057',
	},
	BigModPowTest{ // power of 2 modulus
		'853475230582304956623462734587234857',
		'583752847502934572695871320598123057810835791832765601237490813250912360591237591247132543095792347598327957137481023974819237887128577123758127912735720912735708362178561027835610235610256231201472309873219800321951',
		'31195165372897259196222538898096203590151924108450147950531565441852619837316692843188389598728651769482088968838700984268947453885587967878549286444999755742573423371025356539077075265986419171772426279084559025861175301940492273427120221755816136975739916983004778387946699939545354293487098252428954036286183995782377175227121587657233553706589448547148066273280603243167958729707736664649187444136702017299877489729451997277875868782399735511520086969969766278182145454186690598629675562422923132555707758646587702550600894625696538109646366308973392363200122154242784576162149305816215109893613161331026672647000825615987247035266514313689413563779184515427920269935280569035788081552413007563772309295149800172031645681720569680154349893907395864528243629654386620034655445226295834594630792819545156798270599481573436039129275439653984521135652249263653985326577886990615665734998585216581730937090703518997669223802429711292740491797911117308280939507973715877108492303860661291987529284719391551256912380499409630332506454532263266457209921483705507359152839264852808182519011100934922492651373859423833024010283468753147686188675294998119637462200763443029190704825719342806119404339670408160210011918981038977425180213726646978883378058838510330816291941879581568740273684084511318422175006728346276489384220596694727036836687670632486602655240593463885077059375085482211864761344849868123074687509143827139683659102930877963676911995751113159944160296419825178911962487549670296207457410515598040046860567719116506974858703739531721991704589155513182996455827177472',
		'20080128881481836026329919458482291336427826856257996902940216961274769492432457342329585911526680598599706497937330675336231322550089070961997878231160797014417182095610964306078005177657705895303701167263611016504813896879268670353690809857529479048652197026092060293580162938995900771157020773980149060390600886988165389386800313399935681668574561849644795370126640258861886083152431680309682414362667647047408205246634496700184520404072535696087062725321498879508195864728319264953502905783599235208616928912295007582161378604427602444176983900856363236858555001132922259491209136145654862306503211818341793436738181575298025051779368026867674815572620689517665845691581156037531328681002192885908572782500210185856071870996928958700199226442991667291661898788475465881534872952976564959204125435567408766407069080824764398534937188392006557445009391997597405999602710062336419706104598663078108578494090878260551511868925451048198114479011315931259263368212342695453474607592164864833976245439378166385649596428707473508482940426102862136582304433403471613967149235623865180698593404828164563801111816849132293956996556247415009648932020221786934682827799748481777622180801590275002765776928805756187584952776044614940158088391767782343033313716059721086499569092199761880797791493764006487948292742803823944731896556184944138299575510183812680359579022267096795084742403276965131310267236257021618824374001979653996305168583849734973984410291953747451176667816227487401602863864660642232048020325795772190251487050535547981550465960228478297407995702324941118877701015321',
	},
]
// vfmt on

struct GCDTest {
	a        TestInteger
	b        TestInteger
	expected TestInteger
}

// vfmt off
const gcd_test_data = [
	GCDTest{ 0, 0, 0 },
	GCDTest{ 10, 0, 10 },
	GCDTest{ 10, 0, 10 },
	GCDTest{ 1, 1, 1 },
	GCDTest{ 0, 1, 1 },
	GCDTest{ 0, -18, 18 },
	GCDTest{ 51, 22, 1 },
	GCDTest{ 98, 56, 14 },
	GCDTest{ '67116917544110', '60943431483592', '6299482' },
]
// vfmt on

struct FactorialTest {
	base     TestInteger
	expected TestInteger
}

// vfmt off
const factorial_test_data = [
	FactorialTest{ 5, 120 },
	FactorialTest{ 100, '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000' },
]
// vfmt on

// for left_shift and right_shift
struct ShiftTest {
	base     TestInteger
	amount   u32
	expected TestInteger
}

// vfmt off
const left_shift_test_data = [
	ShiftTest{ 45, 2, 45 * 4 },
	ShiftTest{ 45, 3, 45 * 8 },
	ShiftTest{ 45, 4, 45 * 16 },
	ShiftTest{ 45, 5, 45 * 32 },
	ShiftTest{ u64(0xabcedabcde), 20, u64(0xabcedabcde00000) },
	ShiftTest{ [u8(1), 1, 1], 56, [u8(1), 1, 1, 0, 0, 0, 0, 0, 0, 0] },
]

const right_shift_test_data = [
	ShiftTest{ 45, 3, 5 },
	ShiftTest{ 0x13374956, 16, 0x1337 },
	ShiftTest{ [u8(1), 1, 1, 0, 0, 0, 0, 0, 0, 0], 56, [u8(1), 1, 1] },
]
// vfmt on

struct ISqrtTest {
	base     TestInteger
	expected TestInteger
}

// vfmt off
const isqrt_test_data = [
	ISqrtTest{ '32653970479009599018236258903443284683789766179879955366041757982300361890625826551918485225', '5714365273502351023665817936982376512387569235' },
	ISqrtTest{ '1234567901234567901234567901234567901234567901234567901234567901234567901234567901234567901234567654320987654320987654320987654320987654320987654320987654320987654320987654320987654320987654321', '1'.repeat(97) },
]
// vfmt on

struct BitLenTest {
	value    TestInteger
	expected u32
}

// vfmt off
const bit_len_test_data = [
	BitLenTest{ big.zero_int, 0 },
	BitLenTest{ big.one_int, 1 },
	BitLenTest{ u32(0xffffffff), 32 },
	BitLenTest{ big.one_int.left_shift(1239), 1240 },
	BitLenTest{ '4338476092346017364013796407961305761039463198075691378460917856', 212 },
]
// vfmt on

struct ModInverseTest {
	value   string
	modulus string
}

// vfmt off
const mod_inverse_test_data = [
	ModInverseTest{'1234567', '458948883992'},
	ModInverseTest{
		'239487239847',
		'2410312426921032588552076022197566074856950548502459942654116941958108831682612228890093858261341614673227141477904012196503648957050582631942730706805009223062734745341073406696246014589361659774041027169249453200378729434170325843778659198143763193776859869524088940195577346119843545301547043747207749969763750084308926339295559968882457872412993810129130294592999947926365264059284647209730384947211681434464714438488520940127459844288859336526896320919633919',
	},
]
// vfmt on

fn test_integer_from() {
	for test_data in [
		// add integer_from_..._test_data to this array
		integer_from_int_test_data,
		integer_from_u64_test_data,
		integer_from_bytes_test_data,
		integer_from_string_test_data,
		integer_from_radix_test_data,
	] {
		for t in test_data {
			assert t.expected.trim_string_left('0x') == if t.expected.starts_with('0x') {
				t.value.parse().hex()
			} else {
				t.value.parse().str()
			}
		}
	}
}

fn test_bytes() {
	for t in bytes_test_data {
		r, s := t.value.parse().bytes()
		assert r == t.expected
		assert s == t.expected_signum
	}

	mut bytes := []u8{cap: 1024}
	for i in 0 .. bytes.cap {
		bytes << u8(i | 1)
	}
	result, sign := big.integer_from_bytes(bytes).bytes()
	assert result == bytes
	assert sign == 1
}

fn test_is_power_of_2() {
	for t in is_power_of_2_test_data {
		assert t.value.parse().is_power_of_2() == t.expected
	}
}

fn test_is_odd() {
	for t in is_odd_test_data {
		assert t.value.parse().is_odd() == t.expected
	}
}

fn test_addition() {
	for t in add_test_data {
		assert t.augend.parse() + t.addend.parse() == t.sum.parse()
	}
}

fn test_subtraction() {
	for t in sub_test_data {
		assert t.minuend.parse() - t.subtrahend.parse() == t.difference.parse()
	}
}

fn test_mul() {
	for t in mul_test_data {
		assert t.multiplicand.parse() * t.multiplier.parse() == t.product.parse()
	}

	for t in div_mod_test_data {
		assert t.divisor.parse() * t.quotient.parse() == t.dividend.parse() - t.remainder.parse()
	}
}

fn test_div() {
	for t in div_mod_test_data {
		assert t.dividend.parse() / t.divisor.parse() == t.quotient.parse()
	}
}

fn test_mod() {
	for t in div_mod_test_data {
		assert t.dividend.parse() % t.divisor.parse() == t.remainder.parse()
	}
}

fn test_div_mod() {
	for t in div_mod_test_data {
		a := t.dividend.parse()
		b := t.divisor.parse()
		eq := t.quotient.parse()
		er := t.remainder.parse()

		q, r := a.div_mod(b)
		assert q == eq
		assert r == er
	}

	// an extra test for checked division by zero
	if _, _ := div_mod_test_data[0].dividend.parse().div_mod_checked(TestInteger(0).parse()) {
		assert false, 'Division by 0 should return an error'
	}
}

fn test_comparison() {
	for t in comparison_test_data {
		a := t.lhs.parse()
		b := t.rhs.parse()

		assert a == a
		assert a <= a
		assert a >= a

		assert b == b
		assert b <= b
		assert b >= b

		lt := t.cmp == Comparison.less
		gt := t.cmp == Comparison.greater
		eq := t.cmp == Comparison.equal

		assert (a < b) == lt
		assert (a > b) == gt
		assert (a <= b) == !gt
		assert (a >= b) == !lt
		assert (a == b) == eq
		assert (a != b) == !eq
	}
}

fn test_conversion() {
	ten := big.integer_from_int(10)

	mut n := big.integer_from_u64(u64(-1))

	mut digits := []rune{}
	for n.signum != 0 {
		quot, rem := n.div_mod(ten)
		digits << rune(rem.int()) + `0`
		n = quot
	}

	assert digits.reverse().string() == '18446744073709551615'
}

fn test_from_and_to_hex() {
	for t in hex_test_data {
		assert (big.integer_from_radix(t.value, 16) or { panic('Cannot read hexadecimal') }.hex()) == t.value
	}
}

fn test_str() {
	for t in str_test_data {
		assert t.value.parse().str() == t.expected
	}
}

fn test_pow() {
	for t in pow_test_data {
		assert t.base.parse().pow(t.exponent) == t.power.parse()
	}
}

fn test_mod_pow() {
	for t in mod_pow_test_data {
		assert t.base.parse().mod_pow(t.exponent, t.modulus.parse()) == t.power.parse()
	}
}

fn test_big_mod_pow() {
	for t in big_mod_pow_test_data {
		a := t.base.parse()
		e := t.exponent.parse()
		m := t.modulus.parse()
		r := t.power.parse()
		assert a.big_mod_pow(e, m) or { panic(err) } == r
	}
}

fn test_gcd_vs_gcd_binary_vs_gcd_euclid() {
	for t in gcd_test_data {
		a := t.a.parse()
		b := t.b.parse()
		expected := t.expected.parse()
		assert a.gcd(b) == expected
		assert a.gcd_binary(b) == expected
		assert a.gcd_euclid(b) == expected
	}
}

fn test_factorial() {
	for t in factorial_test_data {
		a := t.base.parse()
		r := t.expected.parse()
		assert a.factorial() == r
	}
}

fn test_inc_and_dec() {
	mut a := big.integer_from_int(2)
	mut b := big.integer_from_int(3)
	mut c := big.integer_from_int(4)

	a.inc()
	c.dec()
	assert a == b
	assert b == c
}

fn test_left_shift() {
	for t in left_shift_test_data {
		assert t.base.parse().left_shift(t.amount) == t.expected.parse()
	}
}

fn test_right_shift() {
	for t in right_shift_test_data {
		assert t.base.parse().right_shift(t.amount) == t.expected.parse()
	}
}

fn test_bit_len() ? {
	for t in bit_len_test_data {
		assert t.value.parse().bit_len() == t.expected
	}
}

fn test_mod_inverse() ? {
	for t in mod_inverse_test_data {
		a := big.integer_from_string(t.value) or { panic('Could not read decimal') }
		m := big.integer_from_string(t.modulus) or { panic('Could not read decimal') }
		r := a.mod_inverse(m) or { panic('No multiplicative inverse in ring Z/mZ') }
		assert (r * a) % m == big.one_int
	}
}

fn test_isqrt() {
	for i in 0 .. 1000 {
		a := big.integer_from_int(i)
		b := big.integer_from_int(i * i)
		assert b.isqrt() == a
	}
	values := [
		TestInteger(314),
		'213149',
		'2198614',
		'318014',
		'1000000000',
		'1000131039410',
		'2148170394871039847019843349714981',
	]
	for value in values {
		a := value.parse()
		b := a * a
		assert b.isqrt() == a
	}

	for t in isqrt_test_data {
		assert t.base.parse().isqrt() == t.expected.parse()
	}
}

fn test_bitwise_ops() {
	a := big.integer_from_int(1).left_shift(512)
	b := a - big.one_int
	assert a.bitwise_and(b) == big.zero_int
	assert b.bitwise_xor(b) == big.zero_int
	assert b.bitwise_or(b) == b
	assert b.bitwise_and(b) == b
	assert b.bitwise_not() == big.zero_int
}

fn test_get_bit() {
	x := big.integer_from_int(42)
	assert x.get_bit(0) == false
	assert x.get_bit(1) == true
	assert x.get_bit(2) == false
	assert x.get_bit(3) == true
	assert x.get_bit(4) == false
	assert x.get_bit(5) == true
	assert x.get_bit(10) == false

	values := ['1001001001001010010010100100100101011101001001010',
		'1111111111111111111111111111111111111111111111111',
		'0000000000000000000000000000000000000000010000', '1110010', '0001001']
	for value in values {
		a := big.integer_from_radix(value, 2) or { panic('Could not read binary') }
		bits := []bool{len: value.len, init: value[value.len - 1 - index] == `1`}
		for i in 0 .. value.len {
			assert a.get_bit(i) == bits[i]
		}
	}
}

fn test_set_bit() {
	mut a := big.integer_from_int(32)
	a.set_bit(1, true)
	assert a.int() == 34
	a.set_bit(1, false)
	a.set_bit(3, true)
	assert a.int() == 40
	a.set_bit(50, true)
	assert a == big.one_int.left_shift(50) + big.integer_from_int(40)
	b := a
	a.set_bit(100, false)
	assert a == b
}