// EXEMPLOS DE COMO ADICIONAR NOVOS EXAMES
// Descomente e adicione ao arquivo dados_exames.js conforme necessário

/*
// EXEMPLOS ADICIONAIS DE EXAMES QUE PODEM SER ADICIONADOS:

// Enzimas Hepáticas
ALT: {
    nome: "ALT (Alanina Aminotransferase)",
    unidade: "U/L",
    minimo: 7,
    maximo: 56,
    descricao: "Enzima presente no fígado que indica sua função.",
    mensagemBaixo: "ALT baixa geralmente não é preocupante.",
    mensagemAlto: "ALT elevada pode indicar problemas hepáticos ou inflamação no fígado.",
    mensagemNormal: "Sua ALT está normal. Seu fígado está funcionando bem!"
},

AST: {
    nome: "AST (Aspartato Aminotransferase)",
    unidade: "U/L",
    minimo: 10,
    maximo: 40,
    descricao: "Outra enzima hepática que indica a saúde do fígado.",
    mensagemBaixo: "AST baixa é normal.",
    mensagemAlto: "AST elevada pode indicar problemas hepáticos ou musculares.",
    mensagemNormal: "Sua AST está normal!"
},

// Lipídios
VLDL: {
    nome: "VLDL (Lipoproteína de Muito Baixa Densidade)",
    unidade: "mg/dL",
    minimo: 0,
    maximo: 40,
    descricao: "Tipo de lipoproteína que transporta triglicerídeos.",
    mensagemBaixo: "VLDL baixa é excelente.",
    mensagemAlto: "VLDL elevada pode aumentar risco cardiovascular.",
    mensagemNormal: "Seu VLDL está em nível adequado!"
},

// Minerais e Eletrólitos
calcio: {
    nome: "Cálcio Total",
    unidade: "mg/dL",
    minimo: 8.5,
    maximo: 10.2,
    descricao: "Mineral importante para ossos, dentes e função muscular.",
    mensagemBaixo: "Cálcio baixo (hipocalcemia) pode causar fraqueza muscular.",
    mensagemAlto: "Cálcio elevado pode estar relacionado a problemas renais ou ósseos.",
    mensagemNormal: "Seu cálcio está normal. Seus ossos estão bem!"
},

fosforo: {
    nome: "Fósforo",
    unidade: "mg/dL",
    minimo: 2.5,
    maximo: 4.5,
    descricao: "Mineral que trabalha com o cálcio para fortalecer ossos.",
    mensagemBaixo: "Fósforo baixo pode afetar a saúde óssea.",
    mensagemAlto: "Fósforo elevado pode indicar problemas renais.",
    mensagemNormal: "Seu fósforo está em bom nível!"
},

potassio: {
    nome: "Potássio",
    unidade: "mEq/L",
    minimo: 3.5,
    maximo: 5,
    descricao: "Eletrólito importante para função cardíaca e muscular.",
    mensagemBaixo: "Potássio baixo (hipocaliemia) pode causar fraqueza e arritmia cardíaca.",
    mensagemAlto: "Potássio elevado pode ser perigoso para o coração.",
    mensagemNormal: "Seu potássio está em nível seguro!"
},

sodio: {
    nome: "Sódio",
    unidade: "mEq/L",
    minimo: 135,
    maximo: 145,
    descricao: "Eletrólito crucial para equilíbrio de fluidos no corpo.",
    mensagemBaixo: "Sódio baixo pode causar tontura e confusão mental.",
    mensagemAlto: "Sódio elevado pode causar sede intensa e desidratação.",
    mensagemNormal: "Seu sódio está equilibrado!"
},

magnesio: {
    nome: "Magnésio",
    unidade: "mg/dL",
    minimo: 1.7,
    maximo: 2.2,
    descricao: "Mineral importante para função muscular e nervosa.",
    mensagemBaixo: "Magnésio baixo pode causar cãibras e fraqueza.",
    mensagemAlto: "Magnésio muito elevado é raro e pode afetar os nervos.",
    mensagemNormal: "Seu magnésio está adequado!"
},

// Função Renal
ácido_úrico: {
    nome: "Ácido Úrico",
    unidade: "mg/dL",
    minimo: 3.5,
    maximo: 7.2,
    descricao: "Produto do metabolismo que os rins eliminam.",
    mensagemBaixo: "Ácido úrico baixo não é comum, mas geralmente sem significado.",
    mensagemAlto: "Ácido úrico elevado aumenta risco de gota e problemas renais.",
    mensagemNormal: "Seu ácido úrico está normal!"
},

// Albumina (Proteína)
albumina: {
    nome: "Albumina",
    unidade: "g/dL",
    minimo: 3.5,
    maximo: 5.5,
    descricao: "Proteína importante sintetizada pelo fígado.",
    mensagemBaixo: "Albumina baixa pode indicar desnutrição ou problemas hepáticos.",
    mensagemAlto: "Albumina elevada é rara e pode indicar desidratação.",
    mensagemNormal: "Sua albumina está em nível adequado!"
},

// Ferro
ferro: {
    nome: "Ferro Sérico",
    unidade: "µg/dL",
    minimo: 60,
    maximo: 170,
    descricao: "Mineral essencial para o transporte de oxigênio no sangue.",
    mensagemBaixo: "Ferro baixo pode indicar anemia por deficiência de ferro.",
    mensagemAlto: "Ferro elevado pode danificar órgãos ao longo do tempo.",
    mensagemNormal: "Seu ferro está em nível adequado!"
},

// Vitamina B12
vitamina_b12: {
    nome: "Vitamina B12",
    unidade: "pg/mL",
    minimo: 200,
    maximo: 900,
    descricao: "Vitamina essencial para formação de células sanguíneas e nervos.",
    mensagemBaixo: "B12 baixa pode causar anemia e problemas neurológicos.",
    mensagemAlto: "B12 elevada não é comum, pois o excesso é excretado.",
    mensagemNormal: "Sua B12 está em nível adequado!"
},

// Ácido Fólico
acido_folico: {
    nome: "Ácido Fólico",
    unidade: "ng/mL",
    minimo: 5.4,
    maximo: 16,
    descricao: "Vitamina importante para formação de DNA e células.",
    mensagemBaixo: "Ácido fólico baixo pode causar anemia e afetar gestação.",
    mensagemAlto: "Ácido fólico elevado não causa problemas.",
    mensagemNormal: "Seu ácido fólico está adequado!"
},

// Hormônios Tireoides
T3: {
    nome: "T3 (Triiodotironina)",
    unidade: "pg/mL",
    minimo: 80,
    maximo: 200,
    descricao: "Hormônio da tireoide que controla metabolismo.",
    mensagemBaixo: "T3 baixa pode indicar hipotireoidismo.",
    mensagemAlto: "T3 elevada pode indicar hipertireoidismo.",
    mensagemNormal: "Seu T3 está normal!"
},

T4: {
    nome: "T4 (Tiroxina)",
    unidade: "ng/dL",
    minimo: 4.5,
    maximo: 12,
    descricao: "Principal hormônio da tireoide que regula energia.",
    mensagemBaixo: "T4 baixa pode indicar hipotireoidismo.",
    mensagemAlto: "T4 elevada pode indicar hipertireoidismo.",
    mensagemNormal: "Seu T4 está normal!"
},

// Próstata (PSA)
psa: {
    nome: "PSA (Antígeno Específico da Próstata)",
    unidade: "ng/mL",
    minimo: 0,
    maximo: 4,
    descricao: "Proteína produzida pela próstata usada em rastreamento.",
    mensagemBaixo: "PSA baixo é normal.",
    mensagemAlto: "PSA elevado pode indicar inflamação ou câncer de próstata.",
    mensagemNormal: "Seu PSA está dentro dos limites normais!"
},

// Teste de Coagulação
INR: {
    nome: "INR (Razão Normalizada Internacional)",
    unidade: "índice",
    minimo: 0.8,
    maximo: 1.1,
    descricao: "Medida de tempo de coagulação do sangue.",
    mensagemBaixo: "INR baixo pode aumentar risco de trombose.",
    mensagemAlto: "INR elevado aumenta risco de sangramento.",
    mensagemNormal: "Sua coagulação está normal!"
},

// CPK (Enzima Muscular)
cpk: {
    nome: "CPK (Creatina Fosfoquinase)",
    unidade: "U/L",
    minimo: 30,
    maximo: 200,
    descricao: "Enzima presente em músculos e coração.",
    mensagemBaixo: "CPK baixa não é significativa.",
    mensagemAlto: "CPK elevada pode indicar lesão muscular ou cardíaca.",
    mensagemNormal: "Sua CPK está normal!"
},

*/

// INSTRUÇÕES PARA ADICIONAR NOVOS EXAMES:
// 
// 1. Copie a estrutura abaixo:
//    nomeChave: {
//        nome: "Nome Completo do Exame",
//        unidade: "Unidade de Medida",
//        minimo: valor_mínimo,
//        maximo: valor_máximo,
//        descricao: "Descrição breve do exame",
//        mensagemBaixo: "Mensagem para valor abaixo do mínimo",
//        mensagemAlto: "Mensagem para valor acima do máximo",
//        mensagemNormal: "Mensagem para valor dentro do intervalo"
//    }
//
// 2. Adicione o objeto ao dicionário 'exames' em dados_exames.js
// 3. A chave (nomeChave) será usada internamente
// 4. O campo 'nome' aparecerá na lista de seleção para o usuário
// 5. Unidade aparecerá próxima ao campo de entrada
//
// DICAS IMPORTANTES:
// - Use nomes descritivos na chave (use underscore para separar palavras)
// - Valores de referência podem variar por laboratório - atualize conforme necessário
// - Mensagens devem ser informativas, não alarmistas
// - Sempre mencione consulta com profissional de saúde
// - Use fontes confiáveis para valores de referência (ANVISA, laboratórios renomados)
