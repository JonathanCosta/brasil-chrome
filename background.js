//dados
var textoPequeno = "Augue in amet lectus etiam sit, augue adipiscing? Placerat? Arcu a placerat massa placerat ridiculus lorem sagittis vel quis odio, dolor sit! Natoque turpis augue proin a elit magna et cras ac, vel non dignissim dis, odio porta nec mauris. Aliquam et, dolor pulvinar, tristique nascetur vel pulvinar rhoncus velit, scelerisque amet elit cursus egestas? Sagittis nisi augue arcu quis, lorem augue a eros pid magna etiam nec pulvinar nec. Proin lacus lundium, nunc tincidunt magna odio sed. Ultrices ut sed massa! Sit integer turpis a, elementum sagittis, odio pulvinar, nascetur phasellus cras dolor ultricies? In? Non mattis, nunc, magna.";
var nomes = ["Maria", "José", "Antônio", "João", "Francisco", "Ana", "Luiz", "Paulo", "Carlos", "Manoel", "Francisca", "Pedro", "Marcos", "Raimundo", "Sebastião",
			"Antônia", "Marcelo", "Jorge", "Márcia", "Geraldo", "Adriana", "Sandra", "Luis", "Fernando", "Fabio", "Roberto", "Márcio", "Edson", "André",
			"Sérgio", "Josefa", "Patrícia", "Daniel", "Rodrigo", "Rafael", "Joaquim", "Vera", "Ricardo", "Eduardo", "Terezinha", "Sônia", "Renato", "Carolina",
			"Ivan", "Alexandre", "Cléber",
			"Gress Susa","Thales Hatem","Leo Sanacar","Humberto Costa","Bryan Rubiano Lozada","Isabella Mendonça","Raymond Antje Sandemann",
			"Marco Antônio Coelho Dias","Gabriela Emiliana","Carolina Neumann","Alysium Harris","Spike Cassidy","Debora Gomes de Oliveira",
			"Olga Akselrad","Alain García","Isræl Carmona Rangel","Abel Nightroad","Guilherme De Azevedo Silveira","Carolina Gama",
			"Stephanie Vikernes","Hammurabi Mendes","Rafael Camargo","Carolina De Villa Nova Japiassu","Lobotomia Banda","Fabrício Muriana",
			"Neuton Martins Costa","Hugo Luis Gómez Trinidad","Ana Luísa Holanda de Albuquerque","Pedro Duprat","Maurício Bastos Júnior",
			"Márcio Elias Bittar Júnior","Isabela Del Corso","Stefan Kelly","Gabriel Menezes","Taiom Qtqt","Marcos Karpinski",
			"Kriis Iun Zavala","Jorge Mera Thrash Leyend","Sariux Rivera","Juliana Abraços","Kyle Braun","Elif Nayampi",
			"Orélio Antônio Saraiva","Carol Nóbrega","Dario Viola","Waleska Aragão Lelis","Renato Cesar Fontana",
			"Federico FedEx Festa","João André","Paloma Galvão","Karina Rocha","Mina Salas","Alessia Casotti","Cintia Azalini",
			"Rômulo Araújo","Graziele Soares Delmasso","Isabela Oliveira","Arthur Heleno","Thiago Versiani Amorim","Gabriel Loyola",
			"Jay Teixeira","Alejo Drums","Oswaldo Diaz Quijada","Gianfranco Zavarce","Ivan Lobato Stormbringer","Carol Kairala",
			"Mariana Alberti","Antonio Tascón González","Paraquedismo Brasília","Leila Veiga","Renata Rossignoli",
			"Gláucia Beatriz Freitas","Paula Feijó de Medeiros","Fozzy Michael Urbanski","Lucas Vinicius",
			"Raquel Campos","Diego Lima","Michelle Melo","HeadThrash Cuiabá","Daniel Matos","Itana Gama","Carolina Rezende",
			"Elvis Carlos Oliveira","Luciana Nasser","Henrique Chaves","Paulo Brambilla","Alexandre Quintão","Antonietta Casotti",
			"Fernanda Freitas","Amanda Castillo","Vitor Lanza Veloso","Durs Missett","Fábio Gomes Filho","Rose Contreras Cisneros",
			"Jürg Bühler","Thamer Hatem","Ana Cláudia","Dave Hernandez Medellin","Igor De Oliveira Poty","Sílvia DO Théo",
			"Marcelo Augusto","Ivan Aires","Geraldo Ferraz","Christian Trejo","Acid Speech","Sanmya Noronha","Emanuella Mendonça",
			"Marco Vigilante","Moy Salas","Ananda Luizä","Marcela Susã Pimenta","Karoline Alves","Alexandre Gomide","Dani Leony",
			"Banda Silva","Edgar Molas","Adriana Santos","Rafael Boschetti","Manoel NeTo","Ian Bemolator","Stephanie Evangelista",
			"Tricia Knight","Gabi Da'Fré","Luis Gustavo Carvalho","Julia Soier","Rosamelia Pereira Costa","Neresty Orgiba",
			"Oldskull Thrash","Joel Guilherme","Alexandre Taitson Moreira","Enrico Rebostini","Leonardo Saldiva","Urana Chimaera",
			"Montanha Mxk","Laís de Sant'Ana","Priscila Jacob","Eduardo Negri","Daniel Di Pilla Montibello","Letícia Kasahaya",
			"Pedro Hélio","Regina Vallego","Lew Segadilha","Eduardo Lopes Leite Júnior","Eugenio Barboza","Luigi Pedroni",
			"David S. Araya","Bielly Cardozo","Everton Fernandes","Monique Lopo","Miyuki Tai","Adolfo Espejel","Mário Alves",
			"Waldeyres Oliveira","Luis Gustavo Nova","Élcio Rockers","Adriane Landwehr","Ludmila Pessoa","Wanderlan Santos Dos Anjos",
			"Carolina Pinedo","Nayara Araújo","Guilherme Breda","Daniel Maia Franco","Jennifer Way","Mirna Nobrega","Márcio Cambito",
			"Cícero Artifon","Valeria Nava","Caio Lemos Renault","Jorge Santana Grimaldi Grimaldi","Emanuele Campelo","Patrícia Tavares",
			"Diego Nogueira Sábio","Ekab Meade","Nemonaz Alto En Fuego","Jefferson Morais","Flávia Pimentel","Renato Azevedo",
			"Victor Khodr Lobo","Adriana Drummond Vivan","Bárbara Anjos","Mauro Mendonça","Fátima Barboza","Esther Galvão","Fabio Meneses",
			"Augusto Azevedo","Rafaela Dantas","Patrícia Carvalho","Mateus Kovalski de Moura","Nicole Marinho","Daniella Moura",
			"Fernando Igor Lisboa","Tamires Moreira","Liz Javier Alvarado","Patricia Moscariello Rodrigues","Fernanda Garcia",
			"Jacky Lisboa","Eloísa Horsth","Ana Júlia Osório Simões","Léo Anjos","Ana Paula Saad","Edgard Felipe","Itana Gama",
			"Anthony Marques","Pollyana Sá","Danniel Pedro","Gabriel Oliveira Simões","Natalia Cristina","Cláudia Mendonça","Castro Manrikez",
			"Gabriel Piau","Tábata Coló","Isael Serra","Joel Ya","Jorge Valenzuela","Alan Monteiro","Igor Rodrigues","Fernanda Amorim",
			"Marco Contreras","Daniela Carauta","Fernanda Buriol","William Fernandes","Felipe Nizuma","Julia Wanderley Peixoto",
			"Cristiane Silva","Mario Deth Pérez","Marcella Mendonça","Gustavo Licursi","Tormenter Speed Thrash","Tatiana Paternostro","Viviane Rezende",
			"Jessika Rodrigues","Lourenço Sant'Anna","Raphael Lacerda","Rodrigo Alaby","Elissandra Bueno","Camila Bogaz","Gustavo Pinheiro",
			"Xitus Girelli Coelho","Daniella Gama","Omar Cabrera","Envenomed Thrash","Guilherme Bicalho","Ryan Taylor","Emanuela Flores",
			"Ana Cândida Pena","Mariana Helou","MoOnsterz Ozzy","Marcia Gama","Caio Luiz Figueira","Ixchel Peralta Zuno","Hatus Souza Alves",
			"Maíra Guimarães","Thalita Bárbara","Guilherme Pinheiro","Sinval Silva","Marie Honda","Diego D Lucca","Denise De Luccas Gama",
			"Luísa Pecce Bento","Pedro Oliveira","Stephanie Rayna","Weslei Watanabe Macêdo","Fabiana Lauxen","Eliane Baeta Mendonça",
			"Tiago Tiveron","Juan Carlos Gonzalez","Gabriel Nunes","Júlio César Baron","Sílvia Santos","Thiago Bentes","Tiago Barbosa",
			"John Gomez","Lucca Ramalho","Luis Martinez","Phelippe Amorim","Felipe Loyola Mazzaro","Francisco Borja","Lucas Alves",
			"Lucas Brasil","Lanna Carolina Oliveira","Jessica Diaz","Execution Thrash","Katon Hirax","André Xexeu","Paula Cardoso","Caio Homar",
			"Louise Cugula","Carolina Maria Neves","M Guillermo Andrade","Marly Pereira de Jesus","Stephanie Hardt Bahr","Nadja Lopes",
			"Marcelo Nicolas Martinovich","Aline Daísa Lang","Psicologia Ana Paula Saad","Godines Moisés","Fábio Cota","Renato Da Silva",
			"Renan Humberto de Souza","Dib Franciss","Ivan Montini","Casarini Vilela","Bry Punky","Romario Araujo","Gleyce Ferreira","Mari Bierk",
			"Raphael S. C. Pinto","Tiago De Azevedo Britto","Marcos Do Vale","Jonas Zuffo Requião","Isnard Onofre","Laura Mendonça",
			"Vivian Leigh Oliveira Barboza","Gustavo Lima","Renan Carvalho","Guilherme Mazzaro","Joao Ricardo","Vernet Viridiann",
			"Mergulho No Céu Paraquedismo","Bruna Ruzzante","Luis Angelo Soryeri","Amanda Mendonça T. Reiysz","Ana Iaci","Felipe Paim",
			"Maysa Fleur","João Paulo Lion Sousa","Canibal Zuñiga","Matt Rosar","Felipe Coelho","Wilkerson Paulino","Denis Gamell",
			"Daniel Manyari","Isabella Duarte","Gabriella Bevilacqua","Marceli Terra","Giovanna Castro","Camilo Bonifácio","Brooke Maire Villemaire",
			"Marcus Beto","Denys Aragão","Jams Estudio","Kamilla Llurda","Sierra Bailey","Judson De Almeida Rodrigues","André Luís Carvalho","Keyla Liana",
			"Marina Costa","Larissa Barbosa","Fundação Athos Bulcão","Felipe Torres","Giordanno Martins","Wey Bonito","Felipe Castro","Doomnilo Crust",
			"Graciliano Prazim Silveira","Helen Cristina","Yuri Del Duca","Marina Rabello","Luan Lima","Chucha Cuerera","Cassiano Pizarro","Priscila Chinaski",
			"Daniel Martins","Caroline Palomares","Ramon Bedim","Thiago Rocha","Allison Belle Devoura","Jéssika Montanha","Gledston Junior",
			"Luísa Lemos Pimentel","Ana Paula Machado","Paula Fontes","Agivanda Rodrigues","Pesticide DeathMetal","Thiago Onofre","Flavia Lima",
			"Christopher Atomic-Thrasher","Hell Queiroz","Taciana Gama","Marcondes Silva de Oliveira","Rafael Bruno Dalla Libera Monteiro",
			"Danilo Queiroz","Critical Fear Thrash","Jessi de Souza","Milk Man","Elaine Aude","XLaurox A. Kushiyama","Mayra Caroline",
			"Robert Landberg","Perci Moraes Critical Fear","Coral de Espíritos","Fabio Headbanger","DarkHell Thrasher","Júlia Morais",
			"Tarcila Andrade","Gabriela Gama","Jú Frigatto","Jefferson Silva","Castro Henrique","Flávia F. G. Carvalho","Marcela Carvalho",
			"Ivone F. G. Carvalho","Eduardo Amorim","Maria Fernanda Velloso","Jef Bussens","TheForce Paraguay","Pedro Mendonça","Diego Alcon",
			"Rodrigo Costa","Roger Palomares","Bianca Pan Steeler","Thales Gomes","Júlia Barboza","Paco Ordog","Nara Fernanda Justiniano",
			"Introtyl Mx","Priscila Bachega","Miro Rebellion","Aline Mendonça","Flavia Lopes","Rodrigo Silva","Rafael Ricardi","José Eduardo Teixeira",
			"Fabiano Sousa","Gustavo Cecílio Lopes","Anne Gabriel","Projeto Play","Karina Rigaud","Renan Marchesini","Mirela Sanchez","Samuel Lobo",
			"Pedro Poney","Julia Montezano Palhares","Katon Hirax","Amanda Rigaud","Pedro Neto de Oliveira","Daniel Santos","Rafaela Portela",
			"Rafael Costa","Gabriela Ruzzante R. Santos","Ray Fernandez","Stéphanie Corsi","Theo Cardoso","Christy Cugula","Yss Salas",
			"Raíssa Moura Carrilho","Caren Arantes","Isabel MetalGrowls","Ana Paula","Executer Thrash","Camila Bennet","Bianca Luara",
			"Si Oliva","Romário Carvalho","Fernando Kavera","Anna Carolina Vilas Boas","Valeska Barreto","Rodrigo Persépolis",
			"Felipe Posercrüsher","Lucas Barbosa","Eve Skull","Gabriel Zenon","Daniela Cristina","Hugo Tomiyoshi","Alexandre Barros Monteiro",
			"Sabrina Vieira","David Alves","Dafny Macedo","Ivan Espindola","André Vinícius","Amanda Ulysses","Lore Maníaca",
			"Erika Paola Pereira Silva","B'Skull SpeedMetal","Rebeca Maiden","Bruno César César","Matt Driedger","Inaldo Falcão Gama",
			"Guilherme Peregrino Lunkes","Katia Lisboa","Joao Dias Coelho Junior","Karla Beatriz","Leandro Patão","Leticia Shaadow",
			"Wendy Cázares","Joseph Crue","Raffaly Rodrigo","Junior Gaetho","Cicero Augusto","Silas Coelho","Kel Santos","Ma Splatterhead",
			"Jeffer Ayres","Fabricio Fernandes","Vera Lúcia Andrade","Baltazar Mendonça","Willian Christian","Nemonaz Abdul Jabbar","Rafael Lima",
			"Murillo Viana","Jessica Almeida","Ozwall Days Jaw","Granaten Timm","Apoliana Silva Lima","Enzo Pinheiro","Jean Necromansy",
			"Evan Dexter","Rafael Duarte","Luiz Souza","Mireia Maia","Pires Monalisa","Antonio Rolldão","Anna Carolina Vilas Boas",
			"Priscilla Lee Burton","Fulanoso Da Silva Cardoso","Raw Recs","Baraldi Jose Alberto Higa","Régis Piercer Bodypiercing","Letícia Franco",
			"Alesanderson Capivara do Mato Pascoal de Souza",
			"Adalberto Churrasco",
			"Andréia Floresta Negra",
			"Abecê Nogueira",
			"Abrilina Décima Nona Caçapavana Piratininga de Almeida",
			"Acheropita Papazone ",
			"Adeandresa Santos Nascimento",
			"Adeandreson Santos Nascimento (irmão da Adeandresa)",
			"Adegesto Pataca",
			"Aeronauta Barata",
			"Agrícola Beterraba",
			"Addae",
			"Alce Barbuda ",
			"Aldegunda Carames Mole (Masculino)",
			"Aleluia Sarango ",
			"Além Mar Paranhos",
			"Alfredo Prazeirozo Texugueiro",
			"Alma de Vera ",
			"Alessandra Bebe Safado Pinho Piriguete",
			"Amado Amoroso ",
			"Amazonas Rio do Brasil Pimpão",
			"Ambrusina Sobrinha",
			"América do Sul Brasil de Santana",
			"Amim Amou Amado ",
			"Amor de Deus Rosales Brasil (feminino) ",
			"Ana Maria Mosca ",
			"Analgesina Costa Pinto",
			"Andrés Urdangarin Dorronsoro ",
			"Angústias Árias",
			"Antenor da Cotinha",
			"Antônio Americano do Brasil Mineiro ",
			"Antonio Buceta Agudim ",
			"Antonio Camisão ",
			"Antônio Dodói",
			"Antônio Ernane Cacique de New York ",
			"Antônio Manso Pacífico de Oliveira Sossegado ",
			"Antônio Noites e Dias ",
			"Antônio Pechincha ",
			"Antônio Treze de Junho de Mil Novecentos e Dezessete",
			"Antônio Querido Fracasso ",
			"Antoniozin Fogaça",
			"Apurinã da Floresta Brasileira",
			"Araci do Precioso Sangue",
			"Argonauta Sucupira",
			"Aricléia Café Chá",
			"Arnaldo Queijo ",
			"Arquiteclínio Petrocoquínio de Andrade",
			"Asteróide Silvério",
			"Audobrantina Moema Cearenciana",
			"Ausêncio Nogueira",
			"Avagina (em homenagem a Ava Gardner e Gina Lolobrigida)",
			"Araúto do Charuto Fedido",
			"Ausbkhiyshueiz Estranho da Silva",
			"Austeclino Magalhães Barros",
			"Austeclino Magalhães Barros Júnior",
			"Alambique Cachaça da Boa Ressaca",
			"Barrigudinha Seleida",
			"Bende Sande Branquinho Maracajá",
			"Benedito Frôscolo Jovino de Almeida Aimbaré Militão de Souza Baruel de Itaparica Boré Fomi de Tucunduvá",
			"Benemérita do Rêgo Grande",
			"Benvinda Olga ",
			"Boaventura Torrada",
			"Brígida de Samora Mora Belderagas Piruégas de Alfim Cerqueira Borges Cabral",
			"Brizabela Alves",
			"Bronsibel Ribeiro de Sena",
			"Bucetildes",
			"Coel Lhinho Da Páscoa",
			"Cafiaspirina Cruz",
			"Caio Pinto",
			"Caius Marcius Africanus",
			"Capote Valente ",
			"Carabino Tiro Certo ",
			"Caravagina DosBago Grande",
			"Carícia Temporal",
			"Carlos Alberto Santíssimo Sacramento Cantinho da Vila Alencar da Corte Real Sampaio Carneiro de Souza e Faro",
			"Castellinch Von Nekro",
			"Castro Pinto",
			"Cavalo Antônio",
			"Celene Lua ",
			"César Augusto Nascimento de Oliveira Chaves Pereira da Silva Pinheiro Leite Alencar Bertotto Otaviano Soares da Silva (de novo) Fonseca Vieira do Nascimento de Souza",
			"Céu Azul do Sol Poente",
			"Chana Masson",
			"Chevrolet da Silva Ford",
			"Chuck Norris Junior",
			"Cibele Sol",
			"Claribel Clarinildo Clarêncio",
			"Colapso Cardíaco da Silva ",
			"Cólica de Jesus",
			"Comigo é Nove na Garrucha Trouxada ",
			"Conadura Ferreira Mole",
			"Creosméria Emansueta",
			"Crisoprasso Compasso",
			"David Leão Pão Trigo",
			"Delícia Costa Melo",
			"Deusarina Vênus de Milo",
			"Dezêncio Feverêncio de Oitenta e Cinco ",
			"Diana Soppa ",
			"Dinossauro Carlos da Silva",
			"Diva Gina Santos",
			"Divina Anunciação",
			"Dona Maria Buceta",
			"Daniel Dperet Antunes",
			"Deteriovaldo Antunes Braga",
			"Dominador das Dores",
			"Extratovarius",
			"Edna Boa Sorte",
			"Elacervandro Gomes",
			"Eliene Bubina",
			"Emerson Capaz ",
			"Eneas",
			"Eraldonclóbes ",
			"Espere em Deus Mateus ",
			"Éter Sulfúrico Amazonino",
			"Eva Gina Melo",
			"Estrobilobaldo das Frutas Graúdas",
			"Esperança Reis Lavigne ",
			"Euliclênssio Babozo",
			"Espermatocleide",
			"Espe Bola Gorda",
			"Estabilizador das Dores",
			"Faraó do Egito de Souza",
			"Fé Esperança e Caridade",
			"Felicidade do Lar Brasileiro",
			"Flávio Cavalcante Rei da Televisão",
			"Feliz o dia do seu aniversario",
			"Frigobar Beneditino",
			"Galenogal de Silva ",
			"Gengis Khan Camargo",
			"Gerunda Gerundina Pif Paf",
			"Gilete Queiroga de Castro",
			"Godofredo Felisbino Pinto Rosa",
			"Gol Santana Silva",
			"Graciosa Rodela",
			"Heldslaiene Braian Hermógenes Alves",
			"Hepotamedes Maria Good God",
			"Hidráulico Oliveira",
			"Himeneu Casamenteiro das Dores Conjugais",
			"Hindianajones Silva",
			"Hiprafodito da Silva",
			"Honesta Honestina Maria de Souza ",
			"Horinando Pedroso Ramos",
			"Hilderjackson",
			"Hypotenusa Pereira",
			"Ilegível Inilegível",
			"Inocêncio Coitadinho Sossegado",
			"Irisdelfane Clei ",
			"Isabel Rainha da Hungria Portugal Silva",
			"Ithanarrakan",
			"Ivandilson",
			"Jacinto Leite Aquino Rêgo",
			"Jacinto Leite e Pinto Aquino Rêgo",
			"Jeremias José do Nascimento",
			"Liberdade Igualdade Fraternidade Nova York Rocha ",
			"Lindulfo Colodônio",
			"Loprefâncio Celestino Jacy de Almeida ",
			"Luciana Torpedo ",
			"Luis Grampeado",
			"Luiz Tripador",
			"Luiz Rêgo Grande",
			"Luzitano Mêndes Cristo",
			"Lambreta Catejano",
			"Manoel de Hora Pontual",
			"Manoel Sovaco de Gambar",
			"Manuelina Terebentina Capitulina de Jesus Amor Divino",
			"Maria Crisantina",
			"Maria Cristina do Pinto Magro ",
			"Maria da Boa Morte ",
			"Maria da Segunda Distração ",
			"Maria do Seu Pereira ",
			"Maria do Sô Anternor",
			"Maria Esposa de Jesus",
			"Maria Panela",
			"Maria Passa Cantando",
			"Maria Suvaqueira da Suaman",
			"Maria Tributina Prostituta Cataerva",
			"Marília Bagdá Tostada ",
			"Marília dos Prazeres ",
			"Marimbondo da Trindade",
			"Marcos José de Almeida Alombrado",
			"Marlindo Calafanges Fagundes",
			"Menelau Rima com Pau ",
			"Meidinusa(Made in U.S.A.) Soares",
			"Nailha Sevetudo",
			"Naida Navinda Navolta Pereira ",
			"Napoleão Bonaparte Sem Medo e Sem Mácula ",
			"Necrotério Pereira da Silva",
			"Natália Bebiágua de Rios",
			"Nana Naninha Nenê",
			"Nana People de Alpeida",
			"Obedemigo Pereira, ",
			"Omenzinha Maria José ",
			"Oceano Pacífico",
			"Ocricócrides de Albuquerque ",
			"Olinda Barba de Jesus,",
			"Orlando Modesto Pinto ",
			"Orquerio Cassapietra ",
			"Ostavíoco Segundos das Dores Malditas",
			"Otávio Bundasseca",
			"Padre Filho do Espírito Santo Amém",
			"Pafôncio Felisbino Fávero",
			"Pália Pélia Pólia Púlia dos Guimarães Peixoto",
			"Passos Dias Aguiar ",
			"Paulo Tapioca ",
			"Percilina Pretextata Predileta Protestante",
			"Placenta Maricórnia da Letra Pi",
			"Plácido e Seus Companheiros ",
			"Pedro dos Prazeres Calafanges",
			"Pênisvaldo da Oliveira Podre",
			"Produto do Amor de Mariana e Maribel",
			"Priscila Pinto Máximo Balieiro",
			"Privada Perera da Silva",
			"Queijo Pedroso Das Tortas",
			"Queridinho da Mamãe Jr.",
			"Rolin Rolão Roleta",
			"Raphzia latiff oliveira gomes",
			"Radigunda Cercerá Vicence ",
			"Rafizia Fernanda Albuquerque",
			"Railander da Silva ",
			"Raucilene Quinto Ferreira ",
			"Rayclinge Luiz Viana Rocha ",
			"Remédio Amargo ",
			"Ressurgente Monte Santos ",
			"Restos Mortais de Catarina ",
			"Rita Marciana Arrotéia ",
			"Roberto Lutaseuvicius ",
			"Rocambole Simionato ",
			"Rodrigo Datora Musha",
			"Rolando Caio da Rocha ",
			"Rolando Escada Abaixo",
			"Romixinaide",
			"Rômulo Reme Remildo Rodo",
			"Rossano na Butchaca",
			"Sangue Sungue Celulari",
			"Safira Azul Esverdeada ",
			"Sandyjunior da Silva (menina de SP)",
			"Sansão Chazan ",
			"Sasha Meneghel",
			"Scarombone Alves Moreno ",
			"Sebastião Salgado Doce ",
			"Segundo Avelino Peito ",
			"Segundo Clenildo Rodrigues ",
			"Serdeberão dos Anjos ",
			"Sete Chagas de Jesus e Salve Patria ",
			"Sherlock Homes da Silva ",
			"Simplício Simplório da Simplicidade Simples ",
			"Soncórdio Luciano ",
			"Soraiadite das Duas a Primeira ",
			"Sorgelândio Brito do Carmo",
			"Sueli Treta ",
			"Suerda de Paula B Nogueira ",
			"Suetônio Sebastopol Leite do Vale",
			"Telésforo de Pina Castelo Branco",
			"Telesforo Veras ",
			"Terprando Wilson Rêgo ",
			"Tertuliano Firgufino ",
			"Tigalphinezer Fernando Lima ",
			"Tom Mix Bala",
			"Tomás Turbando Pinto ",
			"Tranquilo Rico ",
			"Tropicão de Almeida ",
			"Tuzleuda Fragalhães",
			"Um Dois Três de Oliveira Quatro",
			"Uélitu Silva",
			"Uóxitu Nogueira",
			"Valdisnei da Silva",
			"Vicente Mais ou Menos de Sousa ",
			"Vitinha Caixote",
			"Voltaire Rebelado de França",
			"Vandercleide Bundassuja",
			"Xequenxiana del a Calhaque",
			"Xuxa Meneghel",
			"Zeteônzio Calaboca"];

