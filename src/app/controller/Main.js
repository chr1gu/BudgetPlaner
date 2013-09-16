Ext.define('BudgetPlaner.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            view: 'main',
            titlebar: 'maintitlebar'
        },
        control: {
            view: {
                mainviewchange: 'updateView'
            }
        }
    },

    updateView: function(main, view) {
        this.getTitlebar().setTitle(view.title);
    }
});
