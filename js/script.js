const songs = d3.csvParse(`рубрика,исполнитель,песня,имя,ссылка,доп аккорды
русская поп-музыка,агузарова,луч,жанна,http://akkordbard.ru/poispolnitelem/528-aguzarova/83150-luch,
русская поп-музыка,агутин,ай-ай-ай,леонид,https://www.5lad.ru/akkordy/leonid-agutin/aj-aj-aj,
русская поп-музыка,агутин,на сиреневой луне,леонид,https://muzland.ru/songs.html?auth=68&song=24,
русская поп-музыка,айова,маршрутка ,,https://22.amdm.ru/akkordi/iowa/163622/marshrutka/,
русский рок,аквариум,город золотой,,https://primanota.net/akvarium/gorod-zolotoi.htm,
русский рок,аквариум,дубровский,,https://primanota.net/akvarium/dubrovskii.htm,
русский рок,аквариум,ну-ка мечи стаканы на стол,,"https://22.amdm.ru/akkordi/akvarium/90920/stakany/#:~:text=%D0%9F%D1%80%D0%B8%D0%BF%D0%B5%D0%B2%3A%20C%20%D0%9D%D1%83%2D%D0%BA%D0%B0%2C,C%20%D0%AF%20%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8E%2C%20%D1%87%D1%82%D0%BE%20%D0%B1%D1%83%D0%B4%D1%83!",
русский рок,аквариум ,рок-н-ролл мертв (а я ещё нет),,https://22.amdm.ru/akkordi/akvarium/89598/rok_n_roll_mertv/,
русский рок,алиса,небо славян,,https://22.amdm.ru/akkordi/alisa/91018/nebo_slavyan/,
русская поп-музыка,аллегрова,младший лейтенант,ирина,https://22.amdm.ru/akkordi/allegrova_irina/144650/mladshiy_leytenant/,
русская поп-музыка,аллегрова ,шальная императрица ,ирина,https://22.amdm.ru/akkordi/irina_alegrova/116636/imperatrica/,
русская поп-музыка,анциферова,ищу тебя (всегда быть рядом не могут люди),татьяна,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/15334/vsegda_bit_ryadom_kf_31_iynya/,
зарубежное,арди,le temps de lamour,франсуаза,https://tabs.ultimate-guitar.com/tab/1429385,
русский рок,ария,я свободен,,https://22.amdm.ru/akkordi/valerii_kipelov/93132/ya_svoboden/,
русский рок,Ария ,беспечный ангел ,,https://22.amdm.ru/akkordi/aria/4440/bespechniy_angel/,
русский рок,аукцыон,дорога ,,https://22.amdm.ru/akkordi/auktsyon/1692/doroga/,
русский рок,аукцыон ,орландина ,,https://22.amdm.ru/akkordi/auktsyon/5844/orlandina/,
русский рок,баста,сансара ,,https://22.amdm.ru/akkordi/basta/159636/sansara/,
русская поп-музыка,белорусских,мокрые кросы,тима,https://22.amdm.ru/akkordi/tima_belorusskih/165225/mokrie_krossi/,
русская поп-музыка,белорусских,незабудка,тима,https://22.amdm.ru/akkordi/tima_belorusskih/166136/nezabudka/,
советские песни,бернес,с чего начинается родина,марк,"https://22.amdm.ru/akkordi/bernes_mark/128321/s_chego_nachinaetsya_rodina/#:~:text=Am%20E7%20Am%20Dm6%20%D0%A1,Dm6%20%D0%A1%20%D1%87%D0%B5%D0%B3%D0%BE%20%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D0%A0%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0%3F",
советские песни,бернес,тёмная ночь,марк,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14579/temnaya_noch_mark_bernes_kf_dva_boyca/,
русская поп-музыка,билан,мечтатели,дима,https://22.amdm.ru/akkordi/dima_bilan/112338/mechtateli/,
русская поп-музыка,билан,невозможное возможно,дима,https://22.amdm.ru/akkordi/bilan_dima/91825/nevozmozhnoe_vozmozhno/,
русская поп-музыка,билан,believe me ,дима,https://22.amdm.ru/akkordi/dima_bilan/92859/belive_me/,
зарубежное,битлз,all my loving,,https://22.amdm.ru/akkordi/beatles/784/all_my_loving/,
зарубежное,битлз,help,,https://22.amdm.ru/akkordi/beatles/4951/help/,
зарубежное,битлз,hey jude,,https://22.amdm.ru/akkordi/the_beatles/2717/hey_jude/,
зарубежное,битлз,let it be,,https://22.amdm.ru/akkordi/beatles/147695/let_it_be/,
зарубежное,битлз,michelle,,https://22.amdm.ru/akkordi/the_beatles/102165/michelle/,
зарубежное,битлз,obladi-oblada,,https://22.amdm.ru/akkordi/beatles/28344/ob_la_di_ob_la_da/,
зарубежное,битлз,yellow submarine,,https://22.amdm.ru/akkordi/the_beatles/90595/yellow_submarine/,
зарубежное,битлз,yesterday,,https://22.amdm.ru/akkordi/the_beatles/93165/yesterday/,
зарубежное,битлз,when i'm sixty four,,https://tabs.ultimate-guitar.com/tab/the-beatles/when-im-sixty-four-chords-436893,
русская поп-музыка,блестящие,а я всё летала,,https://22.amdm.ru/akkordi/blestaschie/23209/a_ya_vse_letala/,
русская поп-музыка,блестящие,восточные сказки,,https://22.amdm.ru/akkordi/blestaschie/90747/vostochnie_skazki/,
русский рок,браво,верю я,,https://22.amdm.ru/akkordi/bravo/92926/very_ya/,
русский рок,браво,жёлтые ботинки,,https://22.amdm.ru/akkordi/bravo/91490/zheltie_botinki/,
русский рок,браво,старый отель,,https://22.amdm.ru/akkordi/bravo/3153/stariy_otel/,
русский рок,браво,я то что надо,,https://22.amdm.ru/akkordi/valeriy_syutkin/95509/ya_to_chto_nado/,
русский рок,братья грим,кустурица ,,https://22.amdm.ru/akkordi/bratya_grim/90126/kusturitsa/,
русская поп-музыка,бузова,под звуки поцелуев,ольга,https://22.amdm.ru/akkordi/olga_buzova/153596/pod_zvuki_poceluev/,
русская поп-музыка,бумбокс,вахтёрам (я помню белые обои),,https://22.amdm.ru/akkordi/bumboks/92370/vahteram/,
русская поп-музыка,бумбокс ,на 8-м этаже,,https://22.amdm.ru/akkordi/bumboks/115505/hottabich_dzhin_na_vosmom_etazhe/,
советские песни,бюль-бюль оглы,позвони скорей,Полад,https://22.amdm.ru/akkordi/polad_bylbyl_ogli/183970/pozvoni/,
русская поп-музыка,ваенга,снова стою одна,елена,http://akkordbard.ru/poispolnitelem/133-vaenga-elena/58548-snova-kuryu-mama,
зарубежное,вайт страйпс,seven nation army ,,https://22.amdm.ru/akkordi/white_stripes/87722/seven_nation_army/,
зарубежное,веласкес торрес,besame mucho,консуэло,https://22.amdm.ru/akkordi/raznye_pesni/5656/besame_mucho/,
советские песни,великанова,ландыши (ты сегодня мне принёс),гелена,https://22.amdm.ru/akkordi/nina_dorda/140656/landishi_svetlogo_maya_privet/,
советские песни,веселые ребята,люди встречаются,виа,https://22.amdm.ru/akkordi/veselie_rebata/21123/lydi_vstrechaytsya/,
советские песни,веселые ребята ,всё что в жизни есть у меня,виа,https://22.amdm.ru/akkordi/samocveti/97506/vse_chto_v_zhizni_est_u_menya/,
русская поп-музыка,виа гра,попытка №5,,https://22.amdm.ru/akkordi/via_gra/5088/popitka_5/,
русская поп-музыка,виа гра,притяженья больше нет (сто шагов назад),,https://22.amdm.ru/akkordi/via_gra/167869/sto_shagov_nazad_prityazhenya_bolshe_net/,
русская поп-музыка,витас,опера #2,,https://22.amdm.ru/akkordi/vitas/4736/opera_2/,
русская поп-музыка,гаязовс бразерс,малиновая лада,,https://22.amdm.ru/akkordi/gayazov_brother/187054/malinovaya_lada/,
советские песни,герман,город влюблённых людей,анна,https://22.amdm.ru/akkordi/anna_german/160397/gorod_vlyblennih_lydey/,
советские песни,герман,надежда (светит незнакомая звезда),анна,https://22.amdm.ru/akkordi/anna_german/14861/nadezhda/,
советские песни,герман,эхо любви,анна,https://22.amdm.ru/akkordi/anna_german/99316/mi_eho/,
русская поп-музыка,глюк'oza,"невеста (я буду вместо, вместо, вместо неё)",,https://22.amdm.ru/akkordi/glukoza/14840/nevesta/,
русская поп-музыка,глюк'oza,ненавижу,,https://22.amdm.ru/akkordi/glukoza/14829/nenavizhu/,
русская поп-музыка,гнатюк,птица счастья (завтрашнего дня),николай,"https://22.amdm.ru/akkordi/dobri_molodci/137467/ptica_schastya/#:~:text=E%20Am%20%D0%9F%D1%82%D0%B8%D1%86%D0%B0%20%D1%81%D1%87%D0%B0%D1%81%D1%82%D1%8C%D1%8F%20%D0%B7%D0%B0%D0%B2%D1%82%D1%80%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE,%D0%97%D0%B0%D0%B2%D1%82%D1%80%D0%B0%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%20%D0%BB%D1%83%D1%87%D1%88%D0%B5%2C%20%D1%87%D0%B5%D0%BC%20%D0%B2%D1%87%D0%B5%D1%80%D0%B0.",
зарубежное,гоголь борделло,start wearing purple,,https://tabs.ultimate-guitar.com/tab/gogol-bordello/start-wearing-purple-chords-688719,
советские песни,голубые гитары,ветер северный,виа,https://22.amdm.ru/akkordi/golubie_gitari/135412/veter_severniy/,
русская поп-музыка,градусы,режиссер (враг мой бойся меня),,https://22.amdm.ru/akkordi/gradusy/129844/rezhisser/,
русский рок,гражданская оборона,всё идёт по плану,,https://22.amdm.ru/akkordi/grazhdanskaya_oborona/91535/vse_idet_po_planu/,
русский рок,ддт,летели облака,,https://22.amdm.ru/akkordi/ddt/5954/leteli_oblaka/,
русский рок,ддт,последняя осень,,https://22.amdm.ru/akkordi/ddt/10667/v_poslednyy_osen/,
русский рок,ддт,просвистела,,https://22.amdm.ru/akkordi/ddt/141678/prosvistela/,
русский рок,ддт,что такое осень?,,https://22.amdm.ru/akkordi/ddt/3054/chto_takoe_osen/,
русский рок,ддт,это всё (что останется после меня),,https://22.amdm.ru/akkordi/ddt/92536/eto_vsyo/,
зарубежное,джон,can you feel the love tonight,элтон,https://22.amdm.ru/akkordi/elton_john/51120/can_you_feel_the_love_tonight/,
зарубежное,джон,yellow brick road,элтон,https://22.amdm.ru/akkordi/elton_john/104328/goodbye_yellow_brick_road/,
зарубежное,джон,your song,элтон,https://22.amdm.ru/akkordi/elton_john/51182/your_song/,
русская поп-музыка,дискотека авария,небо,,https://22.amdm.ru/akkordi/diskoteka_avaria/89694/nebo/,
русская поп-музыка,дэд блонд,мальчик на девятке,,https://22.amdm.ru/akkordi/dead_blonde/182491/malchik_na_devyatke/,
русский рок,ещё никак,волна,,https://22.amdm.ru/akkordi/eschyo_nikak/188627/volna/,
русский рок,ещё никак ,стоял значит ,,"https://22.amdm.ru/akkordi/eschyo_nikak/158609/ogni_goroda_stoyal_znachit/#:~:text=Gm%20C%20G%20Cm%20%D0%A1%D1%82%D0%BE%D1%8F%D0%BB,%2C%20%D0%BF%D0%B8%D1%82%D1%8C%20%D1%81%D0%BE%D0%BB%D0%B5%D0%BD%D1%83%D1%8E%20%D0%B2%D0%BE%D0%B4%D1%83%2C%20%D0%BA%D1%83%D1%80%D0%B8%D1%82%D1%8C!",
русский рок,жуки,батарейка,,https://22.amdm.ru/akkordi/zhuki/167540/batareyka/,
русская поп-музыка,зарубина,на теплоходе музыка играет ,ольга,https://meddiator.ru/apina-na-teploxode-muzyka-igraet.html,
русская поп-музыка,звери,районы кварталы,,https://22.amdm.ru/akkordi/zveri/23675/rayoni_kvartali/,
русский рок,звуки му,досуги-буги,,https://22.amdm.ru/akkordi/zvyki_my/93011/dosugi_bugi/,
советские песни,земляне,трава у дома,,https://22.amdm.ru/akkordi/zemlane/745/trava_u_doma/,
русская поп-музыка,земфира,искала,,https://22.amdm.ru/akkordi/zemfira/4833/iskala/,
русская поп-музыка,земфира,лондон (зверь одиночка),,https://22.amdm.ru/akkordi/zemfira/122998/london/,
русская поп-музыка,земфира,не отпускай,,https://22.amdm.ru/akkordi/zemfira/3139/ne_otpuskay/,
русская поп-музыка,земфира,прогулка (случайно падали звёзды),,https://22.amdm.ru/akkordi/zemfira/101834/progulka/,
русская поп-музыка,земфира,хочешь?,,https://22.amdm.ru/akkordi/zemfira/89380/hochesh/,
советские песни,"и рок-оперы ""юнона и авось""",я тебя никогда не забуду,,https://22.amdm.ru/akkordi/unona_i_avos/136908/ya_tebya_nikogda_ne_zabudu/,
русская поп-музыка,иванушки international,тополиный пух,,https://22.amdm.ru/akkordi/ivanyshki_international/158249/topoliniy_puh/,
русская поп-музыка,иванушки international,тучи,,https://22.amdm.ru/akkordi/ivanyshki_international/1425/tuchi/,
советские песни,"из к/ф ""17 мгновений весны""","грусть моя, ты покинь меня",иосиф кобзон,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/102745/pesnya_o_dalekoy_rodine/,
советские песни,"из к/ф ""17 мгновений весны""",мгновения,иосиф кобзон,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14906/mgnoveniya_kf_17_mgnoveniy_vesni/,
советские песни,"из к/ф ""большое космическое приключение""",я тебе конечно верю ,,https://pro-gitaru.ru/ya-tebe-konechno-veryu/,
советские песни,"из к/ф ""бриллиантовая рука""",остров невезения,андрей миронов,https://22.amdm.ru/akkordi/andrei_mironov/23982/ostrov_nevezeniya/,
советские песни,"из к/ф ""бриллиантовая рука""",песня про зайцев (а нам всё равно),юрий никулин,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14760/pesenka_pro_zaycev_kf_brilliantovaya_ruka/,
советские песни,"из к/ф ""вам и не снилось""",последняя поэма (смерть побеждающий вечный закон),,https://22.amdm.ru/akkordi/alla/114119/poslednyaya_poema/,
советские песни,"из к/ф ""весна на заречной улице""","когда весна придёт, не знаю (весна на заречной улице)",,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/106761/vesna_na_zarechnoy_ulice/#:~:text=Am%20Em%20H%D0%BE%20%D1%82%D1%8B%20%D0%BC%D0%BD%D0%B5%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%2C%20B7%20Em%20%D0%98,B7%20Em%20%D0%A1%D0%B5%D0%BC%D1%8C%D1%8F%20%D0%B8%D1%81%D0%BF%D1%8B%D1%82%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%B4%D1%80%D1%83%D0%B7%D0%B5%D0%B9.",
советские песни,"из к/ф ""гостья из будущего""",прекрасное далёко,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/3018/prekrasnoe_daleko_kf_gostya_iz_buduschego/,
советские песни,"из к/ф ""девчата""",старый клён,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14596/stariy_klen_kf_devchata/,
советские песни,"из к/ф ""дом, в котором живу""",тишина за рогожской заставою,,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/132048/tishina_za_rogozhskoy_zastavoy_hf_dom_v_kotorom_ya_zhivu/#:~:text=Am%20Em%20F%20%D0%A2%D0%B8%D1%88%D0%B8%D0%BD%D0%B0%20%D0%B7%D0%B0,B7%20E7%20%D0%A1%D0%B5%D0%BC%D0%B8%D1%81%D1%82%D1%80%D1%83%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B3%D0%B8%D1%82%D0%B0%D1%80%D1%8B%20%D0%BC%D0%BE%D0%B5%D0%B9!",
зарубежное,"из к/ф ""звуки музыки""",favourite things,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/139577/my_favorite_things_ost_sound_of_music/,
советские песни,"из к/ф ""иван васильевич меняет профессию""",звенит январская вьюга,нина бродская,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/15365/zvenit_yanvarskaya_vyga_kf_ivan_vasilevich_menyaet_professiy/,
советские песни,"из к/ф ""иван васильевич меняет профессию""",разговор со счастьем (вдруг как в сказке скрипнула дверь),,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14679/razgovor_so_schastem_kf_ivan_vasilevich_menyaet_professiy/#:~:text=Am%20E7%20%D0%9F%D1%80%D0%B8%D0%BF%D0%B5%D0%B2%3A%20%D0%92%D0%B4%D1%80%D1%83%D0%B3%2C%20%D0%BA%D0%B0%D0%BA,%D0%B7%D1%80%D1%8F%2C%20Am%20%D0%9D%D0%B5%20%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D1%81%D0%BD%D0%BE%20%D0%B1%D1%8B%D0%BB%D0%BE!",
советские песни,"из к/ф ""ирония судьбы""",ария московского гостя (если у вас нету тети),,"https://22.amdm.ru/akkordi/nikitin_sergei/139269/esli_u_vas_netu_teti/#:~:text=Am%20E7%20Am%20%D0%95%D1%81%D0%BB%D0%B8%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D0%BD%D0%B5%D1%82%D1%83%20%D1%82%D0%B5%D1%82%D0%B8%2C%20Dm%20G7,C%20A%20%D1%82%D1%80%D1%83%D0%B1%D0%B0%D1%87%20%D0%B2%D1%8B%D0%B4%D1%83%D0%B2%D0%B0%D0%B5%D1%82%20%D0%BC%D0%B5%D0%B4%D1%8C.",
советские песни,"из к/ф ""ирония судьбы""","мне нравится, что вы больны не мной",,https://22.amdm.ru/akkordi/marina_cvetaeva/186652/mne_nravitsya_chto_vi_bolni_ne_mnoy/,
советские песни,"из к/ф ""ирония судьбы""",на тихорецкую состав отправится,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14862/na_tihoreckuy_kf_ironiya_sudbi_ili_s_legkim_parom/,
советские песни,"из к/ф ""ирония судьбы""",я спросил у ясеня,,https://22.amdm.ru/akkordi/nikitin_sergei/89389/ya_sprosil_u_yasenya/,
советские песни,"из к/ф ""кавказская пленница""",песенка о медведях (где-то на белом свете),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/99660/pesenka_o_medvedyah_kf_kavkazskaya_plennica/,
советские песни,"из к/ф ""карнавал""","позвони мне, позвони",,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14725/pozvoni_mne_pozvoni_kf_karnaval/,
детские песни,"из к/ф ""красная шапочка""",песня звездочета,,https://22.amdm.ru/akkordi/detskie_pesni/172710/pesenka_zvezdocheta_iz_kf_krasnaya_shapochka/,
детские песни,"из к/ф ""красная шапочка""",песня красной шапочки (если долго-долго-долго),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14767/pesenka_krasnoy_shapochki_kf_pro_krasnuy_shapochku/,
детские песни,"из к/ф ""маленький мук""",дорога добра (спроси у жизни строгой),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/94949/doroga_dobra_iz_kf_priklycheniya_malenkogo_muka/,
советские песни,"из к/ф ""мэри поппинс, до свидания""",ветер перемен,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/89656/veter_peremen_kf_meri_poppins_do_svidaniya/,
детские песни,"из к/ф ""мэри поппинс, до свиданья""",33 коровы,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/102185/33_korovi_hf_meri_poppins_do_svidanya/,
детские песни,"из к/ф ""мэри поппинс, до свиданья""",леди совершенство,,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/176084/ledi_sovershenstvo_iz_kf_meri_poppins_do_svidaniya/#:~:text=Em%20Am%20Dm7%20G%20%D0%9C%D1%8D,E%20%D0%97%D0%BD%D0%B0%D1%82%D1%8C%2C%20%D1%87%D1%82%D0%BE%20%D1%8F%20%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB.",
детские песни,"из к/ф ""мэри поппинс, до свиданья""",непогода,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14739/nepogoda_kf_meri_poppins_do_svidanya/,
советские песни,"из к/ф ""неуловимые мстители""",песня неуловимых мстителей (бьют свинцовые ливни...),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/89119/pesnya_neulovimih_mstiteley_kf_neulovimie_mstiteli/,
советские песни,"из к/ф ""неуловимые мстители""",песня яшки-цыгана (спрячь за решётку),,https://22.amdm.ru/akkordi/vasiliy_vasilev/131575/pesnya_yashki_cigana/,
советские песни,"из к/ф ""неуловимые мстители""",погоня (в горячей крови),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/89125/pogonya_kf_novie_priklycheniya_neulovimih/,
советские песни,"из к/ф ""операция ы и другие приключения шурика""","постой, паровоз",,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/130120/postoy_parovoz_ost_operaciya_i/,
детские песни,"из к/ф ""приключения электроника""",до чего дошёл прогресс,,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/15353/do_chego_doshel_progress_kf_priklycheniya_elektronika/#:~:text=Am%20%D0%94%D0%BE%20%D1%87%D0%B5%D0%B3%D0%BE%20%D0%B4%D0%BE%D1%88%D0%B5%D0%BB%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%2C%20Dm%20%D0%91%D1%8B%D0%BB%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B5%D0%B7,%D0%92%D0%BA%D0%B0%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D1%8B%2C%20%D0%B0%20%D0%BD%D0%B5%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA.",
детские песни,"из к/ф ""приключения электроника""",крылатые качели,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_myltfilmov/15374/krilatie_kacheli_kf_priklycheniya_elektronika/,
детские песни,"из к/ф ""приключения электроника""","ты человек ты же сильный, смелый",,https://22.amdm.ru/akkordi/detskie_pesni/100878/ti_chelovek/,
советские песни,"из к/ф ""пять вечеров""",губы окаянные,,https://22.amdm.ru/akkordi/ulii_kim/131660/gubi_okayannie/,
советские песни,"из к/ф ""русское поле"" ","ой, мамочка",,"https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/187377/ah_mamochka/#:~:text=%D1%82%D1%8B%20%D0%B1%D1%8B%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.-,Am%20%D0%90%D1%85%2C%20%D0%BC%D0%B0%D0%BC%D0%BE%D1%87%D0%BA%D0%B0%2C%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%BD%D0%BE%D1%87%D0%BA%D0%B0%D1%85%20G%20%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D0%B0%D1%81%D1%8C%20%D1%8F%20%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%2C,%D0%9A%D0%B0%D0%BA%20%D0%B6%D0%B5%20%D1%82%D1%8B%20%D0%B1%D1%8B%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.",
разное,"из к/ф ""цвет черемухи""",я назову тебя зоренькой,,https://22.amdm.ru/akkordi/igor_nikolaev/107208/ya_nazovu_tebya_zorenkoy/,
советские песни,"из к/ф ""чародеи""",снежинка,,https://22.amdm.ru/akkordi/charodei/5911/snezhinka/,
советские песни,"из к/ф ""чародеи""",три белых коня,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14569/tri_belih_konya_kf_charodei/,
детские песни,"из м/ф ""бременские музыканты""","говорят, мы бяки-буки",,https://22.amdm.ru/akkordi/pesni_iz_kino_i_myltfilmov/113840/govoryat_mi_byaki_buki_mf_bremenskie_muzikanti/,
детские песни,"из м/ф ""бременские музыканты""",ничего на свете лучше нету,,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/174801/nichego_na_svete_luchshe_netu_mf_bremenskie_muzikanti/,
советские песни,"из м/ф ""бременские музыканты""",серенада трубадура (луч солнца золотого),муслим магомаев,https://22.amdm.ru/akkordi/gennadiy_gladkov/91258/luch_solnca_zolotogo/,
детские песни,"из м/ф ""голубой щенок""",ария голубого щенка (неужели из-за масти),,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/94460/pesnya_golubogo_schenka/,
детские песни,"из м/ф ""голубой щенок""",песня кота и пирата (я и ты такие разные),,https://meddiator.ru/pesnya-kota-i-pirata.html,
детские песни,"из м/ф ""голубой щенок""",песня рыбы-пилы ,,https://22.amdm.ru/akkordi/aleksandr_gradskiy/161577/pesnya_ribi_pili/,
детские песни,"из м/ф ""крокодил гена""",голубой вагон (медленно минуты уплывают в даль),,https://www.5lad.ru/akkordy/detskie-pesni/goluboj-vagon,
детские песни,"из м/ф ""крокодил гена""",песня крокодила гены (пусть бегут неуклюже),,https://3akkorda.net/pust-begut-neuklyuzhe/,
детские песни,"из м/ф ""крокодил гена""",песня чебурашки ,,https://22.amdm.ru/akkordi/detskie_pesni/148149/pro_cheburashku/,
советские песни,"из м/ф ""крошка енот""",улыбка (от улыбки станет всем светлей),,https://22.amdm.ru/akkordi/pesni_iz_multfilmov/135448/ot_ulibki/,
советские песни,"из м/ф ""трям здравствуйте""","облака, белогривые лошадки",,https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/23146/oblaka_mf_ezhik_i_medvezhonok/,
зарубежное,"из рок-оперы ""иисус христос суперзвезда""","i don't know, how to love him",,https://mytabs.ru/akkordy/h/helen-reddy/i-dont-know-how-to-love-him-2_188019.html,
зарубежное,илвис,what does the fox say?,,https://22.amdm.ru/akkordi/ylvis/141701/what_does_the_fox_say/,
советские песни,к/ф коллеги,палуба ,,https://22.amdm.ru/akkordi/vladimir_markin/128002/paluba/,
советские песни,кельми,замыкая круг,крис,https://22.amdm.ru/akkordi/raznye_pesni/1035/zamikaya_krug/,
русский рок,кино,алюминевые огурцы,,https://www.5lad.ru/akkordy/kino/alyuminievye-ogurtsy,
русский рок,кино,бездельник #1,,https://chorder.ru/songs/kino/27-bezdelnik-akkordy,
русский рок,кино,"видели ночь, гуляли всю ночь до утра",,https://akkords.pro/songs/kino/videli-noch/,
русский рок,кино,восьмиклассница,,https://www.5lad.ru/akkordy/kino/vosmiklassnitsa,
русский рок,кино,группа крови,,https://www.5lad.ru/akkordy/kino/gruppa-krovi,
русский рок,кино,звезда по имени солнце,,https://www.5lad.ru/akkordy/kino/zvezda-po-imeni-solntse,
русский рок,кино,кукушка,,https://www.5lad.ru/akkordy/kino/kukushka,
русский рок,кино,мама-анархия,,https://www.5lad.ru/akkordy/kino/mama-anarkhiya,
русский рок,кино,пачка сигарет,,https://www.5lad.ru/akkordy/kino/pachka-sigaret,
русский рок,кино,перемен,,https://www.5lad.ru/akkordy/kino/khochu-peremen,
русский рок,кино,это не любовь,,https://www.5lad.ru/akkordy/kino/eto-ne-lyubov,
русская поп-музыка,киркоров,жестокая любовь,филипп,https://22.amdm.ru/akkordi/filipp_kirkorov/23790/zhestokaya_lybov/,
русская поп-музыка,киркоров,просто подари,филипп,https://22.amdm.ru/akkordi/filipp_kirkorov/93814/prosto_podari/,
русская поп-музыка,киркоров,"снег (если хочешь идти, иди)",филипп,https://22.amdm.ru/akkordi/filipp_kirkorov/100543/sneg/,
русская поп-музыка,киркоров,цвет настроения синий,филипп,https://22.amdm.ru/akkordi/filipp_kirkorov/163782/cvet_nastroeniya_siniy/,
зарубежное,кисс,i was made for loving you baby,,https://22.amdm.ru/akkordi/kiss/137579/i_was_made_for_lovin_you/,
русская поп-музыка,колибри,жёлтый лист осенний,,https://22.amdm.ru/akkordi/kolibri/3860/zheltiy_list_osenniy/,
русский рок,коммунизм,любви не миновать,,https://22.amdm.ru/akkordi/kommunizm/109403/lyubvi_ne_minovat/,
русская поп-музыка,корнелюк,"город, которого нет (там для меня горит очаг)",игорь,"https://22.amdm.ru/akkordi/igor_korneluk/4459/gorod_kotorogo_net_kf_banditskiy_peterburg/#:~:text=%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%20%D0%BD%D0%B5%D1%82.-,Chorus%3A%20Em%20Am%20%D0%A2%D0%B0%D0%BC%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B3%D0%BE%D1%80%D0%B8%D1%82%20%D0%BE%D1%87%D0%B0%D0%B3%2C%20Am%20(,%D0%98%20%D1%8D%D1%82%D0%BE%D1%82%20%D1%88%D0%B0%D0%B3%20%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B5%D0%B5%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8.",
русский рок,король и шут,кукла колдуна,,https://22.amdm.ru/akkordi/korol_i_shut/23540/kukla_kolduna/,
русский рок,король и шут,прыгну со скалы,,https://22.amdm.ru/akkordi/korol_i_shut/100897/prignu_so_skali/,
русская поп-музыка,костюшкин,"женщина, я не танцую",стас,https://22.amdm.ru/akkordi/a_dessa/107150/zhenschini_ya_ne_tancuy/,
русская поп-музыка,крем сода,никаких больше вечеринок,,https://22.amdm.ru/akkordi/cream_soda/169611/nikakih_bolshe_vecherinok/,
русская поп-музыка,крид (feat. molly),если ты меня не любишь,егор,https://22.amdm.ru/akkordi/egor_krid/161553/esli_ti_menya_ne_lybish_ft_molly/,
советские песни,кристаллинская,нежность (опустела без тебя земля),майя,https://22.amdm.ru/akkordi/anna_german/162417/nezhnost/,
советские песни,кристаллинская,первые шаги (топ-топ топает малыш),майя,https://www.oduvanchik.net/view_song.php?id=15092,
советские песни,кристаллинская,царевна-несмеяна (ты стоишь у окна),майя,https://22.amdm.ru/akkordi/vladimir_markin/1439/carevna_nesmeyana/,
русская поп-музыка,ласковый май,седая ночь,,https://22.amdm.ru/akkordi/laskovii_mai/125712/sedaya_noch/,
зарубежное,леди гага ,poker face ,,https://22.amdm.ru/akkordi/lady_gaga/97388/poker_face/,
советские песни,лейся песня,качается вагон,виа,https://22.amdm.ru/akkordi/vacheslav_dobrinin/115199/kachaetsya_vagon/,
русская поп-музыка,лель,мой мармеладный (попробуй джага-джага),катя,https://22.amdm.ru/akkordi/kata_lel/13505/moy_marmeladniy/,
русская поп-музыка,лель,муси-пуси,катя,https://22.amdm.ru/akkordi/kata_lel/102733/musi_pusi/,
русский рок,ленинград ,www ,,https://22.amdm.ru/akkordi/leningrad/90038/www/,
русская поп-музыка,леонидов,девочка-виденье (я обернулся посмотреть),максим,https://22.amdm.ru/akkordi/maksim_leonidov/6112/devochka_videne/,
русская поп-музыка,леонтьев,дельтаплан,валерий,https://22.amdm.ru/akkordi/leontev_valerii/101103/polyot_na_deltaplane/,
русская поп-музыка,леонтьев,ярмарки-краски,валерий,https://22.amdm.ru/akkordi/leontev_valerii/120161/yarmarki_kraski/,
русская поп-музыка,леприконсы,"хали-гали, паратрупер",,https://22.amdm.ru/akkordi/leprikonsi/5120/hali_gali_paratruper/,
русская поп-музыка,лепс,рюмка водки,григорий,https://22.amdm.ru/akkordi/grigoriy_leps/90309/rymka_vodki_na_stole/,
русская поп-музыка,лепс (feat. валерий меладзе),обернитесь,григорий,https://22.amdm.ru/akkordi/grigoriy_leps/102822/obernites_ft_valeriy_meladze/,
русский рок,летов,про дурачка,егор,https://22.amdm.ru/akkordi/grazhdanskaya_oborona/177173/pro_durachka/,
советские песни,лещенко,ах эти чёрные глаза,пётр,https://22.amdm.ru/akkordi/petr_leschenko/160385/chernie_glaza/,
советские песни,лещенко,у самовара я и моя маша,пётр ,https://ru.guitarsongs.club/song/35750,
советские песни,лещенко ,"всё, что было",пётр,https://www.ackordofmine.ru/index/pjotr_leshhenko_vsjo_chto_bylo_akkordy_i_tekst_pesni/0-6695,
русская поп-музыка,лоза,плот,юрий,https://22.amdm.ru/akkordi/urii_loza/138464/plot/,
русская поп-музыка,любэ,берёзы (отчего так в россии),,https://22.amdm.ru/akkordi/lyubeh/95918/berezi/,
русская поп-музыка,любэ ,комбат,,https://22.amdm.ru/akkordi/lyubeh/3353/kombat/,
русская поп-музыка,любэ ,конь (выйду ночью),,https://22.amdm.ru/akkordi/lyubeh/3757/kon/,
советские песни,магомаев,королева красоты,муслим,https://22.amdm.ru/akkordi/muslim_magomaev/9794/koroleva_krasoti/,
советские песни,магомаев,лучший город земли (песня плывёт),муслим,https://22.amdm.ru/akkordi/muslim_magomaev/102625/luchshiy_gorod_zemli/,
советские песни,магомаев,"о море, море",муслим,https://22.amdm.ru/akkordi/myslim_magomaev/135421/o_more_more_sinyaya_vechnost/,
советские песни,макаров,последняя электричка,владимир,https://22.amdm.ru/akkordi/vladimir_makarov/129216/poslednyaya_elektrichka/,
русская поп-музыка,макsим,вдоль ночных дорог,,https://22.amdm.ru/akkordi/maksim/101853/znaesh_li_ti/,
русская поп-музыка,макsим,трудный возраст,,https://22.amdm.ru/akkordi/maksim/161183/trudniy_vozrast/,
русская поп-музыка,маркин,я готов целовать песок,владимир,https://22.amdm.ru/akkordi/vladimir_markin/608/ya_gotov_celovat_pesok/,
русский рок,матвеева,зелёный чай,вера,https://www.oduvanchik.net/view_song.php?id=3640,
русская поп-музыка,меладзе,красиво ты вошла в мою грешную жизнь,валерий,https://22.amdm.ru/akkordi/meladze_valerii/5640/krasivo/,
русская поп-музыка,меладзе,"салют, вера!",валерий,https://22.amdm.ru/akkordi/meladze_valerii/101894/salyt_vera/,
русская поп-музыка,меладзе,самба белого мотылька,валерий,https://22.amdm.ru/akkordi/meladze_valerii/141579/samba_belogo_motilka/,
детские песни,миансарова,летка-енка (прыг-скок утром на лужок),тамара,https://lyricsworld.ru/Tamara-Miansarova/Letka-enka-645156.html,
советские песни,миансарова,рудерик (рыжик),тамара,https://textypesen.com/tamara-miansarova/ryzhik/,
русская поп-музыка,михаил круг,владимирский централ,михаил ,https://22.amdm.ru/akkordi/mihail_krug/102195/vladimirskiy_central/,
русская поп-музыка,мугу,чёрные глаза (вспоминаю — умираю),айдамир,https://22.amdm.ru/akkordi/aydamir_mugu/96677/chyornie_glaza/,
советские песни,мулерман,"хмуриться не надо, лада",вадим,https://www.oduvanchik.net/view_song.php?id=20598,
русская поп-музыка,мумий тролль,владивосток 2000,,https://22.amdm.ru/akkordi/mumiy_troll/110247/vladivostok_2000/,
русская поп-музыка,мумий тролль,утекай,,https://22.amdm.ru/akkordi/mumiy_troll/3106/utekay/,
русская поп-музыка,мы,возможно (мне придётся убить тебя),,https://22.amdm.ru/akkordi/mi_gruppa/175627/vozmozhno/,
русская поп-музыка,налич,guitar,пётр,https://22.amdm.ru/akkordi/petr_nalich/97015/guitar/,
русская поп-музыка,нарцисс ,шоколадный заяц ,пьер,https://lifernb.ru/per-nartsiss-shokoladnyy-zayats-akkordy-dlya-gitary/,
русская поп-музыка,насыров,мальчик хочет в тамбов,марат,https://22.amdm.ru/akkordi/myrat_nasirov/107305/malchik_hochet_v_tambov/,
русский рок,науменко,"прощай, детка",майк,https://22.amdm.ru/akkordi/maik_naymenko/105274/proschay_detka/,
русский рок,наутилус помпилиус,"гудбай, америка",,https://22.amdm.ru/akkordi/bytysov_vacheslav/13392/gud_bay_amerika/,
русский рок,наутилус помпилиус,дыхание,,https://22.amdm.ru/akkordi/bytysov_vacheslav/107497/dihanie/,
русский рок,наутилус помпилиус,крылья,,https://www.5lad.ru/akkordy/nautilus-pompilius/krylya,
русский рок,наутилус помпилиус,прогулки по воде (видишь там на горе),,https://www.5lad.ru/akkordy/nautilus-pompilius/progulki-po-vode,
русский рок,наутилус помпилиус,скованные одной цепью,,https://www.5lad.ru/akkordy/nautilus-pompilius/skovannye-odnoj-tsepyu,
русский рок,наутилус помпилиус,хлоп-хлоп,,https://www.5lad.ru/akkordy/nautilus-pompilius/khlop-khlop,
русский рок,наутилус помпилиус,я хочу быть с тобой,,https://www.5lad.ru/akkordy/nautilus-pompilius/ya-khochu-byt-s-toboj,
русский рок,ноль,"иду, курю",,https://22.amdm.ru/akkordi/nol/2706/idu_kury/,
русский рок,ноль,песня о настоящем индейце,,https://22.amdm.ru/akkordi/nol/12552/pesnya_o_nastoyaschem_indeyce/,
русский рок,ноль,улица ленина,,https://22.amdm.ru/akkordi/nol/24157/ulica_lenina/,
русский рок,ноль,человек и кошка,,https://22.amdm.ru/akkordi/nol/93459/chelovek_i_koshka/,
русский рок,ноль,школа жизни,,https://22.amdm.ru/akkordi/nol/6059/shkola_zhizni/,
русский рок,ноль,я.л.ю.б.л.ю.т.е.б.я,,https://22.amdm.ru/akkordi/nol/174575/yalyblytebya/,
русская поп-музыка,носков ,(я люблю тебя) это здорово,николай ,https://22.amdm.ru/akkordi/nikolay_noskov/202646/ehto_zdorovo/,
советские песни,ободзинский,эти глаза напротив,валерий,https://22.amdm.ru/akkordi/valerii_obodzinskii/157299/eti_glaza_naprotiv/,
русский рок,океан ельзи ,без бою,,https://22.amdm.ru/akkordi/okean_elzi/91931/bez_boy/,
советские песни,пахоменко,сегодня праздник у девчат,мария,https://pesni.guru/text/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B4%D0%B5%D0%B2%D1%87%D0%B0%D1%82%D0%B0,
советские песни,песняры,беловежская пуща,,https://22.amdm.ru/akkordi/pesnari/1510/belovezhskaya_puscha/,
зарубежное,пиксис,where is my mind?,the,https://22.amdm.ru/akkordi/pixies/70865/where_is_my_mind/,
зарубежное,пинк флойд,another brick in the wall (we don't need no education),,https://22.amdm.ru/akkordi/pink_floyd/17289/another_brick_in_the_wall_pt_2/,
советские песни,пламя,не надо печалиться,виа,https://22.amdm.ru/akkordi/samocveti/13440/ne_nado_pechalitsya/,
советские песни,поющие гитары,сумерки,виа,https://www.ackordofmine.ru/index/via_pojushhie_gitary_sumerki_pravilnye_akkordy_pesni_tekst_boj_na_gitare/0-4369,
советские песни,поющие сердца ,кто тебе сказал (каждый день каждый взгляд),виа,"https://22.amdm.ru/akkordi/pouschie_serdca/174064/kto_tebe_skazal/#:~:text=%D0%9F%D0%BE%D1%8E%D1%89%D0%B8%D0%B5%20%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B0%20%2D%20%D0%9A%D1%82%D0%BE%20%D1%82%D0%B5%D0%B1%D0%B5%20%D1%81%D0%BA%D0%B0%D0%B7%D0%B0%D0%BB%2C%20%D0%B0%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D1%8B,-%D0%9F%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%82%D0%BA%D0%B0&text=Am%20F%20%D0%A5%D0%BE%D1%87%D0%B5%D1%88%D1%8C%2C%20%D1%8F%20%D0%B2,Am%20%D0%A2%D0%B2%D0%BE%D0%B9%20%D0%B2%20%D0%B4%D1%83%D1%88%D0%B5%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D1%83.",
русская поп-музыка,пугачёва ,а знаешь все еще будет,алла,https://22.amdm.ru/akkordi/alla_pugacheva/4543/vse_esche_budet/,
русская поп-музыка,пугачёва ,айсберг,алла,https://22.amdm.ru/akkordi/alla_pugacheva/13582/aysberg/,
русская поп-музыка,пугачёва ,арлекино,алла,"https://22.amdm.ru/akkordi/alla_pugacheva/104784/arlekino/#:~:text=Am%20%D0%9F%D0%BE%20%D0%BE%D1%81%D1%82%D1%80%D1%8B%D0%BC%20%D0%B8%D0%B3%D0%BB%D0%B0%D0%BC%20%D1%8F%D1%80%D0%BA%D0%BE%D0%B3%D0%BE,%D0%BB%D0%B5%20%2D%20%D0%BA%D0%B8%D0%BD%D0%BE%20%D0%90%D1%80%D0%BB%D0%B5%D0%BA%D0%B8%D0%BD%D0%BE%20E7%20Am",
русская поп-музыка,пугачёва ,звездное лето,алла,https://22.amdm.ru/akkordi/alla_pugacheva/90675/zvezdnoe_leto/,
русская поп-музыка,пугачёва ,любовь похожая на сон,алла,https://22.amdm.ru/akkordi/alla_pugacheva/90326/lybov_pohozhaya_na_son/,
русская поп-музыка,пугачёва ,миллион алых роз,алла,https://22.amdm.ru/akkordi/alla_pugacheva/10070/million_alih_roz/,
русская поп-музыка,пугачёва ,позови меня с собой,алла,https://22.amdm.ru/akkordi/alla_pugacheva/171084/pozovi_menya_s_soboy/,
русская поп-музыка,пугачёва ,этот мир придуман не нами,алла,https://22.amdm.ru/akkordi/alla_pugacheva/2530/etot_mir/,
русская поп-музыка,пугачёва (feat. максим галкин),будь или не будь,алла,https://22.amdm.ru/akkordi/alla_pugacheva/1857/bud_ili_ne_bud/,
русская поп-музыка,распутина (feat. киркоров),роза чайная ,маша,https://www.oduvanchik.net/view_song.php?id=21326,
русская поп-музыка,ржевская,"когда я стану кошкой (наверное, в следующей жизни)",мария,"https://22.amdm.ru/akkordi/maria_rjevskaa/14150/kogda_ya_stanu_koshkoy/#:~:text=Am%20%D0%9D%D0%B0%D0%B2%D0%B5%D1%80%D0%BD%D0%BE%20%D0%B2%20%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B5%D0%B9%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8,Dm%20E%20%D0%93%D0%BB%D1%8F%D0%BD%D1%86%D0%B5%D0%B2%D0%BE%D0%B9%20%D1%83%D0%BB%D1%8B%D0%B1%D0%BA%D0%BE%D0%B9%20%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F.",
русская поп-музыка,ротару,только этого мало,софия,https://22.amdm.ru/akkordi/sofiya_rotaru/123280/tolko_etogo_malo/,
зарубежное,рыбак,fairytale,александр,https://22.amdm.ru/akkordi/aleksandr_ribak/103035/fairytale/,
советские песни,самоцветы,мой адрес - советский союз,виа,https://22.amdm.ru/akkordi/samocveti/11320/moy_adres_sovetskiy_soyz/,
русский рок,секрет,"ах, алиса",,https://22.amdm.ru/akkordi/sekret/11937/alisa/,
русский рок,секрет,последний час декабря,,https://22.amdm.ru/akkordi/sekret/18894/posledniy_chas_dekabrya/,
детские песни,сохадзе,оранжевая песенка,ирма,https://www.5lad.ru/akkordy/detskie-pesni/oranzhevaya-pesnya,
русский рок,сплин,моё сердце,,https://22.amdm.ru/akkordi/splin/4912/moe_serdce/,
русский рок,сплин,орбит без сахара,,https://22.amdm.ru/akkordi/splin/1379/orbit_bez_sahara/,
зарубежное,стромае,алёна даст,,https://22.amdm.ru/akkordi/stromae/112042/alors_on_danse/,
зарубежное,стромае,tout les memes ,,https://22.amdm.ru/akkordi/stromae/106815/tous_les_memes/,
русская поп-музыка,стрыкало ,всё решено ,валентин,https://22.amdm.ru/akkordi/valentin_strykalo/101524/vsyo_resheno/,
русская поп-музыка,стрыкало ,наше лето (ялта август),валентин,https://22.amdm.ru/akkordi/valentin_strykalo/96904/nashe_leto/,
зарубежное,стрэнглерс,golden brown ,,https://22.amdm.ru/akkordi/stranglers/81549/golden_brown/,
русская поп-музыка,тату,покажи мне любовь,,https://22.amdm.ru/akkordi/taty/121203/ya_tvoya_ne_pervaya/,
советские песни,тенносаар,летка-енка (как-то ночью по пустой дороге),кальмер,https://22.amdm.ru/akkordi/garik_sykachev/110804/letka_enka/,
русская поп-музыка,трофимов,город сочи,сергей,https://22.amdm.ru/akkordi/trofim/92595/gorod_sochi/,
советские песни,трошин,подмосковные вечера,владимир,https://22.amdm.ru/akkordi/vladimir_troshin/143221/podmoskovnie_vechera/,
русский рок,трубецкой,ау-ау-ау,ляпис,https://22.amdm.ru/akkordi/lapis_trybeckoi/4807/au/,
русский рок,трубецкой,в платье белом,ляпис,https://22.amdm.ru/akkordi/lapis_trybeckoi/188716/v_plate_belom/,
русская поп-музыка,ума турман,девушка прасковья ,,https://22.amdm.ru/akkordi/umaturman/89630/praskovya/,
советские песни,утёсов,джаз-болельщик,леонид,https://mirpesen.com/ru/utesov-leonid/dzhaz-bolel-shhik.html,
советские песни,утёсов,дорогие москвичи,леонид,https://22.amdm.ru/akkordi/leonid_ytesov/159001/dorogie_moi_moskvichi/,
советские песни,утёсов,ленинградские мосты,леонид,https://www.ackordofmine.ru/index/leonid_utjosov_leningradskie_mosty_akkordy_k_pesne/0-9225,
советские песни,утёсов,мишка,леонид,"https://22.amdm.ru/akkordi/leonid_ytesov/167660/mishka_odessit/#:~:text=Dm%20Am%20%D0%92%D0%B5%D0%B4%D1%8C%20%D1%82%D1%8B%20%D0%BC%D0%BE%D1%80%D1%8F%D0%BA,%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B0%D1%80%D0%BD%D0%B8%D1%88%D0%BA%D0%B0%20%D0%B2%20%D0%B1%D1%83%D1%88%D0%BB%D0%B0%D1%82%D0%B8%D0%BA%D0%B5%20%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%BC.",
советские песни,утёсов,московские окна,леонид,https://22.amdm.ru/akkordi/raznye_pesni/6054/moskovskie_okna/,
советские песни,утёсов,одесский порт,леонид,https://www.oduvanchik.net/view_song.php?id=8100,
советские песни,утёсов,песня старого извозчика,леонид,https://22.amdm.ru/akkordi/raznye_pesni/4713/pesnya_starogo_izvozchika/,
советские песни,утёсов,"сердце, тебе не хочется покоя",леонид,https://22.amdm.ru/akkordi/leonid_ytesov/89877/kak_mnogo_devushek_horoshih/,
советские песни,утёсов,случайный вальс,леонид,https://www.5lad.ru/akkordy/leonid-utesov/sluchajnyj-vals,
советские песни,утёсов,у чёрного моря,леонид,https://22.amdm.ru/akkordi/leonid_ytesov/95664/u_chernogo_morya/,
советские песни,утёсов,утомлённое солнце,леонид,http://www.gitaristam.ru/accords/rus/theme/Kino/utomlennoe_solnce.text.htm,
русский рок,утро над вавилоном,в долгом поиске прекрасного далёка,,http://akkordbard.ru/poispolnitelem/2740-utro-nad-vavilonom/95972-utro-nad-vavilonom-v-dolgom-poiske,
зарубежное,фиджеральд,dream a little dream of me,элла,https://22.amdm.ru/akkordi/ella_fitzgerald/136230/dream_a_little_dream_of_me/,
советские песни,фрейндлих,у природы нет плохой погоды,алиса,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/14549/u_prirodi_net_plohoy_pogodi_kf_sluzhebniy_roman/#:~:text=%D0%92%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%3A%20Em%20Am%20B%20Em,E9%20%D0%92%20%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5%20%D0%BE%D0%B4%D0%B8%D0%BD%D0%BE%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C.",
советские песни,френкель,август (скоро осень),ян,https://22.amdm.ru/akkordi/nina_brodskaya/125408/avgust/,
советские песни,френкель,"журавли (мне кажется порою, что солдаты)",ян,https://22.amdm.ru/akkordi/voennye_armeyskie_pesni/139374/mne_kazhetsya_poroy_chto_soldati/,
русская поп-музыка,фриске,а на море белый песок,жанна,https://22.amdm.ru/akkordi/janna_friske/160736/a_na_more_beliy_pesok/,
русская поп-музыка,фриске,где-то летом звёзды нам улыбались,жанна,https://22.amdm.ru/akkordi/janna_friske/155849/gde_to_letom/,
русский рок,чайф,"бутылка кефира, полбатона",,https://22.amdm.ru/akkordi/chaif/136559/butilka_kefira_polbatona/,
зарубежное,чарльз,hit the road jack,рэй,https://22.amdm.ru/akkordi/charles_ray/106641/hit_the_road_jack/,
русский рок,чиж,вечная молодость,,https://22.amdm.ru/akkordi/chizh/1683/vechnaya_molodost/,
русский рок,чиж,мышка (колыбельная хиппи),,https://22.amdm.ru/akkordi/chizh/89269/mishka/,
русский рок,чиж,поход (два ангела вперёд),,https://22.amdm.ru/akkordi/chizh/113338/pohod/,
русский рок,чиж,фантом,,https://22.amdm.ru/akkordi/chizh/159398/fantom/,
детские песни,шаинский,если с другом вышел в путь,владимир,https://22.amdm.ru/akkordi/prikluchenia_elektronikov/5465/esli_s_drugom_vishel_v_put/,
детские песни,шаинский,учат в школе,владимир,http://www.notarhiv.ru/detskie/stranizi10/Chemuuchatvshkole.html,
детские песни,шаинский,чунга-чанга ,владимир,https://22.amdm.ru/akkordi/detskie_pesni/101370/chunga_changa/,
детские песни,шаинский ,вместе весело шагать ,владимир,https://22.amdm.ru/akkordi/raznye_pesni/23731/vmeste_veselo_shagat/,
русская поп-музыка,шарлот,щека на щеку,,https://22.amdm.ru/akkordi/sharlot/171245/shcheka_na_shcheku/,
русская поп-музыка,шуфутинский ,3-е сентября,михаил ,https://22.amdm.ru/akkordi/mihail_shufutinskiy/97629/3_sentyabrya/,
советские песни,ялла,учкудук,виа,https://22.amdm.ru/akkordi/yalla/100998/uchkuduk/,
детские песни,,пусть всегда будет (солнечный круг),,https://22.amdm.ru/akkordi/raznye_pesni/23538/pust_vsegda_budet_solnce/,
разное,,бублички,,http://akkordbard.ru/poispolnitelem/863-narodnye-pesni/71950-bublichki,
разное,,валенки ,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/90410/valenki/,
разное,,виновата ли я,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/144691/vinovata_li_ya/,
разное,,вот кто-то с горочки спустился,,"https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/102334/vot_kto_to_s_gorochki_spustilsya/#:~:text=%D0%B8%20%D0%B7%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-,%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D0%B7%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8%20%2D%20%D0%92%D0%BE%D1%82%20%D0%BA%D1%82%D0%BE,%D1%82%D0%BE%20%D1%81%20%D0%B3%D0%BE%D1%80%D0%BE%D1%87%D0%BA%D0%B8%20%D1%81%D0%BF%D1%83%D1%81%D1%82%D0%B8%D0%BB%D1%81%D1%8F%2C%20%D0%B0%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D1%8B&text=Am%20E7%20Am%20E7%20Am,%D0%9E%D0%BD%D0%B0%20%D1%81%20%D1%83%D0%BC%D0%B0%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D1%81%D0%B2%D0%B5%D0%B4%D0%B5%D1%82.",
разное,,за окном черемуха колышется,,https://22.amdm.ru/akkordi/nadezhda_kadisheva/177647/pod_oknom_cheryomuha_kolishetsya/,
разное,,"каким ты был, таким остался",,"https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/14279/kakim_ti_bil/#:~:text=A7%20Dm%20Gm%20A7%20Dm,%D0%A7%D1%82%D0%BE%20%D0%BD%D0%B5%D1%82%D1%83%20%D1%81%D0%B8%D0%BB%20%D1%82%D0%B5%D0%B1%D1%8F%20%D0%B7%D0%B0%D0%B1%D1%8B%D1%82%D1%8C.",
разное,,коробейники,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/139487/korobeyniki/,
разное,,крутится вертится шар голубой,,"https://22.amdm.ru/akkordi/pesni_iz_kino_i_multfilmov/146541/krutitsya_vertitsya_shar_goluboy_kf_trilogiya_o_maksime/#:~:text=%D0%B1%D0%B0%D1%80%D1%8B%D1%88%D0%BD%D1%8E%20%D1%85%D0%BE%D1%87%D0%B5%D1%82%20%D1%83%D0%BA%D1%80%D0%B0%D1%81%D1%82%D1%8C.-,Am%20%D0%9A%D1%80%D1%83%D1%82%D0%B8%D1%82%D1%81%D1%8F%2C%20%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D1%82%D1%81%D1%8F%20%D1%88%D0%B0%D1%80%20%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9%2C%20Dm%20Am%20%D0%9A%D1%80%D1%83%D1%82%D0%B8%D1%82%D1%81%D1%8F%2C%20%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D1%82%D1%81%D1%8F,A7%20%D0%91%D0%B0%D1%80%D1%8B%D1%88%D0%BD%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%20%D0%BF%D1%80%D0%B8%D0%B4%D1%91%D1%82%D1%81%D1%8F%20%D1%83%D0%BA%D1%80%D0%B0%D1%81%D1%82%D1%8C.",
разное,,миленький ты мой,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/90482/milenkiy_ti_moy/,
разное,,мой костёр в тумане светит,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/192981/moy_koster_v_tumane_svetit/,
разное,,москва златоглавая (конфетки бараночки),,https://mytabs.ru/akkordy/v-r/vladimir-troshin/moskva-zlatoglavaya_360862.html,
разное,,мурка,,https://22.amdm.ru/akkordi/blatnye_pesni/15152/murka/,
разное,,ой то не вечер,,"https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/166044/oy_to_ne_vecher/#:~:text=Am%20E%20%D0%9E%D0%B9%2C%20%D1%82%D0%BE%20%D0%BD%D0%B5%20%D0%B2%D0%B5%D1%87%D0%B5%D1%80.,%D0%9E%D1%85%2C%20%D0%B4%D0%B0%20%D0%B2%D0%BE%20%D1%81%D0%BD%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B8%D0%B4%D0%B5%D0%BB%D0%BE%D1%81%D1%8C.",
разное,,ой цветёт калина в поле у ручья,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/24295/oy_cvetet_kalina/,
разное,,очи чёрные,,https://www.google.com/search?q=%D0%BE%D1%87%D0%B8+%D1%87%D1%91%D1%80%D0%BD%D1%8B%D0%B5+%D0%B0%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D1%8B&oq=%D0%BE%D1%87%D1%82+%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B5+&aqs=chrome.3.69i57j46i13i512j0i13i512l2j46i13i512j0i13i512l3j46i13i512j0i13i512l4j0i13i30.5152j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8,
разное,,сулико,,https://22.amdm.ru/akkordi/kalevala/126484/ti_zh_mene_pidmanula/,
разное,,ты ж мэнэ пидманула,,https://22.amdm.ru/akkordi/kalevala/126484/ti_zh_mene_pidmanula/,
разное,,цыпленок жареный,,https://22.amdm.ru/akkordi/andrey_makarevich/123334/ciplyonok_zhareniy/,
разное,,чёрный ворон,,https://22.amdm.ru/akkordi/narodnye_i_zastolnye_pesni/173363/cherniy_voron/,
советские песни,,вечер на рейде (прощай любимый город),,https://22.amdm.ru/akkordi/vasiliy_petrovich_vorobjev-sedoy/165397/vecher_na_reyde_avtor_slov_aleksandr_churkin/,`);

  const page = document.getElementsByClassName('justify-content-center')[0];
  const openLyrics = (url) => window.open(url, '_blank').focus();
  const searchBar = document.getElementById('search');

  // massive and ugly cycle, that goes
  // through our songbook-data and
  // creates all the data div-blocks
  for(let i = 0; i < songs.length; i++) {
    const div = document.createElement("div");
    if (songs[i]['ссылка'] != '') {
        div.style.cursor = 'pointer';
        div.addEventListener('click', () => {
        openLyrics(songs[i]['ссылка']);
        })
    } else {console.log(`аккордов для ${songs[i]['исполнитель']} ${songs[i]['песня']} нету`)}
    div.className = "col";
    div.setAttribute("id", String(i));
    div.classList.add("box");

    const artist = document.createElement ('p');
    artist.innerText = songs[i]['имя'] + ' ' + songs[i]['исполнитель'];
    if (artist.innerText == ' ') {artist.innerText = 'неизвестен'}
    const songName = document.createElement ('h5');
    songName.innerText = songs[i]['песня'];
    if (songName.innerText == ' ') {songName.innerText = 'без названия'}
    div.appendChild(artist);
    div.appendChild(songName);

    switch (songs[i]['рубрика']){
        case 'советские песни':
            div.classList.add('alizarin');
            break;
        case 'русский рок':
            div.classList.add('wisteria');
            break;
        case 'детские песни':
            div.classList.add('belizehole');
            break;
        case 'зарубежное':
            div.classList.add('emerland');
            break;
         case 'русская поп-музыка':
            div.classList.add('grey');
            break;
        case 'разное':
            div.classList.add('sunflower');
            break;
    };

    page.appendChild(div);
  }

  let song;
  let button = document.getElementById('button');

  // adding eventListeners to all the categories
  // so that they influence the randomSong button
  let checkboxes = document.querySelectorAll('[type="checkbox"]');
  for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function(){
        allSongs.map(el => el.classList.contains('found') ? el.classList.toggle('found') : el)
        searchBar.value = '';
        if (song != undefined) { // hiding randomSong
            if (song.classList.contains('selected')){
                song.classList.toggle('selected');
            }
        }
        checkboxes[i].classList.toggle('ischecked')
        // button.style = "opacity: 0; visibility: hidden";

        let ifChecked = 0; // how many categories are selected
        for(let j = 0; j < checkboxes.length; j++){
            if (checkboxes[j].classList.contains('ischecked')) {
                ifChecked++;
            }
        }
        if (ifChecked == 0) {
            button.style = "display: ''"
        } else {
            button.style = "display: none"
        }
    });
  }


  // can be activated  from web-page only when
  // there is no song displayed
  const allSongs = Array.from(document.getElementsByClassName('box'));
  const randomSong = () => {
    if (song != undefined) { // надо прописать заново, чтобы не множились песни при нескольких кликах
        if (song.classList.contains('selected')){
            song.classList.toggle('selected');
        }
    }
    allSongs.map(el => el.classList.contains('found') ? el.classList.toggle('found') : el)
    searchBar.value = '';
    const index = Math.floor(Math.random() * songs.length);
    song = document.getElementById(String(index));
    song.classList.toggle('selected');
    // console.log(song);
};

const goBack = document.getElementById('back');
goBack.addEventListener('click', function() {window.location.href = './'})


