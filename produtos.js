
$(function () {

    $("#preco").mask("000,00");

    $.getJSON('/model/listar-produtos.php', function (dados) {
        dados.forEach(function (el, id) {

            var tr = '<tr>'
                + '<td>' + el.id + '</td>'
                + '<td>' + el.nome + '</td>'
                + '<td>' + el.categoria + '</td>'
                + '<td>R$ ' + el.preco + '</td>'
                + '<td> '
                + '<a href="/produtos-alterar.html class="btn btn-primary" title="Editar"><i class="fas fa-edit"></i></a>'
                + '<a href="/#" class="btn btn-danger" data-toggle="modal" data-target="#deletar-produto"> title="Deletar"><i class="fas fa-minus-circle"></i></a>'
                + '</td>'
                + '</tr>';

            $('#lista-produtos').append(tr);
        });
    });

    $("#salvar-produto").click(function(){



        if ( $('#nome').val().length <= 0 ){

            $('#nome').addClass('is-invalid');
            return false;
        }

        if ( $('#marca').val() == 0 ){

            $('#marca').addClass('is-invalid');
            return false;
        }

        if ( $('#categoria').val() == 0 ){

            $('#categoria').addClass('is-invalid');
            return false;
        }

        if ( $('#preco').val() <= 0 ){

            $('#preco').addClass('is-invalid');
            return false;
        }
        
    });

});