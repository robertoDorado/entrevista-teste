/**
 * Motivos pelo qual eu prefiro utlizar o fatch API
 * 
 *** A Promise retornada do fetch() não 
* rejeitará o status do erro HTTP, mesmo 
* que a resposta seja um HTTP 404 ou 500. Em vez disso, 
* ela irá resolver normalmente (com o status ok definido como falso), 
* e só irá rejeitar se houver falha na rede ou se algo impedir a requisição 
* de ser completada.
* 
*** fetch() não receberá cookies cross-site; 
* você não pode estabelecer uma conexão cross-site 
* usando fetch. Cabeçalhos Set-Cookie de outros sites
* são ignorados silenciosamente.
* 
*** fetch() não enviará cookies, 
* a não ser que seja definida a opção credentials 
* do parâmetro init. (Desde 25 de agosto de 2017. 
* A especificação alterou as políticas padrão de credenciais 
* para  same-origin. O Firefox mudou desde 61.0b13.)
*/

let box = document.querySelectorAll('.more')
let link = [...box]

link.forEach(items => {

    items.addEventListener('click', (e) => {
        e.preventDefault()
        

            let box_color = e.target.parentElement
            box_color = box_color.getAttribute('class').match(/\s\w+/).shift().trim()

            let simple_table = document.querySelector('.portlet-title')

            if (box_color == 'blue') {
                simple_table.style.backgroundColor = "#27a9e3"

                let form = new FormData()
                form.append('data', 0)

                fetch('./assets/utils/receber.php', { method: 'POST', body: form })
                    .then(data => data.json()).then(data => {

                        let head_nome = document.querySelector('.td_head_elem1')
                        let head_cpf = document.querySelector('.td_head_elem2')
                        let head_endereco = document.querySelector('.td_head_elem3')
                        let head_telefone = document.querySelector('.td_head_elem4')
                        let head_email = document.querySelector('.td_head_elem5')

                        if (head_nome && head_cpf && head_endereco && head_telefone && head_email) {

                            head_nome.innerHTML = 'nome'
                            head_cpf.innerHTML = 'cpf'
                            head_endereco.innerHTML = 'endereço'
                            head_telefone.innerHTML = 'telefone'
                            head_email.innerHTML = 'email'

                            let body_nome = document.querySelectorAll('.td_body_elem1')
                            let body_cpf = document.querySelectorAll('.td_body_elem2')
                            let body_endereco = document.querySelectorAll('.td_body_elem3')
                            let body_telefone = document.querySelectorAll('.td_body_elem4')
                            let body_email = document.querySelectorAll('.td_body_elem5')

                            if (body_nome) {
                                body_nome = [...body_nome]
                                body_nome.forEach((elem, i) => {
                                    elem.innerHTML = data[i].nome
                                })
                            }

                            if (body_cpf) {
                                body_cpf = [...body_cpf]
                                body_cpf.forEach((elem, i) => {
                                    elem.innerHTML = data[i].cpf
                                })
                            }

                            if (body_endereco) {
                                body_endereco = [...body_endereco]
                                body_endereco.forEach((elem, i) => {
                                    elem.innerHTML = data[i].endereco
                                })
                            }

                            if (body_telefone) {
                                body_telefone = [...body_telefone]
                                body_telefone.forEach((elem, i) => {
                                    elem.innerHTML = data[i].telefone
                                })
                            }

                            if (body_email) {
                                body_email = [...body_email]
                                body_email.forEach((elem, i) => {
                                    elem.innerHTML = data[i].email
                                })
                            }

                        } else {

                            let thead = document.querySelector('.thead')

                            let tr_head = document.createElement('tr')
                            tr_head.setAttribute('class', 'tr_head')

                            let td_head_nome = document.createElement('td')
                            td_head_nome.setAttribute('class', 'td_head_elem1')

                            let td_head_cpf = document.createElement('td')
                            td_head_cpf.setAttribute('class', 'td_head_elem2')

                            let td_head_endereco = document.createElement('td')
                            td_head_endereco.setAttribute('class', 'td_head_elem3')

                            let td_head_telefone = document.createElement('td')
                            td_head_telefone.setAttribute('class', 'td_head_elem4')

                            let td_head_email = document.createElement('td')
                            td_head_email.setAttribute('class', 'td_head_elem5')

                            let tbody = document.querySelector('.tbody')

                            data.forEach((items) => {

                                let tr_body = document.createElement('tr')
                                tr_body.setAttribute('class', 'tr_body')

                                let td_body_nome = document.createElement('td')
                                td_body_nome.setAttribute('class', 'td_body_elem1')

                                let td_body_cpf = document.createElement('td')
                                td_body_cpf.setAttribute('class', 'td_body_elem2')

                                let td_body_endereco = document.createElement('td')
                                td_body_endereco.setAttribute('class', 'td_body_elem3')

                                let td_body_telefone = document.createElement('td')
                                td_body_telefone.setAttribute('class', 'td_body_elem4')

                                let td_body_email = document.createElement('td')
                                td_body_email.setAttribute('class', 'td_body_elem5')


                                thead.append(tr_head)
                                tr_head.append(td_head_nome)
                                tr_head.append(td_head_cpf)
                                tr_head.append(td_head_endereco)
                                tr_head.append(td_head_telefone)
                                tr_head.append(td_head_email)

                                td_head_nome.innerHTML = 'nome'
                                td_head_cpf.innerHTML = 'cpf'
                                td_head_endereco.innerHTML = 'endereço'
                                td_head_telefone.innerHTML = 'telefone'
                                td_head_email.innerHTML = 'email'

                                tbody.append(tr_body)
                                tr_body.append(td_body_nome)
                                tr_body.append(td_body_cpf)
                                tr_body.append(td_body_endereco)
                                tr_body.append(td_body_telefone)
                                tr_body.append(td_body_email)

                                td_body_nome.innerHTML = items.nome
                                td_body_cpf.innerHTML = items.cpf
                                td_body_endereco.innerHTML = items.endereco
                                td_body_telefone.innerHTML = items.telefone
                                td_body_email.innerHTML = items.email

                            })
                        }


                    })
            }

            if (box_color == 'green') {
                simple_table.style.backgroundColor = "#28b779"

                let form = new FormData()
                form.append('data', 1)

                fetch('./assets/utils/receber.php', { method: 'POST', body: form })
                    .then(data => data.json()).then(data => {

                        let head_nome = document.querySelector('.td_head_elem1')
                        let head_cpf = document.querySelector('.td_head_elem2')
                        let head_endereco = document.querySelector('.td_head_elem3')
                        let head_telefone = document.querySelector('.td_head_elem4')
                        let head_usuario = document.querySelector('.td_head_elem5')

                        if (head_nome && head_cpf && head_endereco && head_telefone && head_usuario) {

                            head_nome.innerHTML = 'nome'
                            head_cpf.innerHTML = 'cpf'
                            head_endereco.innerHTML = 'endereço'
                            head_telefone.innerHTML = 'telefone'
                            head_usuario.innerHTML = 'usuario'

                            let body_nome = document.querySelectorAll('.td_body_elem1')
                            let body_cpf = document.querySelectorAll('.td_body_elem2')
                            let body_endereco = document.querySelectorAll('.td_body_elem3')
                            let body_telefone = document.querySelectorAll('.td_body_elem4')
                            let body_usuario = document.querySelectorAll('.td_body_elem5')

                            if (body_nome) {
                                body_nome = [...body_nome]
                                body_nome.forEach((elem, i) => {
                                    elem.innerHTML = data[i].nome
                                })
                            }

                            if (body_cpf) {
                                body_cpf = [...body_cpf]
                                body_cpf.forEach((elem, i) => {
                                    elem.innerHTML = data[i].cpf
                                })
                            }

                            if (body_endereco) {
                                body_endereco = [...body_endereco]
                                body_endereco.forEach((elem, i) => {
                                    elem.innerHTML = data[i].endereco
                                })
                            }

                            if (body_telefone) {
                                body_telefone = [...body_telefone]
                                body_telefone.forEach((elem, i) => {
                                    elem.innerHTML = data[i].telefone
                                })
                            }

                            if (body_usuario) {
                                body_usuario = [...body_usuario]
                                body_usuario.forEach((elem, i) => {
                                    elem.innerHTML = data[i].usuario
                                })
                            }

                        } else {

                            let thead = document.querySelector('.thead')

                            let tr_head = document.createElement('tr')
                            tr_head.setAttribute('class', 'tr_head')

                            let td_head_nome = document.createElement('td')
                            td_head_nome.setAttribute('class', 'td_head_elem1')

                            let td_head_cpf = document.createElement('td')
                            td_head_cpf.setAttribute('class', 'td_head_elem2')

                            let td_head_endereco = document.createElement('td')
                            td_head_endereco.setAttribute('class', 'td_head_elem3')

                            let td_head_telefone = document.createElement('td')
                            td_head_telefone.setAttribute('class', 'td_head_elem4')

                            let td_head_usuario = document.createElement('td')
                            td_head_usuario.setAttribute('class', 'td_head_elem5')

                            let tbody = document.querySelector('.tbody')

                            data.forEach((items) => {

                                let tr_body = document.createElement('tr')
                                tr_body.setAttribute('class', 'tr_body')

                                let td_body_nome = document.createElement('td')
                                td_body_nome.setAttribute('class', 'td_body_elem1')

                                let td_body_cpf = document.createElement('td')
                                td_body_cpf.setAttribute('class', 'td_body_elem2')

                                let td_body_endereco = document.createElement('td')
                                td_body_endereco.setAttribute('class', 'td_body_elem3')

                                let td_body_telefone = document.createElement('td')
                                td_body_telefone.setAttribute('class', 'td_body_elem4')

                                let td_body_usuario = document.createElement('td')
                                td_body_usuario.setAttribute('class', 'td_body_elem5')


                                thead.append(tr_head)
                                tr_head.append(td_head_nome)
                                tr_head.append(td_head_cpf)
                                tr_head.append(td_head_endereco)
                                tr_head.append(td_head_telefone)
                                tr_head.append(td_head_usuario)

                                td_head_nome.innerHTML = 'nome'
                                td_head_cpf.innerHTML = 'cpf'
                                td_head_endereco.innerHTML = 'endereço'
                                td_head_telefone.innerHTML = 'telefone'
                                td_head_usuario.innerHTML = 'usuario'

                                tbody.append(tr_body)
                                tr_body.append(td_body_nome)
                                tr_body.append(td_body_cpf)
                                tr_body.append(td_body_endereco)
                                tr_body.append(td_body_telefone)
                                tr_body.append(td_body_usuario)

                                td_body_nome.innerHTML = items.nome
                                td_body_cpf.innerHTML = items.cpf
                                td_body_endereco.innerHTML = items.endereco
                                td_body_telefone.innerHTML = items.telefone
                                td_body_usuario.innerHTML = items.usuario

                            })
                        }
                    })
            }

            if (box_color == 'purple') {
                simple_table.style.backgroundColor = "#852b99"

                let form = new FormData()
                form.append('data', 2)

                fetch('./assets/utils/receber.php', { method: 'POST', body: form })
                    .then(data => data.json()).then(data => {
                        let head_nome = document.querySelector('.td_head_elem1')
                        let head_cpf = document.querySelector('.td_head_elem2')
                        let head_cidade = document.querySelector('.td_head_elem3')
                        let head_email = document.querySelector('.td_head_elem4')
                        let head_usuario = document.querySelector('.td_head_elem5')

                        if (head_nome && head_cpf && head_cidade && head_email && head_usuario) {

                            head_nome.innerHTML = 'nome'
                            head_cpf.innerHTML = 'cpf'
                            head_cidade.innerHTML = 'cidade'
                            head_email.innerHTML = 'email'
                            head_usuario.innerHTML = 'usuario'

                            let body_nome = document.querySelectorAll('.td_body_elem1')
                            let body_cpf = document.querySelectorAll('.td_body_elem2')
                            let body_cidade = document.querySelectorAll('.td_body_elem3')
                            let body_email = document.querySelectorAll('.td_body_elem4')
                            let body_usuario = document.querySelectorAll('.td_body_elem5')

                            if (body_nome) {
                                body_nome = [...body_nome]
                                body_nome.forEach((elem, i) => {
                                    elem.innerHTML = data[i].nome
                                })
                            }

                            if (body_cpf) {
                                body_cpf = [...body_cpf]
                                body_cpf.forEach((elem, i) => {
                                    elem.innerHTML = data[i].cpf
                                })
                            }

                            if (body_cidade) {
                                body_cidade = [...body_cidade]
                                body_cidade.forEach((elem, i) => {
                                    elem.innerHTML = data[i].cidade
                                })
                            }

                            if (body_email) {
                                body_email = [...body_email]
                                body_email.forEach((elem, i) => {
                                    elem.innerHTML = data[i].email
                                })
                            }

                            if (body_usuario) {
                                body_usuario = [...body_usuario]
                                body_usuario.forEach((elem) => {
                                    elem.innerHTML = ''
                                })
                            }

                        } else {

                            let thead = document.querySelector('.thead')

                            let tr_head = document.createElement('tr')
                            tr_head.setAttribute('class', 'tr_head')

                            let td_head_nome = document.createElement('td')
                            td_head_nome.setAttribute('class', 'td_head_elem1')

                            let td_head_cpf = document.createElement('td')
                            td_head_cpf.setAttribute('class', 'td_head_elem2')

                            let td_head_cidade = document.createElement('td')
                            td_head_cidade.setAttribute('class', 'td_head_elem3')

                            let td_head_email = document.createElement('td')
                            td_head_email.setAttribute('class', 'td_head_elem4')

                            let td_head_usuario = document.createElement('td')
                            td_head_usuario.setAttribute('class', 'td_head_elem5')

                            let tbody = document.querySelector('.tbody')

                            data.forEach((items) => {

                                let tr_body = document.createElement('tr')
                                tr_body.setAttribute('class', 'tr_body')

                                let td_body_nome = document.createElement('td')
                                td_body_nome.setAttribute('class', 'td_body_elem1')

                                let td_body_cpf = document.createElement('td')
                                td_body_cpf.setAttribute('class', 'td_body_elem2')

                                let td_body_cidade = document.createElement('td')
                                td_body_cidade.setAttribute('class', 'td_body_elem3')

                                let td_body_email = document.createElement('td')
                                td_body_email.setAttribute('class', 'td_body_elem4')

                                let td_body_usuario = document.createElement('td')
                                td_body_usuario.setAttribute('class', 'td_body_elem5')


                                thead.append(tr_head)
                                tr_head.append(td_head_nome)
                                tr_head.append(td_head_cpf)
                                tr_head.append(td_head_cidade)
                                tr_head.append(td_head_email)
                                tr_head.append(td_head_usuario)

                                td_head_nome.innerHTML = 'nome'
                                td_head_cpf.innerHTML = 'cpf'
                                td_head_cidade.innerHTML = 'cidade'
                                td_head_email.innerHTML = 'email'
                                td_head_usuario.innerHTML = 'usuario'

                                tbody.append(tr_body)
                                tr_body.append(td_body_nome)
                                tr_body.append(td_body_cpf)
                                tr_body.append(td_body_cidade)
                                tr_body.append(td_body_email)
                                tr_body.append(td_body_usuario)

                                td_body_nome.innerHTML = items.nome
                                td_body_cpf.innerHTML = items.cpf
                                td_body_cidade.innerHTML = items.cidade
                                td_body_email.innerHTML = items.email
                                td_body_usuario.innerHTML = ''

                            })
                        }
                    })
            }

    })
})