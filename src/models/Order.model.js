

class Order {
    'cliente' = {
        'nome': '',
        'tipoPessoa': '',
        'endereco': '',
        'cpf_cnpj': '',
        'ie_rg': '',
        'numero': '',
        'complemento': '',
        'bairro': '',
        'cep': '',
        'cidade': '',
        'uf': '',
        'fone': '',
        'email': ''
    }
    'transporte' = {
        'transportadora': '',
        'tipo_frete': '',
        'servico_correios': '',
        'dados_etiqueta': {
            'nome': '',
            'endereco': '',
            'numero': '',
            'complemento': '',
            'municipio': '',
            'uf': '',
            'cep': '',
            'bairro': ''
        },
        'volumes': [
            {
                'servico': '',
                'codigoRastreamento': ''
            }
        ]
    }
    'itens' = [
        {
            'item': {
                'codigo': '',
                'descricao': '',
                'un': '',
                'qtde': '',
                'vlr_unit': ''
            }
        }
    ]
    'parcelas' = [
        {
            'data': '',
            'vlr': '',
            'obs': ''
        }
    ]
    'vlr_frete' = ''
    'vlr_desconto' = ''
    'obs' = ''
    'obs_internas' = ''
}