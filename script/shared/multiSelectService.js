(function () {
    'use strict';
    angular
        .module('multiSelect.service', [])
        .service('multiSelect', function () {
            return {
                smartMulti: function(e, item, array, prop){

                    function setAction() {
                        var itemsSelected = checkItemsSelected();
                        if (itemsSelected) {
                            multiOpt();
                        } else {
                            selectOne();
                        };
                    };

                    function checkItemsSelected() {
                        for (var i = 0; i < array.length; i++) {
                            if (array[i][prop]) {
                                return true;
                            };
                            if (i === array.length - 1) {
                                return false;
                            };
                        };
                    };

                    function selectOne(){
                        setFalse(prop);
                        setFalse("multiId");
                        item[prop] = true;
                        item.multiId = true;
                    };

                    function setFalse(propOpt){
                        for (var i = 0; i < array.length; i++) {
                            if (array[i][propOpt]) {
                                array[i][propOpt] = false;
                            };
                        };
                    };

                    function multiOpt() {
                        if (e.ctrlKey) {
                            ctrlSelect();
                        } else if (e.shiftKey) {
                            shiftSelect();
                        } else {
                            selectOne();
                        };
                    };
                     
                    function ctrlSelect() {
                        setFalse("multiId");
                        item[prop] = !item[prop];
                        item.multiId = true;
                    };

                    function shiftSelect() {
                        setFalse(prop);
                        var offset = findSelectStart();
                        if (item.multiId) {
                            selectOne();
                        } else {
                            selectFrom(offset);
                        };
                    };
                    
                    function findSelectStart() {
                        for (var i = 0; i < array.length; i++) {
                            if (array[i].multiId || array[i].id === item.id) {
                                return i;
                            };
                        };
                    };

                    function selectFrom(offset) {
                        for (var i = 0; i < array.length; i++) {
                            var index = (i + offset) % array.length;
                            array[index].active = true;

                            if (array[index + 1].multiId || array[index + 1].id === item.id) {
                                array[index + 1].active = true;
                                break;
                            };
                        };
                    };

                    setAction();
                },
                selectAll: function(item, array, prop){
                    for (var i = 0; i < array.length; i++) {
                        if (!array[prop]) {
                            array[prop] = true;
                        };
                    };
                },
                deselectAll: function (array, prop) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[prop]) {
                            array[prop] = false;
                        };
                    };
                }
            }
        });
})();