// Banco de dados dos exames laboratoriais agrupados por tipo
const tiposExames = {
  hemograma: {
    nome: "Hemograma",
    descricao: "O hemograma avalia as células do sangue. Ele ajuda a identificar anemia, infecções, inflamações e alterações na coagulação.\n\nHematócrito: mede a quantidade de células vermelhas no sangue. Ajuda a identificar anemia ou desidratação.\n\nHemoglobina: mostra a capacidade do sangue de transportar oxigênio. É muito usada para diagnosticar anemia.\n\nHemácias (RBC): quantidade de glóbulos vermelhos. Também ajuda a avaliar anemia e oxigenação do corpo.\n\nLeucócitos totais: avaliam as células de defesa. Indicam se o corpo está reagindo a infecções ou inflamações.\n\nNeutrófilos: ajudam a combater bactérias. Aumentam principalmente em infecções bacterianas.\n\nLinfócitos: atuam contra vírus. Aumentam em infecções virais.\n\nMonócitos: ajudam na limpeza do organismo e em infecções mais prolongadas.\n\nEosinófilos: relacionados a alergias e parasitas.\n\nBasófilos: participam de reações alérgicas.\n\nPlaquetas: ajudam na coagulação do sangue. Alterações podem indicar risco de sangramento ou problemas inflamatórios.",
    exames: {
      hemoglobina: {
        nome: "Hemoglobina",
        unidade: "g/dL",
        descricao: "Proteína no sangue responsável por transportar oxigênio.",
        sexoDependente: true,
        muitoBaixo_mulher: 10,
        baixo_mulher: 11,
        minimo_mulher: 12,
        maximo_mulher: 16,
        alto_mulher: 17,
        muitoAlto_mulher: 18,
        muitoBaixo_homem: 10,
        baixo_homem: 12,
        minimo_homem: 13,
        maximo_homem: 17,
        alto_homem: 18,
        muitoAlto_homem: 19,
        mensagemBaixo: "Hemoglobina baixa pode indicar anemia. Procure um profissional de saúde.",
        mensagemNormal: "Sua hemoglobina está dentro dos valores normais.",
        mensagemAlto: "Hemoglobina elevada. Pode indicar desidratação ou outras condições.",
        mensagemMuitoAlto: "Hemoglobina muito elevada. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure imediatamente um hematologista", "Aumentar alimentos ricos em ferro (carne vermelha, feijão, lentilha)", "Aumentar vitamina C para melhor absorção de ferro", "Pode estar indicado tratamento com ferro oral ou transfusão"],
          baixo: ["Aumente consumo de alimentos ricos em ferro (carne vermelha, frutos do mar)", "Consuma fontes de vitamina C com alimentos com ferro (laranja, kiwi)", "Aumente alimentos com ácido fólico (vegetais verdes, legumes)", "Descanse adequadamente", "Evite bebidas que prejudicam absorção de ferro (café, chá em excesso)"],
          alto: ["Verifique com profissional se há desidratação", "Mantenha hidratação adequada (2-3L de água/dia)", "Consulte um hematologista se persistir", "Evite suplementos de ferro sem prescrição"],
          muito_alto: ["Procure imediatamente um hematologista", "Pode indicar policitemia vera ou outra condição séria", "Evite qualquer suplementação de ferro", "Mantenha hidratação constante"]
        }
      },
      hematocrito: {
        nome: "Hematócrito",
        unidade: "%",
        descricao: "Percentual de glóbulos vermelhos no sangue.",
        sexoDependente: true,
        muitoBaixo_mulher: 30,
        baixo_mulher: 35,
        minimo_mulher: 36,
        maximo_mulher: 46,
        alto_mulher: 47,
        muitoAlto_mulher: 51,
        muitoBaixo_homem: 30,
        baixo_homem: 39,
        minimo_homem: 40,
        maximo_homem: 50,
        alto_homem: 51,
        muitoAlto_homem: 55,
        mensagemBaixo: "Hematócrito baixo pode indicar anemia. Procure um profissional de saúde.",
        mensagemNormal: "Seu hematócrito está dentro dos valores normais.",
        mensagemAlto: "Hematócrito elevado. Pode indicar desidratação ou outras condições.",
        mensagemMuitoAlto: "Hematócrito muito elevado. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure um hematologista urgentemente", "Aumente alimentos ricos em ferro, B12 e ácido fólico", "Pode estar indicado tratamento com ferro ou transfusão", "Evite sangramento excessivo"],
          baixo: ["Aumente alimentos com ferro (carne, feijão, espinafre)", "Consuma vitamina C para melhor absorção (frutas cítricas)", "Aumente vitamina B12 (carne, ovos, laticínios)", "Durma bem para recuperação", "Considere suplementação de ferro com orientação médica"],
          alto: ["Beba mais água para evitar desidratação", "Verifique se não há sudoração excessiva ou exercício intenso", "Consulte um profissional se persistir após hidratação", "Evite suplementos de ferro"],
          muito_alto: ["Procure um hematologista", "Pode indicar policitemia ou outras condições", "Mantenha hidratação constante", "Evite qualquer suplementação de ferro"]
        }
      },
      hemaceas: {
        nome: "Hemácias (RBC)",
        unidade: "milhões/mm³",
        descricao: "Contagem de glóbulos vermelhos.",
        muitoBaixo: 3.5,
        baixo: 4.0,
        minimo: 4.0,
        maximo: 5.6,
        alto: 6.0,
        muitoAlto: 6.5,
        mensagemBaixo: "Hemácias baixas podem indicar anemia. Procure um profissional de saúde.",
        mensagemNormal: "Sua contagem de hemácias está normal.",
        mensagemAlto: "Hemácias elevadas. Pode indicar desidratação ou policitemia.",
        mensagemMuitoAlto: "Hemácias muito elevadas. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure um hematologista urgentemente", "Pode indicar anemia severa", "Aumente alimentos ricos em ferro", "Pode estar indicado tratamento específico"],
          baixo: ["Aumente consumo de alimentos com ferro (carne vermelha, ostras)", "Consuma vitamina C para absorção (laranja, morango)", "Aumente ácido fólico (brócolis, espinafre, grão-de-bico)", "Durma adequadamente para recuperação", "Considere suplementação com orientação médica"],
          alto: ["Beba mais água (2-3L/dia)", "Verifique se há perda de líquidos excessiva", "Consulte profissional se persistir", "Evite exercício intenso sem repouso"],
          muito_alto: ["Procure um hematologista", "Pode indicar policitemia vera", "Mantenha hidratação constante", "Pode ser necessário tratamento específico"]
        }
      },
      leucocitosTotal: {
        nome: "Leucócitos Totais",
        unidade: "/mm³",
        descricao: "Contagem total de células de defesa do corpo.",
        muitoBaixo: 2500,
        baixo: 3500,
        minimo: 4000,
        maximo: 11000,
        alto: 13000,
        muitoAlto: 15000,
        mensagemBaixo: "Leucócitos baixos. Pode indicar imunossupressão.",
        mensagemNormal: "Sua contagem de leucócitos está normal.",
        mensagemAlto: "Leucócitos elevados. Pode indicar infecção ou inflamação.",
        mensagemMuitoAlto: "Leucócitos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure imediatamente um médico", "Evite contato com pessoas doentes", "Mantenha higiene rigorosa", "Evite ambientes com aglomerações"],
          baixo: ["Descanse adequadamente (7-9h de sono)", "Reduz estresse (meditação, exercício leve)", "Aumente alimentos com zinco (carne, sementes, nozes)", "Aumente vitamina C (frutas cítricas, kiwi)", "Procure profissional para avaliar causa"],
          alto: ["Procure investigar a causa (infecção, inflamação)", "Descanse e hidrate-se bem", "Evite atividades extenuantes", "Procure um médico para diagnóstico", "Pode indicar infecção - tome cuidado com higiene"],
          muito_alto: ["Procure urgentemente um médico ou hematologista", "Pode indicar infecção severa ou leukemia", "Descanse absolutamente", "Evite ambientes públicos", "Acompanhamento médico urgente é necessário"]
        }
      },
      neutrofilos: {
        nome: "Neutrófilos",
        unidade: "%",
        descricao: "Tipo de leucócito mais abundante. Defende contra infecções.",
        muitoBaixo: 35,
        baixo: 40,
        minimo: 45,
        maximo: 70,
        alto: 75,
        muitoAlto: 80,
        mensagemBaixo: "Neutrófilos baixos. Pode indicar imunossupressão.",
        mensagemNormal: "Seus neutrófilos estão dentro dos valores normais.",
        mensagemAlto: "Neutrófilos elevados. Pode indicar infecção bacteriana.",
        mensagemMuitoAlto: "Neutrófilos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure um médico urgentemente", "Evite pessoas com infecções", "Mantenha higiene rigorosa", "Evite alimentos crus ou mal cozidos"],
          baixo: ["Durma bem (7-9h por noite)", "Reduza estresse", "Aumente alimentos com proteína (carne, ovos, feijão)", "Aumente vitamina A (cenoura, batata-doce, abóbora)", "Procure um profissional de saúde"],
          alto: ["Procure avaliar se há infecção bacteriana", "Descanse adequadamente", "Aumente ingestão de água", "Procure um médico para diagnóstico", "Evite atividades extenuantes"],
          muito_alto: ["Procure urgentemente um médico", "Pode indicar infecção bacteriana severa", "Procure investigar a causa", "Descanse e hidrate-se bem", "Acompanhamento médico é essencial"]
        }
      },
      linfocitos: {
        nome: "Linfócitos",
        unidade: "%",
        descricao: "Células responsáveis pela resposta imunológica específica.",
        muitoBaixo: 15,
        baixo: 18,
        minimo: 20,
        maximo: 40,
        alto: 45,
        muitoAlto: 50,
        mensagemBaixo: "Linfócitos baixos. Pode indicar imunossupressão.",
        mensagemNormal: "Seus linfócitos estão dentro dos valores normais.",
        mensagemAlto: "Linfócitos elevados. Pode indicar infecção viral.",
        mensagemMuitoAlto: "Linfócitos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure um médico urgentemente", "Pode indicar imunossupressão severa", "Evite ambientes com muitas pessoas", "Mantenha higiene pessoal rigorosa"],
          baixo: ["Durma 7-9 horas por noite", "Reduza estresse (yoga, meditação)", "Aumente alimentos probióticos (iogurte, kefir)", "Aumente vitamina D (ovos, peixes gordos, sol)", "Procure um profissional de saúde"],
          alto: ["Pode indicar infecção viral", "Descanse bastante", "Hidrate-se bem (2-3L de água/dia)", "Procure um médico para avaliar", "Evite atividades extenuantes"],
          muito_alto: ["Procure urgentemente um médico", "Pode indicar infecção viral severa ou outra condição", "Descanse absolutamente", "Hidrate-se bem", "Acompanhamento médico urgente"]
        }
      },
      monocitos: {
        nome: "Monócitos",
        unidade: "%",
        descricao: "Células que comem bactérias e outras partículas.",
        muitoBaixo: 1,
        baixo: 1.5,
        minimo: 2,
        maximo: 10,
        alto: 12,
        muitoAlto: 15,
        mensagemBaixo: "Monócitos baixos.",
        mensagemNormal: "Seus monócitos estão dentro dos valores normais.",
        mensagemAlto: "Monócitos elevados. Pode indicar infecção ou inflamação.",
        mensagemMuitoAlto: "Monócitos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure um médico", "Pode indicar imunossupressão", "Mantenha higiene pessoal", "Evite ambientes com muitas pessoas"],
          baixo: ["Durma adequadamente (7-9h)", "Reduza estresse", "Aumente alimentos anti-inflamatórios (gengibre, cúrcuma)", "Aumente alimentos com zinco (carne, frutos do mar)", "Procure um profissional"],
          alto: ["Pode indicar infecção ou inflamação", "Descanse bem", "Reduza alimentos inflamatórios (processados, açúcar)", "Pratique atividade física leve", "Procure um médico para diagnóstico"],
          muito_alto: ["Procure urgentemente um médico", "Pode indicar infecção severa ou inflamação crônica", "Evite alimentos inflamatórios", "Descanse bastante", "Acompanhamento médico é necessário"]
        }
      },
      eosinofilos: {
        nome: "Eosinófilos",
        unidade: "%",
        descricao: "Células envolvidas em alergias e parasitas.",
        muitoBaixo: 0,
        baixo: 0.5,
        minimo: 1,
        maximo: 5,
        alto: 7,
        muitoAlto: 10,
        mensagemBaixo: "Eosinófilos baixos.",
        mensagemNormal: "Seus eosinófilos estão dentro dos valores normais.",
        mensagemAlto: "Eosinófilos elevados. Pode indicar alergia ou parasita.",
        mensagemMuitoAlto: "Eosinófilos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Geralmente não causa preocupação", "Procure um médico se acompanhado de outros sintomas"],
          baixo: ["Situação normal na maioria dos casos", "Se associado a sintomas, consulte um profissional"],
          alto: ["Verifique se há alergias (rinite, asma, dermatite)", "Procure verificar infecções parasitárias", "Reduza alimentos que causam alergia", "Procure um alergista ou clínico geral", "Evite ácaros e mofo (limpe ambiente)"],
          muito_alto: ["Procure urgentemente um alergista ou médico", "Pode indicar parasita ou alergia severa", "Faça teste de alergia", "Procure investigar origem das parasitas", "Pode necessitar tratamento específico"]
        }
      },
      basofilos: {
        nome: "Basófilos",
        unidade: "%",
        descricao: "Células envolvidas em reações alérgicas.",
        muitoBaixo: -1,
        baixo: 0.5,
        minimo: 0,
        maximo: 2,
        alto: 2.5,
        muitoAlto: 3,
        mensagemBaixo: "Basófilos baixos.",
        mensagemNormal: "Seus basófilos estão dentro dos valores normais.",
        mensagemAlto: "Basófilos elevados. Pode indicar alergia ou inflamação.",
        mensagemMuitoAlto: "Basófilos muito elevados. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Geralmente não causa preocupação"],
          baixo: ["Situação normal na maioria dos casos"],
          alto: ["Pode indicar alergia ou inflamação", "Procure investigar alergias", "Reduza alimentos alergênicos", "Procure um alergista", "Mantenha ambiente limpo (reduz ácaros)"],
          muito_alto: ["Procure um alergista ou médico", "Pode indicar alergia severa ou reação inflamatória", "Investigar possíveis alergias", "Evite fatores alergênicos", "Acompanhamento médico"]
        }
      },
      plaquetas: {
        nome: "Plaquetas",
        unidade: "/mm³",
        descricao: "Células responsáveis pela coagulação do sangue.",
        muitoBaixo: 100000,
        baixo: 130000,
        minimo: 150000,
        maximo: 450000,
        alto: 470000,
        muitoAlto: 500000,
        mensagemBaixo: "Plaquetas baixas (trombocitopenia). Pode afetar a coagulação.",
        mensagemNormal: "Sua contagem de plaquetas está normal.",
        mensagemAlto: "Plaquetas elevadas. Pode indicar inflamação ou outras condições.",
        mensagemMuitoAlto: "Plaquetas muito elevadas. Procure um profissional de saúde.",
        dicas: {
          muito_baixo: ["Procure urgentemente um hematologista", "Evite atividades que possam causar hematomas", "Cuidado com ferimentos", "Pode necessitar transfusão"],
          baixo: ["Aumentar alimentos ricos em vitamina C (frutas cítricas)", "Aumente folato (espinafre, brócolis)", "Durma adequadamente", "Evite bebidas alcoólicas", "Procure um profissional de saúde"],
          alto: ["Procure investigar causa (inflamação, infecção)", "Mantenha-se hidratado", "Evite suplementos que aumentam coagulação", "Procure um médico para diagnóstico", "Pode estar relacionado a estresse"],
          muito_alto: ["Procure urgentemente um médico ou hematologista", "Pode indicar trombose ou outro problema de coagulação", "Evite atividades que aumentem pressão", "Hidrate-se bem", "Acompanhamento médico urgente é necessário"]
        }
      }
    }
  },
  glicemia: {
    nome: "Glicemia",
    descricao: "Análise dos níveis de glicose no sangue",
    exames: {
      glicemiaJejum: {
        nome: "Glicemia de Jejum",
        unidade: "mg/dL",
        descricao: "A glicemia de jejum avalia a quantidade de açúcar (glicose) no sangue após um período sem comer. Ela é usada para diagnosticar e acompanhar o diabetes.\n\n• Normal: o corpo está controlando bem o açúcar no sangue\n\n• Alta: pode indicar diabetes ou risco de desenvolver a doença\n\n• Baixa: pode indicar falta de açúcar no sangue, causando sintomas como fraqueza e tontura",
        muitoBaixo: 0,
        baixo: 50,
        minimo: 70,
        maximo: 99,
        alto: 125,
        muitoAlto: 126,
        mensagemBaixo: "Glicemia baixa (hipoglicemia - abaixo de 70 mg/dL). Procure imediatamente um profissional de saúde.",
        mensagemNormal: "Sua glicemia está dentro dos valores normais (70-99 mg/dL).",
        mensagemAlto: "Sua glicemia indica pré-diabetes (100-125 mg/dL). Procure um profissional de saúde.",
        mensagemMuitoAlto: "Sua glicemia está elevada (≥ 126 mg/dL), indicando diabetes. A confirmação geralmente exige dois exames com resultados elevados. Procure imediatamente um profissional de saúde.",
        dicas: {
          muito_baixo: ["Consuma alimentos com carboidrato simples imediatamente (suco, refrigerante, doces)", "Evite exercícios intensos sem acompanhamento", "Procure um endocrinologista urgentemente"],
          baixo: ["Aumente ingestão de carboidratos saudáveis", "Faça pequenas refeições ao longo do dia", "Evite longos períodos de jejum", "Consulte um profissional de saúde"],
          alto: ["Reduza alimentos açucarados e refinados", "Pratique atividade física regular (30 min/dia)", "Aumente fibras na dieta", "Mantenha peso adequado", "Limite bebidas açucaradas", "Consulte um profissional de saúde"],
          muito_alto: ["Procure imediatamente um profissional de saúde", "Evite alimentos açucarados completamente", "Pratique atividade física com orientação profissional", "Considere mudanças significativas no estilo de vida", "Acompanhamento médico regular é essencial"]
        }
      },
      hba1c: {
        nome: "HbA1c (Hemoglobina Glicada)",
        unidade: "%",
        descricao: "A hemoglobina glicada avalia a média do nível de açúcar no sangue nos últimos 2 a 3 meses. Ela é usada para diagnosticar e monitorar o controle do diabetes ao longo do tempo.\n\n• Normal: indica bom controle da glicose\n\n• Alta: mostra que o açúcar ficou elevado por um período prolongado\n\n• Baixa: geralmente não é preocupante, mas pode ocorrer em algumas situações específicas",
        muitoBaixo: 0,
        baixo: 4.0,
        minimo: 4.0,
        maximo: 5.6,
        alto: 6.4,
        muitoAlto: 6.5,
        mensagemBaixo: "HbA1c baixa. Procure um profissional de saúde.",
        mensagemNormal: "Sua HbA1c está dentro dos valores normais (inferior a 5,7%).",
        mensagemAlto: "Sua HbA1c indica pré-diabetes (5,7% a 6,4%). Procure um profissional de saúde.",
        mensagemMuitoAlto: "Sua HbA1c está elevada (≥ 6,5%), indicando diabetes. Para pacientes diagnosticados, a meta geral é inferior a 7%. Procure imediatamente um profissional de saúde.",
        dicas: {
          muito_baixo: ["Consulte seu médico para avaliar hipoglicemia recorrente", "Ajuste medicações se estiver em tratamento", "Aumente ingestão de carboidratos"],
          baixo: ["Mantenha alimentação balanceada", "Realize atividades físicas regularmente", "Consulte um profissional de saúde"],
          alto: ["Melhore a qualidade da alimentação ao longo de 2-3 meses", "Pratique atividade física regular (mínimo 150 min/semana)", "Reduza estresse e melhore sono", "Reduza alimentos processados e açúcares", "Acompanhamento médico regular"],
          muito_alto: ["Procure imediatamente um endocrinologista", "Pode estar indicado início de tratamento medicamentoso", "Mude hábitos alimentares significativamente", "Pratique exercício físico diário com orientação profissional", "Monitoramento frequente é necessário"]
        }
      }
    }
  },
  lipidograma: {
    nome: "Lipidograma",
    descricao: "O lipidograma avalia os níveis de gordura no sangue. Ele ajuda a identificar e monitorar o risco de doenças cardiovasculares, como infarto e AVC.\n\nColesterol total: mostra a quantidade geral de colesterol no sangue.\n\nHDL (colesterol bom): ajuda a remover gordura das artérias, protegendo o coração.\n\nLDL (colesterol ruim): pode se acumular nas artérias e aumentar o risco de entupimento.\n\nNão-HDL: representa a soma das gorduras consideradas ruins, sendo um bom indicador de risco cardiovascular.\n\nTriglicerídeos: são gorduras relacionadas principalmente à alimentação. Quando estão altos, aumentam o risco de doenças do coração.",
    jejum: "Este exame pode ser realizado com jejum (ideal) ou sem jejum",
    exames: {
      colesterolTotal: {
        nome: "Colesterol Total",
        unidade: "mg/dL",
        descricao: "Mede a quantidade total de colesterol no sangue.",
        possuiIdades: true,
        idades: {
          adulto: {
            label: "Adultos (> 20 anos)",
            muitoBaixo: 0,
            baixo: 150,
            minimo: 150,
            maximo: 189,
            alto: 200,
            muitoAlto: 240
          },
          adolescente: {
            label: "Crianças e Adolescentes (< 19 anos)",
            muitoBaixo: 0,
            baixo: 140,
            minimo: 140,
            maximo: 169,
            alto: 170,
            muitoAlto: 200
          }
        },
        mensagemBaixo: "Colesterol total baixo. Procure um profissional de saúde.",
        mensagemNormal: "Seu colesterol total está dentro dos valores normais.",
        mensagemAlto: "Seu colesterol total está elevado. Recomendações: reduza alimentos ricos em gordura saturada (frituras, carnes vermelhas gordas), aumente fibras (aveia, maçã), pratique exercícios regularmente e procure um profissional de saúde.",
        mensagemMuitoAlto: "Seu colesterol total está muito elevado. Procure imediatamente um profissional de saúde para avaliar possível necessidade de medicação.",
        dicas: {
          muito_baixo: ["Procure um médico para avaliar deficiência nutricional", "Aumente ingestão de alimentos saudáveis com gorduras boas", "Considere suplementação nutricional"],
          baixo: ["Mantenha alimentação balanceada", "Consuma alimentos com gorduras saudáveis (abacate, nozes)", "Procure um profissional de saúde"],
          alto: ["Reduza alimentos ricos em gordura saturada (frituras, carnes vermelhas gordas)", "Aumente fibras na dieta (aveia, maçã, feijão)", "Pratique exercício físico regular (30 min/dia)", "Reduza consumo de alimentos processados", "Mantenha peso saudável", "Consulte um profissional de saúde"],
          muito_alto: ["Procure imediatamente um cardiologista", "Reduza drasticamente gordura saturada", "Pode estar indicada medicação", "Pratique exercício físico com orientação profissional", "Mude significativamente seu estilo de vida"]
        }
      },
      hdl: {
        nome: "Colesterol HDL",
        unidade: "mg/dL",
        descricao: "Colesterol 'bom' que remove gordura das artérias.",
        possuiIdades: true,
        semLimiteSuperior: true, // HDL: quanto maior, melhor. Sem limite máximo clínico.
        idades: {
          adulto: {
            label: "Adultos (> 20 anos)",
            muitoBaixo: 0,
            baixo: 30,
            minimo: 40,
            maximo: 60, // Valor de referência, mas não é limite máximo
            alto: 999,
            muitoAlto: 999
          },
          adolescente: {
            label: "Crianças e Adolescentes (< 19 anos)",
            muitoBaixo: 0,
            baixo: 35,
            minimo: 45,
            maximo: 65, // Valor de referência, mas não é limite máximo
            alto: 999,
            muitoAlto: 999
          }
        },
        mensagemBaixo: "HDL baixo (colesterol 'bom'). O HDL protege o coração e artérias.",
        mensagemNormal: "Seu HDL está dentro dos valores normais.",
        mensagemAlto: "Seu HDL está ótimo! Continue mantendo hábitos saudáveis.",
        mensagemMuitoAlto: "Seu HDL está excelente!",
        dicas: {
          muito_baixo: ["Procure um cardiologista urgentemente", "Aumente exercício físico regularmente", "Consuma alimentos com gorduras boas (azeite, abacate)", "Evite fumo e bebidas alcoólicas"],
          baixo: ["Pratique exercício aeróbico regularmente (mínimo 150 min/semana)", "Consuma alimentos ricos em ômega-3 (peixe, sementes de linhaça)", "Aumente ingestão de frutas e vegetais", "Reduza peso se necessário", "Evite fumo"],
          alto: ["Continue com hábitos saudáveis", "Mantenha exercício físico regular", "Mantenhaa alimentação balanceada"],
          muito_alto: ["Ótimo! Continue assim!", "Mantenha os hábitos saudáveis que está seguindo", "Continue com exercício e alimentação adequados"]
        }
      },
      ldl: {
        nome: "Colesterol LDL",
        unidade: "mg/dL",
        descricao: "Colesterol 'ruim' que deposita nas artérias.",
        possuiIdades: true,
        idades: {
          adulto: {
            label: "Adultos (> 20 anos)",
            muitoBaixo: 0,
            baixo: 70,
            minimo: 70,
            maximo: 129,
            alto: 159,
            muitoAlto: 190
          },
          adolescente: {
            label: "Crianças e Adolescentes (< 19 anos)",
            muitoBaixo: 0,
            baixo: 60,
            minimo: 60,
            maximo: 109,
            alto: 130,
            muitoAlto: 160
          }
        },
        mensagemBaixo: "LDL baixo (colesterol 'ruim'). Isto é desejável!",
        mensagemNormal: "Seu LDL está dentro dos valores normais.",
        mensagemAlto: "Seu LDL está elevado (colesterol 'ruim'). Recomendações: reduza alimentos ricos em gordura saturada, aumente atividade física, consuma mais fibras e procure um profissional de saúde.",
        mensagemMuitoAlto: "Seu LDL está muito elevado. Procure imediatamente um profissional de saúde, pode ser necessário usar medicação.",
        dicas: {
          muito_baixo: ["Mantenha alimentação balanceada", "Procure profissional para avaliar"],
          baixo: ["Mantenha hábitos saudáveis", "Continue com exercício físico regular"],
          alto: ["Reduza gorduras saturadas (carnes vermelhas, laticínios gordos)", "Aumente fibras solúveis (aveia, cevada, feijão)", "Pratique exercício físico diário", "Evite alimentos fritos", "Mantenha peso saudável", "Procure profissional de saúde"],
          muito_alto: ["Procure imediatamente um cardiologista", "Pode ser necessário usar medicação (estatinas)", "Reduza drasticamente gordura saturada", "Pratique exercício com orientação profissional", "Monitoramento frequente é essencial"]
        }
      },
      naoHdl: {
        nome: "Colesterol não-HDL",
        unidade: "mg/dL",
        descricao: "Representa todas as partículas de colesterol prejudiciais (LDL + VLDL).",
        possuiIdades: true,
        idades: {
          adulto: {
            label: "Adultos (> 20 anos)",
            muitoBaixo: 0,
            baixo: 80,
            minimo: 80,
            maximo: 159,
            alto: 189,
            muitoAlto: 220
          },
          adolescente: {
            label: "Crianças e Adolescentes (< 19 anos)",
            muitoBaixo: 0,
            baixo: 70,
            minimo: 70,
            maximo: 129,
            alto: 160,
            muitoAlto: 190
          }
        },
        mensagemBaixo: "Colesterol não-HDL baixo. Isto é desejável!",
        mensagemNormal: "Seu colesterol não-HDL está dentro dos valores normais.",
        mensagemAlto: "Seu colesterol não-HDL está elevado. Procure um profissional de saúde para orientações sobre dieta e atividade física.",
        mensagemMuitoAlto: "Seu colesterol não-HDL está muito elevado. Procure imediatamente um profissional de saúde.",
        dicas: {
          muito_baixo: ["Mantenha alimentação adequada", "Procure profissional para avaliar"],
          baixo: ["Continue com hábitos saudáveis", "Matenha exercício regular"],
          alto: ["Siga as mesmas recomendações para reduzir colesterol total e LDL", "Evite açúcares refinados e alimentos processados", "Mantenha peso saudável", "Pratique atividade física regularmente", "Procure profissional de saúde"],
          muito_alto: ["Procure imediatamente um cardiologista", "Reduza drasticamente alimentos processados e gordurosos", "Pode estar indicada medicação", "Pratique exercício físico com orientação", "Mudanças significativas no estilo de vida são necessárias"]
        }
      },
      triglicerides: {
        nome: "Triglicérides",
        unidade: "mg/dL",
        descricao: "Tipo de gordura no sangue que pode aumentar risco cardiovascular.",
        possuiIdades: true,
        jejumDepende: true,
        idades: {
          adulto: {
            label: "Adultos (> 20 anos)",
            comJejum: {
              muitoBaixo: 0,
              baixo: 100,
              minimo: 100,
              maximo: 149,
              alto: 150,
              muitoAlto: 200
            },
            semJejum: {
              muitoBaixo: 0,
              baixo: 125,
              minimo: 125,
              maximo: 174,
              alto: 175,
              muitoAlto: 225
            }
          },
          crianca: {
            label: "Crianças (0-9 anos)",
            comJejum: {
              muitoBaixo: 0,
              baixo: 50,
              minimo: 50,
              maximo: 74,
              alto: 75,
              muitoAlto: 100
            },
            semJejum: {
              muitoBaixo: 0,
              baixo: 60,
              minimo: 60,
              maximo: 84,
              alto: 85,
              muitoAlto: 130
            }
          },
          adolescente: {
            label: "Adolescentes (10-19 anos)",
            comJejum: {
              muitoBaixo: 0,
              baixo: 60,
              minimo: 60,
              maximo: 89,
              alto: 90,
              muitoAlto: 130
            },
            semJejum: {
              muitoBaixo: 0,
              baixo: 75,
              minimo: 75,
              maximo: 99,
              alto: 100,
              muitoAlto: 150
            }
          }
        },
        mensagemBaixo: "Triglicérides baixos. Isto é desejável!",
        mensagemNormal: "Seus triglicérides estão dentro dos valores normais.",
        mensagemAlto: "Seus triglicérides estão elevados. Recomendações: reduza açúcares e bebidas alcoólicas, pratique exercícios regularmente, aumente fibras e procure um profissional de saúde.",
        mensagemMuitoAlto: "Seus triglicérides estão muito elevados. Procure imediatamente um profissional de saúde, pode aumentar risco cardiovascular.",
        dicas: {
          muito_baixo: ["Mantenha alimentação balanceada", "Procure profissional para avaliar"],
          baixo: ["Continue com hábitos saudáveis", "Mantenha exercício físico regular"],
          alto: ["Reduza alimentos açucarados e bebidas alcoólicas", "Aumente fibras solúveis (aveia, feijão)", "Pratique exercício físico regularmente", "Reduza carboidratos refinados", "Mantenha peso saudável", "Procure profissional de saúde"],
          muito_alto: ["Procure urgentemente um cardiologista", "Evite completamente bebidas alcoólicas", "Reduza drasticamente açúcares e alimentos processados", "Pratique exercício físico com orientação profissional", "Medicação pode ser necessária"]
        }
      }
    }
  }
};
