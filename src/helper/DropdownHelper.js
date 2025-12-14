function getDropdownItems(
     ExcluirAction,
     ArquivarAction
) {
    return [
        {
            "label": "Excluir",
            "icon": {
                name: "Trash",
                size: 20
            },
            action: ExcluirAction
        },
        {
            "label": "Arquivar",
            "icon": {
                name: "Archive",
                size: 20
            },
            action: ArquivarAction
        }
    ];
}

export {
    getDropdownItems
}