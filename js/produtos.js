$(function(){

    $.getJSON('/model/listar-produtos.php', function(dados){
        dados.forEach(function(el, id){
            
            var tr = '<tr>'
                    +'<td>'+ el.id +'</td>'
                    +'<td>'+ el.nome +'</td>'
                    +'<td>'+ el.categoria +'</td>'
                    +'<td>R$ '+ el.preco +'</td>'
                    +'<td> '
                        +'<a href="/produtos-alterar.html" class="btn btn-primary" title="Editar"><i class="fas fa-edit"></i></a>'
                        +'<a href="/produtos-deletar.html" class="btn btn-danger" title="Deletar"><i class="fas fa-minus-circle"></i></a>'
                    +'</td>'
                +'</tr>';

            $('#lista-produtos').append(tr);
        });
    });

});