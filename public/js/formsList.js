function getForms() {
    return [
        {
            folderName: 'afastamento_curso_formacao',
            linkName: 'Afastamento para Participar de Curso de Formacao'
        },
        {
            folderName: 'abono_permanencia',
            linkName: 'Abono permanencia'
        }
    ]
}

function getFormsLinks() {
    const forms = getForms();

    const formsLinks = forms.map(form => {
        const a = document.createElement('a');
        
        a.href = "forms/" + form.folderName + "/index.html";
        a.textContent = form.linkName;
        return a;
    });

    return formsLinks;
}

function setFormLinks() {
    const element = document.getElementById('SYSform_list');
    const formsLinks = getFormsLinks();

    formsLinks.forEach(formLink => {
        const li = document.createElement('li');
        li.append(formLink);
        element.appendChild(li);
    })
}

setFormLinks();