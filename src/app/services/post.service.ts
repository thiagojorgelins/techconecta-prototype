import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Array<Post> = [
    {
      id:(Math.random() * 1500),
      category: "Tecnologia",
      userOwner: "gurudatecnologia123",
      title: "As Últimas Novidades em Tecnologia AI",
      subtitle: "Explorando os avanços de ponta em inteligência artificial",
      image: 'assets/img_test.jpg',
      content: "Neste artigo, mergulharemos nas mais recentes descobertas em inteligência artificial (IA) que estão moldando o nosso futuro. A IA está se tornando cada vez mais integrada em nossas vidas, desde assistentes virtuais até carros autônomos. Vamos explorar como essas inovações estão impactando diversos setores, desde saúde até transporte. Prepare-se para uma jornada emocionante pelo mundo da IA!",
      date: new Date("2023-09-18"),
      views: 2567,
    },
    {
      id:(Math.random() * 1500),
      category: "Viagem",
      userOwner: "aventurasviajantes",
      title: "Uma Jornada Pela Europa",
      subtitle: "Descobrindo os tesouros escondidos da Europa",
      image: 'assets/img_test.jpg',
      content: "Junte-se a nós em uma jornada inesquecível pelas paisagens pitorescas e rica história da Europa. Da grandiosidade das cidades históricas à serenidade das aldeias à beira-mar, exploraremos os destinos mais encantadores deste continente diversificado. Prepare a sua lista de desejos de viagem, pois esta é uma aventura que você não vai querer perder!",
      date: new Date("2023-09-15"),
      views: 1789,
    },
    {
      id:(Math.random() * 1500),
      category: "Culinária",
      userOwner: "mestreculinario",
      title: "Culinária Italiana Deliciosa",
      subtitle: "Preparando autênticos sabores italianos",
      image: 'assets/img_test.jpg',
      content: "Aprenda a arte de criar pratos italianos irresistíveis com o nosso guia passo a passo. Vamos explorar os segredos da cozinha italiana, desde massas frescas até pratos clássicos como a lasanha e a pizza. Além disso, descubra as regiões da Itália que são famosas por sua gastronomia e saiba como preparar esses pratos em sua própria cozinha. Delicie-se com o sabor da Itália!",
      date: new Date("2023-09-12"),
      views: 3256,
    },
    {
      id:(Math.random() * 1500),
      category: "Saúde",
      userOwner: "vidasaudavel",
      title: "Bem-Estar e Mindfulness",
      subtitle: "Alcançando equilíbrio em sua vida",
      image: 'assets/img_test.jpg',
      content: "Descubra as práticas e hábitos que podem ajudá-lo a levar uma vida mais equilibrada e gratificante. Neste artigo, exploraremos o mundo do bem-estar e mindfulness, desde técnicas de meditação até dicas para melhorar a saúde mental. Encontre inspiração para cuidar de si mesmo e alcançar o equilíbrio que todos nós desejamos.",
      date: new Date("2023-09-10"),
      views: 4321,
    },
    {
      id:(Math.random() * 1500),
      category: "Ciência",
      userOwner: "geekdacincia",
      title: "As Maravilhas do Espaço",
      subtitle: "Explorando os mistérios além do nosso planeta",
      image: 'assets/img_test.jpg',
      content: "Embarque em uma jornada cósmica conosco enquanto desvendamos os fascinantes mistérios do universo. Da exploração espacial à busca por vida extraterrestre, este artigo o levará a lugares onde a ciência encontra a imaginação. Saiba mais sobre planetas distantes, buracos negros e as últimas descobertas da astronomia. Prepare-se para uma viagem espacial sem sair da Terra!",
      date: new Date("2023-09-08"),
      views: 2890,
    },
    {
      id:(Math.random() * 1500),
      category: "Moda",
      userOwner: "divademoda",
      title: "Tendências de Moda em Alta",
      subtitle: "Mantenha-se chique e elegante com as últimas tendências da moda",
      image: 'assets/img_test.jpg',
      content: "Inspire-se nas tendências de moda mais quentes que estão conquistando o mundo. Dos desfiles de passarela às escolhas do dia a dia, descubra como adotar o estilo das celebridades e criar o seu próprio visual único. Esteja pronto para arrasar com as roupas, acessórios e dicas de moda que compartilharemos neste artigo exclusivo!",
      date: new Date("2023-09-06"),
      views: 1987,
    },
    {
      id:(Math.random() * 1500),
      category: "Esportes",
      userOwner: "fanaticoesportivo",
      title: "Momentos Épicos no Esporte",
      subtitle: "Relembrando os momentos mais memoráveis do esporte",
      image: 'assets/img_test.jpg',
      content: "Junte-se a nós enquanto revisitamos os momentos inesquecíveis no mundo do esporte. Dos Jogos Olímpicos aos campeonatos de futebol, relembraremos as jogadas incríveis, as conquistas históricas e as histórias emocionantes que moldaram o esporte. Prepare-se para uma dose de adrenalina e nostalgia esportiva!",
      date: new Date("2023-09-04"),
      views: 3765,
    },
    {
      id:(Math.random() * 1500),
      category: "Culinária",
      userOwner: "amantedagastronomia",
      title: "Aventuras na Gastronomia Gourmet",
      subtitle: "Saboreando os sabores da culinária gourmet",
      image: 'assets/img_test.jpg',
      content: "Experimente as delícias da culinária gourmet de todo o mundo. Neste artigo, vamos levá-lo a uma viagem culinária que inclui pratos requintados, ingredientes raros e experiências gastronômicas únicas. Desde restaurantes estrelados até receitas que você pode preparar em casa, este é um banquete para os amantes da comida!",
      date: new Date("2023-09-02"),
      views: 2543,
    },
    {
      id:(Math.random() * 1500),
      category: "Música",
      userOwner: "amantedamusica",
      title: "A Evolução da Música Rock",
      subtitle: "Traçando a história do rock 'n' roll",
      image: 'assets/img_test.jpg',
      content: "Faça uma viagem musical através das décadas para explorar a evolução da música rock. Do rock clássico dos anos 60 aos subgêneros contemporâneos, este artigo irá levá-lo a uma jornada sonora. Descubra os artistas icônicos, as músicas lendárias e os momentos que definiram uma era na música. Prenda o seu cinto de segurança, pois esta viagem musical promete ser uma experiência eletrizante!",
      date: new Date("2023-08-30"),
      views: 2134,
    },
    {
      id: (Math.random() * 1500),
      category: "Viagem",
      userOwner: "viajantedomundo",
      title: "Aventuras na Ásia",
      subtitle: "Descobrindo a beleza dos destinos asiáticos",
      image: 'assets/img_test.jpg',
      content: "Embarque em uma aventura inesquecível pelos diversos cenários e culturas da Ásia. Das metrópoles vibrantes às paisagens naturais deslumbrantes, vamos explorar o que torna a Ásia tão cativante. Descubra os segredos da culinária asiática, os templos antigos e os festivais coloridos que fazem desta região um destino imperdível para os viajantes. Prepare-se para uma viagem emocionante!",
      date: new Date("2023-08-28"),
      views: 3456,
    },
    {
      id: (Math.random() * 1500),
      category: "Tecnologia",
      userOwner: "entusiastadatecnologia",
      title: "O Futuro das Casas Inteligentes",
      subtitle: "Explorando as inovações na automação residencial",
      image: 'assets/img_test.jpg',
      content: "Tenha um vislumbre do futuro da vida com tecnologias avançadas de casas inteligentes. Neste artigo, vamos explorar as últimas tendências em automação residencial, desde sistemas de segurança avançados até assistentes virtuais que tornam a vida mais conveniente. Descubra como a inteligência artificial está transformando nossas casas em espaços mais eficientes e confortáveis. Bem-vindo ao lar do futuro!",
      date: new Date("2023-08-26"),
      views: 2890,
    },
    {
      id: (Math.random() * 1500),
      category: "Saúde",
      userOwner: "jornadadebemestar",
      title: "Práticas de Saúde Holísticas",
      subtitle: "Cuidando da mente, corpo e alma",
      image: 'assets/img_test.jpg',
      content: "Descubra as práticas holísticas que podem aprimorar o seu bem-estar geral. Neste artigo, exploraremos técnicas de meditação, terapias alternativas e estratégias para alcançar a harmonia em sua vida. A saúde holística aborda todos os aspectos da sua existência, e estamos aqui para guiá-lo em uma jornada de autodescoberta e equilíbrio. Prepare-se para uma transformação completa!",
      date: new Date("2023-08-24"),
      views: 1987,
    },
    {
      id: (Math.random() * 1500),
      category: "Ciência",
      userOwner: "geekdaciencia",
      title: "As Maravilhas da Vida Marinha",
      subtitle: "Explorando os segredos sob as ondas",
      image: 'assets/img_test.jpg',
      content: "Mergulhe nas profundezas do oceano para descobrir o incrível mundo da vida marinha. Neste artigo, vamos explorar os recifes de coral vibrantes, as criaturas marinhas fascinantes e os mistérios que habitam os oceanos. Da bioluminescência à migração de baleias, você ficará maravilhado com a diversidade da vida marinha. Venha conosco nesta aventura aquática!",
      date: new Date("2023-08-22"),
      views: 3765,
    },
    {
      id: (Math.random() * 1500),
      category: "Moda",
      userOwner: "fashionista",
      title: "Trajes de Noite Elegantes",
      subtitle: "Um guia para se vestir em ocasiões especiais",
      image: 'assets/img_test.jpg',
      content: "Descubra os segredos de como parecer elegante e sofisticado em trajes de noite. Neste artigo, exploraremos as tendências da moda para eventos noturnos, desde vestidos deslumbrantes até acessórios que fazem a diferença. Encontre inspiração para criar um visual que reflete o seu estilo e personalidade em festas, casamentos e ocasiões especiais. Você será a estrela da noite!",
      date: new Date("2023-08-20"),
      views: 2543,
    },
    {
      id: (Math.random() * 1500),
      category: "Esportes",
      userOwner: "entusiastaesportivo",
      title: "Atletas Lendários de Todos os Tempos",
      subtitle: "Celebrando os ícones da história do esporte",
      image: 'assets/img_test.jpg',
      content: "Renda homenagem aos maiores atletas que deixaram uma marca indelével no mundo do esporte. Neste artigo, destacamos as carreiras brilhantes, as vitórias memoráveis e os feitos incríveis que fizeram história. Dos campos de futebol aos estádios olímpicos, revisite os momentos emocionantes proporcionados por esses atletas lendários. Este é um tributo aos heróis do esporte!",
      date: new Date("2023-08-18"),
      views: 2134,
    },
    {
      id: (Math.random() * 1500) ,
      category: "Culinária",
      userOwner: "exploradordegourmet",
      title: "Delícias da Comida de Rua",
      subtitle: "Provando as melhores comidas de rua de todo o mundo",
      image: 'assets/img_test.jpg',
      content: "Embarque em uma jornada culinária que o levará às barracas de comida de rua mais saborosas em todo o mundo. Neste artigo, vamos explorar os pratos de rua que representam a autenticidade da culinária global, desde tacos mexicanos até kebabs turcos. Conheça os chefs de rua talentosos e as histórias por trás de suas criações deliciosas. Prepare-se para uma aventura gastronômica!",
      date: new Date("2023-08-16"),
      views: 3456,
    },
    {
      id: (Math.random() * 1500),
      category: "Viagem",
      userOwner: "viajantedeaventuras",
      title: "Explorando as Maravilhas Naturais",
      subtitle: "Descobrindo paisagens deslumbrantes ao redor do mundo",
      image: 'assets/img_test.jpg',
      content: "Aventure-se por trilhas intocadas, praias isoladas e paisagens de tirar o fôlego neste emocionante artigo de viagem. Explore destinos incríveis que são verdadeiras maravilhas naturais, desde os picos nevados das montanhas até as águas cristalinas dos lagos. Conheça a vida selvagem exótica e mergulhe na beleza do mundo natural. Prepare-se para uma jornada épica pela Terra!",
      date: new Date("2023-08-14"),
      views: 2876,
    },
    {
      id: (Math.random() * 1500),
      category: "Saúde",
      userOwner: "vidafitness",
      title: "A Ciência do Bem-Estar Físico",
      subtitle: "Descobrindo os segredos para uma vida saudável",
      image: 'assets/img_test.jpg',
      content: "Este artigo mergulha fundo na ciência por trás do bem-estar físico. Descubra as melhores práticas para manter uma vida saudável, desde a nutrição adequada até a importância do exercício regular. Entenda como o corpo humano funciona e como você pode otimizar sua saúde. Este é o guia definitivo para uma vida ativa e equilibrada!",
      date: new Date("2023-08-12"),
      views: 3421,
    },
    {
      id: (Math.random() * 150),
      category: "Culinária",
      userOwner: "gourmetculinary",
      title: "A Arte da Alta Gastronomia",
      subtitle: "Explorando a culinária de alta qualidade",
      image: 'assets/img_test.jpg',
      content: "Entre no mundo sofisticado da alta gastronomia, onde a comida é uma forma de arte. Este artigo o levará a restaurantes premiados e apresentará pratos requintados preparados por chefs renomados. Descubra ingredientes raros, técnicas culinárias avançadas e harmonizações de vinhos perfeitas. Prepare-se para uma experiência gastronômica única e luxuosa!",
      date: new Date("2023-08-10"),
      views: 2139,
    },
    {
      id: (Math.random() * 1500),
      category: "Moda",
      userOwner: "estilofashion",
      title: "O Poder do Estilo Pessoal",
      subtitle: "Expressando sua individualidade através da moda",
      image: 'assets/img_test.jpg',
      content: "A moda é uma forma de expressão pessoal, e neste artigo, vamos explorar como você pode encontrar e desenvolver seu próprio estilo único. De roupas vintage a peças contemporâneas, aprenda a construir um guarda-roupa que reflete sua personalidade e criatividade. Descubra dicas de estilo, tendências atuais e como a moda pode ser uma forma de empoderamento. Este é o guia definitivo para descobrir o poder do seu estilo pessoal!",
      date: new Date("2023-08-08"),
      views: 1765,
    },

  ];

  constructor() { }

  getPosts(): Array<Post> {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    const target = this.posts.find(post => post.id === id)
    return target
  }
}
