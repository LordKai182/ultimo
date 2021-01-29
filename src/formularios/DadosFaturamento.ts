export const FrmDadosFaturamento = [
                    {
                        teste:[
                            {
                                id:1,
                                label:'Código',
                                type:'input',
                                model:'codigo'
                            },
                            {
                                id:2,
                                label:'CNPJ/CPF',
                                type:'input',
                                model:'cnpjCpf'
                            },
                            {
                                id:3,
                                label:'Razão Social',
                                type:'input',
                                model:'razaoSocial'
                            }
                        ]
                    },
                    {
                        teste:[
                            {
                                id:4,
                                label:'Código Vendedor',
                                type:'input',
                                model:'vendedor',
                                submodel:'codigo'
                            } ,
                            {
                                id:5,
                                label:'Nome Vendedor',
                                type:'input',
                                model:'vendedor',
                                submodel:'nome'
                            } 
                        ]
                    },
                    {
                        teste:[
                            {
                                id:6,
                                label:'Código Vencimento',
                                type:'input',
                                model:'vencimento',
                                submodel:'codigo'
                            } ,
                            {
                                id:7,
                                label:'Vencimento',
                                type:'input',
                                model:'vencimento',
                                submodel:'descricao'
                            },
                            
                        ]
                    },
                    {
                        teste:[
                            {
                                id:8,
                                label:'Tipo de Cobrança',
                                type:'radio',
                                model:'tipoCobranca',
                                options:[
                                    {label:'Carteira', value:1},
                                    {label:'Bancária', value:2}
                                ]
                            },
                            {
                                id:9,
                                label:'Cód. Banco',
                                type:'input',
                                model:'banco',
                                submodel:'codigo',
                                style:'width:40px;'
                            },
                            {
                                id:10,
                                label:'Banco',
                                type:'input',
                                model:'banco',
                                style:'width:160px;',
                                submodel:'nome'
                            },
                            {
                                id:11,
                                label:'Tipo de Envio',
                                type:'select',
                                model:'tipoEnvio',
                                options:[
                                    {label:'E-mail', value:1},
                                    {label:'Postagem', value:2}
                                ]
                            } 
                        ]
                    },
                    {
                        teste:[
                            {
                                id:12,
                                label:'E-mail',
                                type:'input',
                                model:'emailCobranca',
                                style:'width:365px;'
                               
                            },
                            {
                                id:13,
                                label:'Carteira',
                                type:'select',
                                model:'configuracaoBoletoId',
                                style:'width:500px;'
                               
                            }
                        ]
                    },
                    {
                        teste:[
                            {
                                id:14,
                                label:'Tipo de Endereço pra Envio',
                                model:'enderecoBoleto',
                                type:'radio',
                                options:[
                                    {label:'Endereço Basico', value:1},
                                    {label:'Endereço de Entrega', value:2}
                                ]
                            },
                            {
                                id:15,
                                label:'Protestar Automaticamente',
                                model:'protestar',
                                type:'check'
                            },
                            {
                                id:16,
                                label:'dias para Protesto',
                                type:'input',
                                model:'diasProtesto',
                                style:'width:60px;'
                            }
                        ]
                    },
                    {
                        teste:[
                            {
                                id:17,
                                label:'Classificação',
                                type:'radio',
                                model:'tipoClassificacao',
                                options:[
                                    {label:'Pequeno', value:1},
                                    {label:'Médio', value:2},
                                    {label:'Grande', value:3},
                                ]
                            },
                            {
                                id:18,
                                label:'Não Permitir Vendas',
                                model:'bloqueiaVenda',
                                style:'width:500px;',
                                type:'check'
                            },
                            {
                                id:16,
                                label:'Dias de Inadiplência para bloqueio',
                                type:'input',
                                model:'diasProtesto',
                                style:'width:60px;'
                            },
                            
                        ]
                    },
                    {
                        teste:[
                            {
                                id:17,
                                label:'Bloquear mesmo Adiplente',
                                model:'bloqueiaAdimplente',
                                type:'select',
                                options:[
                                    {label:'Sim', value:true},
                                    {label:'Não', value:false}
                                ]

                            },
                            {
                                id:18,
                                label:'Acumular Crédito/Débito',
                                model:'acumulado',
                                type:'check',

                            },
                            {
                                id:19,
                                label:'Valor limite de Compra',
                                model:'limiteCreditoMax',
                                type:'input',

                            }
                        ]
                    }
]