//utils
function getRandomArbitary (min, max) { return Math.random() * (max - min) + min; }
function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function gera_random(n) { var ranNum = Math.round(Math.random()*n); return ranNum; }
function mod(dividendo,divisor) { return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor)); }
function obterStringAleatoria(quantidade) {
	var chars = 'abcdefghijklmnopqrstuvwxyz'; 
	var retorno = '';
  
	while (quantidade > 0) {
		retorno += chars[gera_random(25)];
		
		quantidade--;
	}

	return retorno;
};

//geradores
function placa() {
	return obterStringAleatoria(3).toUpperCase() + "-" + 
		getRandomInt(0, 9) +
		getRandomInt(0, 9) +
		getRandomInt(0, 9) +
		getRandomInt(0, 9);
};
function cpf() { var n = 9; var n1 = gera_random(n); var n2 = gera_random(n); var n3 = gera_random(n); var n4 = gera_random(n); var n5 = gera_random(n); var n6 = gera_random(n); var n7 = gera_random(n); var n8 = gera_random(n); var n9 = gera_random(n); var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10; d1 = 11 - ( mod(d1,11) ); if (d1>=10) d1 = 0; var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11; d2 = 11 - ( mod(d2,11) ); if (d2>=10) d2 = 0; return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2; }
function cnpj() { var n = 9; var n1 = gera_random(n); var n2 = gera_random(n); var n3 = gera_random(n); var n4 = gera_random(n); var n5 = gera_random(n); var n6 = gera_random(n); var n7 = gera_random(n); var n8 = gera_random(n); var n9 = 0; var n10 = 0; var n11 = 0; var n12 = 1; var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5; d1 = 11 - ( mod(d1,11) ); if (d1>=10) d1 = 0; var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6; d2 = 11 - ( mod(d2,11) ); if (d2>=10) d2 = 0; return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2; }
function telefone(){
	return "(" + getRandomInt(1, 9) + getRandomInt(0, 9) + ") " +
	getRandomInt(1, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) + "-" +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9);
};
function cep(){
	return "" + getRandomInt(1, 9) +
	getRandomInt(0, 9) + "." +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) + "-" +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9);
}
function nome(){
	return nomes[getRandomInt(0, nomes.length)];
};
function email(){
	return obterStringAleatoria(16) + "@example.com";
};


chrome.contextMenus.create({"title": "Nome", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, nome());
}});

chrome.contextMenus.create({"title": "Cpf", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cpf());
}});

chrome.contextMenus.create({"title": "Cnpj", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cnpj());
}});

chrome.contextMenus.create({"title": "Telefone", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, telefone());
}});

chrome.contextMenus.create({"title": "Email", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, email());
}});

chrome.contextMenus.create({"title": "Cep", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cep());
}});

chrome.contextMenus.create({"title": "Placa", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, placa());
}});

chrome.contextMenus.create({"title": "Texto Pequeno", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, textoPequeno);
}});
