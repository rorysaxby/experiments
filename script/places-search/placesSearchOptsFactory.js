(function () {
    'use strict';
    angular
        .module('placesOpts.factory', [])
        .service('placesOpts', function () {
            return{
                content:{
                    title: 'Places',
                    intro: 'Here are some locations around Dorset'
                },
                display:{
                    shrink: false
                },
                filters:{
                    search: '',
                    order: ''
                },
                filterProps:{
                    search: ['Name'],
                    orderBy: [
                        {
                            value: 'Name A to Z',
                            code: '+name'
                        },
                        {
                            value: 'Name Z to A',
                            code: '-name'
                        }
                    ]
                }
            }
        });
})();