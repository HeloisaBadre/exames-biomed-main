// Banco de dados dos exames laboratoriais
const exames = {
    // HEMOGRAMA
    hemoglobina: {
        nome: "Hemoglobina",
        unidade: "g/dL",
        minimo: 12,
        maximo: 16,
        descricao: "A hemoglobina é uma proteína nos glóbulos vermelhos que transporta oxigênio pelo corpo.",
        mensagemBaixo: "Hemoglobina baixa pode indicar anemia, levando a cansaço e falta de energia.",
        mensagemAlto: "Hemoglobina acima do normal pode estar associada a desidratação ou outras condições.",
        mensagemNormal: "Sua hemoglobina está dentro do intervalo normal. Parabéns!"
    },
    
    leucocitos: {
        nome: "Leucócitos (Glóbulos Brancos)",
        unidade: "mil/µL",
        minimo: 4.5,
        maximo: 11,
        descricao: "Leucócitos são células de defesa do corpo contra infecções e doenças.",
        mensagemBaixo: "Leucócitos baixos podem indicar fraqueza do sistema imunológico.",
        mensagemAlto: "Leucócitos elevados podem indicar infecção, inflamação ou outras condições.",
        mensagemNormal: "Seus leucócitos estão em nível normal. Seu sistema imunológico está bem!"
    },
    
    plaquetas: {
        nome: "Plaquetas",
        unidade: "mil/µL",
        minimo: 150,
        maximo: 400,
        descricao: "Plaquetas são células que ajudam na coagulação do sangue.",
        mensagemBaixo: "Plaquetas baixas podem prejudicar a coagulação do sangue.",
        mensagemAlto: "Plaquetas elevadas podem estar relacionadas a inflamação ou outras condições.",
        mensagemNormal: "Suas plaquetas estão dentro da faixa normal. A coagulação está funcionando bem!"
    },

    // BIOQUÍMICA
    glicose: {
        nome: "Glicose (Em Jejum)",
        unidade: "mg/dL",
        minimo: 70,
        maximo: 99,
        descricao: "A glicose é o açúcar no sangue, principal fonte de energia do corpo.",
        mensagemBaixo: "Glicose baixa (hipoglicemia) pode causar tontura, fraqueza e tremores.",
        mensagemAlto: "Glicose elevada (hiperglicemia) pode indicar pré-diabetes ou diabetes.",
        mensagemNormal: "Sua glicose está dentro do intervalo normal. Parabéns!"
    },

    colesterol_total: {
        nome: "Colesterol Total",
        unidade: "mg/dL",
        minimo: 0,
        maximo: 200,
        descricao: "O colesterol total é a soma de todas as formas de colesterol no sangue.",
        mensagemBaixo: "Colesterol muito baixo é raro, mas pode estar associado a problemas nutricionais.",
        mensagemAlto: "Colesterol elevado aumenta o risco de doenças cardíacas. Adote hábitos saudáveis.",
        mensagemNormal: "Seu colesterol total está em nível desejável. Continue cuidando-se!"
    },

    hdl: {
        nome: "HDL (Colesterol Bom)",
        unidade: "mg/dL",
        minimo: 40,
        maximo: 60,
        descricao: "O HDL é o 'colesterol bom' que ajuda a remover colesterol das artérias.",
        mensagemBaixo: "HDL baixo aumenta o risco de doenças cardíacas.",
        mensagemAlto: "HDL muito elevado pode estar associado a problemas de saúde. Procure avaliação médica.",
        mensagemMuitoAlto: "HDL extremamente elevado pode ser prejudicial. Consulte um profissional de saúde.",
        mensagemNormal: "Seu HDL está em bom nível. Continue com hábitos saudáveis!",
        limites: {
            muitoAlto: 90
        }
    },

    ldl: {
        nome: "LDL (Colesterol Ruim)",
        unidade: "mg/dL",
        minimo: 0,
        maximo: 130,
        descricao: "O LDL é o 'colesterol ruim' que pode se acumular nas artérias.",
        mensagemBaixo: "LDL baixo é excelente para a saúde cardiovascular.",
        mensagemAlto: "LDL elevado aumenta o risco de entupimento das artérias.",
        mensagemNormal: "Seu LDL está em nível adequado. Parabéns!"
    },

    triglicerideos: {
        nome: "Triglicerídeos",
        unidade: "mg/dL",
        minimo: 0,
        maximo: 150,
        descricao: "Triglicerídeos são um tipo de gordura no sangue ligada à alimentação.",
        mensagemBaixo: "Triglicerídeos baixos são saudáveis.",
        mensagemAlto: "Triglicerídeos elevados aumentam o risco de doenças cardíacas.",
        mensagemNormal: "Seus triglicerídeos estão em nível normal. Continue com dieta equilibrada!"
    },

    // OUTROS COMUNS
    tsh: {
        nome: "TSH (Hormônio Estimulante da Tireoide)",
        unidade: "mIU/L",
        minimo: 0.4,
        maximo: 4,
        descricao: "O TSH controla o funcionamento da glândula tireoide, que regula o metabolismo.",
        mensagemBaixo: "TSH baixo pode indicar hipertireoidismo (tireoide acelerada).",
        mensagemAlto: "TSH elevado pode indicar hipotireoidismo (tireoide lenta).",
        mensagemNormal: "Seu TSH está normal. Sua tireoide está funcionando bem!"
    },

    creatinina: {
        nome: "Creatinina",
        unidade: "mg/dL",
        minimo: 0.6,
        maximo: 1.2,
        descricao: "Creatinina é um resíduo do metabolismo muscular que os rins devem eliminar.",
        mensagemBaixo: "Creatinina baixa é geralmente sem significado clínico.",
        mensagemAlto: "Creatinina elevada pode indicar problemas nos rins.",
        mensagemNormal: "Sua creatinina está normal. Seus rins estão funcionando bem!"
    },

    ureia: {
        nome: "Ureia",
        unidade: "mg/dL",
        minimo: 7,
        maximo: 20,
        descricao: "Ureia é um resíduo do metabolismo de proteínas eliminado pelos rins.",
        mensagemBaixo: "Ureia baixa é rara, pode estar relacionada a problemas nutricionais.",
        mensagemAlto: "Ureia elevada pode indicar problemas nos rins ou desidratação.",
        mensagemNormal: "Sua ureia está dentro do intervalo normal!"
    }
};

// Lista de exames em ordem alfabética para exibição
const examesOrdenados = Object.keys(exames).sort((a, b) => 
    exames[a].nome.localeCompare(exames[b].nome)
);
