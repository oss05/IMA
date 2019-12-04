import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  public selected: any;

  funcionarioA = [
    {
      photo: ['../../../assets/img/cecilia_azar.png'],
      name: ['Cecilia Azar Manzur'],
      twitter: ['@CeciAzar'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogada por la Facultad de Derecho de la Universidad Nacional Autónoma de México de dónde obtuvo su título en 1996. Actualmente es socia del despacho DLA Piper Gallastegui y Lozano. Su práctica se ha centrado en las áreas de arbitraje y mediación, tanto desde la perspectiva de tercero neutral como de abogado de parte en procedimientos administrados y ad hoc. Ha escrito artículos sobre estas materias, un breviario jurídico sobre mediación y conciliación y una ley arbitral comentada. Imparte la materia de arbitraje en diversas universidades de México, participa en foros nacionales e internacionales y es Presidente del Comité de Mediación de ICC México.'
    },
  ];

  funcionarioB = [
    {
      photo: ['../../../assets/img/victor_ruiz.png'],
      name: ['Victor Ruiz Barbosa'],
      twitter: ['@VictorRuizBarbosa'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Facultad de Derecho de la Universidad Autónoma de Baja California (2001). Cuenta con un LL.M. in Dispute Resolution del Straus Institute for Dispute Resolution de Pepperdine University (2007). Actualmente es miembro del despacho Von Wobeser y Sierra, S.C., donde enfoca su práctica en la resolución de disputas comerciales y societarias. Ha actuado como abogado de parte y como árbitro en un número importante de arbitrajes comerciales, en disputas derivadas de contratos de compraventa internacional, acuerdos de accionistas, contratos de joint venture, contratos de distribución y de franquicia, entre otros. Fue Consejero Adjunto de la Corte Internacional de Arbitraje de la CCI en París, Francia de 2008 a 2012, donde participó en la administración de más de 180 arbitrajes internacionales. Ha escrito varios artículos y dictado varias conferencias sobre la práctica arbitral. Actualmente es Coordinador de la Comisión de Derecho Mercantil de la Barra Mexicana, Colegio de Abogados, A.C. (2015-2017), y es miembro del Grupo Latinoamericano de Arbitraje de la CCI.'
    }
  ];

  expresidentes = [
    {
      photo: ['../../../assets/img/jose_abazcal.png'],
      name: ['José María Abascal Zamora'],
      twitter: ['@JoseMAbazcal'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'José María Abascal is partner in the Mexican law firm Abascal, Flores y Segovia, with more than forty years of extensive experience in domestic and international litigation and arbitration, either as counsel, arbitrator or expert witness. His experience covers, among others, construction, energy (oil, gas, and electricity), franchising, joint ventures and disputes between partners, hotel management, real state, supply of goods and services, telecommunications and tourism .'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Alejandro Ogarrio Ramírez España'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Emilio González de Castilla del Valle'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado egresado de la Escuela Libre de Derecho generación 1973-1978. Título y cédula profesional 1979. Socio fundador de González de Castilla y Ávila Abogados, S.C. Su práctica profesional principal se ha centrado en litigio Civil, Mercantil, Familiar y en arbitraje Comercial Nacional e Internacional en arbitrajes ad hoc o administrados, como abogado de parte o como árbitro. Desarrolla alguna actividad profesional también en aspectos Societarios y Transaccionales. Ha escrito varios artículos sobre temas de derecho Civil sobre Daño Moral, Responsabilidad Contractual, Responsabilidad Profesional, Divorcio, Responsabilidad por violación a la Vida Privada, Honor y Propia Imagen, y sobre tópicos varios de arbitraje. Es profesor de licenciatura y de post grado en la Escuela Libre de Derecho en materia de “Obligaciones Civiles”. Fue Presidente de la Barra Mexicana Colegio de Abogados 2003-2004. Fue Presidente del Instituto Mexicano de Arbitraje 20013-2014.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Carlos Loperena Ruiz'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Escuela Libre de Derecho, en donde obtuvo el título en 1978. Es socio del despacho Loperena, Lerch y Martín del Campo de la Ciudad de México. Su ejercicio profesional incluye litigio y arbitraje civil y mercantil en asuntos nacionales e internacionales. Ha sido árbitro designado por las partes, y por instituciones arbitrales. Es vicepresidente de la Comisión de Arbitraje de ICC México. Da clases en postgrado en la Universidad Panamericana. En la Escuela Libre de Derecho fue profesor de Derecho Procesal Civil por 29 años y ahora imparte Medios Alternos de Solución de Controversias en la licenciatura. Ha sido profesor huésped en la Universidad Metropolitana y en la Universidad de Florida. Ha escrito artículos sobre derecho procesal, amparo y arbitraje en distintas publicaciones. Fue presidente de la Barra Mexicana, Colegio de Abogados. Es miembro de institutos y centros de arbitraje en México y en el extranjero. Es académico de número de la Academia Mexicana de Jurisprudencia y Legislación. Actualmente preside el Instituto Mexicano del Arbitraje.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Luis Enrique Graham Tapia'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Universidad Nacional Autónoma de México, en donde obtuvo el título profesional (mención honorífica) en 1983 y la Medalla al Mérito Universitario Gabino Barreda (más alto promedio de calificaciones). Maestría por The American University (Washington, D.C.). Doctorado por la Universidad Panamericana, cum laude. Socio de la firma Hogan Lovells BSTL. Ex-Presidente de la Barra Mexicana, Colegio de Abogados. Delegado por México ante las Naciones Unidas en el Grupo de Trabajo de Arbitraje (Uncitral). Integrante del Grupo Latinoamericano de Árbitros, de la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional. Vice-Presidente del Consejo de Usuarios para Norteamérica de la Corte de Arbitraje Internacional de Londres. Integrante del Comité Asesor Internacional del Centro Internacional de Disputas (ICDR). Integrante de la Comisión de Mediación y Arbitraje de la Cámara Nacional de Comercio de la Ciudad de México. Autor del libro Arbitraje Comercial, entre otras publicaciones.'
    }
  ];

  directories = [
    {
      photo: ['../../../assets/img/jose_abazcal.png'],
      name: ['José María Abascal Zamora'],
      twitter: ['@JoseMAbazcal'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'José María Abascal is partner in the Mexican law firm Abascal, Flores y Segovia, with more than forty years of extensive experience in domestic and international litigation and arbitration, either as counsel, arbitrator or expert witness. His experience covers, among others, construction, energy (oil, gas, and electricity), franchising, joint ventures and disputes between partners, hotel management, real state, supply of goods and services, telecommunications and tourism .'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Gabriela Álvarez Ávila'],
      twitter: ['@GabrielaAAvila'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Ms. Alvarez-Avila is a partner in the International Arbitration group. She focuses her practice on arbitration, international law and investment law. She has experience in transactions involving a wide range of sectors, including infrastructure projects, electricity, telecommunications, and oil and gas. She has acted as counsel for foreign states in investor-state arbitrations conducted under the Arbitration Rules of the International Centre for Settlement of Investment Disputes (ICSID) and of the United Nations Commission on International Trade Law (UNCITRAL). She also has acted as sole arbitrator in an arbitration conducted under the Arbitration Rules of the Centro de Arbitraje de México (CAM). Ms. Alvarez is also a member of the Arbitration and Mediation Commission of CANACO.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['José Antonio Álvarez Méndez'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Es abogado y economista por la Universidad Tecnológica de México; asimismo, estudió la Especialidad en Derechos Humanos en la Universidad de Castilla La Mancha, la Maestría en Administración Pública en el Instituto Politécnico Nacional, la Maestría en Derecho Estadounidense, en un proyecto conjunto del Instituto de Investigaciones Jurídicas de la UNAM, el Ilustre y Nacional Colegio de Abogados y la Escuela Libre de Derecho de Sinaloa, así como una Maestría en Derecho Constitucional por la Universidad de Castilla La Mancha. Además de ser especialista en arbitraje, tiene vasta experiencia en asuntos complejos de amparo y en competencia económica. Desde 2012, es asesor de la CFE en materia de arbitrajes, y ha participado en más de 22 casos en materia de construcción de obra pública y de generación de energía eléctrica. Ha concurrido a diversos foros y seminarios especializados en la materia.'
    },
    {
      photo: ['../../../assets/img/cecilia_azar.png'],
      name: ['Cecilia Azar Manzur'],
      twitter: ['@CeciAzar'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogada por la Facultad de Derecho de la Universidad Nacional Autónoma de México de dónde obtuvo su título en 1996. Actualmente es socia del despacho DLA Piper Gallastegui y Lozano. Su práctica se ha centrado en las áreas de arbitraje y mediación, tanto desde la perspectiva de tercero neutral como de abogado de parte en procedimientos administrados y ad hoc. Ha escrito artículos sobre estas materias, un breviario jurídico sobre mediación y conciliación y una ley arbitral comentada. Imparte la materia de arbitraje en diversas universidades de México, participa en foros nacionales e internacionales y es Presidente del Comité de Mediación de ICC México.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Jaime Cortés Rocha'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Licenciado en derecho por la Universidad Nacional Autónoma de México (1969) con maestría en administración de empresas del Instituto Tecnológico de Monterrey (1982) socio y consejero de Mijares, Angoitia, Cortés y Fuentes, A.C.. Su práctica profesional incluye las distintas áreas de derecho mercantil y financiero, representando a todo tipo de empresas y entidades financieras nacionales e internacionales. Ha participado en más de 160 arbitrajes de naturaleza mercantil y financiera como árbitro, coarbitro o abogado patrono. Ha impartido cursos en derecho mercantil y financiero en diversas universidades y es autor de múltiples artículos jurídicos especializados en dichas materias. Ha sido miembro y coordinador de diversas Comisiones y Academias en materia mercantil, del Instituto Mexicano del Arbitraje, y recientemente Presidente del Instituto Mexicano de la Mediación'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Fernando Estavillo Castro'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por el Departamento de Derecho de la Universidad Iberoamericana, Ciudad de México, titulado en 1972. Dedicado actualmente a la práctica independiente del arbitraje, exclusivamente como árbitro. Experiencia profesional previa como socio fundador del despacho Miranda & Estavillo (1974-2014), en relación con transacciones comerciales, diversos contratos privados y contratos con entidades gubernamentales para obras públicas, adquisiciones y prestación de servicios; minería, derecho marítimo, derecho administrativo, petróleo, gas y energía; licenciamiento, franquicias y transferencia de tecnología; comunicaciones y ferrocarriles. Impartió la cátedra de arbitraje y medios alternativos de solución de controversias en la Universidad Iberoamericana. Miembro de: Corte Internacional de Arbitraje de la ICC (2000-2012); Comisión de Arbitraje y ADR de la ICC; Grupo Latinoamericano de Arbitraje de la ICC; Club Español del Arbitraje (CEA); Asociación Latinoamericana de Arbitraje (“ALArb”); Instituto Mexicano del Arbitraje (“IMA”); Comisión de Mediación y Arbitraje de la Cámara Nacional de Comercio de la Ciudad de México (“CANACO”); Órgano Consultivo del Centro de Arbitraje de la Industria de la Construcción (“CAIC”); Latin American and Caribbean Users’ Council de la London Court of International Arbitration (“LCIA”). Monografías, publicadas en México y en el extranjero, sobre arbitraje, medios alternativos de solución de controversias, contratos gubernamentales y otros temas.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Cecilia Flores Rueda'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogada con mención honorífica por la Universidad Panamericana, con estudios de posgrado en derecho mercantil internacional en la misma Universidad y maestría con mención honorífica por el Instituto de Estudios Superiores de Monterrey. Su experiencia como árbitro y representante de parte abarca diferentes materias. Es corresponsal de México para el Institute for Transnational Arbitration, que periódicamente publica casos sobresalientes en la página www.kluwerarbitration.com. Actualmente imparte la cátedra de Negociación, Mediación y Arbitraje en la Maestría de Derecho de Empresa en la Universidad La Salle. Editó el “Diccionario Enciclopédico de Arbitraje Comercial” (Themis) y participó como coautora del “Nuevo Reglamento de Arbitraje de la CNUDMI” (Legis). Ha sido reconocida por Chambers Latin America 2013, 2014, y 2015, como una de las mejores abogadas en la categoría de Arbitraje Internacional. Por su trabajo en el medio, en 2015 fue citada como an extremely dedicated and very capable lawyer, already known in the community. También ha sido reconocida al ser incluida en Who’s Who Legal: Arbitration en 2015. La publicación Dispute Resolution la señala como a dispute resolution lawyer with a great future […] her name will almost certainly be up in lights in the arbitration world.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Manuel García Barragán Martínez'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la facultad de Derecho de la Universidad Nacional Autónoma de México de donde obtuvo su título en 1959. Actualmente es socio del despacho García Barragán Abogados, S.C. Su práctica se ha centrado en las áreas de Derecho Corporativo, Financiero, Contratos Nacionales e Internacionales, Inversión Extranjera y en general Derecho Mercantil, Derecho Económico y Arbitraje como árbitro y como abogado de parte. Miembro del Consejo de Administración de varias Sociedades Anónimas y del Consejo de Gerentes de varias Sociedades de Responsabilidad Limitada Mexicanas. Profesor de Contratos y de Obligaciones en la Facultad de Derecho, Universidad Nacional Autónoma de México. Expositor del módulo de Contratos Internacionales en el posgrado de la Escuela Libre de Derecho “Régimen Jurídico de los Negocios Internacionales en México”.Expositor del Módulo de Contratos Internacionales y Arbitraje Comercial Internacional en el Diplomado en Contratos Internacionales del Banco Nacional del Comercio Exterior.Conferencista en seminarios y conferencias legales en México y en el Extranjero.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Sofia Gómez Ruano'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Licenciada en Derecho por la Universidad Panamericana. Entre otros estudios, fue parte de la Advanced Arbitration Academy para Latinoamérica de la Cámara de Comercio Internacional (CCI). Está certificada como experta en protección de datos personales bajo el marco legal mexicano y, en proceso de certificación, bajo el marco legal europeo. Es socia del despacho Ortega & Gómez Ruano desde el año 2007, en el que su práctica profesional se ha centrado en las áreas de mediación, arbitraje, protección de datos personales y derecho de las tecnologías de información y comunicación. Actúa como mediadora, árbitro y abogada de parte representando a clientes en arbitrajes institucionales y ad hoc nacionales e internacionales. Adicionalmente, asesora a empresas en el diseño e implementación de lineamientos de solución de controversias. Fue Secretaria General y Consejera del Centro de Arbitraje de México (CAM). Actualmente es miembro de la Comisión de Mediación y Arbitraje de la Cámara Nacional de Comercio de la Ciudad de México (CANACO). Recientemente fue designada por el gobierno mexicano para formar parte de la Lista de Conciliadores del Centro Internacional de Arreglo de Diferencias Relativas a Inversiones (CIADI). Sofía Gómez Ruano es miembro de CCI México, y forma parte de la lista de árbitros del Centro Internacional de Resolución de Disputas (ICDR). Desde el año 2003 es parte del Comité de Solución de Controversias del TLCAN (Comité 2022). Es titular de la materia de Medios Alternos de Solución de Controversias en la Universidad Panamericana, campus Santa Fe.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Emilio González de Castilla del Valle'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado egresado de la Escuela Libre de Derecho generación 1973-1978. Título y cédula profesional 1979. Socio fundador de González de Castilla y Ávila Abogados, S.C. Su práctica profesional principal se ha centrado en litigio Civil, Mercantil, Familiar y en arbitraje Comercial Nacional e Internacional en arbitrajes ad hoc o administrados, como abogado de parte o como árbitro. Desarrolla alguna actividad profesional también en aspectos Societarios y Transaccionales. Ha escrito varios artículos sobre temas de derecho Civil sobre Daño Moral, Responsabilidad Contractual, Responsabilidad Profesional, Divorcio, Responsabilidad por violación a la Vida Privada, Honor y Propia Imagen, y sobre tópicos varios de arbitraje. Es profesor de licenciatura y de post grado en la Escuela Libre de Derecho en materia de “Obligaciones Civiles”. Fue Presidente de la Barra Mexicana Colegio de Abogados 2003-2004. Fue Presidente del Instituto Mexicano de Arbitraje 20013-2014.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Francisco González de Cossío'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Universidad Iberoamericana, México. Maestría y doctorado por la Universidad de Chicago. Grado de negocios, Harvard Business School. En 2006 fundó GONZÁLEZ DE COSSÍO ABOGADOS, SC — una boutique especializada en negocios y disputas complejas. Es autor de nueve libros sobre arbitraje y competencia económica, así como más de 200 artículos especializados sobre arbitraje. Ello incluye los textos líderes mexicanos sobre Arbitraje y sobre Competencia. Imparte la cátedra de arbitraje y competencia económica en la Universidad Iberoamericana y Escuela Libre de Derecho.Se dedica primordialmente a actuar como árbitro; aunque su experiencia es vasta cómo representante, y fuerte/creciente como mediador.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Luis Enrique Graham Tapia'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Universidad Nacional Autónoma de México, en donde obtuvo el título profesional (mención honorífica) en 1983 y la Medalla al Mérito Universitario Gabino Barreda (más alto promedio de calificaciones). Maestría por The American University (Washington, D.C.). Doctorado por la Universidad Panamericana, cum laude. Socio de la firma Hogan Lovells BSTL. Ex-Presidente de la Barra Mexicana, Colegio de Abogados. Delegado por México ante las Naciones Unidas en el Grupo de Trabajo de Arbitraje (Uncitral). Integrante del Grupo Latinoamericano de Árbitros, de la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional. Vice-Presidente del Consejo de Usuarios para Norteamérica de la Corte de Arbitraje Internacional de Londres. Integrante del Comité Asesor Internacional del Centro Internacional de Disputas (ICDR). Integrante de la Comisión de Mediación y Arbitraje de la Cámara Nacional de Comercio de la Ciudad de México. Autor del libro Arbitraje Comercial, entre otras publicaciones.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Omar Guerrero Rodriguez'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Carlos Loperena Ruiz'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Escuela Libre de Derecho, en donde obtuvo el título en 1978. Es socio del despacho Loperena, Lerch y Martín del Campo de la Ciudad de México. Su ejercicio profesional incluye litigio y arbitraje civil y mercantil en asuntos nacionales e internacionales. Ha sido árbitro designado por las partes, y por instituciones arbitrales. Es vicepresidente de la Comisión de Arbitraje de ICC México. Da clases en postgrado en la Universidad Panamericana. En la Escuela Libre de Derecho fue profesor de Derecho Procesal Civil por 29 años y ahora imparte Medios Alternos de Solución de Controversias en la licenciatura. Ha sido profesor huésped en la Universidad Metropolitana y en la Universidad de Florida. Ha escrito artículos sobre derecho procesal, amparo y arbitraje en distintas publicaciones. Fue presidente de la Barra Mexicana, Colegio de Abogados. Es miembro de institutos y centros de arbitraje en México y en el extranjero. Es académico de número de la Academia Mexicana de Jurisprudencia y Legislación. Actualmente preside el Instituto Mexicano del Arbitraje.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Gerardo Lozano Alarcón'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Roberto Martínez Guerrero'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Jorge Ogarrio Kalb'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Escuela Libre de Derecho de dónde obtuvo su título en 1993. En 1995 obtuvo el grado de maestro en derecho por la Universidad de Georgetown en Washington, D.C. Actualmente es socio del despacho Ogarrio Daguerre, S.C. y anteriormente fue asociado extranjero en el despacho Sullivan & Cromwell en Nueva York. Su práctica se ha centrado en las áreas de fusiones y adquisiciones, transacciones internacionales, financiamiento de proyectos, derecho corporativo y arbitraje. Ha escrito diversos artículos sobre estas materias. Imparte la materia de sociedades mercantiles e inversión extranjera en la Escuela Libre de Derecho. Es miembro de la Barra Mexicana, Colegio de Abogados, A.C. (coordinador de la Comisión de Abogados Jóvenes 2002-2005, miembro del Consejo Directivo 2006-2010 y miembro de la Junta de Honor 2013-2015); International Bar Association; Instituto Mexicano de la Mediación, A.C.; US-Mexico Bar Association (miembro del Consejo Directivo 2007-2012); Instituto Mexicano del Arbitraje; Comité de Arbitraje, Capítulo Mexicano de la Cámara de Comercio Internacional; Centro de Arbitraje de la Industria de la Construcción / CAIC (miembro de su consejo consultivo 2013 – a la fecha). Ha participado como árbitro así como presidente de tribunales arbitrales en múltiples procedimientos de arbitraje, nacionales e internacionales, administrados por la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional (CCI), la Cámara Nacional de Comercio de México (CANACO), el Centro de Arbitraje de México (CAM) y el Centro de Arbitraje de la Industria de la Construcción (CAIC), así como en arbitrajes no administrados. También ha participado como secretario en arbitrajes bajo los capítulos XIX y XX del Tratado de Libre Comercio de América del Norte (NAFTA). Acreditó el XII Curso en Arbitraje Internacional organizado por el Capítulo Mexicano de la Cámara Internacional de Comercio y la Escuela Libre de Derecho (México, 2004).'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Alejandro Ogarrio Ramírez España'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Elsa Ortega'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogada por la Escuela Libre de Derecho de donde se graduó con honores. Cursó una maestría en estudios legales europeos (LL.M.) en el Colegio de Europa en Brujas, Bélgica. Es socia fundadora del despacho Abogados Ortega y Gómez Ruano en la Ciudad de México desde el 2007. Cuenta con más de 17 años de experiencia en arbitraje comercial internacional actuando numerosas veces como árbitro o abogado de parte bajo las reglas de arbitraje de diversas instituciones nacionales y extranjeras. Se especializa también en derecho corporativo y transaccional. Es coautora de libro Ley Mexicana de Arbitraje en Materia Comercial publicado por Editorial Themis, así como autora de artículos en materia de arbitraje en otras publicaciones. Forma parte de la Barra Mexicana, Colegio de Abogados, la International Bar Association y otros institutos y asociaciones especializadas en arbitraje. Es miembro del Comité Consultivo para la Solución de Controversias Privadas del TLCAN (Comité 2022) designada por el gobierno mexicano. Desde el 2014 fue incluida en la lista de árbitros del International Centre for Dispute Resolution (ICDR).'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Julieta Ovalle Piedra'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Obtuvo su Licenciatura en Derecho de la Facultad de Derecho de la Universidad Nacional Autónoma de México y un LLM de la Universidad de Paris 1 Panthéon-Sorbonne, ambos grados con mención honorífica. Actualmente es socia del despacho Bufete Ovalle Favela, S.C. Cuenta con más de 15 años de experiencia en litigio mercantil, administrativo, civil, familiar y en materia de amparo. Asimismo ha fungido como árbitro y abogada de parte en diversos procedimientos arbitrales institucionales y ad hoc, nacionales e internacionales, y como experta en derecho mexicano ante tribunales extranjeros. Es profesora en el Diplomado de Arbitraje Comercial Internacional que se imparte en la Escuela Libre de Derecho, e imparte conferencias tanto en México como en el extranjero. Es autora del libro La responsabilidad civil por productos en México, Canadá y Estados Unidos, y de divisas publicaciones en materia de arbitraje y sucesiones internacionales. Actualmente es Presidente de Grupo de Jóvenes Árbitros de ICC México y Representante para Latinoamérica de ICC YAF. Asimismo es miembro de Consejo Directivo del Centro de Arbitraje de la Industria de la Construcción.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Ricardo Rámirez Hernández'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Universidad Autónoma Metropolitana. Maestría por la American University (Washington D.C.). Actualmente es socio del despacho RRH Consultores, especializado en derecho comercial internacional. Ex-Juez del Órgano de Apelación de la Organización Mundial del Comercio (OMC). Presidente del mismo por dos periodos consecutivos. Designado por el Presidente del Consejo Administrativo del Banco Mundial al Panel de Árbitros del Centro Internacional de Arreglo de Diferencias Relativas a Inversiones (CIADI) por un período de 6 años. Profesor de la Facultad de Derecho de la Universidad Nacional Autónoma de México (UNAM) y Presidente del Colegio de Profesores de Comercio Exterior de dicha Facultad. Entre sus publicaciones más reciente destaca un manual de derecho económico publicado por el Fondo de Cultura Económica y su contribución con el capítulo de solución de controversias en la obra conmemorativa de los 40 años de la política de comercio exterior de México publicado por la Secretaría de Economía. Presidente de la Red Latinoamericana de Derecho Económico Internacional. Vicepresidente de la Comisión de Comercio de la International Chamber of Commerce México.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Hugo Perezcano Díaz'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['José Antonio Rodríguez Márquez'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/victor_ruiz.png'],
      name: ['Victor Ruiz Barbosa'],
      twitter: ['@VictorRuizBarbosa'],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Facultad de Derecho de la Universidad Autónoma de Baja California (2001). Cuenta con un LL.M. in Dispute Resolution del Straus Institute for Dispute Resolution de Pepperdine University (2007). Actualmente es miembro del despacho Von Wobeser y Sierra, S.C., donde enfoca su práctica en la resolución de disputas comerciales y societarias. Ha actuado como abogado de parte y como árbitro en un número importante de arbitrajes comerciales, en disputas derivadas de contratos de compraventa internacional, acuerdos de accionistas, contratos de joint venture, contratos de distribución y de franquicia, entre otros. Fue Consejero Adjunto de la Corte Internacional de Arbitraje de la CCI en París, Francia de 2008 a 2012, donde participó en la administración de más de 180 arbitrajes internacionales. Ha escrito varios artículos y dictado varias conferencias sobre la práctica arbitral. Actualmente es Coordinador de la Comisión de Derecho Mercantil de la Barra Mexicana, Colegio de Abogados, A.C. (2015-2017), y es miembro del Grupo Latinoamericano de Arbitraje de la CCI.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Thomas S. Heather'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Bernardo Sepúlveda Amor'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Licenciado en derecho por la UNAM, graduado con mención honorífica (1964). Maestro en derecho internacional por la Universidad de Cambridge (1966). Embajador Emérito de México. Juez de la Corte Internacional de Justicia en el período 2006-2015 y Vice-Presidente de ese órgano judicial de las Naciones Unidas (2012-2015). Ha actuado como Presidente de tribunales de arbitraje y como árbitro en casos administrados por el CIADI, por la CPA y por ICC. Miembro de la Comisión de Derecho Internacional de la ONU (1997-2005). Presidente de la Comisión de Empresas Transnacionales de la ONU (1980). Secretario de Relaciones Exteriores de México (1982-1988). Embajador de México en Washington y en Londres. Profesor de derecho internacional en El Colegio de México. Miembro del Institut de Droit International. Ha publicado libros y artículos sobre inversión extranjera, resolución de disputas internacionales, asuntos económicos internacionales, política exterior. Fue el Abogado General del Grupo ICA (1997-2005). Al término de su mandato como Juez de la Corte Internacional de Justicia, su actividad profesional está centrada en el arbitraje internacional. El gobierno mexicano lo ha designado miembro de la Corte Permanente de Arbitraje, como integrante del grupo mexicano.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Eduardo Siqueiros Twomey'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado por la Escuela Libre de Derecho, en donde obtuvo su título en 1979; maestría por la Escuela de Derecho de la Universidad de Harvard en Cambridge, Massachusetts en 1980. Socio del despacho Hogan Lovells BSTL, S.C. (antes Barrera, Siqueiros y Torres Landa, S.C.) en la Ciudad de México. Ha sido profesor en diversas universidades en México, así como expositor en diversos cursos y diplomados en México y en el extranjero sobre temas de derecho mercantil internacional, transacciones comerciales y arbitraje, áreas en las que se concentra en el ejercicio profesional. Ha participado como árbitro en controversias comerciales administradas por instituciones domésticas e internacionales - tal y como el Centro de Arbitraje de México (CAM), la Cámara de Comercio Internacional (CCI), International Centre for Dispute Resolution (ICDR), entre otras, y en disputas inversionista-Estado ante el Centro Internacional de Arreglo de Disputas Relativas a Inversiones (CIADI), incluyendo tribunales establecidos conforme al Capítulo XI del Tratado de Libre Comercio de Norteamérica (TLCAN) y otros tratados o acuerdos internacionales para la protección de inversiones.'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Marco Tulio Venegas Cruz'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Abogado egresado de la Escuela Libre de Derecho (1991-1996).Desde el año de 1995 hasta junio de 2019 laboró en el Despacho Von Wobeser y Sierra, S.C. Fungió como asistente de uno de los Consejeros de la Secretaría de la Cámara de Comercio Internacional en París (2000). Posteriormente, trabajó como asociado extranjero en el área de arbitraje de la oficina de Paris del Despacho Freshfields, Bruckhaus & Deringer (2000). Actualmente, el Lic. Venegas es socio fundador de LITREDI, S.C. una firma boutique dedicada a litigio y arbitraje en la ciudad de México. Dentro de su experiencia ha participado como abogado de parte en más de quince arbitrajes internacionales. Dentro de estos casos, ha obtenido resoluciones favorables entre otros, en la disputa comercial de mayor valor económico en la historia de México, así como en las dos controversias de infraestructura en contra de PEMEX (la empresa petrolera del Estado Mexicano) de mayor perfil de la última década. Asimismo, ha participado en litigios comerciales complejos ante Tribunales Mexicanos, tanto en materia civil, comercial, administrativa y en los juicios de amparo relacionados. Es autor de múltiples artículos publicados en materia de arbitraje tanto en México como en el extranjero y participa como profesor en diversos cursos y diplomados de arbitraje. Es Presidente del Comité de Solución de Controversias en Infraestructura, miembro de la Barra Mexicana de Abogados, miembro del Advisory Board del Institute for Transnational Arbitration'
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Julio Cesar Vazquez-Mellado Garcia'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Claus von Wobeser Hoepfner'],
      twitter: [''],
      linkedin: '',
      description: ''
    },
    {
      photo: ['../../../assets/img/user.png'],
      name: ['Rodrigo Zamora Etcharren'],
      twitter: [''],
      linkedin: '',
      // tslint:disable-next-line: max-line-length
      description: 'Egresado de la Escuela Libre de Derecho y cuenta con estudios de maestría (LL.M.) por la Universidad de Nueva York (NYU) y ejerce como socio en el Bufete Zamora-Pierce (desde 1997). Rodrigo Zamora es miembro de la Barra Mexicana de Abogados (fue el coordinador fundador del Comité de Arbitraje Comercial y es el actual secretario del Consejo Directivo y Abogado General de dicha asociación), y de la Barra del Estado de Nueva York. En su experiencia profesional, ha participado como abogado de parte y como árbitro (presidente de tribunal arbitral, árbitro único y coárbitro) en procedimientos conducidos bajo las reglas de diversas instituciones arbitrales, tanto en idioma español como inglés, en México y en el extranjero; y ha sido perito en derecho mexicano en litigios ante Cortes extranjeras. Rodrigo Zamora es Fellow del Chartered Institute of Arbitrators, y miembro del Advisory Board del Institute for Transnational Arbitration del Center for American and International Law, el Comité Nacional Mexicano de la Cámara de Comercio Internacional, la Academia Mexicana de Arbitraje, el Club Español de Arbitraje, la London Court of International Arbitration, el Grupo Latinoamericano de la Cámara de Comercio Internacional y la Academia Mexicana de Derecho Energético. Es autor y coautor de diversos libros, incluyendo “Manual de Arbitraje Comercial”, ha escrito numerosos artículos, y ha dictado conferencias ante instituciones públicas y privadas, en México y el extranjero.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
